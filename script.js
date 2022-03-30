(function() {
    var currentInput = [];
    var currentCalculated = null;
    var previousInput = [];
    var numberInputs = getElement(".input:not(.clear)");
    var operatorInputs = getElement(".operator");
    var equalsButton = getElement("#equals");
    var resetButton = getElement("#reset");
    var deleteButton = getElement("#delete");
    var previousViewer = getElement(".previous")[0];
    var currentViewer = getElement(".current")[0];



    function getElement(element) {
        return element.charAt(0) === "#"
            ? document.querySelector(element)
            : document.querySelectorAll(element);
    }

