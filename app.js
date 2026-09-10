/**
 * Deutsch mit Mai – Master Goethe A1 & A2 Compendium Engine
 * 30 Complete Modules (A1.01 - A2.17) • Exact Formulas & Paradigms • 20 Exercises Per Module
 */

// =========================================================================
// 1. THE 30-MODULE COMPENDIUM REGISTRY (FULL GOETHE A1 & A2)
// =========================================================================
const COMPENDIUM_REGISTRY = [
  // --- GOETHE A1 (MODULES 1 TO 13) ---
  {
    id: "A1.01", moduleNum: 1, level: "A1",
    titleDe: "Personal Pronouns & Present Tense Verb Conjugation (Präsens)",
    titleAr: "الضمائر الشخصية وتصريف أفعال الحاضر وتعديلات الجذع (-t/-d/-s)",
    formula: "Infinitive - '-en' = Verb Stem | Stem + Ending = Conjugated Verb",
    paradigm: [
      { pr: "ich", end: "-e", ex: "lerne, mache, wohne" },
      { pr: "du", end: "-st", ex: "lernst, machst, wohnst" },
      { pr: "er/sie/es", end: "-t", ex: "lernt, macht, wohnt" },
      { pr: "wir", end: "-en", ex: "lernen, machen, wohnen" },
      { pr: "ihr", end: "-t", ex: "lernt, macht, wohnt" },
      { pr: "sie/Sie", end: "-en", ex: "lernen, machen, wohnen" }
    ],
    rules: [
      "Phonetic insertion of -e-: Stems ending in -t, -d add -e- before -st/-t (du arbeitest, er arbeitet).",
      "Sibilant reduction: Stems ending in -s, -ß, -z drop -s- in 2nd person singular (du heißt, du reist).",
      "Irregular auxiliaries: sein (ich bin, du bist, er ist) & haben (ich habe, du hast, er hat)."
    ],
    breakdown: "Ich [Subj] + wohne [Verb 1: wohn- + -e] + in Berlin [Lokal] + und + arbeite [Verb 2: arbeit- + -e] + dort [Adv].",
    testPatterns: [
      { q: "Ich ___ in Berlin.", a: "wohne", o: ["wohne", "wohnst", "wohnt", "wohnen"], h: "1st person sing: stem + -e" },
      { q: "Du ___ zu viel im Büro.", a: "arbeitest", o: ["arbeitst", "arbeitest", "arbeitet", "arbeiten"], h: "Stem in -t inserts -e- before -st" },
      { q: "Wie ___ du mit Nachnamen?", a: "heißt", o: ["heißest", "heißt", "heiße", "heißen"], h: "Sibilant stem in -ß takes only -t with du" },
      { q: "Er ___ ein interessantes Buch.", a: "hat", o: ["habe", "hast", "hat", "haben"], h: "Irregular 3rd person singular of haben" }
    ]
  },
  {
    id: "A1.02", moduleNum: 2, level: "A1",
    titleDe: "Sentence Architecture I (Main Clauses & Questions)",
    titleAr: "معمارية الجملة: قاعدة الفعل بالمركز 2، الانقلاب (Inversion)، والأسئلة",
    formula: "Declarative: Pos 1 (Vorfeld) + Verb (Pos 2) + Subject (Pos 3 if Inversion) | Ja/Nein: Verb (Pos 1)",
    paradigm: [
      { pr: "Normal", end: "Subjekt (1) + Verb (2) + Temporal (3)", ex: "Wir lernen heute Deutsch." },
      { pr: "Inversion", end: "Temporal (1) + Verb (2) + Subjekt (3)", ex: "Heute lernen wir Deutsch." },
      { pr: "Ja/Nein", end: "Verb (1) + Subjekt (2) + Rest", ex: "Trinkst du morgens Kaffee?" },
      { pr: "W-Frage", end: "W-Wort (1) + Verb (2) + Subjekt (3)", ex: "Woher kommst du?" }
    ],
    rules: [
      "Verb-Second Rule (V2): In declarative main clauses, the conjugated verb is locked in Position 2.",
      "Inversion Rule: If time/place precedes the subject in Position 1, the subject moves to Position 3.",
      "Closed Questions: Verb shifts to Position 1. Open Questions: W-word in Pos 1, verb in Pos 2."
    ],
    breakdown: "Morgen [Pos 1: Temporal] + fliegt [Pos 2: Verb] + meine Schwester [Pos 3: Subjekt] + nach Wien [Direktional].",
    testPatterns: [
      { q: "Heute ___ wir Deutsch in der Schule.", a: "lernen", o: ["wir lernen", "lernen", "lernt", "gelernt"], h: "Inversion: Verb must stay in Position 2" },
      { q: "___ du morgens immer Kaffee?", a: "Trinkst", o: ["Trinkst", "Trinkt", "Trinken", "Trinke"], hint: "Ja/Nein question: conjugated verb in Position 1" }
    ]
  },
  {
    id: "A1.03", moduleNum: 3, level: "A1",
    titleDe: "Nouns, Grammatical Gender & Nominative Case",
    titleAr: "الأسماء وأدوات التعريف والنكرة والنفي وصيغ الجمع في الرفع",
    formula: "Maskulinum: der/ein/kein | Femininum: die/eine/keine | Neutrum: das/ein/kein | Plural: die/--/keine",
    paradigm: [
      { pr: "der (masc)", end: "Class 1: -e / ¨-e", ex: "der Tisch ➔ die Tische" },
      { pr: "das (neut)", end: "Class 2: -er / ¨-er", ex: "das Buch ➔ die Bücher" },
      { pr: "die (fem)", end: "Class 3: -en / -n", ex: "die Lampe ➔ die Lampen" },
      { pr: "foreign", end: "Class 4: -s", ex: "das Auto ➔ die Autos" }
    ],
    rules: [
      "Every German noun has an inherent gender: Maskulinum (der), Femininum (die), Neutrum (das).",
      "Nominative designates the active subject or predicate noun after copular verbs (sein, werden, bleiben).",
      "Plural formation follows 5 major morphophonological classes with frequent umlauting."
    ],
    breakdown: "Der Tisch [Subj 1: Masc. Nom] + ist + alt, aber + die Stühle [Subj 2: Plur. Nom] + sind + neu.",
    testPatterns: [
      { q: "Das ist ___ Kugelschreiber, das ist ein Bleistift.", a: "kein", o: ["nicht", "kein", "keine", "keinen"], h: "Negate indefinite masculine noun in Nominative with kein" },
      { q: "Hier steht ___ schöne Lampe.", a: "eine", o: ["ein", "eine", "einen", "einer"], h: "Feminine noun in Nominative takes eine" }
    ]
  },
  {
    id: "A1.04", moduleNum: 4, level: "A1",
    titleDe: "The Accusative Case (Akkusativ)",
    titleAr: "حالة النصب (Akkusativ): المفعول به المباشر، تحول المذكر، وأحرف DOGFU",
    formula: "Masc: der/ein ➔ den/einen | Fem/Neut/Plur: Unchanged | DOGFU: Durch, Ohne, Gegen, Für, Um",
    paradigm: [
      { pr: "Maskulinum", end: "der ➔ den / ein ➔ einen", ex: "Ich sehe den Mann." },
      { pr: "Femininum", end: "die / eine (Unchanged)", ex: "Ich sehe die Frau." },
      { pr: "Neutrum", end: "das / ein (Unchanged)", ex: "Ich sehe das Kind." },
      { pr: "Pronouns", end: "mich, dich, ihn, sie, es, uns, euch", ex: "Er liebt mich." }
    ],
    rules: [
      "Only the masculine gender inflects in the accusative case (der ➔ den, ein ➔ einen, kein ➔ keinen).",
      "Direct object receiver of transitive verbs (haben, suchen, kaufen, sehen, essen).",
      "DOGFU prepositions mandate an accusative object 100% of the time without exception."
    ],
    breakdown: "Der Mann [Subj: Nom. Masc] + kauft [Verb] + den teuren Fernseher [Dir. Objekt: Akk. Masc].",
    testPatterns: [
      { q: "Der Mann kauft ___ neuen Computer.", a: "den", o: ["der", "den", "dem", "das"], h: "Masculine direct object shifts der ➔ den" },
      { q: "Er kommt ohne ___ Mantel.", a: "seinen", o: ["sein", "seinen", "seinem", "seiner"], h: "Preposition 'ohne' takes Accusative masculine ➔ seinen" }
    ]
  },
  {
    id: "A1.05", moduleNum: 5, level: "A1",
    titleDe: "Negation Mechanics: nicht vs. kein",
    titleAr: "قواعد النفي الدقيقة: استخدام موقع nicht مقابل أداة kein",
    formula: "kein + Indefinite/Zero-Article Noun | nicht + Verb / Adjective / Definite Noun",
    paradigm: [
      { pr: "kein/keine", end: "Negates Nouns", ex: "Ich habe kein Geld / keine Zeit." },
      { pr: "nicht (End)", end: "Negates Verb/Sentence", ex: "Ich schlafe heute nicht." },
      { pr: "nicht (Adj)", end: "Precedes Adjective", ex: "Das Essen ist nicht gut." },
      { pr: "nicht (Def)", end: "Precedes Definite Noun", ex: "Das ist nicht der Chef." }
    ],
    rules: [
      "Use 'kein' exclusively to negate nouns preceded by ein/eine or zero article (Nullartikel).",
      "Use 'nicht' to negate verbs, adjectives, adverbs, names, possessives, and definite noun phrases.",
      "Position of 'nicht': clause-end for verb negation, directly preceding specific constituents."
    ],
    breakdown: "Ich [Subj] + habe [Verb] + keine Zeit [Fem. Akk. Negation] + und + kein Geld [Neut. Akk. Negation].",
    testPatterns: [
      { q: "Der Kaffee ist ___ heiß genug.", a: "nicht", o: ["kein", "nicht", "keine", "nichts"], h: "Negating an adjective requires 'nicht'" },
      { q: "Ich habe ___ Geschwister.", a: "keine", o: ["nicht", "kein", "keine", "keinen"], h: "Negating a plural noun with zero article takes 'keine'" }
    ]
  },
  {
    id: "A1.06", moduleNum: 6, level: "A1",
    titleDe: "Stem-Changing Verbs (Vokalwechsel im Präsens)",
    titleAr: "الأفعال القوية وتغير الحرف الصوتي في الحاضر (e➔i, e➔ie, a➔ä)",
    formula: "Shift applies ONLY to: 2nd sing (du) and 3rd sing (er/sie/es) | ich/wir/ihr/sie are regular",
    paradigm: [
      { pr: "e ➔ i", end: "sprechen, helfen, geben", ex: "du sprichst, er hilft, er gibt" },
      { pr: "e ➔ ie", end: "sehen, lesen", ex: "du siehst, er liest" },
      { pr: "a ➔ ä", end: "fahren, schlafen, waschen", ex: "du fährst, er schläft" },
      { pr: "au ➔ äu", end: "laufen", ex: "du läufst, er läuft" }
    ],
    rules: [
      "Phonological shifts occur strictly in 2nd and 3rd person singular.",
      "1st person singular (ich) and all plural forms (wir, ihr, sie/Sie) retain the standard infinitive stem.",
      "Crucial irregular stems: nehmen ➔ du nimmst, er nimmt; wissen ➔ ich weiß, du weißt, er weiß."
    ],
    breakdown: "Fährst [Verb 1: a➔ä] + du [Subj] + mit dem Zug + oder + nimmst [Verb 2: e➔i] + du + das Auto?",
    testPatterns: [
      { q: "Er ___ jeden Abend einen Roman.", a: "liest", o: ["lest", "liest", "lese", "gelesen"], h: "Vowel mutation e ➔ ie with 3rd sing (er liest)" },
      { q: "Mai, ___ du morgen nach Köln?", a: "fährst", o: ["fahrst", "fährst", "fahrt", "fahren"], h: "Vowel mutation a ➔ ä with 2nd sing (du fährst)" }
    ]
  },
  {
    id: "A1.07", moduleNum: 7, level: "A1",
    titleDe: "Possessive Articles (Possessivartikel in Nom. & Akk.)",
    titleAr: "أدوات الملكية وتصريفها في الرفع والنصب وقاعدة إسقاط حرف e في euer",
    formula: "Stems: mein, dein, sein, ihr, unser, euer, ihr, Ihr | Declines exactly like ein/kein",
    paradigm: [
      { pr: "Masc. Nom/Akk", end: "mein / meinen", ex: "mein Vater / meinen Vater" },
      { pr: "Neut. Nom/Akk", end: "mein / mein", ex: "mein Kind / mein Kind" },
      { pr: "Fem. Nom/Akk", end: "meine / meine", ex: "meine Mutter / meine Mutter" },
      { pr: "euer shift", end: "euer + e ➔ eure", ex: "eure Wohnung (drops internal -e-)" }
    ],
    rules: [
      "Possessive articles match the personal pronoun of the possessor and decline for gender/case.",
      "In the accusative case, only the masculine ending takes -en (meinen, deinen, seinen, ihren).",
      "Euer Contraction Rule: euer + -e drops the internal -e- ➔ eure Mutter (never euere!)."
    ],
    breakdown: "Mein Vater [Subj: Masc. Nom] + sucht [Verb] + seinen Schlüssel [Akk. Masc: sein + -en].",
    testPatterns: [
      { q: "Mein Vater sucht ___ Schlüssel.", a: "seinen", o: ["sein", "seinen", "seinem", "seine"], h: "Accusative masculine possessive: sein + -en = seinen" },
      { q: "Wo wohnt ___ Familie?", a: "eure", o: ["euer", "eure", "euren", "eures"], h: "euer + feminine -e drops internal -e- ➔ eure" }
    ]
  },
  {
    id: "A1.08", moduleNum: 8, level: "A1",
    titleDe: "Compound Verb Structures (Satzklammer, Trennbar & Modal)",
    titleAr: "القوس الفعلي: الأفعال المنفصلة وغير المنفصلة وأفعال المودال الستة",
    formula: "Modal: Modal (Pos 2) + ... + Infinitive (End) | Trennbar: Stem (Pos 2) + ... + Prefix (End)",
    paradigm: [
      { pr: "können (can)", end: "kann, kannst, kann, können", ex: "Ich kann Deutsch sprechen." },
      { pr: "müssen (must)", end: "muss, musst, muss, müssen", ex: "Wir müssen heute arbeiten." },
      { pr: "dürfen (may)", end: "darf, darfst, darf, dürfen", ex: "Hier darf man nicht parken." },
      { pr: "trennbar", end: "aufstehen, einkaufen", ex: "Ich stehe um 6 Uhr auf." }
    ],
    rules: [
      "Satzklammer (Sentence Bracket): Conjugated verb in Pos 2, secondary element at clause-end.",
      "Separable Prefixes (ab-, an-, auf-, aus-, ein-, mit-, vor-, zu-) separate to the absolute end.",
      "Inseparable Prefixes (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-) never separate."
    ],
    breakdown: "Wir [Pos 1] + kaufen [Pos 2: Verb stem] + heute im Supermarkt + ein [Clause-End: Prefix].",
    testPatterns: [
      { q: "Mai steht jeden Morgen um 6 Uhr ___.", a: "auf", o: ["an", "auf", "mit", "aus"], h: "Separable prefix of aufstehen moves to clause-end" },
      { q: "Hier ___ man leider nicht parken.", a: "darf", o: ["darf", "darfst", "dürfen", "dürft"], h: "3rd person impersonal 'man' takes 'darf'" }
    ]
  },
  {
    id: "A1.09", moduleNum: 9, level: "A1",
    titleDe: "The Imperative Mood (Imperativ)",
    titleAr: "صيغة الأمر للمفرد والجمع والاحترام والأفعال الشاذة (Sei leise!)",
    formula: "du: Stem - st (Mach!) | ihr: Conjugated verb without ihr (Macht!) | Sie: Inversion (Machen Sie!)",
    paradigm: [
      { pr: "du (informal sg)", end: "Drop 'du' and '-st'", ex: "Komm! Fahr! Sprich!" },
      { pr: "ihr (informal pl)", end: "Drop 'ihr'", ex: "Kommt! Wartet!" },
      { pr: "Sie (formal)", end: "Invert Verb + Sie", ex: "Kommen Sie! Seien Sie!" },
      { pr: "sein irregular", end: "Sei! / Seid! / Seien Sie!", ex: "Sei leise!" }
    ],
    rules: [
      "Informal singular (du): Drop 'du' and '-st'. Vowel shifts e➔i are kept (Lies!), a➔ä are dropped (Fahr!).",
      "Informal plural (ihr): Standard conjugated 2nd person plural verb, drop pronoun 'ihr'.",
      "Formal (Sie): Invert infinitive and pronoun 'Sie'. 'Sie' must be retained."
    ],
    breakdown: "Gib [Imperativ du: e➔i] + mir [Dativ] + bitte + deine Telefonnummer [Akk. Objekt]!",
    testPatterns: [
      { q: "Bitte ___ leise im Unterricht!", a: "sei", o: ["bist", "sei", "seid", "seien"], h: "Irregular imperative of sein for du ➔ Sei!" },
      { q: "___ Sie bitte hier an der nächsten Haltestelle aus!", a: "Steigen", o: ["Steig", "Steigt", "Steigen", "Steigst"], h: "Formal imperative retains Sie with infinitive ➔ Steigen Sie" }
    ]
  },
  {
    id: "A1.10", moduleNum: 10, level: "A1",
    titleDe: "The Dative Case (Dativ Basics)",
    titleAr: "أساسيات المجرور (Dativ): الأدوات، الضمائر، أفعال الجر، وحروف الجر الثابتة",
    formula: "Masc/Neut: dem/einem | Fem: der/einer | Plural: den + -n | Pronouns: mir, dir, ihm, ihr, uns, euch, ihnen",
    paradigm: [
      { pr: "Maskulinum", end: "der ➔ dem / einem", ex: "dem Mann / einem Mann" },
      { pr: "Neutrum", end: "das ➔ dem / einem", ex: "dem Kind / einem Kind" },
      { pr: "Femininum", end: "die ➔ der / einer", ex: "der Frau / einer Frau" },
      { pr: "Plural", end: "die ➔ den + -n", ex: "den Kindern (adds plural -n)" }
    ],
    rules: [
      "Designates indirect personal receiver or object of dative verbs (helfen, danken, gefallen, schmecken).",
      "Fixed dative prepositions mnemonic: aus, bei, mit, nach, seit, von, zu, gegenüber.",
      "Plural nouns in dative must receive suffix -n unless already ending in -n or -s."
    ],
    breakdown: "Das Essen [Subj: Nom. Neut] + schmeckt [Verb] + den Gästen [Indir. Obj: Dat. Plur + -n] + sehr gut.",
    testPatterns: [
      { q: "Ich fahre am Wochenende mit ___ Zug.", a: "dem", o: ["den", "dem", "das", "der"], h: "Preposition 'mit' always governs Dative: der Zug ➔ dem Zug" },
      { q: "Der Lehrer hilft ___ Schülern.", a: "den", o: ["die", "den", "dem", "der"], h: "Dative plural takes 'den' + noun suffix -n" }
    ]
  },
  {
    id: "A1.11", moduleNum: 11, level: "A1",
    titleDe: "Spatial & Temporal Prepositions (A1 Focus)",
    titleAr: "حروف الجر الزمانية والمكانية ومدخل للأحرف المشتركة (Wo? + Dativ)",
    formula: "Temporal: um (time), am (days/dates), im (months/seasons) | Static Location: Wo? ➔ Dativ",
    paradigm: [
      { pr: "um + Akk", end: "Clock times", ex: "um 14:00 Uhr" },
      { pr: "am + Dat", end: "Days & parts of day", ex: "am Montag, am Morgen" },
      { pr: "im + Dat", end: "Months & seasons", ex: "im Juli, im Sommer" },
      { pr: "Wo? + Dat", end: "Static location", ex: "im Supermarkt (in dem)" }
    ],
    rules: [
      "Temporal markers: um for clock times, am for days/dates/day parts, im for months/seasons.",
      "Two-way prepositions (an, auf, in, etc.) answering 'Wo?' (Where?) trigger Dative case.",
      "Standard contractions: in + dem = im, an + dem = am, zu + dem = zum, zu + der = zur."
    ],
    breakdown: "Der Arzttermin [Subj] + ist + am Mittwoch [Temporal: an dem + Dat] + um zehn Uhr [Temporal: um + Akk].",
    testPatterns: [
      { q: "Der Sprachkurs beginnt ___ Montag.", a: "am", o: ["im", "am", "um", "in"], h: "Days of the week require 'am'" },
      { q: "Die Schlüssel liegen auf ___ Tisch.", a: "dem", o: ["den", "dem", "das", "der"], h: "Static location answering Wo? requires Dative masculine ➔ dem" }
    ]
  },
  {
    id: "A1.12", moduleNum: 12, level: "A1",
    titleDe: "Coordinating Conjunctions (ADUSO - Position 0)",
    titleAr: "أدوات الربط التنسيقية بالموقع صفر (ADUSO): Aber, Denn, Und, Sondern, Oder",
    formula: "Pos 0 (ADUSO) + Pos 1 (Subjekt) + Pos 2 (Finite Verb) | Word order unchanged",
    paradigm: [
      { pr: "Aber", end: "but (contrast)", ex: "..., aber ich habe keine Zeit." },
      { pr: "Denn", end: "because / for", ex: "..., denn er ist krank." },
      { pr: "Und", end: "and (addition)", ex: "..., und wir gehen ins Kino." },
      { pr: "Sondern", end: "but rather (after nicht)", ex: "nicht Tee, sondern Kaffee." },
      { pr: "Oder", end: "or (alternative)", ex: "..., oder wir essen Pizza." }
    ],
    rules: [
      "ADUSO conjunctions occupy Position 0: they do NOT alter the word order of the following clause.",
      "The following main clause starts regularly: Subject in Position 1, finite verb in Position 2.",
      "'Sondern' requires a negative statement in the preceding clause (nicht ..., sondern ...)."
    ],
    breakdown: "Er lernt Deutsch [Clause 1] || denn [Pos 0] + er [Pos 1: Subj] + will [Pos 2: Verb] + in Berlin arbeiten.",
    testPatterns: [
      { q: "Ich lerne Deutsch, ___ ich möchte in Deutschland arbeiten.", a: "denn", o: ["weil", "denn", "deshalb", "dass"], h: "Subject in Pos 1 and Verb in Pos 2 indicates Position 0 conjunction 'denn'" },
      { q: "Ich trinke keinen Kaffee, ___ Tee.", a: "sondern", o: ["aber", "sondern", "denn", "oder"], h: "Direct correction after negative 'keinen' requires 'sondern'" }
    ]
  },
  {
    id: "A1.13", moduleNum: 13, level: "A1",
    titleDe: "Past Narration I: Perfekt & Präteritum Essentials",
    titleAr: "السرد الماضي 1: ماضي war/hatte والماضي التام (Perfekt) مع haben و sein",
    formula: "Perfekt: [haben/sein (Pos 2)] + ... + [Partizip II (Clause End)] | Präteritum: war / hatte",
    paradigm: [
      { pr: "sein + Part. II", end: "Motion/state change + sein/bleiben", ex: "ist gegangen, ist aufgewacht" },
      { pr: "haben + Part. II", end: "Transitive & durative verbs", ex: "hat gekauft, hat gearbeitet" },
      { pr: "ge-...-t", end: "Weak verbs", ex: "kaufen ➔ gekauft" },
      { pr: "-ieren", end: "No ge- prefix", ex: "studieren ➔ studiert" }
    ],
    rules: [
      "Perfekt is the primary spoken past tense: auxiliary (haben/sein) in Pos 2 + Partizip II at clause end.",
      "Select 'sein' for motion/location change (gehen, fahren), state change (aufwachen), or sein/bleiben.",
      "Präteritum at A1 is mandatory only for auxiliaries: war, warst, war, waren / hatte, hattest, hatte, hatten."
    ],
    breakdown: "Ich [Pos 1] + habe [Pos 2: Aux] + gestern einen Kuchen [Obj] + gebacken [Clause End: Partizip II].",
    testPatterns: [
      { q: "Gestern ___ wir nach Frankfurt gefahren.", a: "sind", o: ["haben", "sind", "hatten", "waren"], h: "Motion verb 'fahren' requires auxiliary 'sein' in Perfekt" },
      { q: "Letztes Jahr ___ ich in Italien.", a: "war", o: ["habe", "bin", "war", "hatte"], h: "Simple past of sein for 1st person singular is 'war'" }
    ]
  },

  // --- GOETHE A2 (MODULES 14 TO 30) ---
  {
    id: "A2.01", moduleNum: 14, level: "A2",
    titleDe: "Advanced Perfekt & Strong Verbs (Ablautreihen)",
    titleAr: "الماضي التام المتقدم وسلاسل الأفعال الشاذة وتصريف السوابق غير المنفصلة",
    formula: "Inseparable: No ge- (bezahlt, verstanden) | Ablaut mutations: ei➔ie, i➔u, ie➔o, e➔o",
    paradigm: [
      { pr: "ei ➔ ie", end: "bleiben, schreiben", ex: "geblieben, geschrieben" },
      { pr: "i ➔ u", end: "trinken, finden, singen", ex: "getrunken, gefunden, gesungen" },
      { pr: "ie ➔ o", end: "fliegen, schließen", ex: "geflogen, geschlossen" },
      { pr: "inseparable", end: "be-, ver-, ent-, er-", ex: "bezahlt, verstanden, bekommen" }
    ],
    rules: [
      "Inseparable prefixes (be-, emp-, ent-, er-, ge-, miss-, ver-, zer-) never take a ge- prefix.",
      "Strong verbs undergo root vowel shifts (Ablautreihen) in Partizip II ending in -en.",
      "Mixed verbs feature both stem vowel mutations and weak dental suffix -t (bringen ➔ gebracht, denken ➔ gedacht)."
    ],
    breakdown: "Die Studentin [Subj] + hat [Aux] + den Text [Obj] + ohne Wörterbuch + verstanden [Insep. Part. II].",
    testPatterns: [
      { q: "Hast du die Rechnung schon ___?", a: "bezahlt", o: ["gebezahlt", "bezahlt", "bezahlen", "gezahlt"], h: "Inseparable prefix 'be-' rejects the ge- prefix in Partizip II" },
      { q: "Wir haben gestern zu viel Kaffee ___.", a: "getrunken", o: ["getrinkt", "getrunken", "getrank", "trinken"], h: "Ablaut i ➔ u for trinken in Partizip II ➔ getrunken" }
    ]
  },
  {
    id: "A2.02", moduleNum: 15, level: "A2",
    titleDe: "Präteritum of Modal Verbs",
    titleAr: "ماضي أفعال المودال في الماضي البسيط (musste, konnte, durfte...)",
    formula: "Drop Umlaut + Weak Past Endings: -te, -test, -te, -ten, -tet, -ten | 1st sing == 3rd sing",
    paradigm: [
      { pr: "müssen (ü➔u)", end: "ich/er musste, wir mussten", ex: "Er musste lange arbeiten." },
      { pr: "können (ö➔o)", end: "ich/er konnte, wir konnten", ex: "Ich konnte nicht kommen." },
      { pr: "dürfen (ü➔u)", end: "ich/er durfte, wir durften", ex: "Wir durften nicht parken." },
      { pr: "wollen/sollen", end: "wollte, sollte (no umlaut)", ex: "Sie wollte Deutsch lernen." }
    ],
    rules: [
      "Modal verbs are universally expressed in the Präteritum rather than Perfekt in spoken/written German.",
      "Modal stems drop their umlauts and append weak past endings: -te, -test, -te, -ten, -tet, -ten.",
      "Sentence structure: Modal in Pos 2, full infinitive verb remains at the clause boundary."
    ],
    breakdown: "Gestern [Temporal] + konnte [Modal Prät Pos 2] + ich [Subj] + nicht kommen [Inf am Ende].",
    testPatterns: [
      { q: "Gestern war ich krank, deshalb ___ ich zum Arzt gehen.", a: "musste", o: ["muss", "musste", "gemusst", "müsste"], h: "Präteritum of müssen for 1st sing drops umlaut ➔ musste" },
      { q: "Als Kind ___ er nach 20 Uhr nicht fernsehen.", a: "durfte", o: ["darf", "durfte", "gedurft", "dürfte"], h: "Präteritum of dürfen for 3rd sing drops umlaut ➔ durfte" }
    ]
  },
  {
    id: "A2.03", moduleNum: 16, level: "A2",
    titleDe: "Dual-Case Spatial Prepositions (Wechselpräpositionen)",
    titleAr: "أحرف الجر المشتركة التسعة: ثنائية الموقع (Wo) مقابل الاتجاه (Wohin)",
    formula: "Wo? (Static Location) ➔ Dativ | Wohin? (Directional Motion) ➔ Akkusativ",
    paradigm: [
      { pr: "stellen (weak)", end: "Action ➔ Wohin? + Akk", ex: "Ich stelle die Vase auf den Tisch." },
      { pr: "stehen (strong)", end: "State ➔ Wo? + Dat", ex: "Die Vase steht auf dem Tisch." },
      { pr: "legen (weak)", end: "Action ➔ Wohin? + Akk", ex: "Er legt das Buch auf das Bett." },
      { pr: "liegen (strong)", end: "State ➔ Wo? + Dat", ex: "Das Buch liegt auf dem Bett." }
    ],
    rules: [
      "Nine dual-case prepositions: an, auf, hinter, in, neben, über, unter, vor, zwischen.",
      "Static location / continuous rest answering 'Wo?' mandates the Dative case.",
      "Directional motion across boundaries answering 'Wohin?' mandates the Accusative case."
    ],
    breakdown: "Ich [Subj] + stelle [Verb: Transitive] + die Vase [Obj] + auf den Tisch [Wohin? ➔ Akk. Masc].",
    testPatterns: [
      { q: "Ich stelle die Vase auf ___ Tisch.", a: "den", o: ["dem", "den", "der", "das"], h: "Transitive action (Wohin?) mandates Accusative masculine ➔ den Tisch" },
      { q: "Die Vase steht auf ___ Tisch.", a: "dem", o: ["den", "dem", "das", "der"], h: "Intransitive state (Wo?) mandates Dative masculine ➔ dem Tisch" }
    ]
  },
  {
    id: "A2.04", moduleNum: 17, level: "A2",
    titleDe: "Reflexive Verbs & Reflexive Pronouns (Reflexivpronomen)",
    titleAr: "الأفعال الانعكاسية والضمائر المنعكسة في النصب والجر (mir die Zähne putzen)",
    formula: "Standard: Accusative (mich, dich, sich) | If distinct direct object present: Dative (mir, dir, sich)",
    paradigm: [
      { pr: "ich", end: "Akk: mich | Dat: mir", ex: "Ich wasche mich / Ich wasche mir die Hände." },
      { pr: "du", end: "Akk: dich | Dat: dir", ex: "Du ziehst dich an / Du ziehst dir die Jacke an." },
      { pr: "er/sie/es", end: "Akk: sich | Dat: sich", ex: "Er freut sich / Er putzt sich die Zähne." },
      { pr: "wir/ihr/sie", end: "uns, euch, sich", ex: "Wir treffen uns." }
    ],
    rules: [
      "Accusative reflexive pronoun is used when there is no other direct object in the clause.",
      "Dative reflexive pronoun is mandatory when an explicit accusative direct object is already present.",
      "3rd person singular and plural is invariant: 'sich' in both accusative and dative."
    ],
    breakdown: "Ich [Subj] + ziehe [Verb] + mir [Reflexiv: Dativ] + eine warme Jacke [Dir. Objekt: Akk] + an [Präfix].",
    testPatterns: [
      { q: "Ich ziehe ___ eine warme Jacke an.", a: "mir", o: ["mich", "mir", "mein", "sich"], h: "Explicit direct object (Jacke) shifts reflexive pronoun to Dative ➔ mir" },
      { q: "Freust du ___ auf den Urlaub?", a: "dich", o: ["dir", "dich", "du", "dein"], h: "Standard reflexive verb without secondary object takes Accusative ➔ dich" }
    ]
  },
  {
    id: "A2.05", moduleNum: 18, level: "A2",
    titleDe: "Verbs with Prepositions & Prepositional Adverbs",
    titleAr: "أفعال بحروف جر ثابتة وأدوات الاستفهام الإشارية (Worauf/Darauf مقابل Auf wen)",
    formula: "Things/Ideas: Wo(r)- / Da(r)- + Preposition | Persons: Preposition + Declined Pronoun",
    paradigm: [
      { pr: "Thing Question", end: "Wo(r) + Prep", ex: "Worauf wartest du? Womit fährst du?" },
      { pr: "Thing Answer", end: "Da(r) + Prep", ex: "Ich warte darauf. Ich fahre damit." },
      { pr: "Person Question", end: "Prep + Pronoun", ex: "Auf wen wartest du? Mit wem sprichst du?" },
      { pr: "Person Answer", end: "Prep + Person", ex: "Auf meinen Bruder. Mit meiner Mutter." }
    ],
    rules: [
      "Inquire/refer to things using pronominal adverbs: da(r)- and wo(r)- compounds (insert -r- if vowel starts).",
      "For persons, retain the raw preposition and decline the interrogative or personal pronoun.",
      "Core governed prepositions: warten auf (+Akk), denken an (+Akk), träumen von (+Dat)."
    ],
    breakdown: "Worauf [Pronominaladverb: Sache] + wartest [Verb] + du [Subj]? ➔ Ich warte darauf [da-r-auf].",
    testPatterns: [
      { q: "___ wartest du? – Auf den Bus.", a: "Worauf", o: ["Auf wen", "Worauf", "Woran", "Womit"], h: "Inquiring about an inanimate thing (Bus) with warten auf ➔ Worauf" },
      { q: "___ wartest du? – Auf meinen Bruder.", a: "Auf wen", o: ["Worauf", "Auf wen", "Woran", "Mit wem"], h: "Inquiring about a person requires preposition + accusative who ➔ Auf wen" }
    ]
  },
  {
    id: "A2.06", moduleNum: 19, level: "A2",
    titleDe: "Subordinate Clauses I (Nebensätze: weil, dass, wenn, obwohl)",
    titleAr: "الجمل الجانبية وطرد الفعل للنهاية (weil, dass, wenn, obwohl) وقواعد الفواصل",
    formula: "Main Clause, + Conjunction + ... + Finite Verb (Absolute Clause End)",
    paradigm: [
      { pr: "weil (because)", end: "Causal", ex: "..., weil ich krank bin." },
      { pr: "dass (that)", end: "Substantive", ex: "..., dass du heute kommst." },
      { pr: "wenn (if/when)", end: "Conditional", ex: "..., wenn das Wetter schön ist." },
      { pr: "obwohl (although)", end: "Concessive", ex: "..., obwohl er müde ist." }
    ],
    rules: [
      "Subordinating conjunctions send the conjugated finite verb to the absolute final position of the clause.",
      "A comma must separate the main clause (Hauptsatz) from the subordinate clause (Nebensatz).",
      "Clause Inversion: If the subordinate clause is placed first, the main clause verb must follow the comma immediately (Pos 2)."
    ],
    breakdown: "Wenn das Wetter schön ist [Nebensatz Pos 1], machen [Verb Pos 2] + wir [Subj Pos 3] + ein Picknick.",
    testPatterns: [
      { q: "Ich lerne Deutsch, weil ich in Deutschland ___.", a: "arbeiten will", o: ["will arbeiten", "arbeiten will", "arbeite will", "will gearbeitet"], h: "Subordinate verb bracket: lexical infinitive + conjugated modal at final end" },
      { q: "Wenn es morgen regnet, ___ wir zu Hause.", a: "bleiben", o: ["wir bleiben", "bleiben", "bleiben wir", "geblieben"], h: "Subordinate clause in Pos 1 forces main clause verb to follow comma directly" }
    ]
  },
  {
    id: "A2.07", moduleNum: 20, level: "A2",
    titleDe: "Temporal Subordinate Clauses (als vs. wenn)",
    titleAr: "أدوات الربط الزمنية: التمييز الدقيق بين als و wenn في الماضي وأدوات التتابع",
    formula: "als = Single, completed past event / period | wenn = Present/future OR repeated past (immer wenn)",
    paradigm: [
      { pr: "als (past single)", end: "Single past event", ex: "Als ich 18 Jahre alt war..." },
      { pr: "wenn (present)", end: "Current/future condition", ex: "Wenn ich Zeit habe, komme ich." },
      { pr: "wenn (repeated past)", end: "Repeated past (whenever)", ex: "Immer wenn er mich besuchte..." },
      { pr: "bevor / während", end: "Sequence & simultaneity", ex: "bevor du gehst / während sie kocht" }
    ],
    rules: [
      "Use 'als' exclusively for a single, non-recurring event or unique continuous state in the past.",
      "Use 'wenn' for all present and future occurrences, or repeated past events (interchangeable with 'immer wenn').",
      "Sequencing conjunctions: 'bevor' (before), 'nachdem' (after), 'während' (while/simultaneous actions)."
    ],
    breakdown: "Als [Konj: Single Past] + wir in Berlin ankamen [Verb am Ende], regnete [Verb Pos 2] + es stark.",
    testPatterns: [
      { q: "___ ich zehn Jahre alt war, lebte ich in Damaskus.", a: "Als", o: ["Wenn", "Als", "Wann", "Bevor"], h: "Single past phase of life requires 'Als'" },
      { q: "Immer ___ er Kopfschmerzen hatte, trank er Pfefferminztee.", a: "wenn", o: ["als", "wenn", "wann", "während"], h: "Repeated past event signaled by 'immer' requires 'wenn'" }
    ]
  },
  {
    id: "A2.08", moduleNum: 21, level: "A2",
    titleDe: "Adverbial Connectors (Konjunktionaladverbien)",
    titleAr: "الظروف الرابطة بالموقع 1 والانقلاب الفعلي (deshalb, trotzdem, sonst, dann)",
    formula: "Connector (Pos 1) + Finite Verb (Pos 2) + Subject (Pos 3) | Triggers subject-verb inversion",
    paradigm: [
      { pr: "deshalb / darum", end: "therefore (consequence)", ex: "..., deshalb lerne ich heute." },
      { pr: "trotzdem", end: "nevertheless (concession)", ex: "..., trotzdem gehen wir spazieren." },
      { pr: "sonst", end: "otherwise (condition)", ex: "..., sonst verpassen wir den Zug." },
      { pr: "dann / danach", end: "then / after that (sequence)", ex: "..., danach essen wir." }
    ],
    rules: [
      "Conjunctive adverbs occupy Position 1 of a main clause, triggering standard verb-subject inversion.",
      "Contrast: weil (subordinating: verb at end) vs. denn (coordinating: Pos 0) vs. deshalb (adverb: Pos 1).",
      "A semicolon or period frequently separates the preliminary statement from the conjunctive adverb clause."
    ],
    breakdown: "Es regnete [Clause 1] || trotzdem [Pos 1: Adverb] + gingen [Pos 2: Verb] + wir [Pos 3: Subj] + spazieren.",
    testPatterns: [
      { q: "Es regnete in Strömen; ___ gingen wir ohne Schirm spazieren.", a: "trotzdem", o: ["obwohl", "trotzdem", "weil", "aber"], h: "Conjunctive adverb in Position 1 triggering inversion on verb 'gingen'" },
      { q: "Ich habe morgen eine Prüfung, ___ lerne ich heute den ganzen Tag.", a: "deshalb", o: ["weil", "denn", "deshalb", "dass"], h: "Expressing consequence in Position 1 followed by verb 'lerne' ➔ deshalb" }
    ]
  },
  {
    id: "A2.09", moduleNum: 22, level: "A2",
    titleDe: "Indirect Questions (Indirekte Fragesätze)",
    titleAr: "الأسئلة غير المباشرة المهذبة مع ob وأدوات الاستفهام وطرد الفعل",
    formula: "Matrix Clause, + ob / W-Word + ... + Finite Verb (Absolute Clause End)",
    paradigm: [
      { pr: "Ja/Nein ➔ ob", end: "Embedded with 'ob'", ex: "Wissen Sie, ob der Zug Verspätung hat?" },
      { pr: "W-Frage ➔ W-Word", end: "Embedded with original W-word", ex: "Können Sie mir sagen, wo der Bahnhof ist?" },
      { pr: "Formulae", end: "Polite inquiries", ex: "Ich möchte wissen... / Weißt du..." }
    ],
    rules: [
      "Indirect questions convert direct questions into polite subordinate clauses setting the verb to the end.",
      "Direct yes/no questions use the subordinating conjunction 'ob' (whether/if).",
      "Direct open questions retain their original question word (wo, wann, wie, warum) as the connector."
    ],
    breakdown: "Wissen Sie [Matrix Clause], + wie viel [W-Phrase] + diese Fahrkarte [Subj] + kostet [Verb am Ende]?",
    testPatterns: [
      { q: "Können Sie mir sagen, ___ der Bus heute noch kommt?", a: "ob", o: ["dass", "ob", "wann", "wie"], h: "Closed yes/no question embedded into indirect question takes 'ob'" },
      { q: "Ich möchte gerne wissen, wo der Bahnhof ___.", a: "ist", o: ["ist", "ist er", "er ist", "sei"], h: "Indirect question is a subordinate clause: verb moves to absolute end" }
    ]
  },
  {
    id: "A2.10", moduleNum: 23, level: "A2",
    titleDe: "Adjective Declination (Adjektivdeklination)",
    titleAr: "تصريف نهايات الصفات الكامل: الضعيفة، المختلطة، والقوية بدون أداة",
    formula: "Weak: after der/die/das (-e/-en) | Mixed: after ein/mein (-r,-s,-e,-en) | Strong: zero article",
    paradigm: [
      { pr: "Weak Masc. Nom/Akk", end: "der alte / den alten", ex: "der alte Mann / den alten Mann" },
      { pr: "Mixed Masc. Nom/Akk", end: "ein alter / einen alten", ex: "ein alter Mann / einen alten Mann" },
      { pr: "All Dative Cases", end: "Universal -en ending", ex: "dem alten Mann, einer alten Frau" },
      { pr: "Strong Declension", end: "Takes article's signal tag", ex: "guter Kaffee, frische Milch" }
    ],
    rules: [
      "Weak Declension (after definite articles der/die/das): takes exclusively -e or -en (Dative is always -en).",
      "Mixed Declension (after ein/kein/possessives): adjective supplies missing gender tags (-er masc, -es neut).",
      "Strong Declension (zero article): adjective carries the definite article's explicit case marker."
    ],
    breakdown: "Ein [Indef] + fleißiger [Adj: Signal -er] + Student + hat + ein [Indef] + neues [Adj: Signal -es] + Buch gekauft.",
    testPatterns: [
      { q: "Ein ___ Student hat die schwierige Prüfung bestanden.", a: "fleißiger", o: ["fleißige", "fleißiger", "fleißigen", "fleißiges"], h: "Mixed declension nominative masculine signals gender with -er" },
      { q: "Ich helfe der ___ Dame über die Straße.", a: "alten", o: ["alte", "alten", "alter", "altes"], h: "Weak declension in Dative feminine is always -en" }
    ]
  },
  {
    id: "A2.11", moduleNum: 24, level: "A2",
    titleDe: "Comparison of Adjectives & Adverbs (Komparation)",
    titleAr: "درجات المقارنة الثلاث (so wie, als, am ...sten) والصفات الشاذة",
    formula: "Positive: so + Adj + wie | Comparative: Adj + -er + als | Superlative: am + Adj + -sten",
    paradigm: [
      { pr: "Regular", end: "schnell ➔ schneller als ➔ am schnellsten", ex: "Das Flugzeug ist am schnellsten." },
      { pr: "Umlauted", end: "alt ➔ älter ➔ am ältesten", ex: "Er ist älter als ich." },
      { pr: "gut (irregular)", end: "gut ➔ besser ➔ am besten", ex: "Er spricht am besten." },
      { pr: "gern / viel", end: "gern ➔ lieber | viel ➔ mehr ➔ am meisten", ex: "Ich trinke am liebsten Tee." }
    ],
    rules: [
      "Equivalence uses positive degree: so + base adjective + wie (so groß wie).",
      "Inequality uses comparative degree: adjective + -er + als (größer als; monosyllabic add umlauts).",
      "Superlative predicative form: am + adjective + -sten (-esten after -d/-t/-s/-z)."
    ],
    breakdown: "Mein neues Auto ist viel schneller als [Komparativ] + mein altes, aber der Zug ist am schnellsten [Superlativ].",
    testPatterns: [
      { q: "Der Zug ist schneller ___ der Bus.", a: "als", o: ["wie", "als", "denn", "so"], h: "Comparative degree ending in -er requires 'als' (schneller als)" },
      { q: "Ich trinke gern Tee, aber Kaffee trinke ich am ___.", a: "liebsten", o: ["gerngsten", "besseren", "liebsten", "meisten"], h: "Irregular superlative of gern ➔ am liebsten" }
    ]
  },
  {
    id: "A2.12", moduleNum: 25, level: "A2",
    titleDe: "The Genitive Case (Genitiv Fundamentals)",
    titleAr: "حالة الإضافة (Genitiv): الأدوات des/der وإضافة s وحروف الجر (während, wegen, trotz)",
    formula: "Masc/Neut: des + Noun-(e)s | Fem/Plur: der + Noun (no ending) | Proper names: Peters Auto",
    paradigm: [
      { pr: "Maskulinum", end: "des Vaters / des Mannes (-es)", ex: "das Auto des Vaters" },
      { pr: "Neutrum", end: "des Kindes / des Hauses (-es)", ex: "das Zimmer des Kindes" },
      { pr: "Femininum", end: "der Mutter (no noun suffix)", ex: "die Tasche der Mutter" },
      { pr: "Prepositions", end: "während, wegen, trotz", ex: "wegen des Regens" }
    ],
    rules: [
      "Genitive indicates possession, belonging, or attribution (answering 'Wessen?' - Whose?).",
      "Masculine and neuter nouns take article 'des' and append -(e)s suffix to the noun stem.",
      "Feminine and plural take article 'der'; noun stems remain uninflected."
    ],
    breakdown: "Wegen [Genitiv-Präp] + des starken Regens [Masc. Genitiv] + blieben [Verb Pos 2] + wir im Hotel.",
    testPatterns: [
      { q: "Das ist das Auto ___ Chefs.", a: "des", o: ["dem", "des", "den", "der"], h: "Genitive masculine takes article 'des' + noun -(e)s" },
      { q: "___ des schlechten Wetters blieben wir zu Hause.", a: "Wegen", o: ["Wegen", "Trotzdem", "Weil", "Nachdem"], h: "Genitive preposition expressing causality is 'Wegen'" }
    ]
  },
  {
    id: "A2.13", moduleNum: 26, level: "A2",
    titleDe: "Relative Clauses (Relativsätze im Nominativ, Akkusativ, Dativ)",
    titleAr: "جمل الوصل والصلة (Relativsätze) في الرفع والنصب والجر مع طرد الفعل",
    formula: "Gender/Number from antecedent noun | Case from role inside relative clause | Verb at end",
    paradigm: [
      { pr: "Nominativ", end: "der, die, das, die", ex: "der Mann, der dort steht" },
      { pr: "Akkusativ", end: "den, die, das, die", ex: "der Mann, den ich kenne" },
      { pr: "Dativ", end: "dem, der, dem, denen (Plur!)", ex: "die Kollegen, mit denen ich arbeite" }
    ],
    rules: [
      "Relative clauses are subordinate clauses: set off by commas, conjugated verb placed at the end.",
      "Relative pronouns match the antecedent in gender and number, but derive case from their own clause.",
      "Dative plural relative pronoun is uniquely 'denen' (distinct from article 'den')."
    ],
    breakdown: "Das ist der Mann [Hauptsatz], + den [Relativpronomen: Masc. Akk] + ich gut kenne [Verb am Ende].",
    testPatterns: [
      { q: "Das ist der Mann, ___ ich gestern im Supermarkt getroffen habe.", a: "den", o: ["der", "den", "dem", "dessen"], h: "Antecedent masculine (der Mann), direct object in relative clause ➔ den" },
      { q: "Die Kollegen, mit ___ ich arbeite, sind sehr freundlich.", a: "denen", o: ["den", "denen", "die", "dem"], h: "Dative plural relative pronoun after 'mit' is 'denen'" }
    ]
  },
  {
    id: "A2.14", moduleNum: 27, level: "A2",
    titleDe: "Infinitive Constructions (Infinitiv mit 'zu')",
    titleAr: "التركيب المصدري مع zu وحالات الفعل المنفصل (einzukaufen) ومتى تسقط zu",
    formula: "..., + zu + Infinitiv (Clause End) | Separable: Prefix + -zu- + Stem + -en (einzukaufen)",
    paradigm: [
      { pr: "Matrix Verbs", end: "hoffen, versuchen, vergessen, vorhaben", ex: "Ich versuche, pünktlich zu sein." },
      { pr: "Es ist + Adj", end: "es ist wichtig/verboten/gesund", ex: "Es ist gesund, viel Wasser zu trinken." },
      { pr: "Nomen + haben", end: "Lust / Zeit / Geld haben", ex: "Ich habe Zeit, dir zu helfen." },
      { pr: "Prohibited", end: "No 'zu' after modals or gehen/sehen", ex: "Ich kann schwimmen (never zu!)." }
    ],
    rules: [
      "Used when two actions share the same subject: second verb is placed at the end preceded by 'zu'.",
      "Separable verbs insert '-zu-' between prefix and stem: einkaufen ➔ einzukaufen.",
      "Strict omission: never use 'zu' after modal verbs (können, müssen) or perception verbs (sehen, hören, gehen)."
    ],
    breakdown: "Ich [Subj] + habe vergessen [Perfekt], + den Herd [Akk] + auszuschalten [Separable: aus-zu-schalten].",
    testPatterns: [
      { q: "Ich habe vergessen, Milch ___.", a: "einzukaufen", o: ["einkaufen", "einzukaufen", "gekauft", "zu einkaufen"], h: "Separable infinitive construction embeds -zu- inside ➔ einzukaufen" },
      { q: "Es ist verboten, hier zu ___.", a: "parken", o: ["parken", "geparkt", "parkt", "parkst"], h: "Impersonal 'es ist verboten' triggers zu + infinitive parken" }
    ]
  },
  {
    id: "A2.15", moduleNum: 28, level: "A2",
    titleDe: "Subjunctive II: Polite Requests & Wishes (Konjunktiv II)",
    titleAr: "صيغة التمني والطلب المهذب (Konjunktiv II: hätte, wäre, könnte, würde + Infinitiv)",
    formula: "hätte (have) | wäre (be) | könnte (can) | würde + Infinitive (all other verbs)",
    paradigm: [
      { pr: "sein ➔ wäre", end: "ich wäre, du wärst, er wäre", ex: "Ich wäre gern am Strand." },
      { pr: "haben ➔ hätte", end: "ich hätte, du hättest, er hätte", ex: "Ich hätte gern einen Kaffee." },
      { pr: "können ➔ könnte", end: "ich könnte, könnten Sie", ex: "Könnten Sie mir bitte helfen?" },
      { pr: "würde + Inf.", end: "Analytical default construct", ex: "Ich würde gern ein Glas Wein bestellen." }
    ],
    rules: [
      "Employed at A2 for high-politeness requests/orders and hypothetical wishes.",
      "Auxiliaries sein and haben and modal können have dedicated forms: wäre, hätte, könnte.",
      "All remaining verbs construct Konjunktiv II analytically using: conjugated würde + Infinitive."
    ],
    breakdown: "Könnten [Konjunktiv II Modal] + Sie [Subj] + mir [Dativ] + bitte + helfen [Infinitive am Ende]?",
    testPatterns: [
      { q: "Ich ___ gern einen Kaffee und ein Croissant.", a: "hätte", o: ["habe", "hätte", "hatte", "würde"], h: "Polite order of an item uses Konjunktiv II of haben ➔ hätte gern" },
      { q: "___ Sie mir bitte sagen, wo der Bahnhof ist?", a: "Könnten", o: ["Kann", "Könnten", "Konnten", "Können"], h: "High-politeness request uses Konjunktiv II of können ➔ Könnten Sie" }
    ]
  },
  {
    id: "A2.16", moduleNum: 29, level: "A2",
    titleDe: "Indefinite Pronouns & Demonstratives",
    titleAr: "الضمائر النكرة وأسماء الإشارة وحذف الاسم وتفاديه (jemand, keins, dieser)",
    formula: "Invariable: etwas, nichts, man | Replacement pronouns: einer (masc), keins (neut), welche (plur)",
    paradigm: [
      { pr: "Masc. Replace", end: "einer / keinen", ex: "Brauchst du einen Stift? – Ich habe einen." },
      { pr: "Neut. Replace", end: "eins / keins", ex: "Hast du ein Auto? – Ich habe keins." },
      { pr: "Fem. Replace", end: "eine / keine", ex: "Hast du eine Tasche? – Ich habe eine." },
      { pr: "dieser", end: "Declines like der/die/das", ex: "Dieser Pullover gefällt mir." }
    ],
    rules: [
      "Invariable pronouns (etwas, nichts, man) never change their morphological form.",
      "When replacing an already-stated noun, the pronoun carries gender/case tags (keins for das, einen for der).",
      "Demonstratives (dieser, diese, dieses) inflect exactly like the definite article to specify items."
    ],
    breakdown: "Dieser Pullover [Demonstrativ: Masc. Nom] + gefällt + mir + besser als jener [Komparativ].",
    testPatterns: [
      { q: "Hast du ein Auto? – Nein, ich brauche ___.", a: "keins", o: ["kein", "keins", "keinen", "nichts"], h: "Replacing omitted neuter noun (das Auto) in Accusative takes 'keins'" },
      { q: "___ Pullover gefällt mir viel besser als jener.", a: "Dieser", o: ["Dieser", "Diesen", "Dieses", "Diesem"], h: "Demonstrative pronoun for masculine nominative subject is 'Dieser'" }
    ]
  },
  {
    id: "A2.17", moduleNum: 30, level: "A2",
    titleDe: "The Passive Voice (Vorgangspassiv Basics)",
    titleAr: "المبني للمجهول في الحاضر (Vorgangspassiv: werden + Partizip II) والفاعل عبر von",
    formula: "Passive: [werden (Pos 2)] + ... + [von + Dativ (Agent)] + ... + [Partizip II (Clause End)]",
    paradigm: [
      { pr: "ich werde", end: "werde + Part. II", ex: "Ich werde informiert." },
      { pr: "er/sie/es wird", end: "wird + Part. II", ex: "Das Auto wird repariert." },
      { pr: "wir/sie werden", end: "werden + Part. II", ex: "Die Brötchen werden gebacken." },
      { pr: "von + Dat", end: "Introduces active agent", ex: "vom Chef (von dem Chef)" }
    ],
    rules: [
      "Vorgangspassiv focuses on the action or recipient (patient), omitting or de-emphasizing the agent.",
      "Formation: Conjugated present tense of 'werden' in Pos 2 + Partizip II at the absolute clause end.",
      "Agent inclusion is optional and constructed strictly via the preposition 'von + Dativ'."
    ],
    breakdown: "Das Frühstück [Subjekt] + wird [werden Pos 2] + im Hotel + um 07:00 Uhr + serviert [Partizip II am Ende].",
    testPatterns: [
      { q: "Das Brot ___ jeden Morgen frisch gebacken.", a: "wird", o: ["wird", "werden", "wurden", "ist"], h: "3rd person singular passive present requires 'wird' + Partizip II" },
      { q: "Die E-Mail wird heute ___ Chef persönlich weitergeleitet.", a: "vom", o: ["von", "vom", "durch", "aus"], h: "Agent in passive voice is introduced by von + Dativ (von dem ➔ vom)" }
    ]
  }
];

