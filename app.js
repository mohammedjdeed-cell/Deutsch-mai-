/**
 * Deutsch mit Mai – Pädagogische Logik & Arabisch-Didaktik
 */

// 1. LEHRPLAN MIT ARABISCHEN ERKLÄRUNGEN (16 Übungen A1/A2)
const CURRICULUM = [
  // --- DER / DIE / DAS BLITZ ---
  {
    id: 1,
    level: "A1.1",
    type: "blitz",
    noun: "Tisch",
    meaningAr: "طاولة (مذكر بالألمانية)",
    icon: "🪑",
    correct: "der",
    plural: "die Tische",
    ruleAr: "تنبيه: كلمة Tisch مذكر في الألمانية (der) رغم أنها مؤنث في العربية. الجمع: die Tische."
  },
  {
    id: 2,
    level: "A1.1",
    type: "blitz",
    noun: "Lampe",
    meaningAr: "مصباح / لمبة",
    icon: "💡",
    correct: "die",
    plural: "die Lampen",
    ruleAr: "قاعدة ذهبية: حوالي 90% من الأسماء التي تنتهي بحرف '-e' هي مؤنثة (die). الجمع: die Lampen."
  },
  {
    id: 3,
    level: "A1.1",
    type: "blitz",
    noun: "Buch",
    meaningAr: "كتاب (محايد بالألمانية)",
    icon: "📖",
    correct: "das",
    plural: "die Bücher",
    ruleAr: "في الألمانية يوجد جنس ثالث وهو المحايد (das). كلمة Buch محايدة، وجمعها بالإمالة: die Bücher."
  },
  {
    id: 4,
    level: "A2.1",
    type: "blitz",
    noun: "Mädchen",
    meaningAr: "فتاة (محايد بالألمانية)",
    icon: "👧",
    correct: "das",
    plural: "die Mädchen",
    ruleAr: "انتبه بشدة! كل الكلمات التي تنتهي بـ '-chen' هي محايدة دائماً (das)، لأنها صيغة تصغير لغوية."
  },

  // --- LÜCKENTEXT (FILL-IN-THE-BLANK) ---
  {
    id: 5,
    level: "A1.1",
    type: "cloze",
    instructionAr: "اختر تصريف الفعل المناسب للضمير:",
    sentenceBefore: "Mai und Lukas",
    blankAnswer: "wohnen",
    sentenceAfter: "seit zwei Jahren in Berlin.",
    fullSentence: "Mai und Lukas wohnen seit zwei Jahren in Berlin.",
    options: ["wohnt", "wohne", "wohnen", "wohnst"],
    ruleAr: "الفاعل هنا بصيغة الجمع الغائب (هم = Mai und Lukas)، لذلك يأخذ الفعل النهاية '-en' (wohnen)."
  },
  {
    id: 6,
    level: "A1.2",
    type: "cloze",
    instructionAr: "اختر أداة النكرة المناسبة في حالة المفعول به (Akkusativ):",
    sentenceBefore: "Ich hätte gern",
    blankAnswer: "einen",
    sentenceAfter: "heißen Kaffee, bitte!",
    fullSentence: "Ich hätte gern einen heißen Kaffee, bitte!",
    options: ["ein", "einen", "einem", "eine"],
    ruleAr: "كلمة Kaffee مذكر (der). في حالة النصب (Akkusativ/المفعول به)، تتحول أداة النكرة 'ein' إلى 'einen'."
  },
  {
    id: 7,
    level: "A2.1",
    type: "cloze",
    instructionAr: "اختر أداة المعرفة مع حرف الجر (Dativ):",
    sentenceBefore: "Nach der Arbeit fahre ich immer mit",
    blankAnswer: "dem",
    sentenceAfter: "Bus nach Hause.",
    fullSentence: "Nach der Arbeit fahre ich immer mit dem Bus nach Hause.",
    options: ["den", "das", "dem", "des"],
    ruleAr: "حرف الجر 'mit' يجر الاسم دائماً (Dativ). الاسم المذكر 'der Bus' يتحول في حالة الجر إلى 'dem Bus'."
  },
  {
    id: 8,
    level: "A2.2",
    type: "cloze",
    instructionAr: "أحرف الجر المشتركة (سؤال أين؟ = ثبات = Dativ):",
    sentenceBefore: "Das Buch liegt auf",
    blankAnswer: "dem",
    sentenceAfter: "Schreibtisch.",
    fullSentence: "Das Buch liegt auf dem Schreibtisch.",
    options: ["der", "den", "dem", "das"],
    ruleAr: "الفعل liegt يدل على الموقع والثبات (Wo? أين؟)، لذلك نستخدم حالة الجر Dativ: أداة der Tisch تصبح dem."
  },

  // --- SATZBAU PUZZLE ---
  {
    id: 9,
    level: "A1.1",
    type: "puzzle",
    instructionAr: "رتب الكلمات لتكوين جملة صحيحة (الفعل دائماً في الموقع 2):",
    words: ["lerne", "Heute", "ich", "Deutsch", "gerne"],
    correctOrder: ["Heute", "lerne", "ich", "gerne", "Deutsch"],
    fullSentence: "Heute lerne ich gerne Deutsch.",
    ruleAr: "قاعدة الموقع الثاني: إذا بدأت الجملة بالظرف الزمني (Heute)، يجب أن يأتي الفعل المصرف مباشرة في الموقع الثاني (Position 2)."
  },
  {
    id: 10,
    level: "A1.2",
    type: "puzzle",
    instructionAr: "تكوين سؤال نعم/لا (يبدأ بالفعل):",
    words: ["Trinkst", "du", "morgens", "einen", "Tee"],
    correctOrder: ["Trinkst", "du", "morgens", "einen", "Tee"],
    fullSentence: "Trinkst du morgens einen Tee?",
    ruleAr: "في السؤال المباشر (Ja/Nein-Frage)، يتقدم الفعل المصرف ليأخذ الموقع الأول (Position 1)."
  },
  {
    id: 11,
    level: "A2.1",
    type: "puzzle",
    instructionAr: "رتب جملة الأفعال الناقصة (Modalverben):",
    words: ["Wir", "müssen", "diese", "Aufgabe", "schnell", "verstehen"],
    correctOrder: ["Wir", "müssen", "diese", "Aufgabe", "schnell", "verstehen"],
    fullSentence: "Wir müssen diese Aufgabe schnell verstehen.",
    ruleAr: "القوس الفعلي (Satzklammer): يأتي الفعل المساعد (müssen) في الموقع الثاني، بينما يُلقى الفعل الأساسي (verstehen) بصيغة المصدر في آخر الجملة تماماً."
  },
  {
    id: 12,
    level: "A2.2",
    type: "puzzle",
    instructionAr: "جملة التعليل مع weil (الفعل يذهب لآخر الجملة):",
    words: ["Ich", "bleibe", "im", "Bett,", "weil", "ich", "krank", "bin"],
    correctOrder: ["Ich", "bleibe", "im", "Bett,", "weil", "ich", "krank", "bin"],
    fullSentence: "Ich bleibe im Bett, weil ich krank bin.",
    ruleAr: "أداة الربط 'weil' تنشئ جملة جانبية (Nebensatz)، وتطرد الفعل المصرف (bin) إلى نهاية الجملة تماماً."
  },

  // --- KASUS-TRAINER ---
  {
    id: 13,
    level: "A1.2",
    type: "case",
    instructionAr: "ما هي الحالة الإعرابية للجزء المحدد تحته خط؟",
    sentenceDisplay: "Der Lehrer erklärt <span class='underline font-bold text-blue-600'>den Schülern</span> die Grammatik.",
    highlightedPart: "den Schülern",
    fullSentence: "Der Lehrer erklärt den Schülern die Grammatik.",
    correct: "Dativ",
    options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    correctKey: "Dativ",
    ruleAr: "الجواب على سؤال 'لمن يشرح؟' (Wem?) هو مفعول به غير مباشر في حالة الجر Dativ Plural (إضافة n للجمع)."
  },
  {
    id: 14,
    level: "A1.2",
    type: "case",
    instructionAr: "حدد حالة الاسم الإعرابية:",
    sentenceDisplay: "Sie sucht <span class='underline font-bold text-blue-600'>ihren Schlüssel</span> schon seit Stunden.",
    highlightedPart: "ihren Schlüssel",
    fullSentence: "Sie sucht ihren Schlüssel schon seit Stunden.",
    correct: "Akkusativ",
    options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    correctKey: "Akkusativ",
    ruleAr: "الفعل 'suchen' يتعدى إلى مفعول به مباشر منصوب (Akkusativ): 'ماذا تبحث؟' -> ihren Schlüssel (المفرد: der Schlüssel)."
  },
  {
    id: 15,
    level: "A2.1",
    type: "case",
    instructionAr: "ما الحالة التي فرضها حرف الجر المحدد؟",
    sentenceDisplay: "Wir treffen uns nach <span class='underline font-bold text-blue-600'>dem Unterricht</span>.",
    highlightedPart: "dem Unterricht",
    fullSentence: "Wir treffen uns nach dem Unterricht.",
    correct: "Dativ",
    options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    correctKey: "Dativ",
    ruleAr: "أحرف الجر التالية تأخذ Dativ دائماً: (aus, bei, mit, nach, seit, von, zu). لذلك der Unterricht اصبحت dem."
  },
  {
    id: 16,
    level: "A2.2",
    type: "case",
    instructionAr: "حدد الموقع الإعرابي لهذا الجزء:",
    sentenceDisplay: "<span class='underline font-bold text-blue-600'>Ein alter Baum</span> steht mitten im Garten.",
    highlightedPart: "Ein alter Baum",
    fullSentence: "Ein alter Baum steht mitten im Garten.",
    correct: "Nominativ",
    options: ["Nominativ (مرفوع)", "Akkusativ (منصوب)", "Dativ (مجرور)"],
    correctKey: "Nominativ",
    ruleAr: "هذا هو فاعل الجملة (Wer steht im Garten? من يقف في الحديقة؟). فاعل الجملة يكون دائماً في حالة الرفع (Nominativ)."
  }
];

