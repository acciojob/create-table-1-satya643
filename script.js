function insert_Row() {
  // get the table by its id
  const table = document.getElementById("sampleTable");

  // insert a new row at the top (index 0)
  const newRow = table.insertRow(0);

  // insert two cells into the new row
  const cell1 = newRow.insertCell(0);
  const cell2 = newRow.insertCell(1);

  // set the values
  cell1.textContent = "New Cell1";
  cell2.textContent = "New Cell2";
}

