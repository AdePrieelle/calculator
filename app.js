const calculator = () => {

  const add = (a, b) => {
    return (+a + +b);
  };

  const subtract = (a, b) => {
    return (a - b);
  };

  const multiply = (a, b) => {
    return (a * b);
  };

  const divide = (a, b) => {
    if (b == "0") {
      return "Can't divide by zero"
    } else {
      return (a / b);
    }
  };

  const operate = (operator, a, b) => {
    if(operator === "+") {
      return add(a, b);
    } else if (operator === "-") {
      return subtract(a, b);
    } else if (operator === "*") {
      return multiply(a, b);
    } else if (operator === "/") {
      return divide(a, b);
    }
  };

  const populateDisplay = () => {
    const buttonsValue = document.querySelectorAll(".btnToDisplay");
    const displayValue = document.querySelector(".afterOperator");
    
    buttonsValue.forEach((btn) => {
      btn.addEventListener("click", function () {

        displayValue.textContent += this.textContent;
        displayValue.textContent = Number(displayValue.textContent).toString();

      });
    });

  };

  const operatorToDisplay = () => {

    const operatorButton = document.querySelectorAll(".operatorBtn");        
    
    operatorButton.forEach((btn) => {

      btn.addEventListener("click", function() {

        const beforeDisplayValue = document.querySelector(".beforeOperator");
        const operatorValue = document.querySelector(".operatorSign");
        const afterDisplayValue = document.querySelector(".afterOperator");

        //move number before operator to upper display
        beforeDisplayValue.textContent = afterDisplayValue.textContent;
        //display the operator from the button which is clicked
        operatorValue.textContent = this.textContent;
        //empty the number after the operator on the lower display
        afterDisplayValue.textContent = "0";
  
      });
    });
  };

  const doTheCalculation = () => {

    const equalsButton = document.querySelector(".equals");
    
    equalsButton.addEventListener("click", function() {

      const beforeTheDisplayValue = document.querySelector(".beforeOperator");
      const operatorDisplayValue = document.querySelector(".operatorSign");
      const afterTheDisplayValue = document.querySelector(".afterOperator");

      const beforeOperatorCalc = beforeTheDisplayValue.textContent;
      const operatorSignCalc = operatorDisplayValue.textContent;
      const afterOperatorCalc = afterTheDisplayValue.textContent;

      const calculatedValue = operate(operatorSignCalc, beforeOperatorCalc, afterOperatorCalc);
      beforeTheDisplayValue.textContent = "";
      operatorDisplayValue.textContent = "";
      //if the operate function cant do the calculation with all parameters filled in
      //then we keep the upper (results) number the same
      if (isNaN(+calculatedValue)) {
        return;
      } else {
        afterTheDisplayValue.textContent = `${calculatedValue}`;
      }
    });
  };

  const clearDisplay = () => {

    const clearButton = document.querySelector(".clear");
    const beforeOperatorClear = document.querySelector(".beforeOperator");
    const operatorClear = document.querySelector(".operatorSign");
    const afterOperatorClear = document.querySelector(".afterOperator");

    clearButton.addEventListener("click", function() {
      //make beforeOperator class an empty string again
      beforeOperatorClear.textContent = "\u00A0";
      //make operatorSign class an empty string again
      operatorClear.textContent = "\u00A0";
      //start with zero again for a new calculation
      afterOperatorClear.textContent = "0";
    });
  };

  const undoNumber = () => {

    const undoButton = document.querySelector(".backspace");
    const afterOperatorClear = document.querySelector(".afterOperator");

    undoButton.addEventListener("click", function() {
      afterOperatorClear.textContent = afterOperatorClear.textContent.slice(0, -1);      
    });
  };

  const addDot = () => {

    const dotButton = document.querySelector(".dot");
    const afterOperatorClear = document.querySelector(".afterOperator");
    
    dotButton.addEventListener("click", function() {

      //disable decimal button if there is already one on screen
      if (afterOperatorClear.textContent.includes(".")) {
        return;
      } else {
        afterOperatorClear.textContent = afterOperatorClear.textContent + ".";
      }
    });
  };


  /* this function can be used to limit the amount of numbers on the display
  add this function just right after the textContent of the display is updated

  const maxNumbers = () => {

    const afterOperatorClear = document.querySelector(".afterOperator");
    const maxNumberlength = 15;

    afterOperatorClear.textContent = afterOperatorClear.textContent.substring(0, maxNumberlength);

  };
  */

  /*
  When clicking on an operator it should put the afterOperator.textcontent
  towards the beforeOperator.textcontent which will be used as a in the operate function
  then the afterOperator.textcontent will be used as b in the operate function
  the operator will be displayed as textcontent in the display aswell
  and used in the operate function
  */

  //call the functions
  populateDisplay();
  operatorToDisplay();
  doTheCalculation();
  clearDisplay();
  undoNumber();
  addDot();
  
  
  
};
//call the calculator
calculator();