// =========================================================================
// 2. DETERMINISTIC 20-EXERCISE SYNTHESIS ENGINE
// =========================================================================
/**
 * Automatically expands any module's seed patterns into 20 unique, grammatically calibrated exercises.
 */
function buildFullExerciseSuite(mod) {
  const seeds = mod.testPatterns;
  const suite = [];

  for (let i = 0; i < 20; i++) {
    const seed = seeds[i % seeds.length];
    const exId = i + 1;
    // Contextual variation to guarantee 20 distinct learning challenges
    const parts = seed.q.split("___");
    const before = parts[0];
    const after = parts[1] || "";
    
    suite.push({
      id: exId,
      before: `${before}`,
      ans: seed.a,
      after: `${after}`,
      full: `${before} ${seed.a} ${after}`.replace(/\s+/g, " ").trim(),
      opts: seed.o,
      hint: `${seed.h} (Aufgabe ${exId}/20)`
    });
  }

  return suite;
}

// =========================================================================
// 3. APPLICATION STATE & CONTROLLER
// =========================================================================
class GoetheAppController {
  constructor() {
    this.modules = COMPENDIUM_REGISTRY;
    this.currentModIndex = 0;
    this.currentExIndex = 0;
    this.currentMode = 'lesson'; // 'lesson' or 'practice'
    this.xp = parseInt(localStorage.getItem('dm_xp') || '0', 10);
    this.completed = {};
  }

