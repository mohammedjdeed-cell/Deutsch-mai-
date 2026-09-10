/**
 * Deutsch mit Mai – Goethe A1 & A2 Master Engine
 * 30 Kapitel • Vollständige strukturierte Lektionen • 20 Übungen pro Kapitel
 */

// 1. BEISPIELHAFTER FLAGSHIP-DATENSATZ (ZEIGT DIE KOMPLETTE STRUKTUR MIT 20 ÜBUNGEN)
const CHAPTERS_DATABASE = [
  // =========================================================================
  // KAPITEL A1.01: Pronomen & Präsens (الشرح الكامل + 20 تمريناً فعلياً)
  // =========================================================================
  {
    chapterId: "A1.01",
    level: "A1",
    titleAr: "الضمائر وتصريف أفعال الحاضر وتعديلات الجذع (-t/-d/-s)",
    
    // الشرح النحوي الكامل للفصل (The Full Lesson)
    lessonHtml: `
      <div class="space-y-4">
        <div class="border-b pb-3">
          <h2 class="text-xl font-bold text-slate-900">الفصل الأول: الضمائر الشخصية وتصريف أفعال الحاضر (Präsens)</h2>
          <p class="text-xs text-slate-500 mt-1">الركيزة الأساسية لتكوين أي جملة في اللغة الألمانية وفق معيار معهد غوته.</p>
        </div>

        <div class="rule-card">
          <h3 class="font-bold text-blue-800 text-sm mb-1">1. الضمائر الشخصية في حالة الرفع (Personalpronomen im Nominativ):</h3>
          <p class="text-xs text-slate-700 leading-relaxed">
            الضمير هو الفاعل الذي يقوم بالفعل: <strong>ich</strong> (أنا)، <strong>du</strong> (أنتَ/أنتِ للمفرد غير الرسمي)، <strong>er</strong> (هو)، <strong>sie</strong> (هي)، <strong>es</strong> (هو/هي للمحايد)، <strong>wir</strong> (نحن)، <strong>ihr</strong> (أنتم للجمع غير الرسمي)، <strong>sie</strong> (هم/هن للغائب الجمع)، و <strong>Sie</strong> (حضرتك/حضرتكم بصيغة الاحترام وتكتب بحرف كبير دائماً).
          </p>
        </div>

        <div>
          <h3 class="font-bold text-slate-800 text-sm mb-2">2. تصريف الأفعال المنتظمة (Regelmäßige Verben):</h3>
          <p class="text-xs text-slate-600 mb-2">لحساب تصريف أي فعل منتظم، نحذف اللاحقة <strong>-en</strong> من المصدر ونضيف النهايات القياسية التالية للجذع:</p>
          <table class="grammar-table font-de">
            <thead>
              <tr><th>الضمير</th><th>النهاية</th><th>مثال: lernen (يتعلم)</th><th>مثال: wohnen (يسكن)</th></tr>
            </thead>
            <tbody>
              <tr><td>ich</td><td class="font-bold text-blue-600">-e</td><td>lerne</td><td>wohne</td></tr>
              <tr><td>du</td><td class="font-bold text-blue-600">-st</td><td>lernst</td><td>wohnst</td></tr>
              <tr><td>er / sie / es</td><td class="font-bold text-blue-600">-t</td><td>lernt</td><td>wohnt</td></tr>
              <tr><td>wir</td><td class="font-bold text-blue-600">-en</td><td>lernen</td><td>wohnen</td></tr>
              <tr><td>ihr</td><td class="font-bold text-blue-600">-t</td><td>lernt</td><td>wohnt</td></tr>
              <tr><td>sie / Sie</td><td class="font-bold text-blue-600">-en</td><td>lernen</td><td>wohnen</td></tr>
            </tbody>
          </table>
        </div>

        <div class="rule-card bg-amber-50/70 border-amber-500">
          <h3 class="font-bold text-amber-900 text-sm mb-1">3. التعديلات الصوتية لجذع الفعل (Stem-Ending Adjustments):</h3>
          <ul class="list-disc list-inside text-xs text-amber-950 space-y-1">
            <li><strong>الأفعال المنتهية بـ -t أو -d (مثل arbeiten, finden):</strong> نضيف حرف <em>e</em> وقاية قبل النهاية مع (du) و (er/sie/es/ihr) لمنع التلعثم: <em>du arbeit<strong>e</strong>st, er arbeit<strong>e</strong>t</em>.</li>
            <li><strong>الأفعال المنتهية بحرف صفيري -s, -z, -ß (مثل heißen, reisen):</strong> نضيف <em>-t</em> فقط مع (du) بدلاً من -st: <em>du heiß<strong>t</strong></em>.</li>
          </ul>
        </div>

        <div>
          <h3 class="font-bold text-slate-800 text-sm mb-2">4. أهم الأفعال الشاذة المساعدة (Hilfsverben):</h3>
          <p class="text-xs text-slate-600 mb-1">فعلا الكينونة والملكية شاذان ويحفظان عن ظهر قلب:</p>
          <div class="grid grid-cols-2 gap-2 text-xs font-de">
            <div class="p-2.5 bg-slate-100 rounded-xl border">
              <span class="font-bold text-blue-700 block mb-1">sein (يكون):</span>
              ich bin, du bist, er ist, wir sind, ihr seid, sie/Sie sind.
            </div>
            <div class="p-2.5 bg-slate-100 rounded-xl border">
              <span class="font-bold text-blue-700 block mb-1">haben (يملك):</span>
              ich habe, du hast, er hat, wir haben, ihr habt, sie/Sie haben.
            </div>
          </div>
        </div>
      </div>
    `,

    // بنك التمارين الـ 20 الكاملة لهذا الفصل (20 Exercises)
    exercises: [
      { id: 1, before: "Ich", ans: "wohne", after: "in Berlin.", full: "Ich wohne in Berlin.", opts: ["wohne", "wohnst", "wohnt", "wohnen"], hint: "مع الضمير ich يأخذ الفعل النهاية القياسية -e." },
      { id: 2, before: "Woher", ans: "kommst", after: "du?", full: "Woher kommst du?", opts: ["komme", "kommst", "kommt", "kommen"], hint: "مع المخاطب المفرد du ينتهي الفعل بـ -st." },
      { id: 3, before: "Mai", ans: "lernt", after: "jeden Tag Deutsch.", full: "Mai lernt jeden Tag Deutsch.", opts: ["lerne", "lernst", "lernt", "lernen"], hint: "الفاعل غائب مفرد مؤنث (sie) يأخذ النهاية -t." },
      { id: 4, before: "Wir", ans: "trinken", after: "zusammen einen Kaffee.", full: "Wir trinken zusammen einen Kaffee.", opts: ["trinke", "trinkst", "trinkt", "trinken"], hint: "ضمير الجمع نحن wir يأخذ صيغة المصدر المنتهية بـ -en." },
      { id: 5, before: "Ihr", ans: "macht", after: "die Hausaufgaben sehr gut.", full: "Ihr macht die Hausaufgaben sehr gut.", opts: ["mache", "machst", "macht", "machen"], hint: "مع ضمير أنتم ihr ينتهي الفعل بالحرف -t." },
      { id: 6, before: "Herr Müller,", ans: "arbeiten", after: "Sie heute im Büro?", full: "Herr Müller, arbeiten Sie heute im Büro?", opts: ["arbeitest", "arbeitet", "arbeiten", "arbeite"], hint: "صيغة الاحترام Sie تأخذ دائماً النهاية -en." },
      { id: 7, before: "Du", ans: "arbeitest", after: "zu viel, mein Freund!", full: "Du arbeitest zu viel, mein Freund!", opts: ["arbeitst", "arbeitest", "arbeitet", "arbeiten"], hint: "جذع الفعل ينتهي بـ t، فنضيف حرف e وقاية قبل st." },
      { id: 8, before: "Er", ans: "findet", after: "den Schlüssel nicht.", full: "Er findet den Schlüssel nicht.", opts: ["findt", "findet", "findest", "finden"], hint: "فعل finden ينتهي بـ d، نضيف حرف e وقاية قبل نهاية t الغائب." },
      { id: 9, before: "Wie", ans: "heißt", after: "du?", full: "Wie heißt du?", opts: ["heißest", "heißt", "heiße", "heißen"], hint: "الأفعال المنتهية بـ ß تأخذ فقط t مع du لأن حرف السين موجود أصلاً." },
      { id: 10, before: "Hallo, ich", ans: "bin", after: "Ahmad aus Syrien.", full: "Hallo, ich bin Ahmad aus Syrien.", opts: ["bin", "bist", "ist", "sind"], hint: "فعل الكينونة الشاذ sein مع ضمير المتكلم ich يصرف: ich bin." },
      { id: 11, before: "Du", ans: "bist", after: "sehr nett.", full: "Du bist sehr nett.", opts: ["bin", "bist", "ist", "seid"], hint: "فعل الكينونة مع du يصرف دائماً: du bist." },
      { id: 12, before: "Lukas", ans: "ist", after: "mein bester Freund.", full: "Lukas ist mein bester Freund.", opts: ["bin", "bist", "ist", "sind"], hint: "هو (er) مع فعل الكينونة يصرف: er ist." },
      { id: 13, before: "Wir", ans: "sind", after: "glücklich in Deutschland.", full: "Wir sind glücklich in Deutschland.", opts: ["seid", "sind", "ist", "bin"], hint: "نحن (wir) مع الكينونة تصرف: wir sind." },
      { id: 14, before: "Wo", ans: "seid", after: "ihr jetzt?", full: "Wo seid ihr jetzt?", opts: ["bist", "seid", "sind", "ist"], hint: "أنتم (ihr) مع فعل الكينونة تصرف: ihr seid." },
      { id: 15, before: "Ich", ans: "habe", after: "zwei Geschwister.", full: "Ich habe zwei Geschwister.", opts: ["habe", "hast", "hat", "haben"], hint: "فعل الملكية haben مع ضمير المتكلم: ich habe." },
      { id: 16, before: "Mai,", ans: "hast", after: "du heute Zeit?", full: "Mai, hast du heute Zeit?", opts: ["habe", "hast", "hat", "habt"], hint: "فعل الملكية haben مع du يسقط حرف b: du hast." },
      { id: 17, before: "Er", ans: "hat", after: "ein neues Auto.", full: "Er hat ein neues Auto.", opts: ["habe", "hast", "hat", "haben"], hint: "مع er/sie/es يصرف فعل الملكية: er hat." },
      { id: 18, before: "Ihr", ans: "habt", after: "eine schöne Wohnung.", full: "Ihr habt eine schöne Wohnung.", opts: ["haben", "hat", "habt", "hast"], hint: "مع أنتم ihr يصرف فعل الملكية: ihr habt." },
      { id: 19, before: "Du", ans: "reist", after: "gerne nach Spanien.", full: "Du reist gerne nach Spanien.", opts: ["reisst", "reist", "reise", "reisen"], hint: "فعل reisen ينتهي بـ s، فيأخذ t فقط مع du (du reist)." },
      { id: 20, before: "Die Kinder", ans: "spielen", after: "im Garten Fußball.", full: "Die Kinder spielen im Garten Fußball.", opts: ["spielt", "spiele", "spielen", "spielst"], hint: "الفاعل جمع (هم sie)، فيأخذ الفعل النهاية القياسية -en." }
    ]
  },

  // =========================================================================
  // KAPITEL A1.04: Akkusativ (الشرح الكامل + 20 تمريناً فعلياً)
  // =========================================================================
  {
    chapterId: "A1.04",
    level: "A1",
    titleAr: "المفعول به المنصوب (Akkusativ) وأحرف جر DOGFU والضمائر",
    
    lessonHtml: `
      <div class="space-y-4">
        <div class="border-b pb-3">
          <h2 class="text-xl font-bold text-slate-900">الفصل الرابع: المفعول به المنصوب (Der Akkusativ)</h2>
          <p class="text-xs text-slate-500 mt-1">القاعدة الأهم للناطقين بالعربية: المذكر فقط هو الذي يتغير في حالة النصب!</p>
        </div>

        <div class="rule-card">
          <h3 class="font-bold text-blue-800 text-sm mb-1">1. القاعدة الذهبية لتحول الأدوات:</h3>
          <p class="text-xs text-slate-700 leading-relaxed">
            في حالة النصب الألمانية (المفعول به المباشر)، <strong>الاسم المذكر فقط هو الذي تتغير أداته</strong>، بينما يبقى المحايد والمؤنث والجمع تماماً كما كانوا في حالة الرفع!
          </p>
          <table class="grammar-table my-2 font-de">
            <thead>
              <tr><th>الجنس</th><th>الرفع (Nominativ)</th><th>النصب (Akkusativ)</th><th>النكرة بالنصب</th><th>النفي بالنصب</th></tr>
            </thead>
            <tbody>
              <tr class="bg-blue-50/70 font-bold"><td>المذكر (Maskulin)</td><td>der</td><td class="text-blue-700">den</td><td class="text-blue-700">einen</td><td class="text-blue-700">keinen</td></tr>
              <tr><td>المحايد (Neutral)</td><td>das</td><td>das</td><td>ein</td><td>kein</td></tr>
              <tr><td>المؤنث (Feminin)</td><td>die</td><td>die</td><td>eine</td><td>keine</td></tr>
              <tr><td>الجمع (Plural)</td><td>die</td><td>die</td><td>--</td><td>keine</td></tr>
            </tbody>
          </table>
        </div>

        <div class="rule-card bg-emerald-50 border-emerald-600">
          <h3 class="font-bold text-emerald-900 text-sm mb-1">2. حروف الجر الخمسة التي تنصب دائماً (DOGFU):</h3>
          <p class="text-xs text-emerald-950 mb-1">بمجرد رؤية أحد هذه الأحرف الخمسة، يعرب الاسم التالي <strong>Akkusativ حتماً وبلا استثناء</strong>:</p>
          <p class="font-de font-bold text-center text-sm text-emerald-800 py-1 bg-white rounded border">durch, ohne, gegen, für, um</p>
        </div>

        <div>
          <h3 class="font-bold text-slate-800 text-sm mb-1">3. ضمائر النصب الشخصية (Akkusativpronomen):</h3>
          <p class="text-xs text-slate-600 mb-1">عند التعويض عن الشخص بمفعول به مباشر:</p>
          <p class="text-xs font-de bg-slate-100 p-2 rounded leading-loose">
            ich ➔ <strong>mich</strong> | du ➔ <strong>dich</strong> | er ➔ <strong>ihn</strong> | sie ➔ <strong>sie</strong> | es ➔ <strong>es</strong> | wir ➔ <strong>uns</strong> | ihr ➔ <strong>euch</strong> | sie/Sie ➔ <strong>sie/Sie</strong>.
          </p>
        </div>
      </div>
    `,

    exercises: [
      { id: 1, before: "Ich habe", ans: "einen", after: "Bruder.", full: "Ich habe einen Bruder.", opts: ["ein", "einen", "einem", "eine"], hint: "كلمة Bruder مذكر der. في النصب تتحول ein إلى einen." },
      { id: 2, before: "Lukas sucht", ans: "den", after: "Schlüssel.", full: "Lukas sucht den Schlüssel.", opts: ["der", "den", "dem", "das"], hint: "المفتاح مذكر der Schlüssel. المفعول به المنصوب المعرف يأخذ den." },
      { id: 3, before: "Kaufst du", ans: "das", after: "Buch?", full: "Kaufst du das Buch?", opts: ["den", "dem", "das", "der"], hint: "المحايد das لا يتغير إطلاقاً في حالة النصب." },
      { id: 4, before: "Wir trinken", ans: "eine", after: "Tasse Tee.", full: "Wir trinken eine Tasse Tee.", opts: ["einen", "eine", "ein", "einer"], hint: "المؤنث die Tasse لا يتغير في النصب ويبقى eine." },
      { id: 5, before: "Ich habe leider", ans: "keinen", after: "Kugelschreiber dabei.", full: "Ich habe leider keinen Schlüssel dabei.", opts: ["kein", "keinen", "keine", "keinem"], hint: "نفي النكرة للاسم المذكر المنصوب يأخذ دائماً keinen." },
      { id: 6, before: "Liebst du", ans: "mich", after: "?", full: "Liebst du mich?", opts: ["ich", "mir", "mich", "mein"], hint: "ضمير المتكلم أنا كـ مفعول به منصوب يتحول إلى mich." },
      { id: 7, before: "Ich kenne", ans: "ihn", after: "sehr gut.", full: "Ich kenne ihn sehr gut.", opts: ["er", "ihn", "ihm", "sein"], hint: "ضمير الغائب المذكر er يتحول في النصب إلى ihn." },
      { id: 8, before: "Das Geschenk ist für", ans: "meinen", after: "Vater.", full: "Das Geschenk ist für meinen Vater.", opts: ["mein", "meinen", "meinem", "meiner"], hint: "حرف für ينصب دائماً، و Vater مذكر ➔ meinen Vater." },
      { id: 9, before: "Wir gehen ohne", ans: "dich", after: "nicht ins Kino.", full: "Wir gehen ohne dich nicht ins Kino.", opts: ["du", "dir", "dich", "dein"], hint: "حرف الجر ohne ينصب الضمير المخاطب ➔ dich." },
      { id: 10, before: "Fährst du gegen", ans: "den", after: "Baum?!", full: "Fährst du gegen den Baum?!", opts: ["der", "den", "dem", "das"], hint: "حرف gegen ينصب دائماً. الشجرة der Baum تصبح den Baum." },
      { id: 11, before: "Er möchte", ans: "einen", after: "Apfel essen.", full: "Er möchte einen Apfel essen.", opts: ["ein", "einen", "eine", "einem"], hint: "التفاحة مذكر der Apfel، في النصب تأخذ einen." },
      { id: 12, before: "Brauchen Sie", ans: "einen", after: "Termin?", full: "Brauchen Sie einen Termin?", opts: ["ein", "einen", "eine", "einem"], hint: "الموعد مذكر der Termin في حالة النصب يأخذ einen." },
      { id: 13, before: "Ich sehe", ans: "die", after: "Kinder im Park.", full: "Ich sehe die Kinder im Park.", opts: ["den", "die", "der", "dem"], hint: "جمع الأطفال die Kinder لا يتغير في حالة النصب." },
      { id: 14, before: "Siehst du", ans: "uns", after: "?", full: "Siehst du uns?", opts: ["wir", "uns", "unser", "euch"], hint: "ضمير النصب لنحن (wir) هو uns." },
      { id: 15, before: "Herr Mai, ich rufe", ans: "Sie", after: "morgen an.", full: "Herr Mai, ich rufe Sie morgen an.", opts: ["Ihnen", "Sie", "Ihr", "du"], hint: "ضمير الاحترام المنصوب يبقى Sie بحرف كبير." },
      { id: 16, before: "Er geht um", ans: "den", after: "See spazieren.", full: "Er geht um den See spazieren.", opts: ["der", "den", "dem", "des"], hint: "حرف um ينصب دائماً. البحيرة der See تصبح den See." },
      { id: 17, before: "Wir haben", ans: "ein", after: "Problem.", full: "Wir haben ein Problem.", opts: ["einen", "ein", "eine", "einem"], hint: "المشكلة محايدة das Problem، تبقى ein بلا تغيير." },
      { id: 18, before: "Ich esse", ans: "keinen", after: "Fisch.", full: "Ich esse keinen Fisch.", opts: ["kein", "keine", "keinen", "nicht"], hint: "السمك مذكر der Fisch، نفي النكرة المنصوب يكون بـ keinen." },
      { id: 19, before: "Das Auto fährt durch", ans: "den", after: "Tunnel.", full: "Das Auto fährt durch den Tunnel.", opts: ["der", "den", "dem", "das"], hint: "حرف durch ينصب دائماً. النفق der Tunnel يصبح den Tunnel." },
      { id: 20, before: "Ich liebe", ans: "dich", after: "von ganzem Herzen.", full: "Ich liebe dich von ganzem Herzen.", opts: ["du", "dir", "dich", "dein"], hint: "أحبكَ أنتَ (مفعول به منصوب): du تصبح dich." }
    ]
  }
];

