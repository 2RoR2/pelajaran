const QUIZ_CATEGORIES = {
  asas: {
    label: "Asas Elektromekanikal",
    timeLimit: 60,
    questions: [
      {
        question: "Apakah tiga elemen utama dalam sistem elektromekanikal?",
        options: ["Elektrik, Elektronik, Mekanikal", "Bateri, Wayar, Motor", "Takal, Tali Sawat, Gear", "Sensor, Panel Kawalan, Plag"],
        answer: 0,
        explanation: "Elektromekanikal ialah gabungan komponen elektrik, elektronik dan mekanikal.",
      },
      {
        question: "Produk manakah yang mempunyai gabungan elemen elektromekanikal?",
        options: ["Kerusi Kayu", "Mesin Basuh", "Cermin Muka", "Buku Teks"],
        answer: 1,
        explanation: "Mesin basuh menggunakan motor (mekanikal/elektrik) dan panel kawalan (elektronik).",
      }
    ]
  },
  elektrik: {
    label: "Komponen Elektrik",
    timeLimit: 45,
    questions: [
      {
        question: "Manakah antara berikut merupakan komponen elektrik?",
        options: ["Panel Kawalan", "Sensor", "Motor", "Gear"],
        answer: 2,
        explanation: "Motor dan Plag 3 Pin adalah contoh komponen elektrik.",
      },
      {
        question: "Tiga tamatan pada plag 3 pin ialah...",
        options: ["Hidup, Neutral, Bumi", "Positif, Negatif, Neutral", "Input, Output, Proses", "Laju, Sederhana, Perlahan"],
        answer: 0,
        explanation: "Plag 3 pin mempunyai tamatan Hidup (L), Neutral (N) dan Bumi (E).",
      },
      {
        question: "Apakah fungsi utama motor dalam sistem elektromekanikal?",
        options: ["Mengesan haba", "Mengawal litar", "Menukar tenaga elektrik kepada tenaga kinetik", "Menyambung bekalan kuasa"],
        answer: 2,
        explanation: "Motor menukar tenaga elektrik kepada tenaga kinetik untuk menghasilkan pergerakan.",
      }
    ]
  },
  elektronik: {
    label: "Komponen Elektronik",
    timeLimit: 45,
    questions: [
      {
        question: "Apakah fungsi sensor dalam sistem elektromekanikal?",
        options: ["Membekalkan kuasa", "Mengesan perubahan persekitaran", "Menukarkan tenaga elektrik", "Menghubungkan takal"],
        answer: 1,
        explanation: "Sensor mengesan perubahan persekitaran seperti cahaya, haba, dan tekanan.",
      },
      {
        question: "Manakah komponen yang mengawal keseluruhan sistem elektromekanikal?",
        options: ["Motor", "Panel Kawalan", "Takal", "Gegancu"],
        answer: 1,
        explanation: "Panel kawalan terdiri daripada papan litar yang mengawal keseluruhan sistem.",
      }
    ]
  },
  mekanikal: {
    label: "Komponen Mekanikal",
    timeLimit: 60,
    questions: [
      {
        question: "Komponen mekanikal yang menghubungkan dua atau lebih takal ialah...",
        options: ["Gear", "Rantai", "Gegancu", "Tali Sawat"],
        answer: 3,
        explanation: "Tali sawat memindahkan putaran yang dihasilkan oleh motor ke takal.",
      },
      {
        question: "Gear berfungsi untuk...",
        options: ["Membekalkan tenaga", "Mengesan cahaya", "Memindahkan kuasa dan menukar arah", "Menyambung wayar"],
        answer: 2,
        explanation: "Gear digunakan untuk memindahkan kuasa supaya kelajuan atau arah pergerakan dapat ditukarkan.",
      },
      {
        question: "Gegancu dan rantai biasanya digunakan bersama untuk...",
        options: ["Memindahkan pergerakan", "Mengawal suhu", "Membasuh pakaian", "Mengukur jarak"],
        answer: 0,
        explanation: "Dua gegancu dihubungkan melalui rantai untuk memindahkan pergerakan.",
      }
    ]
  }
};

const STORAGE_KEYS = {
  quizScores: "electromekanikal_quiz_scores",
  selectedCharacter: "electromekanikal_selected_character",
};

const CHARACTER_OPTIONS = [
  {
    id: "sinchan",
    name: "Shin Chan",
    sprite: "src/images/character/sinchan.gif",
  },
  {
    id: "cat",
    name: "Kucing",
    sprite: "src/images/character/cat.gif",
  },
  {
    id: "dino",
    name: "Dinosaur",
    sprite: "src/images/character/dino.gif",
  },
  {
    id: "penguin",
    name: "Penguin",
    sprite: "src/images/character/penguin.gif",
  },
  {
    id: "star",
    name: "Bintang",
    sprite: "src/images/character/star.gif",
  },
];

const FIXED_REFERENCE = [
  {
    title: "Definisi Elektromekanikal",
    body: "Gabungan 3 elemen utama:",
    list: ["Komponen Elektrik", "Komponen Elektronik", "Komponen Mekanikal"],
  },
  {
    title: "Elemen & Komponen",
    body: "Contoh komponen bagi setiap elemen:",
    list: ["Elektrik: Plag 3 pin, Motor", "Elektronik: Panel Kawalan, Sensor", "Mekanikal: Takal, Tali Sawat, Gear, Gegancu, Rantai"],
  },
  {
    title: "Fungsi Komponen",
    body: "Tujuan utama setiap komponen:",
    list: ["Plag 3 Pin: Sambung bekalan kuasa", "Motor: Tukar elektrik ke kinetik", "Panel Kawalan: Mengawal sistem", "Sensor: Mengesan perubahan persekitaran"],
  },
  {
    title: "Langkah Pembinaan",
    body: "Proses 7 langkah membina produk:",
    list: ["1. Mengukur", "2. Menanda", "3. Memotong", "4. Mencantum", "5. Memasang Komponen", "6. Menguji Kefungsian", "7. Membuat Kemasan"],
  }
];

const NOTES_SECTIONS = [
  {
    id: "elektrik",
    label: "Komponen Elektrik",
    kicker: "Seksyen 01",
    title: "Membekalkan tenaga dan menghasilkan gerakan",
    intro: "Komponen elektrik menghubungkan produk kepada bekalan kuasa dan menukarkan tenaga tersebut kepada bentuk lain. Dalam sistem elektromekanikal, komponen ini membekalkan kuasa dan membantu menghasilkan gerakan.",
    cards: [
      {
        title: "Plag 3 Pin",
        body: "Terdiri daripada tiga tamatan iaitu Hidup (L), Neutral (N) dan Bumi (E).",
        points: ["Fungsi: Menyambung perkakasan elektrik kepada bekalan kuasa", "Contoh: Digunakan pada mesin basuh"],
        images: [
          { src: "src/images/equipment/Plag_3_Pin.jpeg", alt: "Gambar plag 3 pin" },
        ],
      },
      {
        title: "Motor",
        body: "Dihubungkan dengan komponen mekanikal lain untuk menghasilkan pergerakan.",
        points: ["Fungsi: Menukar tenaga elektrik kepada tenaga kinetik", "Contoh: Memusingkan dram mesin basuh melalui takal"],
        images: [
          { src: "src/images/equipment/Motor.jpeg", alt: "Gambar motor" },
        ],
      },
    ],
  },
  {
    id: "elektronik",
    label: "Komponen Elektronik",
    kicker: "Seksyen 02",
    title: "Mengawal logik dan mengesan persekitaran",
    intro: "Komponen elektronik bertindak sebagai otak dan pancaindera bagi sistem elektromekanikal. Komponen ini mengawal sistem dan menghantar maklumat daripada persekitaran.",
    cards: [
      {
        title: "Panel Kawalan",
        body: "Terdiri daripada papan litar dengan pelbagai komponen elektronik.",
        points: ["Fungsi: Mengawal keseluruhan sistem", "Contoh: Mengawal kelajuan putaran dram mesin basuh"],
        images: [
          { src: "src/images/equipment/Panel_Kawalan.jpeg", alt: "Gambar panel kawalan" },
        ],
      },
      {
        title: "Sensor",
        body: "Mengesan perubahan persekitaran seperti cahaya, haba, tekanan, dan kelembapan.",
        points: ["Fungsi: Menghantar isyarat elektrik kepada panel kawalan", "Contoh: Mesin basuh berhenti berputar jika beban dikesan tidak seimbang"],
        images: [
          { src: "src/images/equipment/Sensor.jpeg", alt: "Gambar sensor" },
        ],
      },
      {
        title: "Peranan Elektronik",
        body: "Elektronik membantu sistem membuat tindak balas secara automatik berdasarkan keadaan sekeliling.",
        points: ["Panel kawalan memproses input", "Sensor membantu sistem bertindak lebih selamat dan tepat"],
      },
    ],
  },
  {
    id: "mekanikal",
    label: "Komponen Mekanikal",
    kicker: "Seksyen 03",
    title: "Memindahkan kuasa dan pergerakan",
    intro: "Komponen mekanikal membolehkan produk melakukan kerja fizikal melalui pemindahan daya. Komponen ini digunakan bersama motor untuk menghasilkan pergerakan yang dikehendaki.",
    cards: [
      {
        title: "Takal",
        body: "Roda yang mempunyai alur rim yang sesuai dipasang dengan tali atau rantai padanya.",
        points: ["Fungsi: Menggerakkan sesuatu objek", "Contoh: Memutarkan dram mesin basuh selepas dihubungkan dengan motor menggunakan tali sawat"],
        images: [
          { src: "src/images/equipment/Takal.jpeg", alt: "Gambar takal" },
        ],
      },
      {
        title: "Tali Sawat",
        body: "Tali yang menghubungkan dua atau lebih takal.",
        points: ["Fungsi: Memindahkan putaran yang dihasilkan oleh motor ke takal"],
        images: [
          { src: "src/images/equipment/Tali_Sawat.jpeg", alt: "Gambar tali sawat" },
        ],
      },
      {
        title: "Gear",
        body: "Susunan roda bergigi yang dihubungkan untuk memindahkan kuasa.",
        points: ["Fungsi: Menukar kelajuan atau arah pergerakan", "Gigi gear mesti bersentuhan antara satu sama lain"],
        images: [
          { src: "src/images/equipment/Gear.jpeg", alt: "Gambar gear" },
        ],
      },
      {
        title: "Gegancu & Rantai",
        body: "Dua gegancu dihubungkan melalui rantai untuk memindahkan pergerakan.",
        points: ["Digerakkan oleh motor", "Digunakan untuk memindahkan pergerakan secara stabil"],
        images: [
          { src: "src/images/equipment/Gegancu.jpeg", alt: "Gambar gegancu" },
        ],
      },
    ],
  },
];

