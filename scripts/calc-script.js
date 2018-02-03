$(document).ready(function() {

    /*
    ==============================
    ====== GLOBAL VARIABLES ======
    ==============================
    */
    var result = [];

    /*
    ==============================
    ========== METHODS ===========
    ==============================
    */

    // [clearStacks] method will clear all arrays and reset to empty.
    function clearStack() {
        result = [];
    }


    /*
    ==============================
    ====== BUTTON FUNCTIONS ======
    ==============================
    */

    $(".buttonEqual").click(function(){

        // variables specific to the [=] button
        var OpPos = 0,
            op1 = [],
            op2 = [],
            operator = [];
        
        // this loop grabs the index at which the operator is located
        // and stores it in a value called OpPos (Operator Position)
        for (var i = 0; i < result.length; i++) {

            // ignores [.] if user wants to use floating numbers
            if (result[i] === ".") continue; 

            if (isNaN(result[i])) {
                operator.push(result[i]);
                OpPos = result.indexOf(result[i]);
            }
        }
        
        // forms the first operand and stores it in op1
        for (var j = 0; j < OpPos; j++) {
            op1.splice(j, 0, result[j]);
        }
        // forms the second operand and stores it in op2
        for (var y = OpPos+1; y < result.length; y++) {
            op2.splice(y, 0, result[y]);
        }
        
        clearStack();
        op1 = op1.join('');
        op2 = op2.join('');

        // switch statement figures out which operator is being
        // and carries out the problem and stores the solution 
        // back in result.
        switch (operator[0]) {
            case '*':
                result.push(Number(op1) * Number(op2));
                break;
            case '/':
                result.push(Number(op1) / Number(op2));
                break;
            case '+':
                result.push(Number(op1) + Number(op2));
                break;
            case '-':
                result.push(Number(op1) - Number(op2));
                break;
            default:
                $("#output").html("Error");
        }
        
        // Outputs the result stack array to the #result id.
        $("#output").html(result);
        
    });

    // clear button function
    $(".buttonC").click(function(){
        clearStack();
        $("#output").html(result);
    });

    $(".buttonPlus").click(function(){
        result.push("+");
        $("#output").html(result);
    });

    $(".buttonMinus").click(function(){
        result.push("-");
        $("#output").html(result);
    });

    $(".buttonDivide").click(function(){
        result.push("/");
        $("#output").html(result);
    });

    $(".buttonMultiply").click(function(){
        result.push("*");
        $("#output").html(result);
    });

    // backspace button function
    $(".buttonBS").click(function(){
        result.pop();
        $("#output").html(result);
    });

    $(".buttonPeriod").click(function(){
        result.push(".");
        $("#output").html(result);
    });


    // ======= Number Buttons ======
    $(".button0").click(function(){
        result.push(0);
        $("#output").html(result);
    });
    $(".button1").click(function(){
        result.push(1);
        $("#output").html(result);
    });
    $(".button2").click(function(){
        result.push(2);
        $("#output").html(result);
    });
    $(".button3").click(function(){
        result.push(3);
        $("#output").html(result);
    });
    $(".button4").click(function(){
        result.push(4);
        $("#output").html(result);
    });
    $(".button5").click(function(){
        result.push(5);
        $("#output").html(result);
    });
    $(".button6").click(function(){
        result.push(6);
        $("#output").html(result);
    });
    $(".button7").click(function(){
        result.push(7);
        $("#output").html(result);
    });
    $(".button8").click(function(){
        result.push(8);
        $("#output").html(result);
    });
    $(".button9").click(function(){
        result.push(9);
        $("#output").html(result);
    });
    
    
});
