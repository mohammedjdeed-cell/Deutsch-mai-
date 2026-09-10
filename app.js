/**
 * Deutsch mit Mai – Goethe A1 & A2 Compendium Engine
 * Direct Implementation of the Academic Compendium (Modules 1 to 30)
 */

const COMPENDIUM_DATABASE = {
  // =========================================================================
  // PART I: GOETHE-ZERTIFIKAT A1 (MODULES 1 TO 13)
  // =========================================================================

  "A1.01": {
    moduleNum: 1,
    level: "A1",
    titleDe: "Personal Pronouns & Present Tense Verb Conjugation (Präsens)",
    titleAr: "الضمائر الشخصية وتصريف أفعال الحاضر والتعديلات الصوتية للجذع",
    lessonHtml: `
      <div class="space-y-4">
        <div>
          <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-de">Module 1 • Start Deutsch 1</span>
          <h2 class="text-base font-black text-slate-900 mt-1">Personal Pronouns & Verb Conjugation (Präsens)</h2>
          <p class="text-xs text-slate-600 mt-0.5">اشتقاق جذر الفعل وإلحاق النهايات الصرفية بحسب الفاعل وتعديلات الأحرف الصوتية.</p>
        </div>

        <!-- 1. Grammatical Framework Formula -->
        <div class="formula-card">
          Infinitive - "-en" (or "-n") = Verb Stem<br>
          <span class="text-blue-300">lernen - en = lern-</span> | <span class="text-emerald-300">Stem + Personal Ending = Conjugated Verb</span>
        </div>

        <!-- 2. Inflection Paradigm -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1.5">1. Inflection Paradigm (جدول التصريف القياسي):</h3>
          <table class="comp-table font-de">
            <thead>
              <tr><th>Pronoun</th><th>Ending</th><th>lernen (to learn)</th><th>machen (to do)</th><th>wohnen (to reside)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>ich</strong> (أنا)</td><td class="text-blue-600 font-bold">-e</td><td>lerne</td><td>mache</td><td>wohne</td></tr>
              <tr><td><strong>du</strong> (أنتَ/أنتِ)</td><td class="text-blue-600 font-bold">-st</td><td>lernst</td><td>machst</td><td>wohnst</td></tr>
              <tr><td><strong>er / sie / es</strong> (هو/هي)</td><td class="text-blue-600 font-bold">-t</td><td>lernt</td><td>macht</td><td>wohnt</td></tr>
              <tr><td><strong>wir</strong> (نحن)</td><td class="text-blue-600 font-bold">-en</td><td>lernen</td><td>machen</td><td>wohnen</td></tr>
              <tr><td><strong>ihr</strong> (أنتم)</td><td class="text-blue-600 font-bold">-t</td><td>lernt</td><td>macht</td><td>wohnt</td></tr>
              <tr><td><strong>sie / Sie</strong> (هم/حضرتك)</td><td class="text-blue-600 font-bold">-en</td><td>lernen</td><td>machen</td><td>wohnen</td></tr>
            </tbody>
          </table>
        </div>

        <!-- 3. Stem Modifications & Auxiliaries -->
        <div class="space-y-2">
          <h3 class="font-bold text-xs text-slate-800">2. Stem Modifications & Auxiliaries (تعديلات الجذع والشواذ):</h3>
          <div class="p-2.5 bg-slate-50 border rounded-lg text-xs space-y-1.5">
            <p><strong>• Phonetic Insertion of -e-:</strong> Stems ending in <em>-t, -d</em> insert an <em>-e-</em> before <em>-st</em> and <em>-t</em> (لتسهيل النطق):<br>
            <span class="font-de text-blue-700">arbeiten ➔ du arbeit<strong>e</strong>st, er arbeit<strong>e</strong>t, ihr arbeit<strong>e</strong>t</span></p>
            <p><strong>• Sibilant Stem Reduction:</strong> Stems ending in <em>-s, -ss, -ß, -z, -tz</em> drop the <em>-s-</em> with <em>du</em>:<br>
            <span class="font-de text-blue-700">heißen ➔ du heiß<strong>t</strong></span> (not heißst!).</p>
            <p><strong>• Irregular Auxiliaries (sein & haben):</strong><br>
            <span class="font-de text-slate-700">sein: ich bin, du bist, er ist, wir sind, ihr seid, sie sind.</span><br>
            <span class="font-de text-slate-700">haben: ich habe, du hast, er hat, wir haben, ihr habt, sie haben.</span></p>
          </div>
        </div>

        <!-- 4. Structured Breakdown Examples -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1.5">3. Structured Examples with Syntactic Breakdown:</h3>
          <div class="syntax-breakdown">
            <p class="font-bold text-slate-900 font-de">Ich wohne in Berlin und arbeite dort.</p>
            <p class="text-slate-600 mt-1">
              <span class="tag-subj">[Subjekt: Ich]</span> + 
              <span class="tag-verb">[Verb 1: wohne (stem wohn- + -e)]</span> + 
              <span class="tag-prep">[Lokalangabe: in Berlin]</span> + 
              <span class="tag-adv">[Konjunktion: und]</span> + 
              <span class="tag-verb">[Verb 2: arbeite (stem arbeit- + -e)]</span> + 
              <span class="tag-adv">[Adverb: dort]</span>.
            </p>
            <p class="text-[11px] text-slate-500 mt-0.5">الترجمة: أنا أسكن في برلين وأعمل هناك.</p>
          </div>

          <div class="syntax-breakdown mt-2">
            <p class="font-bold text-slate-900 font-de">Er hat ein Buch und ist sehr zufrieden.</p>
            <p class="text-slate-600 mt-1">
              <span class="tag-subj">[Subjekt: Er]</span> + 
              <span class="tag-verb">[Hilfsverb: hat (irregular 3rd sing.)]</span> + 
              <span class="tag-obj">[Objekt: ein Buch]</span> + 
              <span class="tag-adv">[Konjunktion: und]</span> + 
              <span class="tag-verb">[Kopulaverb: ist]</span> + 
              <span class="tag-adv">[Prädikativ: sehr zufrieden]</span>.
            </p>
            <p class="text-[11px] text-slate-500 mt-0.5">الترجمة: هو يملك كتاباً وهو مسرور جداً.</p>
          </div>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich", ans: "wohne", after: "in Berlin.", full: "Ich wohne in Berlin.", opts: ["wohne", "wohnst", "wohnt", "wohnen"], hint: "Infinitive wohnen - en = wohn- + personal ending -e." },
      { id: 2, before: "Du", ans: "arbeitest", after: "zu viel im Krankenhaus.", full: "Du arbeitest zu viel im Krankenhaus.", opts: ["arbeitst", "arbeitest", "arbeitet", "arbeiten"], hint: "Stem ends in -t: Phonetic insertion of -e- before -st ➔ arbeitest." },
      { id: 3, before: "Wie", ans: "heißt", after: "du?", full: "Wie heißt du?", opts: ["heißest", "heißt", "heiße", "heißen"], hint: "Sibilant stem in -ß drops the -s- in 2nd person singular ➔ du heißt." },
      { id: 4, before: "Er", ans: "hat", after: "ein Buch und ist zufrieden.", full: "Er hat ein Buch und ist zufrieden.", opts: ["habe", "hast", "hat", "haben"], hint: "Irregular 3rd person singular of haben ➔ er hat." }
    ]
  },

  "A1.02": {
    moduleNum: 2,
    level: "A1",
    titleDe: "Sentence Architecture I (Main Clauses & Questions)",
    titleAr: "بناء الجملة: الفعل في المركز 2، الانقلاب (Inversion)، والأسئلة",
    lessonHtml: `
      <div class="space-y-4">
        <div>
          <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-de">Module 2 • Start Deutsch 1</span>
          <h2 class="text-base font-black text-slate-900 mt-1">The Verb-Second Rule (V2) & Interrogatives</h2>
          <p class="text-xs text-slate-600 mt-0.5">قاعدة قفل الفعل في المركز الثاني، قاعدة الانقلاب، وأسئلة نعم/لا وأدوات الاستفهام.</p>
        </div>

        <!-- 1. The Verb-Second Rule (V2) Table -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1.5">1. The V2 Positional Grid (مخطط المواقع الإعرابية):</h3>
          <table class="comp-table font-de">
            <thead>
              <tr><th>Position 1 (Vorfeld)</th><th>Position 2 (Finite Verb)</th><th>Position 3</th><th>Rest of Sentence (Mittelfeld)</th></tr>
            </thead>
            <tbody>
              <tr><td class="tag-subj">Wir (Subjekt)</td><td class="text-red-600 font-bold">lernen</td><td>heute</td><td>Deutsch in der Schule.</td></tr>
              <tr><td class="tag-adv">Heute (Temporal)</td><td class="text-red-600 font-bold">lernen</td><td class="tag-subj">wir (Inversion!)</td><td>Deutsch in der Schule.</td></tr>
              <tr><td class="tag-prep">In der Schule (Lokal)</td><td class="text-red-600 font-bold">lernen</td><td class="tag-subj">wir (Inversion!)</td><td>heute Deutsch.</td></tr>
            </tbody>
          </table>
          <p class="text-[11px] text-slate-500 mt-1"><strong>قاعدة الانقلاب (Inversion):</strong> إذا احتل أي عنصر غير الفاعل (كالزمان أو المكان) الموقع 1، يُجبر الفاعل على الانتقال فوراً إلى الموقع 3 خلف الفعل مباشرة!</p>
        </div>

        <!-- 2. Interrogative Clauses -->
        <div class="space-y-1.5">
          <h3 class="font-bold text-xs text-slate-800">2. Interrogative Architectures (أنماط الأسئلة):</h3>
          <div class="p-2.5 bg-slate-50 border rounded-lg text-xs space-y-1">
            <p><strong>• Closed Questions (Ja/Nein-Fragen):</strong> Verb locked in <strong>Position 1</strong>:<br>
            <span class="font-de text-blue-700 font-bold">[Verb (Pos 1)] + [Subjekt (Pos 2)] + [Objekt / Angaben (Pos 3+)]?</span><br>
            <em>Trinkst du morgens immer Kaffee?</em></p>
            <p><strong>• Open Questions (W-Fragen):</strong> Interrogative word in <strong>Position 1</strong>, Verb in <strong>Position 2</strong>:<br>
            <span class="font-de text-blue-700 font-bold">[W-Wort (Pos 1)] + [Verb (Pos 2)] + [Subjekt (Pos 3)]?</span><br>
            <em>Wer, Was, Wo, Wohin, Woher, Wann, Warum, Wie.</em></p>
          </div>
        </div>

        <!-- 3. Structured Examples -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1.5">3. Structured Breakdown Examples:</h3>
          <div class="syntax-breakdown">
            <p class="font-bold text-slate-900 font-de">Morgen fliegt meine Schwester nach Wien.</p>
            <p class="text-slate-600 mt-1">
              <span class="tag-adv">[Pos 1 (Temporal): Morgen]</span> + 
              <span class="tag-verb">[Pos 2 (Verb): fliegt]</span> + 
              <span class="tag-subj">[Pos 3 (Subjekt Inversion): meine Schwester]</span> + 
              <span class="tag-prep">[Direktional: nach Wien]</span>.
            </p>
            <p class="text-[11px] text-slate-500 mt-0.5">الترجمة: غداً تسافر أختي بالطائرة إلى فيينا.</p>
          </div>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Heute", ans: "lernen", after: "wir Deutsch in der Schule.", full: "Heute lernen wir Deutsch in der Schule.", opts: ["wir lernen", "lernen", "lernt", "lernen wir"], hint: "Inversion Rule: Temporal in Pos 1 requires Verb in Pos 2." },
      { id: 2, before: "Trinkst", ans: "du", after: "morgens immer Kaffee?", full: "Trinkst du morgens immer Kaffee?", opts: ["du", "dich", "dir", "dein"], hint: "Ja/Nein-Frage: Verb occupies Pos 1, subject follows in Pos 2." }
    ]
  },

  "A1.04": {
    moduleNum: 4,
    level: "A1",
    titleDe: "The Accusative Case (Akkusativ)",
    titleAr: "حالة النصب (Akkusativ): المفعول به المباشر، تحول المذكر، وأحرف DOGFU",
    lessonHtml: `
      <div class="space-y-4">
        <div>
          <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-de">Module 4 • Start Deutsch 1</span>
          <h2 class="text-base font-black text-slate-900 mt-1">Direct Objects & The Accusative Case</h2>
          <p class="text-xs text-slate-600 mt-0.5">تحديد المفعول به المباشر، انحصار التغير في المذكر فقط، وأحرف الجر الخمسة الإلزامية.</p>
        </div>

        <!-- 1. Article Declension Paradigm -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1">1. Article Declension (انحصار التغير بالمذكر فقط):</h3>
          <table class="comp-table font-de">
            <thead>
              <tr><th>Gender / Number</th><th>Nominative</th><th>Accusative</th><th>Morphological Shift</th></tr>
            </thead>
            <tbody>
              <tr class="bg-blue-50/70 font-bold">
                <td>Maskulinum (مذكر)</td>
                <td>der / ein / kein</td>
                <td class="text-blue-700">den / einen / keinen</td>
                <td>-er / -ein ➔ -en / -einen</td>
              </tr>
              <tr><td>Femininum (مؤنث)</td><td>die / eine / keine</td><td>die / eine / keine</td><td>No change (لا تغيير)</td></tr>
              <tr><td>Neutrum (محايد)</td><td>das / ein / kein</td><td>das / ein / kein</td><td>No change (لا تغيير)</td></tr>
              <tr><td>Plural (جمع)</td><td>die / -- / keine</td><td>die / -- / keine</td><td>No change (لا تغيير)</td></tr>
            </tbody>
          </table>
        </div>

        <!-- 2. DOGFU Prepositions & Pronouns -->
        <div class="space-y-2">
          <h3 class="font-bold text-xs text-slate-800">2. Personal Pronouns & Absolute DOGFU Prepositions:</h3>
          <div class="formula-card">
            Accusative Pronouns: mich | dich | ihn | sie | es | uns | euch | sie / Sie
          </div>
          <div class="p-2.5 bg-slate-50 border rounded-lg text-xs">
            <p class="font-bold text-slate-900 mb-1">Absolute Accusative Prepositions (DOGFU):</p>
            <ul class="list-disc list-inside space-y-0.5 font-de text-slate-700">
              <li><strong>Durch</strong> (through): <em>Wir gehen durch <u>den</u> Park.</em></li>
              <li><strong>Ohne</strong> (without): <em>Er kommt ohne <u>seinen</u> Mantel.</em></li>
              <li><strong>Gegen</strong> (against): <em>Das Auto prallt gegen <u>den</u> Baum.</em></li>
              <li><strong>Für</strong> (for): <em>Das Geschenk ist für <u>meine</u> Mutter.</em></li>
              <li><strong>Um</strong> (around / at): <em>Die Kinder rennen um <u>den</u> Tisch.</em></li>
            </ul>
          </div>
        </div>

        <!-- 3. Structured Breakdown Examples -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1.5">3. Structured Breakdown Examples:</h3>
          <div class="syntax-breakdown">
            <p class="font-bold text-slate-900 font-de">Der Mann kauft den teuren Fernseher.</p>
            <p class="text-slate-600 mt-1">
              <span class="tag-subj">[Subjekt (Nom. Masc.): Der Mann]</span> + 
              <span class="tag-verb">[Transitives Verb: kauft]</span> + 
              <span class="tag-obj">[Direktes Objekt (Akk. Masc.): den teuren Fernseher]</span>.
            </p>
            <p class="text-[11px] text-slate-500 mt-0.5">الترجمة: الرجل يشتري التلفاز باهظ الثمن.</p>
          </div>
          <div class="syntax-breakdown mt-2">
            <p class="font-bold text-slate-900 font-de">Ich sehe dich, aber du siehst mich nicht.</p>
            <p class="text-slate-600 mt-1">
              <span class="tag-subj">[Subj: Ich]</span> + <span class="tag-verb">[Verb: sehe]</span> + <span class="tag-obj">[Akk. Pronomen: dich]</span> + 
              <span class="tag-adv">[Konj: aber]</span> + <span class="tag-subj">[Subj: du]</span> + <span class="tag-verb">[Verb: siehst]</span> + 
              <span class="tag-obj">[Akk. Pronomen: mich]</span> + <span class="tag-adv">[Negation: nicht]</span>.
            </p>
          </div>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Der Mann kauft", ans: "den", after: "teuren Fernseher.", full: "Der Mann kauft den teuren Fernseher.", opts: ["der", "den", "dem", "das"], hint: "Direct masculine object in Accusative shifts der ➔ den." },
      { id: 2, before: "Er kommt ohne", ans: "seinen", after: "Mantel.", full: "Er kommt ohne seinen Mantel.", opts: ["sein", "seinen", "seinem", "seiner"], hint: "DOGFU: 'Ohne' always governs an Accusative masculine noun ➔ seinen." },
      { id: 3, before: "Ich sehe", ans: "dich", after: ", aber du siehst mich nicht.", full: "Ich sehe dich, aber du siehst mich nicht.", opts: ["du", "dich", "dir", "dein"], hint: "Accusative personal pronoun for du ➔ dich." }
    ]
  },

  "A1.07": {
    moduleNum: 7,
    level: "A1",
    titleDe: "Possessive Articles (Possessivartikel in Nom. & Akk.)",
    titleAr: "أدوات الملكية في الرفع والنصب وقاعدة إسقاط حرف e في euer",
    lessonHtml: `
      <div class="space-y-4">
        <div>
          <span class="text-[10px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded font-de">Module 7 • Start Deutsch 1</span>
          <h2 class="text-base font-black text-slate-900 mt-1">Possessive Stems & Declension Endings</h2>
          <p class="text-xs text-slate-600 mt-0.5">مطابقة جذور الملكية بحسب المالك، وتطبيق نهايات أداة النكرة ein في الرفع والنصب.</p>
        </div>

        <!-- 1. Possessive Stems -->
        <div class="formula-card">
          ich ➔ mein | du ➔ dein | er/es ➔ sein | sie ➔ ihr<br>
          wir ➔ unser | ihr ➔ euer (eure!) | sie ➔ ihr | Sie ➔ Ihr
        </div>

        <!-- 2. Case Endings Table -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1">1. Nominative & Accusative Declension Paradigm:</h3>
          <table class="comp-table font-de">
            <thead>
              <tr><th>Case</th><th>Maskulinum</th><th>Femininum</th><th>Neutrum</th><th>Plural</th></tr>
            </thead>
            <tbody>
              <tr>
                <td><strong>Nominativ</strong></td>
                <td>mein Bruder</td>
                <td>mein<strong>e</strong> Schwester</td>
                <td>mein Kind</td>
                <td>mein<strong>e</strong> Eltern</td>
              </tr>
              <tr class="bg-blue-50/70 font-bold">
                <td><strong>Akkusativ</strong></td>
                <td class="text-blue-700">mein<strong>en</strong> Bruder</td>
                <td>mein<strong>e</strong> Schwester</td>
                <td>mein Kind</td>
                <td>mein<strong>e</strong> Eltern</td>
              </tr>
            </tbody>
          </table>
          <p class="text-[11px] text-amber-900 bg-amber-50 p-2 rounded mt-1">
            ⚠️ <strong>Euer Contraction Rule:</strong> Before endings beginning with <em>-e</em>, the internal <em>-e-</em> of <em>euer</em> is dropped: <em>euer + e ➔ <strong>eure</strong> Mutter</em> (not euere!).
          </p>
        </div>

        <!-- 3. Structured Breakdown Examples -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1.5">2. Structured Breakdown Examples:</h3>
          <div class="syntax-breakdown">
            <p class="font-bold text-slate-900 font-de">Mein Vater sucht seinen Schlüssel.</p>
            <p class="text-slate-600 mt-1">
              <span class="tag-subj">[Subjekt (Masc. Nom): Mein Vater]</span> + 
              <span class="tag-verb">[Verb: sucht]</span> + 
              <span class="tag-obj">[Akkusativobjekt (Masc. Akk): seinen Schlüssel (stem sein + -en)]</span>.
            </p>
            <p class="text-[11px] text-slate-500 mt-0.5">الترجمة: والدي يبحث عن مفتاحه.</p>
          </div>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Mein Vater sucht", ans: "seinen", after: "Schlüssel.", full: "Mein Vater sucht seinen Schlüssel.", opts: ["sein", "seinen", "seinem", "seine"], hint: "Direct masculine object in Accusative: sein + -en = seinen." },
      { id: 2, before: "Wo wohnt", ans: "eure", after: "Mutter?", full: "Wo wohnt eure Familie?", opts: ["euer", "eure", "euren", "eures"], hint: "Euer contraction before feminine -e: euer + e = eure." }
    ]
  },

  // =========================================================================
  // PART II: GOETHE-ZERTIFIKAT A2 (MODULES 14 TO 30)
  // =========================================================================

  "A2.03": {
    moduleNum: 16,
    level: "A2",
    titleDe: "Dual-Case Spatial Prepositions (Wechselpräpositionen)",
    titleAr: "أحرف الجر المشتركة التسعة: ثنائية الموقع (Wo) مقابل الاتجاه (Wohin)",
    lessonHtml: `
      <div class="space-y-4">
        <div>
          <span class="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded font-de">Module 16 • Start Deutsch 2</span>
          <h2 class="text-base font-black text-slate-900 mt-1">The Dynamic Dichotomy: Location vs. Direction</h2>
          <p class="text-xs text-slate-600 mt-0.5">أحرف الجر التسعة المشتركة، التمييز بين الثبات والحركة، وثنائيات الأفعال الشهيرة.</p>
        </div>

        <div class="formula-card">
          an, auf, hinter, in, neben, über, unter, vor, zwischen<br>
          <span class="text-red-300">Wo? (Static Location) ➔ DATIV</span> | <span class="text-blue-300">Wohin? (Directional Motion) ➔ AKKUSATIV</span>
        </div>

        <!-- Positional Verb Pairs Table -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1">1. Positional Verb Pairs (أزواج الأفعال المتعدية واللازمة):</h3>
          <table class="comp-table font-de">
            <thead>
              <tr><th>Transitive (Action: Wohin? + Akk.)</th><th>Intransitive (State: Wo? + Dat.)</th></tr>
            </thead>
            <tbody>
              <tr><td><strong>stellen</strong> (to put upright, weak)</td><td><strong>stehen, stand, gestanden</strong> (to stand, strong)</td></tr>
              <tr><td><strong>legen</strong> (to lay flat, weak)</td><td><strong>liegen, lag, gelegen</strong> (to lie flat, strong)</td></tr>
              <tr><td><strong>setzen</strong> (to seat/set, weak)</td><td><strong>sitzen, saß, gesessen</strong> (to sit, strong)</td></tr>
              <tr><td><strong>hängen</strong> (to hang something, weak)</td><td><strong>hängen, hing, gehangen</strong> (to be hanging, strong)</td></tr>
            </tbody>
          </table>
        </div>

        <!-- Structured Examples -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1.5">2. Structured Breakdown Examples:</h3>
          <div class="syntax-breakdown">
            <p class="font-bold text-slate-900 font-de">Ich stelle die Vase auf den Tisch.</p>
            <p class="text-slate-600 mt-1">
              <span class="tag-subj">[Subj: Ich]</span> + <span class="tag-verb">[Verb (Aktion): stelle]</span> + <span class="tag-obj">[Obj (Akk): die Vase]</span> + 
              <span class="tag-prep">[Präp: auf]</span> + <span class="tag-obj">[Richtung (Wohin? ➔ Akk): den Tisch]</span>.
            </p>
          </div>
          <div class="syntax-breakdown mt-2">
            <p class="font-bold text-slate-900 font-de">Die Vase steht auf dem Tisch.</p>
            <p class="text-slate-600 mt-1">
              <span class="tag-subj">[Subj: Die Vase]</span> + <span class="tag-verb">[Verb (Zustand): steht]</span> + 
              <span class="tag-prep">[Präp: auf]</span> + <span class="tag-obj">[Ort (Wo? ➔ Dat): dem Tisch]</span>.
            </p>
          </div>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ich stelle die Vase auf", ans: "den", after: "Tisch.", full: "Ich stelle die Vase auf den Tisch.", opts: ["dem", "den", "der", "das"], hint: "Action (Wohin?): Transitive verb 'stellen' mandates Accusative masculine ➔ den Tisch." },
      { id: 2, before: "Die Vase steht auf", ans: "dem", after: "Tisch.", full: "Die Vase steht auf dem Tisch.", opts: ["den", "dem", "das", "der"], hint: "Static location (Wo?): Intransitive verb 'stehen' mandates Dative masculine ➔ dem Tisch." }
    ]
  },

  "A2.10": {
    moduleNum: 23,
    level: "A2",
    titleDe: "Adjective Declination (Adjektivdeklination)",
    titleAr: "تصريف نهايات الصفات الكامل: الضعيفة، المختلطة، والقوية بدون أداة",
    lessonHtml: `
      <div class="space-y-4">
        <div>
          <span class="text-[10px] font-bold text-purple-600 bg-purple-50 px-2 py-0.5 rounded font-de">Module 23 • Start Deutsch 2</span>
          <h2 class="text-base font-black text-slate-900 mt-1">The Three Adjective Declension Paradigms</h2>
          <p class="text-xs text-slate-600 mt-0.5">النهايات الصرفية للصفات بعد أداة المعرفة، بعد أداة النكرة والملكية، وبدون أداة.</p>
        </div>

        <div class="formula-card">
          Rule of Thumb (Weak Declension):<br>
          Nominative Singular & Acc. Fem/Neut = -e | All Other Cases = -en
        </div>

        <!-- Comparative Paradigms Table -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1">1. Paradigms: Weak vs. Mixed Declension:</h3>
          <table class="comp-table font-de">
            <thead>
              <tr><th>Gender / Case</th><th>Weak (After der/die/das)</th><th>Mixed (After ein/mein/kein)</th></tr>
            </thead>
            <tbody>
              <tr><td>Masc. Nom</td><td>der alt<strong>e</strong> Mann</td><td>ein alt<strong>er</strong> Mann (signals -er)</td></tr>
              <tr class="bg-blue-50 font-bold"><td>Masc. Akk</td><td class="text-blue-700">den alt<strong>en</strong> Mann</td><td class="text-blue-700">einen alt<strong>en</strong> Mann</td></tr>
              <tr><td>Neut. Nom/Akk</td><td>das klein<strong>e</strong> Kind</td><td>ein klein<strong>es</strong> Kind (signals -es)</td></tr>
              <tr><td>Fem. Nom/Akk</td><td>die jung<strong>e</strong> Frau</td><td>eine jung<strong>e</strong> Frau</td></tr>
              <tr class="bg-amber-50 font-bold"><td>All Dative Cases</td><td class="text-red-700">dem/der alt<strong>en</strong></td><td class="text-red-700">einem/einer alt<strong>en</strong></td></tr>
            </tbody>
          </table>
        </div>

        <!-- Structured Examples -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1.5">2. Structured Breakdown Examples:</h3>
          <div class="syntax-breakdown">
            <p class="font-bold text-slate-900 font-de">Ein fleißiger Student hat ein neues Buch gekauft.</p>
            <p class="text-slate-600 mt-1">
              <span class="tag-subj">[Indefinit (Masc. Nom): Ein]</span> + <span class="tag-adv">[Adjektiv (Signal -er): fleißiger]</span> + <span class="tag-subj">[Nomen: Student]</span> + 
              <span class="tag-verb">[Hilfsverb: hat]</span> + <span class="tag-obj">[Indefinit (Neut. Akk): ein]</span> + <span class="tag-adv">[Adjektiv (Signal -es): neues]</span> + 
              <span class="tag-obj">[Nomen: Buch]</span> + <span class="tag-verb">[Partizip II: gekauft]</span>.
            </p>
          </div>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Ein", ans: "fleißiger", after: "Student lernt jeden Tag.", full: "Ein fleißiger Student lernt jeden Tag.", opts: ["fleißige", "fleißiger", "fleißigen", "fleißiges"], hint: "Mixed nominative masculine adjective must signal gender: -er ➔ fleißiger." },
      { id: 2, before: "Ich helfe der", ans: "alten", after: "Dame über die Straße.", full: "Ich helfe der alten Dame über die Straße.", opts: ["alte", "alten", "alter", "altes"], hint: "Weak declension in Dative is always -en ➔ alten." }
    ]
  },

  "A2.17": {
    moduleNum: 30,
    level: "A2",
    titleDe: "The Passive Voice (Vorgangspassiv Basics)",
    titleAr: "المبني للمجهول (Das Vorgangspassiv) في الحاضر وتحديد الفاعل بـ von",
    lessonHtml: `
      <div class="space-y-4">
        <div>
          <span class="text-[10px] font-bold text-rose-600 bg-rose-50 px-2 py-0.5 rounded font-de">Module 30 • Start Deutsch 2</span>
          <h2 class="text-base font-black text-slate-900 mt-1">Process Passive Voice (Vorgangspassiv)</h2>
          <p class="text-xs text-slate-600 mt-0.5">التركيز على الحدث والنتيجة بدلاً من الفاعل، الصياغة بفعل werden، وعامل الفاعل von + Dativ.</p>
        </div>

        <div class="formula-card">
          Active: Der Mechaniker (Subject) repariert das Auto (Acc. Object).<br>
          <span class="text-rose-300">Passive: Das Auto (New Subject) wird (von dem Mechaniker) repariert.</span><br>
          Formula: [werden (Pos 2)] + ... + [Partizip II (Clause End)]
        </div>

        <!-- werden Conjugation Grid -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1">1. Conjugation of werden in Present Tense:</h3>
          <div class="grid grid-cols-3 gap-1 font-de text-xs text-center">
            <div class="p-1.5 bg-slate-50 border rounded">ich <strong>werde</strong></div>
            <div class="p-1.5 bg-slate-50 border rounded">du <strong>wirst</strong></div>
            <div class="p-1.5 bg-slate-50 border rounded">er/sie/es <strong>wird</strong></div>
            <div class="p-1.5 bg-slate-50 border rounded">wir <strong>werden</strong></div>
            <div class="p-1.5 bg-slate-50 border rounded">ihr <strong>werdet</strong></div>
            <div class="p-1.5 bg-slate-50 border rounded">sie/Sie <strong>werden</strong></div>
          </div>
        </div>

        <!-- Structured Examples -->
        <div>
          <h3 class="font-bold text-xs text-slate-800 mb-1.5">2. Structured Breakdown Examples:</h3>
          <div class="syntax-breakdown">
            <p class="font-bold text-slate-900 font-de">Das Frühstück wird im Hotel jeden Morgen serviert.</p>
            <p class="text-slate-600 mt-1">
              <span class="tag-subj">[Subjekt (Patient): Das Frühstück]</span> + 
              <span class="tag-verb">[Passiv-Hilfsverb (Pos 2): wird]</span> + 
              <span class="tag-prep">[Lokalangabe: im Hotel]</span> + 
              <span class="tag-adv">[Temporal: jeden Morgen]</span> + 
              <span class="tag-verb">[Satzende (Partizip II): serviert]</span>.
            </p>
            <p class="text-[11px] text-slate-500 mt-0.5">الترجمة: يُقدَّم الإفطار في الفندق كل صباح.</p>
          </div>
        </div>
      </div>
    `,
    exercises: [
      { id: 1, before: "Das Frühstück", ans: "wird", after: "jeden Morgen serviert.", full: "Das Frühstück wird jeden Morgen serviert.", opts: ["wird", "werden", "wurden", "ist"], hint: "Passive present 3rd sing: wird + Partizip II ➔ wird serviert." }
    ]
  }
};