const NOTES_GENERAL_EXAMPLES = [
  "Mesin basuh",
  "Kipas angin",
  "Pengisar",
  "Penghawa dingin",
  "Pembakar roti",
];

const RC_CAR_STEPS = [
  { id: 1, part: "A", task: "Ukur dan tandakan pada kertas kotak bagi membentuk kerangka kereta.", desc: "Gunakan pembaris dan pensel untuk ketepatan." },
  { id: 2, part: "A", task: "Potong kertas kotak mengikut ukuran yang sudah ditandakan.", desc: "Pastikan ruang untuk gear dipotong dengan betul." },
  { id: 3, part: "A", task: "Cantumkan dua batang aiskrim dengan menggunakan glu sentuh.", desc: "Sapukan glu pada kedua-dua permukaan." },
  { id: 4, part: "A", task: "Tebuk hujung batang aiskrim dengan gerudi mudah alih.", desc: "Lakukan dengan berhati-hati." },
  { id: 5, part: "A", task: "Pasangkan gandar pada batang aiskrim. Pasang roda dan gear pada gandar.", desc: "Pastikan gandar boleh berpusing lancar." },
  { id: 6, part: "A", task: "Lengkapkan pemasangan roda pada gandar.", desc: "Pastikan semua roda terpasang dengan kukuh." },
  { id: 7, part: "A", task: "Pasangkan kerangka dan letakannya dengan menggunakan glu sentuh.", desc: "Pastikan kedudukan kerangka adalah tegak." },
  { id: 8, part: "A", task: "Pasangkan gear pada gandar motor. Rapatkannya dengan gear pada gandar roda.", desc: "Pastikan gigi gear saling bersentuhan." },
  { id: 9, part: "A", task: "Letakkan motor dan pemegang bateri pada kerangka menggunakan glu sentuh.", desc: "Tunggu glu kering sebelum langkah seterusnya." },
  { id: 10, part: "A", task: "Letakkan papan isyarat penerima pada kerangka. Pasangkan antena.", desc: "Gunakan pemutar skru untuk ketatkan antena." },
  { id: 11, part: "A", task: "Sambungkan wayar motor, papan isyarat penerima dan pemegang bateri.", desc: "Gunakan tiub pengecutan haba untuk penebat." },
  { id: 12, part: "B", task: "Ukur dan tanda pada kertas kotak untuk alat kawalan jauh.", desc: "Ikuti saiz yang sesuai untuk dipegang." },
  { id: 13, part: "B", task: "Potong kertas kotak yang telah ditandakan.", desc: "Berhati-hati semasa menggunakan pisau pemotong." },
  { id: 14, part: "B", task: "Tebukkan satu lubang untuk wayar pemegang bateri ke bahagian belakang.", desc: "Lubang kecil sudah mencukupi." },
  { id: 15, part: "B", task: "Masukkan wayar pemegang bateri dan lekatkan pemegang bateri.", desc: "Gunakan glu sentuh untuk lekatan kuat." },
  { id: 16, part: "B", task: "Pasangkan antena pemancar pada papan isyarat pemancar.", desc: "Ketatkan dengan bol dan nat." },
  { id: 17, part: "B", task: "Sambungkan wayar pemegang bateri dengan wayar papan isyarat pemancar.", desc: "Pastikan kutub positif dan negatif betul." },
  { id: 18, part: "B", task: "Pasang penutup alat kawalan jauh.", desc: "Pastikan butang maju dan undur boleh ditekan." },
  { id: 19, part: "B", task: "Cantumkan kerangka alat kawalan jauh dengan pita perekat.", desc: "Gunakan pita perekat untuk kemasan sementara." },
  { id: 20, part: "B", task: "Bahagian alat kawalan jauh telah siap.", desc: "Sedia untuk diuji nanti." },
  { id: 21, part: "C", task: "Ukur dan tandakan kertas kotak untuk badan kereta.", desc: "Mestilah padan dengan saiz kerangka." },
  { id: 22, part: "C", task: "Potong kertas kotak yang telah ditandakan.", desc: "Ikuti garisan dengan teliti." },
  { id: 23, part: "C", task: "Cantumkan bahagian-bahagian yang dipotong dengan glu sentuh.", desc: "Bentuk badan kereta mula kelihatan." },
  { id: 24, part: "C", task: "Badan kereta siap dicantumkan.", desc: "Sedia untuk dipasang pada kerangka." },
  { id: 25, part: "D", task: "Masukkan bateri pada kereta dan alat kawalan jauh.", desc: "Gunakan bateri yang mempunyai kuasa penuh." },
  { id: 26, part: "D", task: "Tekan butang maju dan undur pada alat kawalan jauh.", desc: "Perhatikan jika motor berfungsi." },
  { id: 27, part: "D", task: "Uji pergerakan. Jika berjaya, cantumkan badan kereta dengan pita perekat.", desc: "Tahniah! Kereta anda telah siap." }
];

const SIM_STEPS = RC_CAR_STEPS;

const SIM_OPTIONS = {
  chassis: [
    { id: "compact", label: "Kerangka Ringkas", speed: 1, stability: 2, width: 2.6, length: 4.2 },
    { id: "balanced", label: "Kerangka Seimbang", speed: 2, stability: 3, width: 2.9, length: 4.6 },
    { id: "long", label: "Kerangka Panjang", speed: 2, stability: 4, width: 3.1, length: 5.1 },
  ],
  wheel: [
    { id: "small", label: "Roda Kecil", speed: 3, stability: 1, radius: 0.52 },
    { id: "medium", label: "Roda Sederhana", speed: 2, stability: 3, radius: 0.64 },
    { id: "large", label: "Roda Besar", speed: 1, stability: 4, radius: 0.78 },
  ],
  motor: [
    { id: "single", label: "Motor Standard", power: 2 },
    { id: "gear", label: "Motor Dengan Gear", power: 3 },
    { id: "turbo", label: "Motor Laju", power: 4 },
  ],
  finish: [
    { id: "none", label: "Tanpa Corak", color: 0xcaa26b },
    { id: "stripe", label: "Jalur Lumba", color: 0xef4444 },
    { id: "school", label: "Tema Sekolah", color: 0x2563eb },
  ],
};

const SIM_COMPONENTS = [
  { name: "Kerangka Kotak", type: "Bahan", tone: "amber", desc: "Dipotong mengikut ukuran sebelum dipasang." },
  { name: "Motor + Gear", type: "Mekanikal", tone: "cyan", desc: "Memutarkan gandar untuk menggerakkan kereta." },
  { name: "Roda dan Gandar", type: "Pergerakan", tone: "mint", desc: "Membantu kereta bergerak lurus dan stabil." },
  { name: "Suis dan Bateri", type: "Elektrik", tone: "violet", desc: "Membekalkan kuasa dan mengawal pergerakan." },
];

