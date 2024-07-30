const equipmentIds = [        2020001,
  1080001,
  1060001,
  1010001,
  2010002,
  100012,
  2030001,
  2040001,
  2050001,
  2070001,
  3010006,
  3010007,
  3010008,
  3010013,
  3010023,
  3010027,
  3010035,
  3010053,
  3020003,
  3020006,
  3020011,
  3020012,
  3030006,
  3030007,
  3030012,
  3030013,
  3030027,
  3040003,
  3040006,
  3040032,
  3050002,
  3050005,
  3050010,
  3060002,
  3060003,
  3060007,
  3060010,
  3070006,
  3070010,
  3070018,
  3070022,
  3080002,
  3080008,
  3080009,
  3080017,
  3090036,
  3100007,
  4010003,
  4010010,
  4010014,
  4010015,
  4010017,
  4010018,
  4010021,
  4010024,
  4010048,
  4010049,
  4010052,
  4010071,
  4020007,
  4020013,
  4020014,
  4020016,
  4020019,
  4020021,
  4020033,
  4020034,
  4030003,
  4030004,
  4030008,
  4030009,
  4030014,
  4030019,
  4030024,
  4030032,
  4040007,
  4040008,
  4040012,
  4040021,
  4040023,
  4040024,
  4040027,
  4040034,
  4050004,
  4050007,
  4050011,
  4050019,
  4050021,
  4050023,
  4050030,
  4050031,
  4060005,
  4060011,
  4060022,
  4060023,
  4060028,
  4060031,
  4060032,
  4060035,
  4060036,
  4070004,
  4070007,
  4070011,
  4070012,
  4070016,
  4070031,
  4070034,
  4070037,
  4070038,
  4070041,
  4080003,
  4080015,
  4080016,
  4080019,
  4080021,
  4080023,
  4080024,
  4080027,
  4090006,
  4090012,
  4090033,
  4090037,
  4090043,
  4090050,
  4100003,
  4100008,
  4100014,
  5010004,
  5010005,
  5010011,
  5010012,
  5010019,
  5010020,
  5010022,
  5010025,
  5010026,
  5010028,
  5010029,
  5010030,
  5010031,
  5010032,
  5010033,
  5010034,
  5010036,
  5010037,
  5010038,
  5010039,
  5010040,
  5010041,
  5010042,
  5010043,
  5010044,
  5010045,
  5010046,
  5010050,
  5010051,
  5010054,
  5010055,
  5010056,
  5010057,
  5010058,
  5010059,
  5010060,
  5010061,
  5010062,
  5010063,
  5010064,
  5010065,
  5010068,
  5010070,
  5010072,
  5010073,
  5010074,
  5010075,
  5020008,
  5020009,
  5020010,
  5020017,
  5020018,
  5020020,
  5020022,
  5020023,
  5020024,
  5020025,
  5020026,
  5020027,
  5020028,
  5020029,
  5020030,
  5020031,
  5020032,
  5020035,
  5020036,
  5020037,
  5020038,
  5020039,
  5020040,
  5020041,
  5020042,
  5030005,
  5030011,
  5030016,
  5030017,
  5030018,
  5030020,
  5030021,
  5030022,
  5030023,
  5030025,
  5030026,
  5030028,
  5030029,
  5030030,
  5030033,
  5030034,
  5030035,
  5030036,
  5030037,
  5030038,
  5030039,
  5030040,
  5030041,
  5040009,
  5040010,
  5040014,
  5040016,
  5040017,
  5040018,
  5040019,
  5040020,
  5040022,
  5040025,
  5040026,
  5040028,
  5040029,
  5040030,
  5040031,
  5040033,
  5040035,
  5040036,
  5040037,
  5050009,
  5050013,
  5050014,
  5050015,
  5050016,
  5050017,
  5050018,
  5050020,
  5050022,
  5050024,
  5050025,
  5050026,
  5050027,
  5050028,
  5050032,
  5050033,
  5050034,
  5050036,
  5050037,
  5050038,
  5050039,
  5060009,
  5060013,
  5060015,
  5060016,
  5060017,
  5060018,
  5060019,
  5060020,
  5060021,
  5060024,
  5060025,
  5060026,
  5060027,
  5060029,
  5060030,
  5060033,
  5060034,
  5060037,
  5060040,
  5060041,
  5060042,
  5060044,
  5060045,
  5070009,
  5070017,
  5070019,
  5070020,
  5070021,
  5070023,
  5070024,
  5070025,
  5070026,
  5070027,
  5070028,
  5070029,
  5070030,
  5070032,
  5070033,
  5070035,
  5070036,
  5070039,
  5070040,
  5070042,
  5070043,
  5080007,
  5080011,
  5080012,
  5080013,
  5080014,
  5080018,
  5080020,
  5080022,
  5080025,
  5080026,
  5080028,
  5080029,
  5080031,
  5090001,
  5090002,
  5090003,
  5090004,
  5090005,
  5090007,
  5090008,
  5090009,
  5090010,
  5090011,
  5090013,
  5090014,
  5090015,
  5090016,
  5090017,
  5090018,
  5090019,
  5090020,
  5090021,
  5090023,
  5090024,
  5090025,
  5090026,
  5090027,
  5090028,
  5090029,
  5090030,
  5090031,
  5090032,
  5090034,
  5090035,
  5090038,
  5090039,
  5090040,
  5090041,
  5090042,
  5090044,
  5090045,
  5090047,
  5090048,
  5090049,
  5100001,
  5100002,
  5100004,
  5100005,
  5100006,
  5100009,
  5100010,
  5100011,
  5100012,
  5100013,
  5100015,
  5100016,
  5100017,
  5100018,
  5100019,
  5100020,
  100001,
  100002,
  100003,
  100004,
  100005,
  100006,
  100007,
  100008,
  100009,
  100010,
  100011,
  300001,
  300002,
  200001,
  200002,
  200003,
  200004,
  200005,
  200006];
