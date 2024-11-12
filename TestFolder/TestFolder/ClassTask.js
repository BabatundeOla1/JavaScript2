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

function sharingBooks(){
    let names = ["Emily","Jack","Sophia","Daniel"];
    let expectedBooks = ["Listen", "Beautiful Lies","Caged freedom","Secret of Old Age"]
    let obj = {};

    for (const element of names) {
        for(const index of expectedBooks){
            obj[element] = index;
        }
    }return obj;   
}

const studentGrades = (array)=>{
    let result = array.map((num)=>{
        if(num >= 90 && num <=100)num = 'A';
        else if(num >= 80 && num <=89)num = 'B';
        else if(num >= 70 && num <=79)num = 'C';
        else if(num >= 60 && num <=69)num = 'D';
        else num = 'F';
        return num
    });
    return result;
};

function sumOfExpenses(){
    const array = {
        "Grocries": 150,
        "Dining out": 100,
        "Transportation": 50,
        "Entertainmet": 80
    };
    let total = 0;
    for(const items in array){
        total += array[items];
    }
    return total;
};

function newShoppingList(array){
    let result = array.filter((shoppinglist) => {
        return shoppinglist.isHealthy == true;
    });
    return result;
}

function ecommerceShopping(array){
    let newArray = [];
    for(const element in array){
        element.items.forEach((nums) => {
             if(nums.price >= 100){
                newArray.push(element);
             }
        })
    };
   return newArray;
}

function studentClassSchedule(array){
    let result = array.filter((time)=> time.includes("PM"));
    return result;
}
module.exports = {squareUingMap, studentScore, numbersGreaterThanSeventy, sharingBooks, studentGrades, sumOfExpenses, newShoppingList, ecommerceShopping, studentClassSchedule};