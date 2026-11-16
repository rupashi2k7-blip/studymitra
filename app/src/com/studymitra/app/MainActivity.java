package com.studymitra.app;

import android.app.Activity;
import android.graphics.Color;
import android.os.Build;
import android.os.Bundle;
import android.view.KeyEvent;
import android.view.View;
import android.view.ViewGroup;
import android.webkit.WebChromeClient;
import android.webkit.WebSettings;
import android.webkit.WebView;
import android.webkit.WebViewClient;
import android.widget.LinearLayout;
import android.widget.TextView;

public class MainActivity extends Activity {

    private static final String START_URL = "file:///android_asset/www/index.html";
    private WebView web;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        try {
            if (Build.VERSION.SDK_INT >= 21) {
                getWindow().setStatusBarColor(Color.parseColor("#E85D04"));
            }
        } catch (Throwable ignored) { }

        try {
            web = new WebView(this);
            web.setBackgroundColor(Color.parseColor("#F5F6FA"));

            WebSettings s = web.getSettings();
            s.setJavaScriptEnabled(true);
            s.setDomStorageEnabled(true);
            s.setDatabaseEnabled(true);
            s.setAllowFileAccess(true);
            s.setAllowContentAccess(true);
            s.setLoadWithOverviewMode(true);
            s.setUseWideViewPort(true);
            s.setSupportZoom(false);
            s.setBuiltInZoomControls(false);
            if (Build.VERSION.SDK_INT >= 21) {
                s.setMixedContentMode(WebSettings.MIXED_CONTENT_ALWAYS_ALLOW);
            }

            web.setWebViewClient(new WebViewClient() {
                @SuppressWarnings("deprecation")
                @Override
                public void onReceivedError(WebView view, int errorCode, String description, String failingUrl) {
                    showFallback("Could not load the study material.\n\n" + description);
                }
            });
            web.setWebChromeClient(new WebChromeClient());
            web.setOverScrollMode(View.OVER_SCROLL_NEVER);

            setContentView(web);
            web.loadUrl(START_URL);
        } catch (Throwable t) {
            showFallback("The app could not start on this device.\n\n" + t);
        }
    }

    private void showFallback(String message) {
        try {
            LinearLayout box = new LinearLayout(this);
            box.setOrientation(LinearLayout.VERTICAL);
            box.setBackgroundColor(Color.parseColor("#F5F6FA"));
            box.setPadding(48, 120, 48, 48);

            TextView title = new TextView(this);
            title.setText("StudyMitra");
            title.setTextSize(22);
            title.setTextColor(Color.parseColor("#141B2D"));
            box.addView(title);

            TextView body = new TextView(this);
            body.setText(message);
            body.setTextSize(14);
            body.setTextColor(Color.parseColor("#4A5468"));
            body.setPadding(0, 24, 0, 0);
            box.addView(body);

            setContentView(box, new ViewGroup.LayoutParams(
                    ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT));
        } catch (Throwable ignored) { }
    }

    @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        if (keyCode == KeyEvent.KEYCODE_BACK && web != null && web.canGoBack()) {
            web.goBack();
            return true;
        }
        return super.onKeyDown(keyCode, event);
    }

    @Override
    protected void onDestroy() {
        try {
            if (web != null) {
                web.destroy();
                web = null;
            }
        } catch (Throwable ignored) { }
        super.onDestroy();
    }
}
