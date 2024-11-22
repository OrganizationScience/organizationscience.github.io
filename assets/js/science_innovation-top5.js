document.addEventListener("DOMContentLoaded", function () {
  const science_innovationUrl = "/topics/science_innovation.html";

  fetch(science_innovationUrl)
    .then((response) => response.text())
    .then((html) => {
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");

      const table = doc.querySelector("#researchTable tbody");
      const rows = table.querySelectorAll("tr");
      const science_innovationList = document.getElementById("science_innovation-top5");

      rows.forEach((row, index) => {
        if (index < 5) { // Limit to top 5 rows
          const cells = row.querySelectorAll("td");
          const author = cells[2].textContent.trim(); // Author(s)
          const title = cells[3].textContent.trim(); // Title

          // Generate the link for each row
          const listItem = document.createElement("li");
          listItem.innerHTML = `
            <a href="${science_innovationUrl}#row-${index + 1}" target="_self">
              <strong>${author}:</strong> ${title}
            </a>
          `;
          science_innovationList.appendChild(listItem);
        }
      });
    })
    .catch((error) => console.error("Error fetching science_innovation data:", error));
});
