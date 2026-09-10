/**
 * Deutsch mit Mai – Goethe A1 & A2 Master Engine
 * Vollständige grammatikalische Erklärungen & Tabellen für ALLE 30 Kapitel
 */

const CHAPTERS_KNOWLEDGE_BASE = {
  // ==========================================
  // GOETHE A1 (KAPITEL 1 BIS 13)
  // ==========================================

  "A1.01": {
    titleAr: "الضمائر وتصريف الحاضر وتعديلات الجذع (-t/-d/-s)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 1: الضمائر وتصريف الأفعال وتعديلات الجذع</h2>
        <div class="rule-card">
          <p class="font-bold text-blue-800 text-xs mb-1">1. نهايات الأفعال المنتظمة (Präsens):</p>
          <p class="text-xs font-de">ich -e | du -st | er/sie/es -t | wir -en | ihr -t | sie/Sie -en</p>
        </div>
        <table class="grammar-table font-de">
          <tr><th>الضمير</th><th>lernen (يتعلم)</th><th>arbeiten (تعديل -t-)</th><th>heißen (تعديل -s-)</th></tr>
          <tr><td>ich</td><td>lerne</td><td>arbeite</td><td>heiße</td></tr>
          <tr><td>du</td><td>lernst</td><td class="text-blue-600 font-bold">arbeitest</td><td class="text-blue-600 font-bold">heißt</td></tr>
          <tr><td>er/sie/es</td><td>lernt</td><td class="text-blue-600 font-bold">arbeitet</td><td>heißt</td></tr>
          <tr><td>wir</td><td>lernen</td><td>arbeiten</td><td>heißen</td></tr>
        </table>
        <div class="rule-card bg-amber-50 border-amber-500">
          <p class="text-xs text-amber-950"><strong>قاعدة الجذع:</strong> الأفعال المنتهية بـ -t أو -d تأخذ e وقاية مع du و er: <em>du arbeitest</em>. والمنتهية بحرف صفيري -s, -z, -ß تأخذ -t فقط مع du: <em>du heißt</em>.</p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Du", ans: "arbeitest", after: "sehr fleißig.", full: "Du arbeitest sehr fleißig.", opts: ["arbeitst", "arbeitest", "arbeitet", "arbeiten"], hint: "جذع ينتهي بـ t يأخذ e وقاية قبل st." },
      { id: 2, before: "Wie", ans: "heißt", after: "du?", full: "Wie heißt du?", opts: ["heißest", "heißt", "heiße", "heißen"], hint: "الأفعال المنتهية بـ ß تأخذ t فقط مع du." }
    ]
  },

  "A1.02": {
    titleAr: "معمارية الجملة: المركز 2، Inversion، وأسئلة Ja/Nein و W",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 2: معمارية الجملة ومواقع الفعل</h2>
        <div class="rule-card">
          <p class="font-bold text-blue-800 text-xs mb-1">1. الفعل دائماً في المركز الثاني (Position 2):</p>
          <p class="text-xs">سواء بدأت الجملة بالفاعل أو بالزمان (Inversion)، الفعل لا يتحرك عن الموقع 2:</p>
          <p class="font-de text-xs mt-1"><em>Ich (1) <strong>lerne (2)</strong> heute.</em> ➔ <em>Heute (1) <strong>lerne (2)</strong> ich.</em></p>
        </div>
        <div class="rule-card bg-emerald-50 border-emerald-600">
          <p class="font-bold text-emerald-900 text-xs mb-1">2. الأسئلة:</p>
          <p class="text-xs"><strong>سؤال نعم/لا:</strong> الفعل في المركز 1: <em><strong>Kommst</strong> du morgen?</em><br><strong>سؤال أداة الاستفهام:</strong> أداة W بالمركز 1 والفعل بالمركز 2: <em><strong>Wo</strong> <strong>wohnst</strong> du?</em></p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Heute", ans: "lerne", after: "ich Deutsch.", full: "Heute lerne ich Deutsch.", opts: ["lerne", "ich lerne", "lernen", "lernt"], hint: "الفعل المصرف دائماً في المركز الثاني بعد الظرف." },
      { id: 2, before: "Trinkst", ans: "du", after: "gerne Kaffee?", full: "Trinkst du gerne Kaffee?", opts: ["du", "dich", "dir", "dein"], hint: "في سؤال نعم/لا يتقدم الفعل ويليه الفاعل المرفوع." }
    ]
  },

  "A1.03": {
    titleAr: "الأسماء وأدوات التعريف والنكرة والنفي والجمع في الرفع",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 3: الأسماء والأدوات والجمع في الرفع (Nominativ)</h2>
        <table class="grammar-table font-de">
          <tr><th>الجنس</th><th>المعرفة</th><th>النكرة</th><th>النفي (kein)</th><th>أمثلة للجمع</th></tr>
          <tr><td>مذكر</td><td>der Tisch</td><td>ein Tisch</td><td>kein Tisch</td><td>die Tische (-e)</td></tr>
          <tr><td>محايد</td><td>das Buch</td><td>ein Buch</td><td>kein Buch</td><td>die Bücher (¨-er)</td></tr>
          <tr><td>مؤنث</td><td>die Lampe</td><td>eine Lampe</td><td>keine Lampe</td><td>die Lampen (-n)</td></tr>
          <tr><td>جمع</td><td>die Kinder</td><td>-- (بدون أداة)</td><td>keine Kinder</td><td>die Autos (-s)</td></tr>
        </table>
      </div>
    `,
    exercises: [
      { id: 1, before: "Das ist", ans: "kein", after: "Stift.", full: "Das ist kein Stift.", opts: ["nicht", "kein", "keine", "keinen"], hint: "نفي الاسم النكرة المذكر der Stift يكون بـ kein." },
      { id: 2, before: "Hier steht", ans: "eine", after: "Lampe.", full: "Hier steht eine Lampe.", opts: ["ein", "eine", "einen", "einer"], hint: "المؤنث يأخذ أداة النكرة eine." }
    ]
  },

  "A1.04": {
    titleAr: "المفعول به المنصوب (Akkusativ): تحول المذكر وأحرف DOGFU",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 4: المفعول به المنصوب (Akkusativ)</h2>
        <div class="rule-card">
          <p class="font-bold text-blue-800 text-xs mb-1">📌 المذكر فقط هو الذي يتغير في النصب:</p>
          <table class="grammar-table font-de">
            <tr><th>الجنس</th><th>الرفع (Nominativ)</th><th>النصب (Akkusativ)</th></tr>
            <tr class="bg-blue-50 font-bold"><td>مذكر</td><td>der / ein / kein</td><td class="text-blue-700">den / einen / keinen</td></tr>
            <tr><td>محايد</td><td>das / ein / kein</td><td>das / ein / kein (لا تغيير)</td></tr>
            <tr><td>مؤنث</td><td>die / eine / keine</td><td>die / eine / keine (لا تغيير)</td></tr>
            <tr><td>جمع</td><td>die / -- / keine</td><td>die / -- / keine (لا تغيير)</td></tr>
          </table>
        </div>
        <div class="rule-card bg-emerald-50 border-emerald-600">
          <p class="font-bold text-emerald-900 text-xs">أحرف تنصب دائماً (DOGFU): durch, ohne, gegen, für, um</p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich habe", ans: "einen", after: "Bruder.", full: "Ich habe einen Bruder.", opts: ["ein", "einen", "einem", "eine"], hint: "المذكر der Bruder يتحول في النصب إلى einen." },
      { id: 2, before: "Das ist für", ans: "den", after: "Lehrer.", full: "Das ist für den Lehrer.", opts: ["der", "den", "dem", "das"], hint: "حرف für ينصب الاسم بعده دائماً." }
    ]
  },

  "A1.05": {
    titleAr: "قواعد النفي الدقيقة: استخدام nicht مقابل أداة kein",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 5: قواعد النفي (nicht vs. kein)</h2>
        <div class="rule-card">
          <p class="text-xs"><strong>kein / keine:</strong> تستخدم حصراً لنفي الأسماء النكرة المسبوقة بـ ein أو الأسماء بدون أداة (Ich habe <em>kein</em> Auto).</p>
        </div>
        <div class="rule-card bg-amber-50 border-amber-500">
          <p class="text-xs"><strong>nicht:</strong> تنفي الأفعال في نهاية الجملة (Ich schlafe <em>nicht</em>)، وتنفي الصفات (<em>nicht</em> schön)، وتنفي الأسماء المعرفة بـ der/die/das (Das ist <em>nicht der</em> Chef).</p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Das Wetter ist", ans: "nicht", after: "schön.", full: "Das Wetter ist nicht schön.", opts: ["kein", "nicht", "keine", "nichts"], hint: "نفي الصفات يكون دائماً باستخدام nicht." },
      { id: 2, before: "Ich habe", ans: "keine", after: "Geschwister.", full: "Ich habe keine Geschwister.", opts: ["nicht", "kein", "keine", "keinen"], hint: "نفي اسم الجمع النكرة يكون بـ keine." }
    ]
  },

  "A1.06": {
    titleAr: "الأفعال القوية وتغير الحرف الصوتي (e➔i, e➔ie, a➔ä)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 6: التغير الصوتي للأفعال (Vokalwechsel)</h2>
        <p class="text-xs">يحدث التغير فقط مع الضميرين <strong>du</strong> و <strong>er/sie/es</strong>:</p>
        <div class="grid grid-cols-3 gap-1.5 font-de text-xs">
          <div class="p-2 bg-white border rounded"><strong>e ➔ i</strong><br>geben ➔ du gibst<br>sprechen ➔ er spricht<br>helfen ➔ er hilft</div>
          <div class="p-2 bg-white border rounded"><strong>e ➔ ie</strong><br>sehen ➔ du siehst<br>lesen ➔ er liest</div>
          <div class="p-2 bg-white border rounded"><strong>a ➔ ä</strong><br>fahren ➔ du fährst<br>schlafen ➔ er schläft</div>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Er", ans: "spricht", after: "Arabisch.", full: "Er spricht Arabisch.", opts: ["sprecht", "spricht", "spreche", "sprechen"], hint: "فعل sprechen يتحول e إلى i مع الغائب er." },
      { id: 2, before: "Du", ans: "fährst", after: "sehr schnell.", full: "Du fährst sehr schnell.", opts: ["fahrst", "fährst", "fahrt", "fahren"], hint: "فعل fahren يأخذ Umlaut مع du ➔ fährst." }
    ]
  },

  "A1.07": {
    titleAr: "أدوات الملكية في الرفع والنصب (mein, dein, sein...)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 7: أدوات الملكية وتصريفها (Possessivartikel)</h2>
        <div class="grid grid-cols-4 gap-1 font-de text-[11px] text-center">
          <div class="p-1 bg-slate-100 rounded">ich ➔ <strong>mein</strong></div>
          <div class="p-1 bg-slate-100 rounded">du ➔ <strong>dein</strong></div>
          <div class="p-1 bg-slate-100 rounded">er/es ➔ <strong>sein</strong></div>
          <div class="p-1 bg-slate-100 rounded">sie ➔ <strong>ihr</strong></div>
          <div class="p-1 bg-slate-100 rounded">wir ➔ <strong>unser</strong></div>
          <div class="p-1 bg-slate-100 rounded">ihr ➔ <strong>euer</strong></div>
          <div class="p-1 bg-slate-100 rounded">sie ➔ <strong>ihr</strong></div>
          <div class="p-1 bg-slate-100 rounded">Sie ➔ <strong>Ihr</strong></div>
        </div>
        <table class="grammar-table font-de">
          <tr><th>الحالة</th><th>مذكر (der)</th><th>محايد (das)</th><th>مؤنث (die)</th><th>جمع (die)</th></tr>
          <tr><td>الرفع (Nom)</td><td>mein Vater</td><td>mein Kind</td><td>meine Mutter</td><td>meine Freunde</td></tr>
          <tr class="bg-blue-50 font-bold"><td>النصب (Akk)</td><td class="text-blue-700">meinen Vater (-en)</td><td>mein Kind</td><td>meine Mutter</td><td>meine Freunde</td></tr>
        </table>
        <p class="text-xs text-amber-900 bg-amber-50 p-2 rounded">⚠️ تنبيه: euer تسقط حرف e الداخلي عند التأنيث: <em>eure Mutter</em> وليس euere!</p>
      </div>
    `,
    exercises: [
      { id: 1, before: "Hast du", ans: "deinen", after: "Pass?", full: "Hast du deinen Pass?", opts: ["dein", "deinen", "deinem", "deine"], hint: "كلمة Pass مذكر منصوب فيأخذ deinen." },
      { id: 2, before: "Wo ist", ans: "eure", after: "Wohnung?", full: "Wo ist eure Wohnung?", opts: ["euer", "eure", "euren", "eures"], hint: "كلمة Wohnung مؤنثة فتتحول euer إلى eure." }
    ]
  },

  "A1.08": {
    titleAr: "القوس الفعلي: الأفعال المنفصلة وأفعال المودال الستة",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 8: القوس الفعلي (Satzklammer)</h2>
        <div class="rule-card">
          <p class="text-xs"><strong>1. الأفعال المنفصلة (Trennbare Verben):</strong> الجذر يصرف في المركز 2 والسابقة (ab-, an-, auf-, aus-, ein-, mit-) تقذف لآخر الجملة:<br><span class="font-de font-bold">Ich stehe um 6 Uhr auf.</span></p>
        </div>
        <div class="rule-card bg-emerald-50 border-emerald-600">
          <p class="text-xs"><strong>2. أفعال المودال (können, müssen, wollen, dürfen, sollen, möchten):</strong> يصرف المودال بالمركز 2 ويذهب المصدر للآخر:<br><span class="font-de font-bold">Ich muss heute arbeiten.</span></p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Mai steht jeden Morgen um 6 Uhr", ans: "auf", after: ".", full: "Mai steht jeden Morgen um 6 Uhr auf.", opts: ["an", "auf", "mit", "aus"], hint: "السابقة auf لفعل aufstehen تقذف لنهاية الجملة." },
      { id: 2, before: "Wir müssen viel", ans: "lernen", after: ".", full: "Wir müssen viel lernen.", opts: ["lernt", "lernen", "lerne", "gelernt"], hint: "مع فعل المودال يأتي الفعل الآخر مصدراً بنهاية الجملة." }
    ]
  },

  "A1.09": {
    titleAr: "صيغة الأمر (Imperativ) للمفرد والجمع والاحترام والأفعال الشاذة",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 9: صيغة الأمر (Der Imperativ)</h2>
        <table class="grammar-table font-de">
          <tr><th>الضمير</th><th>القاعدة</th><th>مثال عادي (kommen)</th><th>فعل شاذ (sein)</th></tr>
          <tr><td>du (أنت)</td><td>نحذف du ونحذف -st</td><td>Komm!</td><td class="text-red-600 font-bold">Sei leise!</td></tr>
          <tr><td>ihr (أنتم)</td><td>الفعل المصرف بدون ضمير</td><td>Kommt!</td><td class="text-red-600 font-bold">Seid pünktlich!</td></tr>
          <tr><td>Sie (احترام)</td><td>عكس الفعل مع الضمير</td><td>Kommen Sie!</td><td class="text-red-600 font-bold">Seien Sie vorsichtig!</td></tr>
        </table>
        <p class="text-xs text-slate-600">الأفعال ذات التغير الصوتي (e➔i) تحتفظ بالتغير في الأمر: <em>Lies das Buch!</em></p>
      </div>
    `,
    exercises: [
      { id: 1, before: "Bitte", ans: "sei", after: "leise im Unterricht!", full: "Bitte sei leise im Unterricht!", opts: ["bist", "sei", "seid", "seien"], hint: "أمر فعل الكينونة sein مع المفرد du هو Sei!" },
      { id: 2, before: "Kinder,", ans: "esst", after: "das Gemüse!", full: "Kinder, esst das Gemüse!", opts: ["isst", "esst", "essen", "esse"], hint: "أمر الجمع ihr يصرف كالفعل العادي: esst!" }
    ]
  },

  "A1.10": {
    titleAr: "أساسيات المجرور (Dativ): الأدوات، الضمائر، وأحرف الجر الثابتة",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 10: أساسيات حالة الجر (Der Dativ)</h2>
        <table class="grammar-table font-de">
          <tr><th>الجنس</th><th>الرفع (Nom)</th><th>الجر (Dativ)</th><th>الضمائر بالجر</th></tr>
          <tr><td>مذكر / محايد</td><td>der / das</td><td class="text-red-600 font-bold">dem / einem</td><td>ihm</td></tr>
          <tr><td>مؤنث</td><td>die</td><td class="text-red-600 font-bold">der / einer</td><td>ihr</td></tr>
          <tr><td>جمع</td><td>die</td><td class="text-red-600 font-bold">den + (n)</td><td>ihnen</td></tr>
        </table>
        <div class="rule-card bg-amber-50 border-amber-500">
          <p class="text-xs font-de font-bold text-slate-800">أحرف تجر دائماً: aus, bei, mit, nach, seit, von, zu, gegenüber</p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich fahre mit", ans: "dem", after: "Bus.", full: "Ich fahre mit dem Bus.", opts: ["den", "dem", "das", "der"], hint: "حرف mit يجر دائماً. der Bus يصبح dem Bus." },
      { id: 2, before: "Der Arzt hilft", ans: "der", after: "Frau.", full: "Der Arzt hilft der Frau.", opts: ["die", "der", "dem", "den"], hint: "فعل helfen يتطلب Dativ. مؤنث die يصبح der." }
    ]
  },

  "A1.11": {
    titleAr: "حروف الجر الزمانية والمكانية (um, am, im ومدخل Wo? + Dativ)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 11: حروف الجر الزمانية والمكانية</h2>
        <div class="grid grid-cols-3 gap-1 font-de text-xs text-center">
          <div class="p-1.5 bg-white border rounded"><strong>um</strong><br>للساعات المحددة:<br>um 8 Uhr</div>
          <div class="p-1.5 bg-white border rounded"><strong>am</strong><br>للأيام وأجزاء اليوم:<br>am Montag, am Morgen</div>
          <div class="p-1.5 bg-white border rounded"><strong>im</strong><br>للأشهر والفصول:<br>im Juli, im Sommer</div>
        </div>
        <div class="rule-card">
          <p class="text-xs"><strong>السؤال عن الموقع الثابت (Wo? أين؟):</strong> يأخذ دائماً حالة الجر Dativ: <em>Ich bin <strong>im</strong> (in dem) Supermarkt</em>.</p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Der Kurs beginnt", ans: "am", after: "Montag.", full: "Der Kurs beginnt am Montag.", opts: ["im", "am", "um", "in"], hint: "أيام الأسبوع تأخذ دائماً حرف الجر am." },
      { id: 2, before: "Ich treffe dich", ans: "um", after: "15 Uhr.", full: "Ich treffe dich um 15 Uhr.", opts: ["am", "im", "um", "an"], hint: "الساعات المحددة تأخذ حرف الجر um." }
    ]
  },

  "A1.12": {
    titleAr: "أدوات الربط التنسيقية بالموقع صفر (ADUSO: aber, denn, und...)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 12: أدوات الربط في الموقع صفر (ADUSO)</h2>
        <p class="text-xs">هذه الأدوات <strong>لا تغير ترتيب الجملة إطلاقاً</strong>؛ تحتل الموقع صفر ويبقى الفعل بالمركز 2:</p>
        <div class="p-2 bg-slate-100 rounded font-de font-bold text-center text-xs text-blue-700">
          Aber (لكن) | Denn (لأن) | Und (و) | Sondern (بل) | Oder (أو)
        </div>
        <p class="text-xs font-de"><em>Ich lerne Deutsch, <strong>denn</strong> (0) ich (1) <strong>möchte (2)</strong> reisen.</em></p>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich lerne Deutsch,", ans: "denn", after: "ich brauche es für den Beruf.", full: "Ich lerne Deutsch, denn ich brauche es für den Beruf.", opts: ["weil", "denn", "deshalb", "dass"], hint: "الفاعل ich جاء بعدها مباشرة ثم الفعل بالمركز 2 ➔ نستخدم denn." },
      { id: 2, before: "Er hat Zeit,", ans: "aber", after: "er kommt nicht.", full: "Er hat Zeit, aber er kommt nicht.", opts: ["aber", "weil", "obwohl", "denn"], hint: "أداة التعارض بالموقع صفر هي aber." }
    ]
  },

  "A1.13": {
    titleAr: "السرد الماضي 1: ماضي war/hatte والماضي التام (Perfekt) مع haben/sein",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 13: السرد الماضي الأساسي (Perfekt & Präteritum)</h2>
        <div class="rule-card">
          <p class="text-xs"><strong>1. ماضي sein و haben في المحادثة:</strong><br><span class="font-de font-bold">ich war (كنت) | ich hatte (كان لدي)</span></p>
        </div>
        <div class="rule-card bg-emerald-50 border-emerald-600">
          <p class="text-xs"><strong>2. تركيب الماضي التام (Perfekt):</strong><br>فعل مساعد (haben/sein) بالمركز 2 + <strong>Partizip II بنهاية الجملة</strong>.<br>
          • <strong>sein:</strong> لأفعال الحركة والانتقال (gehen, fahren, fliegen) وتغير الحالة (aufstehen).<br>
          • <strong>haben:</strong> لباقي الأفعال العادية والمتعدية لمفعول به.</p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Gestern", ans: "sind", after: "wir nach Berlin gefahren.", full: "Gestern sind wir nach Berlin gefahren.", opts: ["haben", "sind", "hatten", "waren"], hint: "فعل الانتقال fahren يأخذ sein في الماضي التام." },
      { id: 2, before: "Letztes Jahr", ans: "hatte", after: "ich kein Auto.", full: "Letztes Jahr hatte ich kein Auto.", opts: ["habe", "hatte", "bin", "war"], hint: "الماضي البسيط من فعل الملكية haben هو hatte." }
    ]
  },

  // ==========================================
  // GOETHE A2 (KAPITEL 14 BIS 30)
  // ==========================================

  "A2.01": {
    titleAr: "الماضي التام المتقدم وسلاسل الأفعال الشاذة وتصريف السوابق",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 14: الماضي التام المتقدم والأفعال غير المنفصلة</h2>
        <div class="rule-card">
          <p class="text-xs"><strong>1. سقوط بادئة ge- مع الأفعال غير المنفصلة:</strong><br>الأفعال التي تبدأ بـ (be-, ver-, ent-, er-, emp-, ge-, miss-, zer-) <strong>لا تأخذ ge- إطلاقاً</strong> في التصريف الثالث:<br><span class="font-de font-bold">bezahlen ➔ bezahlt | verstehen ➔ verstanden | bekommen ➔ bekommen</span></p>
        </div>
        <div class="rule-card bg-amber-50 border-amber-500">
          <p class="text-xs"><strong>2. سلاسل التحول الصوتي (Ablautreihen):</strong><br><span class="font-de">trinken ➔ getrunken | schreiben ➔ geschrieben | finden ➔ gefunden</span></p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Hast du die Rechnung schon", ans: "bezahlt", after: "?", full: "Hast du die Rechnung schon bezahlt?", opts: ["gebezahlt", "bezahlt", "bezahlen", "gezahlt"], hint: "السوابق غير المنفصلة مثل be- لا تأخذ ge- في التصريف الثالث." }
    ]
  },

  "A2.02": {
    titleAr: "ماضي أفعال المودال في الماضي البسيط (musste, konnte, durfte...)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 15: ماضي أفعال المودال (Präteritum der Modalverben)</h2>
        <p class="text-xs">في الحديث عن الماضي، <strong>نستخدم دائماً صيغة Präteritum</strong> لأفعال المودال بدلاً من Perfekt:</p>
        <table class="grammar-table font-de">
          <tr><th>المصدر</th><th>الماضي مع ich/er</th><th>مثال</th></tr>
          <tr><td>können</td><td>konnte</td><td>Ich konnte nicht kommen.</td></tr>
          <tr><td>müssen</td><td>musste</td><td>Er musste zum Arzt gehen.</td></tr>
          <tr><td>dürfen</td><td>durfte</td><td>Wir durften hier nicht parken.</td></tr>
          <tr><td>wollen</td><td>wollte</td><td>Sie wollte Deutsch lernen.</td></tr>
        </table>
      </div>
    `,
    exercises: [
      { id: 1, before: "Gestern war ich krank, deshalb", ans: "musste", after: "ich im Bett bleiben.", full: "Gestern war ich krank, deshalb musste ich im Bett bleiben.", opts: ["muss", "musste", "gemusst", "müsste"], hint: "ماضي müssen هو musste بحذف الأوملاوت." }
    ]
  },

  "A2.03": {
    titleAr: "التعمق في أحرف الجر المشتركة وأزواج الأفعال (stellen/stehen...)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 16: أحرف الجر التسعة المشتركة وثنائيات الأفعال</h2>
        <table class="grammar-table font-de">
          <tr><th>حركة ونقل (Wohin? ➔ Akkusativ)</th><th>ثبات وموقع (Wo? ➔ Dativ)</th></tr>
          <tr><td><strong>stellen</strong>: Ich stelle es auf <u>den</u> Tisch.</td><td><strong>stehen</strong>: Es steht auf <u>dem</u> Tisch.</td></tr>
          <tr><td><strong>legen</strong>: Er legt das Buch auf <u>das</u> Bett.</td><td><strong>liegen</strong>: Es liegt auf <u>dem</u> Bett.</td></tr>
          <tr><td><strong>setzen</strong>: Sie setzt das Kind auf <u>den</u> Stuhl.</td><td><strong>sitzen</strong>: Es sitzt auf <u>dem</u> Stuhl.</td></tr>
        </table>
      </div>
    `,
    exercises: [
      { id: 1, before: "Stell die Tasse bitte auf", ans: "den", after: "Tisch.", full: "Stell die Tasse bitte auf den Tisch.", opts: ["dem", "den", "der", "das"], hint: "فعل حركة عمودية stellen يتطلب حالة النصب Akkusativ." },
      { id: 2, before: "Das Buch liegt auf", ans: "dem", after: "Boden.", full: "Das Buch liegt auf dem Boden.", opts: ["den", "dem", "das", "der"], hint: "فعل الثبات liegen يتطلب حالة الجر Dativ." }
    ]
  },

  "A2.04": {
    titleAr: "الأفعال الانعكاسية والضمائر المنعكسة في النصب والجر",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 17: الأفعال والضمائر الانعكاسية (Reflexivverben)</h2>
        <p class="text-xs">في العادة تأتي الضمائر المنعكسة في حالة النصب Akkusativ: <em>Ich freue <strong>mich</strong></em>.<br>
        ولكن إذا ذكر في الجملة مفعول به منصوب صريح، يتحول الضمير إلى <strong>Dativ</strong>:</p>
        <div class="p-2 bg-slate-100 rounded font-de text-xs">
          • <em>Ich wasche <strong>mich</strong>.</em> (Akkusativ - لا يوجد مفعول آخر)<br>
          • <em>Ich putze <strong>mir</strong> die Zähne.</em> (Dativ - لأن الأسنان هي المفعول به المنصوب!)
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich freue", ans: "mich", after: "auf das Wochenende.", full: "Ich freue mich auf das Wochenende.", opts: ["mir", "mich", "dich", "sich"], hint: "فعل sich freuen يأخذ الضمير المنعكس mich مع ich." },
      { id: 2, before: "Putz", ans: "dir", after: "bitte die Hände!", full: "Putz dir bitte die Hände!", opts: ["dich", "dir", "du", "dein"], hint: "لوجود مفعول به الأيدي، يتحول الضمير المنعكس إلى Dativ ➔ dir." }
    ]
  },

  "A2.05": {
    titleAr: "أفعال بحروف جر ثابتة وأدوات الاستفهام الإشارية (Worauf/Darauf)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 18: أفعال بحروف جر ثابتة والضمائر الظرفية</h2>
        <div class="rule-card">
          <p class="text-xs"><strong>1. للجماد والأشياء:</strong> ندمج Wo(r) للسؤال و Da(r) للجواب مع حرف الجر:<br><span class="font-de font-bold">Worauf wartest du? ➔ Ich warte darauf.</span></p>
        </div>
        <div class="rule-card bg-amber-50 border-amber-500">
          <p class="text-xs"><strong>2. للأشخاص والعاقل:</strong> نستخدم حرف الجر مع أداة الاستفهام العادية:<br><span class="font-de font-bold">Auf wen wartest du? ➔ Auf meinen Bruder.</span> (وليس Worauf!)</p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Worauf wartest du? – Ich warte", ans: "darauf", after: ", dass der Bus kommt.", full: "Worauf wartest du? – Ich warte darauf, dass der Bus kommt.", opts: ["darauf", "worauf", "auf ihn", "daran"], hint: "للإشارة إلى جملة أو حدث غير عاقل نستخدم darauf." }
    ]
  },

  "A2.06": {
    titleAr: "الجمل الجانبية وطرد الفعل للنهاية (weil, dass, wenn, obwohl)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 19: الجمل الجانبية وقاعدة طرد الفعل (Nebensätze)</h2>
        <p class="text-xs">الأدوات <strong>weil (لأن), dass (أنّ), wenn (إذا/لو), obwohl (رغم أن)</strong> تسبق بفاصلة وتطرد الفعل المصرف إلى <strong>نهاية الجملة تماماً</strong>:</p>
        <div class="p-2 bg-slate-100 rounded font-de text-xs">
          <em>Ich bleibe im Bett, <strong>weil</strong> ich krank <strong>bin</strong>.</em><br>
          <em>Er weiß, <strong>dass</strong> du heute <strong>kommst</strong>.</em>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Er lernt Deutsch, weil er in Berlin studieren", ans: "will", after: ".", full: "Er lernt Deutsch, weil er in Berlin studieren will.", opts: ["will", "will er", "wollen", "wollte"], hint: "في جملة weil يطرد الفعل المصرف will إلى نهاية الجملة تماماً." }
    ]
  },

  "A2.07": {
    titleAr: "أدوات الربط الزمنية: التمييز الدقيق بين als و wenn في الماضي",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 20: الأدوات الزمنية (als مقابل wenn)</h2>
        <div class="rule-card">
          <p class="text-xs"><strong>Als:</strong> تستخدم حصراً لحدث ماضٍ وقع <strong>مرة واحدة فقط</strong> أو فترة عمرية مضت:<br><span class="font-de font-bold">Als ich ein Kind war, lebte ich in Syrien.</span></p>
        </div>
        <div class="rule-card bg-emerald-50 border-emerald-600">
          <p class="text-xs"><strong>Wenn:</strong> للأحداث المتكررة في الماضي (Jedes Mal, wenn...)، ولكل أحداث الحاضر والمستقبل.</p>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "", ans: "Als", after: "ich 10 Jahre alt war, lernte ich Radfahren.", full: "Als ich 10 Jahre alt war, lernte ich Radfahren.", opts: ["Wenn", "Als", "Wann", "Bevor"], hint: "فترة الطفولة حدث ماضٍ لمرة واحدة نستخدم معه Als." }
    ]
  },

  "A2.08": {
    titleAr: "الظروف الرابطة بالموقع 1 والانقلاب الفعلي (deshalb, trotzdem...)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 21: الظروف الرابطة بالموقع 1 (Konjunktionaladverbien)</h2>
        <p class="text-xs">الظروف <strong>deshalb (لذلك), trotzdem (رغم ذلك), sonst (وإلا), dann (ثم)</strong> تأخذ <strong>الموقع 1</strong>، ويليها <strong>الفعل المصرف مباشرة في الموقع 2</strong>:</p>
        <p class="font-de text-xs bg-slate-100 p-2 rounded"><em>Es war kalt, <strong>trotzdem</strong> (1) <strong>ging</strong> (2) er ohne Jacke raus.</em></p>
      </div>
    `,
    exercises: [
      { id: 1, before: "Es regnete, trotzdem", ans: "gingen", after: "wir spazieren.", full: "Es regnete, trotzdem gingen wir spazieren.", opts: ["gingen", "wir gingen", "gehen", "gegangen"], hint: "بعد trotzdem يأتي الفعل المصرف مباشرة في الموقع الثاني." }
    ]
  },

  "A2.09": {
    titleAr: "الأسئلة غير المباشرة المهذبة مع ob وأدوات الاستفهام وطرد الفعل",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 22: الأسئلة غير المباشرة (Indirekte Fragen)</h2>
        <p class="text-xs">تحول السؤال المباشر إلى جملة جانبية مهذبة تضع الفعل في النهاية:</p>
        <ul class="list-disc list-inside text-xs space-y-1">
          <li><strong>سؤال نعم/لا:</strong> نربطه بـ <strong>ob</strong>: <em>Können Sie mir sagen, <strong>ob</strong> der Zug pünktlich <strong>ist</strong>?</em></li>
          <li><strong>سؤال أداة W:</strong> نستخدم نفس الأداة مع طرد الفعل: <em>Ich weiß nicht, <strong>wann</strong> er <strong>kommt</strong></em>.</li>
        </ul>
      </div>
    `,
    exercises: [
      { id: 1, before: "Wissen Sie,", ans: "ob", after: "die Bank heute offen ist?", full: "Wissen Sie, ob die Bank heute offen ist?", opts: ["dass", "ob", "wann", "wie"], hint: "سؤال نعم/لا غير المباشر يربط دائماً بـ ob." }
    ]
  },

  "A2.10": {
    titleAr: "منظومة تصريف نهايات الصفات الكاملة (الضعيفة والمختلطة والقوية)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 23: تصريف نهايات الصفات (Adjektivdeklination)</h2>
        <table class="grammar-table font-de">
          <tr><th>الحالة</th><th>بعد المعرفة (der/die/das)</th><th>بعد النكرة والملكية (ein/mein)</th></tr>
          <tr><td>مذكر رفع</td><td>der alt<strong>e</strong> Mann</td><td>ein alt<strong>er</strong> Mann</td></tr>
          <tr class="bg-blue-50 font-bold"><td>مذكر نصب</td><td>den alt<strong>en</strong> Mann</td><td>einen alt<strong>en</strong> Mann</td></tr>
          <tr><td>محايد رفع/نصب</td><td>das neu<strong>e</strong> Auto</td><td>ein neu<strong>es</strong> Auto</td></tr>
          <tr class="bg-amber-50 font-bold"><td>جميع حالات Dativ والجمع</td><td colspan="2" class="text-red-700">تأخذ الصفة دائماً وأبداً اللاحقة -en</td></tr>
        </table>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich habe einen", ans: "neuen", after: "Wagen.", full: "Ich habe einen neuen Wagen.", opts: ["neuer", "neuen", "neues", "neue"], hint: "المذكر المنصوب بعد einen يأخذ في صفته دائماً -en." }
    ]
  },

  "A2.11": {
    titleAr: "درجات المقارنة الثلاث (so wie, als, am ...sten) والصفات الشاذة",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 24: درجات المقارنة (Komparation)</h2>
        <p class="text-xs">1. التساوي: <strong>so + صفة + wie</strong> (so schnell wie du).<br>
        2. المقارنة: <strong>صفة بـ er + als</strong> (schnell<strong>er als</strong> der Bus).<br>
        3. التفضيل الأعلى: <strong>am + صفة بـ sten</strong> (<strong>am schnellsten</strong>).</p>
        <p class="text-xs font-de font-bold text-blue-700 mt-1">شواذ شائعة: gut ➔ besser ➔ am besten | gern ➔ lieber ➔ am liebsten</p>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ein Flugzeug ist schneller", ans: "als", after: "ein Zug.", full: "Ein Flugzeug ist schneller als ein Zug.", opts: ["wie", "als", "denn", "so"], hint: "المقارنة بصفة تنتهي بـ er تطلب أداة المقارنة als." }
    ]
  },

  "A2.12": {
    titleAr: "حالة الإضافة (Genitiv): الأدوات des/der وإضافة s وأحرف الجر",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 25: حالة الإضافة والملكية (Der Genitiv)</h2>
        <p class="text-xs">المذكر والمحايد يأخذان <strong>des</strong> مع إضافة <strong>-s</strong> أو <strong>-es</strong> للاسم، والمؤنث والجمع يأخذان <strong>der</strong>:</p>
        <p class="font-de text-xs bg-slate-100 p-2 rounded">
          • <em>Das Auto <strong>des Vaters</strong>.</em> | <em>Die Tasche <strong>der Mutter</strong>.</em><br>
          • <strong>أحرف جر تطلب Genitiv:</strong> während (خلال), wegen (بسبب), trotz (رغم).
        </p>
      </div>
    `,
    exercises: [
      { id: 1, before: "Wegen", ans: "des", after: "schlechten Wetters bleiben wir hier.", full: "Wegen des schlechten Wetters bleiben wir hier.", opts: ["dem", "des", "den", "der"], hint: "حرف wegen يتطلب Genitiv، والمحايد يأخذ des." }
    ]
  },

  "A2.13": {
    titleAr: "جمل الوصل والصلة (Relativsätze) في الرفع والنصب والجر",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 26: جمل الصلة (Relativsätze)</h2>
        <p class="text-xs">تعطي معلومات إضافية عن اسم سابق، وتعمل كجملة جانبية <strong>تضع الفعل في المركز الأخير</strong>:</p>
        <ul class="list-disc list-inside text-xs font-de space-y-1">
          <li><strong>رفع Nominativ:</strong> Das ist der Mann, <strong>der</strong> dort steht.</li>
          <li><strong>نصب Akkusativ:</strong> Das ist der Mann, <strong>den</strong> ich kenne.</li>
          <li><strong>جر Dativ:</strong> Das ist der Mann, <strong>dem</strong> ich helfe.</li>
        </ul>
      </div>
    `,
    exercises: [
      { id: 1, before: "Das ist der Mann,", ans: "den", after: "ich gestern gesehen habe.", full: "Das ist der Mann, den ich gestern gesehen habe.", opts: ["der", "den", "dem", "dessen"], hint: "جملة الصلة هنا مفعول به منصوب للمذكر فتأخذ den." }
    ]
  },

  "A2.14": {
    titleAr: "التركيب المصدري مع zu وحالات الفعل المنفصل (einzukaufen)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 27: التركيب المصدري (Infinitiv mit zu)</h2>
        <p class="text-xs">تأتي <strong>zu قبل المصدر في نهاية الجملة</strong> بعد أفعال النوايا مثل versuchen, vergessen, hoffen أو تعابير Lust/Zeit haben:</p>
        <p class="font-de text-xs bg-slate-100 p-2 rounded">
          • <em>Ich versuche, pünktlich <strong>zu sein</strong>.</em><br>
          • <strong>مع الفعل المنفصل تدخل في الوسط:</strong> <em>einzukaufen (ein + zu + kaufen)</em>.
        </p>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich habe vergessen, Milch", ans: "einzukaufen", after: ".", full: "Ich have vergessen, Milch einzukaufen.", opts: ["einkaufen", "einzukaufen", "gekauft", "zu einkaufen"], hint: "مع الأفعال المنفصلة تدخل zu بين السابقة والجذر: einzukaufen." }
    ]
  },

  "A2.15": {
    titleAr: "صيغة التمني والطلب المهذب (Konjunktiv II: hätte, wäre, könnte...)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 28: الطلب المهذب والتمني (Konjunktiv II)</h2>
        <p class="text-xs">تستخدم للطلب فائق الأدب في المطاعم والحديث الرسمي والتعبير عن الأمنيات:</p>
        <div class="grid grid-cols-2 gap-1.5 font-de text-xs">
          <div class="p-1.5 bg-white border rounded"><strong>ich hätte gern</strong><br>(أود الحصول على...)</div>
          <div class="p-1.5 bg-white border rounded"><strong>ich wäre gern</strong><br>(لو كنت / أود أن أكون...)</div>
          <div class="p-1.5 bg-white border rounded"><strong>könnten Sie...?</strong><br>(هل بإمكانك بلطف...؟)</div>
          <div class="p-1.5 bg-white border rounded"><strong>würde + المصدر</strong><br>Ich würde gern mitkommen.</div>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich", ans: "hätte", after: "gern einen Kaffee, bitte.", full: "Ich hätte gern einen Kaffee, bitte.", opts: ["habe", "hätte", "hatte", "würde"], hint: "صيغة الطلب فائق الأدب من فعل الملكية هي hätte gern." }
    ]
  },

  "A2.16": {
    titleAr: "الضمائر النكرة وأسماء الإشارة وحذف الاسم وتفاديه (jemand, keins...)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 29: الضمائر البديلة وأسماء الإشارة</h2>
        <ul class="list-disc list-inside text-xs space-y-1">
          <li><strong>jemand (شخص ما) / niemand (لا أحد):</strong> للإشارة للأشخاص المبهمين.</li>
          <li><strong>تعويض الاسم المحذوف:</strong> إذا حذف الاسم المحايد تأخذ الأداة s الصريحة: <em>Hast du ein Auto? – Nein, ich habe <strong>keins</strong></em>.</li>
          <li><strong>dieser, diese, dieses:</strong> تصرف تماماً كأداة المعرفة der/die/das.</li>
        </ul>
      </div>
    `,
    exercises: [
      { id: 1, before: "Hast du ein Auto? – Nein, ich habe", ans: "keins", after: ".", full: "Hast du ein Auto? – Nein, ich habe keins.", opts: ["kein", "keins", "keinen", "nicht"], hint: "عند حذف الاسم المحايد das يظهر الضمير keins." }
    ]
  },

  "A2.17": {
    titleAr: "المبني للمجهول في الحاضر (Vorgangspassiv: werden + Partizip II)",
    lessonHtml: `
      <div class="space-y-3">
        <h2 class="text-base font-black text-slate-900 border-b pb-1">الفصل 30: المبني للمجهول (Das Vorgangspassiv)</h2>
        <p class="text-xs">يركز على الحدث وليس على الفاعل. يصاغ بـ:</p>
        <p class="p-2 bg-slate-100 rounded text-center font-de font-bold text-xs text-rose-700">
          werden (المصرف بالمركز 2) + ... + Partizip II (في نهاية الجملة)
        </p>
        <p class="text-xs">مثال: <em>Das Auto <strong>wird</strong> repariert.</em> (السيارة تُصلَح). وإذا ذكر الفاعل يسبق بـ <strong>von + Dativ</strong>.</p>
      </div>
    `,
    exercises: [
      { id: 1, before: "Das Brot", ans: "wird", after: "jeden Morgen frisch gebacken.", full: "Das Brot wird jeden Morgen frisch gebacken.", opts: ["wird", "werden", "wurden", "ist"], hint: "المبني للمجهول للمفرد das Brot يصاغ بـ wird + Partizip II." }
    ]
  }
};

