/**
 * Deutsch mit Dr. Mai – Master Goethe Compendium Engine
 * ALL 30 MODULES COMPLETE • DR. MAI TEACHER VOICE • 40 PROGRESSIVE TIERS (1,200 EXERCISES)
 */

(function() {
  const saved = localStorage.getItem('dm_theme') || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
  if (saved === 'dark') document.documentElement.classList.add('dark');
})();

const MASTER_MODULES = [
  // =========================================================================
  // PART I: GOETHE-ZERTIFIKAT A1 (MODULES 1 TO 13)
  // =========================================================================
  {
    id: "A1.01", moduleNum: 1, level: "A1",
    titleDe: "Personal Pronouns & Present Tense Conjugation (Präsens)",
    titleAr: "الضمائر الشخصية وتصريف أفعال الحاضر وتعديلات الجذع (-t/-d/-s)",
    drMaiNote: "أهلاً بكم! معكم د. مي. في هذا الدرس نضع حجر الأساس: تصريف الفعل ليتطابق مع الفاعل. الفعل كائن حي يتغير شكله بحسب الفاعل.",
    drMaiLogic: "الألمانية لغة مرنة الترتيب؛ فتصريف الفعل في المركز الثاني هو البوصلة التي تحدد الفاعل بدقة حتى لو تغير موضع الكلمات.",
    drMaiWarn: "إذا انتهى جذر الفعل بـ t أو d (مثل arbeiten)، يثقل النطق إذا قلنا (du arbeitst)، لذلك نضع حرف e وقاية: (du arbeitest)!",
    drMaiTrick: "احفظ الترتيب الصوتي للنهايات القياسية: e, st, t, en, t, en!",
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
      "Stems in -t, -d insert -e- before -st and -t (du arbeitest, er arbeitet).",
      "Stems in -s, -ß, -z drop the -s- with 'du' (du heißt, du reist).",
      "Irregular Auxiliaries: sein (ich bin, du bist, er ist) & haben (du hast, er hat)."
    ],
    examples: [
      {
        de: "Ich wohne in Berlin und arbeite dort als Ingenieur.",
        tags: [{ text: "Ich", type: "subj", label: "Subjekt" }, { text: "wohne", type: "verb", label: "Verb 1" }, { text: "arbeite", type: "verb", label: "Verb 2" }],
        ar: "أنا أسكن في برلين وأعمل هناك كمهندس."
      }
    ],
    seedBank: [
      { q: "Ich ___ in Berlin und lerne fleißig.", a: "wohne", o: ["wohne", "wohnst", "wohnt", "wohnen"], h: "نهاية المتكلم ich هي دائماً -e." },
      { q: "Du ___ sehr fleißig im Krankenhaus.", a: "arbeitest", o: ["arbeitst", "arbeitest", "arbeitet", "arbeiten"], h: "جذر الفعل ينتهي بـ t، فنضيف e وقاية قبل st." },
      { q: "Wie ___ du mit Nachnamen?", a: "heißt", o: ["heißest", "heißt", "heiße", "heißen"], h: "الفعل المنتهي بـ ß يأخذ t فقط مع du." },
      { q: "Er ___ ein Buch und ist zufrieden.", a: "hat", o: ["habe", "hast", "hat", "haben"], h: "تصريف الغائب المفرد لفعل haben هو hat." }
    ]
  },
  {
    id: "A1.02", moduleNum: 2, level: "A1",
    titleDe: "Sentence Architecture I (Main Clauses & Questions)",
    titleAr: "معمارية الجملة: قاعدة الفعل بالمركز 2، الانقلاب (Inversion)، والأسئلة",
    drMaiNote: "في الجملة الألمانية، الفعل المصرف مقفل دائماً في المركز الثاني في الجملة الخبرية ولا يتزحزح أبداً!",
    drMaiLogic: "تثبيت الفعل ثانياً يمنحك حرية تقديم أي عنصر تريده في المركز الأول دون التضحية بوضوح الجملة.",
    drMaiWarn: "احذر الترجمة الحرفية! لا تقل (Heute ich lerne)، بل اعكس وضع الفاعل خلف الفعل فوراً: (Heute lerne ich)!",
    drMaiTrick: "المعادلة: العنصر الأول + الفعل حتماً في المركز 2 + الفاعل مباشرة في المركز 3.",
    formula: "Declarative: Pos 1 (Vorfeld) + Verb (Pos 2) + Subject (Pos 3) | Ja/Nein: Verb (Pos 1)",
    paradigmHeaders: ["Sentence Pattern", "Position 1", "Position 2 (Verb)", "Position 3 (Subject/Rest)"],
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
    examples: [
      {
        de: "Heute lernen wir die Grammatik in der Schule.",
        tags: [{ text: "Heute", type: "prep", label: "Pos 1" }, { text: "lernen", type: "verb", label: "Pos 2" }, { text: "wir", type: "subj", label: "Pos 3 (Inversion)" }],
        ar: "اليوم نتعلم نحن القواعد في المدرسة."
      }
    ],
    seedBank: [
      { q: "Heute ___ wir Deutsch in der Akademie.", a: "lernen", o: ["wir lernen", "lernen", "lernt", "lernen wir"], h: "بدأت الجملة بالزمان، فيأتي الفعل المصرف مباشرة في الموقع 2." },
      { q: "___ du morgens gerne frischen Tee?", a: "Trinkst", o: ["Trinkst", "Trinkt", "Trinken", "Trinke"], h: "سؤال نعم/لا يبدأ بالفعل المصرف في الموقع 1." },
      { q: "In Berlin ___ die Menschen viele Sprachen.", a: "sprechen", o: ["sprechen", "die Menschen sprechen", "spricht", "gesprochen"], h: "بدأت الجملة بالمكان، فيأتي الفعل المصرف ثانياً." },
      { q: "Wann ___ der Zug nach München ab?", a: "fährt", o: ["fährt", "fahren", "fährst", "abfährt"], h: "سؤال W: أداة الاستفهام ثم الفعل مباشرة بالمركز الثاني." }
    ]
  },
  {
    id: "A1.03", moduleNum: 3, level: "A1",
    titleDe: "Nouns, Grammatical Gender & Nominative Case",
    titleAr: "الأسماء وأدوات التعريف والنكرة والنفي وصيغ الجمع في الرفع",
    drMaiNote: "الجماد في الألمانية قد يكون مؤنثاً أو مذكراً أو محايداً دون منطق بيولوجي، ويجب حفظ الاسم مع أداته.",
    drMaiLogic: "الألمانية تعتمد على جنس الكلمة النحوي (Geschlecht) لتحديد الإعراب وتماسك الجملة.",
    drMaiWarn: "لا تترجم جنس الكلمة من لغتك الأم! الطاولة مذكر (der Tisch)، والشمس مؤنثة (die Sonne)!",
    drMaiTrick: "كل كلمة تنتهي بـ '-ung' أو '-heit' هي مؤنثة die! وكل كلمة تنتهي بـ '-chen' هي محايدة das!",
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
    examples: [
      {
        de: "Der Tisch ist alt, aber die Stühle sind neu.",
        tags: [{ text: "Der Tisch", type: "subj", label: "Nom. Masc" }, { text: "die Stühle", type: "subj", label: "Nom. Plur" }],
        ar: "الطاولة قديمة، ولكن الكراسي جديدة."
      }
    ],
    seedBank: [
      { q: "Das ist ___ Kugelschreiber, das ist ein Bleistift.", a: "kein", o: ["nicht", "kein", "keine", "keinen"], h: "نفي الاسم النكرة المذكر der Stift يكون بـ kein." },
      { q: "Hier steht ___ schöne Lampe.", a: "eine", o: ["ein", "eine", "einen", "einer"], h: "كلمة Lampe مؤنثة تأخذ أداة النكرة eine في الرفع." },
      { q: "Das Buch ist alt, aber die ___ sind neu.", a: "Bücher", o: ["Buchs", "Bücher", "Büchern", "Buche"], h: "جمع das Buch هو die Bücher مع Umlaut و er." },
      { q: "Das ist ___ Kind, das ist ein Erwachsener.", a: "kein", o: ["keine", "kein", "nicht", "keinen"], h: "كلمة Kind محايدة تنفي نكرتها بـ kein." }
    ]
  },
  {
    id: "A1.04", moduleNum: 4, level: "A1",
    titleDe: "The Accusative Case (Akkusativ)",
    titleAr: "حالة النصب (Akkusativ): المفعول به المباشر، تحول المذكر، وأحرف DOGFU",
    drMaiNote: "في حالة النصب (Akkusativ)، المذكر فقط هو الذي تتغير أداته! بقية الأجناس والجمع لا تتغير إطلاقاً.",
    drMaiLogic: "تغيير المذكر يهدف لتمييز الفاعل عن المفعول به صوتياً، بينما المؤنث والمحايد ثابتان.",
    drMaiWarn: "احذر تغيير أداة المؤنث أو المحايد! المؤنث (die/eine) والمحايد (das/ein) والجمع يبقون كما هم!",
    drMaiTrick: "احفظ حروف الجر التي تنصب دائماً باختصار DOGFU: (Durch, Ohne, Gegen, Für, Um).",
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
    examples: [
      {
        de: "Der Mann kauft den teuren Fernseher für seinen Sohn.",
        tags: [{ text: "Der Mann", type: "subj", label: "Nom. Masc" }, { text: "den teuren Fernseher", type: "obj", label: "Akk. Masc" }, { text: "für seinen Sohn", type: "prep", label: "DOGFU + Akk" }],
        ar: "الرجل يشتري التلفاز باهظ الثمن من أجل ابنه."
      }
    ],
    seedBank: [
      { q: "Der Mann kauft ___ neuen Computer.", a: "den", o: ["der", "den", "dem", "das"], h: "المفعول به المذكر المنصوب يتحول من der إلى den." },
      { q: "Er kommt ohne ___ Mantel.", a: "seinen", o: ["sein", "seinen", "seinem", "seiner"], h: "حرف الجر ohne ينصب الاسم بعده دائماً ➔ seinen." },
      { q: "Ich habe ___ großen Bruder in Berlin.", a: "einen", o: ["ein", "einen", "einem", "eine"], h: "فعل haben يأخذ مفعولاً به منصوباً للمذكر ➔ einen." },
      { q: "Liebst du ___? – Ja, von ganzem Herzen.", a: "mich", o: ["ich", "mich", "mir", "mein"], h: "ضمير المتكلم كـ مفعول به منصوب يتحول إلى mich." }
    ]
  },
  {
    id: "A1.05", moduleNum: 5, level: "A1",
    titleDe: "Negation Mechanics: nicht vs. kein",
    titleAr: "قواعد النفي الدقيقة: استخدام nicht مقابل أداة kein ومواقع النفي",
    drMaiNote: "kein مخصصة لنفي الأسماء النكرة المسبوقة بـ ein، بينما nicht تنفي كل ما عدا ذلك!",
    drMaiLogic: "kein تعمل كأداة تعريف سلبية مرافقة للاسم، بينما nicht ظرف نفي ينفي الفعل أو الصفة.",
    drMaiWarn: "لا تستخدم kein مع الأفعال أو الصفات! لا تقل (Das ist kein gut)، بل: (Das ist nicht gut)!",
    drMaiTrick: "إذا قبل الاسم (ein)، انفِه بـ (kein). وإذا كان فعلاً أو صفة أو معرفاً بـ der/die/das، انفِه بـ (nicht).",
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
    examples: [
      {
        de: "Ich habe keine Zeit und ich komme heute nicht.",
        tags: [{ text: "keine Zeit", type: "obj", label: "kein + Nomen" }, { text: "nicht", type: "prep", label: "nicht am Ende" }],
        ar: "ليس لدي وقت ولن آتي اليوم."
      }
    ],
    seedBank: [
      { q: "Der Kaffee ist ___ heiß genug.", a: "nicht", o: ["kein", "nicht", "keine", "nichts"], h: "نفي الصفات يكون دائماً بـ nicht." },
      { q: "Ich habe ___ Geschwister.", a: "keine", o: ["nicht", "kein", "keine", "keinen"], h: "نفي اسم الجمع النكرة يكون بـ keine." },
      { q: "Er kommt heute ___ zum Unterricht.", a: "nicht", o: ["kein", "nicht", "keine", "nichts"], h: "نفي الفعل أو الحضور الفعلي يكون بـ nicht." },
      { q: "Das ist ___ mein Auto.", a: "nicht", o: ["kein", "nicht", "keine", "nichts"], h: "نفي ضمائر الملكية يكون بـ nicht." }
    ]
  },
  {
    id: "A1.06", moduleNum: 6, level: "A1",
    titleDe: "Stem-Changing Verbs (Vokalwechsel im Präsens)",
    titleAr: "الأفعال القوية وتغير الحرف الصوتي في الحاضر (e➔i, e➔ie, a➔ä)",
    drMaiNote: "الأفعال القوية تغير حرفها الصوتي الداخلي لتعطي إيقاعاً نطقياً مميزاً في المضارع.",
    drMaiLogic: "التغير الصوتي يحدث فقط مع الشخصين du و er/sie/es لتسهيل تمييز المخاطب والغائب.",
    drMaiWarn: "لا تغير الحرف الصوتي مع ich أو الجمع! نقول (ich fahre) بدون إمالة، وفقط (du fährst) بالإمالة!",
    drMaiTrick: "جمع ونحن (wir) وأنتم (ihr) يبقون عاديين دائماً بدون أي إمالة صوتية!",
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
    examples: [
      {
        de: "Fährst du mit dem Zug oder nimmst du das Auto?",
        tags: [{ text: "Fährst", type: "verb", label: "Verb (a➔ä)" }, { text: "nimmst", type: "verb", label: "Verb (e➔i)" }],
        ar: "هل تسافر بالقطار أم تأخذ السيارة؟"
      }
    ],
    seedBank: [
      { q: "Er ___ jeden Abend einen Roman.", a: "liest", o: ["lest", "liest", "lese", "gelesen"], h: "فعل lesen يتحول فيه e إلى ie مع er ➔ liest." },
      { q: "Mai, ___ du morgen nach Köln?", a: "fährst", o: ["fahrst", "fährst", "fahrt", "fahren"], h: "فعل fahren يأخذ Umlaut مع du ➔ fährst." },
      { q: "Der Arzt ___ dem Patienten sofort.", a: "hilft", o: ["helft", "hilft", "helfen", "half"], h: "فعل helfen يتحول e إلى i مع er ➔ hilft." },
      { q: "Was ___ du zum Frühstück?", a: "isst", o: ["esst", "isst", "esse", "essen"], h: "فعل essen يتحول e إلى i مع du ➔ isst." }
    ]
  },
  {
    id: "A1.07", moduleNum: 7, level: "A1",
    titleDe: "Possessive Articles (Possessivartikel in Nom. & Akk.)",
    titleAr: "أدوات الملكية في الرفع والنصب وقاعدة إسقاط حرف e في euer",
    drMaiNote: "أدوات الملكية تدل على المالك، وتتبع في نهاياتها تماماً أداة النكرة (ein/eine).",
    drMaiLogic: "الجذر يحدد هوية المالك، والنهاية تحدد جنس وإعراب الشيء المملوك نفسه.",
    drMaiWarn: "انتبه لكلمة euer! عند تأنيث euer تسقط الـ e الداخلية لتسهيل النطق فتصبح: (eure)!",
    drMaiTrick: "فقط عندما يكون الشيء المملوك مذكراً ومنصوباً نضيف اللاحقة -en (meinen, deinen, seinen).",
    formula: "Roots: mein, dein, sein, ihr, unser, euer, ihr, Ihr | Endings match 'ein / eine' pattern",
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
    examples: [
      {
        de: "Mein Vater sucht seinen Schlüssel und meine Mutter hilft ihm.",
        tags: [{ text: "Mein Vater", type: "subj", label: "Nom. Masc" }, { text: "seinen Schlüssel", type: "obj", label: "Akk. Masc" }],
        ar: "والدي يبحث عن مفتاحه ووالدتي تساعده."
      }
    ],
    seedBank: [
      { q: "Mein Vater sucht ___ Schlüssel.", a: "seinen", o: ["sein", "seinen", "seinem", "seine"], h: "مفعول به مذكر منصوب: sein + en = seinen." },
      { q: "Wo wohnt ___ Familie?", a: "eure", o: ["euer", "eure", "euren", "eures"], h: "عائلة مؤنثة، ومع euer تسقط e لتصبح eure." },
      { q: "Hast du ___ Pass dabei?", a: "deinen", o: ["dein", "deinen", "deine", "deinem"], h: "جواز السفر مذكر منصوب فيأخذ deinen." },
      { q: "Das ist ___ Auto, ich habe es gekauft.", a: "mein", o: ["mein", "meinen", "meine", "meiner"], h: "السيارة محايدة في الرفع تبقى بلا نهاية: mein." }
    ]
  },
  {
    id: "A1.08", moduleNum: 8, level: "A1",
    titleDe: "Compound Verb Structures (Satzklammer, Trennbar & Modal)",
    titleAr: "القوس الفعلي: الأفعال المنفصلة وغير المنفصلة وأفعال المودال الستة",
    drMaiNote: "القوس الفعلي (Satzklammer) هو سر بلاغة الألمانية: نفتح قوساً بالفعل المصرف في المركز 2 ونغلقه في آخر كلمة!",
    drMaiLogic: "وضع مكمل الفعل في النهاية يبقي السامع مشدوداً لمعرفة اكتمال المعنى بالفعل المساعد أو السابقة.",
    drMaiWarn: "لا تترك السابقة المنفصلة ملتصقة بالفعل! لا تقل (Ich aufstehe)، بل اقذف السابقة للآخر: (Ich stehe um 6 auf)!",
    drMaiTrick: "السوابق المنفصلة الشائعة: ab, an, auf, aus, ein, mit, vor, zu.",
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
    examples: [
      {
        de: "Wir kaufen heute im Supermarkt ein.",
        tags: [{ text: "kaufen", type: "verb", label: "Pos 2: Stamm" }, { text: "ein", type: "verb", label: "Ende: Präfix" }],
        ar: "نحن نتسوق اليوم في السوبرماركت."
      }
    ],
    seedBank: [
      { q: "Mai steht jeden Morgen um 6 Uhr ___.", a: "auf", o: ["an", "auf", "mit", "aus"], h: "السابقة auf لفعل aufstehen تقذف لنهاية الجملة." },
      { q: "Hier ___ man leider nicht parken.", a: "darf", o: ["darf", "darfst", "dürfen", "dürft"], h: "فعل dürfen مع الضمير man يأخذ darf." },
      { q: "Wir müssen heute viel Grammatik ___.", a: "lernen", o: ["lernt", "lernen", "lerne", "gelernt"], h: "مع فعل المودال يأتي الفعل الأساسي مصدراً في النهاية." },
      { q: "Er ruft seine Mutter jeden Sonntag ___.", a: "an", o: ["an", "auf", "aus", "mit"], h: "سابقة فعل الاتصال anrufen تذهب للنهاية." }
    ]
  },
  {
    id: "A1.09", moduleNum: 9, level: "A1",
    titleDe: "The Imperative Mood (Imperativ)",
    titleAr: "صيغة الأمر للمفرد والجمع والاحترام والأفعال الشاذة (Sei leise!)",
    drMaiNote: "صيغة الأمر بسيطة ومباشرة لأنها تحذف الفاعل في صيغتي المخاطب المفرد du والجمع ihr!",
    drMaiLogic: "الأمر موجه لمن يقف أمامك مباشرة، لذا يسقط الضمير اختصاراً وبلاغة.",
    drMaiWarn: "إبقاء st مع du خطأ! لا تقل (Kommst hier)، بل احذف st والضمير: (Komm hier)!",
    drMaiTrick: "فعل الكينونة sein شاذ في الأمر: Sei! للمفرد، Seid! للجمع، Seien Sie! للاحترام.",
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
    examples: [
      {
        de: "Gib mir bitte deine Telefonnummer!",
        tags: [{ text: "Gib", type: "verb", label: "Imperativ du" }, { text: "mir", type: "obj", label: "Dativobjekt" }],
        ar: "أعطني من فضلك رقم هاتفك!"
      }
    ],
    seedBank: [
      { q: "Bitte ___ leise im Unterricht!", a: "sei", o: ["bist", "sei", "seid", "seien"], h: "أمر فعل الكينونة sein مع المفرد du هو Sei!" },
      { q: "___ Sie bitte hier an der nächsten Haltestelle aus!", a: "Steigen", o: ["Steig", "Steigt", "Steigen", "Steigst"], h: "أمر الاحترام يسبق الضمير بصيغة المصدر: Steigen Sie." },
      { q: "Kinder, ___ eure Hausaufgaben jetzt!", a: "macht", o: ["machen", "macht", "machst", "mache"], h: "أمر الجمع ihr يحذف الضمير فقط: macht!" },
      { q: "___ bitte den Text laut vor!", a: "Lies", o: ["Lese", "Lies", "Liest", "Lesen"], h: "فعل lesen يحتفظ بالكسرة ie في أمر المفرد: Lies!" }
    ]
  },
  {
    id: "A1.10", moduleNum: 10, level: "A1",
    titleDe: "The Dative Case (Dativ Basics)",
    titleAr: "أساسيات المجرور (Dativ): الأدوات، الضمائر، أفعال الجر، وحروف الجر الثابتة",
    drMaiNote: "الـ Dativ يقابل الاسم المجرور بحرف الجر أو المفعول غير المباشر المستفيد من الفعل في العربية.",
    drMaiLogic: "تغير الأدوات في Dativ يوضح للمستمع لمن يُوجه العطاء أو المساعدة بدقة.",
    drMaiWarn: "المؤنث في Dativ يتحول إلى (der)! لا تظنها مذكراً، بل هي مؤنث في حالة جر: (der Frau)!",
    drMaiTrick: "احفظ أنشودة حروف الجر التي تجر دائماً: (Aus, bei, mit, nach, seit, von, zu).",
    formula: "Masc/Neut: dem / einem | Fem: der / einer | Plur: den + Noun-n | Pronouns: mir, dir, ihm, ihr",
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
    examples: [
      {
        de: "Das Essen schmeckt den Gästen sehr gut.",
        tags: [{ text: "Das Essen", type: "subj", label: "Subjekt" }, { text: "den Gästen", type: "obj", label: "Dat. Plur + -n" }],
        ar: "الطعام يعجب الضيوف ومذاقه لذيذ بالنسبة لهم."
      }
    ],
    seedBank: [
      { q: "Ich fahre am Wochenende mit ___ Zug.", a: "dem", o: ["den", "dem", "das", "der"], h: "حرف mit يفرض Dativ دائماً: der Zug ➔ dem Zug." },
      { q: "Der Lehrer hilft ___ Schülern.", a: "den", o: ["die", "den", "dem", "der"], h: "جمع Dativ يأخذ الأداة den مع إضافة n للاسم." },
      { q: "Wie geht es ___? – Mir geht es super!", a: "dir", o: ["dich", "dir", "du", "dein"], h: "السؤال عن الحال يتطلب ضمير Dativ للمخاطب ➔ dir." },
      { q: "Das Buch gehört ___ Schwester.", a: "meiner", o: ["meine", "meiner", "meinem", "meinen"], h: "فعل gehört يتطلب Dativ، والمؤنث يأخذ meiner." }
    ]
  },
  {
    id: "A1.11", moduleNum: 11, level: "A1",
    titleDe: "Spatial & Temporal Prepositions (A1 Focus)",
    titleAr: "حروف الجر الزمانية والمكانية ومدخل للأحرف المشتركة (Wo? + Dativ)",
    drMaiNote: "حروف الزمان مقسمة بدقة متناهية: الساعات المحددة تأخذ um، والأيام تأخذ am، والأشهر والفصول تأخذ im.",
    drMaiLogic: "am مختصرة من an dem للمذكر، و im مختصرة من in dem للمحايد والمذكر.",
    drMaiWarn: "الخلط بين am و im: الأيام تأخذ am (am Montag)، والأشهر تأخذ im (im Juli).",
    drMaiTrick: "السؤال عن الموقع الثابت (Wo? أين؟) يعطي Dativ دائماً مع أحرف الجر المشتركة.",
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
    examples: [
      {
        de: "Der Termin ist am Mittwoch um zehn Uhr.",
        tags: [{ text: "am Mittwoch", type: "prep", label: "an dem + Dat" }, { text: "um zehn Uhr", type: "prep", label: "um + Akk" }],
        ar: "الموعد يوم الأربعاء في تمام الساعة العاشرة."
      }
    ],
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
    drMaiNote: "أدوات ADUSO أدوات مسالمة: تربط بين جملتين كاملتين دون إحداث أي تغيير في ترتيب الكلمات الطبيعي!",
    drMaiLogic: "تسمى بالموقع صفر لأنها تقف كحاجز مستقل بين جملتين، ولكل جملة فاعلها وفعلها بالمركز الثاني.",
    drMaiWarn: "الخلط بين denn و weil: أداة denn موقعها صفر والفعل يبقى ثانياً، بينما weil تطرد الفعل لآخر الجملة!",
    drMaiTrick: "احفظ حروف الكلمة السحرية: ADUSO (Aber, Denn, Und, Sondern, Oder).",
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
    examples: [
      {
        de: "Er lernt Deutsch, denn er will in Deutschland arbeiten.",
        tags: [{ text: "denn", type: "prep", label: "Pos 0" }, { text: "er", type: "subj", label: "Pos 1" }, { text: "will", type: "verb", label: "Pos 2" }],
        ar: "هو يتعلم الألمانية، لأنه يريد العمل في ألمانيا."
      }
    ],
    seedBank: [
      { q: "Ich lerne Deutsch, ___ ich möchte in Deutschland arbeiten.", a: "denn", o: ["weil", "denn", "deshalb", "dass"], h: "الفاعل في 1 والفعل في 2 ➔ نستخدم أداة الموقع صفر denn." },
      { q: "Ich trinke keinen Kaffee, ___ Tee.", a: "sondern", o: ["aber", "sondern", "denn", "oder"], h: "التصحيح المباشر بعد النفي kein يتطلب sondern." },
      { q: "Er hat viel Geld, ___ er ist nicht glücklich.", a: "aber", o: ["aber", "denn", "sondern", "weil"], h: "أداة التعارض بالموقع صفر هي aber." },
      { q: "Kommst du heute ___ sehen wir uns morgen?", a: "oder", o: ["aber", "oder", "denn", "sondern"], h: "أداة التخيير بالموقع صفر هي oder." }
    ]
  },
  {
    id: "A1.13", moduleNum: 13, level: "A1",
    titleDe: "Past Narration I: Perfekt & Präteritum Essentials",
    titleAr: "السرد الماضي 1: ماضي war/hatte والماضي التام (Perfekt) مع haben و sein",
    drMaiNote: "أهنئكم بختام المستوى A1! الماضي التام (Perfekt) هو لغة الحديث اليومي في ألمانيا لسرد ما حدث.",
    drMaiLogic: "الألمان يستخدمون الماضي التام في الكلام، بينما يحتفظون بالماضي البسيط Präteritum للأفعال المساعدة war و hatte.",
    drMaiWarn: "أفعال السفر والحركة تأخذ sein كمساعد وليس haben (Ich bin gefahren وليس ich habe gefahren)!",
    drMaiTrick: "الأفعال المنتهية بـ -ieren لا تأخذ بادئة ge- في الماضي مطلقاً (studieren ➔ studiert)!",
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
    examples: [
      {
        de: "Ich habe gestern einen Kuchen gebacken.",
        tags: [{ text: "habe", type: "verb", label: "Pos 2: haben" }, { text: "gebacken", type: "verb", label: "Ende: Partizip II" }],
        ar: "لقد خبزت بالأمس كعكة."
      }
    ],
    seedBank: [
      { q: "Gestern ___ wir nach Frankfurt gefahren.", a: "sind", o: ["haben", "sind", "hatten", "waren"], h: "فعل السفر fahren يتطلب الفعل المساعد sein." },
      { q: "Letztes Jahr ___ ich in Italien.", a: "war", o: ["habe", "bin", "war", "hatte"], h: "الماضي البسيط لفعل الكينونة sein مع المتكلم ich هو war." },
      { q: "Er hat Medizin in Heidelberg ___.", a: "studiert", o: ["gestudiert", "studiert", "studieren", "studierte"], h: "أفعال -ieren لا تأخذ ge- في التصريف الثالث." },
      { q: "Wann bist du heute Morgen ___?", a: "aufgestanden", o: ["aufstehen", "aufgestanden", "geaufstanden", "aufsteht"], h: "الفعل المنفصل يضع ge- في الوسط: auf-ge-standen." }
    ]
  },

  // =========================================================================
  // PART II: GOETHE-ZERTIFIKAT A2 (MODULES 14 TO 30)
  // =========================================================================
  {
    id: "A2.01", moduleNum: 14, level: "A2",
    titleDe: "Advanced Perfekt & Strong Verbs (Ablautreihen)",
    titleAr: "الماضي التام المتقدم وسلاسل الأفعال الشاذة وتصريف السوابق غير المنفصلة",
    drMaiNote: "أهلاً بكم في المستوى A2! هنا نتقن تصريف الأفعال الشاذة عبر حفظ التحول الصوتي (Ablaut) للأفعال القوية.",
    drMaiLogic: "البادئات غير المنفصلة مثل be- أو ver- تمنع صوتياً إضافة بادئة ge- قبلها لعدم توالي السوابق.",
    drMaiWarn: "احذر قول (gebezahlt) أو (geverstanden)! الأفعال بـ be, ver, ent, er لا تأخذ ge- إطلاقاً!",
    drMaiTrick: "احفظ الأفعال في مجموعات متناغمة: trinken/getrunken, finden/gefunden.",
    formula: "Inseparable: No ge- (bezahlt, verstanden) | Ablaut mutations: ei➔ie, i➔u, ie➔o, e➔o",
    paradigmHeaders: ["Mutation", "Infinitive", "Partizip II", "Meaning", "Example"],
    paradigmRows: [
      ["ei ➔ ie", "schreiben", "geschrieben", "to write", "Er hat einen Brief geschrieben."],
      ["i ➔ u", "trinken", "getrunken", "to drink", "Wir haben Tee getrunken."],
      ["ie ➔ o", "fliegen", "geflogen (sein)", "to fly", "Sie ist nach Berlin geflogen."],
      ["Inseparable", "bezahlen", "bezahlt (no ge-)", "to pay", "Hast du bezahlt?"]
    ],
    rules: [
      "Inseparable prefixes (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-) never take a ge- prefix.",
      "Strong verbs undergo root vowel shifts (Ablautreihen) in Partizip II ending in -en.",
      "Mixed verbs feature both stem vowel mutations and weak dental suffix -t (bringen ➔ gebracht)."
    ],
    examples: [
      {
        de: "Die Studentin hat den Text ohne Wörterbuch verstanden.",
        tags: [{ text: "hat", type: "verb", label: "Hilfsverb" }, { text: "verstanden", type: "verb", label: "Partizip II (Untrennbar)" }],
        ar: "فهمت الطالبة النص بدون قاموس."
      }
    ],
    seedBank: [
      { q: "Hast du die Rechnung schon ___?", a: "bezahlt", o: ["gebezahlt", "bezahlt", "bezahlen", "gezahlt"], h: "البادئة be- تسقط منها ge- في التصريف الثالث." },
      { q: "Wir haben gestern zu viel Tee ___.", a: "getrunken", o: ["getrinkt", "getrunken", "getrank", "trinken"], h: "فعل trinken يتحول صوتياً إلى getrunken." },
      { q: "Er hat mir einen langen Brief ___.", a: "geschrieben", o: ["geschreibt", "geschrieben", "geschriebt", "schreiben"], h: "فعل schreiben يتحول إلى geschrieben." },
      { q: "Sie hat das schwere Wort sofort ___.", a: "verstanden", o: ["geverstanden", "verstanden", "versteht", "verstehtet"], h: "البادئة ver- لا تأخذ ge- في التصريف الثالث." }
    ]
  },
  {
    id: "A2.02", moduleNum: 15, level: "A2",
    titleDe: "Präteritum of Modal Verbs",
    titleAr: "ماضي أفعال المودال في الماضي البسيط (musste, konnte, durfte...)",
    drMaiNote: "في الحديث عن الماضي، الألمان يستبدلون Perfekt دائماً بصيغة Präteritum الأنيقة لأفعال المودال!",
    drMaiLogic: "صيغة Präteritum أسهل بكثير لأنها تحافظ على المصدر في نهاية الجملة وتستغني عن الأفعال المساعدة.",
    drMaiWarn: "احذر إبقاء الأوملاوت! ماضي أفعال المودال يسقط الأوملاوت كلياً: musste, konnte, durfte!",
    drMaiTrick: "تصريف المتكلم ich يطابق الغائب er/sie/es تماماً في ماضي المودال (ich musste = er musste).",
    formula: "Drop Umlaut + Weak Past Endings: -te, -test, -te, -ten, -tet, -ten | 1st sing == 3rd sing",
    paradigmHeaders: ["Infinitive", "ich / er Form", "wir / sie Form", "Example"],
    paradigmRows: [
      ["müssen (ü➔u)", "musste", "mussten", "Er musste lange arbeiten."],
      ["können (ö➔o)", "konnte", "konnten", "Ich konnte nicht kommen."],
      ["dürfen (ü➔u)", "durfte", "durften", "Wir durften nicht parken."],
      ["wollen / sollen", "wollte / sollte", "wollten / sollten", "Sie wollte Deutsch lernen."]
    ],
    rules: [
      "Modal verbs are universally expressed in the Präteritum rather than Perfekt in spoken/written German.",
      "Modal stems drop their umlauts and append weak past endings: -te, -test, -te, -ten, -tet, -ten.",
      "Sentence structure: Modal in Pos 2, full infinitive verb remains at the clause boundary."
    ],
    examples: [
      {
        de: "Gestern konnte ich nicht zur Party kommen.",
        tags: [{ text: "konnte", type: "verb", label: "Modal Prät (Pos 2)" }, { text: "kommen", type: "verb", label: "Infinitiv am Ende" }],
        ar: "بالأمس لم أستطع الحضور إلى الحفلة."
      }
    ],
    seedBank: [
      { q: "Gestern war ich krank, deshalb ___ ich zum Arzt gehen.", a: "musste", o: ["muss", "musste", "gemusst", "müsste"], h: "ماضي müssen يسقط الأوملاوت ➔ musste." },
      { q: "Als Kind ___ er nach 20 Uhr nicht fernsehen.", a: "durfte", o: ["darf", "durfte", "gedurft", "dürfte"], h: "ماضي dürfen يسقط الأوملاوت ➔ durfte." },
      { q: "Wir ___ gestern keine Zeit, wir ___ lernen.", a: "hatten / mussten", o: ["waren / konnten", "hatten / mussten", "haben / müssen", "waren / wollten"], h: "ماضي haben هو hatten وماضي müssen هو mussten." },
      { q: "___ du als Kind Klavier spielen?", a: "Konntest", o: ["Kannst", "Konntest", "Könntest", "Gekonnt"], h: "ماضي können مع du يسقط الأوملاوت ➔ konntest." }
    ]
  },
  {
    id: "A2.03", moduleNum: 16, level: "A2",
    titleDe: "Dual-Case Spatial Prepositions (Wechselpräpositionen)",
    titleAr: "أحرف الجر المشتركة التسعة: ثنائية الموقع (Wo) مقابل الاتجاه (Wohin)",
    drMaiNote: "أهم قاعدة في قواعد A2! تسعة أحرف جر تعتمد على نيتك: هل أنت مستقر وثابت أم تتحرك وتغير مكانك؟",
    drMaiLogic: "الثبات في المكان دون حركة انتقالية يتطلب Dativ، بينما الحركة وعبور الحدود تتطلب Akkusativ.",
    drMaiWarn: "الخلط بين (ضع عمودياً/stellen) و (واقف عمودياً/stehen). stellen حركة ونصب، و stehen ثبات وجر!",
    drMaiTrick: "سؤال Wo? (أين؟ ثبات) = Dativ | سؤال Wohin? (إلى أين؟ حركة) = Akkusativ.",
    formula: "Wo? (Static Rest) ➔ DATIV | Wohin? (Directional Motion) ➔ AKKUSATIV",
    paradigmHeaders: ["Transitive Action (Wohin? ➔ Akk)", "Intransitive State (Wo? ➔ Dat)", "Contrast Meaning"],
    paradigmRows: [
      ["stellen (Ich stelle die Vase auf den Tisch)", "stehen (Die Vase steht auf dem Tisch)", "عمودي: يضع مقابل واقف"],
      ["legen (Er legt das Buch auf das Bett)", "liegen (Das Buch liegt auf dem Bett)", "أفقي: يضع مقابل مستلقٍ"],
      ["setzen (Sie setzt das Kind auf den Stuhl)", "sitzen (Das Kind sitzt auf dem Stuhl)", "جلوس: يُجلس مقابل جالس"]
    ],
    rules: [
      "Nine dual-case prepositions: an, auf, hinter, in, neben, über, unter, vor, zwischen.",
      "Static location / continuous rest answering 'Wo?' mandates Dative.",
      "Directional motion across boundaries answering 'Wohin?' mandates Accusative."
    ],
    examples: [
      {
        de: "Ich stelle die Tasse auf den Tisch, und jetzt steht sie auf dem Tisch.",
        tags: [{ text: "stelle", type: "verb", label: "Aktion (Wohin?)" }, { text: "auf den Tisch", type: "prep", label: "Akkusativ" }, { text: "steht", type: "verb", label: "Zustand (Wo?)" }, { text: "auf dem Tisch", type: "prep", label: "Dativ" }],
        ar: "أنا أضع الفنجان على الطاولة (حركة)، والآن هو يقف على الطاولة (ثبات)."
      }
    ],
    seedBank: [
      { q: "Ich stelle die Tasse auf ___ Tisch.", a: "den", o: ["dem", "den", "der", "das"], h: "فعل حركة stellen يسأل بـ Wohin؟ فيتطلب Akkusativ مذكر ➔ den Tisch." },
      { q: "Die Tasse steht auf ___ Tisch.", a: "dem", o: ["den", "dem", "das", "der"], h: "فعل ثبات stehen يسأل بـ Wo؟ فيتطلب Dativ مذكر ➔ dem Tisch." },
      { q: "Er hängt das Bild an ___ Wand.", a: "die", o: ["die", "der", "den", "dem"], h: "حركة تعليق الصورة على الحائط تتطلب Akkusativ مؤنث ➔ die Wand." },
      { q: "Das Bild hängt an ___ Wand.", a: "der", o: ["die", "der", "den", "dem"], h: "الصورة معلقة وثابتة تتطلب Dativ مؤنث ➔ der Wand." }
    ]
  },
  {
    id: "A2.04", moduleNum: 17, level: "A2",
    titleDe: "Reflexive Verbs & Reflexive Pronouns (Reflexivpronomen)",
    titleAr: "الأفعال الانعكاسية والضمائر المنعكسة في النصب والجر (mir die Zähne putzen)",
    drMaiNote: "الأفعال الانعكاسية تعبر عن فعل يقوم به الشخص ويعود أثره على نفسه، مثل الاغتسال وارتداء الثياب.",
    drMaiLogic: "إذا ذكر مفعول به صريح (كالأسنان أو اليدين)، يصبح ذلك الشيء هو المنصوب، ويتحول الشخص لمستفيد مجرور Dativ.",
    drMaiWarn: "لا تقل (Ich putze mich die Zähne)! إذا حددت جزءاً من الجسم، يتحول mich إلى mir: (Ich putze mir die Zähne)!",
    drMaiTrick: "الضمير sich للغائب المفرد والجمع لا يتغير أبداً في النصب والجر.",
    formula: "Standard: Accusative (mich, dich, sich) | If distinct direct object present: Dative (mir, dir, sich)",
    paradigmHeaders: ["Personal Pronoun", "Reflexiv (Akkusativ)", "Reflexiv (Dativ)", "Example Sentence"],
    paradigmRows: [
      ["ich", "mich", "mir", "Ich wasche mich / Ich wasche mir die Hände."],
      ["du", "dich", "dir", "Du ziehst dich an / Du ziehst dir die Jacke an."],
      ["er / sie / es", "sich", "sich", "Er freut sich / Er putzt sich die Zähne."],
      ["wir", "uns", "uns", "Wir treffen uns im Park."],
      ["ihr", "euch", "euch", "Ihr setzt euch auf die Bank."]
    ],
    rules: [
      "Accusative reflexive pronoun is used when there is no other direct object in the clause.",
      "Dative reflexive pronoun is mandatory when an explicit accusative direct object is already present.",
      "3rd person singular and plural is invariant: 'sich' in both accusative and dative."
    ],
    examples: [
      {
        de: "Ich ziehe mir eine warme Jacke an.",
        tags: [{ text: "mir", type: "obj", label: "Reflexiv: Dativ" }, { text: "eine warme Jacke", type: "obj", label: "Akkusativobjekt" }],
        ar: "أنا أرتدي لنفسي سترة دافئة."
      }
    ],
    seedBank: [
      { q: "Ich ziehe ___ eine warme Jacke an.", a: "mir", o: ["mich", "mir", "mein", "sich"], h: "وجود مفعول به صريح (Jacke) يحول الضمير المنعكس إلى Dativ ➔ mir." },
      { q: "Freust du ___ auf den Urlaub?", a: "dich", o: ["dir", "dich", "du", "dein"], h: "فعل sich freuen بدون مفعول آخر يأخذ Akkusativ ➔ dich." },
      { q: "Ahmad wäscht ___ jeden Morgen das Gesicht.", a: "sich", o: ["ihn", "ihm", "sich", "sein"], h: "ضمير الغائب المنعكس دائماً هو sich." },
      { q: "Wir treffen ___ morgen um 18 Uhr.", a: "uns", o: ["uns", "euch", "wir", "sich"], h: "الضمير المنعكس لنحن wir هو uns." }
    ]
  },
  {
    id: "A2.05", moduleNum: 18, level: "A2",
    titleDe: "Verbs with Prepositions & Prepositional Adverbs",
    titleAr: "أفعال بحروف جر ثابتة وأدوات الاستفهام الإشارية (Worauf/Darauf مقابل Auf wen)",
    drMaiNote: "أفعال حروف الجر الثابتة تتطلب حفظ الحرف مع إعرابه. لتبسيط الكلام، يدمج الألمان Da و Wo مع الحرف.",
    drMaiLogic: "دمج Da و Wo مع الحرف يمنع تكرار الاسم الطويل غير العاقل ويختصر العبارة بذكاء.",
    drMaiWarn: "لا تسأل عن إنسان عاقل بـ Worauf! إذا كان السؤال عن شخص قل: (Auf wen wartest du?)!",
    drMaiTrick: "للجماد: Wo + حرف الجر (Worauf). للأشخاص: حرف الجر + ضمير الإعراب (Auf wen).",
    formula: "Things/Ideas: Wo(r)- / Da(r)- + Preposition | Persons: Preposition + Declined Pronoun",
    paradigmHeaders: ["Target Entity", "Question Form", "Answer / Statement", "Example"],
    paradigmRows: [
      ["Thing / Idea", "Wo(r) + Preposition", "Da(r) + Preposition", "Worauf wartest du? – Darauf."],
      ["Person (Akk)", "Preposition + wen", "Preposition + ihn/sie", "Auf wen wartest du? – Auf ihn."],
      ["Person (Dat)", "Preposition + wem", "Preposition + ihm/ihr", "Mit wem sprichst du? – Mit ihr."]
    ],
    rules: [
      "Inquire/refer to things using pronominal adverbs: da(r)- and wo(r)- compounds (insert -r- if vowel starts).",
      "For persons, retain the raw preposition and decline the interrogative or personal pronoun.",
      "Core governed prepositions: warten auf (+Akk), denken an (+Akk), träumen von (+Dat)."
    ],
    examples: [
      {
        de: "Worauf wartest du? – Ich warte darauf, dass der Bus kommt.",
        tags: [{ text: "Worauf", type: "prep", label: "Sache Frage" }, { text: "darauf", type: "prep", label: "Pronominaladverb" }],
        ar: "على ماذا تنتظر؟ – أنا أنتظر أن يأتي الحافلة."
      }
    ],
    seedBank: [
      { q: "___ wartest du? – Auf den Bus.", a: "Worauf", o: ["Auf wen", "Worauf", "Woran", "Womit"], h: "السؤال عن جماد بحرف auf يتطلب Worauf." },
      { q: "___ wartest du? – Auf meinen Bruder.", a: "Auf wen", o: ["Worauf", "Auf wen", "Woran", "Mit wem"], h: "السؤال عن شخص عاقل بحرف auf يتطلب Auf wen." },
      { q: "Denkst du an die Prüfung? – Ja, ich denke ___.", a: "daran", o: ["darauf", "daran", "davon", "damit"], h: "الإشارة لجماد بحرف an تدمج da + r + an ➔ daran." },
      { q: "Mit ___ hast du gestern telefoniert?", a: "wem", o: ["wen", "wem", "wer", "womit"], h: "حرف الجر mit يجر العاقل Dativ ➔ Mit wem." }
    ]
  },
  {
    id: "A2.06", moduleNum: 19, level: "A2",
    titleDe: "Subordinate Clauses I (weil, dass, wenn, obwohl)",
    titleAr: "الجمل الجانبية وطرد الفعل للنهاية (weil, dass, wenn, obwohl) وقواعد الفواصل",
    drMaiNote: "في الجمل الجانبية، أداة الربط تعمل كحارس طرد: تطرد الفعل المصرف لآخر الجملة قبل النقطة مباشرة!",
    drMaiLogic: "وضع الفعل في النهاية يتيح للسامع الاستماع لكامل التفاصيل والظروف قبل معرفة النتيجة والحدث.",
    drMaiWarn: "احذر وضع الفعل ثانياً بعد weil! لا تقل: (weil ich bin krank)، بل: (weil ich krank bin)!",
    drMaiTrick: "المعادلة: فاصلة ➔ أداة الربط ➔ الفاعل ➔ بقية الكلام ➔ الفعل المصرف آخر كلمة!",
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
    examples: [
      {
        de: "Wenn das Wetter schön ist, machen wir ein Picknick.",
        tags: [{ text: "Wenn das Wetter schön ist", type: "subj", label: "Nebensatz Pos 1" }, { text: "machen", type: "verb", label: "Hauptsatz Verb Pos 2" }, { text: "wir", type: "subj", label: "Subjekt Pos 3" }],
        ar: "إذا كان الطقس جميلاً، سنقوم نحن بنزهة."
      }
    ],
    seedBank: [
      { q: "Ich lerne Deutsch, weil ich in Deutschland ___.", a: "arbeiten will", o: ["will arbeiten", "arbeiten will", "arbeite will", "will gearbeitet"], h: "قوس الجملة الجانبية: المصدر أولاً ثم المودال المصرف في آخر كلمة." },
      { q: "Wenn es morgen regnet, ___ wir zu Hause.", a: "bleiben", o: ["wir bleiben", "bleiben", "bleiben wir", "geblieben"], h: "تقدم الجملة الجانبية يجعل فعل الجملة الرئيسية يلي الفاصلة فوراً." },
      { q: "Lukas weiß, dass Mai sehr gut ___.", a: "kocht", o: ["kocht", "kochen", "gekocht", "kochte"], h: "أداة dass تطرد الفعل المصرف kocht لآخر الجملة." },
      { q: "Er geht spazieren, obwohl es stark ___.", a: "schneit", o: ["schneien", "schneit", "geschneit", "schneite"], h: "أداة obwohl تطرد الفعل المصرف لنهاية الجملة." }
    ]
  },
  {
    id: "A2.07", moduleNum: 20, level: "A2",
    titleDe: "Temporal Subordinate Clauses (als vs. wenn)",
    titleAr: "أدوات الربط الزمنية: التمييز الدقيق بين als و wenn في الماضي وأدوات التتابع",
    drMaiNote: "أشهر سؤال يربك الطلاب في امتحان A2: متى أستخدم als ومتى أستخدم wenn؟ الفرق دقيق وواضح!",
    drMaiLogic: "Als مخصصة لحدث فريد في الماضي وقع مرة واحدة، بينما Wenn مخصصة للأحداث المتكررة أو الحاضر والمستقبل.",
    drMaiWarn: "لا تستخدم wenn مع مرحلة الطفولة في الماضي! الطفولة حدثت مرة واحدة فقط في ماضيك ➔ (Als ich ein Kind war)!",
    drMaiTrick: "إذا أمكنك وضع كلمة (دائماً / immer) قبلها استخدم Wenn. وإذا كان حدثاً لمرة واحدة استخدم Als.",
    formula: "als = Single, completed past event / period | wenn = Present/future OR repeated past (immer wenn)",
    paradigmHeaders: ["Conjunction", "Time Frame", "Frequency", "Example"],
    paradigmRows: [
      ["als", "Past ONLY (الماضي فقط)", "Single event (مرة واحدة)", "Als ich 18 Jahre alt war..."],
      ["wenn", "Present / Future", "Any frequency (الحاضر والمستقبل)", "Wenn ich Feierabend habe..."],
      ["(immer) wenn", "Past (الماضي المتكرر)", "Repeated events (كلما / كل مرة)", "Immer wenn er mich besuchte..."]
    ],
    rules: [
      "Use 'als' exclusively for a single, non-recurring event or unique continuous state in the past.",
      "Use 'wenn' for all present and future occurrences, or repeated past events (interchangeable with 'immer wenn').",
      "Sequencing conjunctions: 'bevor' (before), 'nachdem' (after), 'während' (while/simultaneous actions)."
    ],
    examples: [
      {
        de: "Als wir in Berlin ankamen, regnete es sehr stark.",
        tags: [{ text: "Als", type: "prep", label: "Single Past" }, { text: "ankamen", type: "verb", label: "Verb am Ende" }, { text: "regnete", type: "verb", label: "Verb Pos 2" }],
        ar: "عندما وصلنا إلى برلين، كانت السماء تمطر بغزارة."
      }
    ],
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
    drMaiNote: "هذه الكلمات ظروف قوية تحتل الموقع 1 في الجملة، وتجبر الفعل على المجيء في الموقع 2 مباشرة!",
    drMaiLogic: "ينقلب الفاعل بعدها لأنها جزء فعلي من الجملة الثانية، وتطبق عليها قاعدة الفعل بالمركز الثاني الصارمة.",
    drMaiWarn: "احذر وضع الفاعل بين الأداة والفعل! لا تقل: (trotzdem ich gehe)، بل اعكس فوراً: (trotzdem gehe ich)!",
    drMaiTrick: "المقارنة: weil (الفعل بالآخر) | denn (الموقع صفر والفعل بـ 2) | deshalb (الموقع 1 والفعل بـ 2).",
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
    examples: [
      {
        de: "Es regnete in Strömen; trotzdem gingen wir spazieren.",
        tags: [{ text: "trotzdem", type: "prep", label: "Pos 1: Adverb" }, { text: "gingen", type: "verb", label: "Pos 2: Verb" }, { text: "wir", type: "subj", label: "Pos 3: Subjekt" }],
        ar: "كانت السماء تمطر بغزارة؛ ورغم ذلك خرجنا نتنزه."
      }
    ],
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
    teacherNote: "في ألمانيا، التحدث بذوق وأدب يتطلب صياغة السؤال غير المباشر بدلاً من الهجوم بالسؤال المباشر!",
    drMaiLogic: "السؤال غير المباشر جملة مفعولية جانبية تابعة لافتتاحية مهذبة، لذا يطبق عليها قانون طرد الفعل للنهاية.",
    drMaiWarn: "إذا لم يكن في السؤال أداة W، يجب حتماً أن تربط الجملة بـ (ob) وتضع الفعل بالآخر!",
    drMaiTrick: "الافتتاحية المهذبة (Können Sie mir sagen...) ➔ أداة السؤال ➔ الفعل في المركز الأخير.",
    formula: "Matrix Clause, + ob / W-Word + ... + Finite Verb (Absolute Clause End)",
    paradigmHeaders: ["Direct Question Type", "Subordinate Connector", "Word Order", "Indirect Polite Example"],
    paradigmRows: [
      ["Ja/Nein-Frage", "ob (فيما إذا)", "Verb am Ende", "Wissen Sie, ob der Zug Verspätung hat?"],
      ["W-Frage", "Same W-Word (نفس الأداة)", "Verb am Ende", "Können Sie mir sagen, wo der Bahnhof ist?"]
    ],
    rules: [
      "Indirect questions convert direct questions into polite subordinate clauses setting the verb to the end.",
      "Direct yes/no questions use the subordinating conjunction 'ob' (whether/if).",
      "Direct open questions retain their original question word (wo, wann, wie, warum) as the connector."
    ],
    examples: [
      {
        de: "Wissen Sie, wie viel diese Fahrkarte kostet?",
        tags: [{ text: "Wissen Sie", type: "verb", label: "Einleitung" }, { text: "wie viel", type: "prep", label: "W-Frage" }, { text: "kostet", type: "verb", label: "Verb am Ende" }],
        ar: "هل تعلم حضرتك كم يبلغ ثمن هذه التذكرة؟"
      }
    ],
    seedBank: [
      { q: "Können Sie mir sagen, ___ der Bus heute noch kommt?", a: "ob", o: ["dass", "ob", "wann", "wie"], h: "سؤال نعم/لا غير المباشر يربط دائماً بـ ob." },
      { q: "Ich möchte gerne wissen, wo der Bahnhof ___.", a: "ist", o: ["ist", "ist er", "er ist", "sei"], h: "السؤال غير المباشر جملة جانبية: الفعل يوضع في آخر كلمة." },
      { q: "Weißt du, um wie viel Uhr der Film ___?", a: "anfängt", o: ["anfängt", "fängt an", "angefangen", "anfangen"], h: "الفعل المنفصل يجمع في نهاية السؤال غير المباشر." },
      { q: "Darf ich fragen, wie Sie ___?", a: "heißen", o: ["heißen", "heißt", "geheißen", "heiße"], h: "الفعل المصرف يوضع في نهاية السؤال غير المباشر." }
    ]
  },
  {
    id: "A2.10", moduleNum: 23, level: "A2",
    titleDe: "Adjective Declination (Adjektivdeklination)",
    titleAr: "منظومة تصريف نهايات الصفات الكاملة (الضعيفة والمختلطة والقوية)",
    drMaiNote: "أهلاً بكم في كابوس الطلاب الشهير! سأجعله أسهل قاعدة تفهمونها بحيلة الإشارة المرورية.",
    drMaiLogic: "تضاف نهايات للصفات لكي تخبر السامع بإعراب وجنس الاسم إذا كانت الأداة لم توضح ذلك بشكل كافٍ.",
    drMaiWarn: "احفظ هذه القاعدة المنقذة: أي صفة في الـ Dativ أو الجمع تأخذ النهاية (-en) بدون تردد!",
    drMaiTrick: "إذا كانت الأداة واضحة (der/die/das)، فالصفة خفيفة (-e). وإذا كانت نكرة (ein)، تظهر الصفة علامة الجنس (-er للمذكر، -es للمحايد).",
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
    examples: [
      {
        de: "Ein fleißiger Student hat ein neues Buch gekauft.",
        tags: [{ text: "fleißiger", type: "subj", label: "Signal -er" }, { text: "neues", type: "obj", label: "Signal -es" }],
        ar: "اشترى طالب مجتهد كتاباً جديداً."
      }
    ],
    seedBank: [
      { q: "Ein ___ Student hat die schwierige Prüfung bestanden.", a: "fleißiger", o: ["fleißige", "fleißiger", "fleißigen", "fleißiges"], h: "المذكر بعد ein في الرفع يحتاج لإظهار علامة der عبر الصفة ➔ fleißiger." },
      { q: "Ich helfe der ___ Dame über die Straße.", a: "alten", o: ["alte", "alten", "alter", "altes"], h: "أي صفة في حالة الجر Dativ تأخذ دائماً -en ➔ alten." },
      { q: "Mai hat ein ___ Auto gekauft.", a: "neues", o: ["neue", "neues", "neuen", "neuem"], h: "المحايد das بعد ein تظهر صفته علامة s ➔ neues Auto." },
      { q: "Er trinkt jeden Morgen ___ Kaffee.", a: "schwarzen", o: ["schwarzer", "schwarzen", "schwarzes", "schwarze"], h: "مفعول به مذكر بدون أداة تأخذ علامة den ➔ schwarzen." }
    ]
  },
  {
    id: "A2.11", moduleNum: 24, level: "A2",
    titleDe: "Comparison of Adjectives & Adverbs (Komparation)",
    titleAr: "درجات المقارنة الثلاث (so wie, als, am ...sten) والصفات الشاذة",
    drMaiNote: "المقارنة في الألمانية شديدة الانتظام: التساوي بـ wie، والتفاضل بـ als، والقمة بـ am ...sten.",
    drMaiLogic: "الصفات القصيرة التي تحتوي على a, o, u تأخذ غالباً إمالة Umlaut عند المقارنة لتسهيل النطق.",
    drMaiWarn: "احذر أن تقول: (schneller wie du)؛ الصحيح حتماً عند المفاضلة هو: (schneller als du)!",
    drMaiTrick: "شواذ شهيرة: gut ➔ besser ➔ am besten | gern ➔ lieber ➔ am liebsten | viel ➔ mehr ➔ am meisten.",
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
    examples: [
      {
        de: "Mein Auto ist schneller als dein Auto, aber der Zug ist am schnellsten.",
        tags: [{ text: "schneller als", type: "verb", label: "Komparativ" }, { text: "am schnellsten", type: "verb", label: "Superlativ" }],
        ar: "سيارتي أسرع من سيارتك، لكن القطار هو الأسرع على الإطلاق."
      }
    ],
    seedBank: [
      { q: "Der Zug ist schneller ___ der Bus.", a: "als", o: ["wie", "als", "denn", "so"], h: "المقارنة بصفة تنتهي بـ er تتطلب أداة المقارنة als." },
      { q: "Ich trinke gern Tee, aber Kaffee trinke ich am ___.", a: "liebsten", o: ["gerngsten", "besseren", "liebsten", "meisten"], h: "التفضيل الأعلى الشاذ من gern هو am liebsten." },
      { q: "Peter ist genauso alt ___ Markus.", a: "wie", o: ["als", "wie", "denn", "so"], h: "التساوي بين طرفين يتطلب أداة wie." },
      { q: "Dieses Hotel ist am ___ von allen.", a: "teuersten", o: ["teuersten", "teuerste", "teurer", "teuer"], h: "التفضيل المطلق مع am يتطلب اللاحقة sten ➔ am teuersten." }
    ]
  },
  {
    id: "A2.12", moduleNum: 25, level: "A2",
    titleDe: "The Genitive Case (Genitiv Fundamentals)",
    titleAr: "حالة الإضافة (Genitiv): الأدوات des/der وإضافة s وحروف الجر (während, wegen, trotz)",
    drMaiNote: "حالة الإضافة (Genitiv) هي علامة الفخامة اللغوية! تعبر عن ملكية الشيء لغيره، وتأتي بعد حروف جر راقية.",
    drMaiLogic: "المذكر والمحايد في الجرمن القديم كانا يحملان علامة الإضافة في جسم الكلمة ذاتها، لذا نضيف حرف s للاسم.",
    drMaiWarn: "المؤنث في الإضافة يأخذ أداة der فقط دون أي زيادة على الاسم: (die Tasche der Mutter وليس Mutters)!",
    drMaiTrick: "ملكية الأسماء العلم تضاف لها s مباشرة بدون فاصلة عليا: Peters Buch (وليس Peter's)!",
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
    examples: [
      {
        de: "Wegen des starken Regens blieben wir im Hotel.",
        tags: [{ text: "Wegen", type: "prep", label: "Genitiv-Präposition" }, { text: "des starken Regens", type: "obj", label: "Masc. Genitiv (des + -s)" }],
        ar: "بسبب المطر الشديد، بقينا داخل الفندق."
      }
    ],
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
    drMaiNote: "جمل الوصل تجعل لغتكم مترابطة كالروايات! تعطي معلومة إضافية عن اسم سابق وتتصرف كجملة جانبية تطرد الفعل للآخر.",
    drMaiLogic: "الجنس والعدد يأتيان من الاسم الذي تصفه، بينما الحالة الإعرابية تأتي من وظيفة الضمير داخل جملة الصلة!",
    drMaiWarn: "تذكر أن أداة Dativ للجمع في جمل الوصل هي (denen) وليست (den)!",
    drMaiTrick: "أسماء الموصول تطابق تماماً أدوات المعرفة (der, die, das) باستثناء جمع Dativ الذي يصبح denen.",
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
    examples: [
      {
        de: "Das ist der Mann, den ich gestern gesehen habe.",
        tags: [{ text: "den", type: "obj", label: "Relativpronomen: Masc. Akk" }, { text: "gesehen habe", type: "verb", label: "Verb am Ende" }],
        ar: "هذا هو الرجل الذي رأيته بالأمس."
      }
    ],
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
    drMaiNote: "عندما يكون لديك فعلان في الجملة يشتركان في نفس الفاعل، يأتي الفعل الثاني في المصدر مسبوقاً بكلمة zu!",
    drMaiLogic: "zu تعمل كرابط مصدري مثل (أنْ) في العربية: (أحاول أن أتعلم ➔ Ich versuche zu lernen).",
    drMaiWarn: "أفعال المودال (können, müssen...) لا تقبل zu إطلاقاً: (Ich kann schwimmen وليس zu schwimmen)!",
    drMaiTrick: "مع الأفعال المنفصلة، تحشر كلمة zu في الوسط بين السابقة والجذر: ein + zu + kaufen ➔ einzukaufen!",
    formula: "..., + zu + Infinitiv (Clause End) | Separable: Prefix + -zu- + Stem + -en (einzukaufen)",
    paradigmHeaders: ["Trigger Environment", "Formula / Structure", "Separable Behavior", "Example"],
    paradigmRows: [
      ["Matrix Verbs", "hoffen, versuchen + zu", "ein-zu-kaufen", "Ich versuche pünktlich zu sein."],
      ["Es ist + Adjektiv", "es ist wichtig + zu", "auf-zu-stehen", "Es ist gesund viel zu trinken."],
      ["Nomen + haben", "Lust / Zeit haben + zu", "mit-zu-kommen", "Hast du Zeit mir zu helfen?"],
      ["Prohibited", "NO 'zu' after modals or gehen", "kann schwimmen", "Ich gehe schlafen (Never zu!)."]
    ],
    rules: [
      "Used when two actions share the same subject: second verb is placed at the end preceded by 'zu'.",
      "Separable verbs insert '-zu-' between prefix and stem: einkaufen ➔ einzukaufen.",
      "Strict omission: never use 'zu' after modal verbs (können, müssen) or perception verbs (sehen, hören, gehen)."
    ],
    examples: [
      {
        de: "Ich habe vergessen, den Herd auszuschalten.",
        tags: [{ text: "vergessen", type: "verb", label: "Matrixverb" }, { text: "auszuschalten", type: "verb", label: "aus + zu + schalten" }],
        ar: "لقد نسيت أن أطفئ الموقد."
      }
    ],
    seedBank: [
      { q: "Ich habe vergessen, Milch ___.", a: "einzukaufen", o: ["einkaufen", "einzukaufen", "gekauft", "zu einkaufen"], h: "الفعل المنفصل يحشر كلمة zu في الوسط: ein-zu-kaufen." },
      { q: "Es ist verboten, hier zu ___.", a: "parken", o: ["parken", "geparkt", "parkt", "parkst"], h: "بعد zu يأتي الفعل بصيغة المصدر غير المصرف ➔ parken." },
      { q: "Hast du Lust, heute Abend ins Kino ___ gehen?", a: "zu", o: ["zu", "nach", "für", "--"], h: "تعبير Lust haben يتطلب أداة المصدر zu." },
      { q: "Ich kann sehr gut ___.", a: "schwimmen", o: ["zu schwimmen", "schwimmen", "geschwommen", "schwimme"], h: "أفعال المودال لا تقبل zu مطلقاً!" }
    ]
  },
  {
    id: "A2.15", moduleNum: 28, level: "A2",
    titleDe: "Subjunctive II: Polite Requests & Wishes (Konjunktiv II)",
    titleAr: "صيغة التمني والطلب المهذب (Konjunktiv II: hätte, wäre, könnte, würde + Infinitiv)",
    drMaiNote: "هذا هو سر اللباقة الدبلوماسية في ألمانيا! بدلاً من الأمر المباشر، نستخدم Konjunktiv II لنطلب بلطف فائق.",
    drMaiLogic: "صيغة التمني تجعل الأمر افتراضياً غير ملزم، مما يعطي المستمع مساحة احترام وحرية في الإجابة.",
    drMaiWarn: "لا تقل (Ich werde einen Kaffee)، بل قل بصيغة التمني المهذبة: (Ich würde gern einen Kaffee bestellen)!",
    drMaiTrick: "فعل الكينونة يصبح wäre، وفعل الملكية يصبح hätte، وفعل الاستطاعة يصبح könnte.",
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
    examples: [
      {
        de: "Könnten Sie mir bitte helfen? Ich suche den Bahnhof.",
        tags: [{ text: "Könnten", type: "verb", label: "Konjunktiv II" }, { text: "helfen", type: "verb", label: "Infinitiv" }],
        ar: "هل بإمكان حضرتك بلطف أن تساعدني؟ أنا أبحث عن محطة القطار."
      }
    ],
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
    drMaiNote: "هنا نتعلم كيف نختصر كلامنا مثل الألمان الأصليين دون إعادة تكرار الاسم في كل جملة!",
    drMaiLogic: "عندما تحذف اسماً معروفاً في السياق، تنوب الأداة عنه وتظهر علامة جنسه بوضوح كبديل.",
    drMaiWarn: "إذا حذفت كلمة das Auto، يجب أن تظهر علامة s: (Nein, ich habe keins وليس kein)!",
    drMaiTrick: "المذكر المحذوف يأخذ (einen/keinen)، والمحايد المحذوف يأخذ (eins/keins).",
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
    examples: [
      {
        de: "Dieser Pullover gefällt mir besser als jener.",
        tags: [{ text: "Dieser Pullover", type: "subj", label: "Demonstrativ Masc. Nom" }],
        ar: "هذه الكنزة تعجبني أكثر من تلك."
      }
    ],
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
    drMaiNote: "أهنئكم بالوصول إلى قمة المستوى A2 وتاج قواعده: المبني للمجهول! يركز على ما تم إنجازه وليس على الفاعل.",
    drMaiLogic: "نستخدم المجهول لأن الفاعل بديهي أو غير مهم مقارنة بالعمل نفسه (مثل: يتم خبز الخبز كل صباح).",
    drMaiWarn: "الخلط بين werden كمساعد للمجهول و werden كفعل عادي. في المجهول يجب أن تجد حتماً Partizip II في آخر الجملة!",
    drMaiTrick: "معادلة المجهول الصارمة: تصريف werden في المركز 2 + التصريف الثالث Partizip II في نهاية الجملة تماماً.",
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
    examples: [
      {
        de: "Das Brot wird jeden Morgen frisch gebacken.",
        tags: [{ text: "wird", type: "verb", label: "werden (Pos 2)" }, { text: "gebacken", type: "verb", label: "Partizip II am Ende" }],
        ar: "يتم خبز الخبز كل صباح طازجاً."
      }
    ],
    seedBank: [
      { q: "Das Brot ___ jeden Morgen frisch gebacken.", a: "wird", o: ["wird", "werden", "wurden", "ist"], h: "المبني للمجهول للمفرد المحايد das Brot يتطلب wird + Partizip II." },
      { q: "Die E-Mail wird heute ___ Chef weitergeleitet.", a: "vom", o: ["von", "vom", "durch", "aus"], h: "الفاعل في المبني للمجهول يسبق بـ von + Dativ (von dem ➔ vom)." },
      { q: "Hier ___ Deutsch und Englisch gesprochen.", a: "wird", o: ["wird", "werden", "ist", "hat"], h: "المبني للمجهول للحديث العام عن اللغات يتطلب wird gesprochen." },
      { q: "Die Rechnungen ___ sofort bezahlt.", a: "werden", o: ["wird", "werden", "wurden", "worden"], h: "الفاعل جمع Die Rechnungen يتطلب فعل werden بصيغة الجمع." }
    ]
  }
];

