---
layout: default
title: Organization Science
---

# Science Innovation

Explore research on science innovation, categorized into Antecedents, Consequences, and Reactions, which collectively analyze strategy.

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
          <th style="width: 20%;">Subcategory</th>
          <th style="width: 20%;">Author(s)</th>
          <th style="width: 25%;">Reference</th>
          <th style="width: 40%;">Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Albert Roh (2024)</td>
          <td>Brady, G. L., & Sivanathan, N. (2024). More than meets the eye: The unintended consequence of leader dominance orientation on subordinate ethicality. Organization Science, 35(4), 1322-1341.</td>
          <td>This research investigates how leader dominance orientation inadvertently encourages unethical behavior among subordinates. Dominant leaders create an environment where subordinates feel compelled to engage in self-interested actions, undermining overall ethicality.</td>
        </tr>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Jino Lu (2024)</td>
          <td>Chambers, C. R. (2024). Nonmonetary reward systems, counterproductive behavior, and responses to sanctions in open collaboration environments. Organization Science, 35(3), 928-947.</td>
          <td>This research investigates how nonmonetary rewards and sanctions impact counterproductive behaviors in collaborative work environments. Findings indicate that nonmonetary rewards can reduce negative behaviors, but sanctions have varying effects depending on the severity of the infraction.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

<script>
  document.addEventListener("DOMContentLoaded", function () {
    const rows = document.querySelectorAll("#researchTable tbody tr");
    rows.forEach((row, index) => {
      row.id = `row-${index + 1}`; // Dynamically generate IDs for rows
    });
  });
</script>
