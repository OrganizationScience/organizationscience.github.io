---
layout: default
title: Organization Science
class: misconduct-page
---

# Misconduct

Explore research on misconduct, categorized into Antecedents, Consequences, and Reactions, which collectively analyze organizational behavior.

<div class="container">
  <div style="overflow-x: auto;">
    <table id="misconductTable" class="display">
      <thead>
        <tr>
          <th>Category</th>
          <th>Subcategory</th>
          <th>Author(s)</th>
          <th>Reference</th>
          <th>Summary</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Brady & Sivanathan (2024)</td>
          <td>Brady, G. L., & Sivanathan, N. (2024). More than meets the eye: the unintended consequence of leader dominance orientation on subordinate ethicality. Organization Science, 35(4), 1322-1341.</td>
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
      
      </tbody>
    </table>
  </div>
</div>

<!-- Scripts -->
<!-- Include jQuery -->
<script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>

<!-- Include DataTables JS -->
<script src="https://cdn.datatables.net/1.13.4/js/jquery.dataTables.min.js"></script>

<!-- Initialize DataTables -->
<script>
  document.addEventListener('DOMContentLoaded', function () {
    // Initialize DataTables
    $('#misconductTable').DataTable();

    // Assign unique IDs to each row
    const rows = document.querySelectorAll('#misconductTable tbody tr');
    rows.forEach((row, index) => {
      row.id = `row-${index + 1}`; // Assign a unique ID
    });

    // Highlight the specific row based on URL hash
    const hash = window.location.hash;
    if (hash) {
      const targetRow = document.querySelector(hash);
      if (targetRow) {
        targetRow.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to the row
        targetRow.classList.add('highlight'); // Add highlight class
        setTimeout(() => targetRow.classList.remove('highlight'), 3000); // Remove highlight after 3 seconds
      }
    }
  });
</script>

<!-- Highlight CSS -->
<style>
  .highlight {
    background-color: #ffeb3b; /* Light yellow */
    animation: fadeOutHighlight 3s forwards;
  }

  @keyframes fadeOutHighlight {
    0% {
      background-color: #ffeb3b;
    }
    100% {
      background-color: transparent;
    }
  }
</style>
