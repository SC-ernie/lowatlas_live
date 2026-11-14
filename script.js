/* =========================================================
   LOWATLAS — SCRIPT.JS

   QUICK FIND
   01 FAQ accordion
   02 Presence check (score gauge)
   03 Security checklist reveal

   No third-party scripts, no tracking, no cookies.
   (The Content Security Policy in each page <head> enforces this.)
   ========================================================= */


/* =========================================================
   01. FAQ
   ========================================================= */

document
  .querySelectorAll(".faq-question")
  .forEach((button) => {

    button.addEventListener("click", () => {

      const item =
        button.closest(".faq-item");

      item.classList.toggle("is-open");

      const open =
        item.classList.contains("is-open");

      button.setAttribute(
        "aria-expanded",
        open ? "true" : "false"
      );

      const icon =
        button.querySelector(".faq-icon");

      if (icon) {
        icon.textContent =
          open ? "−" : "+";
      }

    });

  });


/* =========================================================
   02. PRESENCE CHECK

   All wording lives in the HTML (labels, grades, next-step
   blocks, email text), so EN and ES share this one script.
   To change the questions or weights, edit the checkboxes in
   index.html / index-es.html:  data-weight, data-group, data-gap.
   Weights should add up to 100.
   ========================================================= */

document
  .querySelectorAll("[data-check]")
  .forEach((root) => {

    const boxes = Array.from(
      root.querySelectorAll("input[type='checkbox']")
    );

    const arc = root.querySelector(".gauge__arc");
    const scoreEl = root.querySelector("[data-check-score]");
    const srEl = root.querySelector("[data-check-sr]");
    const gapsWrap = root.querySelector("[data-check-gaps-wrap]");
    const gapsList = root.querySelector("[data-check-gaps]");
    const cta = root.querySelector("[data-check-cta]");
    const reset = root.querySelector("[data-check-reset]");

    const reduceMotion = window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    // Order matters: the first group that still has a gap is recommended.
    const GROUP_ORDER = ["profile", "website", "ads"];

    const mailBase = cta.getAttribute("href").split("?")[0];

    let touched = false;
    let shownScore = 0;
    let frame = null;


    function showOnly(attr, value) {
      root.querySelectorAll("[data-" + attr + "]").forEach((el) => {
        el.hidden = el.getAttribute("data-" + attr) !== value;
      });
    }


    function animateScore(to) {

      cancelAnimationFrame(frame);

      if (reduceMotion) {
        shownScore = to;
        scoreEl.textContent = to;
        return;
      }

      const from = shownScore;
      const start = performance.now();
      const duration = 700;

      function tick(now) {
        const t = Math.min((now - start) / duration, 1);
        const eased = 1 - Math.pow(1 - t, 3);

        shownScore = Math.round(from + (to - from) * eased);
        scoreEl.textContent = shownScore;

        if (t < 1) {
          frame = requestAnimationFrame(tick);
        }
      }

      frame = requestAnimationFrame(tick);
    }


    function buildMailto(score, gaps) {

      const d = cta.dataset;

      const lines = [
        d.intro,
        "",
        d.scoreLabel + " " + score + "/100",
        "",
        d.gapsLabel
      ];

      gaps.forEach((box) => {
        lines.push("- " + box.dataset.gap);
      });

      lines.push("");
      d.footer.split("|").forEach((line) => {
        lines.push(line.trim());
      });

      return mailBase +
        "?subject=" + encodeURIComponent(d.subject + ": " + score + "/100") +
        "&body=" + encodeURIComponent(lines.join("\n"));
    }


    function update() {

      const score = boxes.reduce((sum, box) => {
        return sum + (box.checked ? Number(box.dataset.weight) : 0);
      }, 0);

      const gaps = boxes.filter((box) => !box.checked);

      // Biggest gaps first, max 3
      const topGaps = gaps
        .slice()
        .sort((a, b) => Number(b.dataset.weight) - Number(a.dataset.weight))
        .slice(0, 3);

      let grade = "idle";

      if (touched) {
        if (score >= 100) grade = "full";
        else if (score >= 70) grade = "high";
        else if (score >= 35) grade = "mid";
        else grade = "low";
      }

      const nextGroup =
        GROUP_ORDER.find((group) =>
          gaps.some((box) => box.dataset.group === group)
        ) || "full";

      root.dataset.state = grade;

      // Gauge arc: pathLength is 100, so offset = 100 - score
      arc.style.strokeDashoffset = String(100 - score);
      animateScore(score);

      srEl.textContent = touched
        ? root.dataset.srTemplate.replace("{n}", score)
        : "";

      showOnly("grade", grade);
      showOnly("next", touched ? nextGroup : "none");

      // Gaps list
      gapsList.textContent = "";

      topGaps.forEach((box) => {
        const li = document.createElement("li");
        li.textContent = box.dataset.gap;
        gapsList.appendChild(li);
      });

      gapsWrap.hidden = !touched || topGaps.length === 0;

      // Email link carries the result
      cta.setAttribute(
        "href",
        touched
          ? buildMailto(score, topGaps)
          : mailBase + "?subject=" + encodeURIComponent(cta.dataset.subject)
      );
    }


    root.addEventListener("change", () => {
      touched = true;
      update();
    });

    reset.addEventListener("click", () => {
      boxes.forEach((box) => { box.checked = false; });
      touched = false;
      update();
    });

    update();

  });


/* =========================================================
   03. SECURITY CHECKLIST REVEAL

   Lines appear one by one the first time the box scrolls into
   view. With reduced motion (or no JavaScript) every line is
   simply visible.
   ========================================================= */

document
  .querySelectorAll("[data-console]")
  .forEach((box) => {

    const lines = box.querySelectorAll(".sec-console__line");

    const reduceMotion = window
      .matchMedia("(prefers-reduced-motion: reduce)")
      .matches;

    if (reduceMotion || !("IntersectionObserver" in window)) {
      return;
    }

    box.classList.add("is-armed");

    const observer = new IntersectionObserver((entries) => {

      entries.forEach((entry) => {

        if (!entry.isIntersecting) return;

        lines.forEach((line, i) => {
          setTimeout(() => line.classList.add("is-on"), i * 170);
        });

        observer.disconnect();

      });

    }, { threshold: 0.35 });

    observer.observe(box);

  });