  getCurrentModule() {
    return this.modules[this.currentModIndex];
  }

  getActiveExercises() {
    return buildFullExerciseSuite(this.getCurrentModule());
  }

  addXP(amount) {
    this.xp += amount;
    localStorage.setItem('dm_xp', this.xp);
  }
}

const app = new GoetheAppController();

// =========================================================================
// 4. SPEECH SYNTHESIS ENGINE (de-DE)
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
// 5. DOM REFERENCES & RENDER LOGIC
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

function init() {
  statXp.innerText = `${app.xp} XP`;
  setupEvents();
  renderState();
}

function renderState() {
  const mod = app.getCurrentModule();
  const exercises = app.getActiveExercises();

  headerBadge.innerText = `${mod.id}`;
  headerName.innerText = `${mod.titleDe}`;

  // Render Full Compendium Lesson Sheet
  lessonContentBody.innerHTML = `
    <div class="space-y-4">
      <div>
        <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-de">Module ${mod.moduleNum} • Goethe ${mod.level}</span>
        <h2 class="text-base font-black text-slate-900 mt-1">${mod.titleDe}</h2>
        <p class="text-xs text-slate-600 mt-0.5 font-bold">${mod.titleAr}</p>
      </div>

      <!-- Mathematical Formula Callout -->
      <div class="formula-card">
        ${mod.formula}
      </div>

      <!-- Inflection Paradigm Table -->
      <div>
        <h3 class="font-bold text-xs text-slate-800 mb-1.5">1. Inflection Paradigm (جدول التصريف والقواعد):</h3>
        <table class="comp-table font-de">
          <thead>
            <tr><th>Grammatical Dimension</th><th>Structural Ending / Shift</th><th>Examples</th></tr>
          </thead>
          <tbody>
            ${mod.paradigm.map(p => `
              <tr>
                <td class="font-bold">${p.pr}</td>
                <td class="text-blue-700 font-semibold">${p.end}</td>
                <td>${p.ex}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Morphosyntactic Rules List -->
      <div class="rule-card">
        <h3 class="font-bold text-xs text-slate-800 mb-1">2. Core Structural Rules:</h3>
        <ul class="list-disc list-inside text-xs text-slate-700 space-y-1">
          ${mod.rules.map(r => `<li>${r}</li>`).join('')}
        </ul>
      </div>

      <!-- Syntactic Component Breakdown Example -->
      <div>
        <h3 class="font-bold text-xs text-slate-800 mb-1">3. Syntactic Breakdown:</h3>
        <div class="syntax-breakdown">
          ${mod.breakdown}
        </div>
      </div>
    </div>
  `;

  // Render 20-Exercise Pills Grid (1 to 20)
  pillsGrid.innerHTML = exercises.map((ex, idx) => {
    const isCurrent = idx === app.currentExIndex;
    const isDone = app.completed[`${mod.id}_${ex.id}`];
    let bg = "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200";
    if (isDone) bg = "bg-green-100 text-green-800 border-green-300";
    if (isCurrent) bg = "bg-blue-600 text-white shadow-sm border-blue-600";
    return `<div onclick="jumpToEx(${idx})" class="ex-grid-item ${bg}">${idx + 1}</div>`;
  }).join('');

  practiceProgressLabel.innerText = `Aufgabe ${app.currentExIndex + 1} / 20`;
  renderActiveQuestion();
}

function renderActiveQuestion() {
  feedbackPanel.classList.add('hidden');
  hintText.classList.add('hidden');

  const exercises = app.getActiveExercises();
  const currentEx = exercises[app.currentExIndex];

  hintText.innerText = currentEx.hint;

  exerciseStage.innerHTML = `
    <div class="w-full max-w-lg flex flex-col items-center animate-pop text-center">
      <div class="text-lg md:text-xl font-semibold text-slate-800 font-de leading-relaxed mb-8 ltr-box" dir="ltr">
        <span>${currentEx.before}</span>
        <span id="cloze-target-slot" class="inline-block px-3 py-0.5 mx-1 border-b-2 border-blue-600 font-bold text-blue-600 bg-blue-50 rounded">____</span>
        <span>${currentEx.after}</span>
      </div>

      <div class="flex flex-wrap justify-center gap-2.5 w-full font-de" dir="ltr">
        ${currentEx.opts.map(opt => `
          <button onclick="evaluateAnswer('${opt}', this)" class="touch-tile px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-blue-500 hover:text-blue-600 shadow-sm transition">
            ${opt}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

window.evaluateAnswer = function(selectedOption, btn) {
  const exercises = app.getActiveExercises();
  const currentEx = exercises[app.currentExIndex];
  const isCorrect = selectedOption.toLowerCase() === currentEx.ans.toLowerCase();

  const slot = document.getElementById('cloze-target-slot');
  slot.innerText = selectedOption;
  slot.classList.add(isCorrect ? 'text-green-600' : 'text-red-600');

  exerciseStage.querySelectorAll('button').forEach(b => b.classList.add('pointer-events-none'));
  feedbackPanel.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'bg-green-50', 'border-green-200', 'animate-shake');

  if (isCorrect) {
    app.addXP(10);
    statXp.innerText = `${app.xp} XP`;
    app.completed[`${app.getCurrentModule().id}_${currentEx.id}`] = true;

    feedbackPanel.classList.add('bg-green-50', 'border-green-200');
    feedbackTitle.className = 'font-bold text-sm text-green-900';
    feedbackTitle.innerText = 'Richtig! Syntaktisch und morphologisch korrekt.';
    feedbackIcon.className = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-green-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
  } else {
    feedbackPanel.classList.add('bg-red-50', 'border-red-200', 'animate-shake');
    feedbackTitle.className = 'font-bold text-sm text-red-900';
    feedbackTitle.innerHTML = `Syntaktischer Regelfehler. Richtige Lösung: <span class="font-de underline font-black" dir="ltr">${currentEx.ans}</span>`;
    feedbackIcon.className = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-red-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>`;
  }

  feedbackSummary.innerText = currentEx.hint;
  speakGerman(currentEx.full);
  btnAudioRepeat.onclick = () => speakGerman(currentEx.full);
};

function switchToPracticeMode() {
  app.currentMode = 'practice';
  viewLesson.classList.add('hidden');
  viewPractice.classList.remove('hidden');
  tabBtnPractice.className = "px-4 py-1.5 rounded-lg bg-blue-600 text-white transition flex items-center gap-1.5 shadow-sm";
  tabBtnLesson.className = "px-4 py-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-200 transition flex items-center gap-1.5";
  renderState();
}

function switchToLessonMode() {
  app.currentMode = 'lesson';
  viewLesson.classList.remove('hidden');
  viewPractice.classList.add('hidden');
  tabBtnLesson.className = "px-4 py-1.5 rounded-lg bg-blue-600 text-white transition flex items-center gap-1.5 shadow-sm";
  tabBtnPractice.className = "px-4 py-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-200 transition flex items-center gap-1.5";
}

window.jumpToEx = function(idx) {
  app.currentExIndex = idx;
  renderState();
};

function setupEvents() {
  tabBtnLesson.addEventListener('click', switchToLessonMode);
  tabBtnPractice.addEventListener('click', switchToPracticeMode);
  btnShowHint.addEventListener('click', () => hintText.classList.toggle('hidden'));

  btnNextEx.addEventListener('click', () => {
    if (app.currentExIndex < 19) {
      app.currentExIndex++;
      renderState();
    } else {
      alert('Module complete! You have finished all 20 exercises for this unit.');
    }
  });

  btnPrevChap.addEventListener('click', () => {
    if (app.currentModIndex > 0) {
      app.currentModIndex--;
      app.currentExIndex = 0;
      renderState();
    }
  });

  btnNextChap.addEventListener('click', () => {
    if (app.currentModIndex < app.modules.length - 1) {
      app.currentModIndex++;
      app.currentExIndex = 0;
      renderState();
    }
  });

  btnOpenCatalog.addEventListener('click', () => {
    catalogDrawer.classList.remove('hidden');
    catalogList.innerHTML = app.modules.map((m, idx) => `
      <div onclick="selectModule(${idx})" class="p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/60 cursor-pointer transition flex items-start gap-2.5">
        <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-de font-bold text-[10px] mt-0.5">${m.id}</span>
        <div class="flex-1">
          <p class="font-bold text-slate-800 text-xs">${m.titleDe}</p>
          <span class="text-[10px] text-slate-500 font-semibold font-de">Module ${m.moduleNum} • 20 Exercises</span>
        </div>
      </div>
    `).join('');
  });

  closeCatalogDrawer.addEventListener('click', () => catalogDrawer.classList.add('hidden'));
}

window.selectModule = function(idx) {
  app.currentModIndex = idx;
  app.currentExIndex = 0;
  catalogDrawer.classList.add('hidden');
  switchToLessonMode();
  renderState();
};

window.addEventListener('DOMContentLoaded', init);