// 2. APP STATE
class AppState {
  constructor() {
    this.currentList = [...CURRICULUM];
    this.currentIndex = 0;
    this.xp = parseInt(localStorage.getItem('dm_xp') || '0', 10);
    this.puzzleSelection = [];
    this.filter = 'all';
    this.urlParams = new URLSearchParams(window.location.search);
  }

  saveXP() {
    localStorage.setItem('dm_xp', this.xp);
  }

  addXP(points) {
    this.xp += points;
    this.saveXP();
  }
}

const state = new AppState();

// 3. SPRACHAUSGABE (Web Speech API de-DE)
function speakGerman(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel();

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = 0.85; // Leicht verlangsamt für arabische Deutschlerner

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
const filterChips = document.querySelectorAll('.filter-chip');
const teacherToggleBtn = document.getElementById('teacher-toggle-btn');
const teacherModal = document.getElementById('teacher-modal');
const closeTeacherModal = document.getElementById('close-teacher-modal');
const curriculumList = document.getElementById('teacher-curriculum-list');
const btnExportLink = document.getElementById('btn-export-link');
const exportConfirm = document.getElementById('export-confirm');

// 5. INITIALISIERUNG
function initApp() {
  statXp.innerText = `${state.xp} XP`;

  // Custom Hausaufgaben-Link Parameter (?custom=1,3,7)
  if (state.urlParams.has('custom')) {
    const ids = state.urlParams.get('custom').split(',').map(Number);
    state.currentList = CURRICULUM.filter(item => ids.includes(item.id));
    if (state.currentList.length === 0) state.currentList = [...CURRICULUM];
  }

  if (state.urlParams.get('view') === 'teacher') {
    openTeacherModal();
  }

  setupFilters();
  loadCurrentExercise();
  registerServiceWorker();
}

// 6. AUFGABEN-RENDERER
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
    case 'blitz': return 'أدوات التعريف السريعة';
    case 'cloze': return 'املأ الفراغ';
    case 'puzzle': return 'ترتيب الجملة';
    case 'case': return 'مكتشف الإعراب';
    default: return 'قواعد';
  }
}