const equipmentNames = {
  100001: "Equipment 1",
  100002: "Equipment 2",
};

const itemIds = [999000, 999001, 999003, 999004, 999005, 999002, 999006, 999008, 999009, 20003, 20004, 20067];
const itemNames = ["Premium Ticket", "1-Pull Summoning Ticket", "10-Pull Summoning Ticket",
                  "1-Pull Armament Ticket", "1-Pull Armament Ticket", "Dream Ticket Summon", "Dream Ticket Armament", "4&5-Star Ticket", "Gift Ticket",
                  "4 & 5-Star Exclusive Ticket", "5-Star Exclusive Ticket", "4 & 5-Star Exclusive & Limited Ticket"];

const itemIdsConsume = [101, 102, 106, 901, 50104, 50105, 50106, 50107];
const itemNamesConsume = ["Staminade Swig", "Staminade Flask", "Staminade Decanter","Nimbus' Marshmallows 2021", "Cacao Fruit", "Parfait's Handmade Chocolate", "Alk's Macaron 2022", "Polar Bear Cookies"];

const itemIdsWrightpiece = [100000];
const itemNamesWrightpiece = ["Wrightpiece"];

const itemIdsStarSpeck = [990008];
const itemNamesStarSpeck = ["Star Speck"];

const userIds = ["name", "comment","rank_point", "free_vmoney", "vmoney", "free_mana", "paid_mana", "stamina", "stamina_heal_time", "boss_boost_point", "boost_point" ];
const userNames = ["Name", "Bio", "Rank EXP", "Lodestar Beads", "Paid Lodestar Beads", "Mana", "Paid Mana", "Stamina (Stored)", "Stamina Regen Rate", "Daily Boss Boost", "Daily Boost" ];

let itemList = document.getElementById("item-list");
let itemListConsume = document.getElementById("item-list-consume");
let itemListWrightpiece = document.getElementById("item-list-Wrightpiece");
let itemListStarSpeck = document.getElementById("item-list-StarSpeck");

let saveButton = document.getElementById("save-button");
let fileInput = document.getElementById("file-input");
let userInfoList = document.getElementById("user-info");

const defaultEquipment = {
  enhancement_level: 0,
  level: 1,
  protection: false,
  stack: 0
};
let temporaryData = {
  item_list: {},
  user_info: {},
  user_equipment_list: {}
};



