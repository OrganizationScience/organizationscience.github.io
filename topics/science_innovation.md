---
layout: default
title: Organization Science
class: science-innovation-page
---

# Science Innovation

Explore research on science innovation, categorized into Antecedents, Consequences, and Reactions, which collectively analyze strategy.

<div class="container">
  <div style="overflow-x: auto;">
    <table id="science_innovationTable" class="display">
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
          <td>Roh, A. (2024). I love Org Sci. Organization Science, 35(4), 1322-1341.</td>
          <td>This research investigates how leader dominance orientation inadvertently encourages unethical behavior among subordinates. Dominant leaders create an environment where subordinates feel compelled to engage in self-interested actions, undermining overall ethicality.</td>
        </tr>
        <tr>
          <td>Antecedents</td>
          <td>Drivers and Preventive Factors</td>
          <td>Jino Lu (2024)</td>
          <td>Lu, J. (2024). I love Org Sci as well!. Organization Science, 35(3), 928-947.</td>
          <td>This research investigates how nonmonetary rewards and sanctions impact counterproductive behaviors in collaborative work environments. Findings indicate that nonmonetary rewards can reduce negative behaviors, but sanctions have varying effects depending on the severity of the infraction.</td>
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
    $('#science_innovationTable').DataTable();

    // Assign unique IDs to each row
    const rows = document.querySelectorAll('#science_innovationTable tbody tr');
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
