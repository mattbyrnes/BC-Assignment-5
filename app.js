//Print
function runPrint() {
  $('#output').empty();
  for (i = 0; i < employeeList.length; i++) {
    $('#output').append(`<p>Name: ${employeeList[i].name}</p>`);
    $('#output').append(`<p>Office Number: ${employeeList[i].officeNum}</p>`);
    $('#output').append(`<p>Phone Number: ${employeeList[i].phoneNum}</p><br />`);
  }
};


const viewPrint = event => {
  // $('#content').empty();
  $('#input').append(`
      <h1>Print</h1>
      <p>PRINT all employees</p>
      <button id="submit-print">Print</button>
    `);
    $('#submit-print').on('click', runPrint);
};
$('#menu-print').on('click', viewPrint);


//Verify
const viewVerify = event => {
  $('#content, #output').empty();
  $('#content').append(`
      <h1>Verify</h1>
      <p>Enter the name to VERIFY</p>
      <input id="inputName" type="text">
      <button id="submit-verify">Verify</button>
    `);
  function runVerify() {
    $('#output').empty();
    $('#output').append(`<p>No, this is not an employee.</p>`);
    let userInput = document.querySelectorAll('#inputName')[0].value;
    for (i = 0; i < employeeList.length; i++) {
      if (userInput === employeeList[i].name.toLowerCase()) {
        $('#output').empty();
        $('#output').append(`<p>Yes, ${userInput} is an employee.</p>`);
      }
    }
  };
  $('#submit-verify').on('click', runVerify);
};
$('#menu-verify').on('click', viewVerify);

//Lookup
const viewLookup = event => {
  $('#content, #output').empty();
  $('#content').append(`
      <h1>Lookup</h1>
      <p>Enter the name to LOOKUP</p>
      <input id="inputName" type="text">
      <button id="submit-lookup">Lookup</button>
    `);
  function runLookup() {
    $('#output').append(`<p>Employee Not Found</p>`);
    let userInput = document.querySelectorAll('#inputName')[0].value;
    for (let i = 0; i < employeeList.length; i++) {
      if (userInput === employeeList[i].name.toLowerCase()) {
        $('#output').empty();
        $('#output').append(`<p>Name: ${employeeList[i].name}</p>`);
        $('#output').append(`<p>Office: ${employeeList[i].officeNum}</p>`);
        $('#output').append(`<p>Phone: ${employeeList[i].phoneNum}</p>`);
      }
    }
  }
  $('#submit-lookup').on('click', runLookup);
};
$('#menu-lookup').on('click', viewLookup);

//Contains
const viewContains = event => {
  $('#content, #output').empty();
  $('#content').append(`
      <h1>Contains</h1>
      <p>Employee name CONTAINS what letters?</p>
      <input id="inputName" type="text">
      <button id="submit-contains">Contains</button>
    `);
  function runContains() {
    $('#output').append(`<p>Employee Not Found</p>`);
    $('#output').empty();
    let userInput = document.querySelectorAll('#inputName')[0].value;
    for (i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name.toLowerCase().includes(userInput)) {
        $('#output').append(`<p>Name: ${employeeList[i].name}</p>`);
        $('#output').append(`<p>Office Number: ${employeeList[i].officeNum}</p>`);
        $('#output').append(`<p>Phone Number: ${employeeList[i].phoneNum}</p><hr />`);
      }
    }
  }
  $('#submit-contains').on('click', runContains);
};
$('#menu-contains').on('click', viewContains);

//Update//////////////////////////

//Add Section

const runAdd = event => {
  let nameAdd = document.querySelectorAll('#newName')[0].value;
  let officeAdd = document.querySelectorAll('#newOffice')[0].value;
  let phoneAdd = document.querySelectorAll('#newPhone')[0].value;
  var employeeAdd = { name: nameAdd, officeNum: officeAdd, phoneNum: phoneAdd };
  employeeList.push(employeeAdd);
  $('#output').empty();
  $('#output').append(`${nameAdd} has been added.<br /><br />`);
  runPrint();
};

const viewAdd = event => {
  $('#content, #output').empty();
  $('#content').append(`
      <h1>Add</h1>
      <p>ADD a new employee</p>
      <p>Name: <input id="newName" type="text"></p>
      <p>Office: <input id="newOffice" type="text"></p>
      <p>Phone: <input id="newPhone" type="text"></p>
      <button id="submit-add">Add</button></p>
    `);
    $('#submit-add').on('click', runAdd);
};
$('#menu-add').on('click', viewAdd);


//Delete
function runDelete() {
  let userInput = document.querySelectorAll('#deleteName')[0].value;
  for (i = 0; i < employeeList.length; i++) {
    if (userInput === employeeList[i].name.toLowerCase()) {
      employeeList.splice(i, 1);
    }
    $('#message').append(`${userInput} has been deleted.`);
    runPrint();
  }
}

const viewDelete = event => {
  $('#content, #output').empty();
  $('#content').append(`
      <h1>Delete</h1>
      <p>DELETE an employee</p>
      <input id="deleteName" type="text">
      <button id="submit-delete">Delete</button>
    `);
  $('#submit-delete').on('click', runDelete);
};

$('#menu-delete').on('click', viewDelete);

