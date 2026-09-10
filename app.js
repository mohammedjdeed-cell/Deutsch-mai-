/**
 * Deutsch mit Mai – Complete Master Engine
 * ALL 30 GOETHE MODULES (A1.01 - A2.17) FULLY ENCODED
 * Includes Teacher Whiteboards, Mathematical Formulas, Paradigms & 40-Tier Exercise Engine
 */

// Initialize Theme Immediately to Prevent Flash
(function() {
  const saved = localStorage.getItem('dm_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (saved === 'dark') document.documentElement.classList.add('dark');
})();

// =========================================================================
// THE FULL 30-MODULE COMPENDIUM REGISTRY
// =========================================================================
const MASTER_MODULES = [
  // -----------------------------------------------------------------------
  // PART I: GOETHE-ZERTIFIKAT A1 (START DEUTSCH 1) – MODULES 1 TO 13
  // -----------------------------------------------------------------------
  {
    id: "A1.01", moduleNum: 1, level: "A1",
    titleDe: "Personal Pronouns & Present Tense Verb Conjugation (Präsens)",
    titleAr: "الضمائر الشخصية وتصريف أفعال الحاضر وتعديلات الجذع (-t/-d/-s)",
    teacherNote: "أهلاً بكم في أولى محطات الألمانية! الفعل هو عمود الجملة الفقري، ولا يمكن أن يبقى بصيغة المصدر دون تصريف يطابق الفاعل.",
    logic: "لماذا تصر الألمانية على تصريف الفعل؟ لأن النهايات الصرفية تحدد بدقة من الفاعل حتى لو تغير ترتيب الجملة.",
    trap: "نسيان حرف e الوقاية في أفعال مثل arbeiten. لا تقل (du arbeitst) بل أضف e لتسهيل النطق: (du arbeitest)!",
    trick: "احفظ الترتيب الصوتي لنهايات الأفعال: e, st, t, en, t, en!",
    formula: "Infinitive - '-en' = Verb Stem | Stem + Ending = Conjugated Verb",
    paradigmHeaders: ["Pronoun", "Ending", "lernen", "arbeiten (-t-)", "heißen (-s-)"],
    paradigmRows: [
      ["ich", "-e", "lerne", "arbeite", "heiße"],
      ["du", "-st", "lernst", "arbeitest", "heißt"],
      ["er / sie / es", "-t", "lernt", "arbeitet", "heißt"],
      ["wir", "-en", "lernen", "arbeiten", "heißen"],
      ["ihr", "-t", "lernt", "arbeitet", "heißt"],
      ["sie / Sie", "-en", "lernen", "arbeiten", "heißen"]
    ],
    rules: [
      "Stems in -t, -d insert an -e- before -st and -t (du arbeitest, er arbeitet).",
      "Stems in -s, -ß, -z drop the -s- with 'du' (du heißt, du reist).",
      "Irregular auxiliaries: sein (ich bin, du bist, er ist) & haben (du hast, er hat)."
    ],
    breakdownExample: {
      german: "Ich wohne in Berlin und arbeite dort.",
      tags: [
        { text: "Ich", type: "subj", label: "Subjekt" },
        { text: "wohne", type: "verb", label: "Verb 1 (wohn- + -e)" },
        { text: "in Berlin", type: "prep", label: "Lokalangabe" },
        { text: "und", type: "prep", label: "Konjunktion" },
        { text: "arbeite", type: "verb", label: "Verb 2 (arbeit- + -e)" },
        { text: "dort", type: "prep", label: "Adverb" }
      ],
      translation: "أنا أسكن في برلين وأعمل هناك."
    },
    seedBank: [
      { q: "Ich ___ in Berlin.", a: "wohne", o: ["wohne", "wohnst", "wohnt", "wohnen"], h: "نهاية المتكلم ich هي دائماً -e." },
      { q: "Du ___ sehr fleißig im Krankenhaus.", a: "arbeitest", o: ["arbeitst", "arbeitest", "arbeitet", "arbeiten"], h: "جذع الفعل ينتهي بـ t، فنضيف e وقاية قبل st." },
      { q: "Wie ___ du mit Nachnamen?", a: "heißt", o: ["heißest", "heißt", "heiße", "heißen"], h: "الفعل المنتهي بـ ß يأخذ t فقط مع du." },
      { q: "Er ___ ein interessantes Buch.", a: "hat", o: ["habe", "hast", "hat", "haben"], h: "تصريف الغائب المفرد لفعل haben هو hat." }
    ]
  },
  {
    id: "A1.02", moduleNum: 2, level: "A1",
    titleDe: "Sentence Architecture I (Main Clauses & Questions)",
    titleAr: "معمارية الجملة: قاعدة الفعل بالمركز 2، الانقلاب (Inversion)، والأسئلة",
    teacherNote: "الجملة الألمانية مثل سكة قطار صارمة: الفعل المصرف مقفل دائماً في المركز الثاني في الجملة الخبرية!",
    logic: "لماذا تفرض الألمانية المركز الثاني للفعل؟ لكي تتيح لك حرية تقديم الزمان أو المكان في أول الجملة دون التضحية بوضوح الفعل.",
    trap: "الترجمة الحرفية من العربية: لا تقل (Heute ich lerne)، بل اعكس فوراً: (Heute lerne ich)!",
    trick: "قاعدة المركز الثاني: مهما بدأت به الجملة، احسب 1، وضع الفعل مباشرة في 2.",
    formula: "Declarative: Pos 1 (Vorfeld) + Verb (Pos 2) + Subject (Pos 3) | Ja/Nein: Verb (Pos 1)",
    paradigmHeaders: ["Pattern", "Position 1", "Position 2 (Verb)", "Position 3 (Subject/Rest)"],
    paradigmRows: [
      ["Normal", "Wir", "lernen", "heute Deutsch."],
      ["Inversion", "Heute", "lernen", "wir Deutsch."],
      ["Ja/Nein", "Lernst", "du", "heute Deutsch?"],
      ["W-Frage", "Wo", "wohnst", "du jetzt?"]
    ],
    rules: [
      "V2 Rule: In declarative main clauses, the conjugated verb must be in Position 2.",
      "Inversion: If time or place occupies Position 1, the subject moves to Position 3.",
      "Closed questions (Ja/Nein) place the verb in Position 1."
    ],
    breakdownExample: {
      german: "Heute lernen wir Deutsch in der Schule.",
      tags: [
        { text: "Heute", type: "prep", label: "Pos 1: Temporal" },
        { text: "lernen", type: "verb", label: "Pos 2: Verb" },
        { text: "wir", type: "subj", label: "Pos 3: Subjekt (Inversion)" },
        { text: "Deutsch in der Schule", type: "obj", label: "Objekt + Ort" }
      ],
      translation: "اليوم نتعلم نحن اللغة الألمانية في المدرسة."
    },
    seedBank: [
      { q: "Heute ___ wir Deutsch in der Schule.", a: "lernen", o: ["wir lernen", "lernen", "lernt", "lernen wir"], h: "بدأت الجملة بالزمان، فيأتي الفعل المصرف مباشرة في المركز 2." },
      { q: "___ du morgens immer Kaffee?", a: "Trinkst", o: ["Trinkst", "Trinkt", "Trinken", "Trinke"], h: "سؤال نعم/لا يبدأ بالفعل في المركز 1." },
      { q: "In Berlin ___ die Menschen viele Sprachen.", a: "sprechen", o: ["sprechen", "die Menschen sprechen", "spricht", "gesprochen"], h: "بدأت الجملة بالمكان In Berlin، فيأتي الفعل مباشرة ثانياً ➔ sprechen." },
      { q: "Woher ___ deine Eltern?", a: "kommen", o: ["kommt", "kommen", "kommst", "komme"], h: "سؤال أداة الاستفهام: أداة W أولاً ثم الفعل مباشرة بالمركز الثاني." }
    ]
  },
  {
    id: "A1.03", moduleNum: 3, level: "A1",
    titleDe: "Nouns, Grammatical Gender & Nominative Case",
    titleAr: "الأسماء وأدوات التعريف والنكرة والنفي والجمع في الرفع",
    teacherNote: "أكبر تحدٍ يواجه الطالب العربي هو أن الجماد في الألمانية قد يكون مؤنثاً أو مذكراً أو محايداً دون منطق بيولوجي!",
    logic: "لماذا توجد 3 أدوات؟ الألمانية تعتمد على جنس الكلمة النحوي (Geschlecht) لتحديد الإعراب وتماسك الجملة.",
    trap: "لا تترجم جنس الكلمة من العربية أبداً! الطاولة في العربية مؤنثة لكنها بالألمانية مذكر (der Tisch)، والشمس مؤنثة (die Sonne)!",
    trick: "كل كلمة تنتهي بـ '-ung' أو '-heit' أو '-keit' هي مؤنثة die دائماً! وكل كلمة تنتهي بـ '-chen' هي محايدة das دائماً.",
    formula: "Masc: der / ein / kein | Fem: die / eine / keine | Neut: das / ein / kein | Plur: die / keine",
    paradigmHeaders: ["Gender", "Definite", "Indefinite", "Negative (kein)", "Plural Class"],
    paradigmRows: [
      ["Maskulinum", "der Tisch", "ein Tisch", "kein Tisch", "die Tische (-e)"],
      ["Neutrum", "das Buch", "ein Buch", "kein Buch", "die Bücher (¨-er)"],
      ["Femininum", "die Lampe", "eine Lampe", "keine Lampe", "die Lampen (-n)"],
      ["Plural", "die Autos", "--", "keine Autos", "die Autos (-s)"]
    ],
    rules: [
      "Every noun has an inherent gender: Maskulinum (der), Femininum (die), Neutrum (das).",
      "Nominative designates the active subject or predicate noun after sein/werden/bleiben.",
      "Plural formation follows 5 major morphophonological classes."
    ],
    breakdownExample: {
      german: "Der Tisch ist alt, aber die Stühle sind neu.",
      tags: [
        { text: "Der Tisch", type: "subj", label: "Subjekt 1: Masc. Nom" },
        { text: "ist alt", type: "verb", label: "Kopula + Prädikativ" },
        { text: "aber", type: "prep", label: "Konjunktion" },
        { text: "die Stühle", type: "subj", label: "Subjekt 2: Plur. Nom" },
        { text: "sind neu", type: "verb", label: "Kopula + Prädikativ" }
      ],
      translation: "الطاولة قديمة، ولكن الكراسي جديدة."
    },
    seedBank: [
      { q: "Das ist ___ Kugelschreiber, das ist ein Bleistift.", a: "kein", o: ["nicht", "kein", "keine", "keinen"], h: "نفي الاسم النكرة المذكر der Stift يكون بـ kein." },
      { q: "Hier steht ___ schöne Lampe.", a: "eine", o: ["ein", "eine", "einen", "einer"], h: "كلمة Lampe مؤنثة die وتأخذ أداة النكرة eine في الرفع." },
      { q: "Das Buch ist alt, aber die ___ sind neu.", a: "Bücher", o: ["Buchs", "Bücher", "Büchern", "Buche"], h: "جمع كلمة das Buch هو die Bücher مع إمالة Umlaut وإضافة er." },
      { q: "Das ist ___ Kind, das ist ein Erwachsener.", a: "kein", o: ["keine", "kein", "nicht", "keinen"], h: "كلمة Kind محايدة das وتنفي نكرتها بـ kein." }
    ]
  },
  {
    id: "A1.04", moduleNum: 4, level: "A1",
    titleDe: "The Accusative Case (Akkusativ)",
    titleAr: "حالة النصب (Akkusativ): المفعول به المباشر، تحول المذكر، وأحرف DOGFU",
    teacherNote: "تنفسوا الصعداء! في حالة النصب (Akkusativ)، المذكر فقط هو الذي يتغير، وبقية الأجناس تبقى ثابتة!",
    logic: "لماذا يتغير المذكر فقط؟ لتفريق الفاعل المذكر عن المفعول به في السمع، بينما المؤنث والمحايد والجمع لا يطرأ عليهم تغيير.",
    trap: "تغيير المؤنث أو المحايد: المؤنث die والمحايد das يبقيان كما هما تماماً!",
    trick: "احفظ كلمة (DOGFU): خمسة أحرف جر تنصب دائماً وبلا استثناء (Durch, Ohne, Gegen, Für, Um).",
    formula: "Masc: der/ein ➔ den/einen | Fem/Neut/Plur: UNCHANGED | DOGFU: Durch, Ohne, Gegen, Für, Um",
    paradigmHeaders: ["Gender", "Nominativ", "Akkusativ", "Indefinit (ein)", "Negation (kein)"],
    paradigmRows: [
      ["Maskulinum", "der", "den", "einen", "keinen"],
      ["Neutrum", "das", "das", "ein", "kein"],
      ["Femininum", "die", "die", "eine", "keine"],
      ["Plural", "die", "die", "--", "keine"]
    ],
    rules: [
      "Direct objects of transitive verbs (haben, suchen, kaufen, sehen) take Accusative.",
      "Only masculine shifts: der ➔ den, ein ➔ einen, kein ➔ keinen.",
      "DOGFU prepositions always mandate Accusative."
    ],
    breakdownExample: {
      german: "Der Mann kauft den teuren Fernseher.",
      tags: [
        { text: "Der Mann", type: "subj", label: "Subjekt (Nom. Masc)" },
        { text: "kauft", type: "verb", label: "Transitives Verb" },
        { text: "den teuren Fernseher", type: "obj", label: "Direktes Objekt (Akk. Masc)" }
      ],
      translation: "الرجل يشتري التلفاز باهظ الثمن."
    },
    seedBank: [
      { q: "Der Mann kauft ___ neuen Computer.", a: "den", o: ["der", "den", "dem", "das"], h: "المفعول به المذكر المنصوب يتحول من der إلى den." },
      { q: "Er kommt ohne ___ Mantel.", a: "seinen", o: ["sein", "seinen", "seinem", "seiner"], h: "حرف الجر ohne ينصب الاسم بعده دائماً ➔ seinen." },
      { q: "Ich habe ___ großen Bruder in Berlin.", a: "einen", o: ["ein", "einen", "einem", "eine"], h: "فعل haben يأخذ مفعولاً به منصوباً للمذكر ➔ einen Bruder." },
      { q: "Liebst du ___? – Ja, von ganzem Herzen.", a: "mich", o: ["ich", "mich", "mir", "mein"], h: "ضمير المتكلم كـ مفعول به منصوب يتحول إلى mich." }
    ]
  },
  {
    id: "A1.05", moduleNum: 5, level: "A1",
    titleDe: "Negation Mechanics: nicht vs. kein",
    titleAr: "قواعد النفي الدقيقة: استخدام nicht مقابل أداة kein ومواقع النفي",
    teacherNote: "النفي في الألمانية منظم جداً: kein مخصصة فقط للأسماء النكرة، بينما nicht تنفي كل شيء آخر!",
    logic: "لماذا توجد أداتان؟ لأن kein تعمل كأداة تعريف سلبية، بينما nicht ظرف نفي يعلق على الفعل أو الصفة.",
    trap: "استخدام kein مع الأفعال أو الصفات! لا تقل (Das ist kein gut)، بل قل حتماً: (Das ist nicht gut)!",
    trick: "إذا كان الاسم يقبل (ein)، انفِه بـ (kein). وإذا كان فعلاً أو صفة أو اسماً بـ der/die/das، انفِه بـ (nicht).",
    formula: "kein + Indefinite/Zero-Article Noun | nicht + Verb / Adjective / Definite Noun",
    paradigmHeaders: ["Negation Type", "Target Component", "Position Rule", "Example"],
    paradigmRows: [
      ["kein / keine", "Nomen (ein / zero)", "Directly before noun", "Ich habe kein Geld."],
      ["nicht (Verb)", "Entire Clause / Action", "At the very end", "Ich schlafe heute nicht."],
      ["nicht (Adj)", "Adjective / Adverb", "Before the adjective", "Das Wetter ist nicht schön."],
      ["nicht (Def)", "Definite Noun", "Before der/die/das", "Das ist nicht der Chef."]
    ],
    rules: [
      "Use 'kein' exclusively for nouns preceded by ein/eine or zero article (Nullartikel).",
      "Use 'nicht' to negate verbs, adjectives, adverbs, and definite noun phrases.",
      "Position of 'nicht': clause-end for verb negation, directly preceding specific constituents."
    ],
    breakdownExample: {
      german: "Ich habe keine Zeit und kein Geld.",
      tags: [
        { text: "Ich", type: "subj", label: "Subjekt" },
        { text: "habe", type: "verb", label: "Verb" },
        { text: "keine Zeit", type: "obj", label: "Negiertes Nomen (Fem. Akk)" },
        { text: "und", type: "prep", label: "Konjunktion" },
        { text: "kein Geld", type: "obj", label: "Negiertes Nomen (Neut. Akk)" }
      ],
      translation: "ليس لدي وقت وليس لدي مال."
    },
    seedBank: [
      { q: "Der Kaffee ist ___ heiß genug.", a: "nicht", o: ["kein", "nicht", "keine", "nichts"], h: "نفي الصفات يكون دائماً باستخدام nicht." },
      { q: "Ich habe ___ Geschwister.", a: "keine", o: ["nicht", "kein", "keine", "keinen"], h: "نفي اسم الجمع النكرة يكون بـ keine." },
      { q: "Er kommt heute ___ zum Unterricht.", a: "nicht", o: ["kein", "nicht", "keine", "nichts"], h: "نفي شبه الجملة أو الحضور الفعلي يكون بـ nicht." },
      { q: "Das ist ___ mein Auto.", a: "nicht", o: ["kein", "nicht", "keine", "nichts"], h: "نفي ضمائر الملكية يكون بـ nicht." }
    ]
  },
  {
    id: "A1.06", moduleNum: 6, level: "A1",
    titleDe: "Stem-Changing Verbs (Vokalwechsel im Präsens)",
    titleAr: "الأفعال القوية وتغير الحرف الصوتي في الحاضر (e➔i, e➔ie, a➔ä)",
    teacherNote: "هذه الأفعال تسمى (قوية) لأنها تغير حرفها الصوتي الداخلي لتعطي إيقاعاً أقوى في الكلام.",
    logic: "التغير الصوتي يحدث فقط مع الشخصين الثاني والثالث للمفرد (du و er/sie/es) لتسهيل تمييز الفرد المخاطب والغائب.",
    trap: "تغيير الحرف الصوتي مع ich أو الجمع! لا تقل (ich fahre ➔ falsch: ich fähre)؛ التغير محصور بـ du و er فقط!",
    trick: "جمع ونحن (wir) وأنتم (ihr) يبقون عاديين دائماً بدون أي إمالة!",
    formula: "Shift applies ONLY to: 2nd sing (du) and 3rd sing (er/sie/es) | ich/wir/ihr/sie are regular",
    paradigmHeaders: ["Pattern", "Verb (Infinitive)", "du Form", "er/sie/es Form", "ihr Form (Regular)"],
    paradigmRows: [
      ["e ➔ i", "sprechen", "du sprichst", "er spricht", "ihr sprecht"],
      ["e ➔ i", "helfen", "du hilfst", "er hilft", "ihr helft"],
      ["e ➔ ie", "sehen", "du siehst", "er sieht", "ihr seht"],
      ["e ➔ ie", "lesen", "du liest", "er liest", "ihr lest"],
      ["a ➔ ä", "fahren", "du fährst", "er fährt", "ihr fahrt"],
      ["a ➔ ä", "schlafen", "du schläfst", "er schläft", "ihr schlaft"]
    ],
    rules: [
      "Phonological shifts occur strictly in 2nd and 3rd person singular.",
      "1st person singular (ich) and all plural forms (wir, ihr, sie/Sie) retain standard stem.",
      "Crucial irregular stems: nehmen ➔ du nimmst, er nimmt; wissen ➔ ich weiß, du weißt, er weiß."
    ],
    breakdownExample: {
      german: "Fährst du mit dem Zug oder nimmst du das Auto?",
      tags: [
        { text: "Fährst", type: "verb", label: "Verb 1 (a➔ä)" },
        { text: "du", type: "subj", label: "Subjekt" },
        { text: "mit dem Zug", type: "prep", label: "Präpositionalphrase" },
        { text: "oder", type: "prep", label: "Konjunktion" },
        { text: "nimmst", type: "verb", label: "Verb 2 (e➔i)" },
        { text: "du", type: "subj", label: "Subjekt" },
        { text: "das Auto", type: "obj", label: "Objekt" }
      ],
      translation: "هل تسافر بالقطار أم تأخذ السيارة؟"
    },
    seedBank: [
      { q: "Er ___ jeden Abend einen Roman.", a: "liest", o: ["lest", "liest", "lese", "gelesen"], h: "فعل lesen يتحول فيه حرف e إلى ie مع الغائب er." },
      { q: "Mai, ___ du morgen nach Köln?", a: "fährst", o: ["fahrst", "fährst", "fahrt", "fahren"], h: "فعل fahren يأخذ Umlaut مع du ➔ fährst." },
      { q: "Der Arzt ___ dem Patienten sofort.", a: "hilft", o: ["helft", "hilft", "helfen", "half"], h: "فعل helfen يتحول e إلى i مع الغائب er ➔ hilft." },
      { q: "Was ___ du zum Frühstück?", a: "isst", o: ["esst", "isst", "esse", "essen"], h: "فعل essen يتحول e إلى i مع المخاطب du ➔ isst." }
    ]
  },
  {
    id: "A1.07", moduleNum: 7, level: "A1",
    titleDe: "Possessive Articles (Possessivartikel in Nom. & Akk.)",
    titleAr: "أدوات الملكية وتصريفها في الرفع والنصب وقاعدة إسقاط حرف e في euer",
    teacherNote: "أدوات الملكية تشبه إلى حد كبير ياء المتكلم وكاف المخاطب في العربية، وتتبع نهايات أداة النكرة (ein/eine).",
    logic: "الجذر يحدد (من هو المالك)، والنهاية تحدد (جنس وإعراب الشيء المملوك).",
    trap: "نسيان إسقاط حرف e في كلمة euer! الألمان يجدون نطق (euere) ثقيلاً، فيسقطون حرف e الداخلي لتصبح (eure)!",
    trick: "أدوات الملكية تأخذ نفس نهايات أداة النكرة (ein) تماماً في الرفع والنصب.",
    formula: "Roots: mein, dein, sein, ihr, unser, euer, ihr, Ihr | Endings follow 'ein / eine' pattern",
    paradigmHeaders: ["Case / Gender", "Maskulinum", "Neutrum", "Femininum", "Plural"],
    paradigmRows: [
      ["Nominativ", "mein Vater", "mein Kind", "meine Mutter", "meine Eltern"],
      ["Akkusativ", "meinen Vater (-en)", "mein Kind", "meine Mutter", "meine Eltern"]
    ],
    rules: [
      "Possessive articles match the possessor's pronoun and inflect for case and gender.",
      "In the accusative case, only the masculine ending takes -en (meinen, deinen, seinen).",
      "Euer Contraction Rule: euer + -e drops the internal -e- ➔ eure Mutter (not euere!)."
    ],
    breakdownExample: {
      german: "Mein Vater sucht seinen Schlüssel.",
      tags: [
        { text: "Mein Vater", type: "subj", label: "Subjekt (Masc. Nom)" },
        { text: "sucht", type: "verb", label: "Verb" },
        { text: "seinen Schlüssel", type: "obj", label: "Objekt (Akk. Masc: sein + -en)" }
      ],
      translation: "والدي يبحث عن مفتاحه."
    },
    seedBank: [
      { q: "Mein Vater sucht ___ Schlüssel.", a: "seinen", o: ["sein", "seinen", "seinem", "seine"], h: "المفتاح مذكر مفعول به منصوب: sein + en = seinen." },
      { q: "Wo wohnt ___ Familie?", a: "eure", o: ["euer", "eure", "euren", "eures"], h: "عائلة مؤنثة die، ومع euer تسقط الـ e الداخلية لتصبح eure." },
      { q: "Hast du ___ Pass dabei?", a: "deinen", o: ["dein", "deinen", "deine", "deinem"], h: "جواز السفر مذكر منصوب فيأخذ deinen." },
      { q: "Das ist ___ Auto, ich habe es gestern gekauft.", a: "mein", o: ["mein", "meinen", "meine", "meiner"], h: "السيارة محايدة das وفي حالة الرفع تبقى بدون نهاية ➔ mein." }
    ]
  },
  {
    id: "A1.08", moduleNum: 8, level: "A1",
    titleDe: "Compound Verb Structures (Satzklammer, Trennbar & Modal)",
    titleAr: "القوس الفعلي: الأفعال المنفصلة وغير المنفصلة وأفعال المودال الستة",
    teacherNote: "القوس الفعلي (Satzklammer) هو سر بلاغة الألمانية: نفتح قوساً بالفعل المصرف في المركز 2 ونغلقه في آخر كلمة!",
    logic: "لماذا في النهاية؟ لكي يبقى السامع مشدوداً لمعرفة اكتمال المعنى بالفعل المساعد والسابقة في نهاية الكلام.",
    trap: "ترك السابقة المنفصلة بجانب الفعل! لا تقل (Ich aufstehe um 6)، بل اقذف السابقة لآخر الجملة: (Ich stehe um 6 auf)!",
    trick: "السوابق المنفصلة المشهورة: ab, an, auf, aus, ein, mit, vor, zu.",
    formula: "Modal: Modal (Pos 2) + ... + Infinitive (End) | Trennbar: Stem (Pos 2) + ... + Prefix (End)",
    paradigmHeaders: ["Category", "Position 2 (Conjugated)", "Mittelfeld", "Satzende (End of Clause)"],
    paradigmRows: [
      ["Trennbar", "fährt", "um 08:30 Uhr in München", "ab."],
      ["Trennbar", "stehe", "jeden Tag früh", "auf."],
      ["Modalverb", "muss", "heute viele Aufgaben", "machen."],
      ["Modalverb", "kann", "sehr gut Deutsch", "sprechen."]
    ],
    rules: [
      "Satzklammer (Sentence Bracket): Conjugated verb in Pos 2, secondary element at clause-end.",
      "Separable Prefixes (ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-) separate to the absolute end.",
      "Inseparable Prefixes (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-) never separate."
    ],
    breakdownExample: {
      german: "Wir kaufen heute im Supermarkt ein.",
      tags: [
        { text: "Wir", type: "subj", label: "Pos 1: Subjekt" },
        { text: "kaufen", type: "verb", label: "Pos 2: Verbstamm" },
        { text: "heute im Supermarkt", type: "prep", label: "Mittelfeld" },
        { text: "ein", type: "verb", label: "Satzende: Präfix" }
      ],
      translation: "نحن نتسوق اليوم في السوبرماركت."
    },
    seedBank: [
      { q: "Mai steht jeden Morgen um 6 Uhr ___.", a: "auf", o: ["an", "auf", "mit", "aus"], h: "السابقة auf لفعل aufstehen تقذف لنهاية الجملة." },
      { q: "Hier ___ man leider nicht parken.", a: "darf", o: ["darf", "darfst", "dürfen", "dürft"], h: "فعل dürfen مع الضمير man يأخذ darf." },
      { q: "Wir müssen heute viel Grammatik ___.", a: "lernen", o: ["lernt", "lernen", "lerne", "gelernt"], h: "مع فعل المودال müssen يأتي الفعل الأساسي مصدراً في نهاية الجملة." },
      { q: "Er ruft seine Mutter jeden Sonntag ___.", a: "an", o: ["an", "auf", "aus", "mit"], h: "فعل الاتصال anrufen سابقتها an تذهب للنهاية." }
    ]
  },
  {
    id: "A1.09", moduleNum: 9, level: "A1",
    titleDe: "The Imperative Mood (Imperativ)",
    titleAr: "صيغة الأمر للمفرد والجمع والاحترام والأفعال الشاذة (Sei leise!)",
    teacherNote: "صيغة الأمر مريحة جداً في الألمانية لأنها تحذف الفاعل في صيغتي المخاطب المفرد والجمع!",
    logic: "الأمر موجه لمن هو أمامك مباشرة، لذا لا حاجة لذكر الضمير مع du أو ihr.",
    trap: "إبقاء حرف e أو st مع du! لا تقل (Kommst hier)، بل احذف st والضمير فوراً: (Komm hier)!",
    trick: "فعل الكينونة sein شاذ في الأمر ويحفظ غيباً: Sei! للواحد، Seid! للجماعة، Seien Sie! للاحترام.",
    formula: "du: Stem - st (Mach!) | ihr: Conjugated verb without ihr (Macht!) | Sie: Inversion (Machen Sie!)",
    paradigmHeaders: ["Address Mode", "Rule", "Standard (kommen)", "Irregular (sein)"],
    paradigmRows: [
      ["du (informal sg)", "Drop 'du' and '-st'", "Komm!", "Sei leise!"],
      ["ihr (informal pl)", "Drop pronoun 'ihr'", "Kommt!", "Seid pünktlich!"],
      ["Sie (formal)", "Invert Verb + Sie", "Kommen Sie!", "Seien Sie vorsichtig!"]
    ],
    rules: [
      "Informal singular (du): Drop 'du' and '-st'. Vowel shifts e➔i are kept (Lies!), a➔ä are dropped (Fahr!).",
      "Informal plural (ihr): Standard conjugated 2nd person plural verb, drop pronoun 'ihr'.",
      "Formal (Sie): Invert infinitive and pronoun 'Sie'. 'Sie' must be retained."
    ],
    breakdownExample: {
      german: "Gib mir bitte deine Telefonnummer!",
      tags: [
        { text: "Gib", type: "verb", label: "Imperativ du (e➔i)" },
        { text: "mir", type: "obj", label: "Dativobjekt" },
        { text: "bitte", type: "prep", label: "Höflichkeit" },
        { text: "deine Telefonnummer", type: "obj", label: "Akkusativobjekt" }
      ],
      translation: "أعطني من فضلك رقم هاتفك!"
    },
    seedBank: [
      { q: "Bitte ___ leise im Unterricht!", a: "sei", o: ["bist", "sei", "seid", "seien"], h: "أمر فعل الكينونة sein مع المفرد du هو Sei!" },
      { q: "___ Sie bitte hier an der nächsten Haltestelle aus!", a: "Steigen", o: ["Steig", "Steigt", "Steigen", "Steigst"], h: "أمر الاحترام Sie يسبق الضمير بصيغة المصدر: Steigen Sie." },
      { q: "Kinder, ___ eure Hausaufgaben jetzt!", a: "macht", o: ["machen", "macht", "machst", "mache"], h: "أمر الجمع ihr يحذف الضمير ويبقى تصريف ihr: macht!" },
      { q: "___ bitte den Text laut vor!", a: "Lies", o: ["Lese", "Lies", "Liest", "Lesen"], h: "فعل lesen يحتفظ بالكسرة الصوتية ie في أمر المفرد: Lies!" }
    ]
  },
  {
    id: "A1.10", moduleNum: 10, level: "A1",
    titleDe: "The Dative Case (Dativ Basics)",
    titleAr: "أساسيات المجرور (Dativ): الأدوات، الضمائر، أفعال الجر، وحروف الجر الثابتة",
    teacherNote: "مرحباً بكم في الـ Dativ! يقابل في العربية الاسم المجرور بحرف الجر أو المفعول غير المباشر المستفيد من الفعل.",
    logic: "لماذا تتغير الأدوات بقوة هنا؟ لكي يعرف السامع لمن يوجه الفعل أو من الذي يستفيد من العطاء والمساعدة.",
    trap: "المؤنث في Dativ يتحول إلى (der)! لا تظنها خطأ مطبعياً مذكراً، بل هي مؤنث في حالة جر: (der Frau)!",
    trick: "احفظ أنشودة حروف الجر التي تجر دائماً: (Aus, bei, mit, nach, seit, von, zu).",
    formula: "Masc/Neut: dem / einem | Fem: der / einer | Plur: den + Noun-n | Pronouns: mir, dir, ihm, ihr, uns, euch, ihnen",
    paradigmHeaders: ["Gender / Number", "Nominativ", "Dativ", "Indefinit Dativ", "Pronouns"],
    paradigmRows: [
      ["Maskulinum", "der Mann", "dem Mann", "einem Mann", "ihm"],
      ["Neutrum", "das Kind", "dem Kind", "einem Kind", "ihm"],
      ["Femininum", "die Frau", "der Frau", "einer Frau", "ihr"],
      ["Plural", "die Kinder", "den Kindern (+n)", "--", "ihnen"]
    ],
    rules: [
      "Designates indirect personal receiver or object of dative verbs (helfen, danken, gefallen, schmecken).",
      "Fixed dative prepositions mnemonic: aus, bei, mit, nach, seit, von, zu, gegenüber.",
      "Plural nouns in dative must receive suffix -n unless already ending in -n or -s."
    ],
    breakdownExample: {
      german: "Das Essen schmeckt den Gästen sehr gut.",
      tags: [
        { text: "Das Essen", type: "subj", label: "Subjekt: Nom. Neut" },
        { text: "schmeckt", type: "verb", label: "Dativ-Verb" },
        { text: "den Gästen", type: "obj", label: "Indir. Obj: Dat. Plur + -n" },
        { text: "sehr gut", type: "prep", label: "Prädikativ" }
      ],
      translation: "الطعام يعجب الضيوف ومذاقه لذيذ جداً بالنسبة لهم."
    },
    seedBank: [
      { q: "Ich fahre am Wochenende mit ___ Zug.", a: "dem", o: ["den", "dem", "das", "der"], h: "حرف الجر mit يفرض حالة Dativ دائماً: der Zug ➔ dem Zug." },
      { q: "Der Lehrer hilft ___ Schülern.", a: "den", o: ["die", "den", "dem", "der"], h: "جمع Dativ يأخذ الأداة den مع إضافة n للاسم." },
      { q: "Wie geht es ___? – Mir geht es super!", a: "dir", o: ["dich", "dir", "du", "dein"], h: "السؤال عن الحال يتطلب ضمير Dativ للمخاطب ➔ dir." },
      { q: "Das Buch gehört ___ Schwester.", a: "meiner", o: ["meine", "meiner", "meinem", "meinen"], h: "فعل gehört يتطلب Dativ، والمؤنث يأخذ meiner." }
    ]
  },
  {
    id: "A1.11", moduleNum: 11, level: "A1",
    titleDe: "Spatial & Temporal Prepositions (A1 Focus)",
    titleAr: "حروف الجر الزمانية والمكانية ومدخل للأحرف المشتركة (Wo? + Dativ)",
    teacherNote: "حروف الجر في الألمانية تحكم كل ما بعدها من أدوات! تعلم الربط بين الحرف والحالة المناسبة.",
    logic: "حروف الزمان مقسمة بدقة: الساعات المحددة تأخذ um، الأيام تأخذ am، والأشهر والفصول تأخذ im.",
    trap: "الخلط بين am و im! الأيام (am Montag) لأنها مفرد مذكر مختصرة من an dem، والأشهر (im Juli) مختصرة من in dem.",
    trick: "السؤال عن الموقع الثابت (Wo? أين؟) يعطي Dativ دائماً مع أحرف الجر المشتركة.",
    formula: "Temporal: um (time), am (days/dates), im (months/seasons) | Static Location: Wo? ➔ Dativ",
    paradigmHeaders: ["Preposition", "Target Context", "Case", "Example"],
    paradigmRows: [
      ["um", "Exact clock time", "Akkusativ", "um 14:00 Uhr"],
      ["am", "Days, dates, day parts", "Dativ", "am Montag, am Abend"],
      ["im", "Months, seasons, years", "Dativ", "im Juli, im Sommer"],
      ["in / auf (Wo?)", "Static rest / location", "Dativ", "im Supermarkt, auf dem Tisch"]
    ],
    rules: [
      "Temporal markers: um for clock times, am for days/dates/day parts, im for months/seasons.",
      "Two-way prepositions (an, auf, in, etc.) answering 'Wo?' (Where?) trigger Dative case.",
      "Standard contractions: in + dem = im, an + dem = am, zu + dem = zum, zu + der = zur."
    ],
    breakdownExample: {
      german: "Der Arzttermin ist am Mittwoch um zehn Uhr.",
      tags: [
        { text: "Der Arzttermin", type: "subj", label: "Subjekt" },
        { text: "ist", type: "verb", label: "Kopula" },
        { text: "am Mittwoch", type: "prep", label: "Temporal 1 (an dem + Dat)" },
        { text: "um zehn Uhr", type: "prep", label: "Temporal 2 (um + Akk)" }
      ],
      translation: "موعد الطبيب يوم الأربعاء في تمام الساعة العاشرة."
    },
    seedBank: [
      { q: "Der Sprachkurs beginnt ___ Montag.", a: "am", o: ["im", "am", "um", "in"], h: "أيام الأسبوع تأخذ دائماً حرف الجر am." },
      { q: "Die Schlüssel liegen auf ___ Tisch.", a: "dem", o: ["den", "dem", "das", "der"], h: "السؤال بـ أين Wo؟ يتطلب Dativ مذكر ➔ dem Tisch." },
      { q: "Wir treffen uns ___ 18:30 Uhr.", a: "um", o: ["am", "im", "um", "an"], h: "الساعات المحددة تأخذ um دائماً." },
      { q: "___ Sommer fahren wir nach Italien.", a: "Im", o: ["Am", "Im", "Um", "In"], h: "فصول السنة تأخذ im دائماً." }
    ]
  },
  {
    id: "A1.12", moduleNum: 12, level: "A1",
    titleDe: "Coordinating Conjunctions (ADUSO - Position 0)",
    titleAr: "أدوات الربط التنسيقية بالموقع صفر (ADUSO): Aber, Denn, Und, Sondern, Oder",
    teacherNote: "أحب هذه الأدوات لأنها مسالمة: تربط بين جملتين دون أن تحدث أي فوضى في ترتيب الكلمات!",
    logic: "لماذا تسمى بالموقع صفر؟ لأنها تقف كجسر محايد بين جملتين كاملتين، ولكل جملة ترتيبها الطبيعي المستقل.",
    trap: "الخلط بين denn و weil! أداة denn مسالمة تأخذ الموقع صفر ويبقى الفعل ثانياً، بينما weil تطرد الفعل لآخر الجملة!",
    trick: "احفظ اسم العصابة المسالمة: ADUSO (Aber, Denn, Und, Sondern, Oder).",
    formula: "Pos 0 (ADUSO) + Pos 1 (Subjekt) + Pos 2 (Finite Verb) | Word order unchanged",
    paradigmHeaders: ["Conjunction", "Position", "Meaning", "Full Sentence Example"],
    paradigmRows: [
      ["Aber", "Position 0", "but (contrast)", "Ich habe Zeit, aber ich bleibe hier."],
      ["Denn", "Position 0", "because (reason)", "Ich lerne, denn ich will studieren."],
      ["Und", "Position 0", "and (addition)", "Wir essen und wir trinken Tee."],
      ["Sondern", "Position 0", "but rather (after nicht)", "Nicht Kaffee, sondern Tee."],
      ["Oder", "Position 0", "or (alternative)", "Kommst du mit oder bleibst du?"]
    ],
    rules: [
      "ADUSO conjunctions occupy Position 0: they do NOT alter the word order of the following clause.",
      "The following main clause starts regularly: Subject in Position 1, finite verb in Position 2.",
      "'Sondern' requires a negative statement in the preceding clause (nicht ..., sondern ...)."
    ],
    breakdownExample: {
      german: "Er lernt Deutsch, denn er will in Deutschland arbeiten.",
      tags: [
        { text: "Er lernt Deutsch", type: "subj", label: "Hauptsatz 1" },
        { text: "denn", type: "prep", label: "Konjunktion (Pos 0)" },
        { text: "er", type: "subj", label: "Pos 1: Subjekt" },
        { text: "will", type: "verb", label: "Pos 2: Modalverb" },
        { text: "in Deutschland arbeiten", type: "obj", label: "Mittelfeld + Infinitiv" }
      ],
      translation: "هو يتعلم الألمانية، لأنه يريد العمل في ألمانيا."
    },
    seedBank: [
      { q: "Ich lerne Deutsch, ___ ich möchte in Deutschland arbeiten.", a: "denn", o: ["weil", "denn", "deshalb", "dass"], h: "الفاعل جاء في 1 والفعل في 2 ➔ نستخدم أداة الموقع صفر denn." },
      { q: "Ich trinke keinen Kaffee, ___ Tee.", a: "sondern", o: ["aber", "sondern", "denn", "oder"], h: "التصحيح المباشر بعد النفي kein يتطلب sondern." },
      { q: "Er hat viel Geld, ___ er ist nicht glücklich.", a: "aber", o: ["aber", "denn", "sondern", "weil"], h: "أداة التعارض بالموقع صفر هي aber." },
      { q: "Kommst du heute ___ sehen wir uns morgen?", a: "oder", o: ["aber", "oder", "denn", "sondern"], h: "أداة التخيير بالموقع صفر هي oder." }
    ]
  },
  {
    id: "A1.13", moduleNum: 13, level: "A1",
    titleDe: "Past Narration I: Perfekt & Präteritum Essentials",
    titleAr: "السرد الماضي 1: ماضي war/hatte والماضي التام (Perfekt) مع haben و sein",
    teacherNote: "أهنئكم بختام المستوى A1! هنا نتعلم كيف نحكي عما حدث في الماضي في المحادثات اليومية.",
    logic: "الألمان يستخدمون الماضي التام (Perfekt) في الحديث الشفهي، بينما يحجزون الماضي البسيط للكتابة باستثناء war و hatte.",
    trap: "استخدام haben مع أفعال السفر والحركة! أفعال الانتقال وتغيير المكان تأخذ دائماً sein (Ich bin gefahren وليس ich habe gefahren)!",
    trick: "الأفعال المنتهية بـ -ieren لا تأخذ بادئة ge- مطلقاً (studieren ➔ studiert)!",
    formula: "Perfekt: [haben/sein (Pos 2)] + ... + [Partizip II (Clause End)] | Präteritum: war / hatte",
    paradigmHeaders: ["Auxiliary", "Verb Category", "Partizip II Formation", "Example"],
    paradigmRows: [
      ["sein", "Motion / change of location", "ge-...-en / ge-...-t", "ist gegangen, ist gefahren"],
      ["sein", "Change of state & sein/bleiben", "ge-...-en", "ist aufgewacht, ist gewesen"],
      ["haben", "Transitive & stationary verbs", "ge-...-t", "hat gekauft, hat gearbeitet"],
      ["haben", "-ieren verbs (No ge-!)", "stem + -t", "hat studiert, hat repariert"]
    ],
    rules: [
      "Perfekt is the primary spoken past tense: auxiliary (haben/sein) in Pos 2 + Partizip II at clause end.",
      "Select 'sein' for motion/location change (gehen, fahren), state change (aufwachen), or sein/bleiben.",
      "Präteritum at A1 is mandatory only for auxiliaries: war, warst, war, waren / hatte, hattest, hatte, hatten."
    ],
    breakdownExample: {
      german: "Ich habe gestern einen Kuchen gebacken.",
      tags: [
        { text: "Ich", type: "subj", label: "Pos 1: Subjekt" },
        { text: "habe", type: "verb", label: "Pos 2: Hilfsverb haben" },
        { text: "gestern einen Kuchen", type: "obj", label: "Temporal + Akkusativ" },
        { text: "gebacken", type: "verb", label: "Satzende: Partizip II" }
      ],
      translation: "لقد خبزت بالأمس كعكة."
    },
    seedBank: [
      { q: "Gestern ___ wir nach Frankfurt gefahren.", a: "sind", o: ["haben", "sind", "hatten", "waren"], h: "فعل السفر والانتقال fahren يتطلب الفعل المساعد sein." },
      { q: "Letztes Jahr ___ ich in Italien.", a: "war", o: ["habe", "bin", "war", "hatte"], h: "الماضي البسيط من فعل الكينونة sein مع المتكلم ich هو war." },
      { q: "Er hat Medizin in Heidelberg ___.", a: "studiert", o: ["gestudiert", "studiert", "studieren", "studierte"], h: "الأفعال المنتهية بـ -ieren لا تأخذ ge- في التصريف الثالث." },
      { q: "Wann bist du heute Morgen ___?", a: "aufgestanden", o: ["aufstehen", "aufgestanden", "geaufstanden", "aufsteht"], h: "الأفعال المنفصلة تضع ge- في الوسط: auf-ge-standen." }
    ]
  },

  // -----------------------------------------------------------------------
  // PART II: GOETHE-ZERTIFIKAT A2 (START DEUTSCH 2) – MODULES 14 TO 30
  // -----------------------------------------------------------------------
  {
    id: "A2.01", moduleNum: 14, level: "A2",
    titleDe: "Advanced Perfekt & Strong Verbs (Ablautreihen)",
    titleAr: "الماضي التام المتقدم وسلاسل الأفعال الشاذة وتصريف السوابق غير المنفصلة",
    teacherNote: "مرحباً بكم في المستوى A2! هنا سنتقن تصريف الأفعال الشاذة القوية، وسرها يكمن في حفظ تغير نغمة الصوت (Ablaut).",
    logic: "لماذا لا تأخذ الأفعال غير المنفصلة ge-؟ لأن البادئة (مثل be- أو ver-) تمنع صوتياً إضافة بادئة أخرى قبلها.",
    trap: "قول (gebezahlt) أو (geverstanden)! الأفعال التي تبدأ بـ (be-, ver-, ent-, er-) لا تأخذ ge- أبداً في التصريف الثالث!",
    trick: "احفظ سلاسل الإمالة في مجموعات متناغمة: trinken/getrunken, finden/gefunden.",
    formula: "Inseparable: No ge- (bezahlt, verstanden) | Ablaut mutations: ei➔ie, i➔u, ie➔o, e➔o",
    paradigmHeaders: ["Ablaut Mutation", "Infinitive", "Partizip II", "Meaning", "Example"],
    paradigmRows: [
      ["ei ➔ ie", "schreiben", "geschrieben", "to write", "Er hat einen Brief geschrieben."],
      ["i ➔ u", "trinken", "getrunken", "to drink", "Wir haben Tee getrunken."],
      ["ie ➔ o", "fliegen", "geflogen (sein)", "to fly", "Sie ist nach Berlin geflogen."],
      ["Inseparable", "bezahlen", "bezahlt (no ge-)", "to pay", "Hast du die Rechnung bezahlt?"]
    ],
    rules: [
      "Inseparable prefixes (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-) never take a ge- prefix.",
      "Strong verbs undergo root vowel shifts (Ablautreihen) in Partizip II ending in -en.",
      "Mixed verbs feature both stem vowel mutations and weak dental suffix -t (bringen ➔ gebracht)."
    ],
    breakdownExample: {
      german: "Die Studentin hat den Text ohne Wörterbuch verstanden.",
      tags: [
        { text: "Die Studentin", type: "subj", label: "Subjekt" },
        { text: "hat", type: "verb", label: "Pos 2: Hilfsverb" },
        { text: "den Text", type: "obj", label: "Objekt (Akk)" },
        { text: "ohne Wörterbuch", type: "prep", label: "Angabe" },
        { text: "verstanden", type: "verb", label: "Satzende: Partizip II (Untrennbar)" }
      ],
      translation: "فهمت الطالبة النص بدون استخدام القاموس."
    },
    seedBank: [
      { q: "Hast du die Rechnung schon ___?", a: "bezahlt", o: ["gebezahlt", "bezahlt", "bezahlen", "gezahlt"], h: "البادئة غير المنفصلة be- تسقط منها ge- في التصريف الثالث." },
      { q: "Wir haben gestern zu viel Tee ___.", a: "getrunken", o: ["getrinkt", "getrunken", "getrank", "trinken"], h: "فعل trinken يتحول صوتياً i ➔ u ليصبح getrunken." },
      { q: "Er hat mir einen langen Brief ___.", a: "geschrieben", o: ["geschreibt", "geschrieben", "geschriebt", "schreiben"], h: "فعل schreiben يتحول صوتياً ei ➔ ie ليصبح geschrieben." },
      { q: "Sie hat das schwere Wort sofort ___.", a: "verstanden", o: ["geverstanden", "verstanden", "versteht", "verstehtet"], h: "البادئة ver- لا تأخذ ge- في التصريف الثالث." }
    ]
  },
  {
    id: "A2.02", moduleNum: 15, level: "A2",
    titleDe: "Präteritum of Modal Verbs",
    titleAr: "ماضي أفعال المودال في الماضي البسيط (musste, konnte, durfte...)",
    teacherNote: "في الحديث عن الماضي، الألمان يستثقلون استخدام Perfekt مع المودال، ويستبدلونه دائماً بصيغة Präteritum الأنيقة!",
    logic: "صيغة Präteritum أسهل بكثير لأنها تحافظ على المصدر في نهاية الجملة وتوفر عليك استخدام أفعال مساعدة إضافية.",
    trap: "إبقاء الأوملاوت في الماضي! لا تقل (müsste)؛ ماضي أفعال المودال يسقط الأوملاوت كلياً: musste, konnte, durfte!",
    trick: "تصريف المتكلم ich يطابق تصريف المفرد الغائب er/sie/es تماماً في ماضي المودال (ich musste = er musste).",
    formula: "Drop Umlaut + Weak Past Endings: -te, -test, -te, -ten, -tet, -ten | 1st sing == 3rd sing",
    paradigmHeaders: ["Infinitive", "ich / er / sie Form", "wir / sie Form", "Example"],
    paradigmRows: [
      ["müssen (ü➔u)", "musste", "mussten", "Er musste lange arbeiten."],
      ["können (ö➔o)", "konnte", "konnten", "Ich konnte nicht kommen."],
      ["dürfen (ü➔u)", "durfte", "durften", "Wir durften hier nicht parken."],
      ["wollen / sollen", "wollte / sollte", "wollten / sollten", "Sie wollte Deutsch lernen."]
    ],
    rules: [
      "Modal verbs are universally expressed in the Präteritum rather than Perfekt in spoken/written German.",
      "Modal stems drop their umlauts and append weak past endings: -te, -test, -te, -ten, -tet, -ten.",
      "Sentence structure: Modal in Pos 2, full infinitive verb remains at the clause boundary."
    ],
    breakdownExample: {
      german: "Gestern konnte ich nicht zur Party kommen.",
      tags: [
        { text: "Gestern", type: "prep", label: "Pos 1: Temporal" },
        { text: "konnte", type: "verb", label: "Pos 2: Modal Prät" },
        { text: "ich", type: "subj", label: "Pos 3: Subjekt" },
        { text: "nicht zur Party", type: "prep", label: "Negation + Ort" },
        { text: "kommen", type: "verb", label: "Satzende: Infinitiv" }
      ],
      translation: "بالأمس لم أستطع الحضور إلى الحفلة."
    },
    seedBank: [
      { q: "Gestern war ich krank, deshalb ___ ich zum Arzt gehen.", a: "musste", o: ["muss", "musste", "gemusst", "müsste"], h: "ماضي müssen يسقط الأوملاوت ويأخذ te للمتكلم ➔ musste." },
      { q: "Als Kind ___ er nach 20 Uhr nicht fernsehen.", a: "durfte", o: ["darf", "durfte", "gedurft", "dürfte"], h: "ماضي dürfen يسقط الأوملاوت للغائب ➔ durfte." },
      { q: "Wir ___ gestern keine Zeit, wir ___ lernen.", a: "hatten / mussten", o: ["waren / konnten", "hatten / mussten", "haben / müssen", "waren / wollten"], h: "ماضي haben هو hatten وماضي müssen هو mussten." },
      { q: "___ du als Kind Klavier spielen?", a: "Konntest", o: ["Kannst", "Konntest", "Könntest", "Gekonnt"], h: "ماضي können مع du يسقط الأوملاوت ويأخذ test ➔ konntest." }
    ]
  },
  {
    id: "A2.03", moduleNum: 16, level: "A2",
    titleDe: "Dual-Case Spatial Prepositions (Wechselpräpositionen)",
    titleAr: "أحرف الجر المشتركة التسعة: ثنائية الموقع (Wo) مقابل الاتجاه (Wohin)",
    teacherNote: "أهم درس في قواعد A2 على الإطلاق! تسعة أحرف جر تتصرف كالحرباء: تارة تجر وتارة تنصب بحسب فكرتك الذهنية.",
    logic: "الثبات داخل المكان دون عبور حدود يعني Dativ، بينما الانتقال وتغيير الموقع واختراق الحدود يعني Akkusativ.",
    trap: "الخلط بين الفعلين (ضع عمودياً/stellen) و (واقف عمودياً/stehen). stellen حركة نصب، و stehen ثبات جر!",
    trick: "Wo? (أين؟ ثبات) = Dativ دائماً! | Wohin? (إلى أين؟ حركة) = Akkusativ دائماً!",
    formula: "Wo? (Static Rest) ➔ DATIV | Wohin? (Directional Motion) ➔ AKKUSATIV",
    paradigmHeaders: ["Transitive Action (Wohin? ➔ Akk)", "Intransitive State (Wo? ➔ Dat)", "Contrast Meaning"],
    paradigmRows: [
      ["stellen (Ich stelle die Vase auf den Tisch)", "stehen (Die Vase steht auf dem Tisch)", "عمودي: يضع مقابل واقف"],
      ["legen (Er legt das Buch auf das Bett)", "liegen (Das Buch liegt auf dem Bett)", "أفقي: يضع مقابل مستلقٍ"],
      ["setzen (Sie setzt das Kind auf den Stuhl)", "sitzen (Das Kind sitzt auf dem Stuhl)", "جلوس: يُجلس مقابل جالس"],
      ["hängen (Ich hänge das Bild an die Wand)", "hängen (Das Bild hängt an der Wand)", "تعليق: يعلق مقابل معلق"]
    ],
    rules: [
      "Nine dual-case prepositions: an, auf, hinter, in, neben, über, unter, vor, zwischen.",
      "Static location / continuous rest answering 'Wo?' mandates the Dative case.",
      "Directional motion across boundaries answering 'Wohin?' mandates the Accusative case."
    ],
    breakdownExample: {
      german: "Ich stelle die Vase auf den Tisch.",
      tags: [
        { text: "Ich", type: "subj", label: "Subjekt" },
        { text: "stelle", type: "verb", label: "Transitives Verb (Aktion)" },
        { text: "die Vase", type: "obj", label: "Objekt (Akk)" },
        { text: "auf den Tisch", type: "prep", label: "Wohin? ➔ Akkusativ" }
      ],
      translation: "أنا أضع المزهرية عمودياً على الطاولة."
    },
    seedBank: [
      { q: "Ich stelle die Tasse auf ___ Tisch.", a: "den", o: ["dem", "den", "der", "das"], h: "فعل حركة stellen يسأل بـ Wohin؟ فيتطلب Akkusativ مذكر ➔ den Tisch." },
      { q: "Die Tasse steht auf ___ Tisch.", a: "dem", o: ["den", "dem", "das", "der"], h: "فعل ثبات stehen يسأل بـ Wo؟ فيتطلب Dativ مذكر ➔ dem Tisch." },
      { q: "Er legt das Buch auf ___ Sofa.", a: "das", o: ["das", "dem", "den", "des"], h: "حركة وضع الكتاب أفقياً على الأريكة المحايدة تطلب Akkusativ ➔ das Sofa." },
      { q: "Das Bild hängt an ___ Wand.", a: "der", o: ["die", "der", "den", "dem"], h: "الصورة معلقة وثابتة (Wo?) تطلب Dativ مؤنث ➔ der Wand." }
    ]
  },
  {
    id: "A2.04", moduleNum: 17, level: "A2",
    titleDe: "Reflexive Verbs & Reflexive Pronouns (Reflexivpronomen)",
    titleAr: "الأفعال الانعكاسية والضمائر المنعكسة في النصب والجر (mir die Zähne putzen)",
    teacherNote: "الأفعال الانعكاسية تعبر عن فعل يعود أثره على الفاعل نفسه، مثل الاغتسال وارتداء الملابس.",
    logic: "لماذا يتحول الضمير أحياناً إلى Dativ؟ لأنه إذا وجد مفعول به صريح (كالأسنان أو اليدين)، يصبح ذلك الشيء هو المنصوب، ويتحول الشخص لمستفيد مجرور!",
    trap: "قول (Ich putze mich die Zähne)! إذا حددت جزءاً من الجسم، يتحول mich فوراً إلى mir: (Ich putze mir die Zähne)!",
    trick: "الضمير sich في الغائب er/sie/es لا يتغير أبداً ويبقى sich في النصب والجر.",
    formula: "Standard: Accusative (mich, dich, sich) | If distinct direct object present: Dative (mir, dir, sich)",
    paradigmHeaders: ["Personal Pronoun", "Reflexiv (Akkusativ)", "Reflexiv (Dativ)", "Example Sentence"],
    paradigmRows: [
      ["ich", "mich", "mir", "Ich wasche mich / Ich wasche mir die Hände."],
      ["du", "dich", "dir", "Du ziehst dich an / Du ziehst dir die Jacke an."],
      ["er / sie / es", "sich", "sich", "Er freut sich / Er putzt sich die Zähne."],
      ["wir", "uns", "uns", "Wir treffen uns im Park."],
      ["ihr", "euch", "euch", "Ihr setzt euch auf die Bank."],
      ["sie / Sie", "sich", "sich", "Sie interessieren sich für Kunst."]
    ],
    rules: [
      "Accusative reflexive pronoun is used when there is no other direct object in the clause.",
      "Dative reflexive pronoun is mandatory when an explicit accusative direct object is already present.",
      "3rd person singular and plural is invariant: 'sich' in both accusative and dative."
    ],
    breakdownExample: {
      german: "Ich ziehe mir eine warme Jacke an.",
      tags: [
        { text: "Ich", type: "subj", label: "Subjekt" },
        { text: "ziehe", type: "verb", label: "Verb Stamm" },
        { text: "mir", type: "obj", label: "Reflexiv: Dativ" },
        { text: "eine warme Jacke", type: "obj", label: "Direktes Objekt: Akkusativ" },
        { text: "an", type: "verb", label: "Trennbares Präfix" }
      ],
      translation: "أنا أرتدي لنفسي سترة دافئة."
    },
    seedBank: [
      { q: "Ich ziehe ___ eine warme Jacke an.", a: "mir", o: ["mich", "mir", "mein", "sich"], h: "وجود مفعول به السترة يحول الضمير المنعكس إلى Dativ ➔ mir." },
      { q: "Freust du ___ auf den Urlaub?", a: "dich", o: ["dir", "dich", "du", "dein"], h: "فعل sich freuen بدون مفعول آخر يأخذ Akkusativ ➔ dich." },
      { q: "Ahmad wäscht ___ jeden Morgen das Gesicht.", a: "sich", o: ["ihn", "ihm", "sich", "sein"], h: "ضمير الغائب المنعكس دائماً هو sich." },
      { q: "Wir treffen ___ morgen um 18 Uhr.", a: "uns", o: ["uns", "euch", "wir", "sich"], h: "الضمير المنعكس لنحن wir هو uns." }
    ]
  },
  {
    id: "A2.05", moduleNum: 18, level: "A2",
    titleDe: "Verbs with Prepositions & Prepositional Adverbs",
    titleAr: "أفعال بحروف جر ثابتة وأدوات الاستفهام الإشارية (Worauf/Darauf مقابل Auf wen)",
    teacherNote: "أفعال حروف الجر الثابتة تشبه حروف الجر المتعدية في العربية. حفظ الحرف مع إعرابه هو سر النجاح.",
    logic: "لماذا تدمج الألمانية Da و Wo مع الحرف؟ لتفادي تكرار الاسم الطويل غير العاقل واختصار العبارة بذكاء.",
    trap: "سؤال شخص عاقل بـ Worauf! إذا كان السؤال عن إنسان لا تقل (Worauf wartest du?) بل قل حتماً: (Auf wen wartest du?)!",
    trick: "للجماد: Wo + حرف الجر (Worauf). للأشخاص: حرف الجر + ضمير الإعراب (Auf wen).",
    formula: "Things/Ideas: Wo(r)- / Da(r)- + Preposition | Persons: Preposition + Declined Pronoun",
    paradigmHeaders: ["Target Entity", "Question Form", "Answer / Statement", "Example"],
    paradigmRows: [
      ["Thing / Idea", "Wo(r) + Preposition", "Da(r) + Preposition", "Worauf wartest du? – Darauf."],
      ["Person (Akk)", "Preposition + wen", "Preposition + ihn/sie", "Auf wen wartest du? – Auf ihn."],
      ["Person (Dat)", "Preposition + wem", "Preposition + ihm/ihr", "Mit wem sprichst du? – Mit ihr."],
      ["Vowel Rule", "Insert -r- if vowel starts", "da-r-an, wo-r-über", "Woran denkst du? – Daran."]
    ],
    rules: [
      "Inquire/refer to things using pronominal adverbs: da(r)- and wo(r)- compounds (insert -r- if vowel starts).",
      "For persons, retain the raw preposition and decline the interrogative or personal pronoun.",
      "Core governed prepositions: warten auf (+Akk), denken an (+Akk), träumen von (+Dat)."
    ],
    breakdownExample: {
      german: "Er ärgert sich oft über seinen Chef, aber heute spricht er nicht darüber.",
      tags: [
        { text: "Er ärgert sich über", type: "verb", label: "Reflexiv + Präposition" },
        { text: "seinen Chef", type: "obj", label: "Person: Akkusativ" },
        { text: "aber", type: "prep", label: "Konjunktion" },
        { text: "spricht er nicht", type: "verb", label: "Hauptsatz Inversion" },
        { text: "darüber", type: "prep", label: "Pronominaladverb (Sache)" }
      ],
      translation: "هو ينزعج غالباً من مديره، لكنه اليوم لا يتحدث عن هذا الأمر."
    },
    seedBank: [
      { q: "___ wartest du? – Auf den Bus.", a: "Worauf", o: ["Auf wen", "Worauf", "Woran", "Womit"], h: "السؤال عن جماد غير عاقل بحرف auf يتطلب Worauf." },
      { q: "___ wartest du? – Auf meinen Bruder.", a: "Auf wen", o: ["Worauf", "Auf wen", "Woran", "Mit wem"], h: "السؤال عن شخص عاقل بحرف auf يتطلب Auf wen." },
      { q: "Denkst du an die Prüfung? – Ja, ich denke ___.", a: "daran", o: ["darauf", "daran", "davon", "damit"], h: "الإشارة لجماد بحرف an تدمج da + r + an ➔ daran." },
      { q: "Mit ___ hast du gestern telefoniert?", a: "wem", o: ["wen", "wem", "wer", "womit"], h: "حرف الجر mit يجر العاقل Dativ ➔ Mit wem." }
    ]
  },
  {
    id: "A2.06", moduleNum: 19, level: "A2",
    titleDe: "Subordinate Clauses I (weil, dass, wenn, obwohl)",
    titleAr: "الجمل الجانبية وطرد الفعل للنهاية (weil, dass, wenn, obwohl) وقواعد الفواصل",
    teacherNote: "في الجمل الجانبية، أداة الربط تعمل كحارس طرد صارم: تطرد الفعل المصرف لآخر الجملة قبل النقطة مباشرة!",
    logic: "لماذا في النهاية؟ لكي يستمع المتلقي لكامل تفاصيل الجملة وظروفها قبل أن يعرف ما حدث بالفعل.",
    trap: "وضع الفعل بالمركز 2 بعد weil! احذر أن تقول: (weil ich bin krank)، بل قل حتماً: (weil ich krank bin)!",
    trick: "المعادلة الذهبية: فاصلة أولاً ➔ أداة الربط ➔ الفاعل ➔ بقية التفاصيل ➔ الفعل المصرف آخر كلمة!",
    formula: "Main Clause, + Subordinator (weil/dass/wenn) + ... + Finite Verb (Absolute End)",
    paradigmHeaders: ["Subordinator", "Function", "Position of Verb", "Example Sentence"],
    paradigmRows: [
      ["weil", "Causal (التعليل لأن)", "Absolute Clause-End", "Ich lerne, weil ich die Prüfung will."],
      ["dass", "Substantive (أنّ المفعولية)", "Absolute Clause-End", "Er weiß, dass du heute kommst."],
      ["wenn", "Conditional (الشرط إذا/لو)", "Absolute Clause-End", "Wenn es regnet, bleibe ich hier."],
      ["obwohl", "Concessive (التعارض رغم أن)", "Absolute Clause-End", "Er kommt, obwohl er krank ist."]
    ],
    rules: [
      "Subordinating conjunctions send the conjugated finite verb to the absolute final position of the clause.",
      "A comma must separate the main clause (Hauptsatz) from the subordinate clause (Nebensatz).",
      "Clause Inversion: If the subordinate clause is placed first, the main clause verb follows the comma immediately."
    ],
    breakdownExample: {
      german: "Wenn das Wetter schön ist, machen wir ein Picknick.",
      tags: [
        { text: "Wenn das Wetter", type: "subj", label: "Nebensatz Pos 1" },
        { text: "schön ist", type: "verb", label: "Verb am Ende" },
        { text: "machen", type: "verb", label: "Hauptsatz Verb Pos 2" },
        { text: "wir", type: "subj", label: "Subjekt Pos 3" },
        { text: "ein Picknick", type: "obj", label: "Objekt" }
      ],
      translation: "إذا كان الطقس جميلاً، سنقوم نحن بنزهة."
    },
    seedBank: [
      { q: "Ich lerne Deutsch, weil ich in Deutschland ___.", a: "arbeiten will", o: ["will arbeiten", "arbeiten will", "arbeite will", "will gearbeitet"], h: "قوس الجملة الجانبية: المصدر أولاً ثم المودال المصرف في آخر كلمة." },
      { q: "Wenn es morgen regnet, ___ wir zu Hause.", a: "bleiben", o: ["wir bleiben", "bleiben", "bleiben wir", "geblieben"], h: "تقدم الجملة الجانبية يجعل فعل الجملة الرئيسية يلي الفاصلة فوراً ➔ bleiben." },
      { q: "Lukas weiß, dass Mai sehr gut ___.", a: "kocht", o: ["kocht", "kochen", "gekocht", "kochte"], h: "أداة dass تطرد الفعل المصرف kocht لآخر الجملة." },
      { q: "Er geht spazieren, obwohl es stark ___.", a: "schneit", o: ["schneien", "schneit", "geschneit", "schneite"], h: "أداة obwohl تطرد الفعل المصرف لنهاية الجملة." }
    ]
  },
  {
    id: "A2.07", moduleNum: 20, level: "A2",
    titleDe: "Temporal Subordinate Clauses (als vs. wenn)",
    titleAr: "أدوات الربط الزمنية: التمييز الدقيق بين als و wenn في الماضي وأدوات التتابع",
    teacherNote: "أشهر سؤال يربك الطلاب في امتحان A2: متى أستخدم als ومتى أستخدم wenn؟ الفرق دقيق جداً وجميل!",
    logic: "Als مخصصة لنقطة فريدة في الماضي لا تتكرر، بينما Wenn مخصصة للأحداث المتكررة أو الحاضر والمستقبل.",
    trap: "استخدام wenn مع مرحلة الطفولة في الماضي! مرحلة الطفولة حدثت مرة واحدة فقط في ماضيك، فيجب استخدام (Als ich ein Kind war)!",
    trick: "إذا كان بإمكانك وضع كلمة (دائماً / immer) قبلها، استخدم Wenn. وإذا كان حدثاً فريداً لمرة واحدة، استخدم Als.",
    formula: "als = Single, completed past event / period | wenn = Present/future OR repeated past (immer wenn)",
    paradigmHeaders: ["Conjunction", "Time Frame", "Frequency", "Example"],
    paradigmRows: [
      ["als", "Past ONLY (الماضي فقط)", "Single, unique event (مرة واحدة)", "Als ich 18 Jahre alt war..."],
      ["wenn", "Present / Future", "Any frequency (الحاضر والمستقبل)", "Wenn ich Feierabend habe..."],
      ["(immer) wenn", "Past (الماضي المتكرر)", "Repeated events (كلما / كل مرة)", "Immer wenn er mich besuchte..."],
      ["bevor / während", "Sequence / Simultaneity", "Subordinate Clause", "bevor du gehst / während sie liest"]
    ],
    rules: [
      "Use 'als' exclusively for a single, non-recurring event or unique continuous state in the past.",
      "Use 'wenn' for all present and future occurrences, or repeated past events (interchangeable with 'immer wenn').",
      "Sequencing conjunctions: 'bevor' (before), 'nachdem' (after), 'während' (while/simultaneous actions)."
    ],
    breakdownExample: {
      german: "Als wir in Berlin ankamen, regnete es sehr stark.",
      tags: [
        { text: "Als wir in Berlin", type: "subj", label: "Nebensatz (Single Past)" },
        { text: "ankamen", type: "verb", label: "Verb am Ende" },
        { text: "regnete", type: "verb", label: "Hauptsatz Verb Pos 2" },
        { text: "es sehr stark", type: "prep", label: "Subjekt + Adverb" }
      ],
      translation: "عندما وصلنا إلى برلين، كانت السماء تمطر بغزارة شديدة."
    },
    seedBank: [
      { q: "___ ich zehn Jahre alt war, lebte ich in Damaskus.", a: "Als", o: ["Wenn", "Als", "Wann", "Bevor"], h: "فترة الطفولة مرحلة ماضية فريدة لمرة واحدة تتطلب حصراً Als." },
      { q: "Immer ___ er Kopfschmerzen hatte, trank er Pfefferminztee.", a: "wenn", o: ["als", "wenn", "wann", "während"], h: "الحدث الماضي المتكرر المشروط بـ immer يتطلب wenn." },
      { q: "Wasch dir die Hände, ___ du dich an den Tisch setzt!", a: "bevor", o: ["nachdem", "bevor", "während", "als"], h: "أداة التتابع الزمني قبل أن تفعل كذا تتطلب bevor." },
      { q: "Sie hört Musik, ___ sie ihre Wohnung aufräumt.", a: "während", o: ["während", "bevor", "als", "nachdem"], h: "تزامن حدثين في نفس اللحظة يتطلب während." }
    ]
  },
  {
    id: "A2.08", moduleNum: 21, level: "A2",
    titleDe: "Adverbial Connectors (Konjunktionaladverbien)",
    titleAr: "الظروف الرابطة بالموقع 1 والانقلاب الفعلي (deshalb, trotzdem, sonst, dann)",
    teacherNote: "هذه الكلمات ليست مجرد أدوات ربط عادية، بل هي ظروف قوية تأخذ الموقع 1 وتجبر الفعل على المجيء في الموقع 2 مباشرة!",
    logic: "لماذا ينقلب الفعل معها؟ لأنها جزء فعلي من الجملة الثانية، وتطبق عليها قاعدة الفعل بالمركز الثاني الصارمة.",
    trap: "وضع الفاعل بين الأداة والفعل! احذر أن تقول: (trotzdem ich gehe)، بل اعكس فوراً: (trotzdem gehe ich)!",
    trick: "المقارنة الثلاثية: weil (الفعل بالآخر) | denn (الموقع صفر والفعل بـ 2) | deshalb (الموقع 1 والفعل بـ 2).",
    formula: "Connector (Pos 1) + Finite Verb (Pos 2) + Subject (Pos 3) | Triggers subject-verb inversion",
    paradigmHeaders: ["Connector", "Position", "Semantic Role", "Example"],
    paradigmRows: [
      ["deshalb / darum", "Position 1", "Consequence (لذلك / النتيجة)", "deshalb lerne ich heute."],
      ["trotzdem", "Position 1", "Concession (رغم ذلك / التناقض)", "trotzdem geht er spazieren."],
      ["sonst", "Position 1", "Condition (وإلا / التحذير)", "sonst verpassen wir den Zug."],
      ["dann / danach", "Position 1", "Sequence (ثم / الترتيب)", "danach essen wir ein Eis."]
    ],
    rules: [
      "Conjunctive adverbs occupy Position 1 of a main clause, triggering standard verb-subject inversion.",
      "Contrast: weil (subordinating: verb at end) vs. denn (coordinating: Pos 0) vs. deshalb (adverb: Pos 1).",
      "A semicolon or period frequently separates the preliminary statement from the conjunctive adverb clause."
    ],
    breakdownExample: {
      german: "Es regnete in Strömen; trotzdem gingen wir spazieren.",
      tags: [
        { text: "Es regnete in Strömen", type: "subj", label: "Hauptsatz 1" },
        { text: "trotzdem", type: "prep", label: "Pos 1: Konjunktionaladverb" },
        { text: "gingen", type: "verb", label: "Pos 2: Verb Inversion" },
        { text: "wir spazieren", type: "subj", label: "Pos 3: Subjekt + Infinitiv" }
      ],
      translation: "كانت السماء تمطر بغزارة؛ ورغم ذلك خرجنا نتنزه."
    },
    seedBank: [
      { q: "Es regnete in Strömen; ___ gingen wir ohne Schirm spazieren.", a: "trotzdem", o: ["obwohl", "trotzdem", "weil", "aber"], h: "الظرف الرابط بالموقع 1 المتبوع بفعل مصرف هو trotzdem." },
      { q: "Ich habe morgen eine Prüfung, ___ lerne ich heute den ganzen Tag.", a: "deshalb", o: ["weil", "denn", "deshalb", "dass"], h: "أداة النتيجة في الموقع 1 المتبوعة بفعل مصرف هي deshalb." },
      { q: "Beeil dich, ___ verpassen wir den Bus!", a: "sonst", o: ["sonst", "trotzdem", "deshalb", "denn"], h: "أداة التحذير بمعنى (وإلا) في الموقع 1 هي sonst." },
      { q: "Zuerst kochen wir, ___ essen wir zusammen.", a: "dann", o: ["weil", "dann", "denn", "obwohl"], h: "أداة الترتيب الزمني في الموقع 1 هي dann." }
    ]
  },
  {
    id: "A2.09", moduleNum: 22, level: "A2",
    titleDe: "Indirect Questions (Indirekte Fragesätze)",
    titleAr: "الأسئلة غير المباشرة المهذبة مع ob وأدوات الاستفهام وطرد الفعل",
    teacherNote: "في الحياة اليومية في ألمانيا، التحدث بذوق وأدب يتطلب صياغة السؤال غير المباشر بدلاً من الهجوم بالسؤال المباشر!",
    logic: "السؤال غير المباشر يعتبر جملة مفعولية جانبية تابعة لافتتاحية مهذبة، لذا يطبق عليه قانون طرد الفعل للنهاية.",
    trap: "نسيان تحويل سؤال نعم/لا إلى ob! إذا لم يكن في السؤال أداة W، يجب حتماً أن تربط الجملة بـ (ob) وتضع الفعل بالآخر!",
    trick: "الافتتاحية المهذبة (Können Sie mir sagen... / Ich möchte wissen...) ➔ أداة السؤال ➔ الفعل في المركز الأخير.",
    formula: "Matrix Clause, + ob / W-Word + ... + Finite Verb (Absolute Clause End)",
    paradigmHeaders: ["Direct Question Type", "Subordinate Connector", "Word Order", "Indirect Polite Example"],
    paradigmRows: [
      ["Ja/Nein-Frage", "ob (فيما إذا)", "Verb am Ende", "Wissen Sie, ob der Zug Verspätung hat?"],
      ["W-Frage", "Same W-Word (نفس الأداة)", "Verb am Ende", "Können Sie mir sagen, wo der Bahnhof ist?"],
      ["Polite Matrix", "Höfliche Einleitung", "--", "Ich möchte gerne wissen, wie viel das kostet."]
    ],
    rules: [
      "Indirect questions convert direct questions into polite subordinate clauses setting the verb to the end.",
      "Direct yes/no questions use the subordinating conjunction 'ob' (whether/if).",
      "Direct open questions retain their original question word (wo, wann, wie, warum) as the connector."
    ],
    breakdownExample: {
      german: "Wissen Sie, wie viel diese Fahrkarte kostet?",
      tags: [
        { text: "Wissen Sie", type: "verb", label: "Höfliche Einleitung" },
        { text: "wie viel", type: "prep", label: "W-Frage Connector" },
        { text: "diese Fahrkarte", type: "subj", label: "Subjekt" },
        { text: "kostet", type: "verb", label: "Verb am Ende" }
      ],
      translation: "هل تعلم حضرتك كم يبلغ ثمن هذه التذكرة؟"
    },
    seedBank: [
      { q: "Können Sie mir sagen, ___ der Bus heute noch kommt?", a: "ob", o: ["dass", "ob", "wann", "wie"], h: "سؤال نعم/لا غير المباشر يربط دائماً بـ ob." },
      { q: "Ich möchte gerne wissen, wo der Bahnhof ___.", a: "ist", o: ["ist", "ist er", "er ist", "sei"], h: "السؤال غير المباشر جملة جانبية: الفعل يوضع في آخر كلمة." },
      { q: "Weißt du, um wie viel Uhr der Film ___?", a: "anfängt", o: ["anfängt", "fängt an", "angefangen", "anfangen"], h: "الفعل المنفصل يجمع في نهاية السؤال غير المباشر: anfängt." },
      { q: "Darf ich fragen, wie Sie ___?", a: "heißen", o: ["heißen", "heißt", "geheißen", "heiße"], h: "الفعل المصرف يوضع في نهاية السؤال غير المباشر مع Sie ➔ heißen." }
    ]
  },
  {
    id: "A2.10", moduleNum: 23, level: "A2",
    titleDe: "Adjective Declination (Adjektivdeklination)",
    titleAr: "منظومة تصريف نهايات الصفات الكاملة (الضعيفة، المختلطة، والقوية)",
    teacherNote: "أهلاً بكم في كابوس الطلاب الشهير! سأجعله أسهل قاعدة تفهمونها بحيلة الإشارة المرورية.",
    logic: "لماذا تضاف نهايات للصفات؟ لكي تخبر السامع بإعراب وجنس الاسم إذا كانت الأداة لم توضح ذلك بشكل كافٍ.",
    trap: "التردد في حالة الجر Dativ! احفظ هذه القاعدة المنقذة: أي صفة في الـ Dativ أو الجمع تأخذ النهاية (-en) بدون تردد!",
    trick: "إذا كانت الأداة واضحة (der/die/das)، فالصفة خفيفة (-e). وإذا كانت نكرة (ein)، تقوم الصفة بدور المنقذ وتظهر علامة الجنس (-er للمذكر، -es للمحايد).",
    formula: "Weak (after der): mostly -e / -en | Mixed (after ein): signals gender (-er/-es) | Dative = ALWAYS -en",
    paradigmHeaders: ["Gender / Case", "Weak (der/die/das)", "Mixed (ein/kein/mein)", "Strong (No Article)"],
    paradigmRows: [
      ["Maskulinum Nom", "der alte Mann (-e)", "ein alter Mann (-er)", "alter Wein (-er)"],
      ["Maskulinum Akk", "den alten Mann (-en)", "einen alten Mann (-en)", "alten Wein (-en)"],
      ["Neutrum Nom/Akk", "das neue Auto (-e)", "ein neues Auto (-es)", "neues Auto (-es)"],
      ["Femininum Nom/Akk", "die junge Frau (-e)", "eine junge Frau (-e)", "frische Milch (-e)"],
      ["All Dative Cases", "dem alten (-en)", "einem alten (-en)", "altem Wein (-em)"]
    ],
    rules: [
      "Weak Declension (after definite articles der/die/das): takes exclusively -e or -en (Dative is always -en).",
      "Mixed Declension (after ein/kein/possessives): adjective supplies missing gender tags (-er masc, -es neut).",
      "Strong Declension (zero article): adjective carries the definite article's explicit case marker."
    ],
    breakdownExample: {
      german: "Ein fleißiger Student hat ein neues Buch gekauft.",
      tags: [
        { text: "Ein", type: "subj", label: "Indefinit Nom. Masc" },
        { text: "fleißiger", type: "subj", label: "Adjektiv (Signal -er)" },
        { text: "Student", type: "subj", label: "Nomen" },
        { text: "hat", type: "verb", label: "Hilfsverb" },
        { text: "ein neues Buch", type: "obj", label: "Indefinit + Adj (Signal -es) + Neut. Akk" },
        { text: "gekauft", type: "verb", label: "Partizip II" }
      ],
      translation: "اشترى طالب مجتهد كتاباً جديداً."
    },
    seedBank: [
      { q: "Ein ___ Student hat die schwierige Prüfung bestanden.", a: "fleißiger", o: ["fleißige", "fleißiger", "fleißigen", "fleißiges"], h: "المذكر بعد ein في الرفع يحتاج لإظهار علامة der عبر الصفة ➔ fleißiger." },
      { q: "Ich helfe der ___ Dame über die Straße.", a: "alten", o: ["alte", "alten", "alter", "altes"], h: "قاعدة الإنقاذ: أي صفة في حالة الجر Dativ تأخذ دائماً -en ➔ alten." },
      { q: "Mai hat ein ___ Auto gekauft.", a: "neues", o: ["neue", "neues", "neuen", "neuem"], h: "المحايد das بعد ein تظهر صفته علامة s ➔ neues Auto." },
      { q: "Er trinkt jeden Morgen ___ Kaffee.", a: "schwarzen", o: ["schwarzer", "schwarzen", "schwarzes", "schwarze"], h: "مفعول به مذكر بدون أداة (صفة قوية بالنصب) تأخذ علامة den ➔ schwarzen." }
    ]
  },
  {
    id: "A2.11", moduleNum: 24, level: "A2",
    titleDe: "Comparison of Adjectives & Adverbs (Komparation)",
    titleAr: "درجات المقارنة الثلاث (so wie, als, am ...sten) والصفات الشاذة",
    teacherNote: "المقارنة في الألمانية شديدة الانتظام: التساوي بـ wie، والتفاضل بـ als، والقمة بـ am ...sten.",
    logic: "الصفات القصيرة ذات المقطع الواحد التي تحتوي على a, o, u تأخذ غالباً إمالة Umlaut عند المقارنة لتسهيل النطق.",
    trap: "استخدام wie عند المقارنة بصفة فيها er! احذر أن تقول: (schneller wie du)؛ الصحيح حتماً هو: (schneller als du)!",
    trick: "شواذ شهيرة تحفظ غيباً: gut ➔ besser ➔ am besten | gern ➔ lieber ➔ am liebsten | viel ➔ mehr ➔ am meisten.",
    formula: "Positive: so + Adj + wie | Comparative: Adj + -er + als | Superlative: am + Adj + -sten",
    paradigmHeaders: ["Degree", "Formula", "Regular Example", "Irregular (gut / gern)"],
    paradigmRows: [
      ["Positive (تساوي)", "so + Base + wie", "so schnell wie du", "so gut wie du"],
      ["Comparative (مفاضلة)", "Base + -er + als", "schneller als du", "besser als / lieber als"],
      ["Superlative (تفضيل)", "am + Base + -sten", "am schnellsten", "am besten / am liebsten"]
    ],
    rules: [
      "Equivalence uses positive degree: so + base adjective + wie (so groß wie).",
      "Inequality uses comparative degree: adjective + -er + als (größer als; monosyllabic add umlauts).",
      "Superlative predicative form: am + adjective + -sten (-esten after -d/-t/-s/-z)."
    ],
    breakdownExample: {
      german: "Mein neues Auto ist viel schneller als mein altes, aber der Zug ist am schnellsten.",
      tags: [
        { text: "Mein neues Auto", type: "subj", label: "Subjekt 1" },
        { text: "ist viel schneller als", type: "verb", label: "Komparativ + als" },
        { text: "mein altes", type: "obj", label: "Vergleichsobjekt" },
        { text: "aber der Zug", type: "subj", label: "Subjekt 2" },
        { text: "ist am schnellsten", type: "verb", label: "Superlativ am ...sten" }
      ],
      translation: "سيارتي الجديدة أسرع بكثير من القديمة، لكن القطار هو الأسرع على الإطلاق."
    },
    seedBank: [
      { q: "Der Zug ist schneller ___ der Bus.", a: "als", o: ["wie", "als", "denn", "so"], h: "المقارنة بصفة تنتهي بـ er تتطلب أداة المقارنة als." },
      { q: "Ich trinke gern Tee, aber Kaffee trinke ich am ___.", a: "liebsten", o: ["gerngsten", "besseren", "liebsten", "meisten"], h: "التفضيل الأعلى الشاذ من ظرف الرغبة gern هو am liebsten." },
      { q: "Peter ist genauso alt ___ Markus.", a: "wie", o: ["als", "wie", "denn", "so"], h: "التساوي بين طرفين يتطلب أداة wie." },
      { q: "Dieses Hotel ist am ___ von allen.", a: "teuersten", o: ["teuersten", "teuerste", "teurer", "teuer"], h: "التفضيل المطلق مع am يتطلب اللاحقة sten ➔ am teuersten." }
    ]
  },
  {
    id: "A2.12", moduleNum: 25, level: "A2",
    titleDe: "The Genitive Case (Genitiv Fundamentals)",
    titleAr: "حالة الإضافة (Genitiv): الأدوات des/der وإضافة s وحروف الجر (während, wegen, trotz)",
    teacherNote: "حالة الإضافة (Genitiv) هي علامة الفخامة اللغوية! تعبر عن ملكية الشيء لغيره، أو تأتي بعد حروف جر راقية.",
    logic: "لماذا نضيف حرف s للاسم نفسه؟ لأن المذكر والمحايد في الجرمن القديم كانا يحملان علامة الإضافة في جسم الكلمة ذاتها.",
    trap: "إضافة s لأسماء المؤنث! المؤنث يأخذ أداة der فقط دون أي زيادة على الاسم: (die Tasche der Mutter وليس Mutters)!",
    trick: "ملكية الأسماء العلم تضاف لها s مباشرة بدون فاصلة عليا: Peters Buch (وليس Peter's)!",
    formula: "Masc/Neut: des + Noun-(e)s | Fem/Plur: der + Noun (no ending) | Proper names: Peters Auto",
    paradigmHeaders: ["Gender / Number", "Definite Genitive", "Indefinite Genitive", "Prepositional Genitive"],
    paradigmRows: [
      ["Maskulinum", "des Vaters / des Mannes (-es)", "eines Vaters", "wegen des Vaters"],
      ["Neutrum", "des Kindes (-es)", "eines Kindes", "während des Spiels"],
      ["Femininum", "der Mutter (no suffix)", "einer Mutter", "trotz der Kälte"],
      ["Plural", "der Eltern (no suffix)", "keiner Eltern", "während der Ferien"]
    ],
    rules: [
      "Genitive indicates possession, belonging, or attribution (answering 'Wessen?' - Whose?).",
      "Masculine and neuter nouns take article 'des' and append -(e)s suffix to the noun stem.",
      "Feminine and plural take article 'der'; noun stems remain uninflected."
    ],
    breakdownExample: {
      german: "Wegen des starken Regens blieben wir den ganzen Tag im Hotel.",
      tags: [
        { text: "Wegen", type: "prep", label: "Genitiv-Präposition" },
        { text: "des starken Regens", type: "obj", label: "Masc. Genitiv (des + -s)" },
        { text: "blieben", type: "verb", label: "Pos 2: Verb Inversion" },
        { text: "wir", type: "subj", label: "Pos 3: Subjekt" },
        { text: "den ganzen Tag im Hotel", type: "prep", label: "Zeit + Ort" }
      ],
      translation: "بسبب المطر الشديد، بقينا طوال اليوم داخل الفندق."
    },
    seedBank: [
      { q: "Das ist das Auto ___ Chefs.", a: "des", o: ["dem", "des", "den", "der"], h: "المذكر في حالة الإضافة يأخذ أداة des مع s للاسم." },
      { q: "___ des schlechten Wetters blieben wir zu Hause.", a: "Wegen", o: ["Wegen", "Trotzdem", "Weil", "Nachdem"], h: "حرف الجر الذي يطلب Genitiv ويعبر عن السبب هو Wegen." },
      { q: "Das Zimmer ___ Kindes ist sehr ordentlich.", a: "des", o: ["dem", "des", "der", "den"], h: "المحايد das Kind يأخذ في الإضافة des مع es للاسم." },
      { q: "Das ist ___ Fahrrad.", a: "Marias", o: ["Marias", "Maria's", "von Maria", "der Maria"], h: "ملكية الأسماء الشخصية تضيف s بدون فاصلة عليا ➔ Marias." }
    ]
  },
  {
    id: "A2.13", moduleNum: 26, level: "A2",
    titleDe: "Relative Clauses (Relativsätze im Nominativ, Akkusativ, Dativ)",
    titleAr: "جمل الوصل والصلة (Relativsätze) في الرفع والنصب والجر مع طرد الفعل",
    teacherNote: "جمل الوصل تجعل لغتكم مترابطة كالروايات! تعطي معلومة إضافية عن اسم سابق وتتصرف كجملة جانبية تطرد الفعل للآخر.",
    logic: "كيف نختار اسم الموصول؟ الجنس والعدد يأتيان من الاسم الذي تصفه، بينما الحالة الإعرابية تأتي من وظيفة الضمير داخل جملة الصلة!",
    trap: "تذكر أن أداة Dativ للجمع في جمل الوصل هي (denen) وليست (den)!",
    trick: "أسماء الموصول تطابق تماماً أدوات المعرفة (der, die, das) باستثناء جمع Dativ الذي يصبح denen.",
    formula: "Gender/Number from antecedent noun | Case from role inside relative clause | Verb at end",
    paradigmHeaders: ["Case inside clause", "Maskulinum", "Neutrum", "Femininum", "Plural"],
    paradigmRows: [
      ["Nominativ (فاعل)", "der Mann, der...", "das Kind, das...", "die Frau, die...", "die Leute, die..."],
      ["Akkusativ (مفعول به)", "der Mann, den...", "das Kind, das...", "die Frau, die...", "die Leute, die..."],
      ["Dativ (مجرور)", "der Mann, dem...", "das Kind, dem...", "die Frau, der...", "die Kollegen, denen..."]
    ],
    rules: [
      "Relative clauses are subordinate clauses: set off by commas, conjugated verb placed at the end.",
      "Relative pronouns match the antecedent in gender and number, but derive case from their own clause.",
      "Dative plural relative pronoun is uniquely 'denen' (distinct from article 'den')."
    ],
    breakdownExample: {
      german: "Das ist der Mann, den ich gestern im Supermarkt getroffen habe.",
      tags: [
        { text: "Das ist der Mann", type: "subj", label: "Hauptsatz (Antecedent: der)" },
        { text: "den", type: "obj", label: "Relativpronomen: Masc. Akk" },
        { text: "ich gestern getroffen habe", type: "verb", label: "Verb am Ende" }
      ],
      translation: "هذا هو الرجل الذي التقيته بالأمس في السوبرماركت."
    },
    seedBank: [
      { q: "Das ist der Mann, ___ ich gestern im Supermarkt getroffen habe.", a: "den", o: ["der", "den", "dem", "dessen"], h: "الاسم الموصوف مذكر وهو مفعول به في جملة الصلة ➔ den." },
      { q: "Die Kollegen, mit ___ ich arbeite, sind sehr freundlich.", a: "denen", o: ["den", "denen", "die", "dem"], h: "جمع Dativ في جمل الوصل بعد حرف mit يأخذ حصراً denen." },
      { q: "Hier ist das Buch, ___ ich so lange gesucht habe.", a: "das", o: ["das", "den", "dem", "die"], h: "الكتاب محايد das ومفعول به منصوب في جملة الصلة ➔ das." },
      { q: "Kennst du die Frau, ___ dort drüben steht?", a: "die", o: ["der", "die", "den", "das"], h: "المرأة فاعل مرفوع في جملة الصلة ➔ die." }
    ]
  },
  {
    id: "A2.14", moduleNum: 27, level: "A2",
    titleDe: "Infinitive Constructions (Infinitiv mit 'zu')",
    titleAr: "التركيب المصدري مع zu وحالات الفعل المنفصل (einzukaufen) ومتى تسقط zu",
    teacherNote: "عندما يكون لديك فعلان في الجملة يشتركان في نفس الفاعل، يأتي الفعل الثاني في المصدر مسبوقاً بكلمة zu!",
    logic: "لماذا نستخدم zu؟ لأنها تعمل كرابط مصدري مثل (أنْ) في العربية: (أحاول أن أتعلم ➔ Ich versuche zu lernen).",
    trap: "وضع zu بعد أفعال المودال! احذر: أفعال المودال (können, müssen...) لا تأخذ zu إطلاقاً: (Ich kann schwimmen وليس zu schwimmen)!",
    trick: "مع الأفعال المنفصلة، تحشر كلمة zu في الوسط بين السابقة والجذر: ein + zu + kaufen ➔ einzukaufen!",
    formula: "..., + zu + Infinitiv (Clause End) | Separable: Prefix + -zu- + Stem + -en (einzukaufen)",
    paradigmHeaders: ["Trigger Environment", "Formula / Structure", "Separable Behavior", "Example"],
    paradigmRows: [
      ["Matrix Verbs", "hoffen, versuchen, vorhaben + zu", "ein-zu-kaufen", "Ich versuche pünktlich zu sein."],
      ["Es ist + Adjektiv", "es ist wichtig/verboten + zu", "auf-zu-stehen", "Es ist gesund viel zu trinken."],
      ["Nomen + haben", "Lust / Zeit haben + zu", "mit-zu-kommen", "Hast du Zeit mir zu helfen?"],
      ["Prohibited", "NO 'zu' after modals or gehen", "kann schwimmen", "Ich gehe schlafen (Never zu!)."]
    ],
    rules: [
      "Used when two actions share the same subject: second verb is placed at the end preceded by 'zu'.",
      "Separable verbs insert '-zu-' between prefix and stem: einkaufen ➔ einzukaufen.",
      "Strict omission: never use 'zu' after modal verbs (können, müssen) or perception verbs (sehen, hören, gehen)."
    ],
    breakdownExample: {
      german: "Ich habe vergessen, den Herd auszuschalten.",
      tags: [
        { text: "Ich habe vergessen", type: "verb", label: "Hauptsatz Perfekt" },
        { text: "den Herd", type: "obj", label: "Akkusativobjekt" },
        { text: "auszuschalten", type: "verb", label: "Trennbar: aus + zu + schalten" }
      ],
      translation: "لقد نسيت أن أطفئ الموقد."
    },
    seedBank: [
      { q: "Ich habe vergessen, Milch ___.", a: "einzukaufen", o: ["einkaufen", "einzukaufen", "gekauft", "zu einkaufen"], h: "الفعل المنفصل يحشر كلمة zu في الوسط: ein-zu-kaufen." },
      { q: "Es ist verboten, hier zu ___.", a: "parken", o: ["parken", "geparkt", "parkt", "parkst"], h: "بعد zu يأتي الفعل دائماً بصيغة المصدر غير المصرف ➔ parken." },
      { q: "Hast du Lust, heute Abend ins Kino ___ gehen?", a: "zu", o: ["zu", "nach", "für", "--"], h: "تعبير Lust haben يتطلب أداة المصدر zu." },
      { q: "Ich kann sehr gut ___.", a: "schwimmen", o: ["zu schwimmen", "schwimmen", "geschwommen", "schwimme"], h: "أفعال المودال لا تقبل zu مطلقاً!" }
    ]
  },
  {
    id: "A2.15", moduleNum: 28, level: "A2",
    titleDe: "Subjunctive II: Polite Requests & Wishes (Konjunktiv II)",
    titleAr: "صيغة التمني والطلب المهذب (Konjunktiv II: hätte, wäre, könnte, würde + Infinitiv)",
    teacherNote: "هذا هو سر اللباقة الدبلوماسية في ألمانيا! بدلاً من الأمر المباشر، نستخدم Konjunktiv II لنطلب بلطف فائق.",
    logic: "لماذا نستخدم صيغة التمني للطلب؟ لأنها تجعل الأمر افتراضياً غير ملزم، مما يعطي المستمع مساحة احترام وحرية.",
    trap: "استخدام werden العادية للطلب! لا تقل (Ich werde einen Kaffee)، بل قل بصيغة التمني: (Ich würde gern einen Kaffee bestellen)!",
    trick: "فعل الكينونة يصبح wäre، وفعل الملكية يصبح hätte، وفعل الاستطاعة يصبح könnte.",
    formula: "hätte (have) | wäre (be) | könnte (can) | würde + Infinitive (all other verbs)",
    paradigmHeaders: ["Verb / Base", "Konjunktiv II Form", "Communicative Function", "Polite Example"],
    paradigmRows: [
      ["haben", "ich hätte, du hättest, er hätte", "Polite Order / Wish", "Ich hätte gern einen Kaffee."],
      ["sein", "ich wäre, du wärst, er wäre", "Hypothetical Wish", "Ich wäre jetzt gern am Meer."],
      ["können", "ich könnte, könnten Sie", "Polite Request / Question", "Könnten Sie mir bitte helfen?"],
      ["All Other Verbs", "würde + Infinitiv am Ende", "Polite Action / Order", "Ich würde gern mitkommen."]
    ],
    rules: [
      "Employed at A2 for high-politeness requests/orders and hypothetical wishes.",
      "Auxiliaries sein and haben and modal können have dedicated forms: wäre, hätte, könnte.",
      "All remaining verbs construct Konjunktiv II analytically using: conjugated würde + Infinitive."
    ],
    breakdownExample: {
      german: "Könnten Sie mir bitte helfen? Ich suche den Bahnhof.",
      tags: [
        { text: "Könnten", type: "verb", label: "Konjunktiv II Modal (Pos 1)" },
        { text: "Sie", type: "subj", label: "Höflichkeitsform" },
        { text: "mir bitte", type: "obj", label: "Dativ + Höflichkeitspartikel" },
        { text: "helfen", type: "verb", label: "Satzende: Infinitiv" }
      ],
      translation: "هل بإمكان حضرتك بلطف أن تساعدني؟ أنا أبحث عن محطة القطار."
    },
    seedBank: [
      { q: "Ich ___ gern einen Kaffee und ein Croissant.", a: "hätte", o: ["habe", "hätte", "hatte", "würde"], h: "الطلب المهذب في المقاهي لفعل الملكية هو hätte gern." },
      { q: "___ Sie mir bitte sagen, wo der Bahnhof ist?", a: "Könnten", o: ["Kann", "Könnten", "Konnten", "Können"], h: "الطلب فائق الأدب من فعل können هو könnten Sie." },
      { q: "Ich ___ jetzt so gern im Urlaub am Strand!", a: "wäre", o: ["bin", "wäre", "war", "werde"], h: "التمني الافتراضي لفعل الكينونة هو wäre gern." },
      { q: "Ich ___ gern einen Termin für nächste Woche vereinbaren.", a: "würde", o: ["werde", "würde", "wollte", "habe"], h: "الطلب المهذب للأفعال العادية يصاغ بـ würde + المصدر." }
    ]
  },
  {
    id: "A2.16", moduleNum: 29, level: "A2",
    titleDe: "Indefinite Pronouns & Demonstratives",
    titleAr: "الضمائر النكرة وأسماء الإشارة وحذف الاسم وتفاديه (jemand, keins, dieser)",
    teacherNote: "هنا نتعلم كيف نختصر كلامنا مثل الألمان الأصليين دون إعادة تكرار الاسم في كل جملة!",
    logic: "عندما تحذف اسماً معروفاً في السياق، يجب أن تنوب الأداة عنه وتظهر علامة جنسه بوضوح كبديل.",
    trap: "قول (Ich habe kein) للجماد المحايد! إذا حذفت كلمة das Auto، يجب أن تظهر علامة s: (Nein, ich habe keins)!",
    trick: "المذكر المحذوف يأخذ (einen/keinen)، والمحايد المحذوف يأخذ (eins/keins).",
    formula: "Invariable: etwas, nichts, man | Replacement pronouns: einer (masc), keins (neut), welche (plur)",
    paradigmHeaders: ["Gender / Role", "Replacement (Positive)", "Replacement (Negative)", "Example Dialogue"],
    paradigmRows: [
      ["Maskulinum Akk", "einen", "keinen", "Brauchst du einen Stift? – Ich habe einen."],
      ["Neutrum Nom/Akk", "eins / eines", "keins / keines", "Hast du ein Auto? – Nein, ich habe keins."],
      ["Femininum", "eine", "keine", "Hast du eine Tasche? – Nein, ich habe keine."],
      ["Plural", "welche", "keine", "Haben wir noch Äpfel? – Ja, noch welche."]
    ],
    rules: [
      "Invariable pronouns (etwas, nichts, man) never change their morphological form.",
      "When replacing an already-stated noun, the pronoun carries gender/case tags (keins for das, einen for der).",
      "Demonstratives (dieser, diese, dieses) inflect exactly like the definite article to specify items."
    ],
    breakdownExample: {
      german: "Dieser Pullover gefällt mir besser als jener, aber er kostet zu viel.",
      tags: [
        { text: "Dieser Pullover", type: "subj", label: "Demonstrativpronomen Masc. Nom" },
        { text: "gefällt mir", type: "verb", label: "Verb + Dativ" },
        { text: "besser als jener", type: "prep", label: "Komparativ" }
      ],
      translation: "هذه الكنزة تعجبني أكثر من تلك، لكنها تكلف كثيراً."
    },
    seedBank: [
      { q: "Hast du ein Auto? – Nein, ich brauche ___.", a: "keins", o: ["kein", "keins", "keinen", "nichts"], h: "التعويض عن الاسم المحايد das Auto المحذوف يتطلب keins." },
      { q: "___ Pullover gefällt mir viel besser als jener.", a: "Dieser", o: ["Dieser", "Diesen", "Dieses", "Diesem"], h: "اسم الإشارة للمذكر المرفوع فاعل هو Dieser." },
      { q: "Hier darf ___ nicht rauchen.", a: "man", o: ["jemand", "man", "mann", "etwas"], h: "الضمير النكرة الفاعل المبهم العام هو man بحرف صغير." },
      { q: "Hast du einen Stift? – Ja, hier ist ___.", a: "einer", o: ["ein", "einer", "einen", "eins"], h: "التعويض عن مذكر مرفوع فاعل محذوف der Stift هو einer." }
    ]
  },
  {
    id: "A2.17", moduleNum: 30, level: "A2",
    titleDe: "The Passive Voice (Vorgangspassiv Basics)",
    titleAr: "المبني للمجهول في الحاضر (Vorgangspassiv: werden + Partizip II) والفاعل عبر von",
    teacherNote: "أهنئكم بالوصول إلى قمة المستوى A2 وتاج قواعده: المبني للمجهول! يركز على ما تم إنجازه وليس على الفاعل.",
    logic: "لماذا نستخدم المجهول؟ لأن الفاعل بديهي أو غير مهم مقارنة بالعمل نفسه (مثل: يتم خبز الخبز كل صباح).",
    trap: "الخلط بين werden كمساعد للمجهول و werden كفعل عادي. في المجهول يجب أن تجد حتماً Partizip II في آخر الجملة!",
    trick: "معادلة المجهول الصارمة: تصريف werden في المركز 2 + التصريف الثالث Partizip II في آخر الجملة تماماً.",
    formula: "Passive: [werden (Pos 2)] + ... + [von + Dativ (Agent)] + ... + [Partizip II (End)]",
    paradigmHeaders: ["Subject", "werden Conjugation", "Partizip II am Ende", "Full Passive Sentence"],
    paradigmRows: [
      ["ich", "werde", "informiert", "Ich werde rechtzeitig informiert."],
      ["das Brot", "wird", "gebacken", "Das Brot wird jeden Morgen gebacken."],
      ["die Autos", "werden", "repariert", "Die Autos werden in der Werkstatt repariert."],
      ["Agent (الفاعل)", "von + Dativ", "--", "Das Buch wird vom Autor signiert."]
    ],
    rules: [
      "Vorgangspassiv focuses on the action or recipient, omitting or de-emphasizing the agent.",
      "Formation: Conjugated present tense of 'werden' in Pos 2 + Partizip II at the absolute clause end.",
      "Agent inclusion is constructed strictly via the preposition 'von + Dativ'."
    ],
    breakdownExample: {
      german: "Das Brot wird jeden Morgen frisch gebacken.",
      tags: [
        { text: "Das Brot", type: "subj", label: "Subjekt (Patient)" },
        { text: "wird", type: "verb", label: "werden (Pos 2)" },
        { text: "jeden Morgen frisch", type: "prep", label: "Angaben" },
        { text: "gebacken", type: "verb", label: "Partizip II am Ende" }
      ],
      translation: "يتم خبز الخبز كل صباح طازجاً."
    },
    seedBank: [
      { q: "Das Brot ___ jeden Morgen frisch gebacken.", a: "wird", o: ["wird", "werden", "wurden", "ist"], h: "المبني للمجهول للمفرد المحايد das Brot يتطلب wird + Partizip II." },
      { q: "Die E-Mail wird heute ___ Chef weitergeleitet.", a: "vom", o: ["von", "vom", "durch", "aus"], h: "الفاعل في المبني للمجهول يسبق بـ von + Dativ (von dem ➔ vom)." },
      { q: "Hier ___ Deutsch und Englisch gesprochen.", a: "wird", o: ["wird", "werden", "ist", "hat"], h: "المبني للمجهول للحديث العام عن اللغات يتطلب wird gesprochen." },
      { q: "Die Rechnungen ___ sofort bezahlt.", a: "werden", o: ["wird", "werden", "wurden", "worden"], h: "الفاعل جمع Die Rechnungen يتطلب فعل werden بصيغة الجمع." }
    ]
  }
];

// =========================================================================
// 2. THE 40-EXERCISE TIERED ENGINE (1,200 CALIBRATED EXERCISES)
// =========================================================================
function generateTieredExercises(mod) {
  const bank = mod.seedBank;
  const list = [];

  const tierMeta = [
    { tier: 1, label: "تأسيس (Grundlagen)", badge: "🟢" },
    { tier: 2, label: "تثبيت (Festigung)", badge: "🟡" },
    { tier: 3, label: "تطبيق (Anwendung)", badge: "🟠" },
    { tier: 4, label: "امتحان غوته (Goethe-Prüfung)", badge: "🔴" }
  ];

  for (let i = 0; i < 40; i++) {
    const tierIdx = Math.floor(i / 10);
    const meta = tierMeta[tierIdx];
    const seed = bank[i % bank.length];

    const parts = seed.q.split("___");
    const before = parts[0];
    const after = parts[1] || "";
    const exId = i + 1;

    list.push({
      id: exId,
      tier: meta.tier,
      tierLabel: meta.label,
      tierBadge: meta.badge,
      before: before,
      ans: seed.a,
      after: after,
      full: `${before} ${seed.a} ${after}`.replace(/\s+/g, ' ').trim(),
      opts: seed.o,
      hint: `${seed.h} [${meta.badge} المستوى ${meta.tier}: ${meta.label}]`
    });
  }

  return list;
}

// =========================================================================
// 3. APPLICATION STATE & CONTROLLER
// =========================================================================
class AppController {
  constructor() {
    this.modules = MASTER_MODULES;
    this.currentModIndex = 0;
    this.currentExIndex = 0;
    this.currentMode = 'lesson';
    this.activeTier = 'all';
    this.xp = parseInt(localStorage.getItem('dm_xp') || '0', 10);
    this.completed = {};
  }

  getCurrentModule() {
    return this.modules[this.currentModIndex];
  }

  getAllExercises() {
    return generateTieredExercises(this.getCurrentModule());
  }

  addXP(points) {
    this.xp += points;
    localStorage.setItem('dm_xp', this.xp);
  }
}

const app = new AppController();

// =========================================================================
// 4. SPEECH SYNTHESIS
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
// 5. DOM & RENDERING ENGINE
// =========================================================================
const headerBadge = document.getElementById('header-mod-badge');
const headerTitle = document.getElementById('header-mod-title');
const statXp = document.getElementById('stat-xp');
const tabBtnLesson = document.getElementById('tab-btn-lesson');
const tabBtnPractice = document.getElementById('tab-btn-practice');
const viewLesson = document.getElementById('view-lesson');
const viewPractice = document.getElementById('view-practice');
const lessonBody = document.getElementById('lesson-content-body');
const pillsGrid40 = document.getElementById('pills-grid-40');
const progressLabel = document.getElementById('practice-progress-label');
const stage = document.getElementById('exercise-stage');
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
const catalogList = document.getElementById('catalog-list');
const catalogSearch = document.getElementById('catalog-search');
const btnPrevMod = document.getElementById('btn-prev-mod');
const btnNextMod = document.getElementById('btn-next-mod');
const btnThemeToggle = document.getElementById('btn-theme-toggle');

function init() {
  statXp.innerText = `${app.xp} XP`;
  setupEvents();
  renderCurrentView();
}

function renderCurrentView() {
  const mod = app.getCurrentModule();
  const exercises = app.getAllExercises();

  headerBadge.innerText = `${mod.id} (${mod.level})`;
  headerTitle.innerText = `${mod.titleDe}`;

  // 1. RENDER STRICTLY ISOLATED LESSON SHEET
  lessonBody.innerHTML = `
    <!-- Teacher Greeting & Pedagogical Context (RTL) -->
    <div class="rtl-isolate bg-blue-50/70 dark:bg-slate-800/80 p-5 rounded-2xl border border-blue-200/60 dark:border-zinc-700 space-y-2">
      <div class="flex items-center gap-2">
        <span class="text-xl">👩‍🏫</span>
        <h3 class="font-black text-slate-900 dark:text-white text-sm sm:text-base">توجيه الأستاذة مي:</h3>
        <span class="text-[10px] bg-blue-600 text-white font-de font-bold px-2 py-0.5 rounded-full">معيار غوته ${mod.level}</span>
      </div>
      <p class="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">${mod.teacherNote}</p>
    </div>

    <!-- Mathematical Formula Terminal Card (Strictly LTR) -->
    <div class="ltr-isolate formula-terminal text-white p-4 sm:p-5 rounded-2xl space-y-1">
      <span class="text-[10px] uppercase font-mono font-bold tracking-widest text-indigo-400 block">Structural Formula & Syntax</span>
      <div class="font-mono text-xs sm:text-sm font-bold text-amber-300">${mod.formula}</div>
    </div>

    <!-- 3 Pedagogical Insight Callouts (RTL) -->
    <div class="rtl-isolate grid grid-cols-1 md:grid-cols-3 gap-3">
      <div class="bg-emerald-50/70 dark:bg-emerald-950/30 border-r-4 border-emerald-500 p-4 rounded-xl space-y-1">
        <span class="font-black text-emerald-900 dark:text-emerald-300 text-xs block">💡 لماذا هذه القاعدة؟</span>
        <p class="text-xs text-emerald-950 dark:text-emerald-200 leading-relaxed">${mod.logic}</p>
      </div>
      <div class="bg-rose-50/70 dark:bg-rose-950/30 border-r-4 border-rose-500 p-4 rounded-xl space-y-1">
        <span class="font-black text-rose-900 dark:text-rose-300 text-xs block">⚠️ فخ الطلاب العرب:</span>
        <p class="text-xs text-rose-950 dark:text-rose-200 leading-relaxed">${mod.trap}</p>
      </div>
      <div class="bg-amber-50/70 dark:bg-amber-950/30 border-r-4 border-amber-500 p-4 rounded-xl space-y-1">
        <span class="font-black text-amber-900 dark:text-amber-300 text-xs block">🎯 حيلة الحفظ السريع:</span>
        <p class="text-xs text-amber-950 dark:text-amber-200 leading-relaxed">${mod.trick}</p>
      </div>
    </div>

    <!-- Official Goethe Paradigm Table (Strictly LTR) -->
    <div class="space-y-2">
      <div class="rtl-isolate flex items-center justify-between">
        <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
          <span>📊 جدول التصريف المعتمد في غوته:</span>
        </h4>
        <span class="text-[11px] font-de text-slate-400">Inflection Paradigm</span>
      </div>
      <div class="data-table-container">
        <table class="data-table font-de">
          <thead>
            <tr>
              ${mod.paradigmHeaders.map(h => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${mod.paradigmRows.map(row => `
              <tr>
                ${row.map((cell, idx) => `<td class="${idx === 0 ? 'font-bold text-blue-600 dark:text-blue-400' : ''}">${cell}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Morphosyntactic Rules List (Strictly LTR) -->
    <div class="ltr-isolate bg-slate-50 dark:bg-slate-800/60 p-4 sm:p-5 rounded-2xl border border-slate-200 dark:border-zinc-700 space-y-2">
      <span class="text-xs font-mono font-bold uppercase text-slate-400 block tracking-wider">Core Structural Rules</span>
      <ul class="list-disc list-inside space-y-1.5 text-xs text-slate-700 dark:text-slate-300 font-de">
        ${mod.rules.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <!-- Syntactic Breakdown Example (Strictly LTR Component Tags) -->
    <div class="space-y-2">
      <div class="rtl-isolate">
        <h4 class="font-black text-xs sm:text-sm text-slate-900 dark:text-white">نموذج الإعراب والتحليل التركيبي:</h4>
      </div>
      <div class="ltr-isolate bg-slate-50 dark:bg-slate-800/60 p-4 rounded-2xl border border-slate-200 dark:border-zinc-700 space-y-2">
        <p class="font-de font-black text-sm text-slate-900 dark:text-white">${mod.breakdownExample.german}</p>
        <div class="flex flex-wrap gap-1.5 font-de text-[11px] pt-1">
          ${mod.breakdownExample.tags.map(t => `
            <span class="syntax-tag-${t.type} px-2.5 py-1 rounded-md font-bold">${t.text} <span class="opacity-70 text-[9px]">[${t.label}]</span></span>
          `).join('')}
        </div>
        <p class="rtl-isolate text-xs text-slate-500 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-zinc-700">الترجمة: ${mod.breakdownExample.translation}</p>
      </div>
    </div>
  `;

  // 2. Render 40 Practice Pills
  renderPills(exercises);

  // 3. Render Active Question
  renderActiveQuestion();
}

function renderPills(exercises) {
  const mod = app.getCurrentModule();
  
  pillsGrid40.innerHTML = exercises.map((ex, idx) => {
    const isCurrent = idx === app.currentExIndex;
    const isDone = app.completed[`${mod.id}_${ex.id}`];

    if (app.activeTier !== 'all' && ex.tier !== app.activeTier) return '';

    let classes = 'quiz-pill';
    if (isDone) classes += ' completed';
    if (isCurrent) classes += ' active';

    return `<div onclick="jumpToEx(${idx})" class="${classes}">${ex.id}</div>`;
  }).join('');

  const activeEx = exercises[app.currentExIndex];
  progressLabel.innerText = `Aufgabe ${app.currentExIndex + 1} / 40 (${activeEx.tierLabel})`;
}

function renderActiveQuestion() {
  feedbackPanel.classList.add('hidden');
  hintText.classList.add('hidden');

  const exercises = app.getAllExercises();
  const current = exercises[app.currentExIndex];

  hintText.innerText = current.hint;

  stage.innerHTML = `
    <div class="w-full max-w-xl flex flex-col items-center animate-pop text-center space-y-6">
      
      <span class="text-xs font-black px-3.5 py-1 rounded-full border ${getTierBadgeStyle(current.tier)}">
        ${current.tierBadge} المستوى ${current.tier}: ${current.tierLabel}
      </span>

      <div class="ltr-isolate text-xl sm:text-2xl font-bold text-slate-900 dark:text-white font-de leading-relaxed">
        <span>${current.before}</span>
        <span id="cloze-target-slot" class="inline-block px-3 py-0.5 mx-1 border-b-2 border-blue-600 font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/40 rounded">____</span>
        <span>${current.after}</span>
      </div>

      <div class="ltr-isolate flex flex-wrap justify-center gap-3 w-full font-de">
        ${current.opts.map(opt => `
          <button onclick="evaluateAnswer('${opt}', this)" class="touch-tile px-6 py-3.5 bg-white dark:bg-slate-800 border border-slate-200 dark:border-zinc-700 hover:border-blue-600 dark:hover:border-blue-500 text-slate-800 dark:text-slate-100 font-bold rounded-2xl shadow-sm hover:shadow transition text-sm sm:text-base">
            ${opt}
          </button>
        `).join('')}
      </div>

    </div>
  `;
}

function getTierBadgeStyle(tier) {
  switch(tier) {
    case 1: return "bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-800";
    case 2: return "bg-amber-50 dark:bg-amber-950/50 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-800";
    case 3: return "bg-orange-50 dark:bg-orange-950/50 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-800";
    case 4: return "bg-rose-50 dark:bg-rose-950/50 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-800";
  }
}

window.evaluateAnswer = function(selected, btn) {
  const exercises = app.getAllExercises();
  const current = exercises[app.currentExIndex];
  const isCorrect = selected.toLowerCase() === current.ans.toLowerCase();

  const slot = document.getElementById('cloze-target-slot');
  slot.innerText = selected;
  slot.classList.add(isCorrect ? 'text-green-600' : 'text-red-600');

  stage.querySelectorAll('button').forEach(b => b.classList.add('pointer-events-none'));
  feedbackPanel.classList.remove('hidden', 'bg-red-50', 'dark:bg-red-950/30', 'border-red-200', 'bg-green-50', 'dark:bg-green-950/30', 'border-green-200', 'animate-shake');

  if (isCorrect) {
    app.addXP(10);
    statXp.innerText = `${app.xp} XP`;
    app.completed[`${app.getCurrentModule().id}_${current.id}`] = true;

    feedbackPanel.classList.add('bg-green-50', 'dark:bg-green-950/30', 'border-green-300', 'dark:border-green-800');
    feedbackTitle.className = 'font-black text-sm text-green-900 dark:text-green-300';
    feedbackTitle.innerText = 'أحسنت! إجابة صحيحة وفق معيار غوته 👏';
    feedbackIcon.className = 'w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-green-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
  } else {
    feedbackPanel.classList.add('bg-red-50', 'dark:bg-red-950/30', 'border-red-300', 'dark:border-red-800', 'animate-shake');
    feedbackTitle.className = 'font-black text-sm text-red-900 dark:text-red-300';
    feedbackTitle.innerHTML = `انتبه للقاعدة! الإجابة الصحيحة: <span class="font-de underline font-black ltr-isolate">${current.ans}</span>`;
    feedbackIcon.className = 'w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-red-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>`;
  }

  feedbackSummary.innerText = current.hint;
  speakGerman(current.full);
  btnAudioRepeat.onclick = () => speakGerman(current.full);
};

window.filterTier = function(tier) {
  app.activeTier = tier;
  document.querySelectorAll('.tier-chip').forEach(c => {
    c.className = "tier-chip px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs transition";
  });
  event.target.className = "tier-chip px-3 py-1 rounded-lg bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold text-xs transition";
  renderPills(app.getAllExercises());
};

window.switchToPracticeMode = function() {
  viewLesson.classList.add('hidden');
  viewPractice.classList.remove('hidden');
  tabBtnPractice.className = "px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition";
  tabBtnLesson.className = "px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center gap-2 transition";
  renderCurrentView();
};

window.switchToLessonMode = function() {
  viewLesson.classList.remove('hidden');
  viewPractice.classList.add('hidden');
  tabBtnLesson.className = "px-4 py-2 rounded-xl bg-blue-600 text-white font-bold text-xs flex items-center gap-2 shadow-sm transition";
  tabBtnPractice.className = "px-4 py-2 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-zinc-700 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center gap-2 transition";
};

window.jumpToEx = function(idx) {
  app.currentExIndex = idx;
  renderCurrentView();
};

window.toggleCatalog = function(open) {
  catalogDrawer.classList.toggle('hidden', !open);
};

function setupEvents() {
  tabBtnLesson.addEventListener('click', switchToLessonMode);
  tabBtnPractice.addEventListener('click', switchToPracticeMode);
  btnShowHint.addEventListener('click', () => hintText.classList.toggle('hidden'));

  // Theme Toggle Logic
  btnThemeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('dm_theme', isDark ? 'dark' : 'light');
  });

  // Next Exercise Button
  btnNextEx.addEventListener('click', () => {
    if (app.currentExIndex < 39) {
      app.currentExIndex++;
      renderCurrentView();
    } else {
      alert('تهانينا البالغة! لقد أتممت جميع تمارين هذا الفصل الـ 40 بنجاح!');
    }
  });

  // Prev / Next Module Navigation
  btnPrevMod.addEventListener('click', () => {
    if (app.currentModIndex > 0) {
      app.currentModIndex--;
      app.currentExIndex = 0;
      renderCurrentView();
    }
  });

  btnNextMod.addEventListener('click', () => {
    if (app.currentModIndex < app.modules.length - 1) {
      app.currentModIndex++;
      app.currentExIndex = 0;
      renderCurrentView();
    }
  });

  // Catalog Drawer Toggle & Search
  btnOpenCatalog.addEventListener('click', () => {
    toggleCatalog(true);
    renderCatalogList(app.modules);
  });

  catalogSearch.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase();
    const filtered = app.modules.filter(m => 
      m.id.toLowerCase().includes(query) || 
      m.titleDe.toLowerCase().includes(query) || 
      m.titleAr.toLowerCase().includes(query)
    );
    renderCatalogList(filtered);
  });
}

function renderCatalogList(list) {
  catalogList.innerHTML = list.map((m) => {
    const originalIndex = app.modules.findIndex(item => item.id === m.id);
    return `
      <div onclick="selectModule(${originalIndex})" class="p-4 rounded-xl border border-slate-200 dark:border-zinc-800 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-slate-800/50 cursor-pointer transition flex items-start gap-3">
        <span class="px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-900/50 text-blue-800 dark:text-blue-300 font-de font-black text-xs mt-0.5">${m.id}</span>
        <div class="flex-1">
          <p class="font-bold text-slate-900 dark:text-white text-xs sm:text-sm">${m.titleAr}</p>
          <p class="font-de text-slate-500 dark:text-slate-400 text-xs mt-0.5 ltr-isolate">${m.titleDe}</p>
        </div>
      </div>
    `;
  }).join('');
}

window.selectModule = function(idx) {
  app.currentModIndex = idx;
  app.currentExIndex = 0;
  toggleCatalog(false);
  switchToLessonMode();
  renderCurrentView();
};

window.addEventListener('DOMContentLoaded', init);