// Typ 1: Blitz
function renderBlitz(item) {
  stage.innerHTML = `
    <div class="w-full flex flex-col items-center animate-pop text-center">
      <div class="text-6xl mb-2">${item.icon}</div>
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

// Typ 2: Cloze
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

// Typ 3: Puzzle
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

// Typ 4: Case
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
window.handleBlitzAnswer = function(selectedArticle, btnElement) {
  const current = state.currentList[state.currentIndex];
  const isCorrect = selectedArticle === current.correct;

  const pluralBox = document.getElementById('blitz-plural-reveal');
  pluralBox.innerText = `Plural: ${current.plural}`;
  pluralBox.classList.add('text-slate-800');

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
    feedbackTitle.innerText = 'ممتاز! إجابة صحيحة (Richtig)';
    feedbackIcon.className = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-green-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
  } else {
    feedbackPanel.classList.add('bg-red-50', 'border-red-200', 'animate-shake');
    feedbackTitle.className = 'font-bold text-sm text-red-900';
    feedbackTitle.innerHTML = `تحتاج مراجعة. الحل الصحيح: <span class="font-de underline font-black" dir="ltr">${solutionDisplay}</span>`;
    feedbackIcon.className = 'w-8 h-8 rounded-full flex items-center justify-center shrink-0 bg-red-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>`;
  }

  feedbackExplanation.innerText = explanationAr;

  // Audio auf Deutsch abspielen
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
      <h2 class="text-2xl font-black text-slate-900 mb-2">أحسنت! أتممت التمارين بنجاح</h2>
      <p class="text-xs text-slate-600 mb-6">لقد راجعت جميع القواعد المحددة. استمر بالتدريب اليومي لترسيخ اللغة!</p>
      <button onclick="restartCurriculum()" class="w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow hover:bg-blue-700 transition">
        إعادة التمارين مرة أخرى
      </button>
    </div>
  `;
}

window.restartCurriculum = function() {
  state.currentIndex = 0;
  loadCurrentExercise();
};

// 9. THEMEN-FILTER
function setupFilters() {
  filterChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      filterChips.forEach(c => {
        c.className = "filter-chip px-3.5 py-1.5 rounded-full whitespace-nowrap bg-slate-100 text-slate-600 hover:bg-slate-200 transition";
      });
      e.target.className = "filter-chip px-3.5 py-1.5 rounded-full whitespace-nowrap bg-blue-600 text-white shadow transition";

      const filterType = e.target.getAttribute('data-filter');
      state.filter = filterType;
      state.currentIndex = 0;

      if (filterType === 'all') {
        state.currentList = [...CURRICULUM];
      } else {
        state.currentList = CURRICULUM.filter(item => item.type === filterType);
      }
      loadCurrentExercise();
    });
  });
}

// 10. LEHRKRAFT-MODAL & LINK EXPORT
function openTeacherModal() {
  teacherModal.classList.remove('hidden');
  curriculumList.innerHTML = CURRICULUM.map(ex => {
    const isIncluded = state.currentList.some(item => item.id === ex.id);
    return `
      <div class="p-3 rounded-xl border border-slate-200 flex items-start gap-3 bg-slate-50 rtl-box">
        <input type="checkbox" id="teacher-chk-${ex.id}" value="${ex.id}" ${isIncluded ? 'checked' : ''} class="mt-1 accent-blue-600 rounded">
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
  const selectedCheckboxes = teacherModal.querySelectorAll('input[type="checkbox"]:checked');
  const ids = Array.from(selectedCheckboxes).map(chk => chk.value).join(',');
  const baseUrl = window.location.origin + window.location.pathname;
  const assignmentUrl = `${baseUrl}?custom=${ids}`;

  navigator.clipboard.writeText(assignmentUrl).then(() => {
    exportConfirm.classList.remove('hidden');
    setTimeout(() => exportConfirm.classList.add('hidden'), 2500);
  });
});

// 11. SERVICE WORKER REGISTRIERUNG
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.info('Service Worker registration skipped.', err);
    });
  }
}

window.addEventListener('DOMContentLoaded', initApp);