const SIM_REFERENCE = {
  process: [
    "Mengukur",
    "Menanda",
    "Memotong",
    "Mencantum",
    "Memasang komponen: mekanikal, elektrik dan elektronik",
    "Menguji kefungsian produk",
    "Membuat kemasan",
  ],
  sections: [
    "Bahagian A: Mereka bentuk kereta",
    "Bahagian B: Mereka bentuk alat kawalan jauh",
    "Bahagian C: Membina badan kereta",
  ],
  notes: [
    "Bahagian A merangkumi pembinaan kerangka kereta serta pemasangan komponen mekanikal, elektrik dan elektronik.",
    "Bahagian B memberi fokus kepada pembinaan alat kawalan jauh termasuk pemegang bateri, papan isyarat pemancar dan penutup kawalan.",
    "Bahagian C melibatkan pengukuran, pemotongan, pencantuman dan pemasangan badan kereta sebelum ujian akhir dijalankan.",
  ],
  warning:
    "Badan kereta tidak dicantum terus dengan glu sentuh pada kerangka kerana kereta masih perlu diuji. Jika berlaku kesilapan pemasangan, badan kereta lebih mudah dibuka dan dibaiki sebelum dipasang semula dengan pita perekat.",
  finish: ["Cat sembur", "Cat licau", "Pen penanda", "Kertas pelekat"],
};

function renderSimReferencePanel() {
  const mount = document.getElementById("sim-reference-stage");
  if (!mount) return;

  mount.innerHTML = `
    <div class="sim-reference-panel">
      <details class="sim-reference-card sim-accordion">
        <summary>Langkah-langkah membina produk elektromekanikal</summary>
        <ol>
          ${SIM_REFERENCE.process.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ol>
      </details>

      <details class="sim-reference-card sim-accordion">
        <summary>Tiga bahagian utama</summary>
        <ul>
          ${SIM_REFERENCE.sections.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </details>

      <details class="sim-reference-card sim-accordion">
        <summary>Ringkasan pembinaan</summary>
        <ul>
          ${SIM_REFERENCE.notes.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </details>

      <details class="sim-reference-card sim-accordion">
        <summary>Mengapa badan kereta tidak dicantum dengan glu sentuh?</summary>
        <p>${escapeHtml(SIM_REFERENCE.warning)}</p>
      </details>

      <details class="sim-reference-card sim-accordion">
        <summary>Bahan untuk membuat kemasan</summary>
        <ul>
          ${SIM_REFERENCE.finish.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </details>
    </div>
  `;
}

const state = {
  currentScene: "opening-scene",
  isWalking: false,
  notesActiveSection: null,
  selectedCharacterId: localStorage.getItem(STORAGE_KEYS.selectedCharacter) || CHARACTER_OPTIONS[0].id,
  activeAudioId: null,
  audioUnlocked: false,
  quiz: {
    activeCategory: null,
    index: 0,
    score: 0,
    timeLeft: 0,
    timerInterval: null,
    results: JSON.parse(localStorage.getItem(STORAGE_KEYS.quizScores)) || {}
  },
  sim: {
    currentStepIndex: 0,
    carMoving: false,
    carDirection: 1, // 1 for forward, -1 for backward
  },
  sim3d: null,
};

const SCENE_AUDIO_MAP = {
  "opening-scene": "audio-peta",
  "character-scene": "audio-peta",
  "world-scene": "audio-peta",
  "notes-scene": "audio-nota",
  "quiz-scene": "audio-kuiz",
  "simulator-scene": "audio-simulasi",
  "video-scene": null,
};