// =========================================================================
// 2. TIERED 40-EXERCISE ENGINE (4 TIERS PER MODULE = 1,200 EXERCISES)
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
// 3. APPLICATION STATE CONTROLLER
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
// 4. SPEECH SYNTHESIS ENGINE
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
// 5. DOM & RENDERING
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

  lessonBody.innerHTML = `
    <!-- Dr. Mai Personal Greeting Callout (RTL) -->
    <div class="rtl-zone dr-card p-6 border-r-4 border-r-blue-600 space-y-2">
      <div class="flex items-center gap-2">
        <span class="text-2xl">👩‍🏫</span>
        <h3 class="font-black text-slate-900 dark:text-white text-base">درس اليوم مع د. مي:</h3>
        <span class="text-xs bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 font-de font-bold px-2.5 py-0.5 rounded-full">Goethe ${mod.level}</span>
      </div>
      <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed font-medium">${mod.drMaiNote}</p>
    </div>

    <!-- Mathematical Formula Terminal Card (Strictly LTR) -->
    <div class="ltr-zone dr-formula text-sm sm:text-base">
      <div class="text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-1">Structural Formula</div>
      ${mod.formula}
    </div>

    <!-- 3 High-Contrast Pedagogical Callouts (RTL) -->
    <div class="rtl-zone grid grid-cols-1 md:grid-cols-3 gap-4">
      <div class="dr-callout-rule space-y-1">
        <span class="font-black text-xs block">💡 لماذا هذه القاعدة؟</span>
        <p class="text-xs leading-relaxed font-medium">${mod.drMaiLogic}</p>
      </div>
      <div class="dr-callout-warn space-y-1">
        <span class="font-black text-xs block">⚠️ انتبه من هذا الخطأ:</span>
        <p class="text-xs leading-relaxed font-medium">${mod.drMaiWarn}</p>
      </div>
      <div class="dr-callout-tip space-y-1">
        <span class="font-black text-xs block">🎯 حيلة الحفظ السريع:</span>
        <p class="text-xs leading-relaxed font-medium">${mod.drMaiTrick}</p>
      </div>
    </div>

    <!-- High-Contrast Goethe Paradigm Table (Strictly LTR) -->
    <div class="space-y-2">
      <div class="rtl-zone flex items-center justify-between">
        <h4 class="font-black text-sm text-slate-900 dark:text-white">جدول التصريف المعتمد في غوته:</h4>
        <span class="text-xs font-de text-slate-400">Inflection Paradigm</span>
      </div>
      <div class="table-wrapper">
        <table class="dr-table font-de">
          <thead>
            <tr>
              ${mod.paradigmHeaders.map(h => `<th>${h}</th>`).join('')}
            </tr>
          </thead>
          <tbody>
            ${mod.paradigmRows.map(row => `
              <tr>
                ${row.map((cell, idx) => `<td class="${idx === 0 ? 'font-bold text-blue-700 dark:text-blue-400' : ''}">${cell}</td>`).join('')}
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Morphosyntactic Rules List (Strictly LTR) -->
    <div class="ltr-zone dr-card p-5 space-y-2">
      <span class="text-xs font-mono font-bold uppercase text-slate-400 block tracking-wider">Grammatical Directives</span>
      <ul class="list-disc list-inside space-y-1 text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-de">
        ${mod.rules.map(r => `<li>${r}</li>`).join('')}
      </ul>
    </div>

    <!-- Enriched Sentence Breakdown Examples (LTR) -->
    <div class="space-y-3">
      <div class="rtl-zone">
        <h4 class="font-black text-sm text-slate-900 dark:text-white">أمثلة إعرابية تطبيقية من واقع المحادثات:</h4>
      </div>
      ${mod.examples.map(ex => `
        <div class="dr-card p-5 space-y-3">
          <p class="ltr-zone font-de font-black text-base text-slate-900 dark:text-white">${ex.de}</p>
          <div class="ltr-zone flex flex-wrap gap-2 font-de text-xs">
            ${ex.tags.map(t => `
              <span class="tag-${t.type}">${t.text} <span class="opacity-70 text-[10px]">[${t.label}]</span></span>
            `).join('')}
          </div>
          <p class="rtl-zone text-xs sm:text-sm text-slate-600 dark:text-slate-400 pt-2 border-t border-slate-200 dark:border-slate-800 font-medium">الترجمة: ${ex.ar}</p>
        </div>
      `).join('')}
    </div>
  `;

  renderPills(exercises);
  renderActiveQuestion();
}

function renderPills(exercises) {
  const mod = app.getCurrentModule();
  pillsGrid40.innerHTML = exercises.map((ex, idx) => {
    const isCurrent = idx === app.currentExIndex;
    const isDone = app.completed[`${mod.id}_${ex.id}`];

    if (app.activeTier !== 'all' && ex.tier !== app.activeTier) return '';

    let classes = 'pill-button';
    if (isDone) classes += ' done';
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
      <span class="text-xs font-black px-4 py-1.5 rounded-full border border-blue-200 dark:border-blue-900 bg-blue-50 dark:bg-blue-950/60 text-blue-800 dark:text-blue-300">
        ${current.tierBadge} المستوى ${current.tier}: ${current.tierLabel}
      </span>

      <div class="ltr-zone text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white font-de leading-relaxed">
        <span>${current.before}</span>
        <span id="cloze-target-slot" class="inline-block px-3 py-0.5 mx-1 border-b-4 border-blue-600 font-black text-blue-700 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/60 rounded-md">____</span>
        <span>${current.after}</span>
      </div>

      <div class="ltr-zone flex flex-wrap justify-center gap-3 w-full font-de">
        ${current.opts.map(opt => `
          <button onclick="evaluateAnswer('${opt}', this)" class="px-6 py-3.5 dr-card hover:border-blue-600 font-bold rounded-2xl transition text-base sm:text-lg shadow-sm">
            ${opt}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

