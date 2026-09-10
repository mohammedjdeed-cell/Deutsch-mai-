/**
 * Deutsch mit Mai – Test-First & Tiefgehende Grammatik-Didaktik
 */

// 1. UMFASSENDES GRAMMATIK-CURRICULUM (AKKUSATIV, DATIV, WECHSELP., ADJEKTIVDEKL.)
const GRAMMAR_CURRICULUM = [
  // ==========================================
  // MODUL 1: AKKUSATIV (حالة النصب - المفعول به)
  // ==========================================
  {
    id: 1,
    topic: "akkusativ",
    level: "A1.2",
    type: "cloze",
    instructionAr: "اختر أداة النكرة المناسبة في حالة النصب (Akkusativ):",
    sentenceBefore: "Ich habe",
    blankAnswer: "einen",
    sentenceAfter: "großen Bruder in Hamburg.",
    fullSentence: "Ich habe einen großen Bruder in Hamburg.",
    options: ["ein", "einen", "einem", "eine"],
    hintAr: "اسأل نفسك: ما هو جنس كلمة (Bruder)؟ وماذا يحدث للمذكر فقط في حالة النصب؟",
    summaryAr: "الفعل (haben) يأخذ مفعولاً به منصوباً (Akkusativ). في الألمانية، المذكر فقط هو الذي يتغير!",
    lessonHtml: `
      <div class="space-y-2">
        <p class="font-bold text-blue-700">📌 القاعدة الذهبية للنصب (Akkusativ):</p>
        <p>في حالة النصب الألمانية، <strong>المذكر فقط هو الذي يتغير</strong>، بينما يبقى المؤنث والمحايد والجمع كما هم تماماً في الرفع!</p>
        <table class="grammar-table my-2">
          <thead>
            <tr><th>الجنس</th><th>الرفع (Nominativ)</th><th>النصب (Akkusativ)</th></tr>
          </thead>
          <tbody>
            <tr class="bg-blue-50/50"><td>المذكر (Maskulin)</td><td>der / ein</td><td class="font-bold text-blue-700">den / einen</td></tr>
            <tr><td>المحايد (Neutral)</td><td>das / ein</td><td>das / ein (لا تغيير)</td></tr>
            <tr><td>المؤنث (Feminin)</td><td>die / eine</td><td>die / eine (لا تغيير)</td></tr>
            <tr><td>الجمع (Plural)</td><td>die / -</td><td>die / - (لا تغيير)</td></tr>
          </tbody>
        </table>
        <p class="text-slate-600">أشهر أفعال النصب: <em>haben, suchen, kaufen, brauchen, finden, essen, trinken</em>.</p>
      </div>
    `
  },
  {
    id: 2,
    topic: "akkusativ",
    level: "A1.2",
    type: "cloze",
    instructionAr: "ضمائر المفعول به المنصوب (Akkusativpronomen):",
    sentenceBefore: "Ich liebe",
    blankAnswer: "dich",
    sentenceAfter: ", liebst du mich auch?",
    fullSentence: "Ich liebe dich, liebst du mich auch?",
    options: ["du", "dich", "dir", "dein"],
    hintAr: "المتكلم يُحب من؟ يحب (أنتَ) بصيغة المفعول به المباشر المنصوب.",
    summaryAr: "الضمير المنصوب من (du) هو (dich). تماماً مثلما تحول (ich) إلى (mich).",
    lessonHtml: `
      <div class="space-y-2">
        <p class="font-bold text-blue-700">📌 جدول تحول الضمائر إلى النصب (Akkusativ):</p>
        <div class="grid grid-cols-2 gap-2 text-center my-1 font-de">
          <div class="bg-slate-100 p-1.5 rounded">ich ➔ <strong>mich</strong> (ياء المتكلم)</div>
          <div class="bg-slate-100 p-1.5 rounded">du ➔ <strong>dich</strong> (كاف المخاطب)</div>
          <div class="bg-slate-100 p-1.5 rounded">er ➔ <strong>ihn</strong> (هاء الغائب المذكر)</div>
          <div class="bg-slate-100 p-1.5 rounded">sie ➔ <strong>sie</strong> (هاء الغائبة)</div>
        </div>
      </div>
    `
  },
  {
    id: 3,
    topic: "akkusativ",
    level: "A2.2",
    type: "cloze",
    instructionAr: "أحرف الجر التي تنصب دائماً وبلا استثناء (Akkusativpräpositionen):",
    sentenceBefore: "Das Geschenk ist für",
    blankAnswer: "meinen",
    sentenceAfter: "Vater.",
    fullSentence: "Das Geschenk ist für meinen Vater.",
    options: ["meinem", "meinen", "meiner", "mein"],
    hintAr: "حرف الجر (für) ينصب الاسم دائماً. كلمة Vater مذكر (der).",
    summaryAr: "بعد حرف الجر (für)، يتحول المذكر حتماً إلى (meinen Vater).",
    lessonHtml: `
      <div class="space-y-2">
        <p class="font-bold text-blue-700">📌 أحرف الجر الخمسة التي تنصب دائماً (DOGFU):</p>
        <p class="font-de font-bold text-slate-800">durch, ohne, gegen, für, um</p>
        <p>بمجرد رؤية أحد هذه الأحرف، الاسم التالي يعرب مباشرة <strong>Akkusativ</strong> بدون تردد!</p>
      </div>
    `
  },

  // ==========================================
  // MODUL 2: DATIV (حالة الجر - المفعول غير المباشر)
  // ==========================================
  {
    id: 4,
    topic: "dativ",
    level: "A2.1",
    type: "cloze",
    instructionAr: "أداة المعرفة في حالة الجر (Dativ):",
    sentenceBefore: "Ich fahre jeden Morgen mit",
    blankAnswer: "dem",
    sentenceAfter: "Bus zum Sprachkurs.",
    fullSentence: "Ich fahre jeden Morgen mit dem Bus zum Sprachkurs.",
    options: ["den", "dem", "das", "des"],
    hintAr: "حرف الجر (mit) يعني 'بـِ أو مع' ويأخذ دائماً حالة الجر (Dativ). أصل الكلمة: der Bus.",
    summaryAr: "المذكر (der) والمحايد (das) يتحولان في الجر (Dativ) دائماً إلى (dem).",
    lessonHtml: `
      <div class="space-y-2">
        <p class="font-bold text-red-700">📌 كيف تتغير الأدوات في حالة الجر (Dativ)؟</p>
        <p>في الـ Dativ <strong>تتغير كل الأدوات بدون استثناء</strong>:</p>
        <table class="grammar-table my-2">
          <thead>
            <tr><th>الجنس</th><th>الرفع (Nominativ)</th><th>الجر (Dativ)</th><th>النكرة بالجر</th></tr>
          </thead>
          <tbody>
            <tr class="bg-blue-50/40"><td>المذكر</td><td>der</td><td class="font-bold text-red-600">dem</td><td>einem</td></tr>
            <tr class="bg-green-50/40"><td>المحايد</td><td>das</td><td class="font-bold text-red-600">dem</td><td>einem</td></tr>
            <tr class="bg-red-50/40"><td>المؤنث</td><td>die</td><td class="font-bold text-red-600">der</td><td>einer</td></tr>
            <tr class="bg-amber-50/40"><td>الجمع</td><td>die</td><td class="font-bold text-red-600">den + (n)</td><td>-</td></tr>
          </tbody>
        </table>
        <p class="text-xs text-slate-500">تذكر: المؤنث يأخذ في الجر 'der'، والجمع يأخذ 'den' مع إضافة حرف n لنهاية الاسم (z.B. den Kindern)!</p>
      </div>
    `
  },
  {
    id: 5,
    topic: "dativ",
    level: "A2.1",
    type: "cloze",
    instructionAr: "أفعال الجر الخاصة (Verben mit Dativ):",
    sentenceBefore: "Der Deutschlehrer hilft",
    blankAnswer: "den",
    sentenceAfter: "Schülern bei der Aussprache.",
    fullSentence: "Der Deutschlehrer hilft den Schülern bei der Aussprache.",
    options: ["die", "der", "den", "dem"],
    hintAr: "فعل (helfen) يساعد: لا ينصب أبداً، بل يجر الاسم بعده (Dativ). كلمة Schüler هنا جمع!",
    summaryAr: "جمع الطلاب في الجر: أداة die تتحول إلى den مع n الجمع الملحقة (den Schülern).",
    lessonHtml: `
      <div class="space-y-2">
        <p class="font-bold text-red-700">📌 أفعال تتعدى لمجرور (Dativ) فقط:</p>
        <p>هناك أفعال هامة في الألمانية لا تأخذ مفعولاً به منصوباً بل تأخذ <strong>Dativ</strong> دائماً:</p>
        <ul class="list-disc list-inside space-y-1 font-de">
          <li><strong>helfen</strong> (يساعد): Ich helfe <u>dir</u>.</li>
          <li><strong>danken</strong> (يشكر): Wir danken <u>dem Arzt</u>.</li>
          <li><strong>gefallen</strong> (يعجب): Das Buch gefällt <u>mir</u>.</li>
          <li><strong>gehören</strong> (ينتمي/مِلك): Das Auto gehört <u>meiner Mutter</u>.</li>
        </ul>
      </div>
    `
  },
  {
    id: 6,
    topic: "dativ",
    level: "A2.1",
    type: "cloze",
    instructionAr: "ضمائر المجرور الشخصية (Dativpronomen):",
    sentenceBefore: "Wie geht es",
    blankAnswer: "dir",
    sentenceAfter: "? – Mir geht es sehr gut, danke!",
    fullSentence: "Wie geht es dir? – Mir geht es sehr gut, danke!",
    options: ["dich", "du", "dir", "dein"],
    hintAr: "التعبير 'Wie geht es...' يطلب ضمير مجرور دائماً (Dativ).",
    summaryAr: "في الـ Dativ: يتحول الضمير (ich ➔ mir) و (du ➔ dir).",
    lessonHtml: `
      <div class="space-y-2">
        <p class="font-bold text-red-700">📌 ضمائر الـ Dativ كاملة:</p>
        <div class="grid grid-cols-2 gap-1.5 text-center font-de">
          <div class="bg-slate-100 p-1 rounded">ich ➔ <strong>mir</strong></div>
          <div class="bg-slate-100 p-1 rounded">du ➔ <strong>dir</strong></div>
          <div class="bg-slate-100 p-1 rounded">er / es ➔ <strong>ihm</strong></div>
          <div class="bg-slate-100 p-1 rounded">sie ➔ <strong>ihr</strong></div>
          <div class="bg-slate-100 p-1 rounded">wir ➔ <strong>uns</strong></div>
          <div class="bg-slate-100 p-1 rounded">Sie/sie ➔ <strong>Ihnen/ihnen</strong></div>
        </div>
      </div>
    `
  },

  // ==========================================
  // MODUL 3: WECHSELPOSITIONS (أين؟ أم إلى أين؟)
  // ==========================================
  {
    id: 7,
    topic: "wechsel",
    level: "A2.1",
    type: "case",
    instructionAr: "حدد الحالة الإعرابية (هل هي ثبات وموقع أم حركة ونقل؟):",
    sentenceDisplay: "Das Bild hängt an <span class='underline font-bold text-blue-600'>der Wand</span>.",
    highlightedPart: "der Wand",
    fullSentence: "Das Bild hängt an der Wand.",
    correct: "Dativ",
    options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    hintAr: "اسأل نفسك: أين توجد الصورة؟ (ثبات وموقع = Wo) أم هناك حركة لنقلها؟",
    summaryAr: "الصورة معلقة وثابتة على الحائط (Wo? ➔ Dativ). أصل الكلمة die Wand وأصبحت مع الجر der Wand.",
    lessonHtml: `
      <div class="space-y-2">
        <p class="font-bold text-emerald-700">📌 أحرف الجر المشتركة (Wechselpräpositionen):</p>
        <p>هناك 9 أحرف جر في الألمانية قد تأخذ <strong>النصب</strong> أو <strong>الجر</strong> بحسب معنى الجملة:</p>
        <p class="font-de font-bold text-center bg-slate-150 bg-slate-100 p-1 rounded">in, an, auf, neben, hinter, über, unter, vor, zwischen</p>
        <div class="grid grid-cols-2 gap-2 mt-2">
          <div class="border border-red-200 bg-red-50/60 p-2 rounded-lg">
            <p class="font-bold text-red-800">1. ثبات وموقع (Wo? أين؟)</p>
            <p class="text-[11px] text-red-900 mt-1">يأخذ <strong>Dativ (جر)</strong>.<br>مثال: Das Buch liegt auf <u>dem</u> Tisch.</p>
          </div>
          <div class="border border-blue-200 bg-blue-50/60 p-2 rounded-lg">
            <p class="font-bold text-blue-800">2. حركة وتغيير مكان (Wohin? إلى أين؟)</p>
            <p class="text-[11px] text-blue-900 mt-1">يأخذ <strong>Akkusativ (نصب)</strong>.<br>مثال: Ich lege das Buch auf <u>den</u> Tisch.</p>
          </div>
        </div>
      </div>
    `
  },
  {
    id: 8,
    topic: "wechsel",
    level: "A2.2",
    type: "cloze",
    instructionAr: "حركة وتغيير مكان (Wohin? ➔ Akkusativ):",
    sentenceBefore: "Ich gehe jetzt in",
    blankAnswer: "die",
    sentenceAfter: "Küche, um Tee zu kochen.",
    fullSentence: "Ich gehe jetzt in die Küche, um Tee zu kochen.",
    options: ["der", "die", "dem", "den"],
    hintAr: "أنا ذاهب (انتقال وتغيير مكان إلى داخل المطبخ = Wohin?). كلمة Küche مؤنثة.",
    summaryAr: "الحركة (Wohin?) تتطلب النصب (Akkusativ). والمؤنث في النصب لا يتغير ويبقى (die Küche).",
    lessonHtml: `
      <div class="space-y-2">
        <p class="font-bold text-emerald-700">📌 أفعال الحركة مقابل أفعال الثبات:</p>
        <div class="text-xs space-y-1 font-de">
          <p>🔹 <strong>stellen</strong> (يضع عمودياً - Akkusativ) 🆚 <strong>stehen</strong> (واقف - Dativ)</p>
          <p>🔹 <strong>legen</strong> (يضع أفقياً - Akkusativ) 🆚 <strong>liegen</strong> (مستلقٍ/موضوع - Dativ)</p>
          <p>🔹 <strong>setzen</strong> (يُجلس شخصاً - Akkusativ) 🆚 <strong>sitzen</strong> (جالس - Dativ)</p>
        </div>
      </div>
    `
  },

  // ==========================================
  // MODUL 4: ADJEKTIVDEKLINATION (نهايات الصفات)
  // ==========================================
  {
    id: 9,
    topic: "adjektiv",
    level: "A2.2",
    type: "cloze",
    instructionAr: "نهاية الصفة بعد أداة التعريف (المفرد المذكر المرفوع):",
    sentenceBefore: "Der",
    blankAnswer: "alte",
    sentenceAfter: "Mann liest jeden Tag eine Zeitung.",
    fullSentence: "Der alte Mann liest jeden Tag eine Zeitung.",
    options: ["alt", "alte", "alten", "altes"],
    hintAr: "الأداة (der) أظهرت بالفعل علامة المذكر، فما النهاية الضعيفة الخفيفة التي تأخذها الصفة؟",
    summaryAr: "بعد أداة التعريف الصريحة (der/die/das) في الرفع، تأخذ الصفة دائماً النهاية الخفيفة (-e).",
    lessonHtml: `
      <div class="space-y-2">
        <p class="font-bold text-purple-700">📌 سر نهايات الصفات بعد أداة المعرفة (der / die / das):</p>
        <p>إذا كانت أداة المعرفة موجودة وواضحة، فالصفة لا تحتاج لحمل علامة إضافية:</p>
        <ul class="list-disc list-inside space-y-1 font-de">
          <li>المفرد في الرفع (Nominativ): تأخذ الصفة <strong>-e</strong> فقط (der neu<u>e</u> Wagen, die schön<u>e</u> Frau, das klein<u>e</u> Kind).</li>
          <li>في حالات الجر (Dativ) والجمع والنصب للمذكر: تأخذ الصفة دائماً النهاية <strong>-en</strong> (mit dem neu<u>en</u> Wagen).</li>
        </ul>
      </div>
    `
  },
  {
    id: 10,
    topic: "adjektiv",
    level: "A2.2",
    type: "cloze",
    instructionAr: "نهاية الصفة بعد أداة النكرة (ein):",
    sentenceBefore: "Mai hat ein",
    blankAnswer: "neues",
    sentenceAfter: "Auto gekauft.",
    fullSentence: "Mai hat ein neues Auto gekauft.",
    options: ["neue", "neues", "neuen", "neuem"],
    hintAr: "كلمة Auto محايدة (das). أداة النكرة (ein) لم توضح جنس الكلمة، لذا يجب أن تنوب الصفة عنها!",
    summaryAr: "أداة النكرة 'ein' حيادية، فتقوم الصفة بإظهار علامة المحايد بحمل اللاحقة (-es) ➔ neues Auto.",
    lessonHtml: `
      <div class="space-y-2">
        <p class="font-bold text-purple-700">📌 نهايات الصفة بعد النكرة (ein / eine):</p>
        <p>هنا يجب على الصفة أن تُظهر جنس الاسم بوضوح:</p>
        <table class="grammar-table">
          <tr><th>مذكر</th><td>ein alt<strong>er</strong> Mann (أخذت علامة der)</td></tr>
          <tr><th>محايد</th><td>ein neu<strong>es</strong> Auto (أخذت علامة das)</td></tr>
          <tr><th>مؤنث</th><td>eine schön<strong>e</strong> Blume (أخذت علامة die)</td></tr>
        </table>
      </div>
    `
  },

  // ==========================================
  // MODUL 5: SATZBAU & NEBENSÄTZE (ترتيب الجمل)
  // ==========================================
  {
    id: 11,
    topic: "satzbau",
    level: "A2.2",
    type: "puzzle",
    instructionAr: "جملة التعليل الجانبية مع (weil = لأن):",
    words: ["Ich", "lerne,", "weil", "ich", "in", "Deutschland", "studieren", "will"],
    correctOrder: ["Ich", "lerne,", "weil", "ich", "in", "Deutschland", "studieren", "will"],
    fullSentence: "Ich lerne, weil ich in Deutschland studieren will.",
    hintAr: "تذكر دائماً: في جملة weil، يهرب الفعل المصرف (will) إلى آخر الكلمة في الجملة!",
    summaryAr: "أداة الربط 'weil' ترسل الفعل المساعد المصرف (will) إلى نهاية الجملة تماماً.",
    lessonHtml: `
      <div class="space-y-2">
        <p class="font-bold text-amber-700">📌 قاعدة الجمل الجانبية (Nebensatz):</p>
        <p>الأدوات التالية تُسمى (طرادات الأفعال)، لأنها تطرد الفعل المصرف لآخر الجملة:</p>
        <p class="font-de font-bold text-center bg-slate-100 p-1 rounded">weil (لأن), dass (أنّ), wenn (إذا/لو), ob (فيما إذا)</p>
        <p class="text-xs">الموقع الثاني مخصص للجملة الرئيسية فقط، أما في الجملة الجانبية فالفعل يكون آخر كلمة قبل النقطة!</p>
      </div>
    `
  }
];

