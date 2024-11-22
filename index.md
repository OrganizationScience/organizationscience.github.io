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
    <img src="assets/images/misconduct.jpg" alt="Misconduct" style="flex: 0 0 150px; max-width: 150px; height: auto; margin-right: 20px; border-radius: 8px;">
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
    <img src="assets/images/science_innovation.jpg" alt="Science Innovation" style="flex: 0 0 150px; max-width: 150px; height: auto; margin-right: 20px; border-radius: 8px;">
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
  // Function to fetch and inject the top 5 rows using DataTables API
  function fetchTop5Rows(url, targetListId) {
    fetch(url)
      .then((response) => response.text())
      .then((html) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        const tableElement = doc.querySelector("#researchTable");

        // Check if DataTables is initialized on the target page
        if (tableElement && tableElement.dataset.dtInitialized) {
          // Use DataTables API to extract the rows
          const dataTable = $(tableElement).DataTable();
          const rowsData = dataTable.rows({ order: 'current' }).data(); // Get ordered rows

          const targetList = document.getElementById(targetListId);

          for (let i = 0; i < Math.min(5, rowsData.length); i++) {
            const row = rowsData[i];
            const category = row[0]; // Assuming the category is in column 0
            const title = row[3]; // Assuming the reference is in column 3

            // Create a list item and link it to the specific row
            const listItem = document.createElement("li");
            listItem.innerHTML = `
              <a href="${url}#row-${i + 1}" target="_self" style="text-decoration: none; color: #007acc;">
                <strong>${category}:</strong> ${title}
              </a>
            `;
            targetList.appendChild(listItem);
          }
        } else {
          console.error(`DataTables not initialized or table not found at ${url}`);
        }
      })
      .catch((error) => console.error(`Error fetching data from ${url}:`, error));
  }
  
  // Fetch top 5 rows for Misconduct
  fetchTop5Rows("/topics/misconduct.html", "misconduct-top5");
  // Fetch top 5 rows for Science Innovation
  fetchTop5Rows("/topics/science_innovation.html", "science_innovation-top5");
});
</script>
