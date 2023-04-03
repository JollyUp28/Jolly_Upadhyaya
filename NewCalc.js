var calcScreen;
var accumulator;
var operation;
const initCalc = function () {
    calcScreen = document.getElementById("CalcScreen");
    accumulator = 0;
    operation = "";
}

const addTextToInput = function (digit) {
    calcScreen.value += digit;
};

const getScreenValue = function () {
    return calcScreen.value;
};

const setScreenValue = function (value) {
    calcScreen.value = value.toString();
};

const changeSign = function () {
    calcScreen.value = -calcScreen.value;
};

const clearScreen = function () {
    calcScreen.value = "";
};

const minus = function () {
    accumulator = getScreenValue();
    operation = "minus";
    clearScreen();
};

const plus = function () {
    accumulator = getScreenValue();
    operation = "plus";
    clearScreen();
};

const equals = function () {
    switch (operation) {
        case "minus":
            setScreenValue(accumulator - getScreenValue());
            break;
        case "plus":
            setScreenValue(Number(accumulator) + Number(getScreenValue()));
            break;
            
    }
};

const appendValue = function (digit) {
    addTextToInput(digit);
};


const computeMax = function () {
    numList = getScreenValue().split(",");
    setScreenValue(numList[2]);
};


