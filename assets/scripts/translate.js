import languages from "../data/languages.json" assert { type: "json" };

var activeFlag = "en";
var lastActiveFlag = "";
document.getElementById(activeFlag).classList.add("active-flag");

export function translate(lang) {
  const translatableItems = Object.getOwnPropertyNames(languages[lang]);

  translatableItems.forEach((item) => {
    document.getElementById(item).innerHTML = languages[lang][item];
  });
}
export function flagStateChange(lang) {
  lastActiveFlag = activeFlag;
  activeFlag = lang;
  document.getElementById(lastActiveFlag).classList.remove("active-flag");
  document.getElementById(activeFlag).classList.add("active-flag");
}
