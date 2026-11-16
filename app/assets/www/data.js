/* ================= StudyMitra content data =================
   Offline study material: subjects + chapters, mock tests, GK zone.
   All content is bundled in the app; no internet needed. */

const SUBJECTS = [
  {
    id: "polity",
    name: "Indian Polity",
    icon: "\u2696\uFE0F",
    tag: "SSC \u00B7 State PSC \u00B7 Railways",
    chapters: [
      {
        id: "pol1",
        title: "Making of the Constitution",
        mins: 6,
        body: `
          <h3>Key facts</h3>
          <ul>
            <li>The Constituent Assembly was formed under the <b>Cabinet Mission Plan (1946)</b>. Its first sitting was on <b>9 December 1946</b>.</li>
            <li>The Constitution was <b>adopted on 26 November 1949</b> and came into force on <b>26 January 1950</b> (celebrated as Republic Day).</li>
            <li><b>Dr B. R. Ambedkar</b> chaired the Drafting Committee. Dr Rajendra Prasad was the President of the Constituent Assembly.</li>
            <li>The Objectives Resolution was moved by <b>Jawaharlal Nehru</b> on 13 December 1946.</li>
            <li>Originally the Constitution had <b>395 Articles, 22 Parts and 8 Schedules</b>. Today it has 470+ Articles, 25 Parts and 12 Schedules.</li>
            <li>It took <b>2 years, 11 months and 18 days</b> to complete the drafting.</li>
          </ul>
          <div class="kv"><b>Borrowed features:</b> Parliamentary system &amp; rule of law from the UK; Fundamental Rights and judicial review from the USA; Directive Principles from Ireland; emergency provisions from the Weimar Constitution of Germany; federal scheme with strong Centre from Canada; concurrent list from Australia; amendment procedure from South Africa; republic head elected indirectly from France.</div>
          <div class="tip"><b>Exam tip:</b> Questions on "which feature came from which country" are near-certain in SSC and PSC papers. Learn the table above by heart.</div>`
      },
      {
        id: "pol2",
        title: "Fundamental Rights & Duties",
        mins: 7,
        body: `
          <h3>Fundamental Rights (Part III, Articles 12\u201335)</h3>
          <ul>
            <li><b>Right to Equality</b> (Art 14\u201318): equality before law, no discrimination on grounds of religion, race, caste, sex or place of birth, abolition of untouchability (Art 17) and titles (Art 18).</li>
            <li><b>Right to Freedom</b> (Art 19\u201322): six freedoms under Art 19, protection of life and personal liberty (Art 21), right to education for children 6\u201314 years (Art 21A), protection against arrest (Art 22).</li>
            <li><b>Right against Exploitation</b> (Art 23\u201324): ban on human trafficking, forced labour and child labour below 14 years in hazardous work.</li>
            <li><b>Right to Freedom of Religion</b> (Art 25\u201328).</li>
            <li><b>Cultural &amp; Educational Rights</b> (Art 29\u201330) for minorities.</li>
            <li><b>Right to Constitutional Remedies</b> (Art 32) \u2014 called the <b>heart and soul of the Constitution</b> by Dr Ambedkar. Five writs: habeas corpus, mandamus, prohibition, certiorari, quo warranto.</li>
          </ul>
          <div class="kv"><b>Right to Property</b> was a Fundamental Right until the <b>44th Amendment (1978)</b> removed it; it is now a legal right under Art 300A.</div>
          <h3>Fundamental Duties (Art 51A)</h3>
          <ul>
            <li>Added by the <b>42nd Amendment Act, 1976</b> on the recommendation of the <b>Swaraj Paul Committee</b>. There are 11 duties today \u2014 the 11th (education of children aged 6\u201314) was added by the <b>86th Amendment, 2002</b>.</li>
            <li>Fundamental Duties apply only to citizens and are <b>not enforceable by courts</b>.</li>
          </ul>`
      },
      {
        id: "pol3",
        title: "Parliament & Legislature",
        mins: 7,
        body: `
          <h3>Composition</h3>
          <ul>
            <li><b>Lok Sabha</b>: maximum strength 552; current strength <b>543</b> elected members. Term 5 years.</li>
            <li><b>Rajya Sabha</b>: maximum 250; current <b>245</b> (233 elected by State/UT legislatures + 12 nominated by the President). It is a permanent house \u2014 one-third retires every 2 years; each member's term is 6 years.</li>
            <li>The <b>Vice-President</b> is the ex-officio Chairman of the Rajya Sabha; the Speaker heads the Lok Sabha.</li>
          </ul>
          <h3>Important Articles</h3>
          <ul>
            <li><b>Art 110</b> \u2013 Money Bill (introduced only in Lok Sabha, with the President's recommendation; the Speaker certifies it).</li>
            <li><b>Art 112</b> \u2013 Annual Financial Statement (the Union Budget).</li>
            <li><b>Art 108</b> \u2013 Joint sitting of both Houses (not for a Money Bill or a Constitution Amendment Bill).</li>
            <li><b>Art 368</b> \u2013 Procedure for amending the Constitution.</li>
            <li><b>Art 143</b> \u2013 Advisory jurisdiction of the Supreme Court.</li>
            <li><b>Art 324</b> \u2013 Election Commission; <b>Art 148</b> \u2013 Comptroller and Auditor General.</li>
          </ul>
          <div class="tip"><b>Shortcut:</b> Ordinary Bill \u2013 either House; Money Bill \u2013 Lok Sabha only; Constitution Amendment \u2013 either House but needs a special majority (and ratification by half the States for federal provisions).</div>`
      },
      {
        id: "pol4",
        title: "President, PM & Council of Ministers",
        mins: 6,
        body: `
          <ul>
            <li>The President is elected <b>indirectly</b> by an electoral college of elected MPs and elected MLAs (proportional representation by single transferable vote). Minimum age <b>35 years</b>; term 5 years.</li>
            <li>Impeachment of the President: <b>Art 61</b> \u2014 for violation of the Constitution, by a two-thirds majority of both Houses.</li>
            <li>Pardoning power: <b>Art 72</b> (President can pardon even a death sentence; the Governor's power under Art 161 cannot).</li>
            <li>The <b>Prime Minister</b> is appointed by the President and is the head of government; the Council of Ministers is collectively responsible to the Lok Sabha (Art 75).</li>
            <li>The Attorney General of India (Art 76) is the first law officer; the CAG (Art 148) is the guardian of the public purse.</li>
          </ul>
          <div class="kv"><b>Emergency provisions:</b> National emergency \u2013 Art 352; State emergency (President's Rule) \u2013 Art 356; Financial emergency \u2013 Art 360 (never imposed in India so far).</div>`
      },
      {
        id: "pol5",
        title: "Local Government & Amendments",
        mins: 5,
        body: `
          <ul>
            <li><b>73rd Amendment Act, 1992</b> gave constitutional status to <b>Panchayati Raj</b> \u2014 Part IX, Articles 243\u2013243O, Eleventh Schedule with <b>29 subjects</b>. Three-tier structure: village panchayat, panchayat samiti (block), zila parishad (district).</li>
            <li><b>74th Amendment Act, 1992</b> \u2014 urban local bodies (municipalities), Part IXA, <b>Twelfth Schedule with 18 subjects</b>.</li>
            <li>Reservation for women in panchayats: not less than <b>one-third</b> of seats; tenure fixed at 5 years.</li>
            <li><b>42nd Amendment (1976)</b> \u2014 called the "Mini Constitution"; added "socialist", "secular" and "integrity" to the Preamble and inserted Fundamental Duties.</li>
            <li><b>44th Amendment (1978)</b> \u2014 removed the right to property from Fundamental Rights and modified emergency provisions.</li>
            <li><b>101st Amendment (2016)</b> \u2014 Goods and Services Tax (GST); <b>103rd (2019)</b> \u2014 10% reservation for economically weaker sections.</li>
          </ul>`
      }
    ]
  },
  {
    id: "history",
    name: "Modern Indian History",
    icon: "\uD83C\uDFDB\uFE0F",
    tag: "SSC \u00B7 Railways \u00B7 State PSC",
    chapters: [
      {
        id: "his1",
        title: "Revolt of 1857",
        mins: 6,
        body: `
          <ul>
            <li>Started on <b>10 May 1857 at Meerut</b>; the immediate trigger was the greased cartridge issue. <b>Mangal Pandey</b> had revolted earlier at Barrackpore on 29 March 1857.</li>
            <li>Centre and leaders: <b>Delhi</b> \u2013 Bahadur Shah Zafar (nominal leader); <b>Kanpur</b> \u2013 Nana Saheb; <b>Lucknow</b> \u2013 Begum Hazrat Mahal; <b>Jhansi</b> \u2013 Rani Lakshmibai; <b>Bihar</b> \u2013 Kunwar Singh; <b>Bareilly</b> \u2013 Khan Bahadur Khan.</li>
            <li>Called the <b>First War of Indian Independence</b> by V. D. Savarkar; Sir John Seeley called it a "wholly unpatriotic and selfish sepoy mutiny".</li>
            <li>Result: the <b>Government of India Act, 1858</b> abolished the East India Company; the Crown took over; <b>Lord Canning</b> became the first Viceroy.</li>
          </ul>
          <div class="tip"><b>Remember:</b> 1857 \u2192 Company rule ends; 1858 \u2192 Crown rule begins; 1876 \u2192 Queen Victoria proclaimed Empress of India.</div>`
      },
      {
        id: "his2",
        title: "National Movement Milestones",
        mins: 8,
        body: `
          <ul>
            <li><b>1885</b> \u2013 Indian National Congress founded at Bombay; first President <b>W. C. Bonnerjee</b>; 72 delegates; founded with the help of A. O. Hume.</li>
            <li><b>1905</b> \u2013 Partition of Bengal by Lord Curzon; the Swadeshi and Boycott movement followed.</li>
            <li><b>1906</b> \u2013 Muslim League founded at Dhaka; <b>1907</b> \u2013 Congress split at Surat (Moderates vs Extremists).</li>
            <li><b>1919</b> \u2013 Rowlatt Act; <b>Jallianwala Bagh massacre</b> at Amritsar on <b>13 April 1919</b> (General Dyer).</li>
            <li><b>1920</b> \u2013 Non-Cooperation Movement launched by Gandhi; <b>1922</b> \u2013 Chauri Chaura incident, movement withdrawn.</li>
            <li><b>1928</b> \u2013 Simon Commission boycotted ("Simon Go Back"); <b>1929</b> \u2013 Lahore session, Purna Swaraj resolution, tricolour hoisted on the banks of the Ravi by Nehru.</li>
            <li><b>1930</b> \u2013 <b>Dandi March</b>: 12 March to 6 April, Sabarmati to Dandi, about 385 km (240 miles), 24 days, to break the salt law.</li>
            <li><b>1932</b> \u2013 Poona Pact between Gandhi and Ambedkar on separate electorates.</li>
            <li><b>1942</b> \u2013 <b>Quit India Movement</b> launched on 8 August at Bombay; slogan "Do or Die".</li>
            <li><b>1947</b> \u2013 Indian Independence Act passed by the British Parliament; India independent on 15 August 1947.</li>
          </ul>`
      },
      {
        id: "his3",
        title: "Governors-General & Viceroys",
        mins: 5,
        body: `
          <ul>
            <li><b>Warren Hastings</b> (1773\u20131785) \u2013 first Governor-General of Bengal.</li>
            <li><b>Lord William Bentinck</b> (1828\u20131835) \u2013 first Governor-General of India; abolished Sati (1829); banned child sacrifice.</li>
            <li><b>Lord Dalhousie</b> (1848\u20131856) \u2013 Doctrine of Lapse; first railway line (Bombay to Thane, 1853); first telegraph line; Wood's Despatch (1854).</li>
            <li><b>Lord Canning</b> (1856\u20131862) \u2013 last Governor-General and first Viceroy; Universities of Calcutta, Bombay and Madras (1857).</li>
            <li><b>Lord Ripon</b> (1880\u20131884) \u2013 known as the "Father of Local Self-Government"; Ilbert Bill; Hunter Commission on education.</li>
            <li><b>Lord Curzon</b> (1899\u20131905) \u2013 Partition of Bengal (1905); Archaeological Survey of India revived.</li>
          </ul>
          <div class="kv"><b>Societies:</b> Brahmo Samaj \u2013 Raja Ram Mohan Roy (1828); Arya Samaj \u2013 Swami Dayanand Saraswati (1875); Ramakrishna Mission \u2013 Swami Vivekananda (1897); Servants of India Society \u2013 Gopal Krishna Gokhale (1905).</div>`
      }
    ]
  },
  {
    id: "geography",
    name: "Indian Geography",
    icon: "\uD83C\uDF0F",
    tag: "All exams \u00B7 High weightage",
    chapters: [
      {
        id: "geo1",
        title: "Physical Features",
        mins: 7,
        body: `
          <ul>
            <li>India's landmass is about <b>3.28 million sq km</b> \u2014 the 7th largest country; coastline about <b>7,516 km</b>.</li>
            <li>Physiographic divisions: Himalayas, Indo-Gangetic Plain, Peninsular Plateau, Coastal Plains, Thar Desert and Islands.</li>
            <li>Highest peak entirely within India: <b>Kangchenjunga</b> (8,586 m, Sikkim). Highest peak of the Western Ghats and of South India: <b>Anamudi</b> (2,695 m, Kerala).</li>
            <li>The <b>Tropic of Cancer</b> passes through 8 states: Gujarat, Rajasthan, Madhya Pradesh, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram.</li>
            <li>The <b>Standard Meridian of India is 82\u00B030'E</b>, which passes through Mirzapur in Uttar Pradesh; IST = GMT + 5:30.</li>
            <li>Largest freshwater lake: <b>Wular</b> (Jammu &amp; Kashmir). Largest saltwater lake: <b>Chilika</b> (Odisha). Largest river island: <b>Majuli</b> (Assam).</li>
          </ul>`
      },
      {
        id: "geo2",
        title: "Rivers & Drainage",
        mins: 6,
        body: `
          <ul>
            <li><b>Ganga</b> \u2013 longest river of India (about 2,525 km), rises at Gangotri (Devprayag is where Bhagirathi and Alaknanda meet).</li>
            <li><b>Brahmaputra</b> \u2013 known as Tsangpo in Tibet and Dihang/Siang in Arunachal; one of the longest rivers in the world.</li>
            <li><b>Godavari</b> \u2013 longest peninsular river ("Dakshin Ganga"), rises at Trimbakeshwar in Maharashtra.</li>
            <li><b>Narmada</b> and <b>Tapi</b> \u2013 west-flowing rivers that form estuaries, not deltas.</li>
            <li>Himalayan rivers are perennial (snow-fed); peninsular rivers are rain-fed and seasonal.</li>
            <li>Major dams: Bhakra Nangal on the Sutlej, Hirakud on the Mahanadi (longest dam in India), Sardar Sarovar on the Narmada, Tehri on the Bhagirathi.</li>
          </ul>
          <div class="tip"><b>Trick:</b> West-flowing rivers (Narmada, Tapi, Mahi, Sabarmati, Periyar) \u2192 no deltas. East-flowing (Ganga, Mahanadi, Godavari, Krishna, Kaveri) \u2192 deltas.</div>`
      },
      {
        id: "geo3",
        title: "Climate, Soil & Agriculture",
        mins: 6,
        body: `
          <ul>
            <li>India has a <b>tropical monsoon climate</b>. The southwest monsoon (June\u2013September) brings about 75% of annual rainfall; the retreating monsoon affects Tamil Nadu in October\u2013November.</li>
            <li>Wettest places: <b>Mawsynram and Cherrapunji</b> (Meghalaya). Driest: Jaisalmer region of Rajasthan.</li>
            <li><b>Alluvial soil</b> is the most extensive (about 43% of area) and most fertile \u2014 found in the northern plains and coastal deltas.</li>
            <li><b>Black (regur) soil</b> \u2013 from Deccan lava, ideal for cotton. <b>Red soil</b> \u2013 crystalline rocks. <b>Laterite soil</b> \u2013 heavy rainfall areas, used for tea, coffee, cashew.</li>
            <li>Main kharif crops: rice, maize, jowar, bajra, cotton, sugarcane. Main rabi crops: wheat, gram, mustard, barley.</li>
            <li>India is the largest producer of milk, pulses, jute and spices; second largest producer of rice, wheat, sugarcane and cotton.</li>
          </ul>`
      },
      {
        id: "geo4",
        title: "Minerals, Industry & States",
        mins: 5,
        body: `
          <ul>
            <li><b>Iron ore</b>: Odisha, Chhattisgarh, Karnataka, Jharkhand. <b>Coal</b>: Jharkhand, Odisha, Chhattisgarh, West Bengal (Jharia, Raniganj, Korba).</li>
            <li><b>Mica</b>: Jharkhand (Koderma) and Andhra Pradesh \u2014 India is a leading producer. <b>Manganese</b>: Odisha, Madhya Pradesh, Maharashtra.</li>
            <li>Petroleum: Bombay High (offshore Maharashtra), Ankleshwar and Kalol (Gujarat), Digboi (Assam \u2014 oldest oil field).</li>
            <li>Steel plants: Bhilai (Chhattisgarh), Rourkela (Odisha), Durgapur (West Bengal), Bokaro (Jharkhand), Jamshedpur (Jharkhand, private \u2014 Tata).</li>
            <li>Largest state by area: <b>Rajasthan</b>; smallest: <b>Goa</b>. Largest by population: <b>Uttar Pradesh</b>.</li>
          </ul>`
      }
    ]
  },
  {
    id: "science",
    name: "General Science",
    icon: "\uD83D\uDD2C",
    tag: "SSC \u00B7 Railways \u00B7 Banking",
    chapters: [
      {
        id: "sci1",
        title: "Physics Basics",
        mins: 6,
        body: `
          <ul>
            <li><b>Newton's laws:</b> 1st \u2013 inertia; 2nd \u2013 F = ma; 3rd \u2013 every action has an equal and opposite reaction.</li>
            <li>SI unit of force is the <b>newton</b>, of work and energy the <b>joule</b>, of power the <b>watt</b>, of pressure the <b>pascal</b>.</li>
            <li>Speed of light in vacuum \u2248 <b>3 \u00D7 10\u2078 m/s</b>; speed of sound in air \u2248 343 m/s at room temperature (much faster in solids).</li>
            <li>Seven SI base units: metre, kilogram, second, ampere, kelvin, mole, candela.</li>
            <li>Sound cannot travel in vacuum; it travels fastest in solids, slowest in gases.</li>
            <li>An object floats if its density is less than the liquid's; ice floats on water because its density is lower.</li>
          </ul>
          <div class="kv"><b>Everyday physics:</b> Pressure cooker works at higher pressure (higher boiling point); a rainbow forms by refraction and dispersion of light; a rear-view mirror is convex; a dentist's mirror is concave.</div>`
      },
      {
        id: "sci2",
        title: "Chemistry Basics",
        mins: 6,
        body: `
          <ul>
            <li>pH scale 0\u201314: below 7 acidic, 7 neutral, above 7 basic. Litmus turns red in acid, blue in base.</li>
            <li><b>Baking soda</b> = sodium bicarbonate (NaHCO\u2083); <b>washing soda</b> = Na\u2082CO\u2083\u00B710H\u2082O; <b>common salt</b> = NaCl; <b>quicklime</b> = CaO; <b>slaked lime</b> = Ca(OH)\u2082; <b>plaster of Paris</b> = CaSO\u2084\u00B7\u00BDH\u2082O.</li>
            <li><b>Vinegar</b> is a dilute solution of acetic acid; <b>lemon</b> contains citric acid; <b>tamarind</b> contains tartaric acid; <b>curd</b> contains lactic acid.</li>
            <li>Most abundant element in the earth's crust: <b>oxygen</b>; most abundant metal: <b>aluminium</b>; most abundant gas in the atmosphere: <b>nitrogen</b> (~78%).</li>
            <li>Atomic number = number of protons; mass number = protons + neutrons. Isotopes have the same atomic number but different mass numbers.</li>
            <li>Chemical name of vitamin C is ascorbic acid; of vitamin B1 thiamine.</li>
          </ul>`
      },
      {
        id: "sci3",
        title: "Biology & Human Body",
        mins: 7,
        body: `
          <ul>
            <li>The <b>cell</b> is the basic unit of life; the <b>mitochondrion</b> is the powerhouse of the cell; the <b>nucleus</b> contains DNA.</li>
            <li><b>Photosynthesis</b> takes place in chloroplasts using chlorophyll, sunlight, CO\u2082 and water, releasing oxygen.</li>
            <li>Adult human body: <b>206 bones</b>; longest bone <b>femur</b>; smallest bone <b>stapes</b> (ear); largest gland <b>liver</b>; largest organ skin.</li>
            <li>Blood: red cells carry oxygen through haemoglobin (iron); white cells fight infection; platelets help clotting. Normal RBC life about 120 days; blood pH \u2248 7.4.</li>
            <li>Heart has 4 chambers; normal blood pressure about 120/80 mm Hg; the human heart beats about 72 times a minute at rest.</li>
            <li>Deficiency diseases: vitamin A \u2013 night blindness; B1 \u2013 beriberi; C \u2013 scurvy; D \u2013 rickets; iron \u2013 anaemia; iodine \u2013 goitre.</li>
            <li>Blood groups: A, B, AB, O. <b>O negative</b> is the universal donor, <b>AB positive</b> the universal recipient.</li>
          </ul>`
      }
    ]
  },
  {
    id: "maths",
    name: "Quantitative Aptitude",
    icon: "\uD83D\uDCD0",
    tag: "SSC \u00B7 Banking \u00B7 Railways",
    chapters: [
      {
        id: "mat1",
        title: "Percentage & Profit-Loss",
        mins: 7,
        body: `
          <h3>Formulas</h3>
          <ul>
            <li>Percentage change = (change \u00F7 original) \u00D7 100.</li>
            <li><b>Profit % = (Profit \u00F7 CP) \u00D7 100</b>; Loss % = (Loss \u00F7 CP) \u00D7 100. Profit and loss are always calculated on cost price unless stated otherwise.</li>
            <li>Selling price from marked price: SP = MP \u00D7 (100 \u2212 discount%) \u00F7 100.</li>
            <li>If two successive discounts of a% and b%: net discount = a + b \u2212 (ab \u00F7 100) percent.</li>
            <li>If an article is sold at a profit of x%, then SP = CP \u00D7 (100 + x) \u00F7 100.</li>
          </ul>
          <div class="kv"><b>Worked example:</b> A book bought for \u20B9400 is sold for \u20B9500. Profit = \u20B9100, so profit % = 100/400 \u00D7 100 = <b>25%</b>.</div>
          <div class="tip"><b>Shortcut:</b> CP : SP = 100 : (100 + profit%) or 100 : (100 \u2212 loss%). If CP : SP = 4 : 5, profit is 25%.</div>`
      },
      {
        id: "mat2",
        title: "Interest, Average & Ratio",
        mins: 6,
        body: `
          <ul>
            <li><b>Simple Interest</b> = P \u00D7 R \u00D7 T \u00F7 100.</li>
            <li><b>Compound Interest</b> = P(1 + R/100)\u1D40 \u2212 P; for half-yearly compounding use R/2 and 2T.</li>
            <li>Rule of 72: money doubles in roughly 72 \u00F7 rate years at compound interest.</li>
            <li><b>Average</b> = sum of values \u00F7 number of values. If every value is increased by x, the average increases by x.</li>
            <li>Average of first n natural numbers = (n + 1) \u00F7 2; average of first n odd numbers = n.</li>
            <li>Ratio a : b means a/b. If a : b = 2 : 3 and b : c = 4 : 5, then a : b : c = 8 : 12 : 15.</li>
          </ul>
          <div class="kv"><b>Worked example:</b> \u20B95,000 at 8% simple interest for 3 years \u2192 SI = 5000 \u00D7 8 \u00D7 3 \u00F7 100 = <b>\u20B91,200</b>.</div>`
      },
      {
        id: "mat3",
        title: "Time-Work & Speed-Distance",
        mins: 6,
        body: `
          <ul>
            <li>If A finishes a work in x days, A's one-day work = 1/x. Combined work: 1/x + 1/y = 1/total days.</li>
            <li>If A is twice as efficient as B, the ratio of time taken is 1 : 2.</li>
            <li><b>Speed = Distance \u00F7 Time</b>. To convert km/h to m/s, multiply by 5/18; m/s to km/h, multiply by 18/5.</li>
            <li>Train crossing a pole: time = length of train \u00F7 speed. Crossing a platform: time = (length of train + length of platform) \u00F7 speed.</li>
            <li>Upstream speed = boat speed \u2212 stream speed; downstream = boat speed + stream speed.</li>
            <li>Average speed for equal distances = 2xy \u00F7 (x + y), not (x + y) \u00F7 2.</li>
          </ul>
          <div class="tip"><b>Memory hook:</b> "Work adds, time divides" \u2014 always convert days into one-day work before adding.</div>`
      }
    ]
  },
  {
    id: "reasoning",
    name: "Reasoning Ability",
    icon: "\uD83E\uDDE9",
    tag: "SSC \u00B7 Banking \u00B7 Railways",
    chapters: [
      {
        id: "rea1",
        title: "Series & Analogy",
        mins: 5,
        body: `
          <ul>
            <li>Number series: check differences first, then ratios, then squares/cubes, then alternating patterns.</li>
            <li>Example: 2, 6, 12, 20, 30 \u2192 differences 4, 6, 8, 10 \u2192 next difference 12 \u2192 answer 42.</li>
            <li>Alphabet positions: A=1 ... Z=26. Remember <b>EJOTY</b> \u2013 E=5, J=10, O=15, T=20, Y=25.</li>
            <li>Opposite letters (sum 27): A\u2013Z, B\u2013Y, C\u2013X, D\u2013W, E\u2013V, F\u2013U, G\u2013T, H\u2013S, I\u2013R, J\u2013Q, K\u2013P, L\u2013O, M\u2013N.</li>
            <li>Analogy: find the relationship (part\u2013whole, cause\u2013effect, synonym, worker\u2013workplace) and apply the same to the second pair.</li>
          </ul>`
      },
      {
        id: "rea2",
        title: "Coding-Decoding & Blood Relations",
        mins: 6,
        body: `
          <h3>Coding-Decoding</h3>
          <ul>
            <li>Letter-shift coding: each letter moves forward or backward by a fixed number.</li>
            <li>Example: if CAT = DBU (each letter +1), then DOG = EPH.</li>
            <li>Reverse coding: A becomes Z, B becomes Y (position 27 \u2212 position).</li>
            <li>Number coding: convert letters to their positions and add or multiply.</li>
          </ul>
          <h3>Blood Relations</h3>
          <ul>
            <li>Draw a family tree; use + for male and \u2212 for female, horizontal line for siblings, vertical for parent\u2013child.</li>
            <li>"A's father's sister" = aunt; "mother's brother" = maternal uncle; "father's brother's son" = cousin.</li>
            <li>Never assume gender from a name \u2014 rely only on words like son, daughter, brother, sister, wife, husband.</li>
          </ul>`
      },
      {
        id: "rea3",
        title: "Direction & Syllogism",
        mins: 5,
        body: `
          <h3>Direction Sense</h3>
          <ul>
            <li>Draw the path on paper with North up. Left turn from North = West; right turn from North = East.</li>
            <li>Shortest distance after moving a and b at right angles = \u221A(a\u00B2 + b\u00B2) (Pythagoras).</li>
            <li>Morning shadow falls to the west; evening shadow to the east.</li>
          </ul>
          <h3>Syllogism</h3>
          <ul>
            <li>"All A are B" \u2192 A is inside B. "Some A are B" \u2192 the circles overlap. "No A is B" \u2192 the circles are separate.</li>
            <li>Draw Venn diagrams and test each conclusion; a conclusion is valid only if it is true in <b>every</b> possible diagram.</li>
            <li>Two particular premises ("some...") cannot give a universal conclusion.</li>
          </ul>`
      }
    ]
  },
  {
    id: "english",
    name: "English Language",
    icon: "\uD83D\uDCDD",
    tag: "SSC \u00B7 Banking \u00B7 CDS",
    chapters: [
      {
        id: "eng1",
        title: "Tenses & Subject-Verb Agreement",
        mins: 6,
        body: `
          <ul>
            <li>Simple present for habits and universal truths: "The sun <b>rises</b> in the east."</li>
            <li>Present perfect (has/have + V3) for an action whose time is not stated; simple past for a stated past time.</li>
            <li>Past perfect (had + V3) for the earlier of two past actions.</li>
            <li>Subject-verb agreement: singular subject takes a singular verb. "One of the boys <b>is</b> absent." "Each of the students <b>has</b> a book."</li>
            <li>With "either...or" and "neither...nor", the verb agrees with the nearer subject.</li>
            <li>Uncountable nouns (information, furniture, advice, luggage, news) take singular verbs and no plural form.</li>
          </ul>`
      },
      {
        id: "eng2",
        title: "Articles, Prepositions & Idioms",
        mins: 6,
        body: `
          <h3>Articles</h3>
          <ul>
            <li>"a" before consonant sounds (a university, a European), "an" before vowel sounds (an hour, an MLA).</li>
            <li>"the" with unique things (the sun), superlatives (the best), rivers, seas, mountain ranges and newspapers.</li>
            <li>No article before proper nouns, abstract nouns used generally, and names of languages.</li>
          </ul>
          <h3>Prepositions</h3>
          <ul>
            <li>at (point of time/place), on (day/date/surface), in (month, year, enclosed space).</li>
            <li>Fixed pairs: depend <b>on</b>, angry <b>with</b> a person but angry <b>at</b> a thing, married <b>to</b>, superior <b>to</b>, prefer <b>to</b>, congratulate <b>on</b>.</li>
          </ul>
          <h3>Idioms</h3>
          <ul>
            <li><b>A piece of cake</b> \u2013 very easy. <b>Once in a blue moon</b> \u2013 very rarely. <b>To let the cat out of the bag</b> \u2013 to reveal a secret. <b>At the drop of a hat</b> \u2013 immediately. <b>To burn the midnight oil</b> \u2013 to study or work late.</li>
          </ul>`
      },
      {
        id: "eng3",
        title: "Error Spotting & Vocabulary",
        mins: 5,
        body: `
          <ul>
            <li>Check the five usual suspects: subject-verb agreement, tense consistency, article use, preposition pair, pronoun agreement.</li>
            <li>Comparatives: use "than" with a comparative (better than), "to" with superior/inferior/prior.</li>
            <li>Double negatives are wrong: "I don't know nothing" \u2192 "I don't know anything".</li>
            <li>Synonyms: abundant \u2013 plentiful; candid \u2013 frank; diligent \u2013 hard-working; lucid \u2013 clear.</li>
            <li>Antonyms: abundant \u2013 scarce; candid \u2013 evasive; diligent \u2013 lazy; lucid \u2013 confusing.</li>
            <li>One-word substitutions: one who knows everything \u2013 <b>omniscient</b>; a place where books are kept \u2013 <b>library</b>; government by the people \u2013 <b>democracy</b>; one who cannot read or write \u2013 <b>illiterate</b>.</li>
          </ul>`
      }
    ]
  }
];

