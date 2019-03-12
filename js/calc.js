var value = null;
var value2 = null;
var tempVal = null;
var numValue = 0;
var numValue2 = 0;
var numAnswer = 0;
var operatorId = "";
var equalsButtonClicked = false;
var operatorClicked = false;

$("button").click(
    function () {
        if (value === null) {
            if ($(this).prop('id') === 'addButton' || $(this).prop('id') === 'subtractButton' || $(this).prop('id') === 'multiplyButton' || $(this).prop('id') === 'divideButton' || $(this).prop('id') === 'equalsButton') {
                alert("Please input a number first!");
            }
            else if ($(this).prop('id') === 'clearButton') {
                value = null;
                $('#display').val(value);
                alert("Calculator is completely reset already!")
            }
            else {
                tempVal = $(this).val();
                value = tempVal;
                $('#display').val(value);
            }

        }
        else if (value != "" && operatorClicked == false && value2 == null) {
            if ($(this).prop('id') === 'addButton' || $(this).prop('id') === 'subtractButton' || $(this).prop('id') === 'multiplyButton' || $(this).prop('id') === 'divideButton') {
                numValue = Number(value);
                operatorClicked = true;
                operatorId = $(this).prop('id');
                tempVal = $(this).val();
                value = value.concat(" " + tempVal);
                $('#display').val(value);
            }
            else if ($(this).prop('id') === 'clearButton') {
                value = null;
                $('#display').val(value);
                $('#clearButton').click(
                    function () {
                        value = null;
                        tempVal = null;
                        numValue = 0;
                        operatorClicked = false;
                        $('#display').val(value);
                    }
                );
            }
            else {
                tempVal = $(this).val();
                value = value.concat(tempVal);
                $('#display').val(value);
            }
        }
        else if (value != "" && operatorClicked == true && value2 == null) {
            if ($(this).prop('id') === 'addButton' || $(this).prop('id') === 'subtractButton' || $(this).prop('id') === 'multiplyButton' || $(this).prop('id') === 'divideButton') {
                operatorClicked = true;
                operatorId = $(this).prop('id');
                value = value.substring(0, value.length - 2);
                tempVal = $(this).val();
                value = value.concat(" " + tempVal);
                $('#display').val(value);
            }
            else if ($(this).prop('id') === 'clearButton') {
                value = value.substring(0, value.length - 2);
                operatorClicked = false;
                $('#display').val(value);
                $('#clearButton').click(
                    function () {
                        value = null;
                        tempVal = null;
                        numValue = 0;
                        operatorClicked = false;
                        $('#display').val(value);
                    }
                );
            }
            else {
                if (value2 != null) {
                    tempVal = $(this).val();
                    value2 = value2.concat(tempVal);
                    numValue2 = Number(value2);
                    $('#display').val(value2);
                    operatorClicked = false;
                }
                else {
                    tempVal = $(this).val();
                    value2 = tempVal;
                    numValue2 = Number(value2);
                    $('#display').val(value2);
                    operatorClicked = false;
                }

            }
        }
        else if (value != ""  && value2 != null) {
            if ($(this).prop('id') === 'addButton' || $(this).prop('id') === 'subtractButton' || $(this).prop('id') === 'multiplyButton' || $(this).prop('id') === 'divideButton') {
                operationClicked = true;
                if (operatorId == 'addButton') {
                    numAnswer = numValue + numValue2;
                    $('#display').val(numAnswer);
                    operatorId == "";
                    numValue = numAnswer;
                    value2 = null;
                }
                else if (operatorId == 'subtractButton') {
                    numAnswer = numValue - numValue2;
                    $('#display').val(numAnswer);
                    operatorId == "";
                    numValue = numAnswer;
                    value2 = null;
                }
                else if (operatorId == 'multiplyButton') {
                    numAnswer = numValue * numValue2;
                    $('#display').val(numAnswer);
                    operatorId == "";
                    numValue = numAnswer;
                    value2 = null;
                }
                else if (operatorId == 'divideButton') {
                    if (numValue2 == 0) {
                        numAnswer = "Infinity";
                        $('#display').val(numAnswer);
                        operatorId == "";
                        value2 = null;
                    }
                    else {
                        numAnswer = numValue / numValue2;
                        $('#display').val(numAnswer);
                        operatorId == "";
                        numValue = numAnswer;
                        value2 = null;
                    }
                }
            }
            else if ($(this).prop('id') === 'equalsButton') {
                if (operatorId == 'addButton') {
                    numAnswer = numValue + numValue2;
                    $('#display').val(numAnswer);
                    operatorId == "";
                    numValue = numAnswer;
                    value2 = null;
                }
                else if (operatorId == 'subtractButton') {
                    numAnswer = numValue - numValue2;
                    $('#display').val(numAnswer);
                    operatorId == "";
                    numValue = numAnswer;
                    value2 = null;
                }
                else if (operatorId == 'multiplyButton') {
                    numAnswer = numValue * numValue2;
                    $('#display').val(numAnswer);
                    operatorId == "";
                    numValue = numAnswer;
                    value2 = null;
                }
                else if (operatorId == 'divideButton') {
                    if (numValue2 == 0) {
                        numAnswer = "Infinity";
                        $('#display').val(numAnswer);
                        operatorId == "";
                        value2 = null;
                    }
                    else {
                        numAnswer = numValue / numValue2;
                        $('#display').val(numAnswer);
                        operatorId == "";
                        numValue = numAnswer;
                        value2 = null;
                    }
                }
            }
            else if ($(this).prop('id') === 'clearButton') {
                value2 = null;
                operatorClicked = true;
                $('#display').val(value2);
                $('#clearButton').click(
                    function () {
                        value = null;
                        tempVal = null;
                        numValue = 0;
                        operatorClicked = false;
                        $('#display').val(value);
                    }
                );
            }
            else {
                tempVal = $(this).val();
                value2 = value2.concat(tempVal);
                numValue2 = Number(value2);
                $('#display').val(value2);
                operatorClicked = false;
            }
        }
    }
);