document.addEventListener("DOMContentLoaded", function () {
  // URL of the misconduct.html page
  const misconductUrl = "/topics/misconduct.html";

  // Fetch the misconduct page content
  fetch(misconductUrl)
    .then((response) => response.text())
    .then((html) => {
      // Parse the fetched HTML
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      // Select the table from the misconduct page
      const misconductTable = doc.querySelector("#researchTable tbody");

      if (misconductTable) {
        const top5Rows = misconductTable.querySelectorAll("tr");
        const misconductList = document.getElementById("misconduct-top5");

        // Append top 5 rows to the misconduct list
        for (let i = 0; i < Math.min(5, top5Rows.length); i++) {
          const row = top5Rows[i];
          const cells = row.querySelectorAll("td");
          if (cells.length > 0) {
            const title = cells[2].textContent; // Author(s)
            const summary = cells[4].textContent; // Summary

            const listItem = document.createElement("li");
            listItem.innerHTML = `<strong>${title}:</strong> ${summary.slice(0, 100)}...`;
            misconductList.appendChild(listItem);
          }
        }
      }
    })
    .catch((error) => {
      console.error("Error fetching the misconduct page:", error);
    });
});