function escapeHtml(str) {
  if (!str) return "";
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function getSelectedCharacter() {
  return CHARACTER_OPTIONS.find((character) => character.id === state.selectedCharacterId) || CHARACTER_OPTIONS[0];
}

function applySelectedCharacter() {
  const selectedCharacter = getSelectedCharacter();
  const playerSprite = document.querySelector("#game-player .character-sprite");
  const characterLabel = document.getElementById("character-label");
  const dialogueAvatar = document.querySelector(".dialogue-avatar");
  const dialogueName = document.getElementById("dialogue-name");

  if (playerSprite) {
    playerSprite.src = selectedCharacter.sprite;
    playerSprite.alt = `Watak pemain ${selectedCharacter.name}`;
  }

  if (characterLabel) characterLabel.textContent = selectedCharacter.name.toUpperCase();
  if (dialogueName) dialogueName.textContent = selectedCharacter.name.toUpperCase();
  if (dialogueAvatar) dialogueAvatar.style.backgroundImage = `url("${selectedCharacter.sprite}")`;
}

function renderCharacterSelection() {
  const mount = document.getElementById("character-select-list");
  if (!mount) return;

  mount.innerHTML = CHARACTER_OPTIONS.map((character) => `
    <button
      class="character-card ${state.selectedCharacterId === character.id ? "active" : ""}"
      data-character-choice="${escapeHtml(character.id)}"
      type="button"
    >
      <span class="character-preview-frame">
        <img src="${escapeHtml(character.sprite)}" alt="${escapeHtml(character.name)}" class="character-preview-sprite" />
      </span>
      <span class="character-card-body">
        <strong>${escapeHtml(character.name)}</strong>
      </span>
    </button>
  `).join("");
}

function chooseCharacter(characterId) {
  const nextCharacter = CHARACTER_OPTIONS.find((character) => character.id === characterId);
  if (!nextCharacter) return;

  state.selectedCharacterId = nextCharacter.id;
  localStorage.setItem(STORAGE_KEYS.selectedCharacter, nextCharacter.id);
  renderCharacterSelection();
  applySelectedCharacter();
}

function syncSceneAudio(sceneId) {
  const nextAudioId = SCENE_AUDIO_MAP[sceneId];

  document.querySelectorAll(".scene-audio-bank audio").forEach((audio) => {
    const shouldPlay = audio.id === nextAudioId;

    if (!shouldPlay) {
      audio.pause();
      audio.currentTime = 0;
      return;
    }

    audio.volume = 0.6;
    audio.muted = false;
    if (state.audioUnlocked) {
      const playAttempt = audio.play();
      if (playAttempt && typeof playAttempt.catch === "function") {
        playAttempt.catch(() => {});
      }
    }
  });

  state.activeAudioId = nextAudioId || null;
}

function unlockSceneAudio() {
  if (state.audioUnlocked) return;
  state.audioUnlocked = true;
  if (state.currentScene) syncSceneAudio(state.currentScene);
}

function setScene(sceneId) {
  const worldScenes = ["notes-scene", "quiz-scene", "simulator-scene", "video-scene"];
  const isEnteringRoom = worldScenes.includes(sceneId);

  if (state.currentScene === "world-scene" && isEnteringRoom) {
    if (state.isWalking) return;

    const targetBlock = document.querySelector(`[data-enter-scene="${sceneId}"]`);
    const player = document.getElementById("game-player");
    const dialogueText = document.getElementById("dialogue-text");

    if (targetBlock && player) {
      const blockRect = targetBlock.getBoundingClientRect();
      const mapRect = document.querySelector(".world-map").getBoundingClientRect();
      const targetX = ((blockRect.left + blockRect.width / 2 - mapRect.left) / mapRect.width) * 100 + "%";
      const targetY = ((blockRect.top + blockRect.height / 2 - mapRect.top) / mapRect.height) * 100 + "%";

      state.isWalking = true;
      player.classList.add("walking");
      player.style.left = targetX;
      player.style.top = targetY;

      if (dialogueText) {
        const sceneName = targetBlock.querySelector(".block-title").textContent;
        dialogueText.textContent = `Sedang berjalan ke ${sceneName}...`;
      }

      setTimeout(() => {
        player.classList.remove("walking");
        state.isWalking = false;
        performSceneChange(sceneId);
      }, 850);
      return;
    }
  }

  performSceneChange(sceneId);
}

function performSceneChange(sceneId) {
  document.querySelectorAll(".scene").forEach((scene) => scene.classList.remove("active"));
  const target = document.getElementById(sceneId);
  if (target) target.classList.add("active");
  state.currentScene = sceneId;
  syncSceneAudio(sceneId);

  if (sceneId === "character-scene") {
    renderCharacterSelection();
  }

  if (sceneId === "world-scene") {
    applySelectedCharacter();
    const player = document.getElementById("game-player");
    const dialogueText = document.getElementById("dialogue-text");
    if (player) {
      player.style.left = "50%";
      player.style.top = "50%";
    }
    if (dialogueText) {
      dialogueText.textContent = "Anda kembali di kawasan kampus. Sila pilih destinasi seterusnya.";
    }
    state.notesActiveSection = null;
    if (state.quiz.timerInterval) clearInterval(state.quiz.timerInterval);
    state.quiz.activeCategory = null;
  }

  if (sceneId === "notes-scene") renderNotes();
  if (sceneId === "quiz-scene") renderQuiz();
  if (sceneId === "simulator-scene") renderSimulator();
}

function renderNotes() {
  const el = document.getElementById("reference-list");
  if (!el) return;

  const activeSection = NOTES_SECTIONS.find((section) => section.id === state.notesActiveSection);

  if (!activeSection) {
    el.innerHTML = `
      <section class="notes-example-box">
        <p class="room-kicker">Nota Tambahan</p>
        <h3>Contoh perkakasan yang mempunyai elemen elektromekanikal</h3>
        <ul>
          ${NOTES_GENERAL_EXAMPLES.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>
      <div class="notes-title-grid">
        ${NOTES_SECTIONS.map((section, index) => `
          <button class="notes-title-card" data-note-section="${escapeHtml(section.id)}" type="button">
            <span class="notes-title-index">0${index + 1}</span>
            <p class="room-kicker">${escapeHtml(section.kicker)}</p>
            <h3>${escapeHtml(section.label)}</h3>
            <p>${escapeHtml(section.title)}</p>
            <span class="notes-open-link">Buka halaman nota</span>
          </button>
        `).join("")}
      </div>
    `;
    return;
  }

  el.innerHTML = `
    <section class="notes-detail-page">
      <div class="notes-detail-top">
        <button class="ghost-button notes-back-button" data-note-action="back" type="button">Semua Tajuk Nota</button>
        <span class="reference-chip">${escapeHtml(activeSection.label)}</span>
      </div>
      <div class="notes-section-head">
        <div>
          <p class="room-kicker">${escapeHtml(activeSection.kicker)}</p>
          <h3>${escapeHtml(activeSection.title)}</h3>
          <p>${escapeHtml(activeSection.intro)}</p>
        </div>
      </div>
      <div class="notes-section-grid detail-grid">
        ${activeSection.cards.map((card, index) => `
          <article class="reference-card section-card detail-card">
            <div class="reference-card-top">
              <span class="reference-index">${String(index + 1).padStart(2, "0")}</span>
              <span class="reference-chip">${escapeHtml(activeSection.label)}</span>
            </div>
            <h4>${escapeHtml(card.title)}</h4>
            ${card.images?.length ? `
              <div class="reference-media-grid">
                ${card.images.map((image) => `
                  <figure class="reference-media">
                    <img src="${escapeHtml(image.src)}" alt="${escapeHtml(image.alt)}" class="reference-media-image" />
                  </figure>
                `).join("")}
              </div>
            ` : ""}
            <p>${escapeHtml(card.body)}</p>
            <ul>${card.points.map((point) => `<li>${escapeHtml(point)}</li>`).join("")}</ul>
          </article>
        `).join("")}
      </div>
    </section>
  `;
}

function handleNoteSection(sectionId) {
  if (!NOTES_SECTIONS.some((section) => section.id === sectionId)) return;
  state.notesActiveSection = sectionId;
  renderNotes();
}

function handleNoteAction(action) {
  if (action !== "back") return;
  state.notesActiveSection = null;
  renderNotes();
}

function renderQuiz() {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  if (!state.quiz.activeCategory) {
    container.innerHTML = `
      <div class="quiz-selection-grid">
        <article class="quiz-intro-card">
          <h3>Pilih Kategori Kuiz</h3>
          <p>Setiap kategori mempunyai had masa dan soalan yang berbeza. Skor anda akan disimpan secara berasingan.</p>
        </article>
        ${Object.entries(QUIZ_CATEGORIES).map(([id, cat]) => {
          const prevScore = state.quiz.results[id] || 0;
          const totalQuestions = cat.questions.length;
          return `
            <button class="quiz-category-card" onclick="startQuiz('${id}')">
              <div class="cat-header">
                <span class="cat-label">0${Object.keys(QUIZ_CATEGORIES).indexOf(id) + 1}</span>
                <h4>${cat.label}</h4>
              </div>
              <div class="cat-stats">
                <div class="cat-stat">
                  <span>Masa</span>
                  <strong>${cat.timeLimit}s</strong>
                </div>
                <div class="cat-stat">
                  <span>Skor Terbaik</span>
                  <strong>${prevScore} / ${totalQuestions}</strong>
                </div>
              </div>
              <span class="cat-action">MULA KUIZ</span>
            </button>
          `;
        }).join("")}
      </div>
    `;
    return;
  }

  const category = QUIZ_CATEGORIES[state.quiz.activeCategory];
  const question = category.questions[state.quiz.index];
  const progressValue = ((state.quiz.index + 1) / category.questions.length) * 100;

  container.innerHTML = `
    <div class="quiz-layout">
      <aside class="quiz-sidebar">
        <p class="eyebrow">${category.label}</p>
        <h3>Soalan ${String(state.quiz.index + 1).padStart(2, "0")}</h3>
        
        <div class="quiz-timer-box ${state.quiz.timeLeft <= 10 ? 'urgent' : ''}">
          <span class="timer-label">MASA BERBAKI</span>
          <strong id="quiz-timer-display">${state.quiz.timeLeft}s</strong>
        </div>

        <div class="quiz-progress">
          <div class="quiz-progress-bar"><span style="width:${progressValue}%"></span></div>
          <p>${state.quiz.index + 1} / ${category.questions.length} soalan</p>
        </div>
        
        <div class="quiz-stat-grid">
          <div class="metric-box">
            <strong>${state.quiz.score}</strong>
            <span>Betul</span>
          </div>
        </div>
        
        <button class="ghost-button quit-quiz-btn" onclick="quitQuiz()">Berhenti Kuiz</button>
      </aside>
      
      <div class="quiz-panel">
        <p class="quiz-question">${escapeHtml(question.question)}</p>
        <div class="quiz-options">
          ${question.options.map((opt, i) => `
            <button class="quiz-opt-btn" onclick="handleQuizAnswer(${i})" type="button">
              <span class="option-key">${String.fromCharCode(65 + i)}</span>
              <span>${escapeHtml(opt)}</span>
            </button>
          `).join("")}
        </div>
        <div id="quiz-feedback" class="feedback-box">
          <p>Pilih satu jawapan sebelum masa tamat!</p>
        </div>
      </div>
    </div>
  `;
}

window.startQuiz = function(categoryId) {
  const category = QUIZ_CATEGORIES[categoryId];
  state.quiz.activeCategory = categoryId;
  state.quiz.index = 0;
  state.quiz.score = 0;
  state.quiz.timeLeft = category.timeLimit;
  
  renderQuiz();
  startTimer();
};

function startTimer() {
  if (state.quiz.timerInterval) clearInterval(state.quiz.timerInterval);
  
  state.quiz.timerInterval = setInterval(() => {
    state.quiz.timeLeft--;
    const display = document.getElementById("quiz-timer-display");
    if (display) {
      display.textContent = `${state.quiz.timeLeft}s`;
      if (state.quiz.timeLeft <= 10) {
        display.parentElement.classList.add("urgent");
      }
    }
    
    if (state.quiz.timeLeft <= 0) {
      clearInterval(state.quiz.timerInterval);
      showQuizResults("Masa Tamat!");
    }
  }, 1000);
}

window.quitQuiz = function() {
  if (state.quiz.timerInterval) clearInterval(state.quiz.timerInterval);
  state.quiz.activeCategory = null;
  renderQuiz();
};

window.handleQuizAnswer = function(index) {
  const category = QUIZ_CATEGORIES[state.quiz.activeCategory];
  const question = category.questions[state.quiz.index];
  const feedback = document.getElementById("quiz-feedback");
  if (!feedback) return;

  // Disable all option buttons
  const buttons = document.querySelectorAll(".quiz-opt-btn");
  buttons.forEach(btn => btn.disabled = true);

  if (index === question.answer) {
    state.quiz.score += 1;
    feedback.innerHTML = `
      <div class="feedback-state success">
        <strong>Betul!</strong>
        <p>${escapeHtml(question.explanation)}</p>
      </div>
    `;
  } else {
    feedback.innerHTML = `
      <div class="feedback-state error">
        <strong>Belum tepat.</strong>
        <p>${escapeHtml(question.explanation)}</p>
      </div>
    `;
  }

  setTimeout(() => {
    if (state.quiz.index < category.questions.length - 1) {
      state.quiz.index++;
      renderQuiz();
    } else {
      clearInterval(state.quiz.timerInterval);
      showQuizResults("Tahniah! Kuiz Selesai");
    }
  }, 1500);
};

function showQuizResults(title) {
  const container = document.getElementById("quiz-container");
  if (!container) return;

  const categoryId = state.quiz.activeCategory;
  const category = QUIZ_CATEGORIES[categoryId];
  const finalScore = state.quiz.score;
  const total = category.questions.length;

  // Update high score
  if (!state.quiz.results[categoryId] || finalScore > state.quiz.results[categoryId]) {
    state.quiz.results[categoryId] = finalScore;
    localStorage.setItem(STORAGE_KEYS.quizScores, JSON.stringify(state.quiz.results));
  }

  container.innerHTML = `
    <div class="quiz-results-card">
      <p class="eyebrow">${category.label}</p>
      <h2>${title}</h2>
      <div class="results-stats">
        <div class="result-metric">
          <span>Skor Anda</span>
          <strong>${finalScore} / ${total}</strong>
        </div>
        <div class="result-metric">
          <span>Peratusan</span>
          <strong>${Math.round((finalScore / total) * 100)}%</strong>
        </div>
      </div>
      <div class="results-actions">
        <button class="primary-button" onclick="startQuiz('${categoryId}')">Cuba Lagi</button>
        <button class="ghost-button" onclick="quitQuiz()">Pilih Kategori Lain</button>
      </div>
    </div>
  `;
}

function renderSimulator() {
  const mount = document.getElementById("sim-viewport");
  if (!mount) return;
  renderSimReferencePanel();

  const currentStep = SIM_STEPS[state.sim.currentStepIndex] || SIM_STEPS[SIM_STEPS.length - 1];
  const isFinished = state.sim.currentStepIndex >= SIM_STEPS.length - 1;

  // Clear previous simulation if any
  if (state.sim3d) {
    if (state.sim3d.animationId) cancelAnimationFrame(state.sim3d.animationId);
    if (state.sim3d.resizeHandler) {
      window.removeEventListener("resize", state.sim3d.resizeHandler);
    }
    if (state.sim3d.renderer) state.sim3d.renderer.dispose();
    state.sim3d = null;
  }
  mount.innerHTML = "";

  if (typeof THREE === "undefined") {
    mount.innerHTML = `
      <div class="sim-fallback-message">
        Simulator 3D tidak dapat dimuatkan pada peranti ini. Sila semak sambungan internet atau cuba buka semula halaman.
      </div>
    `;
    return;
  }

  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x18202e);
  const initialWidth = Math.max(mount.clientWidth, 1);
  const initialHeight = Math.max(mount.clientHeight, 220);
  const isPhoneViewport = window.matchMedia("(max-width: 480px)").matches;
  const camera = new THREE.PerspectiveCamera(isPhoneViewport ? 54 : 45, initialWidth / initialHeight, 0.1, 1000);
  camera.position.set(
    isPhoneViewport ? 7.6 : 6.6,
    isPhoneViewport ? 8.3 : 7.6,
    isPhoneViewport ? 7.1 : 5.9
  );
  camera.lookAt(0, isPhoneViewport ? 0.9 : 0.65, 0);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setSize(initialWidth, initialHeight);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.05;
  mount.appendChild(renderer.domElement);

  // Components to show based on step
  const stepIdx = state.sim.currentStepIndex + 1;

  const ambient = new THREE.HemisphereLight(0xf6f7fb, 0x31404f, 1.15);
  scene.add(ambient);

  const sunLight = new THREE.DirectionalLight(0xfff8e8, 1.35);
  sunLight.position.set(8, 14, 10);
  sunLight.castShadow = true;
  sunLight.shadow.mapSize.width = 1024;
  sunLight.shadow.mapSize.height = 1024;
  sunLight.shadow.camera.near = 0.5;
  sunLight.shadow.camera.far = 40;
  sunLight.shadow.camera.left = -10;
  sunLight.shadow.camera.right = 10;
  sunLight.shadow.camera.top = 10;
  sunLight.shadow.camera.bottom = -10;
  scene.add(sunLight);

  const rimLight = new THREE.DirectionalLight(0x9bd1ff, 0.55);
  rimLight.position.set(-7, 6, -5);
  scene.add(rimLight);

  const stage = new THREE.Mesh(
    new THREE.PlaneGeometry(28, 28),
    new THREE.MeshStandardMaterial({
      color: 0x202938,
      roughness: 0.95,
      metalness: 0.02
    })
  );
  stage.rotation.x = -Math.PI / 2;
  stage.receiveShadow = true;
  scene.add(stage);

  const platform = new THREE.Mesh(
    new THREE.CylinderGeometry(4.9, 5.1, 0.18, 48),
    new THREE.MeshStandardMaterial({
      color: 0x2a3445,
      roughness: 0.85,
      metalness: 0.08
    })
  );
  platform.position.y = -0.02;
  platform.receiveShadow = true;
  scene.add(platform);

  // 1. Chassis (Steps 1-2, 7)
  let chassis;
  if (stepIdx >= 2) {
    const chassisGroup = new THREE.Group();
    const cardboardMat = new THREE.MeshStandardMaterial({
      color: 0xc39a66,
      roughness: 0.88,
      metalness: 0.02
    });

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(5.8, 0.14, 3.7),
      cardboardMat
    );
    base.position.y = 0.12;
    base.castShadow = true;
    base.receiveShadow = true;
    chassisGroup.add(base);

    const underLayer = new THREE.Mesh(
      new THREE.BoxGeometry(5.6, 0.05, 3.5),
      new THREE.MeshStandardMaterial({
        color: 0xa67b49,
        roughness: 0.92,
        metalness: 0.01
      })
    );
    underLayer.position.y = 0.02;
    underLayer.castShadow = true;
    chassisGroup.add(underLayer);

    const railGeo = new THREE.BoxGeometry(4.9, 0.12, 0.16);
    const leftRail = new THREE.Mesh(railGeo, cardboardMat);
    leftRail.position.set(0, 0.26, 1.28);
    leftRail.castShadow = true;
    const rightRail = leftRail.clone();
    rightRail.position.z = -1.28;
    chassisGroup.add(leftRail, rightRail);

    chassis = chassisGroup;
    scene.add(chassis);
  }

  // 2. Ice Cream Sticks (Steps 3-4)
  if (stepIdx >= 3) {
    const stickGeo = new THREE.BoxGeometry(4.7, 0.1, 0.12);
    const stickMat = new THREE.MeshStandardMaterial({
      color: 0xe0c08b,
      roughness: 0.78,
      metalness: 0.02
    });
    const stick1 = new THREE.Mesh(stickGeo, stickMat);
    stick1.position.set(0, 0.34, 1.28);
    stick1.castShadow = true;
    scene.add(stick1);
    const stick2 = stick1.clone();
    stick2.position.set(0, 0.34, -1.28);
    scene.add(stick2);
  }

  // 3. Axles and Wheels (Steps 5-6)
  const wheels = [];
  if (stepIdx >= 5) {
    const axleGeo = new THREE.CylinderGeometry(0.05, 0.05, 4.8, 20);
    const axleMat = new THREE.MeshStandardMaterial({
      color: 0xadb6bf,
      roughness: 0.42,
      metalness: 0.68
    });
    const axleFront = new THREE.Mesh(axleGeo, axleMat);
    axleFront.rotation.x = Math.PI / 2;
    axleFront.position.set(-1.9, 0.42, 0);
    axleFront.castShadow = true;
    scene.add(axleFront);

    const axleRear = axleFront.clone();
    axleRear.position.set(1.9, 0.42, 0);
    scene.add(axleRear);

    const wheelGeo = new THREE.CylinderGeometry(0.44, 0.44, 0.16, 36);
    const wheelMat = new THREE.MeshStandardMaterial({
      color: 0x11161f,
      roughness: 0.95,
      metalness: 0.04
    });
    const tireBandGeo = new THREE.TorusGeometry(0.38, 0.04, 12, 30);
    const tireBandMat = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      roughness: 0.94,
      metalness: 0.03
    });
    const rimGeo = new THREE.CylinderGeometry(0.1, 0.1, 0.04, 20);
    const rimMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      roughness: 0.72,
      metalness: 0.08
    });
    const stopperGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.05, 16);
    const stopperMat = new THREE.MeshStandardMaterial({
      color: 0xe35d4a,
      roughness: 0.45,
      metalness: 0.08
    });
    
    const wheelPositions = [
      [-1.9, 0.42, 1.98], [-1.9, 0.42, -1.98],
      [1.9, 0.42, 1.98], [1.9, 0.42, -1.98]
    ];

    wheelPositions.forEach(pos => {
      const wheel = new THREE.Group();
      const tire = new THREE.Mesh(wheelGeo, wheelMat);
      tire.castShadow = true;
      wheel.add(tire);

      const tread = new THREE.Mesh(tireBandGeo, tireBandMat);
      tread.rotation.y = Math.PI / 2;
      wheel.add(tread);

      wheel.position.set(...pos);
      wheel.rotation.x = Math.PI / 2;
      const rimOuter = new THREE.Mesh(rimGeo, rimMat);
      rimOuter.rotation.x = Math.PI / 2;
      rimOuter.position.z = pos[2] > 0 ? -0.05 : 0.05;
      rimOuter.castShadow = true;
      wheel.add(rimOuter);
      const rimInner = new THREE.Mesh(rimGeo, rimMat);
      rimInner.rotation.x = Math.PI / 2;
      rimInner.position.z = pos[2] > 0 ? 0.05 : -0.05;
      wheel.add(rimInner);
      const stopper = new THREE.Mesh(stopperGeo, stopperMat);
      stopper.rotation.x = Math.PI / 2;
      stopper.position.z = pos[2] > 0 ? -0.09 : 0.09;
      wheel.add(stopper);
      scene.add(wheel);
      wheels.push(wheel);
    });

    const spacerGeo = new THREE.CylinderGeometry(0.06, 0.06, 0.16, 16);
    const spacerMat = new THREE.MeshStandardMaterial({
      color: 0xf5f5f4,
      roughness: 0.72,
      metalness: 0.06
    });
    [
      [-1.9, 0.42, 1.72], [-1.9, 0.42, -1.72],
      [1.9, 0.42, 1.72], [1.9, 0.42, -1.72]
    ].forEach((pos) => {
      const spacer = new THREE.Mesh(spacerGeo, spacerMat);
      spacer.rotation.x = Math.PI / 2;
      spacer.position.set(...pos);
      spacer.castShadow = true;
      scene.add(spacer);
    });
  }

  // 4. Gear (Step 8)
  let gear;
  if (stepIdx >= 8) {
    const axleGearMat = new THREE.MeshStandardMaterial({
      color: 0xf1e7c8,
      roughness: 0.6,
      metalness: 0.12
    });
    const motorGearMat = new THREE.MeshStandardMaterial({
      color: 0xc9971f,
      roughness: 0.36,
      metalness: 0.82
    });

    const axleGear = new THREE.Mesh(
      new THREE.CylinderGeometry(0.2, 0.2, 0.08, 18),
      axleGearMat
    );
    axleGear.rotation.z = Math.PI / 2;
    axleGear.position.set(1.9, 0.42, 0.74);
    axleGear.castShadow = true;
    scene.add(axleGear);

    const axleGearHub = new THREE.Mesh(
      new THREE.CylinderGeometry(0.05, 0.05, 0.18, 14),
      new THREE.MeshStandardMaterial({
        color: 0x8d98a3,
        roughness: 0.28,
        metalness: 0.84
      })
    );
    axleGearHub.rotation.z = Math.PI / 2;
    axleGearHub.position.copy(axleGear.position);
    scene.add(axleGearHub);

    gear = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.08, 16),
      motorGearMat
    );
    gear.rotation.z = Math.PI / 2;
    gear.position.set(1.56, 0.56, 0.78);
    gear.castShadow = true;
    scene.add(gear);
  }

  // 5. Motor (Step 9)
  if (stepIdx >= 9) {
    const motorGroup = new THREE.Group();
    const motor = new THREE.Mesh(
      new THREE.CylinderGeometry(0.26, 0.26, 0.72, 24),
      new THREE.MeshStandardMaterial({
        color: 0x8f9698,
        roughness: 0.38,
        metalness: 0.72
      })
    );
    motor.rotation.z = Math.PI / 2;
    motor.castShadow = true;
    motorGroup.add(motor);

    const motorCap = new THREE.Mesh(
      new THREE.CylinderGeometry(0.12, 0.12, 0.12, 18),
      new THREE.MeshStandardMaterial({
        color: 0xd5b129,
        roughness: 0.45,
        metalness: 0.55
      })
    );
    motorCap.rotation.z = Math.PI / 2;
    motorCap.position.set(0.34, -0.18, 0);
    motorGroup.add(motorCap);
    const motorBracket = new THREE.Mesh(
      new THREE.BoxGeometry(0.62, 0.06, 0.38),
      new THREE.MeshStandardMaterial({
        color: 0xd0b485,
        roughness: 0.84,
        metalness: 0.02
      })
    );
    motorBracket.position.set(0, -0.24, 0);
    motorGroup.add(motorBracket);
    motorGroup.position.set(1.44, 0.56, 0.96);
    scene.add(motorGroup);
  }

  // 6. Battery (Step 9)
  if (stepIdx >= 9) {
    const batteryGroup = new THREE.Group();
    const battery = new THREE.Mesh(
      new THREE.BoxGeometry(1.34, 0.34, 0.72),
      new THREE.MeshStandardMaterial({
        color: 0x171717,
        roughness: 0.72,
        metalness: 0.12
      })
    );
    battery.castShadow = true;
    batteryGroup.add(battery);
    const batteryPocket = new THREE.Mesh(
      new THREE.BoxGeometry(1.02, 0.14, 0.42),
      new THREE.MeshStandardMaterial({
        color: 0x2b2b2b,
        roughness: 0.8,
        metalness: 0.06
      })
    );
    batteryPocket.position.y = 0.11;
    batteryGroup.add(batteryPocket);
    batteryGroup.position.set(0.2, 0.42, -0.32);
    scene.add(batteryGroup);
  }

  // 7. Receiver Board (Step 10)
  if (stepIdx >= 10) {
    const boardGroup = new THREE.Group();
    const board = new THREE.Mesh(
      new THREE.BoxGeometry(1.02, 0.05, 0.78),
      new THREE.MeshStandardMaterial({
        color: 0x7b4c2b,
        roughness: 0.72,
        metalness: 0.04
      })
    );
    board.castShadow = true;
    boardGroup.add(board);

    const chip = new THREE.Mesh(
      new THREE.BoxGeometry(0.28, 0.08, 0.22),
      new THREE.MeshStandardMaterial({
        color: 0x232323,
        roughness: 0.5,
        metalness: 0.18
      })
    );
    chip.position.set(-0.06, 0.06, 0.02);
    boardGroup.add(chip);

    const solderDot = new THREE.Mesh(
      new THREE.CylinderGeometry(0.03, 0.03, 0.05, 10),
      new THREE.MeshStandardMaterial({
        color: 0xd6d3d1,
        roughness: 0.32,
        metalness: 0.84
      })
    );
    solderDot.position.set(0.2, 0.04, -0.08);
    boardGroup.add(solderDot);

    boardGroup.position.set(-0.45, 0.42, 0.14);
    scene.add(boardGroup);

    const antenna = new THREE.Mesh(
      new THREE.CylinderGeometry(0.02, 0.02, 2, 8),
      new THREE.MeshStandardMaterial({
        color: 0x516b82,
        roughness: 0.3,
        metalness: 0.85
      })
    );
    antenna.position.set(-0.22, 1.3, 0.14);
    antenna.castShadow = true;
    scene.add(antenna);

    const makeWire = (points, color, radius = 0.022) => new THREE.Mesh(
      new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points), 24, radius, 10, false),
      new THREE.MeshStandardMaterial({ color, roughness: 0.76, metalness: 0.04 })
    );
    scene.add(
      makeWire(
        [
          new THREE.Vector3(-0.78, 0.56, 0.16),
          new THREE.Vector3(-0.1, 0.5, 0.02),
          new THREE.Vector3(0.42, 0.46, -0.16),
        ],
        0xe11d48
      )
    );
    scene.add(
      makeWire(
        [
          new THREE.Vector3(-0.58, 0.46, 0.08),
          new THREE.Vector3(-0.12, 0.46, -0.06),
          new THREE.Vector3(0.34, 0.44, -0.2),
        ],
        0x2563eb
      )
    );
    scene.add(
      makeWire(
        [
          new THREE.Vector3(-0.1, 0.44, 0.08),
          new THREE.Vector3(0.82, 0.5, 0.42),
          new THREE.Vector3(1.22, 0.58, 0.82),
        ],
        0x111827,
        0.02
      )
    );
  }

  // 8. Car Body (Steps 21-24)
  if (stepIdx >= 23) {
    const bodyGroup = new THREE.Group();
    const bodyMat = new THREE.MeshStandardMaterial({
      color: 0xb44634,
      roughness: 0.78,
      metalness: 0.02
    });

    const shellProfile = new THREE.Shape();
    shellProfile.moveTo(-2.2, 0);
    shellProfile.lineTo(-1.95, 0.46);
    shellProfile.lineTo(-1.4, 0.92);
    shellProfile.lineTo(-0.2, 1.22);
    shellProfile.lineTo(0.85, 1.12);
    shellProfile.lineTo(1.95, 0.72);
    shellProfile.lineTo(2.72, 0.14);
    shellProfile.lineTo(2.92, 0);
    shellProfile.lineTo(-2.2, 0);

    const shellGeo = new THREE.ExtrudeGeometry(shellProfile, {
      depth: 3.15,
      bevelEnabled: false,
      steps: 1
    });
    const shell = new THREE.Mesh(shellGeo, bodyMat);
    shell.position.set(-0.12, 0.44, -1.58);
    shell.castShadow = true;
    bodyGroup.add(shell);

    const cockpit = new THREE.Mesh(
      new THREE.BoxGeometry(1.2, 0.28, 1.6),
      new THREE.MeshStandardMaterial({
        color: 0xc15a45,
        roughness: 0.74,
        metalness: 0.02
      })
    );
    cockpit.position.set(-0.4, 1.5, 0);
    cockpit.castShadow = true;
    bodyGroup.add(cockpit);

    const rearWing = new THREE.Mesh(
      new THREE.BoxGeometry(0.08, 0.56, 1.48),
      bodyMat
    );
    rearWing.position.set(-1.92, 1.18, 0);
    rearWing.rotation.z = -0.42;
    rearWing.castShadow = true;
    bodyGroup.add(rearWing);

    const frontLip = new THREE.Mesh(
      new THREE.BoxGeometry(0.22, 0.06, 2.7),
      bodyMat
    );
    frontLip.position.set(2.58, 0.56, 0);
    frontLip.rotation.z = -0.18;
    frontLip.castShadow = true;
    bodyGroup.add(frontLip);

    const windshield = new THREE.Mesh(
      new THREE.BoxGeometry(0.06, 0.3, 1.18),
      new THREE.MeshPhysicalMaterial({
        color: 0xdceffd,
        roughness: 0.08,
        metalness: 0.02,
        transmission: 0.35,
        transparent: true,
        opacity: 0.45
      })
    );
    windshield.position.set(0.78, 1.28, 0);
    windshield.rotation.z = 0.34;
    bodyGroup.add(windshield);

    scene.add(bodyGroup);
  }

  // Animation Loop
  function animate() {
    if (state.currentScene !== "simulator-scene") return;
    state.sim3d.animationId = requestAnimationFrame(animate);
    
    if (state.sim.carMoving) {
      if (gear) gear.rotation.z += state.sim.carDirection * 0.15;
      wheels.forEach(w => w.rotation.y += state.sim.carDirection * 0.15);
      
      // Visual feedback: show movement status in UI if possible
      const statusEl = document.getElementById("sim-move-status");
      if (statusEl) {
        statusEl.textContent = state.sim.carDirection > 0 ? "BERGERAK: MAJU" : "BERGERAK: UNDUR";
        statusEl.style.color = "#10b981";
      }
    } else {
      const statusEl = document.getElementById("sim-move-status");
      if (statusEl) {
        statusEl.textContent = "STATUS: BERHENTI";
        statusEl.style.color = "#94a3b8";
      }
    }
    
    renderer.render(scene, camera);
  }
  const resizeHandler = () => {
    const width = Math.max(mount.clientWidth, 1);
    const height = Math.max(mount.clientHeight, 220);
    const isPhone = window.matchMedia("(max-width: 480px)").matches;
    camera.fov = isPhone ? 54 : 45;
    camera.aspect = width / height;
    camera.position.set(
      isPhone ? 7.6 : 6.6,
      isPhone ? 8.3 : 7.6,
      isPhone ? 7.1 : 5.9
    );
    camera.lookAt(0, isPhone ? 0.9 : 0.65, 0);
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
  };

  state.sim3d = { scene, camera, renderer, resizeHandler, animationId: null };
  window.addEventListener("resize", resizeHandler);
  resizeHandler();
  animate();

  // Update UI
  const catalog = document.getElementById("component-catalog");
  if (catalog) {
    const progress = ((state.sim.currentStepIndex + 1) / SIM_STEPS.length) * 100;
    
    catalog.innerHTML = `
      <div class="sim-controls">
        <div class="sim-step-header">
          <span class="step-badge">Langkah ${currentStep.id} / ${SIM_STEPS.length}</span>
          <span class="part-badge">Bahagian ${currentStep.part}</span>
        </div>
        
        <div class="sim-task-box">
          <h3>${currentStep.task}</h3>
          <p>${currentStep.desc}</p>
        </div>

        <div class="sim-progress-container">
          <div class="sim-progress-bar">
            <div class="sim-progress-fill" style="width: ${progress}%"></div>
          </div>
          <span class="progress-text">${Math.round(progress)}% Selesai</span>
        </div>

        <div class="sim-actions-grid">
          <button class="ghost-button" onclick="prevSimStep()" ${state.sim.currentStepIndex === 0 ? "disabled" : ""}>KEMBALI</button>
          ${isFinished ? 
            `<button class="primary-button success" onclick="resetSim()">BINA SEMULA</button>` : 
            `<button class="primary-button" onclick="nextSimStep()">TERUSKAN</button>`
          }
        </div>

        ${stepIdx >= 25 ? `
          <div class="sim-test-panel">
            <h4>Ujian Kawalan Jauh</h4>
            <p id="sim-move-status" style="font-family: 'Orbitron', sans-serif; font-size: 0.85rem; color: #94a3b8; margin-bottom: 12px; font-weight: 700;">STATUS: BERHENTI</p>
            <div class="remote-btns">
              <button class="remote-btn" 
                onmousedown="state.sim.carMoving=true; state.sim.carDirection=1" 
                onmouseup="state.sim.carMoving=false"
                ontouchstart="state.sim.carMoving=true; state.sim.carDirection=1"
                ontouchend="state.sim.carMoving=false">MAJU</button>
              <button class="remote-btn" 
                onmousedown="state.sim.carMoving=true; state.sim.carDirection=-1" 
                onmouseup="state.sim.carMoving=false"
                ontouchstart="state.sim.carMoving=true; state.sim.carDirection=-1"
                ontouchend="state.sim.carMoving=false">UNDUR</button>
            </div>
          </div>
        ` : ""}

      </div>
    `;
  }
}

