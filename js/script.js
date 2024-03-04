import filling from "./modules/filling";
import about from "./modules/about";
import skills from "./modules/skills";
import site from "./modules/site";
import sticks from "./modules/sticks";
import pulsing from "./modules/pulsing";

window.addEventListener("DOMContentLoaded", () => {
  filling(
    ".section__nav_info",
    ".section__contact_list",
    ".section__skills_blocks-other"
  );
  about(
    ".section__nav_about-text-hidden",
    ".section__nav_about-btn-plus",
    ".section__experience_case-btn-plus"
  );
  skills(
    ".section__skills_blocks-container",
    ".child, .section__skills_text-title, .section__skills_text",
    ".section__skills_blocks-webpack",
    ".section__skills_blocks-redux",
    ".section__skills_blocks-other"
  );
  site(".animate-on-load");
  sticks(
    ".section__experience_hackaton",
    ".stick-hackaton",
    ".section__experience_shogushi",
    ".stick-shogushi"
  );
  pulsing(
    ".section__nav_portfolio-container",
    ".section__nav_portfolio-arrow",
    ".section__nav_cv-container",
    ".section__nav_cv-arrow"
  );
});