// =========================================================================
// METADATA DER 30 KAPITEL
// =========================================================================
const ALL_GOETHE_CHAPTER_METADATA = [
  { id: "A1.01", level: "A1", titleAr: "الضمائر وتصريف الحاضر وتعديلات الجذع (-t/-d/-s)" },
  { id: "A1.02", level: "A1", titleAr: "معمارية الجملة: المركز 2، Inversion، وأسئلة Ja/Nein و W" },
  { id: "A1.03", level: "A1", titleAr: "الأسماء وأدوات التعريف والنكرة والنفي والجمع في الرفع" },
  { id: "A1.04", level: "A1", titleAr: "المفعول به المنصوب (Akkusativ): تحول المذكر وأحرف DOGFU" },
  { id: "A1.05", level: "A1", titleAr: "قواعد النفي الدقيقة: استخدام nicht مقابل أداة kein" },
  { id: "A1.06", level: "A1", titleAr: "الأفعال القوية وتغير الحرف الصوتي (e➔i, e➔ie, a➔ä)" },
  { id: "A1.07", level: "A1", titleAr: "أدوات الملكية في الرفع والنصب (mein, dein, sein...)" },
  { id: "A1.08", level: "A1", titleAr: "القوس الفعلي: الأفعال المنفصلة وأفعال المودال الستة" },
  { id: "A1.09", level: "A1", titleAr: "صيغة الأمر (Imperativ) للمفرد والجمع والاحترام والأفعال الشاذة" },
  { id: "A1.10", level: "A1", titleAr: "أساسيات المجرور (Dativ): الأدوات، الضمائر، وأحرف الجر الثابتة" },
  { id: "A1.11", level: "A1", titleAr: "حروف الجر الزمانية والمكانية (um, am, im ومدخل Wo? + Dativ)" },
  { id: "A1.12", level: "A1", titleAr: "أدوات الربط التنسيقية بالموقع صفر (ADUSO: aber, denn, und...)" },
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
  { id: "A2.10", level: "A2", titleAr: "منظومة تصريف نهايات الصفات الكاملة (الضعيفة والمختلطة والقوية)" },
  { id: "A2.11", level: "A2", titleAr: "درجات المقارنة الثلاث (so wie, als, am ...sten) والصفات الشاذة" },
  { id: "A2.12", level: "A2", titleAr: "حالة الإضافة (Genitiv): الأدوات des/der وإضافة s وأحرف الجر" },
  { id: "A2.13", level: "A2", titleAr: "جمل الوصل والصلة (Relativsätze) في الرفع والنصب والجر" },
  { id: "A2.14", level: "A2", titleAr: "التركيب المصدري مع zu وحالات الفعل المنفصل (einzukaufen)" },
  { id: "A2.15", level: "A2", titleAr: "صيغة التمني والطلب المهذب (Konjunktiv II: hätte, wäre, könnte...)" },
  { id: "A2.16", level: "A2", titleAr: "الضمائر النكرة وأسماء الإشارة وحذف الاسم وتفاديه (jemand, keins...)" },
  { id: "A2.17", level: "A2", titleAr: "المبني للمجهول في الحاضر (Vorgangspassiv: werden + Partizip II)" }
];

// =========================================================================
// STATE ENGINE
// =========================================================================
class AppState {
  constructor() {
    this.currentChapterIndex = 0;
    this.currentExerciseIndex = 0;
    this.xp = parseInt(localStorage.getItem('dm_xp') || '0', 10);
    this.completedExercises = {};
  }

  getCurrentChapter() {
    const meta = ALL_GOETHE_CHAPTER_METADATA[this.currentChapterIndex];
    const data = CHAPTERS_KNOWLEDGE_BASE[meta.id];
    return {
      chapterId: meta.id,
      level: meta.level,
      titleAr: data.titleAr,
      lessonHtml: data.lessonHtml,
      exercises: data.exercises
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

  // Lektionstext rendern
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