function createEquipmentButtons() {
  const buttonContainer = document.getElementById('equipmentButtons');
  buttonContainer.innerHTML = '';

  equipmentIds.forEach(equipmentId => {
    const button = document.createElement('button');
    const image = document.createElement('img');
    image.src = `Equipment/${equipmentId}.png`;
    image.alt = `Equipment ${equipmentId}`;
    button.appendChild(image);
    button.addEventListener('click', () => addNewEquipment(equipmentId));
    buttonContainer.appendChild(button);
  });
}


const addEquipmentButton = document.getElementById('addEquipmentButton');
addEquipmentButton.addEventListener('click', () => {
  const newEquipment = { ...defaultEquipment };
  temporaryData.user_equipment_list[equipmentId] = newEquipment;
});
function addNewEquipment(equipmentId) {
  const newEquipment = { ...defaultEquipment };
  temporaryData.user_equipment_list[equipmentId] = newEquipment;
}




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
    itemList.style.marginTop = "10px";
  }
}

function generateConsumeItemList() {
  itemListConsume.innerHTML = "";
  for (let i = 0; i < itemIdsConsume.length; i++) {
    //const itemId = itemIdsConsume[i];
    const itemName = itemNamesConsume[i];
    const itemLabel = document.createElement("label");
    itemLabel.textContent = `${itemName}:`;
    const entry = document.createElement("input");
    entry.type = "number";
    itemListConsume.appendChild(itemLabel);
    itemListConsume.appendChild(entry);
    itemListConsume.style.marginTop = "10px";
  }
}

function generateWrightpieceItemList() {
  itemListWrightpiece.innerHTML = "";
  for (let i = 0; i < itemIdsWrightpiece.length; i++) {
    const itemName = itemNamesConsume[i];
    const itemLabel = document.createElement("label");
    itemLabel.textContent = `${itemName}:`;
    const entry = document.createElement("input");
    entry.type = "number";

    const itemImage = document.createElement("img");
    itemImage.src = `Items/${itemIdsWrightpiece}.png`;
    itemImage.style.width = "30px";
    itemImage.style.marginLeft = "10px";
    itemImage.style.marginTop = "5px";
    itemImage.classList.add("item-image");

    itemListWrightpiece.appendChild(itemImage);
    //itemListWrightpiece.appendChild(itemLabel);
    itemListWrightpiece.appendChild(entry);
    itemListWrightpiece.style.marginTop = "10px";
  }
}

function generateStarSpeckItemList() {
  itemListStarSpeck.innerHTML = "";
  for (let i = 0; i < itemIdsStarSpeck.length; i++) {
    const itemName = itemNamesConsume[i];
    const itemLabel = document.createElement("label");
    itemLabel.textContent = `${itemName}:`;
    const entry = document.createElement("input");
    entry.type = "number";

    const itemImage = document.createElement("img");
    itemImage.src = `Items/${itemIdsStarSpeck}.png`;
    itemImage.style.width = "40px";
    itemImage.style.marginLeft = "10px";
    itemImage.style.marginTop = "10px";
    itemImage.classList.add("item-image");

    itemListStarSpeck.appendChild(itemImage);
    //itemListStarSpeck.appendChild(itemLabel);
    itemListStarSpeck.appendChild(entry);
    itemListStarSpeck.style.marginTop = "10px";
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
    userInfoLabel.style.marginTop = "10px";
    userInfoInput.style.marginTop = "10px";

  }
}

