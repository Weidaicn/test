(function () {
  const data = window.labContent;

  if (!data) {
    return;
  }

  const setText = (id, value) => {
    const node = document.getElementById(id);
    if (node) {
      node.textContent = value;
    }
  };

  const memberGroups = document.getElementById("member-groups");
  const dynamicAuthors = document.getElementById("dynamic-authors");
  const dynamicAbstract = document.getElementById("dynamic-abstract");
  const dynamicImage = document.getElementById("dynamic-image");
  const dynamicCaption = document.getElementById("dynamic-caption");
  const dynamicLinks = document.getElementById("dynamic-links");
  const studentGrid = document.getElementById("student-grid");
  const latestGrid = document.getElementById("latest-grid");
  const heroTags = document.getElementById("hero-tags");
  const contactMeta = document.getElementById("contact-meta");

  setText("brand-title", data.branding.title);
  setText("brand-subtitle", data.branding.subtitle);
  setText("hero-label", data.branding.heroLabel);
  setText("hero-title", data.branding.heroTitle);
  setText("hero-summary", data.branding.heroSummary);
  setText("positioning-text", data.branding.positioning);
  setText("lead-name", data.lead.name);
  setText("lead-role", data.lead.role);
  setText("lead-bio", data.lead.bio);
  setText("lead-note", data.lead.note);
  setText("contact-title", data.contact.title);
  setText("contact-summary", data.contact.summary);
  setText("source-note", data.sourceNote);
  setText("dynamic-title", data.featuredArticle.title);
  setText("footer-text", data.footer + " " + new Date().getFullYear());

  heroTags.innerHTML = data.branding.heroTags
    .map((tag) => `<li>${tag}</li>`)
    .join("");

  memberGroups.innerHTML = data.teamGroups
    .map(
      (group) => `
        <article class="member-group" data-reveal="up">
          <div class="member-heading">
            <h3>${group.label}</h3>
            <p>${group.role}</p>
          </div>
          <div class="member-list">
            ${group.members.map((member) => `<span>${member}</span>`).join("")}
          </div>
        </article>
      `
    )
    .join("");

  dynamicAuthors.textContent = data.featuredArticle.authors.join(", ");
  dynamicAbstract.textContent = data.featuredArticle.abstract;
  dynamicImage.src = data.featuredArticle.image;
  dynamicImage.alt = data.featuredArticle.imageAlt;
  dynamicCaption.textContent = data.featuredArticle.caption;
  dynamicLinks.innerHTML = data.featuredArticle.links
    .map(
      (item) => `
        <a class="paper-link" href="${item.href}" target="_blank" rel="noreferrer">${item.label}</a>
      `
    )
    .join("");

  studentGrid.innerHTML = data.studentWorks
    .map(
      (item) => `
        <article class="student-item" data-reveal="up">
          <p class="paper-tag">${item.student}</p>
          <h3>${item.title}</h3>
          <p class="paper-meta">${item.meta}</p>
          <p class="student-coauthors">${item.coauthors}</p>
          <a class="paper-link" href="${item.link}" target="_blank" rel="noreferrer">查看论文</a>
        </article>
      `
    )
    .join("");

  latestGrid.innerHTML = data.latestPapers
    .map(
      (item) => `
        <article class="paper-item" data-reveal="up">
          <h3>${item.title}</h3>
          <p class="paper-meta">${item.meta}</p>
          <a class="paper-link" href="${item.link}" target="_blank" rel="noreferrer">查看论文</a>
        </article>
      `
    )
    .join("");

  contactMeta.innerHTML = data.contact.items
    .map(
      (item) => `
        <div class="contact-meta-row">
          <p>${item.label}</p>
          <strong>${item.value}</strong>
        </div>
      `
    )
    .join("");

  const toggle = document.querySelector(".nav-toggle");
  const nav = document.querySelector(".site-nav");

  if (toggle && nav) {
    toggle.addEventListener("click", () => {
      const expanded = toggle.getAttribute("aria-expanded") === "true";
      toggle.setAttribute("aria-expanded", String(!expanded));
      nav.classList.toggle("is-open", !expanded);
    });

    nav.querySelectorAll("a").forEach((anchor) => {
      anchor.addEventListener("click", () => {
        toggle.setAttribute("aria-expanded", "false");
        nav.classList.remove("is-open");
      });
    });
  }

  const revealNodes = document.querySelectorAll("[data-reveal]");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.16
    }
  );

  revealNodes.forEach((node) => observer.observe(node));
})();
