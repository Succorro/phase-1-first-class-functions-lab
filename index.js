let array = (['Antonia', 'Nuru', 'Amari', 'Mo']);
//
const returnFirstTwoDrivers = function(){
    return array.slice(0, 2);
}
//new array, anonymous function
const returnLastTwoDrivers = function (){
    return array.slice (-2, 4)
}
// new array, anonymous function (-2) reverses start point to two from the end
const selectingDrivers = ([returnFirstTwoDrivers,returnLastTwoDrivers])
// array to select which drivers are chosen
function createFareMultiplier (num1){
    return function (num2){
        return num1 * num2;
    }
};
//higher order function
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);
//defines anonymous function that is called to either double or triple
function selectDifferentDrivers (array,selectingDrivers){
    array = (['Antonia', 'Nuru', 'Amari', 'Mo']);
    return selectingDrivers();
}