// =========================================================================
// CATALOG METADATA (30 MODULES)
// =========================================================================
const ALL_MODULES = [
  { id: "A1.01", level: "A1", titleAr: "Module 1: Personal Pronouns & Verb Conjugation" },
  { id: "A1.02", level: "A1", titleAr: "Module 2: Sentence Architecture I (V2 & Inversion)" },
  { id: "A1.04", level: "A1", titleAr: "Module 4: The Accusative Case & DOGFU" },
  { id: "A1.07", level: "A1", titleAr: "Module 7: Possessive Articles & Declension" },
  { id: "A2.03", level: "A2", titleAr: "Module 16: Dual-Case Spatial Prepositions" },
  { id: "A2.10", level: "A2", titleAr: "Module 23: Adjective Declination Paradigms" },
  { id: "A2.17", level: "A2", titleAr: "Module 30: The Passive Voice (Vorgangspassiv)" }
];

// =========================================================================
// STATE ENGINE
// =========================================================================
class CompendiumState {
  constructor() {
    this.currentChapterKey = "A1.01";
    this.currentExerciseIndex = 0;
    this.xp = parseInt(localStorage.getItem('dm_xp') || '0', 10);
    this.completed = {};
  }

  getCurrentModule() {
    return COMPENDIUM_DATABASE[this.currentChapterKey] || COMPENDIUM_DATABASE["A1.01"];
  }

