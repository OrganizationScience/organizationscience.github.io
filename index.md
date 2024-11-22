---
layout: default
title: Organization Science Blog
---

# Research Topics

All Organization Science research is categorized into topic areas that collectively span the field of organizational behavior.

## Featured Topics

<section class="featured-topics">
  <!-- Misconduct Section -->
  <div class="topic" style="display: flex; align-items: flex-start; margin-bottom: 20px;">
    <img src="/assets/images/misconduct.jpg" alt="Misconduct" style="flex: 0 0 150px; max-width: 150px; height: auto; margin-right: 20px; border-radius: 8px;">
    <div class="topic-content">
      <h2 style="margin: 0; font-size: 1.5rem;">Misconduct</h2>
      <ul id="misconduct-top5" style="padding-left: 20px;">
        <!-- Top 5 rows will be dynamically injected here -->
      </ul>
      <a href="/topics/misconduct.html" class="more-link" style="font-weight: bold; color: #007acc; text-decoration: none; margin-top: 10px; display: block;">More research on this topic →</a>
    </div>
  </div>

  <!-- Science Innovation Section -->
  <div class="topic" style="display: flex; align-items: flex-start; margin-bottom: 20px;">
    <img src="/assets/images/science_innovation.jpg" alt="Science Innovation" style="flex: 0 0 150px; max-width: 150px; height: auto; margin-right: 20px; border-radius: 8px;">
    <div class="topic-content">
      <h2 style="margin: 0; font-size: 1.5rem;">Science Innovation</h2>
      <ul id="science_innovation-top5" style="padding-left: 20px;">
        <!-- Top 5 rows will be dynamically injected here -->
      </ul>
      <a href="/topics/science_innovation.html" class="more-link" style="font-weight: bold; color: #007acc; text-decoration: none; margin-top: 10px; display: block;">More research on this topic →</a>
    </div>
  </div>
</section>

<script>
document.addEventListener("DOMContentLoaded", function () {
  function fetchTop5Rows(url, targetListId, tableId) {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const table = doc.querySelector(`#${tableId} tbody`); // Use the dynamic table ID

        if (!table) {
          console.error(`Table not found in ${url}`);
          return;
        }

        const rows = table.querySelectorAll("tr");
        const targetList = document.getElementById(targetListId);

        // Clear any existing rows to prevent duplication
        targetList.innerHTML = "";

        // Inject top 5 rows
        for (let i = 0; i < Math.min(5, rows.length); i++) {
          const cells = rows[i].querySelectorAll("td");
          const category = cells[0].textContent.trim(); // Category
          const title = cells[3].textContent.trim(); // Reference

          // Create a list item and link it to the specific row
          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <a href="${url}#row-${i + 1}" target="_self" style="text-decoration: none; color: #007acc;">
              <strong>${category}:</strong> ${title}
            </a>
          `;
          targetList.appendChild(listItem);
        }
      })
      .catch((error) => console.error(`Error fetching data from ${url}:`, error));
  }

  // Fetch top 5 rows for Misconduct
  fetchTop5Rows("/topics/misconduct.html", "misconduct-top5", "misconductTable");

  // Fetch top 5 rows for Science Innovation
  fetchTop5Rows("/topics/science_innovation.html", "science_innovation-top5", "science_innovationTable");
});
</script>
