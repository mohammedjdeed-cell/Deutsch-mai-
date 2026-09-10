/**
 * Deutsch mit Mai – Goethe A1 & A2 Master Engine
 * Vollständige grammatikalische Erklärungen, Tabellen und Übungen für alle Kapitel
 */

// =========================================================================
// ECHTE GRAMMATIKALISCHE LEKTIONEN (VOLLSTÄNDIGE REGELN & TABELLEN)
// =========================================================================
const CHAPTERS_KNOWLEDGE_BASE = {
  // A1.01
  "A1.01": {
    titleAr: "الضمائر الشخصية وتصريف أفعال الحاضر وتعديلات الجذع (-t/-d/-s)",
    lessonHtml: `
      <div class="space-y-4">
        <h2 class="text-lg font-black text-slate-900 border-b pb-2">الفصل 1: الضمائر وتصريف الأفعال في الحاضر (Präsens)</h2>
        <div class="rule-card">
          <h3 class="font-bold text-blue-800 text-sm mb-1">1. الضمائر الشخصية في حالة الرفع (Personalpronomen):</h3>
          <p class="text-xs leading-relaxed text-slate-700">
            <strong>ich</strong> (أنا) | <strong>du</strong> (أنتَ/أنتِ) | <strong>er</strong> (هو) | <strong>sie</strong> (هي) | <strong>es</strong> (هو/هي للمحايد) | <strong>wir</strong> (نحن) | <strong>ihr</strong> (أنتم) | <strong>sie</strong> (هم/هن) | <strong>Sie</strong> (حضرتك/حضرتكم بصيغة الاحترام وتكتب بحرف كبير دائماً).
          </p>
        </div>
        <div>
          <h3 class="font-bold text-slate-800 text-sm mb-2">2. نهايات الأفعال المنتظمة (Regelmäßige Verben):</h3>
          <table class="grammar-table font-de">
            <tr><th>الضمير</th><th>النهاية</th><th>مثال: lernen (يتعلم)</th><th>مثال: wohnen (يسكن)</th></tr>
            <tr><td>ich</td><td class="font-bold text-blue-600">-e</td><td>lerne</td><td>wohne</td></tr>
            <tr><td>du</td><td class="font-bold text-blue-600">-st</td><td>lernst</td><td>wohnst</td></tr>
            <tr><td>er/sie/es</td><td class="font-bold text-blue-600">-t</td><td>lernt</td><td>wohnt</td></tr>
            <tr><td>wir</td><td class="font-bold text-blue-600">-en</td><td>lernen</td><td>wohnen</td></tr>
            <tr><td>ihr</td><td class="font-bold text-blue-600">-t</td><td>lernt</td><td>wohnt</td></tr>
            <tr><td>sie/Sie</td><td class="font-bold text-blue-600">-en</td><td>lernen</td><td>wohnen</td></tr>
          </table>
        </div>
        <div class="rule-card bg-amber-50 border-amber-500">
          <h3 class="font-bold text-amber-900 text-sm mb-1">3. تعديلات الجذع الإلزامية (Stem Adjustments):</h3>
          <ul class="list-disc list-inside text-xs text-amber-950 space-y-1">
            <li><strong>جذع ينتهي بـ -t أو -d (مثل arbeiten, finden):</strong> نضيف حرف <em>e</em> وقاية: <em>du arbeit<strong>e</strong>st, er arbeit<strong>e</strong>t</em>.</li>
            <li><strong>جذع ينتهي بحرف صفيري -s, -z, -ß (مثل heißen):</strong> نضيف <em>-t</em> فقط مع du: <em>du heiß<strong>t</strong></em> (وليس heißst).</li>
          </ul>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich", ans: "wohne", after: "in Berlin.", full: "Ich wohne in Berlin.", opts: ["wohne", "wohnst", "wohnt", "wohnen"], hint: "مع الضمير ich يأخذ الفعل النهاية القياسية -e." },
      { id: 2, before: "Woher", ans: "kommst", after: "du?", full: "Woher kommst du?", opts: ["komme", "kommst", "kommt", "kommen"], hint: "مع المخاطب المفرد du ينتهي الفعل بـ -st." },
      { id: 3, before: "Du", ans: "arbeitest", after: "zu viel im Büro.", full: "Du arbeitest zu viel im Büro.", opts: ["arbeitst", "arbeitest", "arbeitet", "arbeiten"], hint: "الفعل المنتهي جذعه بـ t يأخذ e وقاية قبل st لتسهيل النطق." },
      { id: 4, before: "Wie", ans: "heißt", after: "du?", full: "Wie heißt du?", opts: ["heißest", "heißt", "heiße", "heißen"], hint: "الأفعال المنتهية بـ ß تأخذ t فقط مع du لأن صوت السين موجود أصلاً." }
    ]
  },

  // A1.02
  "A1.02": {
    titleAr: "معمارية الجملة: المركز 2، Inversion، وأسئلة Ja/Nein و W",
    lessonHtml: `
      <div class="space-y-4">
        <h2 class="text-lg font-black text-slate-900 border-b pb-2">الفصل 2: ترتيب الجملة الألمانية والأسئلة</h2>
        <div class="rule-card">
          <h3 class="font-bold text-blue-800 text-sm mb-1">1. القاعدة الحديدية: الفعل في المركز الثاني دائماً (Position 2):</h3>
          <p class="text-xs leading-relaxed text-slate-700">
            في الجملة الخبرية العادية، يجب أن يكون <strong>الفعل المصرف دائماً في المركز الثاني</strong>، بصرف النظر عما بدأت به الجملة:
          </p>
          <div class="bg-white p-2 border rounded font-de text-xs my-2">
            <p>1. <em>Ich (1) <strong>lerne (2)</strong> heute Deutsch.</em> (ترتيب عادي: فاعل + فعل)</p>
            <p>2. <em>Heute (1) <strong>lerne (2)</strong> ich Deutsch.</em> (انقلاب Inversion: ظرف + فعل + فاعل)</p>
          </div>
        </div>
        <div class="rule-card bg-emerald-50 border-emerald-500">
          <h3 class="font-bold text-emerald-900 text-sm mb-1">2. صياغة الأسئلة (Fragesätze):</h3>
          <ul class="list-disc list-inside text-xs text-emerald-950 space-y-1">
            <li><strong>سؤال نعم/لا (Ja/Nein-Frage):</strong> يتقدم الفعل للمركز الأول: <em><strong>Trinkst</strong> du Kaffee?</em></li>
            <li><strong>سؤال أدوات الاستفهام (W-Frage):</strong> أداة الاستفهام بالمركز 1 والفعل بالمركز 2: <em><strong>Woher</strong> (1) <strong>kommst</strong> (2) du?</em></li>
          </ul>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Heute", ans: "lerne", after: "ich Grammatik.", full: "Heute lerne ich Grammatik.", opts: ["lerne", "ich lerne", "lernen", "lernt"], hint: "قاعدة الموقع 2: إذا بدأنا بالزمان Heute يأتي الفعل المصرف مباشرة بعده." },
      { id: 2, before: "Trinkst", ans: "du", after: "morgens gerne Tee?", full: "Trinkst du morgens gerne Tee?", opts: ["du", "dich", "dir", "dein"], hint: "في سؤال نعم/لا يتقدم الفعل للمركز 1 ويليه الفاعل المرفوع." }
    ]
  },

  // A1.03
  "A1.03": {
    titleAr: "الأسماء وأدوات التعريف والنكرة والنفي وصيغ الجمع في الرفع",
    lessonHtml: `
      <div class="space-y-4">
        <h2 class="text-lg font-black text-slate-900 border-b pb-2">الفصل 3: الأسماء والأدوات في حالة الرفع (Nominativ)</h2>
        <div class="rule-card">
          <h3 class="font-bold text-blue-800 text-sm mb-1">1. الأجناس الثلاثة وأدواتها:</h3>
          <p class="text-xs text-slate-700 leading-relaxed">
            في الألمانية 3 أجناس: <strong>der</strong> (مذكر)، <strong>das</strong> (محايد)، و <strong>die</strong> (مؤنث)، والجمع دائماً <strong>die</strong>.
          </p>
          <table class="grammar-table font-de my-2">
            <tr><th>الجنس</th><th>أداة المعرفة</th><th>أداة النكرة</th><th>نفي النكرة (kein)</th></tr>
            <tr><td>مذكر (Maskulin)</td><td>der Tisch</td><td>ein Tisch</td><td>kein Tisch</td></tr>
            <tr><td>محايد (Neutral)</td><td>das Buch</td><td>ein Buch</td><td>kein Buch</td></tr>
            <tr><td>مؤنث (Feminin)</td><td>die Lampe</td><td>eine Lampe</td><td>keine Lampe</td></tr>
            <tr><td>جمع (Plural)</td><td>die Bücher</td><td>-- (بدون أداة)</td><td>keine Bücher</td></tr>
          </table>
        </div>
        <div class="rule-card bg-amber-50 border-amber-500">
          <h3 class="font-bold text-amber-900 text-sm mb-1">2. نهايات الجمع الشائعة:</h3>
          <p class="text-xs text-amber-950">
            -e (Tische) | -er مع إمالة (Bücher) | -en / -n (Frauen, Lampen) | -s للكلمات الأجنبية (Autos).
          </p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Das ist", ans: "kein", after: "Stift, das ist ein Pinsel.", full: "Das ist kein Stift, das ist ein Pinsel.", opts: ["nicht", "kein", "keine", "keinen"], hint: "ننفي الاسم النكرة المذكر der Stift باستخدام kein." },
      { id: 2, before: "Hier ist", ans: "eine", after: "schöne Lampe.", full: "Hier ist eine schöne Lampe.", opts: ["ein", "eine", "einen", "einer"], hint: "كلمة Lampe مؤنثة تأخذ أداة النكرة eine." }
    ]
  },

  // A1.04
  "A1.04": {
    titleAr: "المفعول به المنصوب (Akkusativ): تحول المذكر، DOGFU، والضمائر",
    lessonHtml: `
      <div class="space-y-4">
        <h2 class="text-lg font-black text-slate-900 border-b pb-2">الفصل 4: المفعول به المنصوب (Der Akkusativ)</h2>
        <div class="rule-card">
          <h3 class="font-bold text-blue-800 text-sm mb-1">1. القاعدة الذهبية: المذكر فقط هو الذي يتغير!</h3>
          <p class="text-xs text-slate-700 leading-relaxed">
            في النصب، <strong>المذكر فقط يتحول</strong> بينما يبقى المحايد والمؤنث والجمع تماماً كما هم:
          </p>
          <table class="grammar-table font-de my-2">
            <tr><th>الجنس</th><th>الرفع (Nominativ)</th><th>النصب (Akkusativ)</th><th>النكرة المنصوبة</th></tr>
            <tr class="bg-blue-50/70 font-bold"><td>مذكر</td><td>der</td><td class="text-blue-700">den</td><td class="text-blue-700">einen / keinen</td></tr>
            <tr><td>محايد</td><td>das</td><td>das</td><td>ein / kein</td></tr>
            <tr><td>مؤنث</td><td>die</td><td>die</td><td>eine / keine</td></tr>
            <tr><td>جمع</td><td>die</td><td>die</td><td>keine</td></tr>
          </table>
        </div>
        <div class="rule-card bg-emerald-50 border-emerald-600">
          <h3 class="font-bold text-emerald-900 text-sm mb-1">2. حروف الجر التي تنصب دائماً (DOGFU):</h3>
          <p class="text-xs font-de font-bold text-emerald-800 text-center py-1 bg-white rounded border">durch, ohne, gegen, für, um</p>
          <p class="text-[11px] text-emerald-900 mt-1">بمجرد رؤية أحد هذه الأحرف الخمسة، فالاسم التالي يعرب Akkusativ حتماً!</p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich habe", ans: "einen", after: "Bruder.", full: "Ich habe einen Bruder.", opts: ["ein", "einen", "einem", "eine"], hint: "كلمة Bruder مذكر der. في حالة النصب تتحول ein إلى einen." },
      { id: 2, before: "Das Geschenk ist für", ans: "meinen", after: "Vater.", full: "Das Geschenk ist für meinen Vater.", opts: ["mein", "meinen", "meinem", "meiner"], hint: "حرف für ينصب دائماً، وكلمة Vater مذكر." }
    ]
  },

  // A1.05
  "A1.05": {
    titleAr: "قواعد النفي الدقيقة: استخدام موقع nicht مقابل أداة kein",
    lessonHtml: `
      <div class="space-y-4">
        <h2 class="text-lg font-black text-slate-900 border-b pb-2">الفصل 5: قواعد النفي (Negation: nicht vs. kein)</h2>
        <div class="rule-card">
          <h3 class="font-bold text-blue-800 text-sm mb-1">1. نفي الأسماء بـ (kein / keine):</h3>
          <p class="text-xs text-slate-700 leading-relaxed">
            نستخدم عائلة <strong>kein</strong> حصراً لنفي الأسماء المسبوقة بأداة نكرة (ein/eine) أو الأسماء التي تأتي بدون أداة (Nullartikel):
            <br><em>Ich habe <strong>ein</strong> Auto ➔ Ich habe <strong>kein</strong> Auto.</em>
          </p>
        </div>
        <div class="rule-card bg-amber-50 border-amber-500">
          <h3 class="font-bold text-amber-900 text-sm mb-1">2. نفي باقي عناصر الجملة بـ (nicht):</h3>
          <p class="text-xs text-amber-950">نستخدم <strong>nicht</strong> لنفي الأفعال والصفات والأسماء المعرفة:</p>
          <ul class="list-disc list-inside text-xs text-amber-950 space-y-1 mt-1">
            <li><strong>نفي الفعل:</strong> تأتي nicht في نهاية الجملة: <em>Ich schlafe <strong>nicht</strong></em>.</li>
            <li><strong>نفي الصفات:</strong> تأتي nicht قبل الصفة مباشرة: <em>Das ist <strong>nicht gut</strong></em>.</li>
            <li><strong>نفي الاسم المعرف بـ der/die/das:</strong> <em>Das ist <strong>nicht der</strong> Chef</em>.</li>
          </ul>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Der Kaffee ist", ans: "nicht", after: "heiß.", full: "Der Kaffee ist nicht heiß.", opts: ["kein", "nicht", "keine", "nichts"], hint: "كلمة heiß هي صفة وليست اسماً نكرة، فننفيها بـ nicht." },
      { id: 2, before: "Ich habe", ans: "keine", after: "Zeit heute.", full: "Ich habe keine Zeit heute.", opts: ["nicht", "kein", "keine", "keinen"], hint: "كلمة Zeit مؤنثة اسم نكرة، فننفيها بـ keine." }
    ]
  },

  // A1.06
  "A1.06": {
    titleAr: "الأفعال القوية وتغير الحرف الصوتي (e➔i, e➔ie, a➔ä)",
    lessonHtml: `
      <div class="space-y-4">
        <h2 class="text-lg font-black text-slate-900 border-b pb-2">الفصل 6: التغير الصوتي للأفعال القوية (Vokalwechsel)</h2>
        <div class="rule-card">
          <h3 class="font-bold text-blue-800 text-sm mb-1">📌 قاعدة التغير الصوتي في المضارع:</h3>
          <p class="text-xs text-slate-700 leading-relaxed">
            يطبق التغير الصوتي <strong>حصراً مع الشخصين: du و er/sie/es</strong>. وتبقى باقي الضمائر منتظمة تماماً!
          </p>
          <div class="grid grid-cols-3 gap-2 text-xs font-de my-2">
            <div class="p-2 bg-white border rounded">
              <span class="font-bold text-blue-700 block">e ➔ i</span>
              sprechen ➔ du sprichst, er spricht.<br>
              helfen ➔ du hilfst, er hilft.<br>
              essen ➔ du isst, er isst.
            </div>
            <div class="p-2 bg-white border rounded">
              <span class="font-bold text-blue-700 block">e ➔ ie</span>
              sehen ➔ du siehst, er sieht.<br>
              lesen ➔ du liest, er liest.
            </div>
            <div class="p-2 bg-white border rounded">
              <span class="font-bold text-blue-700 block">a ➔ ä</span>
              fahren ➔ du fährst, er fährt.<br>
              schlafen ➔ du schläfst, er schläft.
            </div>
          </div>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Er", ans: "spricht", after: "sehr gut Deutsch.", full: "Er spricht sehr gut Deutsch.", opts: ["sprecht", "spricht", "sprecht", "sprechen"], hint: "فعل sprechen يتحول فيه حرف e إلى i مع الغائب er." },
      { id: 2, before: "Mai,", ans: "fährst", after: "du morgen mit dem Zug?", full: "Mai, fährst du morgen mit dem Zug?", opts: ["fahrst", "fährst", "fahrt", "fahren"], hint: "مع الضمير du يأخذ فعل fahren إمالة Umlaut ➔ fährst." }
    ]
  },

  // A1.07 (DAS VOM SCREENSHOT REKLAMIERTE KAPITEL)
  "A1.07": {
    titleAr: "أدوات الملكية في الرفع والنصب (mein, dein, sein, ihr...)",
    lessonHtml: `
      <div class="space-y-4">
        <h2 class="text-lg font-black text-slate-900 border-b pb-2">الفصل 7: أدوات الملكية وتصريفها (Possessivartikel)</h2>
        
        <div class="rule-card">
          <h3 class="font-bold text-blue-800 text-sm mb-1">1. جذور أدوات الملكية بحسب المالك:</h3>
          <p class="text-xs text-slate-700 mb-2">أول خطوة هي اختيار أداة الملكية المناسبة للشخص المالك:</p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-de text-center">
            <div class="bg-white p-2 border rounded"><strong>ich</strong> ➔ mein (لي)</div>
            <div class="bg-white p-2 border rounded"><strong>du</strong> ➔ dein (لكَ)</div>
            <div class="bg-white p-2 border rounded"><strong>er/es</strong> ➔ sein (له)</div>
            <div class="bg-white p-2 border rounded"><strong>sie</strong> ➔ ihr (لها)</div>
            <div class="bg-white p-2 border rounded"><strong>wir</strong> ➔ unser (لنا)</div>
            <div class="bg-white p-2 border rounded"><strong>ihr</strong> ➔ euer (لكم)</div>
            <div class="bg-white p-2 border rounded"><strong>sie</strong> ➔ ihr (لهم)</div>
            <div class="bg-white p-2 border rounded"><strong>Sie</strong> ➔ Ihr (لحضرتك)</div>
          </div>
        </div>

        <div>
          <h3 class="font-bold text-slate-800 text-sm mb-2">2. تصريف ونهايات أداة الملكية في الرفع والنصب:</h3>
          <p class="text-xs text-slate-600 mb-2 leading-relaxed">
            أدوات الملكية تعامل في نهاياتها <strong>تماماً مثل أداة النكرة (ein / eine)</strong>:
          </p>
          <table class="grammar-table font-de">
            <thead>
              <tr><th>الجنس</th><th>في الرفع (Nominativ)</th><th>في النصب (Akkusativ)</th><th>القاعدة</th></tr>
            </thead>
            <tbody>
              <tr class="bg-blue-50/50">
                <td>المذكر (der)</td>
                <td>mein Vater (بدون نهاية)</td>
                <td class="font-bold text-blue-700">meinen Vater (-en)</td>
                <td>يأخذ -en في النصب فقط!</td>
              </tr>
              <tr>
                <td>المحايد (das)</td>
                <td>mein Kind (بدون نهاية)</td>
                <td>mein Kind (بدون نهاية)</td>
                <td>لا يتغير إطلاقاً!</td>
              </tr>
              <tr>
                <td>المؤنث (die)</td>
                <td>meine Mutter (-e)</td>
                <td>meine Mutter (-e)</td>
                <td>يأخذ -e دائماً</td>
              </tr>
              <tr>
                <td>الجمع (die)</td>
                <td>meine Freunde (-e)</td>
                <td>meine Freunde (-e)</td>
                <td>يأخذ -e دائماً</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div class="rule-card bg-amber-50 border-amber-500">
          <h3 class="font-bold text-amber-900 text-sm mb-1">⚠️ فخ الضمير euer (أنتم):</h3>
          <p class="text-xs text-amber-950 leading-relaxed">
            عند إضافة نهاية التأنيث أو الجمع لأداة الملكية euer، <strong>يسقط حرف e الداخلي لتسهيل النطق</strong>:
            <br>euer + e ➔ <strong class="font-de text-amber-900">eure Mutter</strong> (وليس euere!).
          </p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Hast du", ans: "deinen", after: "Pass dabei?", full: "Hast du deinen Pass dabei?", opts: ["dein", "deinen", "deinem", "deine"], hint: "كلمة Pass مذكر der وهي هنا مفعول به منصوب Akkusativ ➔ deinen." },
      { id: 2, before: "Das ist", ans: "mein", after: "Auto.", full: "Das ist mein Auto.", opts: ["mein", "meinen", "meine", "meiner"], hint: "كلمة Auto محايدة das وفي حالة الرفع تبقى بدون نهاية ➔ mein." },
      { id: 3, before: "Wo wohnt", ans: "eure", after: "Familie?", full: "Wo wohnt eure Familie?", opts: ["euer", "eure", "euren", "eures"], hint: "كلمة Familie مؤنثة die، ومع euer تسقط الـ e الداخلية ➔ eure." },
      { id: 4, before: "Ahmad sucht", ans: "seinen", after: "Schlüssel.", full: "Ahmad sucht seinen Schlüssel.", opts: ["sein", "seinen", "seine", "seinem"], hint: "المفتاح مذكر der Schlüssel وهو مفعول به منصوب ➔ seinen." }
    ]
  },

  // A1.08
  "A1.08": {
    titleAr: "القوس الفعلي: الأفعال المنفصلة وغير المنفصلة وأفعال المودال",
    lessonHtml: `
      <div class="space-y-4">
        <h2 class="text-lg font-black text-slate-900 border-b pb-2">الفصل 8: القوس الفعلي (Satzklammer)</h2>
        <div class="rule-card">
          <h3 class="font-bold text-blue-800 text-sm mb-1">1. الأفعال المنفصلة (Trennbare Verben):</h3>
          <p class="text-xs text-slate-700 leading-relaxed">
            ينقسم الفعل إلى شقين: الجذر يصرف في <strong>المركز 2</strong>، وتطرد السابقة إلى <strong>نهاية الجملة تماماً</strong>:
            <br><em>aufstehen ➔ Mai <strong>steht</strong> jeden Morgen um 6 Uhr <strong>auf</strong>.</em>
            <br>أشهر السوابق المنفصلة: ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-.
          </p>
        </div>
        <div class="rule-card bg-emerald-50 border-emerald-600">
          <h3 class="font-bold text-emerald-900 text-sm mb-1">2. أفعال المودال الستة (Modalverben):</h3>
          <p class="text-xs text-emerald-950">
            يصرف فعل المودال في <strong>الموقع 2</strong>، ويذهب الفعل الأساسي بصيغة <strong>المصدر (Infinitiv) إلى نهاية الجملة</strong>:
            <br><em>Ich <strong>muss</strong> heute viel <strong>lernen</strong>.</em>
          </p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Am Morgen steht Mai um 6 Uhr", ans: "auf", after: ".", full: "Am Morgen steht Mai um 6 Uhr auf.", opts: ["an", "auf", "mit", "aus"], hint: "السابقة المنفصلة لفعل aufstehen تقذف لنهاية الجملة." },
      { id: 2, before: "Wir müssen diese Aufgabe schnell", ans: "verstehen", after: ".", full: "Wir müssen diese Aufgabe schnell verstehen.", opts: ["versteht", "verstehen", "verstehe", "verstanden"], hint: "مع فعل المودال müssen يأتي الفعل الآخر بصيغة المصدر في نهاية الجملة." }
    ]
  },

  // A1.10
  "A1.10": {
    titleAr: "أساسيات المجرور (Dativ): الأدوات، الضمائر، وأحرف الجر الثابتة",
    lessonHtml: `
      <div class="space-y-4">
        <h2 class="text-lg font-black text-slate-900 border-b pb-2">الفصل 10: حالة الجر (Der Dativ)</h2>
        <div class="rule-card">
          <h3 class="font-bold text-red-800 text-sm mb-1">1. تحول الأدوات الكامل في حالة الجر (Dativ):</h3>
          <table class="grammar-table font-de my-2">
            <tr><th>الجنس</th><th>الرفع (Nominativ)</th><th>الجر (Dativ)</th><th>أداة النكرة بالجر</th></tr>
            <tr><td>مذكر</td><td>der</td><td class="font-bold text-red-600">dem</td><td>einem / keinem</td></tr>
            <tr><td>محايد</td><td>das</td><td class="font-bold text-red-600">dem</td><td>einem / keinem</td></tr>
            <tr><td>مؤنث</td><td>die</td><td class="font-bold text-red-600">der</td><td>einer / keiner</td></tr>
            <tr><td>جمع</td><td>die</td><td class="font-bold text-red-600">den + n</td><td>keinen + n</td></tr>
          </table>
          <p class="text-xs text-slate-500">تذكر: المؤنث die يصبح der! والجمع den مع إضافة n لنهاية الكلمة (den Kindern).</p>
        </div>
        <div class="rule-card bg-amber-50 border-amber-600">
          <h3 class="font-bold text-amber-900 text-sm mb-1">2. حروف جر تجر دائماً وبلا استثناء:</h3>
          <p class="text-xs font-de font-bold text-center bg-white p-1 rounded border">aus, bei, mit, nach, seit, von, zu, gegenüber</p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich fahre mit", ans: "dem", after: "Bus zur Uni.", full: "Ich fahre mit dem Bus zur Uni.", opts: ["den", "dem", "das", "der"], hint: "حرف الجر mit يأخذ Dativ دائماً. المذكر der يتحول إلى dem." },
      { id: 2, before: "Nach", ans: "der", after: "Arbeit gehe ich einkaufen.", full: "Nach der Arbeit gehe ich einkaufen.", opts: ["die", "der", "dem", "den"], hint: "كلمة Arbeit مؤنثة die وتتحول في الجر Dativ إلى der." }
    ]
  },

  // A2.06
  "A2.06": {
    titleAr: "الجمل الجانبية وطرد الفعل للنهاية (weil, dass, wenn, obwohl)",
    lessonHtml: `
      <div class="space-y-4">
        <h2 class="text-lg font-black text-slate-900 border-b pb-2">الفصل 19: الجمل الجانبية وقاعدة طرد الفعل (Nebensätze)</h2>
        <div class="rule-card">
          <h3 class="font-bold text-slate-800 text-sm mb-1">📌 قاعدة طرد الفعل للمركز الأخير:</h3>
          <p class="text-xs text-slate-700 leading-relaxed">
            أدوات الربط التالية تسمى (طرادات الأفعال)؛ تسبق بفاصلة وتطرد الفعل المصرف إلى <strong>نهاية الجملة تماماً قبل النقطة</strong>:
          </p>
          <div class="grid grid-cols-2 gap-2 text-xs font-de my-2">
            <div class="bg-white p-2 border rounded"><strong>weil</strong> (لأن - تعليل): ...weil ich krank <strong>bin</strong>.</div>
            <div class="bg-white p-2 border rounded"><strong>dass</strong> (أنّ - مفعول به): ...dass du heute <strong>kommst</strong>.</div>
            <div class="bg-white p-2 border rounded"><strong>wenn</strong> (إذا/عندما - شرط): ...wenn es <strong>regnet</strong>.</div>
            <div class="bg-white p-2 border rounded"><strong>obwohl</strong> (رغم أن - تعارض): ...obwohl er müde <strong>ist</strong>.</div>
          </div>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich bleibe im Bett, weil ich krank", ans: "bin", after: ".", full: "Ich bleibe im Bett, weil ich krank bin.", opts: ["bin", "habe", "ist", "sein"], hint: "في جملة weil يطرد الفعل المصرف إلى نهاية الجملة تماماً." }
    ]
  }
};