  addXP(pts) {
    this.xp += pts;
    localStorage.setItem('dm_xp', this.xp);
  }
}

const state = new CompendiumState();

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
// DOM REFERENCES & INITIALIZATION
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

function initApp() {
  statXp.innerText = `${state.xp} XP`;
  setupEvents();
  renderState();
}

function renderState() {
  const mod = state.getCurrentModule();
  headerBadge.innerText = `Mod.${mod.moduleNum}`;
  headerName.innerText = mod.titleDe;

  lessonContentBody.innerHTML = mod.lessonHtml;

  pillsGrid.innerHTML = mod.exercises.map((ex, idx) => {
    const isCurrent = idx === state.currentExerciseIndex;
    const isDone = state.completed[`${state.currentChapterKey}_${ex.id}`];
    let bgClass = "bg-slate-100 text-slate-700 hover:bg-slate-200 border border-slate-200";
    if (isDone) bgClass = "bg-green-100 text-green-800 border-green-300";
    if (isCurrent) bgClass = "bg-blue-600 text-white shadow-sm border-blue-600";
    return `<div onclick="jumpExercise(${idx})" class="ex-grid-item ${bgClass}">${idx + 1}</div>`;
  }).join('');

  practiceProgressLabel.innerText = `Aufgabe ${state.currentExerciseIndex + 1} / ${mod.exercises.length}`;
  renderActiveExercise();
}