window.nextSimStep = function() {
  if (state.sim.currentStepIndex < SIM_STEPS.length - 1) {
    state.sim.currentStepIndex++;
    renderSimulator();
  }
};

window.prevSimStep = function() {
  if (state.sim.currentStepIndex > 0) {
    state.sim.currentStepIndex--;
    renderSimulator();
  }
};

window.resetSim = function() {
  state.sim.currentStepIndex = 0;
  state.sim.carMoving = false;
  renderSimulator();
};

function renderSelectCard(title, key, options, current) {
  return `
    <article class="car-option-card">
      <h5>${escapeHtml(title)}</h5>
      <div class="car-option-buttons">
        ${options.map((option) => `
          <button class="car-choice ${current === option.id ? "active" : ""}" data-sim-choice="${escapeHtml(key)}" data-sim-value="${escapeHtml(option.id)}" type="button">
            ${escapeHtml(option.label)}
          </button>
        `).join("")}
      </div>
    </article>
  `;
}

function renderCarBlueprint(derived) {
  const movementOffset = derived.tested ? Math.min(140, derived.movement) : 0;
  const finishColor = derived.finish.id === "stripe" ? "#ef4444" : derived.finish.id === "school" ? "#2563eb" : "#d6a56a";
  const wheelColor = derived.wheel.id === "large" ? "#0f172a" : "#1e293b";

  return `
    <svg class="car-blueprint-svg" viewBox="0 0 900 380" preserveAspectRatio="xMidYMid meet">
      <rect x="40" y="30" width="820" height="320" rx="28" class="blueprint-paper"></rect>
      <text x="90" y="80" class="blueprint-title">Mereka Bentuk Kereta</text>
      <text x="90" y="110" class="blueprint-copy">Langkah rujukan: ukur, tanda, potong, pasang, uji, kemaskan</text>

      <rect x="100" y="150" width="220" height="140" rx="18" class="blueprint-cardboard"></rect>
      <rect x="250" y="190" width="30" height="60" rx="6" class="${state.sim.gearSlotCut ? "blueprint-slot done" : "blueprint-slot"}"></rect>
      <text x="110" y="320" class="blueprint-copy">Kerangka kotak</text>
      <text x="250" y="180" class="blueprint-copy">Ruang gear</text>

      <g transform="translate(${330 + movementOffset}, 125)">
        <rect x="0" y="58" width="${derived.chassis.length * 52}" height="${derived.chassis.width * 26}" rx="28" fill="${finishColor}" class="car-body-shape"></rect>
        <rect x="70" y="20" width="${derived.chassis.length * 30}" height="56" rx="18" fill="${finishColor}" opacity="0.88"></rect>
        <rect x="88" y="32" width="${derived.chassis.length * 24}" height="26" rx="10" class="car-window-shape"></rect>
        <rect x="42" y="92" width="42" height="24" rx="8" class="motor-box"></rect>
        <rect x="20" y="96" width="18" height="16" rx="5" class="${state.sim.switchInstalled ? "switch-box active" : "switch-box"}"></rect>
        <circle cx="78" cy="${derived.chassis.width * 26 + 76}" r="${derived.wheel.radius * 24}" fill="${wheelColor}"></circle>
        <circle cx="${derived.chassis.length * 52 - 22}" cy="${derived.chassis.width * 26 + 76}" r="${derived.wheel.radius * 24}" fill="${wheelColor}"></circle>
        <circle cx="78" cy="46" r="${derived.wheel.radius * 24}" fill="${wheelColor}" opacity="0.92"></circle>
        <circle cx="${derived.chassis.length * 52 - 22}" cy="46" r="${derived.wheel.radius * 24}" fill="${wheelColor}" opacity="0.92"></circle>
        <text x="30" y="${derived.chassis.width * 26 + 126}" class="blueprint-copy">${derived.tested ? "Kereta diuji" : "Kereta dalam binaan"}</text>
      </g>
    </svg>
  `;
}

