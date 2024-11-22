---
layout: default
title: Organization Science
class: misconduct-page
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
          <th style="width: 20%;">Reference</th>
          <th style="width: 35%;">Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Brady & Sivanathan (2024)</td>
          <td>Brady, G. L., & Sivanathan, N. (2024). More than meets the eye: the unintended consequence of leader dominance orientation on subordinate ethicality. Organization Science, 35(4), 1322-1341.</td>
          <td>This research investigates how leader dominance orientation inadvertently encourages unethical behavior among subordinates. Dominant leaders create an environment where subordinates feel compelled to engage in self-interested actions, undermining overall ethicality.</td>
        </tr>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Chambers (2024)</td>
          <td>Chambers, C. R. (2024). Nonmonetary reward systems, counterproductive behavior, and responses to sanctions in open collaboration environments. Organization Science, 35(3), 928-947.</td>
          <td>This research investigates how nonmonetary rewards and sanctions impact counterproductive behaviors in collaborative work environments. Findings indicate that nonmonetary rewards can reduce negative behaviors, but sanctions have varying effects depending on the severity of the infraction.</td>
        </tr>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Dakhlallah (2024)</td>
          <td>Dakhlallah, D. (2024). Bribery in the Workplace: A Field Experiment on the Threat of Making Group Behavior Visible. Organization Science.</td>
          <td>This field experiment explores how visibility of group behavior affects bribery in workplaces, finding that making unethical behavior observable decreases instances of bribery. Transparency serves as a deterrent, especially when group actions are collectively visible.</td>
        </tr>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Frake, Byun, & Kim (2024)</td>
          <td>Frake, J., Byun, H., & Kim, J. (2024). The Effect of Financial Resources on Misconduct: Evidence from Lottery Ticket Sales. Organization Science.</td>
          <td>This research investigates the effect of financial resources, such as lottery ticket sales, on misconduct levels. Findings reveal that increased financial resources correlate with reduced misconduct due to the lowered temptation for risky behavior.</td>
        </tr>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Guo, Luo, & Li (2022)</td>
          <td>Guo, Y., Luo, X. R., & Li, D. (2022). Hierarchical inconsistency: A monitoring mechanism to reduce securities fraud in emerging markets. Organization Science, 33(6), 2187-2208.</td>
          <td>The study introduces "hierarchical inconsistency" as a monitoring mechanism to reduce securities fraud in emerging markets. Results indicate that mismatches in hierarchical expectations between managers and employees deter fraudulent behavior.</td>
        </tr>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Li, Chen, & Hildreth (2023)</td>
          <td>Li, H., Chen, Y. R., & Hildreth, J. A. D. (2023). Powerlessness also corrupts: lower power increases self-promotional lying. Organization Science, 34(4), 1422-1440.</td>
          <td>This paper reveals that powerlessness can increase the propensity for self-promotional lying, challenging the conventional view that power corrupts. Lower power individuals engage in dishonest behavior to bolster their self-image under perceived vulnerability.</td>
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
