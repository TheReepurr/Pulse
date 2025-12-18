const yearEl = document.getElementById("year");
yearEl.textContent = new Date().getFullYear();

// Mobile menu
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");
navToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

// Theme toggle (remembers preference)
const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;

function setTheme(mode) {
  if (mode === "light") {
    root.setAttribute("data-theme", "light");
    themeToggle.textContent = "☀️";
  } else {
    root.removeAttribute("data-theme");
    themeToggle.textContent = "🌙";
  }
  localStorage.setItem("pulse_theme", mode);
}

const savedTheme = localStorage.getItem("pulse_theme");
if (savedTheme) setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const isLight = root.getAttribute("data-theme") === "light";
  setTheme(isLight ? "dark" : "light");
});

// Demo tracker card
let steps = 8240;
let mins = 42;
let cals = 520;
let pct = 68;

const stepsEl = document.getElementById("stepsValue");
const minsEl = document.getElementById("minsValue");
const calsEl = document.getElementById("calValue");
const pctEl = document.getElementById("progressPct");
const fillEl = document.getElementById("progressFill");

function renderDemo() {
  stepsEl.textContent = steps.toLocaleString();
  minsEl.textContent = String(mins);
  calsEl.textContent = String(cals);
  pctEl.textContent = `${pct}%`;
  fillEl.style.width = `${pct}%`;
}

document.getElementById("demoAddSteps").addEventListener("click", () => {
  steps += 500;
  mins += 2;
  cals += 20;
  pct = Math.min(100, pct + 4);
  renderDemo();
});

document.getElementById("demoReset").addEventListener("click", () => {
  steps = 8240; mins = 42; cals = 520; pct = 68;
  renderDemo();
});

renderDemo();

// Waitlist form (front-end only)
const form = document.getElementById("waitlistForm");
const msg = document.getElementById("formMsg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  msg.textContent = `Thanks! ${email} is on the Pulse waitlist (demo).`;
  form.reset();
});
