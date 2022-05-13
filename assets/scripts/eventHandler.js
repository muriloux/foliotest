import { flagStateChange, translate } from "./translate.js";
import { scrollAnim } from "./scrollbar.js";
const toLanguage = translate;
export function eventHandler() {
  const clickHandler = () => {
    const en_flag = document.getElementById("en");
    const pt_flag = document.getElementById("pt");
    pt_flag.addEventListener("click", (e) => {
      toLanguage(e.target.id);
      flagStateChange(e.target.id);
    });
    en_flag.addEventListener("click", (e) => {
      toLanguage(e.target.id);
      flagStateChange(e.target.id);
    });
  };

  const scrollHandler = () => {
    const doc = document.querySelector("body");
    doc.onscroll = scrollAnim;
  };

  clickHandler();
  scrollHandler();
}