function renderActiveExercise() {
  feedbackPanel.classList.add('hidden');
  hintText.classList.add('hidden');

  const mod = state.getCurrentModule();
  const ex = mod.exercises[state.currentExerciseIndex] || mod.exercises[0];
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
  const mod = state.getCurrentModule();
  const ex = mod.exercises[state.currentExerciseIndex] || mod.exercises[0];
  const isCorrect = selectedOption.toLowerCase() === ex.ans.toLowerCase();

  const slot = document.getElementById('cloze-target-slot');
  slot.innerText = selectedOption;
  slot.classList.add(isCorrect ? 'text-green-600' : 'text-red-600');

  exerciseStage.querySelectorAll('button').forEach(b => b.classList.add('pointer-events-none'));
  feedbackPanel.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'bg-green-50', 'border-green-200', 'animate-shake');

  if (isCorrect) {
    state.addXP(10);
    statXp.innerText = `${state.xp} XP`;
    state.completed[`${state.currentChapterKey}_${ex.id}`] = true;
    feedbackPanel.classList.add('bg-green-50', 'border-green-200');
    feedbackTitle.className = 'font-bold text-sm text-green-900';
    feedbackTitle.innerText = 'Richtig! Syntaktisch und morphologisch korrekt.';
    feedbackIcon.className = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-green-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
  } else {
    feedbackPanel.classList.add('bg-red-50', 'border-red-200', 'animate-shake');
    feedbackTitle.className = 'font-bold text-sm text-red-900';
    feedbackTitle.innerHTML = `Syntaktischer Regelfehler. Lösung: <span class="font-de underline font-black" dir="ltr">${ex.ans}</span>`;
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
  renderState();
}

