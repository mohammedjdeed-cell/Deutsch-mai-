/**
 * Deutsch mit Mai – Vollständiges A1 & A2 Curriculum
 */

// 1. VOLLSTÄNDIGER LEHRPLAN A1.1 BIS A2.2 (36 DIDAKTISCHE ÜBUNGEN)
const DEFAULT_CURRICULUM = [
  // ===================== STUFE A1.1 =====================
  {
    id: 1, level: "A1.1", type: "blitz",
    noun: "Tisch", meaningAr: "طاولة (مذكر بالألمانية)", icon: "🪑",
    correct: "der", plural: "die Tische",
    ruleAr: "الاسم مذكر (der). تذكر أن الأجناس في الألمانية لا تطابق العربية؛ فالطاولة مؤنثة بالعربية لكنها مذكرة بالألمانية."
  },
  {
    id: 2, level: "A1.1", type: "blitz",
    noun: "Lampe", meaningAr: "مصباح / لمبة", icon: "💡",
    correct: "die", plural: "die Lampen",
    ruleAr: "قاعدة أساسية: معظم الأسماء المنتهية بـ '-e' تأخذ أداة المؤنث (die)."
  },
  {
    id: 3, level: "A1.1", type: "blitz",
    noun: "Buch", meaningAr: "كتاب (محايد)", icon: "📖",
    correct: "das", plural: "die Bücher",
    ruleAr: "في الألمانية يوجد جنس ثالث وهو المحايد (das). جمعها بالإمالة: die Bücher."
  },
  {
    id: 4, level: "A1.1", type: "cloze",
    instructionAr: "تصريف فعل الكينونة الأساسي (sein):",
    sentenceBefore: "Hallo, ich", blankAnswer: "bin", sentenceAfter: "Ahmad und komme aus Syrien.",
    fullSentence: "Hallo, ich bin Ahmad und komme aus Syrien.",
    options: ["bin", "bist", "ist", "sind"],
    ruleAr: "فعل الكينونة (sein) مع ضمير المتكلم (ich) هو شاذ ويصرف دائماً: ich bin."
  },
  {
    id: 5, level: "A1.1", type: "cloze",
    instructionAr: "تصريف الفعل المنتظم مع ضمير المخاطب (du):",
    sentenceBefore: "Woher", blankAnswer: "kommst", sentenceAfter: "du?",
    fullSentence: "Woher kommst du?",
    options: ["komme", "kommst", "kommt", "kommen"],
    ruleAr: "نهاية الفعل مع الضمير 'du' تكون دائماً باختتامها بحرفي '-st' (du kommst)."
  },
  {
    id: 6, level: "A1.1", type: "cloze",
    instructionAr: "نفي الأسماء باستخدام (kein / keine):",
    sentenceBefore: "Das ist", blankAnswer: "kein", sentenceAfter: "Stift, das ist ein Pinsel.",
    fullSentence: "Das ist kein Stift, das ist ein Pinsel.",
    options: ["nicht", "kein", "keine", "keinen"],
    ruleAr: "ننفي الاسم النكرة المذكر (der Stift) باستخدام 'kein'. كلمة 'nicht' تنفي الأفعال والصفات."
  },
  {
    id: 7, level: "A1.1", type: "puzzle",
    instructionAr: "ترتيب الجملة الرئيسية (الفعل دائماً في المركز 2):",
    words: ["lerne", "Heute", "ich", "Deutsch"],
    correctOrder: ["Heute", "lerne", "ich", "Deutsch"],
    fullSentence: "Heute lerne ich Deutsch.",
    ruleAr: "قاعدة الموقع الثاني (Verb auf Position 2): إذا بدأت الجملة بظرف زمان (Heute)، يأتي الفعل مباشرة بعده ثم الفاعل."
  },
  {
    id: 8, level: "A1.1", type: "puzzle",
    instructionAr: "تكوين سؤال مباشر بالأداة (W-Frage):",
    words: ["wohnst", "Wo", "du", "jetzt"],
    correctOrder: ["Wo", "wohnst", "du", "jetzt"],
    fullSentence: "Wo wohnst du jetzt?",
    ruleAr: "في سؤال أدوات الاستفهام: أداة الاستفهام أولاً (Wo)، ثم الفعل مباشرة (wohnst) في الموقع الثاني."
  },
  {
    id: 9, level: "A1.1", type: "case",
    instructionAr: "حدد وظيفة الاسم المرفوع (Nominativ):",
    sentenceDisplay: "<span class='underline font-bold text-blue-600'>Der Lehrer</span> kommt heute pünktlich.",
    highlightedPart: "Der Lehrer", fullSentence: "Der Lehrer kommt heute pünktlich.",
    correct: "Nominativ", options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    ruleAr: "فاعل الجملة الذي يقوم بالفعل يكون دائماً في حالة الرفع (Nominativ)."
  },

  // ===================== STUFE A1.2 =====================
  {
    id: 10, level: "A1.2", type: "blitz",
    noun: "Kaffee", meaningAr: "قهوة (مذكر)", icon: "☕",
    correct: "der", plural: "die Kaffees",
    ruleAr: "المشروبات المنبهة كالقهوة والشاي مذكرة في الألمانية (der Kaffee / der Tee)."
  },
  {
    id: 11, level: "A1.2", type: "blitz",
    noun: "Zeitung", meaningAr: "جريدة (مؤنث)", icon: "📰",
    correct: "die", plural: "die Zeitungen",
    ruleAr: "قاعدة ثابتة: كل الأسماء التي تنتهي باللاحقة '-ung' هي مؤنثة دائماً (die Zeitung)."
  },
  {
    id: 12, level: "A1.2", type: "cloze",
    instructionAr: "أداة النكرة في حالة المفعول به المنصوب (Akkusativ):",
    sentenceBefore: "Ich kaufe", blankAnswer: "einen", sentenceAfter: "neuen Schreibtisch.",
    fullSentence: "Ich kaufe einen neuen Schreibtisch.",
    options: ["ein", "einen", "einem", "eine"],
    ruleAr: "الاسم مذكر (der Schreibtisch). المفعول به المباشر المنصوب (Akkusativ) يحول 'ein' إلى 'einen'."
  },
  {
    id: 13, level: "A1.2", type: "cloze",
    instructionAr: "الأفعال المنفصلة (Trennbare Verben):",
    sentenceBefore: "Am Morgen steht Mai um 6 Uhr", blankAnswer: "auf", sentenceAfter: ".",
    fullSentence: "Am Morgen steht Mai um 6 Uhr auf.",
    options: ["an", "auf", "aus", "mit"],
    ruleAr: "الفعل المنفصل (aufstehen): يصرف الجذر 'steht' في المركز 2، والبادئة 'auf' تقذف إلى نهاية الجملة تماماً."
  },
  {
    id: 14, level: "A1.2", type: "cloze",
    instructionAr: "الفعل المساعد الناقص (können = يستطيع):",
    sentenceBefore: "Mein Bruder", blankAnswer: "kann", sentenceAfter: "sehr gut schwimmen.",
    fullSentence: "Mein Bruder kann sehr gut schwimmen.",
    options: ["kann", "kannst", "können", "könnt"],
    ruleAr: "مع هو/هي (er/sie) لا يأخذ الفعل المساعد أي نهاية: er kann بدون حرف t."
  },
  {
    id: 15, level: "A1.2", type: "puzzle",
    instructionAr: "تكوين سؤال (نعم/لا) يبدأ بالفعل:",
    words: ["Trinkst", "du", "gerne", "Orangensaft"],
    correctOrder: ["Trinkst", "du", "gerne", "Orangensaft"],
    fullSentence: "Trinkst du gerne Orangensaft?",
    ruleAr: "في أسئلة نعم أو لا (Ja/Nein-Frage)، يتقدم الفعل المصرف ليحتل المركز الأول (Position 1)."
  },
  {
    id: 16, level: "A1.2", type: "puzzle",
    instructionAr: "القوس الفعلي مع فعل المودال (möchten):",
    words: ["Wir", "möchten", "eine", "Pizza", "bestellen"],
    correctOrder: ["Wir", "möchten", "eine", "Pizza", "bestellen"],
    fullSentence: "Wir möchten eine Pizza bestellen.",
    ruleAr: "قوس الأفعال: فعل möchten في الموقع الثاني، ومصدر الفعل الآخر (bestellen) في نهاية الجملة."
  },
  {
    id: 17, level: "A1.2", type: "case",
    instructionAr: "حدد حالة الاسم بعد الفعل المتعدي (haben):",
    sentenceDisplay: "Haben Sie <span class='underline font-bold text-blue-600'>einen Moment</span> Zeit?",
    highlightedPart: "einen Moment", fullSentence: "Haben Sie einen Moment Zeit?",
    correct: "Akkusativ", options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    ruleAr: "الفعل haben يأخذ دائماً مفعولاً به منصوباً (Akkusativ). كلمة der Moment تحولت إلى einen Moment."
  },
  {
    id: 18, level: "A1.2", type: "case",
    instructionAr: "الضمائر الشخصية في حالة النصب (Akkusativ):",
    sentenceDisplay: "Ich liebe <span class='underline font-bold text-blue-600'>dich</span> von ganzem Herzen.",
    highlightedPart: "dich", fullSentence: "Ich liebe dich von ganzem Herzen.",
    correct: "Akkusativ", options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    ruleAr: "الضمير 'dich' هو صيغة النصب للضمير 'du' (أحبكَ أنتَ = مفعول به منصوب)."
  },

  // ===================== STUFE A2.1 =====================
  {
    id: 19, level: "A2.1", type: "blitz",
    noun: "Mädchen", meaningAr: "فتاة (محايد)", icon: "👧",
    correct: "das", plural: "die Mädchen",
    ruleAr: "تنبيه هام للناطقين بالعربية: رغم أن المعنى أنثى، إلا أن لاحقة التصغير '-chen' تجعل الكلمة محايدة (das) حتماً."
  },
  {
    id: 20, level: "A2.1", type: "blitz",
    noun: "Bäckerei", meaningAr: "مخبز (مؤنث)", icon: "🥖",
    correct: "die", plural: "die Bäckereien",
    ruleAr: "جميع الأسماء التي تنتهي باللاحقة '-ei' هي مؤنثة دائماً (die Bäckerei, die Konditorei)."
  },
  {
    id: 21, level: "A2.1", type: "cloze",
    instructionAr: "حرف الجر (mit) الذي يجر الاسم بعده دائماً (Dativ):",
    sentenceBefore: "Ich fahre jeden Tag mit", blankAnswer: "dem", sentenceAfter: "Bus zur Arbeit.",
    fullSentence: "Ich fahre jeden Tag mit dem Bus zur Arbeit.",
    options: ["den", "dem", "das", "der"],
    ruleAr: "حرف الجر 'mit' يفرض حالة الجر Dativ. أداة der Bus تصبح مع الجر 'dem Bus'."
  },
  {
    id: 22, level: "A2.1", type: "cloze",
    instructionAr: "حرف الجر (bei) مع المؤنث في حالة الجر:",
    sentenceBefore: "Ali wohnt noch bei", blankAnswer: "seiner", sentenceAfter: "Familie.",
    fullSentence: "Ali wohnt noch bei seiner Familie.",
    options: ["seine", "seiner", "seinem", "seinen"],
    ruleAr: "كلمة die Familie مؤنثة. بعد حرف الجر bei (Dativ) تصبح أداة الملكية 'seiner Familie'."
  },
  {
    id: 23, level: "A2.1", type: "cloze",
    instructionAr: "زمن الماضي التام (Perfekt) مع أفعال الحركة (sein):",
    sentenceBefore: "Gestern", blankAnswer: "bin", sentenceAfter: "ich spät nach Hause gekommen.",
    fullSentence: "Gestern bin ich spät nach Hause gekommen.",
    options: ["habe", "bin", "hat", "war"],
    ruleAr: "فعل الوصول (kommen) يدل على انتقال وتغير مكان، لذا يأخذ الفعل المساعد 'sein' (ich bin gekommen)."
  },
  {
    id: 24, level: "A2.1", type: "puzzle",
    instructionAr: "تركيب جملة الماضي التام (Perfekt):",
    words: ["Wir", "haben", "gestern", "Grammatik", "gelernt"],
    correctOrder: ["Wir", "haben", "gestern", "Grammatik", "gelernt"],
    fullSentence: "Wir haben gestern Grammatik gelernt.",
    ruleAr: "في زمن الماضي التام: الفعل المساعد (haben) في المركز 2، والتصريف الثالث (gelernt) في آخر الجملة."
  },
  {
    id: 25, level: "A2.1", type: "puzzle",
    instructionAr: "أحرف الجر المشتركة مع الثبات (Wo? = Dativ):",
    words: ["Das", "Buch", "liegt", "auf", "dem", "Tisch"],
    correctOrder: ["Das", "Buch", "liegt", "auf", "dem", "Tisch"],
    fullSentence: "Das Buch liegt auf dem Tisch.",
    ruleAr: "السؤال بـ 'أين يقع الكتاب؟' (ثبات) يفرض حالة الجر Dativ: على الطاولة = auf dem Tisch."
  },
  {
    id: 26, level: "A2.1", type: "case",
    instructionAr: "حدد حالة الاسم المجرور بالجر الثابت:",
    sentenceDisplay: "Wir sprechen nach <span class='underline font-bold text-blue-600'>dem Unterricht</span> darüber.",
    highlightedPart: "dem Unterricht", fullSentence: "Wir sprechen nach dem Unterricht darüber.",
    correct: "Dativ", options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    ruleAr: "حرف الجر nach يجر الاسم بعده دائماً (Dativ). المفرد der Unterricht أصبح dem Unterricht."
  },
  {
    id: 27, level: "A2.1", type: "case",
    instructionAr: "المفعول به غير المباشر (الشخص المستفيد):",
    sentenceDisplay: "Der Arzt hilft <span class='underline font-bold text-blue-600'>dem Patienten</span> sofort.",
    highlightedPart: "dem Patienten", fullSentence: "Der Arzt hilft dem Patienten sofort.",
    correct: "Dativ", options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    ruleAr: "الفعل 'helfen' يتعدى دائماً لمفعول به مجرور (Dativ): يساعد الطبيبُ المريضَ (dem Patienten)."
  },

  // ===================== STUFE A2.2 =====================
  {
    id: 28, level: "A2.2", type: "blitz",
    noun: "Ergebnis", meaningAr: "نتيجة (محايد)", icon: "📊",
    correct: "das", plural: "die Ergebnisse",
    ruleAr: "الأسماء المنتهية باللاحقة '-nis' هي غالباً محايدة (das Ergebnis, das Zeugnis)."
  },
  {
    id: 29, level: "A2.2", type: "cloze",
    instructionAr: "حروف الجر التي تنصب دائماً (Akkusativ):",
    sentenceBefore: "Ohne", blankAnswer: "meinen", sentenceAfter: "Bruder gehe ich nicht ins Kino.",
    fullSentence: "Ohne meinen Bruder gehe ich nicht ins Kino.",
    options: ["meinem", "meinen", "meiner", "mein"],
    ruleAr: "حرف الجر 'ohne' ينصب الاسم بعده دائماً (Akkusativ): der Bruder تصبح 'meinen Bruder'."
  },
  {
    id: 30, level: "A2.2", type: "cloze",
    instructionAr: "نهاية الصفات بعد أداة التعريف في حالة الرفع:",
    sentenceBefore: "Der", blankAnswer: "neue", sentenceAfter: "Wagen von Mai ist sehr sparsam.",
    fullSentence: "Der neue Wagen von Mai ist sehr sparsam.",
    options: ["neu", "neue", "neuen", "neuem"],
    ruleAr: "الصفة بعد أداة المعرفة للمفرد المذكر المرفوع (der) تأخذ فقط النهاية '-e' (der neue Wagen)."
  },
  {
    id: 31, level: "A2.2", type: "cloze",
    instructionAr: "المقارنة والتفضيل (Komparativ):",
    sentenceBefore: "Ein Flugzeug ist schneller", blankAnswer: "als", sentenceAfter: "ein Zug.",
    fullSentence: "Ein Flugzeug ist schneller als ein Zug.",
    options: ["wie", "als", "denn", "so"],
    ruleAr: "في المقارنة بين شيئين غير متساويين بوجود صيغة er (schneller) نستخدم أداة 'als' (أسرع من)."
  },
  {
    id: 32, level: "A2.2", type: "puzzle",
    instructionAr: "جملة التعليل الجانبية مع (weil = لأن):",
    words: ["Ich", "bleibe", "zuhause,", "weil", "ich", "krank", "bin"],
    correctOrder: ["Ich", "bleibe", "zuhause,", "weil", "ich", "krank", "bin"],
    fullSentence: "Ich bleibe zuhause, weil ich krank bin.",
    ruleAr: "قاعدة ذهبية في الألمانية: أداة الربط 'weil' تدفع بالفعل المصرف (bin) إلى نهاية الجملة تماماً."
  },
  {
    id: 33, level: "A2.2", type: "puzzle",
    instructionAr: "جملة المفعول به مع (dass = أن):",
    words: ["Er", "weiß,", "dass", "du", "heute", "kommst"],
    correctOrder: ["Er", "weiß,", "dass", "du", "heute", "kommst"],
    fullSentence: "Er weiß, dass du heute kommst.",
    ruleAr: "الجملة الجانبية مع 'dass' تجعل الفعل المصرف (kommst) يأتي في آخر الكلمة قبل النقطة."
  },
  {
    id: 34, level: "A2.2", type: "puzzle",
    instructionAr: "الجملة الشرطية مع (wenn = إذا / لو):",
    words: ["Wenn", "die", "Sonne", "scheint,", "spazieren", "wir"],
    correctOrder: ["Wenn", "die", "Sonne", "scheint,", "spazieren", "wir"],
    fullSentence: "Wenn die Sonne scheint, spazieren wir.",
    ruleAr: "إذا بدأت الجملة بـ Wenn، ينتهي الشطر الأول بفعل (scheint)، ويبدأ الشطر الثاني مباشرة بفعل (spazieren)."
  },
  {
    id: 35, level: "A2.2", type: "case",
    instructionAr: "حروف الجر المشتركة مع الحركة وتغيير المكان (Wohin? = Akkusativ):",
    sentenceDisplay: "Ich lege das Buch auf <span class='underline font-bold text-blue-600'>den Tisch</span>.",
    highlightedPart: "den Tisch", fullSentence: "Ich lege das Buch auf den Tisch.",
    correct: "Akkusativ", options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    ruleAr: "الفعل 'legen' يدل على حركة ونقل للشيء (إلى أين؟ Wohin؟). لذلك تأخذ auf هنا النصب Akkusativ: den Tisch."
  },
  {
    id: 36, level: "A2.2", type: "case",
    instructionAr: "الأفعال الانعكاسية (Reflexivpronomen):",
    sentenceDisplay: "Ich freue <span class='underline font-bold text-blue-600'>mich</span> sehr auf den Urlaub.",
    highlightedPart: "mich", fullSentence: "Ich freue mich sehr auf den Urlaub.",
    correct: "Akkusativ", options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    ruleAr: "الضمير المنعكس مع فعل (sich freuen) يكون في حالة النصب Akkusativ: ich freue mich."
  }
];

