---
layout: default
title: Organization Science Blog
---

<div class="sidebar">
  <h2>Navigation</h2>
  <ul>
    <li><a href="https://organizationscience.github.io/">Home</a></li>
    <li><a href="/topics/misconduct.html">Misconduct</a></li>
    <li><a href="/topics/science.html">Science Innovation</a></li>
    <li><a href="/topics/other-topic.html">Other Topics</a></li>
  </ul>
</div>

<div class="main-content">
  <header class="header">
    <h1>
      <a href="https://organizationscience.github.io/" style="text-decoration: none; color: inherit;">
        Organization Science
      </a>
    </h1>
    <h2>Official Blog of Academic Journal "Organization Science".</h2>
  </header>

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
            <strong>${author}</strong> - <em>${category}, ${subcategory}</em> 
            (<a href="${misconductUrl}#row-${i}" style="color: #6CAE1F;">View Details</a>)
          `;
          misconductList.appendChild(listItem);
        }
      })
      .catch((error) => console.error("Error fetching misconduct data:", error));
  });
</script>
