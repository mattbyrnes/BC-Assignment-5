// document.getElementById('content').classList.add('fade');
const headerUI = ('<div id="headerCon"><p>The Minimalists Directory.</p></div>');
const inputUI = ('<div id="inputCon"></div>');
const outputUI = ('<div id="outputCon"></div>');
const viewReset = event => {
  $('#content').empty();
  $('#content').html(headerUI + inputUI + outputUI);
  $('#content').addClass('fade');
}

const renderInput = function (htmlStr) {
  $('#inputCon').html(htmlStr);
}

const renderOutput = function (htmlStr) {
  $('#outputCon').html(htmlStr);
}

const runCommand = function (e) {
  e.preventDefault();

  switch (state.command) {

    case 'runPrint':  // PRINT //
      let outputTxt = '';
      state.employeeList.forEach(e => outputTxt += `<p>Name: ${e.name}<p/><p>Office: ${e.officeNum}<p/><p>Phone: ${e.phoneNum}</p><hr />`);
      state.render(outputTxt);
      break;

    case 'runVerify': // VERIFY //
      renderOutput('Employee Not Found');
      let inputVerify = document.querySelectorAll('#userInput')[0].value;
      if (state.employeeList.find(e => e.name.toLowerCase() === inputVerify.toLowerCase())) {
        renderOutput(`<p>Yes, <hili>${inputVerify}</hili> is an employee.</p><p>Employee Found</p>`)
      }
      break;

    case 'runLookup': // LOOKUP //
      let inputLookup = document.querySelectorAll('#userInput')[0].value;
      const lookupFound = state.employeeList.find(e => e.name.toLowerCase() === inputLookup.toLowerCase());
      lookupFound ? state.render(`<p>Name: ${lookupFound.name}<p/><p>Office: ${lookupFound.officeNum}</p><p>Phone: ${lookupFound.phoneNum}</p>`) : state.render('Employee Not Found');
      break;

    case 'runContains': // CONTAINS //
      let inputContains = document.querySelectorAll('#userInput')[0].value;
      let containsMsg = '';
      if (inputContains) {
        state.employeeList.filter(e => e.name.toLowerCase().includes(inputContains.toLowerCase()))
          .forEach(e => containsMsg += `<p>Nome: ${e.name}</p><p>Office: ${e.officeNum}</p><p>Phone: ${e.phoneNum}</p><hr />`);
        state.render(containsMsg || 'No Employee Found');
      } else {
        state.render('No Employee Found');
      }
      break;

    /////////////////////

    case 'runUpdate': // UPDATE //
      let inputUpdate = document.querySelectorAll('#userInput')[0].value;
      const updateFound = state.employeeList.find(e => e.name.toLowerCase() === inputUpdate.toLowerCase());
      if (inputUpdate() && updateFound !== undefined) {
        if (state.inputOfficeNum.val()) {
          updateFound.officeNum = state.inputOfficeNum.val();
        }
        if (state.inputPhoneNum.val()) {
          updateFound.phoneNum = state.inputPhoneNum.val();
        }
        state.render(`<p>${updateFound.name}<br/>${updateFound.officeNum}<br/>${updateFound.phoneNum}</p>`);
      } else {
        state.render('No Employee Found');
      }
      break;

    ///////////////////////

    case 'runAdd': // ADD //
      let newName = document.querySelectorAll('#userInputName')[0].value;
      let newOffice = document.querySelectorAll('#userInputOffice')[0].value;
      let newPhone = document.querySelectorAll('#userInputPhone')[0].value;
      var employeeAdd = { name: newName, officeNum: newOffice, phoneNum: newPhone };
      state.employeeList.push(employeeAdd);
      state.render(`${newName} has been added.<br /><br /><p>${newName.name}<br/>${newOffice.officeNum}<br/>${newPhone.phoneNum}</p>`);
      break;

    case 'runDelete': // DELETE //
      let inputDelete = document.querySelectorAll('#userInput')[0].value;
      const removeMatch = state.employeeList.find(e => e.name.toLowerCase() === inputDelete.toLowerCase());
      if (inputDelete() && removeMatch) {
        const remove = state.employeeList.splice(state.employeeList.findIndex(e => e.name.toLowerCase() === inputDelete.toLowerCase()), 1);
        state.render(`You have removed ${inputDelete}.`);
      } else {
        state.render('Employee Not Found');
      }
  }
  clearInput();
}

const clearInput = function () {
  state.input.val('');
  state.inputOfficeNum.val('');
  state.inputPhoneNum.val('');
}

const print = function () {
  state.command = 'runPrint';
  viewReset();
  renderInput(`
  <h1>Print</h1>
  <p><hili>PRINT</hili> all employees</p><br />
  <button id="button" type="submit">Print</button>
  `);
  $('#button').on('click', runCommand);
};

const verify = function () {
  state.command = 'runVerify';
  viewReset();
  renderInput(`
  <h1>Verify</h1>
  <p>Enter a name to <hili>VERIFY<hili></p>
  <input id="userInput" type="text">
  <button id="button"><i class="fa fa-search"></i></button>
  `);
  $('#button').on('click', runCommand);
};

const lookup = function () {
  state.command = 'runLookup';
  viewReset();
  renderInput(`
  <h1>Lookup</h1>
  <p>Enter a name to <hili>LOOKUP</hili></p>
  <input id="userInput" type="text">
  <button id="button"><i class="fa fa-search"></i></button>
  `);
  $('#button').on('click', runCommand);
}

const contains = function () {
  state.command = 'runContains';
  viewReset();
  renderInput(`
  <h1>Contains</h1>
  <p>The name <hili>CONTAINS</hili> what letters?</p>
  <input id="userInput" type="text">
  <button id="button"><i class="fa fa-search"></i></button>
  `);
  $('#button').on('click', runCommand);
}

const update = function () {
  state.command = 'runUpdate';
  viewReset();
  renderInput(`
  <h1>Update</h1>
  <p>Which employee would you like to <hili>UPDATE<hili>?</p>
  <input id="userInput" type="text">
  <button id="button"><i class="fa fa-search"></i></button>
  `);
  $('#button').on('click', runCommand);
}

const add = function () {
  state.command = 'runAdd';
  viewReset();
  renderInput(`
  <h1>Add</h1>
  <p><hili>ADD</hili> an employee to the directory.</p>
  <p>Name: <input id="userInputName" type="text"></p>
  <p>Office: <input id="userInputOffice" type="text"></p>
  <p>Phone: <input id="userInputPhone" type="text"></p>
  <button id="button"><i class="fa fa-plus"></i></button>
  `);
  $('#button').on('click', runCommand);
}

const del = function () {
  state.command = 'runDelete';
  viewReset();
  renderInput(`
  <h1>Delete</h1>
  <p><hili>DELETE</hili> an employee to the directory.</p>
  <input id="userInput" type="text"></p>
  <button id="button"><i class="fa fa-minus"></i></button>
  `);
  $('#button').on('click', runCommand);
  
}

$('#button').on('click', runCommand);

$('#print').on('click', print);
$('#verify').on('click', verify);
$('#lookup').on('click', lookup);
$('#contains').on('click', contains);
$('#update').on('click', update);
$('#add').on('click', add);
$('#delete').on('click', del);