function handleSimStep(stepId) {
  if (!(stepId in state.sim.steps)) return;
  const currentStep = getCurrentSimStep();
  if (!currentStep) return;
  if (currentStep.id !== stepId) return;

  if (stepId === "install") {
    if (!(state.sim.steps.measure && state.sim.steps.mark && state.sim.steps.cut)) return;
    if (!(state.sim.gearSlotCut && state.sim.batteryInstalled && state.sim.switchInstalled)) return;
  }

  if (stepId === "test") {
    const derived = getSimDerivedState();
    if (!derived.canTest) return;
  }

  if (stepId === "finish") {
    if (!state.sim.steps.test) return;
  }

  state.sim.steps[stepId] = true;
  renderSimulator();
}

function handleSimChoice(group, value) {
  if (!SIM_OPTIONS[group]) return;
  state.sim.design[group] = value;
  renderSimulator();
}

function handleSimFlag(flag) {
  if (!(flag in state.sim)) return;
  state.sim[flag] = !state.sim[flag];
  renderSimulator();
}

function handleSimAction(action) {
  if (action === "test-car") {
    const derived = getSimDerivedState();
    if (!derived.canTest || derived.currentStep?.id !== "test") return;
    state.sim.steps.test = true;
    renderSimulator();
    return;
  }

  if (action === "reset-car") {
    state.sim.steps = {
      measure: false,
      mark: false,
      cut: false,
      install: false,
      test: false,
      finish: false,
    };
    state.sim.gearSlotCut = false;
    state.sim.batteryInstalled = false;
    state.sim.switchInstalled = false;
    state.sim.design = {
      chassis: "balanced",
      wheel: "medium",
      motor: "gear",
      finish: "school",
    };
    renderSimulator();
  }
}