/* ===================== MOCK TESTS ===================== */
const TESTS = [
  {
    id: "t1",
    title: "SSC CGL \u2013 Free Mock Test 1",
    exam: "SSC CGL",
    qcount: 10,
    mins: 10,
    tag: "Free Mock",
    desc: "Mixed GK, polity and science questions",
    questions: [
      { q: "The Constitution of India was adopted on which date?", o: ["26 January 1950", "26 November 1949", "15 August 1947", "9 December 1946"], a: 1, e: "It was adopted on 26 November 1949 (Constitution Day) and came into force on 26 January 1950." },
      { q: "Who is known as the chief architect of the Indian Constitution?", o: ["Jawaharlal Nehru", "Dr Rajendra Prasad", "Dr B. R. Ambedkar", "Sardar Patel"], a: 2, e: "Dr B. R. Ambedkar chaired the Drafting Committee and is called the chief architect of the Constitution." },
      { q: "Which Article of the Constitution deals with the Right to Constitutional Remedies?", o: ["Article 19", "Article 21", "Article 32", "Article 44"], a: 2, e: "Article 32 is called the heart and soul of the Constitution by Dr Ambedkar." },
      { q: "The Tropic of Cancer does NOT pass through which of these states?", o: ["Rajasthan", "Jharkhand", "Kerala", "Mizoram"], a: 2, e: "It passes through Gujarat, Rajasthan, MP, Chhattisgarh, Jharkhand, West Bengal, Tripura and Mizoram \u2014 not Kerala." },
      { q: "The Revolt of 1857 started from which place?", o: ["Meerut", "Delhi", "Kanpur", "Jhansi"], a: 0, e: "It began on 10 May 1857 at Meerut." },
      { q: "Which gas is most abundant in the earth's atmosphere?", o: ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"], a: 1, e: "Nitrogen makes up about 78% of the atmosphere, oxygen about 21%." },
      { q: "The 'powerhouse of the cell' is the:", o: ["Nucleus", "Ribosome", "Mitochondrion", "Golgi body"], a: 2, e: "Mitochondria produce energy in the form of ATP, so they are called the powerhouse of the cell." },
      { q: "Baking soda is chemically known as:", o: ["Sodium carbonate", "Sodium bicarbonate", "Calcium carbonate", "Sodium chloride"], a: 1, e: "Baking soda is sodium bicarbonate (NaHCO3)." },
      { q: "Who was the first Viceroy of India?", o: ["Lord William Bentinck", "Lord Canning", "Lord Dalhousie", "Lord Ripon"], a: 1, e: "Lord Canning was the last Governor-General and the first Viceroy, after the Government of India Act 1858." },
      { q: "The Dandi March was launched in which year?", o: ["1920", "1930", "1942", "1919"], a: 1, e: "Gandhi began the Dandi March on 12 March 1930 to break the salt law." }
    ]
  },
  {
    id: "t2",
    title: "Banking Awareness \u2013 Set 1",
    exam: "Banking",
    qcount: 10,
    mins: 10,
    tag: "Free Mock",
    desc: "RBI, schemes and financial awareness",
    questions: [
      { q: "Which institution issues currency notes in India (except one-rupee notes and coins)?", o: ["Ministry of Finance", "Reserve Bank of India", "State Bank of India", "SEBI"], a: 1, e: "The RBI issues all notes except the one-rupee note, which is issued by the Ministry of Finance." },
      { q: "The minimum reserve system followed by the RBI requires backing of assets worth:", o: ["\u20B9200 crore", "\u20B9500 crore", "\u20B91,000 crore", "\u20B92,000 crore"], a: 0, e: "Since 1957 India follows the minimum reserve system of \u20B9200 crore (gold \u20B9115 crore + foreign securities \u20B985 crore)." },
      { q: "What does 'repo rate' mean?", o: ["Rate at which banks lend to customers", "Rate at which RBI lends short-term funds to banks", "Rate at which RBI borrows from banks", "Interest on savings accounts"], a: 1, e: "Repo rate is the rate at which the RBI lends short-term money to commercial banks against securities." },
      { q: "PM-KISAN provides income support of:", o: ["\u20B94,000 per year", "\u20B96,000 per year", "\u20B98,000 per year", "\u20B910,000 per year"], a: 1, e: "\u20B96,000 per year in three instalments of \u20B92,000 to eligible farmer families." },
      { q: "Ayushman Bharat PM-JAY gives health cover of:", o: ["\u20B91 lakh per family per year", "\u20B92 lakh per family per year", "\u20B95 lakh per family per year", "\u20B910 lakh per family per year"], a: 2, e: "It provides \u20B95 lakh per family per year for secondary and tertiary hospitalisation." },
      { q: "Which is the oldest bank in India still in operation?", o: ["State Bank of India", "Allahabad Bank", "Bank of Baroda", "Punjab National Bank"], a: 0, e: "SBI traces its origin to the Bank of Calcutta (1806), later the Bank of Bengal \u2014 the oldest surviving banking lineage in India." },
      { q: "MGNREGA guarantees how many days of wage employment per household per year?", o: ["50 days", "75 days", "100 days", "150 days"], a: 2, e: "At least 100 days of unskilled wage employment per rural household per financial year." },
      { q: "Who regulates the securities market in India?", o: ["RBI", "SEBI", "IRDAI", "NABARD"], a: 1, e: "SEBI, set up in 1988 and given statutory powers in 1992, regulates the securities market." },
      { q: "The term 'NPA' in banking stands for:", o: ["Non-Payable Amount", "Non-Performing Asset", "New Public Account", "Net Provision Amount"], a: 1, e: "A Non-Performing Asset is a loan on which principal or interest is overdue for more than 90 days." },
      { q: "Jan Dhan Yojana was launched in which year?", o: ["2012", "2014", "2015", "2016"], a: 1, e: "The Pradhan Mantri Jan Dhan Yojana was launched on 28 August 2014 for financial inclusion." }
    ]
  },
  {
    id: "t3",
    title: "Railway NTPC \u2013 Mini Mock",
    exam: "Railways",
    qcount: 10,
    mins: 10,
    tag: "Free Mock",
    desc: "GK, science and maths mixed set",
    questions: [
      { q: "Which is the longest river of India?", o: ["Godavari", "Ganga", "Brahmaputra", "Narmada"], a: 1, e: "The Ganga is the longest river flowing within India, about 2,525 km." },
      { q: "The Standard Meridian of India passes through:", o: ["Delhi", "Mirzapur", "Kolkata", "Nagpur"], a: 1, e: "82\u00B030'E passes through Mirzapur in Uttar Pradesh." },
      { q: "SI unit of pressure is:", o: ["Newton", "Joule", "Pascal", "Watt"], a: 2, e: "Pressure = force \u00F7 area, measured in pascals (N/m\u00B2)." },
      { q: "Which vitamin deficiency causes scurvy?", o: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"], a: 2, e: "Scurvy is caused by a deficiency of vitamin C (ascorbic acid)." },
      { q: "The largest gland in the human body is the:", o: ["Pancreas", "Liver", "Thyroid", "Spleen"], a: 1, e: "The liver is the largest gland and also the largest internal organ." },
      { q: "A train covers 120 km in 2 hours. Its speed is:", o: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"], a: 1, e: "Speed = distance \u00F7 time = 120 \u00F7 2 = 60 km/h." },
      { q: "If the cost price is \u20B9800 and selling price is \u20B9920, the profit percentage is:", o: ["10%", "12%", "15%", "18%"], a: 2, e: "Profit = \u20B9120; 120/800 \u00D7 100 = 15%." },
      { q: "Which soil is best suited for cotton cultivation?", o: ["Alluvial soil", "Black soil", "Laterite soil", "Red soil"], a: 1, e: "Black (regur) soil, formed from Deccan lava, retains moisture and is ideal for cotton." },
      { q: "Who founded the Ramakrishna Mission?", o: ["Raja Ram Mohan Roy", "Swami Vivekananda", "Dayanand Saraswati", "Ishwar Chandra Vidyasagar"], a: 1, e: "Swami Vivekananda founded the Ramakrishna Mission in 1897." },
      { q: "The 42nd Amendment to the Constitution is known as the:", o: ["Mini Constitution", "Anti-Defection Act", "Right to Education Act", "Panchayati Raj Amendment"], a: 0, e: "The 42nd Amendment (1976) made wide changes and is called the Mini Constitution." }
    ]
  },
  {
    id: "t4",
    title: "Quant Practice \u2013 Percentage & Profit-Loss",
    exam: "Quant",
    qcount: 8,
    mins: 8,
    tag: "Practice",
    desc: "Speed practice set with solutions",
    questions: [
      { q: "What is 15% of 240?", o: ["32", "36", "38", "42"], a: 1, e: "10% of 240 = 24, 5% = 12, so 15% = 36." },
      { q: "An article bought for \u20B9500 is sold for \u20B9450. The loss percentage is:", o: ["5%", "8%", "10%", "12%"], a: 2, e: "Loss = \u20B950; 50/500 \u00D7 100 = 10%." },
      { q: "A shopkeeper marks an item 40% above cost and gives a 25% discount. His profit percentage is:", o: ["5%", "10%", "15%", "20%"], a: 0, e: "Take CP = 100, MP = 140, SP = 140 \u00D7 0.75 = 105, so profit = 5%." },
      { q: "The simple interest on \u20B92,000 at 5% per annum for 4 years is:", o: ["\u20B9300", "\u20B9400", "\u20B9500", "\u20B9600"], a: 1, e: "SI = 2000 \u00D7 5 \u00D7 4 \u00F7 100 = \u20B9400." },
      { q: "The average of 10, 20, 30, 40 and 50 is:", o: ["25", "30", "35", "40"], a: 1, e: "Sum = 150, count = 5, average = 30." },
      { q: "If a : b = 3 : 4 and b : c = 8 : 9, then a : c is:", o: ["2 : 3", "3 : 4", "4 : 9", "1 : 2"], a: 0, e: "a : b : c = 24 : 32 : 36 = 6 : 8 : 9, so a : c = 6 : 9 = 2 : 3." },
      { q: "A can do a work in 12 days and B in 6 days. Working together they finish it in:", o: ["3 days", "4 days", "5 days", "6 days"], a: 1, e: "1/12 + 1/6 = 3/12 = 1/4, so 4 days." },
      { q: "A number increased by 20% becomes 240. The original number is:", o: ["180", "192", "200", "210"], a: 2, e: "1.2x = 240, so x = 200." }
    ]
  },
  {
    id: "t5",
    title: "Reasoning Practice \u2013 Series & Coding",
    exam: "Reasoning",
    qcount: 8,
    mins: 8,
    tag: "Practice",
    desc: "Pattern-based practice set",
    questions: [
      { q: "Find the next term: 3, 6, 11, 18, 27, ?", o: ["36", "38", "39", "40"], a: 1, e: "Differences are 3, 5, 7, 9, so the next difference is 11: 27 + 11 = 38." },
      { q: "If in a code language CAT is written as DBU, how is DOG written?", o: ["EPH", "EQH", "EPG", "FPH"], a: 0, e: "Each letter moves one step forward: D\u2192E, O\u2192P, G\u2192H." },
      { q: "Complete the series: 2, 6, 12, 20, 30, ?", o: ["36", "40", "42", "44"], a: 2, e: "Differences 4, 6, 8, 10 \u2192 next 12, so 30 + 12 = 42." },
      { q: "A is the father of B. B is the sister of C. C is the son of D. How is A related to D?", o: ["Brother", "Son", "Husband", "Father"], a: 2, e: "A is the father of B and C, and D is their mother, so A is D's husband." },
      { q: "A man walks 5 km north, turns right and walks 3 km, then turns right and walks 5 km. How far is he from the start?", o: ["3 km", "5 km", "8 km", "13 km"], a: 0, e: "He ends up 3 km east of the starting point." },
      { q: "Which letter is 5th to the right of the 10th letter from the left in the English alphabet?", o: ["M", "N", "O", "P"], a: 2, e: "10th letter is J; 5 to the right is O." },
      { q: "If FRIEND is coded as HTKGPF, the code shifts each letter by:", o: ["+1", "+2", "+3", "\u22121"], a: 1, e: "F\u2192H, R\u2192T, I\u2192K: each letter moves two places forward." },
      { q: "Statement: All pens are books. Some books are red. Conclusion: Some pens are red. This conclusion is:", o: ["Definitely true", "Definitely false", "Not necessarily true", "Cannot be judged"], a: 2, e: "The red books may not include any pen, so the conclusion does not follow." }
    ]
  },
  {
    id: "t6",
    title: "Polity Chapter Test",
    exam: "Polity",
    qcount: 8,
    mins: 8,
    tag: "Chapter Test",
    desc: "Quick test on the Polity notes",
    questions: [
      { q: "The Directive Principles of State Policy are contained in:", o: ["Part III", "Part IV", "Part V", "Part VI"], a: 1, e: "Part IV, Articles 36\u201351, contains the Directive Principles; they are non-justiciable." },
      { q: "Which amendment added the words 'socialist' and 'secular' to the Preamble?", o: ["24th", "42nd", "44th", "52nd"], a: 1, e: "The 42nd Amendment Act, 1976 added socialist, secular and integrity." },
      { q: "The maximum strength of the Lok Sabha as provided by the Constitution is:", o: ["500", "543", "545", "552"], a: 3, e: "The Constitution allows a maximum of 552 members; the current strength is 543." },
      { q: "Money Bills can be introduced only in:", o: ["Rajya Sabha", "Lok Sabha", "Either House", "A joint sitting"], a: 1, e: "Under Article 110 a Money Bill can start only in the Lok Sabha, on the President's recommendation." },
      { q: "Panchayati Raj was given constitutional status by which amendment?", o: ["61st", "73rd", "74th", "86th"], a: 1, e: "The 73rd Amendment Act, 1992 added Part IX and the Eleventh Schedule." },
      { q: "The minimum age to become President of India is:", o: ["25 years", "30 years", "35 years", "40 years"], a: 2, e: "A candidate must be at least 35 years old." },
      { q: "Which writ means 'to have the body of'?", o: ["Mandamus", "Certiorari", "Habeas corpus", "Quo warranto"], a: 2, e: "Habeas corpus protects against illegal detention." },
      { q: "Fundamental Duties were added on the recommendation of which committee?", o: ["Sarkaria Commission", "Swaraj Paul Committee", "Balwant Rai Mehta Committee", "Ashok Mehta Committee"], a: 1, e: "The Swaraj Paul Committee recommended Fundamental Duties; they were added by the 42nd Amendment." }
    ]
  }
];

/* ===================== DAILY QUIZ POOL ===================== */
const DAILY_POOL = [
  { q: "Who was the first President of India?", o: ["Dr Rajendra Prasad", "Dr S. Radhakrishnan", "Zakir Hussain", "V. V. Giri"], a: 0, e: "Dr Rajendra Prasad served as President from 1950 to 1962." },
  { q: "Which planet is known as the Red Planet?", o: ["Venus", "Mars", "Jupiter", "Mercury"], a: 1, e: "Mars appears red because of iron oxide (rust) on its surface." },
  { q: "The headquarters of the Reserve Bank of India is in:", o: ["Delhi", "Kolkata", "Mumbai", "Chennai"], a: 2, e: "The RBI's central office is in Mumbai; it was initially in Kolkata." },
  { q: "Which is the smallest bone in the human body?", o: ["Stapes", "Femur", "Radius", "Tibia"], a: 0, e: "The stapes in the middle ear is the smallest bone." },
  { q: "Which country hosted the 2016 Summer Olympics?", o: ["China", "Brazil", "United Kingdom", "Japan"], a: 1, e: "Rio de Janeiro in Brazil hosted the 2016 Olympics." },
  { q: "Which article of the Constitution abolishes untouchability?", o: ["Article 15", "Article 16", "Article 17", "Article 18"], a: 2, e: "Article 17 abolishes untouchability in any form." },
  { q: "The National Anthem of India was written by:", o: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subramania Bharati"], a: 1, e: "Jana Gana Mana was written by Rabindranath Tagore; Vande Mataram by Bankim Chandra Chatterjee." },
  { q: "Which is the largest state of India by area?", o: ["Madhya Pradesh", "Maharashtra", "Rajasthan", "Uttar Pradesh"], a: 2, e: "Rajasthan is the largest state by area." },
  { q: "Which acid is present in the human stomach?", o: ["Sulphuric acid", "Hydrochloric acid", "Nitric acid", "Acetic acid"], a: 1, e: "Hydrochloric acid (HCl) in gastric juice helps digest food." },
  { q: "The Battle of Plassey was fought in:", o: ["1757", "1764", "1761", "1857"], a: 0, e: "Robert Clive defeated Siraj-ud-Daulah at Plassey in 1757." }
];

/* ===================== GK ZONE ===================== */
const GK = [
  {
    id: "gk1",
    title: "National Symbols & Static GK",
    icon: "\uD83C\uDDEE\uD83C\uDDF3",
    items: [
      ["National bird", "Indian peacock"],
      ["National animal", "Royal Bengal tiger"],
      ["National flower", "Lotus"],
      ["National fruit", "Mango"],
      ["National river", "Ganga"],
      ["National game (de facto)", "Hockey"],
      ["National anthem", "Jana Gana Mana \u2013 Rabindranath Tagore, adopted 24 January 1950"],
      ["National song", "Vande Mataram \u2013 Bankim Chandra Chatterjee"],
      ["Currency", "Indian Rupee (\u20B9)"],
      ["National calendar", "Saka calendar"],
      ["Number of states and UTs", "28 states and 8 Union Territories"],
      ["Capital", "New Delhi"]
    ]
  },
  {
    id: "gk2",
    title: "Important Days (Exam Favourites)",
    icon: "\uD83D\uDCC5",
    items: [
      ["26 January", "Republic Day"],
      ["15 August", "Independence Day"],
      ["2 October", "Gandhi Jayanti"],
      ["14 November", "Children's Day (birth anniversary of Jawaharlal Nehru)"],
      ["26 November", "Constitution Day"],
      ["5 September", "Teachers' Day"],
      ["1 July", "National Doctors' Day"],
      ["8 March", "International Women's Day"],
      ["5 June", "World Environment Day"],
      ["24 January", "National Girl Child Day"],
      ["10 December", "Human Rights Day"],
      ["22 April", "Earth Day"]
    ]
  },
  {
    id: "gk3",
    title: "Government Schemes You Must Know",
    icon: "\uD83C\uDFE6",
    items: [
      ["PM-KISAN", "Income support of \u20B96,000 per year to farmer families in 3 instalments (2019)"],
      ["Ayushman Bharat PM-JAY", "Health cover of \u20B95 lakh per family per year for secondary and tertiary care"],
      ["MGNREGA (2005)", "Guarantees 100 days of wage employment to rural households"],
      ["Pradhan Mantri Jan Dhan Yojana (2014)", "Financial inclusion \u2013 zero balance bank accounts"],
      ["Ujjwala Yojana (2016)", "Free LPG connections to women from poor households"],
      ["Swachh Bharat Abhiyan (2014)", "Cleanliness and sanitation mission"],
      ["Skill India Mission (2015)", "Skill development and vocational training"],
      ["Digital India (2015)", "Digital infrastructure and e-governance"],
      ["Beti Bachao Beti Padhao (2015)", "Girl child protection and education, launched at Panipat"],
      ["Atal Pension Yojana (2015)", "Guaranteed pension for the unorganised sector"]
    ]
  },
  {
    id: "gk4",
    title: "One-Liners for Quick Revision",
    icon: "\u26A1",
    items: [
      ["First Indian to win a Nobel Prize", "Rabindranath Tagore (1913, Literature)"],
      ["First woman IPS officer", "Kiran Bedi"],
      ["First Indian in space", "Rakesh Sharma (1984)"],
      ["Father of the Indian Constitution", "Dr B. R. Ambedkar"],
      ["Iron Man of India", "Sardar Vallabhbhai Patel"],
      ["Missile Man of India", "Dr A. P. J. Abdul Kalam"],
      ["Nightingale of India", "Sarojini Naidu"],
      ["Grand Old Man of India", "Dadabhai Naoroji"],
      ["Nobel Prize in Economics 1998", "Amartya Sen"],
      ["Highest civilian award", "Bharat Ratna"],
      ["ISRO headquarters", "Bengaluru"],
      ["First satellite of India", "Aryabhata (1975)"]
    ]
  }
];
/* ============ WEST BENGAL FOCUSED CONTENT (v1.2) ============ */

SUBJECTS.push(
  {
    id: "wbgk",
    name: "West Bengal GK",
    icon: "\uD83C\uDFDB\uFE0F",
    tag: "WBCS \u00B7 WBP \u00B7 KP \u00B7 NSOU",
    chapters: [
      {
        id: "wb1",
        title: "History of Bengal",
        mins: 8,
        body: `
          <h3>Ancient & early medieval</h3>
          <ul>
            <li>Ancient Bengal was known as <b>Gauda</b> and <b>Vanga</b>; early ports include <b>Chandraketugarh</b> and <b>Mahasthangarh</b>.</li>
            <li><b>Shashanka</b> (7th century) is regarded as the first important independent ruler of Gauda.</li>
            <li>The <b>Pala dynasty</b> (Dharmapala, Devapala) patronised Buddhism and built the great monasteries; the <b>Sena dynasty</b> (Vijay Sen, Lakshman Sen) followed and patronised Brahmanism.</li>
            <li>Turkish rule began when <b>Bakhtiyar Khilji</b> captured Nadia around 1204; later the Bengal Sultanate and then the Mughals ruled. The Mughal conquest is linked with the <b>Battle of Rajmahal (1576)</b>.</li>
          </ul>
          <h3>Colonial period</h3>
          <ul>
            <li><b>Battle of Plassey (1757)</b> \u2013 Robert Clive defeated Siraj-ud-Daulah; <b>Battle of Buxar (1764)</b> consolidated British power.</li>
            <li><b>Permanent Settlement, 1793</b> \u2013 introduced by Lord Cornwallis; zamindars became revenue collectors.</li>
            <li><b>Indigo Revolt (1859)</b> and the <b>Santhal Rebellion (1855)</b> led by Sidhu and Kanhu were early peasant uprisings.</li>
            <li><b>Partition of Bengal (1905)</b> by Lord Curzon sparked the Swadeshi movement; it was annulled in <b>1911</b>, the same year the imperial capital moved from Calcutta to Delhi.</li>
            <li>The <b>Bengal Famine of 1943</b> and the <b>Radcliffe Line (1947)</b> shaped modern West Bengal.</li>
          </ul>
          <div class="kv"><b>Freedom movement names to remember:</b> Khudiram Bose (Muzaffarpur case, 1908), Bagha Jatin, Chittaranjan Das, Subhas Chandra Bose (Azad Hind Fauj, 1943), Matangini Hazra (Tamluk, 1942), and the <b>Tamluk Jatiya Sarkar</b> of 1942.</div>`
      },
      {
        id: "wb2",
        title: "Geography of West Bengal",
        mins: 7,
        body: `
          <ul>
            <li>Area about <b>88,752 sq km</b>; <b>23 districts</b>; capital <b>Kolkata</b>.</li>
            <li>Highest peak: <b>Sandakphu</b> (3,636 m) in the Darjeeling hills.</li>
            <li>Main rivers: <b>Hooghly</b>, <b>Damodar</b> (called the "Sorrow of Bengal" for its floods), <b>Teesta</b>, <b>Mahananda</b>, <b>Ajay</b>, <b>Mayurakshi</b> and <b>Rupnarayan</b>.</li>
            <li>Physiographic belts: the Himalayan north (Darjeeling, Kalimpong), the Terai and Dooars, the alluvial Gangetic plain, the laterite plateau of Bankura\u2013Purulia\u2013Birbhum, and the coastal Sundarbans.</li>
            <li><b>Sundarbans</b> \u2013 UNESCO World Heritage Site and the world's largest mangrove delta, home of the Royal Bengal tiger.</li>
            <li>Other heritage listings: <b>Darjeeling Himalayan Railway</b> (1999) and <b>Santiniketan</b> (2023).</li>
            <li>Major industries: tea (Darjeeling and Dooars), jute (Hooghly belt), steel (Durgapur, Burnpur), and the ports of <b>Kolkata</b> and <b>Haldia</b>.</li>
          </ul>
          <div class="tip"><b>Exam tip:</b> West Bengal is the leading rice-producing state among Indian states; it is also a major producer of jute, tea and potato.</div>`
      },
      {
        id: "wb3",
        title: "Polity & Administration",
        mins: 6,
        body: `
          <ul>
            <li>West Bengal Legislative Assembly has <b>294 seats</b>; the state sends <b>42 members to the Lok Sabha</b> and <b>16 to the Rajya Sabha</b>.</li>
            <li>The <b>Governor</b> is the constitutional head; the <b>Chief Minister</b> heads the Council of Ministers, responsible to the Assembly.</li>
            <li>The <b>Calcutta High Court</b>, established in <b>1862</b>, is the oldest High Court in India. It has jurisdiction over West Bengal and the Andaman &amp; Nicobar Islands.</li>
            <li><b>First Governor</b> of West Bengal: <b>C. Rajagopalachari</b>. <b>First Chief Minister</b>: <b>Prafulla Chandra Ghosh</b>. <b>Dr Bidhan Chandra Roy</b> was CM from 1948 to 1962 and his birthday, 1 July, is National Doctors' Day.</li>
            <li>Three-tier <b>Panchayati Raj</b> runs in all districts except <b>Kolkata</b>, which is an urban district with no panchayat.</li>
            <li><b>Kolkata Police</b> is headed by the Commissioner of Police and functions under the state Home Department; its headquarters is at <b>Lalbazar</b>.</li>
          </ul>
          <div class="kv"><b>Divisions:</b> West Bengal is administered through five divisions \u2014 Presidency, Burdwan, Medinipur, Malda and Jalpaiguri.</div>`
      },
      {
        id: "wb4",
        title: "Culture, Festivals & GI Tags",
        mins: 5,
        body: `
          <ul>
            <li><b>Durga Puja of Kolkata</b> was inscribed on UNESCO's Representative List of Intangible Cultural Heritage in <b>2021</b>.</li>
            <li>Other UNESCO intangible heritage from Bengal: <b>Baul songs</b> and <b>Chhau dance</b> (Purulia style).</li>
            <li>Festivals: Poila Boishakh (Bengali new year), Saraswati Puja, Rath Yatra, Kali Puja, Christmas in Kolkata, and the <b>Gangasagar Mela</b> on Makar Sankranti.</li>
            <li>Well-known <b>GI tags</b>: Darjeeling tea, Rasogolla of West Bengal, Joynagar Moa, Sundarban honey, Santiniketan leather goods and Nakshi Kantha.</li>
            <li>Bengal Renaissance figures: Raja Ram Mohan Roy (Brahmo Samaj, 1828), Ishwar Chandra Vidyasagar (widow remarriage, 1856), Bankim Chandra Chatterjee (<i>Anandamath</i>), Rabindranath Tagore (Nobel Prize 1913) and Swami Vivekananda (Chicago address, 1893).</li>
            <li><b>Santiniketan</b> was founded by Tagore; Visva-Bharati became a central university.</li>
          </ul>`
      },
      {
        id: "wb5",
        title: "State Schemes & Economy",
        mins: 6,
        body: `
          <ul>
            <li><b>Kanyashree Prakash (2013)</b> \u2013 scholarship and cash support to keep girls in school and delay marriage; it won a UN Public Service Award.</li>
            <li><b>Lakshmir Bhandar (2021)</b> \u2013 monthly basic income support to women heads of households (higher amount for SC/ST families).</li>
            <li><b>Krishak Bandhu</b> \u2013 income support to farmers; <b>Bangla Shasya Bima</b> \u2013 crop insurance.</li>
            <li><b>Swasthya Sathi</b> \u2013 cashless health cover up to \u20B95 lakh per family per year.</li>
            <li><b>Sabooj Sathi</b> \u2013 bicycles for students of classes IX to XII; <b>Student Credit Card (2016)</b> \u2013 education loan up to \u20B910 lakh at low interest.</li>
            <li><b>Duare Sarkar</b> \u2013 camps that take government services to people's doorsteps; <b>Bangla Sahayata Kendra</b> \u2013 service delivery centres.</li>
            <li>Economy: services and trade dominate; jute, tea, engineering goods and leather are key exports; the <b>Haldia</b> and <b>Kolkata</b> ports serve the eastern hinterland.</li>
          </ul>
          <div class="tip"><b>Exam tip:</b> For scheme questions, remember the year, the beneficiary group and the benefit amount \u2014 that is exactly how WBCS and police papers ask them.</div>`
      }
    ]
  },
  {
    id: "wbcs",
    name: "WBPSC / WBCS",
    icon: "\uD83D\uDC54",
    tag: "West Bengal Civil Service",
    chapters: [
      {
        id: "wbc1",
        title: "Exam Pattern & Strategy",
        mins: 6,
        body: `
          <ul>
            <li><b>Preliminary</b>: one objective paper of 200 multiple-choice questions with negative marking for wrong answers; it is a screening test only.</li>
            <li><b>Mains</b>: descriptive written papers \u2014 a language paper, an English paper, <b>General Studies I &amp; II</b>, and two papers of an optional subject \u2014 followed by a personality test/interview.</li>
            <li>Bengali, English, Hindi, Nepali, Santali and Urdu are the language options; the language paper tests writing ability, not literature.</li>
            <li><b>Strategy:</b> in prelims, attempt only questions you can narrow to two options \u2014 blind guesses cost negative marks.</li>
            <li>Keep one notebook of "West Bengal facts" (districts, rivers, schemes, culture) \u2014 the state-specific block is the easiest scoring part.</li>
            <li>Always confirm the marks structure, negative-marking rule and syllabus from the <b>current WBPSC advertisement</b>, since these change between cycles.</li>
          </ul>
          <div class="kv"><b>GS I &amp; II usually cover:</b> Indian history and freedom movement, geography, polity and economy, science and technology, current affairs, West Bengal's history, geography, culture, economy and administration, plus reasoning and quantitative aptitude.</div>`
      },
      {
        id: "wbc2",
        title: "State Polity for WBCS",
        mins: 6,
        body: `
          <ul>
            <li><b>Governor</b> (Art 153\u2013162): appointed by the President, holds office for 5 years, appoints the Chief Minister, and can reserve a Bill for the President's consideration.</li>
            <li><b>State Legislature</b>: West Bengal has a unicameral legislature (Legislative Assembly only), 294 seats.</li>
            <li><b>Art 356</b> \u2013 President's Rule in a state; <b>Art 200</b> \u2013 Governor's assent to state Bills.</li>
            <li>Distribution of powers: Union, State and Concurrent Lists (Seventh Schedule). <b>Police, public order, public health and local government</b> are State List subjects.</li>
            <li>Chief Secretary heads the state administration; the Director General of Police heads the police force; the State Election Commission conducts panchayat and municipal elections.</li>
            <li><b>Art 371A\u2013371J</b> contain special provisions for certain states \u2014 remember that West Bengal has no such special provision article.</li>
          </ul>`
      },
      {
        id: "wbc3",
        title: "WB Economy & Budget Basics",
        mins: 5,
        body: `
          <ul>
            <li>State income is measured as Gross State Domestic Product (GSDP); the state budget is presented every year in the Assembly by the Finance Minister.</li>
            <li>Key sectors: agriculture (rice, jute, potato, vegetables), tea, small-scale industry, leather, engineering, IT and tourism.</li>
            <li><b>MSME</b> and cottage industries (handloom, handicraft, Dokra metal craft) are major employers.</li>
            <li>Industrial corridors: the Kolkata\u2013Haldia belt, Durgapur\u2013Asansol (steel and coal), and the Siliguri corridor for trade with Bhutan, Nepal and Bangladesh.</li>
            <li>Terms to revise: fiscal deficit, revenue deficit, plan and non-plan expenditure, GST devolution to states, and the Finance Commission.</li>
          </ul>`
      }
    ]
  },
  {
    id: "wbpolice",
    name: "WB Police & Kolkata Police",
    icon: "\uD83D\uDC6E",
    tag: "WBP \u00B7 KP \u00B7 Constable & SI",
    chapters: [
      {
        id: "wbp1",
        title: "Recruitment Process",
        mins: 6,
        body: `
          <ul>
            <li>Typical stages: <b>written examination</b> (general awareness, elementary mathematics, reasoning, and for some posts basic English/Bengali) \u2192 <b>Physical Measurement Test (PMT)</b> \u2192 <b>Physical Efficiency Test (PET)</b> \u2192 medical test \u2192 final merit list.</li>
            <li>West Bengal Police recruitment is handled by the <b>West Bengal Police Recruitment Board (WBPRB)</b>; Kolkata Police vacancies are also advertised through the state recruitment system.</li>
            <li>PET usually includes a run (for example 1600 m for male candidates and 800 m for female candidates within a time limit), long jump and high jump \u2014 <b>the exact standards and timings change every cycle, so always read the current notification</b>.</li>
            <li>Height, weight and chest standards differ by post and category; relaxations exist for hills, SC/ST and other reserved categories.</li>
            <li>Negative marking may apply in the written test depending on the advertisement.</li>
            <li>Documents to keep ready: Madhyamik certificate, age proof, caste certificate, domicile, and recent photographs.</li>
          </ul>
          <div class="tip"><b>Physical preparation:</b> start running 4\u20135 km at an easy pace four days a week, add two days of long jump and high jump practice, and one rest day. Build up over 8\u201310 weeks rather than trying to sprint from day one.</div>`
      },
      {
        id: "wbp2",
        title: "General Awareness for Police Exams",
        mins: 6,
        body: `
          <ul>
            <li>Indian Constitution basics: Preamble, Fundamental Rights, Fundamental Duties, Directive Principles, the three lists.</li>
            <li>Police-related articles: <b>Art 246</b> (police is a State subject), <b>Art 355</b> (Union's duty to protect states), and the role of the <b>DGP</b>.</li>
            <li>Legal vocabulary: FIR (First Information Report), cognizable and non-cognizable offence, bailable and non-bailable, summons and warrant, charge sheet, custody and bail.</li>
            <li>India's security setup: state police, Central Armed Police Forces (BSF, CRPF, CISF, ITBP, SSB), NIA and CBI.</li>
            <li>Kolkata-specific facts: Lalbazar headquarters, Rabindra Setu (Howrah Bridge), Vidyasagar Setu, the Kolkata Metro (India's first, 1984) and the Calcutta High Court.</li>
            <li>Human rights and community policing: beat policing, Neighbourhood Police, and the role of the police in disaster response.</li>
          </ul>`
      },
      {
        id: "wbp3",
        title: "Maths & Reasoning Shortcuts",
        mins: 6,
        body: `
          <ul>
            <li><b>Percentage:</b> x% of y = y% of x. Use 10% and 1% blocks for fast mental maths.</li>
            <li><b>Average</b> = total \u00F7 count. If a person joins a group, the new average shifts by the difference divided by the new count.</li>
            <li><b>Profit/Loss:</b> always on cost price; profit % = profit \u00D7 100 \u00F7 CP.</li>
            <li><b>Time &amp; Work:</b> convert days to one-day work, add, then invert. A in 10 days and B in 15 days \u2192 together 6 days.</li>
            <li><b>Speed:</b> km/h \u2192 m/s multiply by 5/18. Train crossing a platform: time = (train + platform length) \u00F7 speed.</li>
            <li><b>Reasoning:</b> letter positions with EJOTY (E=5, J=10, O=15, T=20, Y=25); opposites sum to 27; draw blood-relation trees and direction paths on paper.</li>
            <li><b>Number series:</b> test differences, then ratios, then squares/cubes, then alternating patterns.</li>
          </ul>`
      }
    ]
  },
  {
    id: "nsou",
    name: "NSOU Guide",
    icon: "\uD83C\uDF93",
    tag: "Netaji Subhas Open University",
    chapters: [
      {
        id: "ns1",
        title: "How NSOU Works",
        mins: 6,
        body: `
          <ul>
            <li><b>Netaji Subhas Open University (NSOU)</b> is the state open university of West Bengal, headquartered in Salt Lake, Kolkata, and established in <b>1997</b>.</li>
            <li>It offers Bachelor's Degree Programmes (BDP/B.A./B.Com/B.Sc.), professional and postgraduate programmes through <b>study centres</b> across the state.</li>
            <li>Learning is through <b>self-learning material (SLM)</b> supplied by the university, plus optional counselling classes at study centres.</li>
            <li>Assessment has two parts: <b>assignments (continuous assessment)</b> submitted during the year, and the <b>Term End Examination (TEE)</b> held in examination cycles.</li>
            <li>Assignments are compulsory \u2014 if an assignment is not submitted, the paper is treated as incomplete even if the TEE is written well.</li>
            <li>Keep your enrolment number, study centre code and programme code handy; every form asks for them.</li>
          </ul>
          <div class="kv"><b>Always confirm</b> the current assignment submission dates, TEE schedule and credit structure from the NSOU website or your study centre \u2014 open-university calendars change every cycle.</div>`
      },
      {
        id: "ns2",
        title: "Assignment Writing That Scores",
        mins: 6,
        body: `
          <ul>
            <li>Answer in the structure the question asks for: definition \u2192 explanation \u2192 example \u2192 conclusion. Examiners look for these four blocks.</li>
            <li>Use headings and short paragraphs; a page of dense text scores less than a well-labelled answer.</li>
            <li>Quote one or two thinkers, dates or reports per answer \u2014 it shows you used the SLM.</li>
            <li>Write in your own words. Copying the SLM word for word invites zero marks and plagiarism checks.</li>
            <li>Keep to the word limit; over-writing costs time and does not add marks.</li>
            <li>Submit assignments early, keep a photocopy or scan of every assignment, and note the submission date and the receiving centre.</li>
          </ul>`
      },
      {
        id: "ns3",
        title: "Political Science Core Concepts",
        mins: 7,
        body: `
          <ul>
            <li><b>State</b>: population, territory, government and sovereignty. <b>Nation</b> is a cultural-psychological unity; a state is a legal-political entity.</li>
            <li><b>Sovereignty</b> \u2013 supreme and final authority; <b>monistic</b> (Austin) vs <b>pluralist</b> (Laski) views.</li>
            <li><b>Social contract</b>: Hobbes (absolute sovereign), Locke (limited government, consent), Rousseau (general will, popular sovereignty).</li>
            <li><b>Separation of powers</b> \u2013 Montesquieu; <b>Rule of law</b> \u2013 Dicey (no arbitrary power, equality before law, rights from ordinary courts).</li>
            <li><b>Liberty, equality, justice</b>: negative vs positive liberty; formal vs substantive equality; Rawls's justice as fairness.</li>
            <li><b>Democracy</b>: direct and representative; electoral systems \u2013 first-past-the-post, proportional representation.</li>
            <li>Indian Constitution: Preamble, Fundamental Rights (Part III), DPSP (Part IV), federalism with a strong Centre, and judicial review.</li>
          </ul>`
      },
      {
        id: "ns4",
        title: "History Core Concepts",
        mins: 6,
        body: `
          <ul>
            <li><b>Historiography</b>: colonial, nationalist, Marxist, subaltern and feminist schools \u2014 know one example of each.</li>
            <li>Sources: primary (inscriptions, coins, archives, oral testimony) and secondary (books, articles).</li>
            <li>Ancient India: Harappan urbanism, Vedic society, Mauryan administration (Arthashastra), Gupta "golden age" debate.</li>
            <li>Medieval India: Delhi Sultanate, Vijayanagara, Mughal land revenue (zabti system), Bhakti and Sufi movements.</li>
            <li>Modern India: 1857, formation of the Congress (1885), Swadeshi, Gandhi's movements, and partition.</li>
            <li>Answer technique: give the date, the actor, the cause and the consequence in separate sentences.</li>
          </ul>`
      }
    ]
  }
);

TESTS.push(
  {
    id: "pyq_wbcs1",
    title: "WBCS Prelims \u2013 PYQ Practice Set 1",
    exam: "WBCS",
    qcount: 10,
    mins: 10,
    tag: "PYQ",
    neg: 0.33,
    desc: "Previous-year pattern questions on West Bengal GK",
    questions: [
      { q: "Who was the first Governor of West Bengal after independence?", o: ["Bidhan Chandra Roy", "C. Rajagopalachari", "Prafulla Chandra Ghosh", "Kailash Nath Katju"], a: 1, e: "C. Rajagopalachari, the last Governor-General, became the first Governor of West Bengal in 1947." },
      { q: "The Battle of Plassey (1757) was fought between the English East India Company and:", o: ["Mir Qasim", "Siraj-ud-Daulah", "Shah Alam II", "Tipu Sultan"], a: 1, e: "Robert Clive defeated Nawab Siraj-ud-Daulah of Bengal at Plassey in 1757." },
      { q: "Which river is known as the 'Sorrow of Bengal'?", o: ["Hooghly", "Teesta", "Damodar", "Mahananda"], a: 2, e: "The Damodar caused repeated devastating floods, earning it the name 'Sorrow of Bengal'." },
      { q: "The Sundarbans is best known for:", o: ["Tea gardens", "Mangrove forests and the Royal Bengal tiger", "Coal mines", "Coffee plantations"], a: 1, e: "The Sundarbans is the world's largest mangrove delta and a UNESCO World Heritage Site." },
      { q: "Santiniketan was founded by:", o: ["Swami Vivekananda", "Rabindranath Tagore", "Ishwar Chandra Vidyasagar", "Bankim Chandra Chatterjee"], a: 1, e: "Tagore founded Santiniketan; Visva-Bharati grew from it and Santiniketan became a UNESCO World Heritage Site in 2023." },
      { q: "The highest peak in West Bengal is:", o: ["Sandakphu", "Phalut", "Tiger Hill", "Anamudi"], a: 0, e: "Sandakphu, in the Darjeeling hills, is about 3,636 m high." },
      { q: "The Permanent Settlement of Bengal was introduced in 1793 by:", o: ["Warren Hastings", "Lord Cornwallis", "Lord Dalhousie", "Lord Curzon"], a: 1, e: "Lord Cornwallis introduced the Permanent Settlement in 1793, making zamindars permanent revenue collectors." },
      { q: "Durga Puja of Kolkata was inscribed on the UNESCO list of:", o: ["World Heritage Sites", "Intangible Cultural Heritage", "Memory of the World", "Biosphere Reserves"], a: 1, e: "It was inscribed on the Representative List of the Intangible Cultural Heritage of Humanity in 2021." },
      { q: "How many districts does West Bengal have?", o: ["19", "21", "23", "25"], a: 2, e: "West Bengal has 23 districts, administered through five divisions." },
      { q: "The novel 'Anandamath' was written by:", o: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarat Chandra Chattopadhyay", "Bibhutibhushan Bandyopadhyay"], a: 0, e: "Bankim Chandra Chatterjee wrote Anandamath, which contains the song Vande Mataram." }
    ]
  },
  {
    id: "pyq_wbp1",
    title: "WB Police Constable \u2013 PYQ Practice Set 1",
    exam: "WB Police",
    qcount: 10,
    mins: 10,
    tag: "PYQ",
    neg: 0.25,
    desc: "GK, maths and reasoning on the police exam pattern",
    questions: [
      { q: "The headquarters of Kolkata Police is at:", o: ["Writers' Building", "Lalbazar", "Nabanna", "Bhabani Bhavan"], a: 1, e: "Kolkata Police is headquartered at Lalbazar in central Kolkata." },
      { q: "Which is the first metro railway of India?", o: ["Delhi Metro", "Kolkata Metro", "Mumbai Metro", "Chennai Metro"], a: 1, e: "The Kolkata Metro, India's first metro railway, began commercial service in 1984." },
      { q: "25% of 480 is:", o: ["100", "110", "120", "140"], a: 2, e: "25% is one-fourth, so 480 \u00F7 4 = 120." },
      { q: "The average of 12, 18, 24 and 30 is:", o: ["19", "20", "21", "22"], a: 2, e: "Sum = 84, count = 4, average = 21." },
      { q: "Durgapur in West Bengal is known for:", o: ["A steel plant", "A shipyard", "A space centre", "A major tea auction"], a: 0, e: "Durgapur has one of India's major public-sector steel plants." },
      { q: "Which district of West Bengal has no panchayat system?", o: ["Darjeeling", "Kolkata", "Howrah", "Murshidabad"], a: 1, e: "Kolkata is an entirely urban district, so the three-tier panchayat system does not apply there." },
      { q: "If a train 150 m long crosses a pole in 15 seconds, its speed is:", o: ["10 m/s", "15 m/s", "20 m/s", "25 m/s"], a: 0, e: "Speed = length \u00F7 time = 150 \u00F7 15 = 10 m/s (36 km/h)." },
      { q: "In the Indian Constitution, 'police' is a subject of the:", o: ["Union List", "State List", "Concurrent List", "Residuary powers"], a: 1, e: "Police and public order are State List subjects, which is why state governments control their police forces." },
      { q: "Who was the first Chief Minister of West Bengal?", o: ["Bidhan Chandra Roy", "Prafulla Chandra Ghosh", "Jyoti Basu", "Ajoy Mukherjee"], a: 1, e: "Prafulla Chandra Ghosh became the first Chief Minister of West Bengal in 1947; Dr B. C. Roy succeeded him in 1948." },
      { q: "A sum doubles in 8 years at simple interest. The annual rate is:", o: ["8%", "10%", "12.5%", "15%"], a: 2, e: "For doubling at simple interest, R \u00D7 T = 100, so R = 100 \u00F7 8 = 12.5% per year." }
    ]
  },
  {
    id: "pyq_kp1",
    title: "Kolkata Police \u2013 PYQ Practice Set 1",
    exam: "Kolkata Police",
    qcount: 10,
    mins: 10,
    tag: "PYQ",
    neg: 0.25,
    desc: "Kolkata-centric general awareness and aptitude",
    questions: [
      { q: "Kolkata was the capital of British India until which year?", o: ["1905", "1911", "1920", "1947"], a: 1, e: "The capital shifted from Calcutta to Delhi in 1911, the same year the Partition of Bengal was annulled." },
      { q: "Rabindra Setu is the official name of:", o: ["Vidyasagar Setu", "Howrah Bridge", "Second Hooghly Bridge", "Bally Bridge"], a: 1, e: "Howrah Bridge was renamed Rabindra Setu; Vidyasagar Setu is the second Hooghly bridge." },
      { q: "The Calcutta High Court was established in:", o: ["1857", "1862", "1876", "1900"], a: 1, e: "The Calcutta High Court was set up in 1862 and is the oldest High Court in India." },
      { q: "The Kolkata Municipal Corporation was established in:", o: ["1857", "1876", "1899", "1911"], a: 1, e: "The Kolkata Municipal Corporation was established in 1876." },
      { q: "Fort William in Kolkata is associated with:", o: ["The Maratha wars", "The East India Company", "The Mughal Empire", "The French"], a: 1, e: "The present Fort William was built by the East India Company after the Battle of Plassey." },
      { q: "The Hooghly is a distributary of which river?", o: ["Ganga", "Damodar", "Teesta", "Brahmaputra"], a: 0, e: "The Hooghly branches off the Ganga in Murshidabad and flows past Kolkata to the Bay of Bengal." },
      { q: "A shopkeeper buys an item for \u20B9400 and sells it for \u20B9460. His profit percentage is:", o: ["10%", "12%", "15%", "20%"], a: 2, e: "Profit = \u20B960; 60/400 \u00D7 100 = 15%." },
      { q: "Which of these is NOT a Central Armed Police Force?", o: ["CRPF", "BSF", "CISF", "Kolkata Police"], a: 3, e: "Kolkata Police is a state police force; CRPF, BSF and CISF are central armed police forces." },
      { q: "FIR stands for:", o: ["First Information Report", "Final Investigation Report", "Field Incident Record", "Formal Inquiry Report"], a: 0, e: "An FIR is the first information about a cognizable offence recorded by the police." },
      { q: "If 8 workers build a wall in 12 days, 6 workers will take:", o: ["9 days", "14 days", "16 days", "18 days"], a: 2, e: "Work is constant, so days \u00D7 workers is fixed: 8 \u00D7 12 = 96 worker-days; 96 \u00F7 6 = 16 days." }
    ]
  },
  {
    id: "pyq_wbgk1",
    title: "West Bengal GK \u2013 Practice Set 1",
    exam: "WB GK",
    qcount: 10,
    mins: 10,
    tag: "Practice",
    neg: 0.25,
    desc: "Schemes, culture, geography and polity of Bengal",
    questions: [
      { q: "Kanyashree Prakash is a scheme for:", o: ["Farmers", "Girl students", "Street vendors", "Senior citizens"], a: 1, e: "It gives scholarship and cash support to girls to continue education and delay marriage; it won a UN Public Service Award." },
      { q: "Swasthya Sathi provides health cover of up to:", o: ["\u20B91 lakh", "\u20B92 lakh", "\u20B95 lakh", "\u20B910 lakh"], a: 2, e: "Swasthya Sathi gives cashless treatment cover up to \u20B95 lakh per family per year." },
      { q: "Sabooj Sathi distributes:", o: ["Bicycles to students", "Laptops to teachers", "Seeds to farmers", "Books to libraries"], a: 0, e: "Bicycles are given to students of classes IX to XII to improve access to school." },
      { q: "West Bengal sends how many members to the Lok Sabha?", o: ["36", "40", "42", "44"], a: 2, e: "West Bengal has 42 Lok Sabha seats and 294 Assembly seats." },
      { q: "Chhau dance, inscribed by UNESCO, is traditionally performed in:", o: ["Purulia", "Cooch Behar", "Nadia", "Howrah"], a: 0, e: "Purulia Chhau is the best-known form; Chhau dance was inscribed by UNESCO in 2010." },
      { q: "The Dooars region is famous for:", o: ["Tea gardens", "Coffee", "Rubber", "Cotton"], a: 0, e: "The Dooars in north Bengal, along with Darjeeling, is a major tea-producing belt." },
      { q: "Which of these is a GI-tagged product of West Bengal?", o: ["Darjeeling tea", "Basmati rice", "Mysore silk", "Alphonso mango"], a: 0, e: "Darjeeling tea was among India's first GI-tagged products; Rasogolla, Joynagar Moa and Sundarban honey are also GI-tagged." },
      { q: "The state animal of West Bengal is:", o: ["Royal Bengal tiger", "Fishing cat", "Elephant", "One-horned rhinoceros"], a: 1, e: "The fishing cat is the state animal of West Bengal; the tiger is India's national animal." },
      { q: "Gangasagar Mela is held on the occasion of:", o: ["Poila Boishakh", "Makar Sankranti", "Durga Puja", "Rath Yatra"], a: 1, e: "The Gangasagar Mela takes place on Makar Sankranti in the South 24 Parganas." },
      { q: "The Damodar Valley Corporation was modelled on:", o: ["The Tennessee Valley Authority", "The Thames Valley Board", "The Rhine Commission", "The Nile Authority"], a: 0, e: "DVC was India's first multipurpose river valley project, modelled on the Tennessee Valley Authority of the USA." }
    ]
  },
  {
    id: "pyq_nsou1",
    title: "NSOU BDP \u2013 Political Science Set 1",
    exam: "NSOU",
    qcount: 8,
    mins: 8,
    tag: "NSOU",
    neg: 0.25,
    desc: "Core concepts asked in open-university papers",
    questions: [
      { q: "The doctrine of social contract is associated with:", o: ["Hobbes, Locke and Rousseau", "Austin and Bodin", "Laski and Barker", "Mill and Bentham"], a: 0, e: "Hobbes, Locke and Rousseau are the classical social contract thinkers." },
      { q: "Who described the state as 'an association of associations'?", o: ["Harold Laski", "John Austin", "Jean Bodin", "Thomas Hobbes"], a: 0, e: "Laski's pluralist view treats the state as one association among many, not as omnicompetent." },
      { q: "The theory of separation of powers is credited to:", o: ["Montesquieu", "Rousseau", "Hegel", "Aristotle"], a: 0, e: "Montesquieu set out the separation of legislative, executive and judicial powers in 'The Spirit of the Laws'." },
      { q: "In the Indian Constitution, Directive Principles of State Policy are:", o: ["Justiciable", "Non-justiciable", "Fundamental rights", "Part of the Preamble"], a: 1, e: "They are not enforceable in courts, though they guide state policy." },
      { q: "The Preamble of the Indian Constitution declares India to be a:", o: ["Federal monarchy", "Sovereign socialist secular democratic republic", "Unitary republic", "Confederation"], a: 1, e: "The Preamble describes India as a sovereign, socialist, secular, democratic republic." },
      { q: "Sovereignty, in Austin's sense, means:", o: ["Divided authority", "Supreme and indivisible authority", "Popular consent", "Legal pluralism"], a: 1, e: "Austin's monistic theory treats sovereignty as supreme, unlimited and indivisible." },
      { q: "The concept of 'general will' is central to the thought of:", o: ["Rousseau", "Locke", "Hobbes", "Bentham"], a: 0, e: "Rousseau's general will expresses the common good of the community as a whole." },
      { q: "Which Article of the Constitution provides for judicial review of fundamental rights?", o: ["Article 13", "Article 44", "Article 51A", "Article 368"], a: 0, e: "Article 13 makes laws inconsistent with fundamental rights void, the basis of judicial review." }
    ]
  },
  {
    id: "pyq_wbpsc_clerk1",
    title: "WBPSC Clerkship \u2013 Practice Set 1",
    exam: "WBPSC Clerkship",
    qcount: 8,
    mins: 8,
    tag: "Practice",
    neg: 0.25,
    desc: "English, arithmetic and general knowledge mix",
    questions: [
      { q: "Choose the correct sentence:", o: ["He is senior than me", "He is senior to me", "He is senior from me", "He is more senior than me"], a: 1, e: "Superior, inferior, senior and junior take 'to', not 'than'." },
      { q: "One word for 'a place where books are kept':", o: ["Museum", "Library", "Archives", "Gallery"], a: 1, e: "A library is a place where books are kept for reading and lending." },
      { q: "If 3/4 of a number is 60, the number is:", o: ["75", "80", "90", "100"], a: 1, e: "x \u00D7 3/4 = 60, so x = 60 \u00D7 4/3 = 80." },
      { q: "The average of first five natural numbers is:", o: ["2", "3", "4", "5"], a: 1, e: "(1+2+3+4+5) \u00F7 5 = 15 \u00F7 5 = 3." },
      { q: "Choose the correct article: ___ honest man is respected everywhere.", o: ["A", "An", "The", "No article"], a: 1, e: "'Honest' begins with a vowel sound, so 'an' is used." },
      { q: "The capital of West Bengal is:", o: ["Howrah", "Kolkata", "Siliguri", "Durgapur"], a: 1, e: "Kolkata is the capital of West Bengal." },
      { q: "A sum of \u20B91,200 earns simple interest of \u20B9240 in 2 years. The rate is:", o: ["8%", "10%", "12%", "15%"], a: 1, e: "R = 240 \u00D7 100 \u00F7 (1200 \u00D7 2) = 10% per year." },
      { q: "Pick the correctly spelt word:", o: ["Occasion", "Ocassion", "Occassion", "Ocasion"], a: 0, e: "'Occasion' has double c and a single s." }
    ]
  }
);

/* ============ PRINTABLE PDF PACKS ============ */
const PACKS = [
  {
    id: "pack_wbgk",
    title: "West Bengal GK \u2013 Complete Study Pack",
    desc: "History, geography, polity, culture and state schemes of Bengal",
    chapters: ["wb1", "wb2", "wb3", "wb4", "wb5"]
  },
  {
    id: "pack_wbcs",
    title: "WBCS Prelims \u2013 PYQ Practice Set with Solutions",
    desc: "10 previous-year pattern questions with full explanations",
    tests: ["pyq_wbcs1"]
  },
  {
    id: "pack_police",
    title: "WB Police & Kolkata Police \u2013 Preparation Guide",
    desc: "Recruitment process, physical test guidance, GK and shortcuts",
    chapters: ["wbp1", "wbp2", "wbp3"]
  },
  {
    id: "pack_allpyq",
    title: "All PYQ Practice Sets \u2013 Solved Booklet",
    desc: "WBCS, WB Police, Kolkata Police, WB GK, NSOU and Clerkship sets",
    tests: ["pyq_wbcs1", "pyq_wbp1", "pyq_kp1", "pyq_wbgk1", "pyq_nsou1", "pyq_wbpsc_clerk1"]
  },
  {
    id: "pack_nsou",
    title: "NSOU Assignment & Exam Guide",
    desc: "How NSOU works, assignment writing and core concepts",
    chapters: ["ns1", "ns2", "ns3", "ns4"]
  }
];

/* ============ v1.3 : revision, planner and full-length mock ============ */

/* ---- WBCS Mains descriptive practice chapter ---- */
SUBJECTS.filter(s => s.id === "wbcs")[0].chapters.push({
  id: "wbc4",
  title: "Mains Descriptive Practice",
  mins: 6,
  body: `
    <h3>How to write a mains answer</h3>
    <ul>
      <li><b>Intro (2\u20133 lines):</b> define the term or give the context, with one date or report.</li>
      <li><b>Body:</b> 3\u20134 points, each a heading or a numbered line \u2014 cause, feature, example, criticism.</li>
      <li><b>Conclusion:</b> one forward-looking line, ideally linked to a constitutional value or a current policy.</li>
      <li>Use a diagram or a small table wherever the question asks for a comparison \u2014 it saves time and earns marks.</li>
    </ul>
    <h3>Practice questions (GS I &amp; II style)</h3>
    <ul>
      <li>Discuss the role of the Bengal Renaissance in shaping Indian nationalism.</li>
      <li>Explain the physiographic divisions of West Bengal and their economic significance.</li>
      <li>"The Governor is a constitutional head but not a mere figurehead." Comment.</li>
      <li>Evaluate the impact of the partition of Bengal (1905) on the freedom movement.</li>
      <li>Write a note on the shifting pattern of West Bengal's economy from agriculture to services.</li>
      <li>Discuss the major peasant movements of Bengal in the nineteenth and twentieth centuries.</li>
      <li>Examine the significance of the Sundarbans for the ecology and economy of West Bengal.</li>
      <li>Explain the constitutional provisions relating to Panchayati Raj and their working in West Bengal.</li>
    </ul>
    <div class="tip"><b>Essay practice:</b> pick one topic a week and write 300 words in 30 minutes, then check whether you used a definition, two examples and a conclusion. Keep the same structure for the language paper.</div>`
});

/* ---- Full-length mock ---- */
TESTS.push({
  id: "full_wbp1",
  title: "WB Police \u2013 Full Length Mock 1",
  exam: "WB Police",
  qcount: 25,
  mins: 25,
  tag: "Full Mock",
  neg: 0.25,
  desc: "25 questions: GK, maths and reasoning on the real pattern",
  questions: [
    { q: "The National Bird of India is:", o: ["Peacock", "Parrot", "Sparrow", "Crane"], a: 0, e: "The Indian peacock is the national bird." },
    { q: "Who was the first Indian to win a Nobel Prize?", o: ["C. V. Raman", "Rabindranath Tagore", "Amartya Sen", "Mother Teresa"], a: 1, e: "Tagore won the Nobel Prize in Literature in 1913." },
    { q: "The state animal of West Bengal is:", o: ["Royal Bengal tiger", "Fishing cat", "Elephant", "Deer"], a: 1, e: "The fishing cat is the state animal of West Bengal." },
    { q: "Sundarbans is mainly located in which district?", o: ["North 24 Parganas", "South 24 Parganas", "Purba Medinipur", "Nadia"], a: 1, e: "The Indian Sundarbans lies mostly in South 24 Parganas district." },
    { q: "Fundamental Rights are contained in which Part of the Constitution?", o: ["Part II", "Part III", "Part IV", "Part V"], a: 1, e: "Part III, Articles 12 to 35, contains the Fundamental Rights." },
    { q: "The headquarters of the Reserve Bank of India is in:", o: ["New Delhi", "Kolkata", "Mumbai", "Ahmedabad"], a: 2, e: "The RBI's central office is in Mumbai." },
    { q: "Who wrote the National Anthem of India?", o: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Kazi Nazrul Islam", "Sarojini Naidu"], a: 1, e: "Jana Gana Mana was written by Rabindranath Tagore." },
    { q: "The Damodar Valley Corporation was set up on which river?", o: ["Damodar", "Hooghly", "Teesta", "Ajay"], a: 0, e: "DVC is a multipurpose project on the Damodar river." },
    { q: "15% of 800 is:", o: ["100", "110", "120", "130"], a: 2, e: "10% = 80, 5% = 40, so 15% = 120." },
    { q: "An article bought for \u20B9250 is sold for \u20B9300. The profit percentage is:", o: ["15%", "20%", "25%", "30%"], a: 1, e: "Profit = \u20B950; 50/250 \u00D7 100 = 20%." },
    { q: "The simple interest on \u20B91,500 at 6% per annum for 3 years is:", o: ["\u20B9225", "\u20B9270", "\u20B9300", "\u20B9325"], a: 1, e: "SI = 1500 \u00D7 6 \u00D7 3 \u00F7 100 = \u20B9270." },
    { q: "A train 200 m long crosses a pole in 20 seconds. Its speed is:", o: ["10 m/s", "20 m/s", "25 m/s", "30 m/s"], a: 0, e: "Speed = 200 \u00F7 20 = 10 m/s, which is 36 km/h." },
    { q: "A can finish a work in 10 days and B in 15 days. Working together they take:", o: ["5 days", "6 days", "7 days", "8 days"], a: 1, e: "1/10 + 1/15 = 5/30 = 1/6, so 6 days." },
    { q: "Two numbers are in the ratio 3 : 5 and their sum is 64. The larger number is:", o: ["24", "32", "40", "44"], a: 2, e: "Total parts = 8, one part = 8, larger = 5 \u00D7 8 = 40." },
    { q: "A shirt marked at \u20B9500 is sold at a 20% discount. The selling price is:", o: ["\u20B9380", "\u20B9400", "\u20B9420", "\u20B9450"], a: 1, e: "Discount = \u20B9100, so SP = \u20B9400." },
    { q: "54 km/h equals:", o: ["12 m/s", "15 m/s", "18 m/s", "20 m/s"], a: 1, e: "Multiply by 5/18: 54 \u00D7 5/18 = 15 m/s." },
    { q: "The square root of 1764 is:", o: ["38", "42", "44", "46"], a: 1, e: "42 \u00D7 42 = 1764." },
    { q: "If 5 workers build a shed in 12 days, 10 workers will build it in:", o: ["4 days", "6 days", "8 days", "10 days"], a: 1, e: "Worker-days are fixed at 60, so 10 workers need 6 days." },
    { q: "The LCM of 12 and 18 is:", o: ["24", "36", "48", "72"], a: 1, e: "12 = 2\u00B2\u00D73 and 18 = 2\u00D73\u00B2, so LCM = 2\u00B2\u00D73\u00B2 = 36." },
    { q: "Find the next term: 5, 10, 20, 40, ?", o: ["60", "70", "80", "100"], a: 2, e: "Each term doubles, so the next term is 80." },
    { q: "Which is the odd one out: 3, 5, 7, 9, 11?", o: ["5", "7", "9", "11"], a: 2, e: "9 is not a prime number; the others are primes." },
    { q: "If BOOK is coded as CPPL, then PEN is coded as:", o: ["QFO", "QFN", "OFO", "QGO"], a: 0, e: "Each letter moves one step forward: P\u2192Q, E\u2192F, N\u2192O." },
    { q: "A man walks 3 km north and then 4 km east. How far is he from the start?", o: ["5 km", "6 km", "7 km", "8 km"], a: 0, e: "By Pythagoras, distance = \u221A(3\u00B2 + 4\u00B2) = 5 km." },
    { q: "In the Constitution, 'police' and 'public order' are subjects of the:", o: ["Union List", "State List", "Concurrent List", "Residuary powers"], a: 1, e: "Both are State List subjects, so state governments control their police." },
    { q: "The first metro railway of India started in:", o: ["Delhi", "Mumbai", "Kolkata", "Chennai"], a: 2, e: "Kolkata Metro began commercial service in 1984, the first in India." }
  ]
});

/* ---- Flashcards for quick revision ---- */
const FLASHCARDS = [
  { q: "Constitution adopted on?", a: "26 November 1949 (in force 26 January 1950)", tag: "Polity" },
  { q: "Who chaired the Drafting Committee?", a: "Dr B. R. Ambedkar", tag: "Polity" },
  { q: "Article 32 is called?", a: "Heart and soul of the Constitution (constitutional remedies)", tag: "Polity" },
  { q: "Fundamental Duties added by?", a: "42nd Amendment, 1976 (Swaraj Paul Committee)", tag: "Polity" },
  { q: "Panchayati Raj amendment?", a: "73rd Amendment, 1992 \u2014 Part IX, 11th Schedule, 29 subjects", tag: "Polity" },
  { q: "Lok Sabha and Rajya Sabha strength?", a: "543 elected / 245 (233 elected + 12 nominated)", tag: "Polity" },
  { q: "Money Bill article?", a: "Article 110 \u2014 Lok Sabha only, Speaker certifies", tag: "Polity" },
  { q: "Battle of Plassey?", a: "1757 \u2014 Clive defeated Siraj-ud-Daulah", tag: "History" },
  { q: "Permanent Settlement?", a: "1793 \u2014 Lord Cornwallis", tag: "History" },
  { q: "Dandi March?", a: "12 March \u2013 6 April 1930, Sabarmati to Dandi, 24 days", tag: "History" },
  { q: "First Viceroy of India?", a: "Lord Canning (1858)", tag: "History" },
  { q: "Quit India Movement?", a: "8 August 1942, Bombay \u2014 'Do or Die'", tag: "History" },
  { q: "Longest river of India?", a: "Ganga, about 2,525 km", tag: "Geography" },
  { q: "Standard Meridian of India?", a: "82\u00B030'E, passes through Mirzapur", tag: "Geography" },
  { q: "Highest peak of West Bengal?", a: "Sandakphu, 3,636 m", tag: "WB GK" },
  { q: "Sorrow of Bengal?", a: "Damodar river", tag: "WB GK" },
  { q: "Districts in West Bengal?", a: "23 districts, five divisions", tag: "WB GK" },
  { q: "UNESCO World Heritage in WB?", a: "Sundarbans (1987), Darjeeling Himalayan Railway (1999), Santiniketan (2023)", tag: "WB GK" },
  { q: "Durga Puja UNESCO listing?", a: "Intangible Cultural Heritage, 2021", tag: "WB GK" },
  { q: "Kanyashree Prakash?", a: "2013 \u2014 support for girl students; won UN Public Service Award", tag: "WB GK" },
  { q: "Swasthya Sathi cover?", a: "\u20B95 lakh per family per year, cashless", tag: "WB GK" },
  { q: "Lakshmir Bhandar?", a: "2021 \u2014 monthly income support to women heads of households", tag: "WB GK" },
  { q: "Calcutta High Court established?", a: "1862 \u2014 oldest High Court in India", tag: "WB GK" },
  { q: "Kolkata Police headquarters?", a: "Lalbazar", tag: "WB Police" },
  { q: "Kolkata Metro first service?", a: "1984 \u2014 India's first metro railway", tag: "WB Police" },
  { q: "Police in which list?", a: "State List (Seventh Schedule)", tag: "WB Police" },
  { q: "What is an FIR?", a: "First Information Report of a cognizable offence", tag: "WB Police" },
  { q: "DGP stands for?", a: "Director General of Police \u2014 heads the state police force", tag: "WB Police" },
  { q: "NSOU established?", a: "1997, state open university of West Bengal, Salt Lake Kolkata", tag: "NSOU" },
  { q: "Two parts of NSOU assessment?", a: "Assignments (continuous) + Term End Examination", tag: "NSOU" },
  { q: "Social contract thinkers?", a: "Hobbes, Locke, Rousseau", tag: "NSOU" },
  { q: "Separation of powers by?", a: "Montesquieu", tag: "NSOU" },
  { q: "SI formula?", a: "P \u00D7 R \u00D7 T \u00F7 100", tag: "Maths" },
  { q: "Profit percentage formula?", a: "(Profit \u00F7 CP) \u00D7 100", tag: "Maths" },
  { q: "km/h to m/s?", a: "Multiply by 5/18", tag: "Maths" },
  { q: "Average of first n natural numbers?", a: "(n + 1) \u00F7 2", tag: "Maths" },
  { q: "EJOTY stands for?", a: "E=5, J=10, O=15, T=20, Y=25 \u2014 letter positions", tag: "Reasoning" },
  { q: "Opposite letters sum to?", a: "27 (A\u2013Z, B\u2013Y, C\u2013X ...)", tag: "Reasoning" },
  { q: "Vitamin C deficiency?", a: "Scurvy", tag: "Science" },
  { q: "Powerhouse of the cell?", a: "Mitochondrion", tag: "Science" },
  { q: "Universal donor blood group?", a: "O negative", tag: "Science" },
  { q: "Baking soda chemical name?", a: "Sodium bicarbonate, NaHCO\u2083", tag: "Science" }
];
