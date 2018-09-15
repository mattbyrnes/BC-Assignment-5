//Functions 

const inputCommand = input('Enter Command');


const commandList = ['print', 'verify', 'lookup', 'contains', 'update', 'add', 'delete'];

render('------------ OUTPUT --------------')

for (let i = 0; i < commandList.length; i++) {

  if (inputCommand === commandList[0]) {
    print();
  }

  else if (inputCommand === commandList[1]) {
    verify();
  }

  else if (inputCommand === commandList[2]) {
    lookup();
  }

  else if (inputCommand === commandList[3]) {
    contains();
  }

  else if (inputCommand === commandList[4]) {
    update();
  }

  else if (inputCommand === commandList[5]) {
    addEmp();
  }

  else if (inputCommand === commandList[6]) {
    deleteEmp();
  }

};

//Print

function print() {
  render(`Total Number of Employees: ${employeeList.length}`);
  render(`-------------------------------------------------------`);
  for (i = 0; i < employeeList.length; i++) {
    render(`Name: ${employeeList[i].name}`);
    render(`Office Number: ${employeeList[i].officeNum}`);
    render(`Phone Number: ${employeeList[i].phoneNum}`);
    render(`-------------------------------------------------------`);
  }
}

//Verify

function verify() {
  const inputName = prompt('Enter Employee Name').toLowerCase();
  for (i = 0; i < employeeList.length; i++) {
    if (inputName === employeeList[i].name.toLowerCase()) {
      render(`True`);
    } else {
      render(`False`);
    }
  }
}

//Lookup

function lookup() {
  const inputName = prompt('Enter Employee Name').toLowerCase();
  for (i = 0; i < employeeList.length; i++) {
    if (inputName === employeeList[i].name.toLowerCase()) {
      render(`Name: ${employeeList[i].name}`);
      render(`Office Number: ${employeeList[i].officeNum}`);
      render(`Phone Number: ${employeeList[i].phoneNum}`);
    } else {
      render(`Employee Not Found`);
    }
  }
}

//Contains

function contains() {
  const inputName = prompt('Enter Characters').toLowerCase();
  for (i = 0; i < employeeList.length; i++) {
    if (employeeList[i].name.toLowerCase().includes(inputName)) {
      render(`Name: ${employeeList[i].name}`);
      render(`Office Number: ${employeeList[i].officeNum}`);
      render(`Phone Number: ${employeeList[i].phoneNum}`);
      render(`-------------------------------------------------------`);
    }
  }
}

//Update

function update() {
  const inputName = prompt('Enter Employee Name').toLowerCase();

  for (i = 0; i < employeeList.length; i++) {
    if (inputName === employeeList[i].name.toLowerCase()) {

      const inputItem = prompt('Change Name, Office or Phone?').toLowerCase();

      if (inputItem === 'name');
      const newName = prompt('Enter New Name').toLowerCase();
      
        employeeList[i][inputItem] = newName;
        render(`name: ${employeeList[i].name}`);
        render(`officeNum: ${employeeList[i].officeNum}`);
        render(`phoneNum: ${employeeList[i].phoneNum}`);
      }
    }
  }

//Add

function addEmp() {
  const nameAdd = prompt('Enter Employee Name');
  const officeAdd = prompt('Enter Office Number');
  const phoneAdd = prompt('Enter Phone Number');
  var employeeAdd = { name: nameAdd, officeNum: officeAdd, phoneNum: phoneAdd };
  employeeList.push(employeeAdd);
  render(`${nameAdd} has been added.`);
  render(`-------------------------------------------------------`);
  print();
}
  
//Delete

function deleteEmp() {
  const nameDelete = prompt('Enter Employee Name').toLowerCase();
  for (i = 0; i < employeeList.length; i++) {
    if (nameDelete === employeeList[i].name.toLowerCase()) {
      employeeList.splice(i, 1);
    }
  }
  render(`${nameQuery} has been successfully removed from employee list!`);
  render(`-------------------------------------------------------`);
  print()
}
