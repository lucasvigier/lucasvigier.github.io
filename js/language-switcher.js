const languageSwitcher = document.querySelector(".language-switcher");

languageSwitcher.addEventListener("click", () => {
    document.querySelector(".language-switcher").classList.toggle("open");
})