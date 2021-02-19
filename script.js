var elementsUnsorted = new Array();
var sortedArray = new Array();
var duplicatedElements = new Array();

window.onload = () => {
}

function generateRandomArray(numberOfElements, minVal, maxVal){
    var tmp;
    for (let index = 0; index < numberOfElements; index++) {
        tmp = Math.floor(getRandomNumber(minVal,maxVal));
        
        if(tmp >= 65 && tmp <= 90)
        {
            if(Math.floor(getRandomNumber(0,1))){
                elementsUnsorted.push(String.fromCharCode(tmp));
            }else{
                elementsUnsorted.push(tmp);
            }
        } else{
            elementsUnsorted.push(tmp);
        }
    }
}

function getRandomNumber(min, max){
    return Math.random() * (max-min + 1) + min;
}

function sortArray(){
    sortedArray = elementsUnsorted.sort();
}

function lookForDuplicates(){
    var valueToCheck;
    for (let index = 0; index < sortedArray.length; index++) {
        valueToCheck = sortedArray[index];

        for (let j = index + 1; j < sortedArray.length; j++) {
            if(sortedArray[j]===valueToCheck){
                duplicatedElements.push(sortedArray.splice(j,1));
                j--;
            }
        }
    }
}

function beginProcess()
{
    elementsUnsorted = [];
    sortedArray = [];
    duplicatedElements = [];
    generateRandomArray(30,-15,90);
    document.getElementById('unsortedArraySpan').innerText = elementsUnsorted;
    sortArray();
    document.getElementById('sortedArraySpan').innerText = sortedArray;
    lookForDuplicates();
    document.getElementById('duplicatesArraySpan').innerText = duplicatedElements;
    document.getElementById('finalArraySpan').innerText = sortedArray;
}