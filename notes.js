 // const addEmployee = {};
      // if (state.input.val() && state.inputOfficeNum.val() && state.inputPhoneNum.val()) {
      //   addEmployee.name = state.input.val().charAt(0).toUpperCase() + state.input.val().slice(1);;
      //   addEmployee.officeNum = state.inputOfficeNum.val();
      //   addEmployee.phoneNum = state.inputPhoneNum.val();
      //   state.employeeList.push(addEmployee);
      //   state.render(`<p>${addEmployee.name}<br/>${addEmployee.officeNum}<br/>${addEmployee.phoneNum}</p>`);
      // } else {
      //   state.render('Form Incomplete ')
      // }

      




      const clearInput = function () {
        state.input.val('');
        state.inputOfficeNum.val('');
        state.inputPhoneNum.val('');
      }

       // clearInput();