window.evaluateAnswer = function(selected, btn) {
  const exercises = app.getAllExercises();
  const current = exercises[app.currentExIndex];
  const isCorrect = selected.toLowerCase() === current.ans.toLowerCase();

  const slot = document.getElementById('cloze-target-slot');
  slot.innerText = selected;
  slot.classList.add(isCorrect ? 'text-green-600' : 'text-red-600');

  stage.querySelectorAll('button').forEach(b => b.classList.add('pointer-events-none'));
  feedbackPanel.classList.remove('hidden', 'bg-red-50', 'dark:bg-red-950/40', 'border-red-300', 'bg-green-50', 'dark:bg-green-950/40', 'border-green-300', 'animate-shake');

  if (isCorrect) {
    app.addXP(10);
    statXp.innerText = `${app.xp} XP`;
    app.completed[`${app.getCurrentModule().id}_${current.id}`] = true;

    feedbackPanel.classList.add('bg-green-50', 'dark:bg-green-950/40', 'border-green-300', 'dark:border-green-800');
    feedbackTitle.className = 'font-black text-base text-green-900 dark:text-green-300';
    feedbackTitle.innerText = 'أحسنت! إجابة صحيحة تماماً 👏';
    feedbackIcon.className = 'w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-green-600 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
  } else {
    feedbackPanel.classList.add('bg-red-50', 'dark:bg-red-950/40', 'border-red-300', 'dark:border-red-800', 'animate-shake');
    feedbackTitle.className = 'font-black text-base text-red-900 dark:text-red-300';
    feedbackTitle.innerHTML = `انتبه للقاعدة! الحل الصحيح: <span class="font-de underline font-black ltr-zone">${current.ans}</span>`;
    feedbackIcon.className = 'w-9 h-9 rounded-full flex items-center justify-center shrink-0 bg-red-600 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>`;
  }

  feedbackSummary.innerText = current.hint;
  speakGerman(current.full);
  btnAudioRepeat.onclick = () => speakGerman(current.full);
};

