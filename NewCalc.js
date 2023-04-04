const addTextToInput = function (digit) {
    let mainText=document.getElementById("mainText");
    mainText.value=mainText.value+digit;
};

const getValue = function () {
    return +mainText.value;
};

const setValue = function (numericalValue) {
    mainText.value = numericalValue.toString();
};

const changeSign = function () {
    mainText.value=-mainText.value;
};

const clear = function () {
    mainText.value="0";
};

var accumulator=0;
var operation="";

const minus = function () {
    accumulator = getValue();
    operation = "minus";
    clear();
};

const plus = function () {
    accumulator = getValue();
    operation = "plus";
    clear();
};

const equals = function () {
    switch (operation) {
        case "minus":
            setValue(accumulator - getValue());
            break;
        case "plus":
            setValue(accumulator+ getValue());
            break;
            
    }
};

const onClickNumber=function(digit){
    addTextToInput(digit);
};

const resetCalculator=function(){
    setValue=0;
    accumulator=0;
    operation="";
};

const getNumberList=function(){
    const mainTextValue=mainText.value;
    const numberList = mainTextValue.split(",").map(function(numberString){
    return +numberString.trim();
    });
    return numberList;
};

const min=function(){
    const numberList=getNumberList();
    const minValue=Math.min.apply(Math,numberList);
    setValue(minValue);
};

const max=function(){
    const numberList=getNumberList();
    const maxValue=Math.max.apply(Math,numberList);
    setValue(maxValue);
};

const avg=function(){
    const numberList=getNumberList();
    const sum=numberList.reduce(function(accumulator,currentValue){
        return accumulator + currentValue;
    },0);
    const avgValue=sum/numberList.length;
    setValue(avgValue);
    };