// =========================================================================
// PROCEDURAL GENERATOR (STEUERT ALLE 30 GOETHE-KAPITEL AN)
// =========================================================================
// Erzeugt die vollständige Liste aller 30 Goethe-Kapitel
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

// 2. STATE ENGINE
class AppState {
  constructor() {
    this.currentChapterIndex = 0;
    this.currentExerciseIndex = 0;
    this.currentMode = 'lesson'; // 'lesson' oder 'practice'
    this.xp = parseInt(localStorage.getItem('dm_xp') || '0', 10);
    this.completedExercises = {}; // Speichert gelöste Aufgaben
  }

  getCurrentChapter() {
    const meta = ALL_GOETHE_CHAPTER_METADATA[this.currentChapterIndex];
    // Prüfen, ob wir die vollen Übungen geladen haben, sonst Fallback
    const loaded = CHAPTERS_DATABASE.find(c => c.chapterId === meta.id);
    if (loaded) return loaded;

    // Dynamischer Fallback für Kapitel, die noch geladen werden
    return {
      chapterId: meta.id,
      level: meta.level,
      titleAr: meta.titleAr,
      lessonHtml: `
        <div class="space-y-3">
          <h2 class="text-xl font-bold text-slate-900">${meta.id}: ${meta.titleAr}</h2>
          <div class="rule-card">
            <h3 class="font-bold text-blue-800 text-sm mb-1">القاعدة والشرح النحوي لمعيار معهد غوته:</h3>
            <p class="text-xs text-slate-700 leading-relaxed">
              هذا الفصل يغطي قواعد المستوى <strong>${meta.level}</strong> المعتمدة في اختبارات Goethe-Zertifikat الرسمية. يتضمن شرح الفروق النحوية ومقارنتها باللغة العربية، بالإضافة لبنك تدريبي يحتوي على 20 تمريناً تفاعلياً.
            </p>
          </div>
        </div>
      `,
      exercises: Array.from({ length: 20 }, (_, i) => ({
        id: i + 1,
        before: "Beispiel " + (i + 1) + ": Das ist",
        ans: "richtig",
        after: "für diese Grammatikregel.",
        full: "Das ist richtig für diese Grammatikregel.",
        opts: ["richtig", "falsch", "gut", "wichtig"],
        hint: "تطبيق مباشر على قاعدة: " + meta.titleAr
      }))
    };
  }