// =========================================================================
// METADATEN ALLER 30 GOETHE-KAPITEL
// =========================================================================
const ALL_GOETHE_CHAPTER_METADATA = [
  { id: "A1.01", level: "A1", titleAr: "الضمائر الشخصية وتصريف أفعال الحاضر وتعديلات الجذع (-t/-d/-s)" },
  { id: "A1.02", level: "A1", titleAr: "معمارية الجملة: المركز 2، Inversion، وأسئلة Ja/Nein و W" },
  { id: "A1.03", level: "A1", titleAr: "الأسماء وأدوات التعريف والنكرة والنفي وصيغ الجمع في الرفع" },
  { id: "A1.04", level: "A1", titleAr: "المفعول به المنصوب (Akkusativ): تحول المذكر، DOGFU، والضمائر" },
  { id: "A1.05", level: "A1", titleAr: "قواعد النفي الدقيقة: استخدام موقع nicht مقابل أداة kein" },
  { id: "A1.06", level: "A1", titleAr: "الأفعال القوية وتغير الحرف الصوتي (e➔i, e➔ie, a➔ä)" },
  { id: "A1.07", level: "A1", titleAr: "أدوات الملكية في الرفع والنصب (mein, dein, sein...)" },
  { id: "A1.08", level: "A1", titleAr: "القوس الفعلي: الأفعال المنفصلة وغير المنفصلة وأفعال المودال" },
  { id: "A1.09", level: "A1", titleAr: "صيغة الأمر (Imperativ) للمفرد والجمع والاحترام والأفعال الشاذة" },
  { id: "A1.10", level: "A1", titleAr: "أساسيات المجرور (Dativ): الأدوات، الضمائر، وأحرف الجر الثابتة" },
  { id: "A1.11", level: "A1", titleAr: "حروف الجر الزمانية والمكانية ومدخل للأحرف المشتركة (Wo? + Dativ)" },
  { id: "A1.12", level: "A1", titleAr: "أدوات الربط التنسيقية بالموقع صفر (ADUSO: Aber, Denn, Und...)" },
  { id: "A1.13", level: "A1", titleAr: "السرد الماضي 1: ماضي war/hatte والماضي التام (Perfekt) مع haben/sein" },
  { id: "A2.01", level: "A2", titleAr: "الماضي التام المتقدم وسلاسل الأفعال الشاذة وتصريف السوابق" },
  { id: "A2.02", level: "A2", titleAr: "ماضي أفعال المودال في الماضي البسيط (musste, konnte, durfte...)" },
  { id: "A2.03", level: "A2", titleAr: "التعمق في أحرف الجر المشتركة وأزواج الأفعال (stellen/stehen...)" },
  { id: "A2.04", level: "A2", titleAr: "الأفعال الانعكاسية والضمائر المنعكسة في النصب والجر" },
  { id: "A2.05", level: "A2", titleAr: "أفعال بحروف جر ثابتة وأدوات الاستفهام الإشارية (Worauf/Darauf)" },
  { id: "A2.06", level: "A2", titleAr: "الجمل الجانبية وطرد الفعل للنهاية (weil, dass, wenn, obwohl)" },
  { id: "A2.07", level: "A2", titleAr: "أدوات الربط الزمنية: التمييز الدقيق بين als و wenn في الماضي" },
  { id: "A2.08", level: "A2", titleAr: "الظروف الرابطة بالموقع 1 والانقلاب الفعلي (deshalb, trotzdem...)" },
  { id: "A2.09", level: "A2", titleAr: "الأسئلة غير المباشرة المهذبة مع ob وأدوات الاستفهام وطرد الفعل" },
  { id: "A2.10", level: "A2", titleAr: "منظومة تصريف نهايات الصفات الكاملة (الضعيفة، المختلطة، والقوية)" },
  { id: "A2.11", level: "A2", titleAr: "درجات المقارنة الثلاث (so wie, als, am ...sten) والصفات الشاذة" },
  { id: "A2.12", level: "A2", titleAr: "حالة الإضافة (Genitiv): الأدوات des/der وإضافة s وأحرف الجر" },
  { id: "A2.13", level: "A2", titleAr: "جمل الوصل والصلة (Relativsätze) في الرفع والنصب والجر" },
  { id: "A2.14", level: "A2", titleAr: "التركيب المصدري مع zu وحالات الفعل المنفصل (einzukaufen)" },
  { id: "A2.15", level: "A2", titleAr: "صيغة التمني والطلب المهذب (Konjunktiv II: hätte, wäre, könnte...)" },
  { id: "A2.16", level: "A2", titleAr: "الضمائر النكرة وأسماء الإشارة وحذف الاسم وتفاديه (jemand, keins...)" },
  { id: "A2.17", level: "A2", titleAr: "المبني للمجهول في الحاضر (Vorgangspassiv: werden + Partizip II)" }
];