// 2. STATE & LOCALSTORAGE FÜR EIGENE AUFGABEN
class AppState {
  constructor() {
    const savedCustom = localStorage.getItem('dm_custom_curriculum');
    this.curriculum = savedCustom ? JSON.parse(savedCustom) : [...DEFAULT_CURRICULUM];
    
    this.currentList = [...this.curriculum];
    this.currentIndex = 0;
    this.xp = parseInt(localStorage.getItem('dm_xp') || '0', 10);
    this.puzzleSelection = [];
    
    this.levelFilter = 'all';
    this.typeFilter = 'all';

    this.urlParams = new URLSearchParams(window.location.search);
  }

  saveCustomCurriculum() {
    localStorage.setItem('dm_custom_curriculum', JSON.stringify(this.curriculum));
  }

  saveXP() {
    localStorage.setItem('dm_xp', this.xp);
  }

  addXP(points) {
    this.xp += points;
    this.saveXP();
  }

  applyFilters() {
    this.currentList = this.curriculum.filter(item => {
      const matchLevel = (this.levelFilter === 'all') || (item.level === this.levelFilter);
      const matchType = (this.typeFilter === 'all') || (item.type === this.typeFilter);
      return matchLevel && matchType;
    });
    this.currentIndex = 0;
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
  const germanVoice = voices.find(v => v.lang && v.lang.startsWith('de'));
  if (germanVoice) utterance.voice = germanVoice;

  window.speechSynthesis.speak(utterance);
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// 4. DOM ELEMENTS
const stage = document.getElementById('exercise-stage');
const feedbackPanel = document.getElementById('feedback-panel');
const feedbackTitle = document.getElementById('feedback-title');
const feedbackExplanation = document.getElementById('feedback-explanation');
const feedbackIcon = document.getElementById('feedback-icon');
const btnNext = document.getElementById('btn-next');
const btnAudioRepeat = document.getElementById('btn-audio-repeat');
const statXp = document.getElementById('stat-xp');
const progressBar = document.getElementById('progress-bar');
const counterLabel = document.getElementById('exercise-counter');
const typeTag = document.getElementById('exercise-type-tag');
const teacherToggleBtn = document.getElementById('teacher-toggle-btn');
const teacherModal = document.getElementById('teacher-modal');
const closeTeacherModal = document.getElementById('close-teacher-modal');
const curriculumList = document.getElementById('teacher-curriculum-list');
const btnExportLink = document.getElementById('btn-export-link');
const exportConfirm = document.getElementById('export-confirm');

// 5. INITIALISIERUNG
function initApp() {
  statXp.innerText = `${state.xp} XP`;

  // Custom Assignment Link (?custom=1,5,10)
  if (state.urlParams.has('custom')) {
    const ids = state.urlParams.get('custom').split(',').map(Number);
    state.currentList = state.curriculum.filter(item => ids.includes(item.id));
    if (state.currentList.length === 0) state.currentList = [...state.curriculum];
  }

  if (state.urlParams.get('view') === 'teacher') {
    openTeacherModal();
  }

  setupLevelTabs();
  setupTypeFilters();
  setupTeacherModalTabs();
  loadCurrentExercise();
  registerServiceWorker();
}

// 6. AUFGABEN-LADUNG & RENDERER
function loadCurrentExercise() {
  feedbackPanel.classList.add('hidden');
  state.puzzleSelection = [];
  
  const current = state.currentList[state.currentIndex];
  if (!current) {
    renderCompletionScreen();
    return;
  }

  const progressPercent = ((state.currentIndex) / state.currentList.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  counterLabel.innerText = `${state.currentIndex + 1} / ${state.currentList.length}`;
  typeTag.innerText = `[${current.level}] ${getTypeLabel(current.type)}`;

  switch (current.type) {
    case 'blitz': renderBlitz(current); break;
    case 'cloze': renderCloze(current); break;
    case 'puzzle': renderPuzzle(current); break;
    case 'case': renderCase(current); break;
  }
}

function getTypeLabel(type) {
  switch(type) {
    case 'blitz': return 'أدوات التعريف';
    case 'cloze': return 'املأ الفراغ';
    case 'puzzle': return 'ترتيب الجملة';
    case 'case': return 'مكتشف الإعراب';
    default: return 'قواعد';
  }
}

function renderBlitz(item) {
  stage.innerHTML = `
    <div class="w-full flex flex-col items-center animate-pop text-center">
      <div class="text-6xl mb-2">${item.icon || '📝'}</div>
      <span class="text-xs font-bold text-slate-500 mb-1">${item.meaningAr}</span>
      <h2 class="text-4xl font-black text-slate-900 font-de mb-8 tracking-wide">${item.noun}</h2>

      <div class="grid grid-cols-3 gap-3 w-full max-w-sm font-de">
        <button onclick="handleBlitzAnswer('der', this)" class="touch-tile py-4 text-center font-bold text-xl rounded-2xl border-2 border-blue-200 text-blue-600 bg-white hover:bg-blue-50 shadow-sm transition">der</button>
        <button onclick="handleBlitzAnswer('die', this)" class="touch-tile py-4 text-center font-bold text-xl rounded-2xl border-2 border-red-200 text-red-600 bg-white hover:bg-red-50 shadow-sm transition">die</button>
        <button onclick="handleBlitzAnswer('das', this)" class="touch-tile py-4 text-center font-bold text-xl rounded-2xl border-2 border-green-200 text-green-600 bg-white hover:bg-green-50 shadow-sm transition">das</button>
      </div>

      <div id="blitz-plural-reveal" class="h-6 mt-4 text-xs font-bold font-de text-slate-400"></div>
    </div>
  `;
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
        <span id="puzzle-placeholder" class="text-xs text-slate-400 mx-auto font-sans">اضغط على الكلمات بالترتيب...</span>
      </div>

      <div id="puzzle-bank" class="flex flex-wrap justify-center gap-2 w-full mb-6 font-de" dir="ltr">
        ${shuffled.map((word, idx) => `
          <button id="tile-${idx}" onclick="handlePuzzleTileClick('${word}', 'tile-${idx}')" class="touch-tile px-4 py-2 bg-white border border-slate-200 text-slate-800 font-semibold rounded-xl shadow-sm hover:border-slate-400 transition text-sm">
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

// 7. ANTWORTEN-HANDLING
window.handleBlitzAnswer = function(selectedArticle, btnElement) {
  const current = state.currentList[state.currentIndex];
  const isCorrect = selectedArticle === current.correct;

  const pluralBox = document.getElementById('blitz-plural-reveal');
  if (pluralBox) {
    pluralBox.innerText = `Plural: ${current.plural}`;
    pluralBox.classList.add('text-slate-800');
  }

  if (current.correct === 'der') btnElement.classList.add('bg-masculine');
  if (current.correct === 'die') btnElement.classList.add('bg-feminine');
  if (current.correct === 'das') btnElement.classList.add('bg-neuter');

  evaluateOutcome(isCorrect, `${current.correct} ${current.noun}`, current.ruleAr, `${current.correct} ${current.noun}. ${current.plural}`);
};

window.handleClozeAnswer = function(selectedOption, btnElement) {
  const current = state.currentList[state.currentIndex];
  const isCorrect = selectedOption.toLowerCase() === current.blankAnswer.toLowerCase();
  
  const slot = document.getElementById('cloze-target-slot');
  slot.innerText = selectedOption;
  slot.classList.add(isCorrect ? 'text-green-600' : 'text-red-600');

  evaluateOutcome(isCorrect, current.blankAnswer, current.ruleAr, current.fullSentence);
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

  evaluateOutcome(isCorrect, targetSentence, current.ruleAr, current.fullSentence);
};

window.handleCaseAnswer = function(selectedCaseKey, btnElement) {
  const current = state.currentList[state.currentIndex];
  const isCorrect = selectedCaseKey === current.correct;
  evaluateOutcome(isCorrect, current.correct, current.ruleAr, current.fullSentence);
};

// 8. PÄDAGOGISCHES FEEDBACK
function evaluateOutcome(isCorrect, solutionDisplay, explanationAr, germanAudioSentence) {
  stage.querySelectorAll('button').forEach(b => b.classList.add('pointer-events-none'));
  feedbackPanel.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'bg-green-50', 'border-green-200', 'animate-shake');

  if (isCorrect) {
    state.addXP(10);
    statXp.innerText = `${state.xp} XP`;
    
    feedbackPanel.classList.add('bg-green-50', 'border-green-200');
    feedbackTitle.className = 'font-bold text-sm text-green-900';
    feedbackTitle.innerText = 'أحسنت! إجابة ممتازة (Richtig)';
    feedbackIcon.className = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-green-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
  } else {
    feedbackPanel.classList.add('bg-red-50', 'border-red-200', 'animate-shake');
    feedbackTitle.className = 'font-bold text-sm text-red-900';
    feedbackTitle.innerHTML = `راجع القاعدة. الحل الصحيح: <span class="font-de underline font-black" dir="ltr">${solutionDisplay}</span>`;
    feedbackIcon.className = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-red-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>`;
  }

  feedbackExplanation.innerText = explanationAr;

  speakGerman(germanAudioSentence);
  btnAudioRepeat.onclick = () => speakGerman(germanAudioSentence);
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
      <h2 class="text-2xl font-black text-slate-900 mb-2">ممتاز جداً! أتممت هذه المرحلة</h2>
      <p class="text-xs text-slate-600 mb-6">لقد انتهيت من جميع تمارين المستوى المحدد. يمكنك الانتقال للمستوى التالي!</p>
      <button onclick="restartLevel()" class="w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow hover:bg-blue-700 transition">
        إعادة تمارين هذا القسم
      </button>
    </div>
  `;
}

window.restartLevel = function() {
  state.currentIndex = 0;
  loadCurrentExercise();
};

// 9. FILTERLOGIK
function setupLevelTabs() {
  const tabs = document.querySelectorAll('.level-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      tabs.forEach(t => t.className = "level-tab px-3 py-1 rounded-lg bg-slate-100 text-slate-600 hover:bg-slate-200 transition");
      e.target.className = "level-tab px-3 py-1 rounded-lg bg-blue-600 text-white transition";
      
      state.levelFilter = e.target.getAttribute('data-level');
      state.applyFilters();
      loadCurrentExercise();
    });
  });
}

function setupTypeFilters() {
  const chips = document.querySelectorAll('.filter-chip');
  chips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      chips.forEach(c => c.className = "filter-chip px-3 py-1 rounded-full bg-slate-100 hover:bg-slate-200 transition");
      e.target.className = "filter-chip px-3 py-1 rounded-full bg-slate-800 text-white transition";
      
      state.typeFilter = e.target.getAttribute('data-filter');
      state.applyFilters();
      loadCurrentExercise();
    });
  });
}

// 10. LEHRKRAFT-MODAL & NEUE AUFGABE HINZUFÜGEN
function setupTeacherModalTabs() {
  const tabList = document.getElementById('tab-btn-list');
  const tabAdd = document.getElementById('tab-btn-add');
  const viewList = document.getElementById('modal-tab-list');
  const viewAdd = document.getElementById('modal-tab-add');

  tabList.addEventListener('click', () => {
    tabList.className = "flex-1 py-2.5 text-blue-600 border-b-2 border-blue-600 bg-white font-bold";
    tabAdd.className = "flex-1 py-2.5 text-slate-600 hover:bg-slate-50 font-bold";
    viewList.classList.remove('hidden');
    viewAdd.classList.add('hidden');
  });

  tabAdd.addEventListener('click', () => {
    tabAdd.className = "flex-1 py-2.5 text-blue-600 border-b-2 border-blue-600 bg-white font-bold";
    tabList.className = "flex-1 py-2.5 text-slate-600 hover:bg-slate-50 font-bold";
    viewAdd.classList.remove('hidden');
    viewList.classList.add('hidden');
  });
}

window.toggleFormFields = function(type) {
  document.getElementById('form-blitz-fields').classList.toggle('hidden', type !== 'blitz');
  document.getElementById('form-cloze-fields').classList.toggle('hidden', type !== 'cloze');
};

window.addNewCustomExercise = function() {
  const level = document.getElementById('new-ex-level').value;
  const type = document.getElementById('new-ex-type').value;
  const ruleAr = document.getElementById('new-ex-rule').value || 'انتبه للقاعدة النحوية بالألمانية.';
  const newId = state.curriculum.length + 1;

  let newEx = null;

  if (type === 'blitz') {
    newEx = {
      id: newId,
      level: level,
      type: 'blitz',
      noun: document.getElementById('new-blitz-noun').value.trim(),
      meaningAr: document.getElementById('new-blitz-meaning').value.trim(),
      icon: document.getElementById('new-blitz-icon').value.trim() || '📝',
      correct: document.getElementById('new-blitz-art').value,
      plural: document.getElementById('new-blitz-plural').value.trim(),
      ruleAr: ruleAr
    };
  } else if (type === 'cloze') {
    const opts = document.getElementById('new-cloze-options').value.split(',').map(s => s.trim());
    const before = document.getElementById('new-cloze-before').value.trim();
    const ans = document.getElementById('new-cloze-answer').value.trim();
    const after = document.getElementById('new-cloze-after').value.trim();

    newEx = {
      id: newId,
      level: level,
      type: 'cloze',
      instructionAr: document.getElementById('new-cloze-inst').value.trim(),
      sentenceBefore: before,
      blankAnswer: ans,
      sentenceAfter: after,
      fullSentence: `${before} ${ans} ${after}`,
      options: opts,
      ruleAr: ruleAr
    };
  }

  if (newEx) {
    state.curriculum.push(newEx);
    state.saveCustomCurriculum();
    state.applyFilters();
    openTeacherModal();
    alert('تمت إضافة التمرين بنجاح إلى المنهج وحفظه محلياً!');
    document.getElementById('tab-btn-list').click();
  }
};

function openTeacherModal() {
  teacherModal.classList.remove('hidden');
  curriculumList.innerHTML = state.curriculum.map(ex => {
    return `
      <div class="p-3 rounded-xl border border-slate-200 flex items-start gap-3 bg-slate-50 rtl-box">
        <input type="checkbox" id="teacher-chk-${ex.id}" value="${ex.id}" checked class="mt-1 accent-blue-600 rounded">
        <div class="flex-1">
          <div class="flex justify-between items-center">
            <span class="font-bold text-xs text-slate-800">[${ex.level}] ${getTypeLabel(ex.type)}</span>
            <span class="text-[10px] text-slate-400 font-de">#${ex.id}</span>
          </div>
          <p class="text-slate-700 text-xs mt-1 font-de" dir="ltr">${ex.fullSentence || ex.noun}</p>
          <p class="text-blue-700 text-[11px] mt-0.5 font-bold font-de" dir="ltr">Lösung: ${ex.correct || ex.blankAnswer || ex.correctOrder?.join(' ')}</p>
          <p class="text-slate-500 text-[10px] mt-1">${ex.ruleAr}</p>
        </div>
      </div>
    `;
  }).join('');
}

teacherToggleBtn.addEventListener('click', openTeacherModal);
closeTeacherModal.addEventListener('click', () => teacherModal.classList.add('hidden'));

btnExportLink.addEventListener('click', () => {
  const selected = teacherModal.querySelectorAll('input[type="checkbox"]:checked');
  const ids = Array.from(selected).map(chk => chk.value).join(',');
  const baseUrl = window.location.origin + window.location.pathname;
  const assignmentUrl = `${baseUrl}?custom=${ids}`;

  navigator.clipboard.writeText(assignmentUrl).then(() => {
    exportConfirm.classList.remove('hidden');
    setTimeout(() => exportConfirm.classList.add('hidden'), 2500);
  });
});

// 11. SERVICE WORKER
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(() => {});
  }
}

window.addEventListener('DOMContentLoaded', initApp);