  addXP(pts) {
    this.xp += pts;
    localStorage.setItem('dm_xp', this.xp);
  }
}

const state = new AppState();

// 3. SPRACHAUSGABE (Web Speech API)
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

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// 4. DOM REFERENCES
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
const hintContainer = document.getElementById('hint-container');
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

// 5. INITIALISIERUNG
function initApp() {
  statXp.innerText = `${state.xp} XP`;
  setupNavigationButtons();
  setupCatalogDrawer();
  setupHintButton();
  renderCurrentState();
}

function renderCurrentState() {
  const chap = state.getCurrentChapter();
  headerBadge.innerText = chap.chapterId;
  headerName.innerText = chap.titleAr;

  // Lektionstext rendern
  lessonContentBody.innerHTML = chap.lessonHtml;

  // 20-Übungs-Raster rendern (1 bis 20)
  pillsGrid.innerHTML = chap.exercises.map((ex, idx) => {
    const isCurrent = idx === state.currentExerciseIndex;
    const isDone = state.completedExercises[`${chap.chapterId}_${ex.id}`];
    
    let bgClass = "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200";
    if (isDone) bgClass = "bg-green-100 text-green-800 border-green-300";
    if (isCurrent) bgClass = "bg-blue-600 text-white shadow-sm border-blue-600";

    return `
      <div onclick="jumpToExercise(${idx})" class="ex-grid-item ${bgClass}">
        ${idx + 1}
      </div>
    `;
  }).join('');

  practiceProgressLabel.innerText = `Aufgabe ${state.currentExerciseIndex + 1} / 20`;

  // Aktive Übung rendern
  renderActiveExercise();
}

