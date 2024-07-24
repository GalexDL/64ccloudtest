const itemIds = [999000, 999001, 999003, 999004, 999005, 999002, 999006];
const itemNames = ["Premium Ticket", "1-Pull Summoning Ticket", "10-Pull Summoning Ticket",
                  "1-Pull Armament Ticket", "1-Pull Armament Ticket", "Dream Ticket Summon", "Dream Ticket Armament"];

let itemList = document.getElementById("item-list");
let saveButton = document.getElementById("save-button");
let fileInput = document.getElementById("file-input");

function generateItemList() {
  itemList.innerHTML = "";
  for (let i = 0; i < itemIds.length; i++) {
    const itemName = itemNames[i] || `Item ${itemIds[i]}`;
    const itemLabel = document.createElement("label");
    itemLabel.textContent = `Amount of ${itemName}:`;
    const entry = document.createElement("input");
    entry.type = "number";
    itemList.appendChild(itemLabel);
    itemList.appendChild(entry);
  }
}

function validateAndSave() {
  const itemValues = [];
  for (const entry of itemList.querySelectorAll("input")) {
    const value = parseFloat(entry.value);
    if (isNaN(value)) {
      alert("Invalid input! Please enter a valid number for each item.");
      return;
    }

    if (Number.isInteger(value)) {
      itemValues.push(value);
    } else {
      alert("Decimal values are not allowed. Please enter whole numbers for item amounts.");
      return;
    }
  }
  saveData(itemValues);
}


function saveData(itemValues) {
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];

  if (!file) {
    alert('Please select a JSON file to edit.');
    return;
  }

  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const existingData = JSON.parse(e.target.result);


      if (!existingData.item_list) {
        existingData.item_list = {};
      }
      for (let i = 0; i < itemIds.length; i++) {
        existingData.item_list[itemIds[i]] = itemValues[i];
      }


      const blob = new Blob([JSON.stringify(existingData, null, 2)], { type: 'application/json' });


      saveAs(blob, file.name);

      alert("Successfully saved item values!");
      saveButton.disabled = true;
    } catch (error) {
      alert('Error saving data: ' + error.message);
    }
  };
  reader.readAsText(file);
}




function loadFile(event) {
  const file = event.target.files[0];
  if (!file) {
    return;
  }
  const reader = new FileReader();
  reader.onload = function(e) {
    try {
      const data = JSON.parse(e.target.result);
      if (!data.item_list) { // Corrected to look for item_list
        throw new Error("Invalid JSON format. Missing 'item_list' property.");
      }
      // Update item values based on loaded data
      const entries = itemList.querySelectorAll("input");
      for (let i = 0; i < entries.length; i++) {
        entries[i].value = data.item_list[itemIds[i]] || ""; // Corrected to use item_list
      }
      saveButton.disabled = false;
    } catch (error) {
      alert("Error loading file: " + error.message);
    }
  };
  reader.readAsText(file);
}






generateItemList();
fileInput.addEventListener("change", loadFile);
saveButton.addEventListener("click", validateAndSave);