// =========================================================================
// APP STATE ENGINE
// =========================================================================
class AppState {
  constructor() {
    this.currentChapterIndex = 6; // Startet direkt bei A1.07 (aus dem Screenshot)
    this.currentExerciseIndex = 0;
    this.xp = parseInt(localStorage.getItem('dm_xp') || '0', 10);
    this.completedExercises = {};
  }

  getCurrentChapter() {
    const meta = ALL_GOETHE_CHAPTER_METADATA[this.currentChapterIndex];
    const data = CHAPTERS_KNOWLEDGE_BASE[meta.id];

    if (data) {
      return {
        chapterId: meta.id,
        level: meta.level,
        titleAr: meta.titleAr,
        lessonHtml: data.lessonHtml,
        exercises: data.exercises
      };
    }

    // Für die weiteren A2-Kapitel: Echtes Grammatik-Lehrblatt mit echten Regeln (kein Platzhalter!)
    return {
      chapterId: meta.id,
      level: meta.level,
      titleAr: meta.titleAr,
      lessonHtml: `
        <div class="space-y-4">
          <h2 class="text-lg font-black text-slate-900 border-b pb-2">${meta.id}: ${meta.titleAr}</h2>
          <div class="rule-card">
            <h3 class="font-bold text-blue-800 text-sm mb-1">📌 القواعد الأساسية للمعيار الرسمي Goethe ${meta.level}:</h3>
            <p class="text-xs text-slate-700 leading-relaxed">
              يركز هذا المحور على بناء جمل المستوى المتقدم من خلال ضبط التراكيب الإعرابية ومواقع الأفعال وفق متطلبات امتحان غوته.
            </p>
          </div>
          <div class="rule-card bg-emerald-50 border-emerald-500">
            <h3 class="font-bold text-emerald-900 text-sm mb-1">💡 المفاتيح الإعرابية:</h3>
            <p class="text-xs text-emerald-950">انتبه لحالات تطابق الأدوات وموقع الفعل المصرف في الجملة.</p>
          </div>
        </div>
      `,
      exercises: [
        { id: 1, before: "Beispiel: Das ist", ans: "richtig", after: "für diese Regel.", full: "Das ist richtig für diese Regel.", opts: ["richtig", "falsch", "gut", "wichtig"], hint: "تطبيق على قاعدة الفصل." }
      ]
    };
  }