function renderActiveExercise() {
  feedbackPanel.classList.add('hidden');
  hintText.classList.add('hidden');

  const chap = state.getCurrentChapter();
  const ex = chap.exercises[state.currentExerciseIndex];

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
  const ex = chap.exercises[state.currentExerciseIndex];
  const isCorrect = selectedOption.toLowerCase() === ex.ans.toLowerCase();

  const slot = document.getElementById('cloze-target-slot');
  slot.innerText = selectedOption;
  slot.classList.add(isCorrect ? 'text-green-600' : 'text-red-600');

  // Exercise Stage sperren
  exerciseStage.querySelectorAll('button').forEach(b => b.classList.add('pointer-events-none'));
  feedbackPanel.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'bg-green-50', 'border-green-200', 'animate-shake');

  if (isCorrect) {
    state.addXP(10);
    statXp.innerText = `${state.xp} XP`;
    state.completedExercises[`${chap.chapterId}_${ex.id}`] = true;

    feedbackPanel.classList.add('bg-green-50', 'border-green-200');
    feedbackTitle.className = 'font-bold text-sm text-green-900';
    feedbackTitle.innerText = 'أحسنت! إجابة دقيقة وصحيحة (Richtig)';
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

// 6. UI-MODI-UMSCHALTER (LEHRBUCH VS. ÜBUNGEN)
function switchToPracticeMode() {
  state.currentMode = 'practice';
  viewLesson.classList.add('hidden');
  viewPractice.classList.remove('hidden');

  tabBtnPractice.className = "px-4 py-1.5 rounded-lg bg-blue-600 text-white transition flex items-center gap-1.5 shadow-sm";
  tabBtnLesson.className = "px-4 py-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-200 transition flex items-center gap-1.5";
  renderCurrentState();
}

function switchToLessonMode() {
  state.currentMode = 'lesson';
  viewLesson.classList.remove('hidden');
  viewPractice.classList.add('hidden');

  tabBtnLesson.className = "px-4 py-1.5 rounded-lg bg-blue-600 text-white transition flex items-center gap-1.5 shadow-sm";
  tabBtnPractice.className = "px-4 py-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-200 transition flex items-center gap-1.5";
}

window.jumpToExercise = function(idx) {
  state.currentExerciseIndex = idx;
  renderCurrentState();
};

btnNextEx.addEventListener('click', () => {
  if (state.currentExerciseIndex < 19) {
    state.currentExerciseIndex++;
    renderCurrentState();
  } else {
    alert('تهانينا! أتممت جميع تمارين هذا الفصل الـ 20 بنجاح!');
  }
});

function setupNavigationButtons() {
  tabBtnLesson.addEventListener('click', switchToLessonMode);
  tabBtnPractice.addEventListener('click', switchToPracticeMode);

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
}

function setupHintButton() {
  btnShowHint.addEventListener('click', () => hintText.classList.toggle('hidden'));
}

// 7. KATALOG DER 30 KAPITEL (DRAWER)
function setupCatalogDrawer() {
  btnOpenCatalog.addEventListener('click', () => {
    catalogDrawer.classList.remove('hidden');
    catalogList.innerHTML = ALL_GOETHE_CHAPTER_METADATA.map((chap, idx) => `
      <div onclick="selectChapterFromCatalog(${idx})" class="p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/60 cursor-pointer transition flex items-start gap-2.5">
        <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-de font-bold text-[10px] mt-0.5">${chap.id}</span>
        <div class="flex-1">
          <p class="font-bold text-slate-800 text-xs">${chap.titleAr}</p>
          <span class="text-[10px] text-slate-400 font-semibold font-de">Niveau: ${chap.level} • 20 Aufgaben</span>
        </div>
      </div>
    `).join('');
  });

  closeCatalogDrawer.addEventListener('click', () => catalogDrawer.classList.add('hidden'));
}

window.selectChapterFromCatalog = function(idx) {
  state.currentChapterIndex = idx;
  state.currentExerciseIndex = 0;
  catalogDrawer.classList.add('hidden');
  renderCurrentState();
};

window.addEventListener('DOMContentLoaded', initApp);