function validateAndSave() {
  const itemValues = [];
  const userValues = [];
  const consumeItemValues = [];
  const WrightpieceItemValues = [];
  const StarSpeckItemValues = [];
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
  ///Consume
  for (const entry of itemListConsume.querySelectorAll("#item-list-consume input")) {
    const value = parseFloat(entry.value);
    if (isNaN(value)) {
      alert("Invalid input! Please enter a valid number for each consumable item.");
      return;
    }

    if (Number.isInteger(value)) {
      consumeItemValues.push(value);
    } else {
      alert("Decimal values are not allowed. Please enter whole numbers for consumable item amounts.");
      return;
    }
  }
  //////
  ///Wrightpiece
  for (const entry of itemListWrightpiece.querySelectorAll("#item-list-Wrightpiece input")) {
    const value = parseFloat(entry.value);
    if (isNaN(value)) {
      alert("Invalid input! Please enter a valid number for each consumable item.");
      return;
    }

    if (Number.isInteger(value)) {
      WrightpieceItemValues.push(value);
    } else {
      alert("Decimal values are not allowed. Please enter whole numbers for consumable item amounts.");
      return;
    }
  }
  //////
  ///StarSpeck
  for (const entry of itemListStarSpeck.querySelectorAll("#item-list-StarSpeck input")) {
    const value = parseFloat(entry.value);
    if (isNaN(value)) {
      alert("Invalid input! Please enter a valid number for each consumable item.");
      return;
    }

    if (Number.isInteger(value)) {
      StarSpeckItemValues.push(value);
    } else {
      alert("Decimal values are not allowed. Please enter whole numbers for consumable item amounts.");
      return;
    }
  }
  //////
  for (const entry of document.querySelectorAll("#user-info input")) {
    userValues.push(entry.value);
  }

  saveData(itemValues, userValues, consumeItemValues, WrightpieceItemValues, StarSpeckItemValues);
}


