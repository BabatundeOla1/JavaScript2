// FOREACH LOOP: It doesnt return any value

function multiply(array){
    let result = [];
    array.forEach((num) => { //forEach loop only return something, its used in an array alone
        let answer = num * 2;
        result.push(answer); //the .push method is use to psh elements into an array.
    })
    return result;
};

const sum = (array)=>{
    let total = 0;
    array.forEach((num)=>{
        total += num;
    });
    return total;
}

const subtarction = (array)=>{

        let total = 0;
        array.forEach((num)=>{
            total -= num;
        });
        return total;
}

const findLargest = (array)=>{
    let largest = 0;
    array.forEach((num)=>{
        if(array[num] > largest)
            largest = array[num];
    });
    return largest;
}

function numbersGreaterThanTwo(array){
   let result = array.filter((num)=>num > 2);
    return result;
}

const addUsingMap = (array)=>{
    let result = array.map((num)=> num + 2 );
    return result;
};

const squareUingMap = (array)=>{
    let result = array.map((num)=> num * num);
    return result;
};

const studentScore = (array)=>{
    let result = array.map((num)=>num + 5);
    return result;
};

module.exports = {multiply, sum, subtarction, findLargest, numbersGreaterThanTwo, addUsingMap, squareUingMap, studentScore};
