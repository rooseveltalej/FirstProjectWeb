const langSelector = document.getElementById("language-selector");

async function loadLanguage(lang) {
    const res = await fetch(`lang/${lang}.json`);
    const strings = await res.json();

    document.getElementById("hero-title").textContent = strings.hero_title;
    document.getElementById("hero-subtitle").textContent = strings.hero_subtitle;
    document.getElementById("discover-button").textContent = strings.discover_button;
    document.getElementById("menu-inicio").textContent = strings.menu_inicio;
    document.getElementById("menu-historia").textContent = strings.menu_historia;
    document.getElementById("menu-atracciones").textContent = strings.menu_atracciones;
    document.getElementById("menu-gastronomia").textContent = strings.menu_gastronomia;
    document.getElementById("menu-como-llegar").textContent = strings.menu_como_llegar;

    localStorage.setItem("lang", lang);
}

langSelector.addEventListener("change", (e) => loadLanguage(e.target.value));

const savedLang = localStorage.getItem("lang") || "es";
langSelector.value = savedLang;
loadLanguage(savedLang);