function saveData(itemValues, userValues, consumeItemValues, WrightpieceItemValues, StarSpeckItemValues, equipmentList, ) {
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

      for (let i = 0; i < itemIdsConsume.length; i++) {
        existingData.item_list[itemIdsConsume[i]] = consumeItemValues[i];
      }
      for (let i = 0; i < itemIdsWrightpiece.length; i++) {
        existingData.item_list[itemIdsWrightpiece[i]] = WrightpieceItemValues[i];
      }
      for (let i = 0; i < itemIdsStarSpeck.length; i++) {
        existingData.item_list[itemIdsStarSpeck[i]] = StarSpeckItemValues[i];
      }
      existingData.item_list = { ...existingData.item_list, ...temporaryData.item_list };
      existingData.user_info = { ...existingData.user_info, ...temporaryData.user_info };
      existingData.user_equipment_list = { ...existingData.user_equipment_list, ...temporaryData.user_equipment_list };

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
      const consumeItemEntries = itemListConsume.querySelectorAll("#item-list-consume input");
      for (let i = 0; i < itemIdsConsume.length; i++) {
        const itemId = itemIdsConsume[i];
        consumeItemEntries[i].value = data.item_list[itemId] !== undefined ? data.item_list[itemId] : 0;
      }
      const WrightpieceItemEntries = itemListWrightpiece.querySelectorAll("#item-list-Wrightpiece input");
      for (let i = 0; i < itemIdsWrightpiece.length; i++) {
        const itemId = itemIdsWrightpiece[i];
        WrightpieceItemEntries[i].value = data.item_list[itemId] !== undefined ? data.item_list[itemId] : 0;
      }
      const StarSpeckItemEntries = itemListStarSpeck.querySelectorAll("#item-list-StarSpeck input");
      for (let i = 0; i < itemIdsStarSpeck.length; i++) {
        const itemId = itemIdsStarSpeck[i];
        StarSpeckItemEntries[i].value = data.item_list[itemId] !== undefined ? data.item_list[itemId] : 0;
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

//Top Web Buttons
function ArmamentButton() {
  const equipmentButtons0 = document.getElementById('equipmentButtons');
  const itemList0 = document.getElementById('item-list');
  const itemList1 = document.getElementById('item-list-consume');
  const itemList2 = document.getElementById('item-list-Wrightpiece');
  const itemList3 = document.getElementById('item-list-StarSpeck');
  const ItemTicket = document.getElementById('item-list-cTic');
  const ItemConsume = document.getElementById('item-list-consume-cTic');
  const ItemWrightpiece = document.getElementById('item-list-Wrightpiece-cTic');
  const ItemStarSpeck = document.getElementById('item-list-StarSpeck-cTic');
  const IC = document.getElementById('IC');
  const ICB1 = document.getElementById('ICB1');
  const ICB2 = document.getElementById('ICB2');



  if (equipmentButtons0) {
    equipmentButtons0.style.display = 'block';
  }
  if (itemList0) {
    itemList0.style.display = 'none';
    itemList1.style.display = 'none';
    itemList2.style.display = 'none';
    itemList3.style.display = 'none';
    ItemTicket.style.display = 'none';
    ItemConsume.style.display = 'none';
    ItemWrightpiece.style.display = 'none';
    ItemStarSpeck.style.display = 'none';
    IC.style.display = 'none';
    ICB1.style.display = 'none';
    ICB2.style.display = 'none';
  }
}
function ItemButton() {
  const equipmentButtons0 = document.getElementById('equipmentButtons');
  const itemList0 = document.getElementById('item-list');
  const itemList1 = document.getElementById('item-list-consume');
  const itemList2 = document.getElementById('item-list-Wrightpiece');
  const itemList3 = document.getElementById('item-list-StarSpeck');
  const ItemTicket = document.getElementById('item-list-cTic');
  const ItemConsume = document.getElementById('item-list-consume-cTic');
  const ItemWrightpiece = document.getElementById('item-list-Wrightpiece-cTic');
  const ItemStarSpeck = document.getElementById('item-list-StarSpeck-cTic');
  const IC = document.getElementById('IC');
  const ICB1 = document.getElementById('ICB1');
  const ICB2 = document.getElementById('ICB2');

  if (itemList0) {
    itemList0.style.display = 'grid';
    itemList1.style.display = 'grid';
    ItemTicket.style.display = 'grid';
    ItemConsume.style.display = 'grid';
    itemList2.style.display = 'grid';
    itemList3.style.display = 'grid';
    ItemWrightpiece.style.display = 'grid';
    ItemStarSpeck.style.display = 'grid';
    IC.style.display = 'flex';
    ICB1.style.display = 'flex';
    ICB2.style.display = 'flex';
  }
  if (window.innerWidth <= 1098) {
    if (itemList0) {
      itemList0.style.display = 'grid';
      itemList1.style.display = 'grid';
      ItemTicket.style.display = 'grid';
      ItemConsume.style.display = 'grid';
      itemList2.style.display = 'grid';
      itemList3.style.display = 'grid';
      ItemWrightpiece.style.display = 'grid';
      ItemStarSpeck.style.display = 'grid';
      IC.style.display = 'grid';
      ICB1.style.display = 'flex';
      ICB2.style.display = 'flex';
    }
  }

  if (equipmentButtons0) {
    equipmentButtons0.style.display = 'none';
  }
}
function UnitsButton() {
  const equipmentButtons0 = document.getElementById('equipmentButtons');
  const itemList0 = document.getElementById('item-list');
  const itemList1 = document.getElementById('item-list-consume');
  const ItemTicket = document.getElementById('item-list-cTic');
  const ItemConsume = document.getElementById('item-list-consume-cTic');

  if (itemList0) {
    itemList0.style.display = 'none';
    itemList1.style.display = 'none';
    ItemTicket.style.display = 'none';
    ItemConsume.style.display = 'none';
  }
  if (equipmentButtons0) {
    equipmentButtons0.style.display = 'none';
  }
}
function ContentButton() {
  const equipmentButtons0 = document.getElementById('equipmentButtons');
  const itemList0 = document.getElementById('item-list');
  const itemList1 = document.getElementById('item-list-consume');
  const ItemTicket = document.getElementById('item-list-cTic');
  const ItemConsume = document.getElementById('item-list-consume-cTic');

  if (itemList0) {
    itemList0.style.display = 'none';
    ItemTicket.style.display = 'none';
    itemList1.style.display = 'none';
    ItemConsume.style.display = 'none';
  }
  if (equipmentButtons0) {
    equipmentButtons0.style.display = 'none';
  }
}


















function StarPoint(){
  window.location.href = 'http://localhost:8000/';
}


generateUserInfoList()
generateConsumeItemList()
generateItemList();
generateWrightpieceItemList()
generateStarSpeckItemList()
createEquipmentButtons();
fileInput.addEventListener("change", loadFile);
saveButton.addEventListener("click", validateAndSave);