window.filterTier = function(tier) {
  app.activeTier = tier;
  document.querySelectorAll('.tier-chip').forEach(c => {
    c.className = "tier-chip px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs transition";
  });
  event.target.className = "tier-chip px-3 py-1.5 rounded-lg bg-blue-700 text-white font-black text-xs transition";
  renderPills(app.getAllExercises());
};

window.switchToPracticeMode = function() {
  viewLesson.classList.add('hidden');
  viewPractice.classList.remove('hidden');
  tabBtnPractice.className = "px-4 py-2 rounded-xl bg-blue-700 text-white font-bold text-xs flex items-center gap-2 shadow transition";
  tabBtnLesson.className = "px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs flex items-center gap-2 transition";
  renderCurrentView();
};

window.switchToLessonMode = function() {
  viewLesson.classList.remove('hidden');
  viewPractice.classList.add('hidden');
  tabBtnLesson.className = "px-4 py-2 rounded-xl bg-blue-700 text-white font-bold text-xs flex items-center gap-2 shadow transition";
  tabBtnPractice.className = "px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 font-bold text-xs flex items-center gap-2 transition";
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

  btnThemeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('dm_theme', isDark ? 'dark' : 'light');
  });

  btnNextEx.addEventListener('click', () => {
    if (app.currentExIndex < 39) {
      app.currentExIndex++;
      renderCurrentView();
    } else {
      alert('تهانينا البالغة! لقد أتممت جميع تمارين هذا الفصل الـ 40 بنجاح!');
    }
  });

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
      <div onclick="selectModule(${originalIndex})" class="p-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-blue-600 dark:hover:border-blue-500 hover:bg-blue-50/50 dark:hover:bg-slate-800/60 cursor-pointer transition flex items-start gap-3">
        <span class="px-2.5 py-1 rounded-md bg-blue-100 dark:bg-blue-900/60 text-blue-800 dark:text-blue-300 font-de font-black text-xs mt-0.5">${m.id}</span>
        <div class="flex-1">
          <p class="font-bold text-slate-900 dark:text-white text-sm">${m.titleAr}</p>
          <p class="font-de text-slate-500 dark:text-slate-400 text-xs mt-0.5 ltr-zone">${m.titleDe}</p>
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
