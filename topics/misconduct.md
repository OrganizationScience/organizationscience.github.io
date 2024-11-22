---
layout: default
title: Organization Science
---

# Misconduct

Explore research on misconduct, categorized into Antecedents, Consequences, and Reactions, which collectively analyze organizational behavior.

## Search
<div class="featured-content">
  Search for authors, categories, or keywords:

  <input type="text" id="searchInput" onkeyup="searchTable()" placeholder="Search for authors, categories, or keywords..." style="width: 100%; padding: 10px; margin-bottom: 20px;">

<div class="container">
  <div style="overflow-x: auto;">
    <table id="researchTable">
      <thead>
        <tr>
          <th style="width: 15%;">Category</th>
          <th style="width: 15%;">Subcategory</th>
          <th style="width: 15%;">Author(s)</th>
          <th style="width: 20%;">Title</th>
          <th style="width: 35%;">Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Brady & Sivanathan (2024)</td>
          <td>More than meets the eye: The unintended consequence of leader dominance orientation on subordinate ethicality</td>
          <td>This research investigates how leader dominance orientation inadvertently encourages unethical behavior among subordinates. Dominant leaders create an environment where subordinates feel compelled to engage in self-interested actions, undermining overall ethicality.</td>
        </tr>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Chambers (2024)</td>
          <td>Nonmonetary reward systems, counterproductive behavior, and responses to sanctions in open collaboration environments</td>
          <td>This research investigates how nonmonetary rewards and sanctions impact counterproductive behaviors in collaborative work environments. Findings indicate that nonmonetary rewards can reduce negative behaviors, but sanctions have varying effects depending on the severity of the infraction.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<script>
  // Dynamically assign IDs to table rows
  document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll("#researchTable tbody tr");
    rows.forEach((row, index) => {
      row.id = `row-${index + 1}`; // Assign unique ID to each row
    });
  });

  // Search Table Functionality
  function searchTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("researchTable");
    const rows = table.querySelectorAll("tbody tr");

    rows.forEach((row) => {
      const cells = row.querySelectorAll("td");
      const rowText = Array.from(cells)
        .map((cell) => cell.textContent.toLowerCase())
        .join(" "); // Concatenate all cell values in the row

      if (rowText.includes(filter)) {
        row.style.display = ""; // Show the row if it matches the filter
      } else {
        row.style.display = "none"; // Hide the row if it doesn't match the filter
      }
    });
  }
</script>
