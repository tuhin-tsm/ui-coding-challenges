document.addEventListener("DOMContentLoaded", () => {
  const gridData = [
    { name: "John Doe", age: 28, city: "New York" },
    { name: "Jane Smith", age: 34, city: "Los Angeles" },
    { name: "Sam Brown", age: 22, city: "Chicago" },
    { name: "Lisa White", age: 41, city: "Miami" },
  ];

  const gridBody = document.getElementById("grid-body");
  const searchInput = document.getElementById("search");

  const renderGrid = (data) => {
    gridBody.innerHTML = "";
    data.forEach((row) => {
      const tr = document.createElement("tr");
      Object.values(row).forEach((cell) => {
        const td = document.createElement("td");
        td.textContent = cell;
        tr.appendChild(td);
      });
      gridBody.appendChild(tr);
    });
  };

  const sortGrid = (column, order) => {
    gridData.sort((a, b) => {
      if (a[column] < b[column]) return order === "asc" ? -1 : 1;
      if (a[column] > b[column]) return order === "asc" ? 1 : -1;
      return 0;
    });
    renderGrid(gridData);
  };

  const searchGrid = (query) => {
    const filteredData = gridData.filter((row) =>
      Object.values(row).some((cell) =>
        cell.toString().toLowerCase().includes(query.toLowerCase())
      )
    );
    renderGrid(filteredData);
  };

  document.querySelector("thead").addEventListener("click", (event) => {
    if (event.target.tagName === "TH") {
      const column = event.target.getAttribute("data-column");
      const order = event.target.getAttribute("data-order");
      const newOrder = order === "asc" ? "desc" : "asc";
      event.target.setAttribute("data-order", newOrder);
      sortGrid(column, newOrder);
    }
  });

  searchInput.addEventListener("input", (event) => {
    searchGrid(event.target.value);
  });

  renderGrid(gridData);
});
