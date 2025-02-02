const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
    // Select all price elements
    const prices = document.querySelectorAll(".price");
    let total = 0;

    // Sum up the prices
    prices.forEach(price => {
        total += parseFloat(price.innerText);
    });

    // Create a new row for the total price
    const table = document.querySelector("table");
    const newRow = document.createElement("tr");
    const newCell = document.createElement("td");
    
    // Set the cell to span two columns and display the total price
    newCell.colSpan = 2; 
    newCell.innerText = `Total Price: Rs ${total}`;

    // Append the cell to the new row and then append the row to the table
    newRow.appendChild(newCell);
    table.appendChild(newRow);
};

getSumBtn.addEventListener("click", getSum);