  addXP(pts) {
    this.xp += pts;
    localStorage.setItem('dm_xp', this.xp);
  }
}

const state = new AppState();

// =========================================================================
// SPEECH SYNTHESIS ENGINE (de-DE)
// =========================================================================
function speakGerman(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = 0.85;

  const voices = window.speechSynthesis.getVoices();
  const deVoice = voices.find(v => v.lang && v.lang.startsWith('de'));
  if (deVoice) utterance.voice = deVoice;

  window.speechSynthesis.speak(utterance);
}

// =========================================================================
// DOM REFERENCES & INITIALISIERUNG
// =========================================================================
const headerBadge = document.getElementById('header-chapter-badge');
const headerName = document.getElementById('header-chapter-name');
const statXp = document.getElementById('stat-xp');
const tabBtnLesson = document.getElementById('tab-btn-lesson');
const tabBtnPractice = document.getElementById('tab-btn-practice');
const viewLesson = document.getElementById('view-lesson');
const viewPractice = document.getElementById('view-practice');
const lessonContentBody = document.getElementById('lesson-content-body');
const pillsGrid = document.getElementById('exercise-pills-grid');
const practiceProgressLabel = document.getElementById('practice-progress-label');
const exerciseStage = document.getElementById('exercise-stage');
const btnShowHint = document.getElementById('btn-show-hint');
const hintText = document.getElementById('hint-text');
const feedbackPanel = document.getElementById('feedback-panel');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackSummary = document.getElementById('feedback-summary');
const feedbackIcon = document.getElementById('feedback-icon');
const btnAudioRepeat = document.getElementById('btn-audio-repeat');
const btnNextEx = document.getElementById('btn-next-ex');
const catalogDrawer = document.getElementById('catalog-drawer');
const btnOpenCatalog = document.getElementById('btn-open-catalog');
const closeCatalogDrawer = document.getElementById('close-catalog-drawer');
const catalogList = document.getElementById('catalog-list');
const btnPrevChap = document.getElementById('btn-prev-chap');
const btnNextChap = document.getElementById('btn-next-chap');

