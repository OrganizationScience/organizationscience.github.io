---
layout: default
title: Organization Science Blog
---

<div class="main-content">
  <header class="page-header" role="banner">
    <h1 class="project-name">
      <a href="https://organizationscience.github.io/" style="text-decoration: none; color: inherit;">
        Organization Science
      </a>
    </h1>
    <h2 class="project-tagline">Official Blog of Academic Journal "Organization Science".</h2>
  </header>

  <main id="content" class="content-container" role="main">
    <h2>Research Topics</h2>
    <p>
      All Organization Science research is categorized into topic areas that collectively span the field of organizational behavior.
    </p>

    <section class="featured-topics">
      <div class="topic">
        <img src="assets/images/misconduct.jpg" alt="Misconduct">
        <div class="topic-content">
          <h3>Misconduct</h3>
          <ul id="misconduct-top5">
            <!-- Top 5 rows will be dynamically injected here -->
          </ul>
          <a href="/topics/misconduct.html" class="more-link">More research on this topic →</a>
        </div>
      </div>
    </section>
  </main>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const misconductUrl = "/topics/misconduct.html";

    fetch(misconductUrl)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const table = doc.querySelector("#researchTable tbody");
        const rows = table.querySelectorAll("tr");
        const misconductList = document.getElementById("misconduct-top5");

        for (let i = 0; i < Math.min(5, rows.length); i++) {
          const cells = rows[i].querySelectorAll("td");
          const category = cells[0].textContent.trim();
          const subcategory = cells[1].textContent.trim();
          const author = cells[2].textContent.trim();

          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <strong>${author}</strong> - <em>${category}</em>, ${subcategory} 
            (<a href="${misconductUrl}#row-${i}">View Details</a>)
          `;
          misconductList.appendChild(listItem);
        }
      })
      .catch((error) => console.error("Error fetching misconduct data:", error));
  });
</script>
