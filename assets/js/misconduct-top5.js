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

      rows.forEach((row, index) => {
        if (index < 5) { // Limit to top 5 rows
          const cells = row.querySelectorAll("td");
          const author = cells[2].textContent.trim(); // Author(s)
          const title = cells[3].textContent.trim(); // Title
          const rowId = `row-${index + 1}`; // Use dynamically generated IDs

          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <a href="${misconductUrl}#${rowId}" target="_self">
              <strong>${author}:</strong> ${title}
            </a>
          `;
          misconductList.appendChild(listItem);
        }
      });
    })
    .catch((error) => console.error("Error fetching misconduct data:", error));
});