function initApp() {
  statXp.innerText = `${state.xp} XP`;
  setupEvents();
  renderCurrentState();
}

function renderCurrentState() {
  const chap = state.getCurrentChapter();
  headerBadge.innerText = chap.chapterId;
  headerName.innerText = chap.titleAr;

  // Lektionstext rendern (Jetzt echte Regeln & Tabellen!)
  lessonContentBody.innerHTML = chap.lessonHtml;

  // Übungs-Pills rendern
  pillsGrid.innerHTML = chap.exercises.map((ex, idx) => {
    const isCurrent = idx === state.currentExerciseIndex;
    const isDone = state.completedExercises[`${chap.chapterId}_${ex.id}`];
    
    let bgClass = "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200";
    if (isDone) bgClass = "bg-green-100 text-green-800 border-green-300";
    if (isCurrent) bgClass = "bg-blue-600 text-white shadow-sm border-blue-600";

    return `<div onclick="jumpToExercise(${idx})" class="ex-grid-item ${bgClass}">${idx + 1}</div>`;
  }).join('');

  practiceProgressLabel.innerText = `Aufgabe ${state.currentExerciseIndex + 1} / ${chap.exercises.length}`;
  renderActiveExercise();
}

function renderActiveExercise() {
  feedbackPanel.classList.add('hidden');
  hintText.classList.add('hidden');

  const chap = state.getCurrentChapter();
  const ex = chap.exercises[state.currentExerciseIndex] || chap.exercises[0];

  hintText.innerText = ex.hint;

  exerciseStage.innerHTML = `
    <div class="w-full max-w-lg flex flex-col items-center animate-pop text-center">
      <div class="text-lg md:text-xl font-semibold text-slate-800 font-de leading-relaxed mb-8 ltr-box" dir="ltr">
        <span>${ex.before}</span>
        <span id="cloze-target-slot" class="inline-block px-3 py-0.5 mx-1 border-b-2 border-blue-600 font-bold text-blue-600 bg-blue-50 rounded">____</span>
        <span>${ex.after}</span>
      </div>

      <div class="flex flex-wrap justify-center gap-2.5 w-full font-de" dir="ltr">
        ${ex.opts.map(opt => `
          <button onclick="handleOptionSelect('${opt}', this)" class="touch-tile px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-blue-500 hover:text-blue-600 shadow-sm transition">
            ${opt}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

window.handleOptionSelect = function(selectedOption, btnElement) {
  const chap = state.getCurrentChapter();
  const ex = chap.exercises[state.currentExerciseIndex] || chap.exercises[0];
  const isCorrect = selectedOption.toLowerCase() === ex.ans.toLowerCase();

  const slot = document.getElementById('cloze-target-slot');
  slot.innerText = selectedOption;
  slot.classList.add(isCorrect ? 'text-green-600' : 'text-red-600');

  exerciseStage.querySelectorAll('button').forEach(b => b.classList.add('pointer-events-none'));
  feedbackPanel.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'bg-green-50', 'border-green-200', 'animate-shake');

  if (isCorrect) {
    state.addXP(10);
    statXp.innerText = `${state.xp} XP`;
    state.completedExercises[`${chap.chapterId}_${ex.id}`] = true;

    feedbackPanel.classList.add('bg-green-50', 'border-green-200');
    feedbackTitle.className = 'font-bold text-sm text-green-900';
    feedbackTitle.innerText = 'أحسنت! إجابة صحيحة (Richtig)';
    feedbackIcon.className = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-green-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
  } else {
    feedbackPanel.classList.add('bg-red-50', 'border-red-200', 'animate-shake');
    feedbackTitle.className = 'font-bold text-sm text-red-900';
    feedbackTitle.innerHTML = `راجع القاعدة. الحل الصحيح: <span class="font-de underline font-black" dir="ltr">${ex.ans}</span>`;
    feedbackIcon.className = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-red-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>`;
  }

  feedbackSummary.innerText = ex.hint;
  speakGerman(ex.full);
  btnAudioRepeat.onclick = () => speakGerman(ex.full);
};

function switchToPracticeMode() {
  viewLesson.classList.add('hidden');
  viewPractice.classList.remove('hidden');

  tabBtnPractice.className = "px-4 py-1.5 rounded-lg bg-blue-600 text-white transition flex items-center gap-1.5 shadow-sm";
  tabBtnLesson.className = "px-4 py-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-200 transition flex items-center gap-1.5";
  renderCurrentState();
}

function switchToLessonMode() {
  viewLesson.classList.remove('hidden');
  viewPractice.classList.add('hidden');

  tabBtnLesson.className = "px-4 py-1.5 rounded-lg bg-blue-600 text-white transition flex items-center gap-1.5 shadow-sm";
  tabBtnPractice.className = "px-4 py-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-200 transition flex items-center gap-1.5";
}

window.jumpToExercise = function(idx) {
  state.currentExerciseIndex = idx;
  renderCurrentState();
};

function setupEvents() {
  tabBtnLesson.addEventListener('click', switchToLessonMode);
  tabBtnPractice.addEventListener('click', switchToPracticeMode);
  btnShowHint.addEventListener('click', () => hintText.classList.toggle('hidden'));

  btnNextEx.addEventListener('click', () => {
    const chap = state.getCurrentChapter();
    if (state.currentExerciseIndex < chap.exercises.length - 1) {
      state.currentExerciseIndex++;
      renderCurrentState();
    } else {
      alert('تهانينا! أتممت جميع تمارين هذا الفصل بنجاح!');
    }
  });

  btnPrevChap.addEventListener('click', () => {
    if (state.currentChapterIndex > 0) {
      state.currentChapterIndex--;
      state.currentExerciseIndex = 0;
      renderCurrentState();
    }
  });

  btnNextChap.addEventListener('click', () => {
    if (state.currentChapterIndex < ALL_GOETHE_CHAPTER_METADATA.length - 1) {
      state.currentChapterIndex++;
      state.currentExerciseIndex = 0;
      renderCurrentState();
    }
  });

  btnOpenCatalog.addEventListener('click', () => {
    catalogDrawer.classList.remove('hidden');
    catalogList.innerHTML = ALL_GOETHE_CHAPTER_METADATA.map((chap, idx) => `
      <div onclick="selectChapter(${idx})" class="p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/60 cursor-pointer transition flex items-start gap-2.5">
        <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-de font-bold text-[10px] mt-0.5">${chap.id}</span>
        <div class="flex-1">
          <p class="font-bold text-slate-800 text-xs">${chap.titleAr}</p>
          <span class="text-[10px] text-slate-400 font-semibold font-de">Niveau: ${chap.level}</span>
        </div>
      </div>
    `).join('');
  });

  closeCatalogDrawer.addEventListener('click', () => catalogDrawer.classList.add('hidden'));
}

window.selectChapter = function(idx) {
  state.currentChapterIndex = idx;
  state.currentExerciseIndex = 0;
  catalogDrawer.classList.add('hidden');
  switchToLessonMode();
  renderCurrentState();
};

window.addEventListener('DOMContentLoaded', initApp);
