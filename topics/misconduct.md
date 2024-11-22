---
layout: default
title: Misconduct
---

# Misconduct

Explore research on misconduct, categorized into Antecedents, Consequences, and Reactions, which collectively analyze organizational behavior.

## Search
Search for authors, categories, or keywords:

<input type="text" id="searchInput" onkeyup="searchTable()" placeholder="Search for authors, categories, or keywords..." style="width: 100%; padding: 10px; margin-bottom: 20px;">

<table id="researchTable" style="width: 100%; border-collapse: collapse;">
  <thead>
    <tr style="background-color: #f4f4f4;">
      <th style="padding: 10px; border: 1px solid #ddd;">Category</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Subcategory</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Author(s)</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Reference</th>
      <th style="padding: 10px; border: 1px solid #ddd;">Summary</th>
    </tr>
  </thead>
  <tbody>
    <!-- Antecedents Rows -->
    <tr>
      <td>Antecedents</td>
      <td>Drivers and Preventive Factors</td>
      <td>Brady & Sivanathan (2024)</td>
      <td>Brady, G. L., & Sivanathan, N. (2024). More than meets the eye: The unintended consequence of leader dominance orientation on subordinate ethicality. Organization Science, 35(4), 1322-1341.</td>
      <td>This research investigates how leader dominance orientation inadvertently encourages unethical behavior among subordinates. Dominant leaders create an environment where subordinates feel compelled to engage in self-interested actions, undermining overall ethicality.</td>
    </tr>
    <tr>
      <td>Antecedents</td>
      <td>Drivers and Preventive Factors</td>
      <td>Chambers (2024)</td>
      <td>Chambers, C. R. (2024). Nonmonetary reward systems, counterproductive behavior, and responses to sanctions in open collaboration environments. Organization Science, 35(3), 928-947.</td>
      <td>This research investigates how nonmonetary rewards and sanctions impact counterproductive behaviors in collaborative work environments. Findings indicate that nonmonetary rewards can reduce negative behaviors, but sanctions have varying effects depending on the severity of the infraction.</td>
    </tr>
    <!-- Consequences Rows -->
    <tr>
      <td>Consequences</td>
      <td>Impact of Misconduct</td>
      <td>Dimitriadis (2024)</td>
      <td>Dimitriadis, S. (2024). Bribery, insecurity, and firm performance: Evidence from the Boko Haram insurgency in Nigeria. Strategic Management Journal.</td>
      <td>This research investigates the impact of bribery and insecurity on firm performance during the Boko Haram insurgency in Nigeria. Results show that firms engaged in bribery are less resilient to external threats, underscoring the detriment of corruption during crises.</td>
    </tr>
    <!-- Reactions Rows -->
    <tr>
      <td>Reactions</td>
      <td>Responses to Misconduct</td>
      <td>Berry & Hildreth (2024)</td>
      <td>Berry, Z., & Hildreth, J. A. D. (2024). When Your Friend is My Friend: How Loyalty Prompts Support for Indirect Ties in Moral Dilemmas. Organization Science.</td>
      <td>The authors explore how loyalty impacts support for indirect ties in moral dilemmas, revealing that people are more likely to support third parties connected through shared acquaintances in situations requiring loyalty.</td>
    </tr>
  </tbody>
</table>

<script>
  function searchTable() {
    const input = document.getElementById("searchInput");
    const filter = input.value.toLowerCase();
    const table = document.getElementById("researchTable");
    const rows = table.getElementsByTagName("tr");

    for (let i = 1; i < rows.length; i++) {
      const cells = rows[i].getElementsByTagName("td");
      let match = false;

      for (let j = 0; j < cells.length; j++) {
        if (cells[j]) {
          const cellContent = cells[j].textContent || cells[j].innerText;
          if (cellContent.toLowerCase().indexOf(filter) > -1) {
            match = true;
            break;
          }
        }
      }
      rows[i].style.display = match ? "" : "none";
    }
  }
</script>