function setupOrUpdateSimulator3D(derived) {
  const mount = document.getElementById("sim-preview-canvas");
  if (!mount) return;

  if (!state.sim3d) {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x08111f);

    const camera = new THREE.PerspectiveCamera(45, mount.clientWidth / mount.clientHeight, 0.1, 1000);
    camera.position.set(0, 4.2, 10);
    camera.lookAt(0, 1.3, 0);

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    mount.appendChild(renderer.domElement);

    const ambient = new THREE.AmbientLight(0xffffff, 1.35);
    scene.add(ambient);

    const keyLight = new THREE.DirectionalLight(0xfef3c7, 1.8);
    keyLight.position.set(6, 8, 4);
    scene.add(keyLight);

    const base = new THREE.Mesh(
      new THREE.BoxGeometry(8.8, 0.25, 5.2),
      new THREE.MeshStandardMaterial({ color: 0x1f2937, metalness: 0.35, roughness: 0.75 })
    );
    scene.add(base);

    const body = new THREE.Mesh(
      new THREE.BoxGeometry(4.5, 1.1, 2.6),
      new THREE.MeshStandardMaterial({ color: 0x2563eb, roughness: 0.72 })
    );
    body.position.set(0, 0.95, 0);
    scene.add(body);

    const cabin = new THREE.Mesh(
      new THREE.BoxGeometry(2.2, 0.8, 2),
      new THREE.MeshStandardMaterial({ color: 0x3b82f6, roughness: 0.65 })
    );
    cabin.position.set(0.2, 1.75, 0);
    scene.add(cabin);

    const axleFront = new THREE.Mesh(
      new THREE.CylinderGeometry(0.08, 0.08, 3.1, 16),
      new THREE.MeshStandardMaterial({ color: 0x94a3b8, metalness: 0.9, roughness: 0.2 })
    );
    axleFront.rotation.z = Math.PI / 2;
    axleFront.position.set(-1.35, 0.45, 0);
    scene.add(axleFront);

    const axleRear = axleFront.clone();
    axleRear.position.set(1.35, 0.45, 0);
    scene.add(axleRear);

    const wheelGeometry = new THREE.CylinderGeometry(0.7, 0.7, 0.45, 24);
    const wheelMaterial = new THREE.MeshStandardMaterial({ color: 0x111827, roughness: 0.8 });
    const wheels = [
      new THREE.Mesh(wheelGeometry, wheelMaterial),
      new THREE.Mesh(wheelGeometry, wheelMaterial),
      new THREE.Mesh(wheelGeometry, wheelMaterial),
      new THREE.Mesh(wheelGeometry, wheelMaterial),
    ];

    wheels[0].position.set(-1.35, 0.45, -1.5);
    wheels[1].position.set(-1.35, 0.45, 1.5);
    wheels[2].position.set(1.35, 0.45, -1.5);
    wheels[3].position.set(1.35, 0.45, 1.5);
    wheels.forEach((wheel) => {
      wheel.rotation.x = Math.PI / 2;
      scene.add(wheel);
    });

    const battery = new THREE.Mesh(
      new THREE.BoxGeometry(0.9, 0.5, 1.1),
      new THREE.MeshStandardMaterial({ color: 0xf59e0b, roughness: 0.5 })
    );
    battery.position.set(-0.8, 1.05, 0);
    scene.add(battery);

    const motor = new THREE.Mesh(
      new THREE.CylinderGeometry(0.35, 0.35, 1.1, 24),
      new THREE.MeshStandardMaterial({ color: 0xe2e8f0, metalness: 0.85, roughness: 0.22 })
    );
    motor.rotation.z = Math.PI / 2;
    motor.position.set(1.15, 0.98, 0);
    scene.add(motor);

    state.sim3d = {
      scene,
      camera,
      renderer,
      body,
      cabin,
      wheels,
      battery,
      motor,
      animationId: null,
    };

    window.addEventListener("resize", handleSimulatorResize);
    animateSimulator();
  }

  if (state.sim3d.renderer.domElement.parentElement !== mount) {
    mount.appendChild(state.sim3d.renderer.domElement);
  }

  const { body, cabin, wheels, battery, motor } = state.sim3d;
  body.scale.set(derived.chassis.length / 4.5, 1, derived.chassis.width / 2.8);
  cabin.scale.set(Math.max(0.8, derived.chassis.length / 5.2), 1, Math.max(0.9, derived.chassis.width / 3.1));
  body.material.color.set(derived.finish.color);
  cabin.material.color.set(derived.finish.color);

  const wheelScale = derived.wheel.radius / 0.64;
  wheels.forEach((wheel) => {
    wheel.scale.set(wheelScale, 1, wheelScale);
  });

  battery.visible = state.sim.batteryInstalled;
  motor.scale.set(0.9 + derived.motor.power * 0.16, 1, 0.9 + derived.motor.power * 0.16);
  motor.material.color.set(state.sim.switchInstalled ? 0x38bdf8 : 0xe2e8f0);

  handleSimulatorResize();
}

