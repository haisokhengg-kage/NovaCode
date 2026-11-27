
document.addEventListener("DOMContentLoaded", function () {

    const mascot = document.getElementById("mascot");
    const mascotWord = document.getElementById("mascotWord");

    if (!mascot) {
        console.error("NovaCode Mascot not found!");
        return;
    }

    // Random Words
    const randomWords = [
        "Hello! Oni-Chan👋",
        "Let's Code! 💻",
        "Good Job! oni-chan ✨",
        "Wow! 😍",
        "Keep Going! 🚀",
        "I'm Happy! 💜",
        "Hehe~ 😂",
        "Sleepy... 😴",
        "Amazing! 🔥",
        "You Can Do It! 💪",
        "Welcome! 🌸",
        "Oops! 😅"
    ];

    // Show Random Word
    function showRandomWord() {
        if (!mascotWord) return;

        const randomIndex = Math.floor(
            Math.random() * randomWords.length
        );

        mascotWord.textContent = randomWords[randomIndex];

        mascotWord.classList.remove("hidden");
    }

// Mascot Right Click Animation

const mascotImg = document.getElementById("mascotImg");

const mascotAnimations = [
    "DanceVenezuelaSticker.gif",
    "DanceGirlSticker.gif",
    "DanceVtuberSticker.gif",
    "DanceOcSticker.gif",
    "anime.gif",
    "HappyDanceSticker.gif",
];

let animationIndex = 0;

// Right Click
mascot.addEventListener("contextmenu", function (e) {

    e.preventDefault();

    animationIndex++;

    if (animationIndex >= mascotAnimations.length) {
        animationIndex = 0;
    }

    mascotImg.src =
        `/static/images/${mascotAnimations[animationIndex]}`;

});

    // Left Click to Start Dragging
    
let isDragging = false;
let offsetX = 0;
let offsetY = 0;

mascot.addEventListener("pointerdown", function (e) {
    if (e.button !== 0) return;

    isDragging = true;

    const rect = mascot.getBoundingClientRect();

    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;

    mascot.classList.remove("cursor-grab");
    mascot.classList.add("cursor-grabbing");

    mascot.setPointerCapture(e.pointerId);
});

mascot.addEventListener("pointermove", function (e) {
    if (!isDragging) return;

    const x = Math.max(
        0,
        Math.min(
            e.clientX - offsetX,
            window.innerWidth - mascot.offsetWidth
        )
    );

    const y = Math.max(
        0,
        Math.min(
            e.clientY - offsetY,
            window.innerHeight - mascot.offsetHeight
        )
    );

    mascot.style.left = `${x}px`;
    mascot.style.top = `${y}px`;
});

function stopDragging() {
    isDragging = false;

    mascot.classList.remove("cursor-grabbing");
    mascot.classList.add("cursor-grab");
}

mascot.addEventListener("pointerup", stopDragging);
mascot.addEventListener("pointercancel", stopDragging);


    // Stop Dragging
    document.addEventListener("mouseup", function () {

        isDragging = false;

        mascot.classList.remove("cursor-grabbing");
        mascot.classList.add("cursor-grab");

    });

    // Click Mascot to Show Random Word
    mascot.addEventListener("click", function () {
        showRandomWord();
    });

    // Change Word Every 5 Seconds
    setInterval(showRandomWord, 5000);

    console.log("NovaCode Mascot Ready!");

});

// Mascot Open / Close
const mascotToggle = document.getElementById("mascotToggle");
const mascotToggleIcon = document.getElementById("mascotToggleIcon");
const mascotToggleText = document.getElementById("mascotToggleText");

if (mascotToggle) {

    let mascotVisible = true;

    mascotToggle.addEventListener("click", function () {

        mascotVisible = !mascotVisible;

        if (mascotVisible) {

            mascot.classList.remove("hidden");

            mascotToggleText.textContent = "Hide";
            mascotToggleIcon.setAttribute("data-lucide", "eye-off");

        } else {

            mascot.classList.add("hidden");

            mascotToggleText.textContent = "Show";
            mascotToggleIcon.setAttribute("data-lucide", "eye");

        }

        lucide.createIcons();
    });
}



document.addEventListener("DOMContentLoaded", () => {

    // =========================
    // 1. SETTINGS DROPDOWN
    // =========================

    const settingsToggle = document.getElementById("settingsToggle");
    const settingsMenu = document.getElementById("settingsMenu");

    settingsToggle?.addEventListener("click", () => {
        settingsMenu.classList.toggle("hidden");
    });

    // Close when clicking outside
    document.addEventListener("click", (event) => {
        if (
            settingsToggle &&
            settingsMenu &&
            !settingsToggle.contains(event.target) &&
            !settingsMenu.contains(event.target)
        ) {
            settingsMenu.classList.add("hidden");
        }
    });


    // =========================
    // 2. MASCOT CONTROLLER
    // =========================

    const mascotToggle = document.getElementById("mascotToggle");
    const mascotToggleText = document.getElementById("mascotToggleText");
    const mascotToggleIcon = document.getElementById("mascotToggleIcon");

    const mascot = document.getElementById("mascot");

    function updateMascot() {
        const isHidden = localStorage.getItem("mascotHidden") === "true";

        mascot?.classList.toggle("hidden", isHidden);

        if (mascotToggleText) {
            mascotToggleText.textContent = isHidden ? "Show" : "Hide";
        }

        if (mascotToggleIcon) {
            mascotToggleIcon.setAttribute(
                "data-lucide",
                isHidden ? "eye" : "eye-off"
            );
        }

        if (window.lucide) lucide.createIcons();
    }

    mascotToggle?.addEventListener("click", () => {
        const isHidden = localStorage.getItem("mascotHidden") === "true";

        localStorage.setItem("mascotHidden", String(!isHidden));
        updateMascot();
    });

    updateMascot();


    // =========================
    // 3. THEME CONTROLLER
    // =========================

    const themeToggle = document.getElementById("themeToggle");
    const themeText = document.getElementById("themeText");
    const themeIcon = document.getElementById("themeIcon");

    function updateTheme() {
        const theme = localStorage.getItem("theme") || "light";

        document.documentElement.classList.toggle("dark", theme === "dark");

        if (themeText) {
            themeText.textContent = theme === "dark" ? "Dark" : "Light";
        }

        if (themeIcon) {
            themeIcon.setAttribute(
                "data-lucide",
                theme === "dark" ? "moon" : "sun"
            );
        }

        if (window.lucide) lucide.createIcons();
    }

    themeToggle?.addEventListener("click", () => {
        const currentTheme = localStorage.getItem("theme") || "light";

        localStorage.setItem(
            "theme",
            currentTheme === "light" ? "dark" : "light"
        );

        updateTheme();
    });

    updateTheme();


    // =========================
    // 4. LANGUAGE CONTROLLER
    // =========================

    const languageToggle = document.getElementById("languageToggle");
    const languageText = document.getElementById("languageText");

    function updateLanguage() {
        const language = localStorage.getItem("language") || "en";

        if (languageText) {
            languageText.textContent = language === "en" ? "English" : "Khmer";
        }

        document.querySelectorAll("[data-en][data-km]").forEach(element => {
            element.textContent =
                language === "en"
                    ? element.dataset.en
                    : element.dataset.km;
        });
    }

    languageToggle?.addEventListener("click", () => {
        const currentLanguage = localStorage.getItem("language") || "en";

        localStorage.setItem(
            "language",
            currentLanguage === "en" ? "km" : "en"
        );

        updateLanguage();
    });

    updateLanguage();

});
