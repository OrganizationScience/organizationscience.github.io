---
layout: default
title: Organization Science Blog
---

# Research Topics

All Organization Science research is categorized into topic areas that collectively span the field of organizational behavior.

## Featured Topics

<section class="featured-topics">
  <div class="topic">
    <img src="assets/images/misconduct.jpg" alt="Misconduct">
    <div class="topic-content">
      <h2>Misconduct</h2>
      <ul id="misconduct-top5">
        <!-- Top 5 rows will be dynamically injected here -->
      </ul>
      <a href="/topics/misconduct.html" class="more-link">More research on this topic →</a>
    </div>
  </div>
</section>

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
          const category = cells[0].textContent;
          const author = cells[2].textContent;
          const summary = cells[4].textContent;

          const listItem = document.createElement("li");
          listItem.innerHTML = `<strong>${category} - ${author}:</strong> ${summary.slice(0, 100)}...`;
          misconductList.appendChild(listItem);
        }
      })
      .catch((error) => console.error("Error fetching misconduct data:", error));
  });
</script>