function animateSimulator() {
  if (!state.sim3d) return;

  const derived = getSimDerivedState();
  const { scene, camera, renderer, body, wheels, motor } = state.sim3d;
  body.rotation.y += 0.006;
  motor.rotation.x += derived.tested ? 0.18 : 0.025;
  wheels.forEach((wheel) => {
    wheel.rotation.z += derived.tested ? 0.16 : 0.015;
  });

  renderer.render(scene, camera);
  state.sim3d.animationId = requestAnimationFrame(animateSimulator);
}

function handleSimulatorResize() {
  if (!state.sim3d) return;
  const mount = document.getElementById("sim-preview-canvas");
  if (!mount) return;
  state.sim3d.camera.aspect = mount.clientWidth / mount.clientHeight;
  state.sim3d.camera.updateProjectionMatrix();
  state.sim3d.renderer.setSize(mount.clientWidth, mount.clientHeight);
}

document.addEventListener("DOMContentLoaded", () => {
  const enterBtn = document.getElementById("enter-world");
  const confirmCharacterBtn = document.getElementById("confirm-character");

  applySelectedCharacter();
  renderCharacterSelection();
  syncSceneAudio(state.currentScene);

  document.addEventListener(
    "pointerdown",
    () => {
      unlockSceneAudio();
    },
    { once: true }
  );

  if (enterBtn) {
    enterBtn.onclick = () => {
      unlockSceneAudio();
      setScene("character-scene");
    };
  }

  if (confirmCharacterBtn) {
    confirmCharacterBtn.onclick = () => {
      unlockSceneAudio();
      applySelectedCharacter();
      setScene("world-scene");
    };
  }

  document.querySelectorAll("[data-enter-scene]").forEach((button) => {
    button.onclick = (event) => {
      event.preventDefault();
      unlockSceneAudio();
      const targetScene = button.getAttribute("data-enter-scene");
      setScene(targetScene);
    };
  });

  document.addEventListener("click", (event) => {
    const characterChoice = event.target.closest("[data-character-choice]");
    if (characterChoice) {
      chooseCharacter(characterChoice.getAttribute("data-character-choice"));
      return;
    }

    const noteSection = event.target.closest("[data-note-section]");
    if (noteSection) {
      handleNoteSection(noteSection.getAttribute("data-note-section"));
      return;
    }

    const noteAction = event.target.closest("[data-note-action]");
    if (noteAction) {
      handleNoteAction(noteAction.getAttribute("data-note-action"));
      return;
    }

    const step = event.target.closest("[data-sim-step]");
    if (step) {
      handleSimStep(step.getAttribute("data-sim-step"));
      return;
    }

    const choice = event.target.closest("[data-sim-choice]");
    if (choice) {
      handleSimChoice(choice.getAttribute("data-sim-choice"), choice.getAttribute("data-sim-value"));
      return;
    }

    const flag = event.target.closest("[data-sim-flag]");
    if (flag) {
      handleSimFlag(flag.getAttribute("data-sim-flag"));
      return;
    }

    const action = event.target.closest("[data-sim-action]");
    if (action) {
      handleSimAction(action.getAttribute("data-sim-action"));
    }
  });
});