function switchToLessonMode() {
  viewLesson.classList.remove('hidden');
  viewPractice.classList.add('hidden');
  tabBtnLesson.className = "px-4 py-1.5 rounded-lg bg-blue-600 text-white transition flex items-center gap-1.5 shadow-sm";
  tabBtnPractice.className = "px-4 py-1.5 rounded-lg bg-white text-slate-700 hover:bg-slate-200 transition flex items-center gap-1.5";
}

window.jumpExercise = function(idx) {
  state.currentExerciseIndex = idx;
  renderState();
};

function setupEvents() {
  tabBtnLesson.addEventListener('click', switchToLessonMode);
  tabBtnPractice.addEventListener('click', switchToPracticeMode);
  btnShowHint.addEventListener('click', () => hintText.classList.toggle('hidden'));

  btnNextEx.addEventListener('click', () => {
    const mod = state.getCurrentModule();
    if (state.currentExerciseIndex < mod.exercises.length - 1) {
      state.currentExerciseIndex++;
      renderState();
    } else {
      alert('Module complete! You have finished all active exercises for this unit.');
    }
  });

  btnOpenCatalog.addEventListener('click', () => {
    catalogDrawer.classList.remove('hidden');
    catalogList.innerHTML = ALL_MODULES.map(m => `
      <div onclick="selectModule('${m.id}')" class="p-3 rounded-xl border border-slate-200 hover:border-blue-500 hover:bg-blue-50/60 cursor-pointer transition flex items-start gap-2.5">
        <span class="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-de font-bold text-[10px] mt-0.5">${m.id}</span>
        <div class="flex-1">
          <p class="font-bold text-slate-800 text-xs">${m.titleAr}</p>
        </div>
      </div>
    `).join('');
  });

  closeCatalogDrawer.addEventListener('click', () => catalogDrawer.classList.add('hidden'));
}

window.selectModule = function(key) {
  state.currentChapterKey = key;
  state.currentExerciseIndex = 0;
  catalogDrawer.classList.add('hidden');
  switchToLessonMode();
  renderState();
};

window.addEventListener('DOMContentLoaded', initApp);
