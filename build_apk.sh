#!/bin/bash
set -e
cd /scratch/work
export JAVA_HOME=/scratch/work/jdk
export PATH=$JAVA_HOME/bin:$PATH
BT=/scratch/work/sdk/build-tools/34.0.0
PLAT=/scratch/work/sdk/platforms/android-35/android.jar
APP=/scratch/work/app
BUILD=/scratch/work/build
rm -rf $BUILD
mkdir -p $BUILD/compiled $BUILD/classes $BUILD/dex

echo "== aapt2 compile =="
$BT/aapt2 compile --dir $APP/res -o $BUILD/compiled/res.zip

echo "== aapt2 link =="
$BT/aapt2 link \
  -o $BUILD/base.apk \
  -I $PLAT \
  --manifest $APP/AndroidManifest.xml \
  -A $APP/assets \
  --min-sdk-version 21 \
  --target-sdk-version 34 \
  --version-code 2 \
  --version-name 1.1 \
  $BUILD/compiled/res.zip

echo "== javac =="
javac -source 8 -target 8 -bootclasspath $PLAT -d $BUILD/classes \
  $APP/src/com/studymitra/app/MainActivity.java 2>&1 | grep -v "^warning" || true

echo "== d8 =="
$BT/d8 --lib $PLAT --min-api 21 --output $BUILD/dex $(find $BUILD/classes -name '*.class')

echo "== package dex =="
cd $BUILD/dex && zip -q -X $BUILD/base.apk classes.dex && cd /scratch/work

echo "== zipalign =="
$BT/zipalign -f -p 4 $BUILD/base.apk $BUILD/aligned.apk

echo "== keystore =="
if [ ! -f /scratch/work/studymitra.keystore ]; then
keytool -genkeypair -v -keystore /scratch/work/studymitra.keystore \
  -alias studymitra -keyalg RSA -keysize 2048 -validity 10000 \
  -storepass studymitra -keypass studymitra \
  -dname "CN=StudyMitra, OU=Mobile, O=StudyMitra, L=India, S=India, C=IN" > /dev/null 2>&1
fi

echo "== sign =="
$BT/apksigner sign --ks /scratch/work/studymitra.keystore --ks-key-alias studymitra \
  --ks-pass pass:studymitra --key-pass pass:studymitra \
  --out /scratch/work/StudyMitra.apk $BUILD/aligned.apk

echo "== verify =="
$BT/apksigner verify --verbose /scratch/work/StudyMitra.apk | head -8
$BT/aapt2 dump badging /scratch/work/StudyMitra.apk | head -6
ls -lh /scratch/work/StudyMitra.apk
