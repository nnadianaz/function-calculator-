 console.log("**************** CALCULATOR ****************")
    
    function calculator() {

        while (true) {

            // while loop is used to iterate operations till we exit
            let operation = prompt('Choose the operation: +, -, *, / or "exit" to quit').toLowerCase();
            
            let firstValue;
            let secondValue;
            let result;
        
        switch (operation) {


            case "+":
                firstValue = parseFloat(prompt("Please enter first number: "));
                secondValue = parseFloat(prompt("Please enter second number: "));
                result = firstValue +  secondValue;
                alert(`Addition: ${result}`);
                console.log(`Addition: ${result}`);
                break;
        
            case "-":
                firstValue = parseFloat(prompt("Please enter first number: "));
                secondValue = parseFloat(prompt("Please enter second number: "));
                result = firstValue - secondValue;
                alert(`Subtraction: ${result}`);
                console.log(`Subtraction: ${result}`);
                    break; 
                    
            case "*":
                firstValue = parseFloat(prompt("Please enter first number: "));
                secondValue = parseFloat(prompt("Please enter second number: "));
                result = firstValue * secondValue;
                alert(`Multiplication: ${result}`);
                console.log(`Multiplication: ${result}`);
                            break;
                            
            case "/":
                firstValue = parseFloat(prompt("Please enter first number: "));
                secondValue = parseFloat(prompt("Please enter second number: "));
                //  if condition apply to check zero value in second number
                if (secondValue === 0) {
                    console.log("Error: Division by zero is not allowed.");
                }
                else {
                result = firstValue / secondValue;
                alert(`Division: ${result}`);
                console.log(`Division: ${result}`);
                }
                    break;

            case "exit":
                console.log(`Exiting calculator`);
                    return;
        
            default:
                alert("Invalid operation selected!");
                break;
        }
        
        }
    }
    console.log(calculator());