let nums = [100,70,80,60,35];

const squareUingMap = (array)=>{
    let result = array.map((num)=> num * num);
    return result;
};

const studentScore = (array)=>{
    let result = array.map((num)=>num + 5);
    return result;
};

const numbersGreaterThanSeventy = (array)=>{
    let result = array.filter((num)=> num >= 70);
    return result;
};

const studentGrades = (array)=>{
    array.map((num)=> num >= 90 && num <= 100);
    return ['A'];
    array.map((num)=> num >= 80 && num <= 89);
    return ['B'];
}

//console.log(numbersGreaterThanSeventy(nums));
module.exports = {squareUingMap, studentScore, numbersGreaterThanSeventy, studentGrades};