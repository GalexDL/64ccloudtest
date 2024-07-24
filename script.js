const itemIds = [999000, 999001, 999003, 999004, 999005, 999002, 999006, 999008, 999009];
const itemNames = ["Premium Ticket", "1-Pull Summoning Ticket", "10-Pull Summoning Ticket",
                  "1-Pull Armament Ticket", "1-Pull Armament Ticket", "Dream Ticket Summon", "Dream Ticket Armament", "4&5-Star Ticket", "Gift Ticket"];

const userIds = ["name", "comment", "vmoney", "free_vmoney", "rank_point"];
const userNames = ["Name", "Bio", "Paid Lodestar Beads", "Lodestar Beads", "Rank"];

let itemList = document.getElementById("item-list");
let saveButton = document.getElementById("save-button");
let fileInput = document.getElementById("file-input");
let userInfoList = document.getElementById("user-info");


function generateItemList() {
  itemList.innerHTML = "";
  for (let i = 0; i < itemIds.length; i++) {
    const itemName = itemNames[i] || `Item ${itemIds[i]}`;
    const itemLabel = document.createElement("label");
    itemLabel.textContent = `${itemName}:`;
    const entry = document.createElement("input");
    entry.type = "number";
    itemList.appendChild(itemLabel);
    itemList.appendChild(entry);
  }
}
function generateUserInfoList() {
  userInfoList.innerHTML = "";

  for (let i = 0; i < userIds.length; i++) {
    const userName = userNames[i];
    const userInfoLabel = document.createElement("label");
    userInfoLabel.textContent = userName + ":";
    const userInfoInput = document.createElement("input");
    userInfoList.appendChild(userInfoLabel);
    userInfoList.appendChild(userInfoInput);
  }
}

function validateAndSave() {
  const itemValues = [];
  const userValues = [];
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
  for (const entry of document.querySelectorAll("#user-info input")) {
    userValues.push(entry.value);
  }
  saveData(itemValues, userValues);
}


function saveData(itemValues, userValues) {
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

      const userValues = [];
      for (const entry of document.querySelectorAll("#user-info input")) {
        userValues.push(entry.value);
      }

      existingData.user_info = existingData.user_info || {};
      for (let i = 0; i < userIds.length; i++) {
        existingData.user_info[userIds[i]] = userValues[i];
      }


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
      if (!data.item_list) {
        data.item_list = {};
      }
      if (!data.user_info) {
        data.user_info = {};
      }

      const entries = itemList.querySelectorAll("input");
      for (let i = 0; i < entries.length; i++) {
        const itemId = itemIds[i];
        entries[i].value = data.item_list[itemId] !== undefined ? data.item_list[itemId] : 0;
      }
      const userEntries = document.querySelectorAll("#user-info input");
      for (let i = 0; i < userIds.length; i++) {
        const userId = userIds[i];
        userEntries[i].value = data.user_info[userId] !== undefined ? data.user_info[userId] : "";
      }

      saveButton.disabled = false;
    } catch (error) {
      alert("Error loading file: " + error.message);
    }
  };
  reader.readAsText(file);
}






generateUserInfoList()
generateItemList();
fileInput.addEventListener("change", loadFile);
saveButton.addEventListener("click", validateAndSave);