// 2. APP STATE
class AppState {
  constructor() {
    this.curriculum = [...GRAMMAR_CURRICULUM];
    this.currentList = [...this.curriculum];
    this.currentIndex = 0;
    this.xp = parseInt(localStorage.getItem('dm_xp') || '0', 10);
    this.puzzleSelection = [];
    this.selectedTopic = 'all';
  }

  addXP(points) {
    this.xp += points;
    localStorage.setItem('dm_xp', this.xp);
  }

  filterByTopic(topic) {
    this.selectedTopic = topic;
    this.currentIndex = 0;
    if (topic === 'all') {
      this.currentList = [...this.curriculum];
    } else {
      this.currentList = this.curriculum.filter(ex => ex.topic === topic);
    }
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

// 4. DOM ELEMENTS
const stage = document.getElementById('exercise-stage');
const feedbackPanel = document.getElementById('feedback-panel');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackSummary = document.getElementById('feedback-summary');
const fullLessonBody = document.getElementById('full-lesson-body');
const btnToggleFullLesson = document.getElementById('btn-toggle-full-lesson');
const lessonArrow = document.getElementById('lesson-arrow');
const feedbackIcon = document.getElementById('feedback-icon');
const btnNext = document.getElementById('btn-next');
const btnAudioRepeat = document.getElementById('btn-audio-repeat');
const btnShowHint = document.getElementById('btn-show-hint');
const hintText = document.getElementById('hint-text');
const statXp = document.getElementById('stat-xp');
const progressBar = document.getElementById('progress-bar');
const counterLabel = document.getElementById('exercise-counter');
const typeTag = document.getElementById('exercise-type-tag');
const topicChips = document.querySelectorAll('.topic-chip');

// 5. INITIALISIERUNG
function initApp() {
  statXp.innerText = `${state.xp} XP`;
  setupTopicFilters();
  setupHintButton();
  setupLessonToggle();
  setupTeacherModal();
  loadCurrentExercise();
  registerServiceWorker();
}

// 6. EXERCISE ENGINE
function loadCurrentExercise() {
  feedbackPanel.classList.add('hidden');
  hintText.classList.add('hidden');
  fullLessonBody.classList.add('hidden');
  lessonArrow.classList.remove('rotate-180');
  state.puzzleSelection = [];

  const current = state.currentList[state.currentIndex];
  if (!current) {
    renderCompletionScreen();
    return;
  }

  const progressPercent = ((state.currentIndex) / state.currentList.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  counterLabel.innerText = `${state.currentIndex + 1} / ${state.currentList.length}`;
  typeTag.innerText = `[${current.level}] ${current.topic.toUpperCase()}`;

  // Vorab-Tipp vorbereiten
  hintText.innerText = current.hintAr;

  switch (current.type) {
    case 'cloze': renderCloze(current); break;
    case 'puzzle': renderPuzzle(current); break;
    case 'case': renderCase(current); break;
  }
}

function renderCloze(item) {
  stage.innerHTML = `
    <div class="w-full max-w-md flex flex-col items-center animate-pop text-center">
      <p class="text-xs font-bold text-slate-500 mb-6 rtl-box">${item.instructionAr}</p>

      <div class="text-lg md:text-xl font-semibold text-slate-800 font-de leading-relaxed mb-8 ltr-box" dir="ltr">
        <span>${item.sentenceBefore}</span>
        <span id="cloze-target-slot" class="inline-block px-3 py-0.5 mx-1 border-b-2 border-blue-600 font-bold text-blue-600 bg-blue-50 rounded">____</span>
        <span>${item.sentenceAfter}</span>
      </div>

      <div class="flex flex-wrap justify-center gap-2.5 w-full font-de" dir="ltr">
        ${item.options.map(opt => `
          <button onclick="handleClozeAnswer('${opt}', this)" class="touch-tile px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl hover:border-blue-500 hover:text-blue-600 shadow-sm transition">
            ${opt}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

function renderPuzzle(item) {
  const shuffled = [...item.words].sort(() => 0.5 - Math.random());

  stage.innerHTML = `
    <div class="w-full max-w-md flex flex-col items-center animate-pop">
      <p class="text-xs font-bold text-slate-500 mb-4 text-center rtl-box">${item.instructionAr}</p>

      <div id="puzzle-dropzone" class="w-full min-h-[64px] p-3 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex flex-wrap gap-2 items-center justify-start mb-6 font-de ltr-box" dir="ltr">
        <span id="puzzle-placeholder" class="text-xs text-slate-400 mx-auto font-sans">اضغط الكلمات بالترتيب الصحيح...</span>
      </div>

      <div id="puzzle-bank" class="flex flex-wrap justify-center gap-2 w-full mb-6 font-de" dir="ltr">
        ${shuffled.map((word, idx) => `
          <button id="tile-${idx}" onclick="handlePuzzleTileClick('${word}', 'tile-${idx}')" class="touch-tile px-3.5 py-2 bg-white border border-slate-200 text-slate-800 font-semibold rounded-xl shadow-sm hover:border-slate-400 transition text-sm">
            ${word}
          </button>
        `).join('')}
      </div>

      <div class="flex gap-2 w-full">
        <button onclick="resetPuzzle()" class="flex-1 py-3 bg-slate-200 text-slate-700 text-xs font-bold rounded-xl">إعادة ترتيب</button>
        <button onclick="evaluatePuzzle()" class="flex-2 w-full py-3 bg-blue-600 text-white text-xs font-bold rounded-xl shadow">تأكيد الإجابة</button>
      </div>
    </div>
  `;
}

function renderCase(item) {
  stage.innerHTML = `
    <div class="w-full max-w-md flex flex-col items-center animate-pop text-center">
      <p class="text-xs font-bold text-slate-500 mb-4 rtl-box">${item.instructionAr}</p>

      <blockquote class="text-lg font-medium text-slate-800 bg-slate-100/90 p-4 rounded-2xl border border-slate-200 mb-6 w-full leading-relaxed font-de ltr-box" dir="ltr">
        ${item.sentenceDisplay}
      </blockquote>

      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2.5 w-full">
        ${item.options.map((optionLabel, idx) => {
          const rawKey = ["Nominativ", "Akkusativ", "Dativ"][idx];
          return `
            <button onclick="handleCaseAnswer('${rawKey}', this)" class="touch-tile py-3 px-2 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl text-xs hover:border-blue-500 hover:text-blue-600 transition shadow-sm">
              ${optionLabel}
            </button>
          `;
        }).join('')}
      </div>
    </div>
  `;
}

// 7. ANTWORTEN-VERARBEITUNG
window.handleClozeAnswer = function(selectedOption, btnElement) {
  const current = state.currentList[state.currentIndex];
  const isCorrect = selectedOption.toLowerCase() === current.blankAnswer.toLowerCase();
  
  const slot = document.getElementById('cloze-target-slot');
  slot.innerText = selectedOption;
  slot.classList.add(isCorrect ? 'text-green-600' : 'text-red-600');

  evaluateOutcome(isCorrect, current.blankAnswer, current.summaryAr, current.lessonHtml, current.fullSentence);
};

window.handlePuzzleTileClick = function(word, elementId) {
  const btn = document.getElementById(elementId);
  const dropzone = document.getElementById('puzzle-dropzone');
  const placeholder = document.getElementById('puzzle-placeholder');
  
  if (placeholder) placeholder.remove();

  state.puzzleSelection.push({ word, elementId });
  btn.classList.add('opacity-30', 'pointer-events-none');

  const chip = document.createElement('span');
  chip.className = 'px-3 py-1 bg-white border border-slate-300 rounded-lg text-xs font-bold text-slate-800 font-de animate-pop';
  chip.innerText = word;
  dropzone.appendChild(chip);
};

window.resetPuzzle = function() {
  state.puzzleSelection = [];
  loadCurrentExercise();
};

window.evaluatePuzzle = function() {
  const current = state.currentList[state.currentIndex];
  const userSentence = state.puzzleSelection.map(item => item.word).join(' ');
  const targetSentence = current.correctOrder.join(' ');
  const isCorrect = userSentence.trim() === targetSentence.trim();

  evaluateOutcome(isCorrect, targetSentence, current.summaryAr, current.lessonHtml, current.fullSentence);
};

window.handleCaseAnswer = function(selectedCaseKey, btnElement) {
  const current = state.currentList[state.currentIndex];
  const isCorrect = selectedCaseKey === current.correct;
  evaluateOutcome(isCorrect, current.correct, current.summaryAr, current.lessonHtml, current.fullSentence);
};

// 8. PÄDAGOGISCHES FEEDBACK & VOLLSTÄNDIGE LEKTION
function evaluateOutcome(isCorrect, solutionDisplay, summaryAr, lessonHtml, audioSentence) {
  stage.querySelectorAll('button').forEach(b => b.classList.add('pointer-events-none'));
  feedbackPanel.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'bg-green-50', 'border-green-200', 'animate-shake');

  if (isCorrect) {
    state.addXP(10);
    statXp.innerText = `${state.xp} XP`;
    
    feedbackPanel.classList.add('bg-green-50', 'border-green-200');
    feedbackTitle.className = 'font-bold text-sm text-green-900';
    feedbackTitle.innerText = 'أحسنت! إجابة صحيحة (Richtig)';
    feedbackIcon.className = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-green-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
  } else {
    feedbackPanel.classList.add('bg-red-50', 'border-red-200', 'animate-shake');
    feedbackTitle.className = 'font-bold text-sm text-red-900';
    feedbackTitle.innerHTML = `إجابة تحتاج لمراجعة. الحل: <span class="font-de underline font-black" dir="ltr">${solutionDisplay}</span>`;
    feedbackIcon.className = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-red-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>`;
  }

  feedbackSummary.innerText = summaryAr;
  fullLessonBody.innerHTML = lessonHtml;

  speakGerman(audioSentence);
  btnAudioRepeat.onclick = () => speakGerman(audioSentence);
}

// 9. UI-KOMPONENTEN (HINT & LESSON TOGGLE)
function setupHintButton() {
  btnShowHint.addEventListener('click', () => {
    hintText.classList.toggle('hidden');
  });
}

function setupLessonToggle() {
  btnToggleFullLesson.addEventListener('click', () => {
    fullLessonBody.classList.toggle('hidden');
    lessonArrow.classList.toggle('rotate-180');
  });
}

function setupTopicFilters() {
  topicChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      topicChips.forEach(c => c.className = "topic-chip px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700 whitespace-nowrap hover:bg-slate-200 transition");
      e.target.className = "topic-chip px-3 py-1.5 rounded-xl bg-blue-600 text-white whitespace-nowrap shadow-sm transition";

      const topic = e.target.getAttribute('data-topic');
      state.filterByTopic(topic);
      loadCurrentExercise();
    });
  });
}

btnNext.addEventListener('click', () => {
  state.currentIndex++;
  loadCurrentExercise();
});

function renderCompletionScreen() {
  progressBar.style.width = '100%';
  counterLabel.innerText = `${state.currentList.length} / ${state.currentList.length}`;
  stage.innerHTML = `
    <div class="text-center p-6 max-w-sm animate-pop rtl-box">
      <div class="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 fill-amber-500" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"/></svg>
      </div>
      <h2 class="text-2xl font-black text-slate-900 mb-2">رائع! أتممت هذا المحور التعليمي</h2>
      <p class="text-xs text-slate-600 mb-6">لقد اختبرت معلوماتك واطلعت على القواعد النحوية المقارنة بنجاح.</p>
      <button onclick="restartTopic()" class="w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow hover:bg-blue-700 transition">
        إعادة تمارين هذا المحور
      </button>
    </div>
  `;
}

window.restartTopic = function() {
  state.currentIndex = 0;
  loadCurrentExercise();
};

function setupTeacherModal() {
  const teacherToggleBtn = document.getElementById('teacher-toggle-btn');
  const teacherModal = document.getElementById('teacher-modal');
  const closeTeacherModal = document.getElementById('close-teacher-modal');
  const curriculumList = document.getElementById('teacher-curriculum-list');
  const btnExportLink = document.getElementById('btn-export-link');
  const exportConfirm = document.getElementById('export-confirm');

  teacherToggleBtn.addEventListener('click', () => {
    teacherModal.classList.remove('hidden');
    curriculumList.innerHTML = state.curriculum.map(ex => `
      <div class="p-3 rounded-xl border border-slate-200 bg-slate-50 rtl-box">
        <div class="flex justify-between items-center mb-1">
          <span class="font-bold text-xs text-blue-700">[${ex.level}] محور: ${ex.topic}</span>
          <span class="text-[10px] text-slate-400 font-de">#${ex.id}</span>
        </div>
        <p class="text-slate-700 text-xs font-de font-semibold" dir="ltr">${ex.fullSentence || ex.sentenceDisplay}</p>
        <p class="text-green-700 text-[11px] font-bold mt-1 font-de" dir="ltr">Lösung: ${ex.blankAnswer || ex.correct || ex.correctOrder?.join(' ')}</p>
      </div>
    `).join('');
  });

  closeTeacherModal.addEventListener('click', () => teacherModal.classList.add('hidden'));

  btnExportLink.addEventListener('click', () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      exportConfirm.classList.remove('hidden');
      setTimeout(() => exportConfirm.classList.add('hidden'), 2000);
    });
  });
}

function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

window.addEventListener('DOMContentLoaded', initApp);
