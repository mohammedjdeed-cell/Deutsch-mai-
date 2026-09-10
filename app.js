/**
 * Deutsch mit Mai – Production App Logic & Curriculum Engine
 */

// --- 1. CURRICULUM DATASET (16 In-Depth Exercises: A1 & A2) ---
const CURRICULUM = [
  // --- DER / DIE / DAS BLITZ ---
  {
    id: 1,
    level: "A1.1",
    type: "blitz",
    noun: "Tisch",
    meaning: "table",
    icon: "🪑",
    correct: "der",
    plural: "die Tische",
    rule: "Maskulin: Fast alle Substantive auf Gegenstände des Alltags. Im Plural: die Tische."
  },
  {
    id: 2,
    level: "A1.1",
    type: "blitz",
    noun: "Lampe",
    meaning: "lamp",
    icon: "💡",
    correct: "die",
    plural: "die Lampen",
    rule: "Feminin: Etwa 90 % aller Substantive mit der Endung '-e' sind feminin."
  },
  {
    id: 3,
    level: "A1.1",
    type: "blitz",
    noun: "Buch",
    meaning: "book",
    icon: "📖",
    correct: "das",
    plural: "die Bücher",
    rule: "Neutral: 'Das Buch', Plural mit Umlaut: 'die Bücher'."
  },
  {
    id: 4,
    level: "A2.1",
    type: "blitz",
    noun: "Mädchen",
    meaning: "girl",
    icon: "👧",
    correct: "das",
    plural: "die Mädchen",
    rule: "Diminutive auf '-chen' und '-lein' sind im Deutschen IMMER neutral (das)."
  },

  // --- INTERACTIVE LÜCKENTEXT (FILL-IN-THE-BLANK) ---
  {
    id: 5,
    level: "A1.1",
    type: "cloze",
    instruction: "Wähle die passende Verbform:",
    sentenceBefore: "Mai und Lukas",
    blankAnswer: "wohnen",
    sentenceAfter: "seit zwei Jahren in Berlin.",
    fullSentence: "Mai und Lukas wohnen seit zwei Jahren in Berlin.",
    options: ["wohnt", "wohne", "wohnen", "wohnst"],
    rule: "Subjekt im Plural (sie = Mai und Lukas) erfordert die Endung '-en': sie wohnen."
  },
  {
    id: 6,
    level: "A1.2",
    type: "cloze",
    instruction: "Akkusativ-Objekt einsetzen:",
    sentenceBefore: "Ich hätte gern",
    blankAnswer: "einen",
    sentenceAfter: "heißen Kaffee, bitte!",
    fullSentence: "Ich hätte gern einen heißen Kaffee, bitte!",
    options: ["ein", "einen", "einem", "eine"],
    rule: "Der Kaffee (maskulin). Im Akkusativ wird unbestimmtes 'ein' zu 'einen'."
  },
  {
    id: 7,
    level: "A2.1",
    type: "cloze",
    instruction: "Dativ-Präposition:",
    sentenceBefore: "Nach der Arbeit fahre ich immer mit",
    blankAnswer: "dem",
    sentenceAfter: "Bus nach Hause.",
    fullSentence: "Nach der Arbeit fahre ich immer mit dem Bus nach Hause.",
    options: ["den", "das", "dem", "des"],
    rule: "Die Präposition 'mit' verlangt immer den Dativ. 'Der Bus' wird im Dativ zu 'dem Bus'."
  },
  {
    id: 8,
    level: "A2.2",
    type: "cloze",
    instruction: "Wechselpräposition (Ort = Wo? → Dativ):",
    sentenceBefore: "Das Buch liegt auf",
    blankAnswer: "dem",
    sentenceAfter: "Schreibtisch.",
    fullSentence: "Das Buch liegt auf dem Schreibtisch.",
    options: ["der", "den", "dem", "das"],
    rule: "'Liegen' beschreibt eine Position (Wo? -> Dativ). Maskulin: der Tisch -> auf dem Tisch."
  },

  // --- SATZBAU PUZZLE (SYNTAX BUILDER) ---
  {
    id: 9,
    level: "A1.1",
    type: "puzzle",
    instruction: "Bringe die Wörter in die richtige Reihenfolge (Verb an Position 2):",
    words: ["Lerne", "heute", "ich", "Deutsch", "gerne"],
    correctOrder: ["Heute", "lerne", "ich", "gerne", "Deutsch"],
    fullSentence: "Heute lerne ich gerne Deutsch.",
    rule: "Hauptsatz-Inversion: Steht die Zeitangabe ('Heute') auf Position 1, folgt das konjugierte Verb sofort auf Position 2!"
  },
  {
    id: 10,
    level: "A1.2",
    type: "puzzle",
    instruction: "Fragesatz bilden:",
    words: ["du", "Trinkst", "morgens", "Tee", "einen"],
    correctOrder: ["Trinkst", "du", "morgens", "einen", "Tee"],
    fullSentence: "Trinkst du morgens einen Tee?",
    rule: "Ja/Nein-Frage: Das konjugierte Verb steht zwingend ganz vorne auf Position 1."
  },
  {
    id: 11,
    level: "A2.1",
    type: "puzzle",
    instruction: "Modalverb-Klammer bilden:",
    words: ["Wir", "müssen", "Aufgabe", "diese", "schnell", "verstehen"],
    correctOrder: ["Wir", "müssen", "diese", "Aufgabe", "schnell", "verstehen"],
    fullSentence: "Wir müssen diese Aufgabe schnell verstehen.",
    rule: "Satzklammer bei Modalverben: 'müssen' steht an Position 2, der Infinitiv 'verstehen' ans Satzende."
  },
  {
    id: 12,
    level: "A2.2",
    type: "puzzle",
    instruction: "Nebensatz mit 'weil' (Verb-Letzt-Stellung!):",
    words: ["Ich", "bleibe", "im", "Bett,", "weil", "ich", "krank", "bin"],
    correctOrder: ["Ich", "bleibe", "im", "Bett,", "weil", "ich", "krank", "bin"],
    fullSentence: "Ich bleibe im Bett, weil ich krank bin.",
    rule: "Kausale Konjunktion 'weil': Das konjugierte Hilfsverb ('bin') wandert ans absolute Satzende."
  },

  // --- KASUS-TRAINER (CASE DETECTIVE) ---
  {
    id: 13,
    level: "A1.2",
    type: "case",
    instruction: "Welcher Kasus ist das markierte Element?",
    sentenceDisplay: "Der Lehrer erklärt <span class='underline font-bold text-blue-600'>den Schülern</span> die Grammatik.",
    highlightedPart: "den Schülern",
    fullSentence: "Der Lehrer erklärt den Schülern die Grammatik.",
    correct: "Dativ",
    options: ["Nominativ", "Akkusativ", "Dativ"],
    rule: "'Wem erklärt er die Grammatik?' -> Indirektes Objekt im Dativ Plural (den Schülern mit Plural-n)."
  },
  {
    id: 14,
    level: "A1.2",
    type: "case",
    instruction: "Bestimme den Fall:",
    sentenceDisplay: "Sie sucht <span class='underline font-bold text-blue-600'>ihren Schlüssel</span> schon seit Stunden.",
    highlightedPart: "ihren Schlüssel",
    fullSentence: "Sie sucht ihren Schlüssel schon seit Stunden.",
    correct: "Akkusativ",
    options: ["Nominativ", "Akkusativ", "Dativ"],
    rule: "Das Verb 'suchen' verlangt ein direktes Akkusativobjekt: 'Wen oder was sucht sie?' -> ihren Schlüssel."
  },
  {
    id: 15,
    level: "A2.1",
    type: "case",
    instruction: "Welchen Kasus verlangt diese feste Präposition?",
    sentenceDisplay: "Wir treffen uns nach <span class='underline font-bold text-blue-600'>dem Unterricht</span>.",
    highlightedPart: "dem Unterricht",
    fullSentence: "Wir treffen uns nach dem Unterricht.",
    correct: "Dativ",
    options: ["Nominativ", "Akkusativ", "Dativ"],
    rule: "Präpositional-Regel: 'Aus, bei, mit, nach, seit, von, zu' regieren ausnahmslos den Dativ."
  },
  {
    id: 16,
    level: "A2.2",
    type: "case",
    instruction: "Subjekt-Identifikation:",
    sentenceDisplay: "<span class='underline font-bold text-blue-600'>Ein alter Baum</span> steht mitten im Garten.",
    highlightedPart: "Ein alter Baum",
    fullSentence: "Ein alter Baum steht mitten im Garten.",
    correct: "Nominativ",
    options: ["Nominativ", "Akkusativ", "Dativ"],
    rule: "'Wer oder was steht im Garten?' -> Das handelnde Subjekt des Satzes steht immer im Nominativ."
  }
];

// --- 2. APPLICATION STATE ---
class AppState {
  constructor() {
    this.currentList = [...CURRICULUM];
    this.currentIndex = 0;
    this.xp = parseInt(localStorage.getItem('dm_xp') || '0', 10);
    this.puzzleSelection = [];
    this.filter = 'all';

    // Parse URL params (e.g. ?view=teacher or ?custom=1,3,5)
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

// --- 3. SPEECH SYNTHESIS ENGINE ---
function speakGerman(text) {
  if (!('speechSynthesis' in window)) return;
  window.speechSynthesis.cancel(); // Abort previous speech

  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'de-DE';
  utterance.rate = 0.85; // Pedagogically paced

  const voices = window.speechSynthesis.getVoices();
  const germanVoice = voices.find(v => v.lang.startsWith('de') && (v.name.includes('Google') || v.name.includes('Natural') || true));
  if (germanVoice) utterance.voice = germanVoice;

  window.speechSynthesis.speak(utterance);
}

if ('speechSynthesis' in window) {
  window.speechSynthesis.onvoiceschanged = () => window.speechSynthesis.getVoices();
}

// --- 4. DOM REFERENCES ---
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

// --- 5. INITIALIZATION & ROUTING ---
function initApp() {
  // Update XP display
  statXp.innerText = `${state.xp} XP`;

  // Custom assignment URL handling (?custom=1,2,5)
  if (state.urlParams.has('custom')) {
    const ids = state.urlParams.get('custom').split(',').map(Number);
    state.currentList = CURRICULUM.filter(item => ids.includes(item.id));
    if (state.currentList.length === 0) state.currentList = [...CURRICULUM];
  }

  // Teacher URL param check
  if (state.urlParams.get('view') === 'teacher') {
    openTeacherModal();
  }

  renderFilterUI();
  loadCurrentExercise();
  registerServiceWorker();
}

// --- 6. EXERCISE RENDERERS ---
function loadCurrentExercise() {
  // Reset Feedback and selections
  feedbackPanel.classList.add('hidden');
  state.puzzleSelection = [];
  
  const current = state.currentList[state.currentIndex];
  if (!current) {
    renderCompletionScreen();
    return;
  }

  // Update Progress & Badges
  const progressPercent = ((state.currentIndex) / state.currentList.length) * 100;
  progressBar.style.width = `${progressPercent}%`;
  counterLabel.innerText = `${state.currentIndex + 1} / ${state.currentList.length}`;
  typeTag.innerText = `[${current.level}] ${getExerciseTypeLabel(current.type)}`;

  // Dispatch renderer by type
  switch (current.type) {
    case 'blitz':
      renderBlitzExercise(current);
      break;
    case 'cloze':
      renderClozeExercise(current);
      break;
    case 'puzzle':
      renderPuzzleExercise(current);
      break;
    case 'case':
      renderCaseExercise(current);
      break;
  }
}

function getExerciseTypeLabel(type) {
  switch(type) {
    case 'blitz': return 'Artikel-Blitz';
    case 'cloze': return 'Lückentext';
    case 'puzzle': return 'Satzbau-Puzzle';
    case 'case': return 'Kasus-Trainer';
    default: return 'Grammatik';
  }
}

// Engine 1: Der / Die / Das Blitz
function renderBlitzExercise(item) {
  stage.innerHTML = `
    <div class="w-full flex flex-col items-center animate-pop">
      <div class="text-6xl mb-3">${item.icon}</div>
      <span class="text-xs uppercase tracking-widest text-slate-400 font-bold mb-1">${item.meaning}</span>
      <h2 class="text-4xl font-extrabold text-slate-900 mb-8">${item.noun}</h2>

      <div class="grid grid-cols-3 gap-3.5 w-full max-w-sm">
        <button onclick="handleBlitzAnswer('der', this)" class="touch-tile py-4 text-center font-bold text-lg rounded-2xl border-2 border-blue-200 text-blue-600 bg-white hover:bg-blue-50 shadow-sm transition">der</button>
        <button onclick="handleBlitzAnswer('die', this)" class="touch-tile py-4 text-center font-bold text-lg rounded-2xl border-2 border-red-200 text-red-600 bg-white hover:bg-red-50 shadow-sm transition">die</button>
        <button onclick="handleBlitzAnswer('das', this)" class="touch-tile py-4 text-center font-bold text-lg rounded-2xl border-2 border-green-200 text-green-600 bg-white hover:bg-green-50 shadow-sm transition">das</button>
      </div>

      <div id="blitz-plural-reveal" class="h-6 mt-4 text-xs font-semibold text-slate-400"></div>
    </div>
  `;
}

// Engine 2: Interactive Lückentext
function renderClozeExercise(item) {
  stage.innerHTML = `
    <div class="w-full max-w-md flex flex-col items-center animate-pop text-center">
      <p class="text-xs font-semibold text-slate-500 mb-6">${item.instruction}</p>

      <div class="text-lg md:text-xl font-medium text-slate-800 leading-relaxed mb-8">
        <span>${item.sentenceBefore}</span>
        <span id="cloze-target-slot" class="inline-block px-3 py-1 mx-1 border-b-2 border-blue-600 font-bold text-blue-600 bg-blue-50 rounded">____</span>
        <span>${item.sentenceAfter}</span>
      </div>

      <div class="flex flex-wrap justify-center gap-2.5 w-full">
        ${item.options.map(opt => `
          <button onclick="handleClozeAnswer('${opt}', this)" class="touch-tile px-5 py-2.5 bg-white border border-slate-200 text-slate-700 font-semibold rounded-xl hover:border-blue-500 hover:text-blue-600 shadow-sm transition">
            ${opt}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

// Engine 3: Satzbau Puzzle
function renderPuzzleExercise(item) {
  // Scramble pool initial copy
  const shuffled = [...item.words].sort(() => 0.5 - Math.random());

  stage.innerHTML = `
    <div class="w-full max-w-md flex flex-col items-center animate-pop">
      <p class="text-xs font-semibold text-slate-500 mb-4 text-center">${item.instruction}</p>

      <!-- Sentence Build Slot Area -->
      <div id="puzzle-dropzone" class="w-full min-h-[64px] p-2.5 bg-slate-100 rounded-2xl border-2 border-dashed border-slate-300 flex flex-wrap gap-2 items-center justify-start mb-6">
        <span id="puzzle-placeholder" class="text-xs text-slate-400 mx-auto">Wörter hierher tippen...</span>
      </div>

      <!-- Word Tiles Bank -->
      <div id="puzzle-bank" class="flex flex-wrap justify-center gap-2 w-full mb-6">
        ${shuffled.map((word, idx) => `
          <button id="tile-${idx}" onclick="handlePuzzleTileClick('${word}', 'tile-${idx}')" class="touch-tile px-4 py-2 bg-white border border-slate-200 text-slate-800 font-medium rounded-xl shadow-sm hover:border-slate-400 transition text-sm">
            ${word}
          </button>
        `).join('')}
      </div>

      <div class="flex gap-2 w-full">
        <button onclick="resetPuzzle()" class="flex-1 py-2.5 bg-slate-200 text-slate-700 text-xs font-semibold rounded-xl">Zurücksetzen</button>
        <button onclick="evaluatePuzzle()" class="flex-2 w-full py-2.5 bg-blue-600 text-white text-xs font-semibold rounded-xl shadow">Überprüfen</button>
      </div>
    </div>
  `;
}

// Engine 4: Kasus-Trainer
function renderCaseExercise(item) {
  stage.innerHTML = `
    <div class="w-full max-w-md flex flex-col items-center animate-pop text-center">
      <p class="text-xs font-semibold text-slate-500 mb-4">${item.instruction}</p>

      <blockquote class="text-lg font-medium text-slate-800 bg-slate-100/80 p-4 rounded-2xl border border-slate-200 mb-6 w-full leading-relaxed">
        ${item.sentenceDisplay}
      </blockquote>

      <div class="grid grid-cols-3 gap-2.5 w-full">
        ${item.options.map(cas => `
          <button onclick="handleCaseAnswer('${cas}', this)" class="touch-tile py-3 bg-white border border-slate-200 text-slate-700 font-bold rounded-xl text-xs sm:text-sm hover:border-blue-500 hover:text-blue-600 transition shadow-sm">
            ${cas}
          </button>
        `).join('')}
      </div>
    </div>
  `;
}

// --- 7. EVALUATION HANDLERS ---

window.handleBlitzAnswer = function(selectedArticle, btnElement) {
  const current = state.currentList[state.currentIndex];
  const isCorrect = selectedArticle === current.correct;

  // Reveal Plural Form immediately below noun
  const pluralBox = document.getElementById('blitz-plural-reveal');
  pluralBox.innerText = `Plural: ${current.plural}`;
  pluralBox.classList.add('text-slate-800');

  // Grammatical color highlight on the button
  if (current.correct === 'der') btnElement.classList.add('bg-masculine');
  if (current.correct === 'die') btnElement.classList.add('bg-feminine');
  if (current.correct === 'das') btnElement.classList.add('bg-neuter');

  evaluateOutcome(isCorrect, `${current.correct.toUpperCase()} ${current.noun}`, current.rule, `${current.correct} ${current.noun}. ${current.plural}`);
};

window.handleClozeAnswer = function(selectedOption, btnElement) {
  const current = state.currentList[state.currentIndex];
  const isCorrect = selectedOption.toLowerCase() === current.blankAnswer.toLowerCase();
  
  const slot = document.getElementById('cloze-target-slot');
  slot.innerText = selectedOption;

  if (isCorrect) {
    slot.classList.add('text-green-600', 'border-green-600');
  } else {
    slot.classList.add('text-red-600', 'border-red-600');
  }

  evaluateOutcome(isCorrect, current.blankAnswer, current.rule, current.fullSentence);
};

window.handlePuzzleTileClick = function(word, elementId) {
  const btn = document.getElementById(elementId);
  const dropzone = document.getElementById('puzzle-dropzone');
  const placeholder = document.getElementById('puzzle-placeholder');
  
  if (placeholder) placeholder.remove();

  state.puzzleSelection.push({ word, elementId });
  btn.classList.add('opacity-30', 'pointer-events-none');

  const chip = document.createElement('span');
  chip.className = 'px-3 py-1 bg-white border border-slate-300 rounded-lg text-xs font-semibold text-slate-800 animate-pop';
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

  evaluateOutcome(isCorrect, targetSentence, current.rule, current.fullSentence);
};

window.handleCaseAnswer = function(selectedCase, btnElement) {
  const current = state.currentList[state.currentIndex];
  const isCorrect = selectedCase === current.correct;
  evaluateOutcome(isCorrect, current.correct, current.rule, current.fullSentence);
};

// --- 8. CENTRAL PEDAGOGICAL FEEDBACK LOGIC ---
function evaluateOutcome(isCorrect, solutionDisplay, explanation, sentenceToSpeak) {
  // Disable clicks inside stage
  stage.querySelectorAll('button').forEach(b => b.classList.add('pointer-events-none'));

  feedbackPanel.classList.remove('hidden', 'bg-red-50', 'border-red-200', 'bg-green-50', 'border-green-200', 'animate-shake');

  if (isCorrect) {
    state.addXP(10);
    statXp.innerText = `${state.xp} XP`;
    
    feedbackPanel.classList.add('bg-green-50', 'border-green-200');
    feedbackTitle.className = 'font-bold text-sm text-green-900';
    feedbackTitle.innerText = 'Richtig! Sehr gut gemacht.';
    feedbackIcon.className = 'w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-green-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"/></svg>`;
  } else {
    feedbackPanel.classList.add('bg-red-50', 'border-red-200', 'animate-shake');
    feedbackTitle.className = 'font-bold text-sm text-red-900';
    feedbackTitle.innerText = `Nicht ganz richtig. Lösung: ${solutionDisplay}`;
    feedbackIcon.className = 'w-7 h-7 rounded-full flex items-center justify-center shrink-0 mt-0.5 bg-red-500 text-white';
    feedbackIcon.innerHTML = `<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"/></svg>`;
  }

  feedbackExplanation.innerText = explanation;

  // Speak immediately for auditory reinforcement
  speakGerman(sentenceToSpeak);

  // Bind audio button on feedback
  btnAudioRepeat.onclick = () => speakGerman(sentenceToSpeak);
}

// Advance to next exercise
btnNext.addEventListener('click', () => {
  state.currentIndex++;
  loadCurrentExercise();
});

function renderCompletionScreen() {
  progressBar.style.width = '100%';
  counterLabel.innerText = `${state.currentList.length} / ${state.currentList.length}`;
  stage.innerHTML = `
    <div class="text-center p-6 max-w-sm animate-pop">
      <div class="w-16 h-16 bg-amber-100 text-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg class="w-8 h-8 fill-amber-500" viewBox="0 0 20 20"><path d="M10 2a1 1 0 011 1v1.323l3.954 1.582 1.599-.8a1 1 0 01.894 1.79l-1.233.616 1.738 5.42a1 1 0 01-.285 1.05A3.989 3.989 0 0115 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.715-5.349L11 6.477V16h2a1 1 0 110 2H7a1 1 0 110-2h2V6.477L6.237 7.582l1.715 5.349a1 1 0 01-.285 1.05A3.989 3.989 0 015 15a3.989 3.989 0 01-2.667-1.019 1 1 0 01-.285-1.05l1.738-5.42-1.233-.617a1 1 0 01.894-1.788l1.599.799L9 4.323V3a1 1 0 011-1z"/></svg>
      </div>
      <h2 class="text-2xl font-black text-slate-900 mb-2">Großartig gemacht!</h2>
      <p class="text-sm text-slate-600 mb-6">Du hast alle ausgewählten Aufgaben erfolgreich abgeschlossen.</p>
      <button onclick="restartCurriculum()" class="w-full py-3 bg-blue-600 text-white rounded-xl font-bold shadow-md hover:bg-blue-700 transition">
        Noch einmal üben
      </button>
    </div>
  `;
}

window.restartCurriculum = function() {
  state.currentIndex = 0;
  loadCurrentExercise();
};

// --- 9. TOPIC FILTERING ---
function renderFilterUI() {
  filterChips.forEach(chip => {
    chip.addEventListener('click', (e) => {
      filterChips.forEach(c => {
        c.className = "filter-chip px-3 py-1 rounded-full font-medium whitespace-nowrap bg-slate-100 text-slate-600 hover:bg-slate-200 transition";
      });
      e.target.className = "filter-chip px-3 py-1 rounded-full font-medium whitespace-nowrap bg-blue-600 text-white shadow-sm transition";

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

// --- 10. TEACHER VIEW & ASSIGNMENT LINK GENERATOR ---
function openTeacherModal() {
  teacherModal.classList.remove('hidden');
  curriculumList.innerHTML = CURRICULUM.map(ex => {
    const isIncluded = state.currentList.some(item => item.id === ex.id);
    return `
      <div class="p-2.5 rounded-xl border border-slate-200 flex items-start gap-2.5 bg-slate-50">
        <input type="checkbox" id="teacher-chk-${ex.id}" value="${ex.id}" ${isIncluded ? 'checked' : ''} class="mt-1 accent-blue-600 rounded">
        <div class="flex-1">
          <div class="flex justify-between">
            <span class="font-bold text-[11px] text-slate-800">[${ex.level}] ${getExerciseTypeLabel(ex.type)}</span>
            <span class="text-[10px] text-slate-400">ID: #${ex.id}</span>
          </div>
          <p class="text-slate-600 text-[11px] mt-0.5 font-medium">${ex.fullSentence || ex.noun}</p>
          <p class="text-blue-600 text-[10px] mt-0.5">Lösung: ${ex.correct || ex.blankAnswer || ex.correctOrder?.join(' ')}</p>
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

// --- 11. REGISTER SERVICE WORKER ---
function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js').catch(err => {
      console.info('SW registration skipped or unsupported in local testing environment.', err);
    });
  }
}

// Start application
window.addEventListener('DOMContentLoaded', initApp);
