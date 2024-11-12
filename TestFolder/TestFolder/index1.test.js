const {multiply, sum, subtarction, findLargest, numbersGreaterThanTwo, addUsingMap, squareUingMap, studentScore} = require("./index")

test("multiply each element by 2", ()=> {
    //given 
    const arrayOfNumbers = [1,2,3,4,5];
    let result = multiply(arrayOfNumbers) //multiply is a function name in the idex.js file and arrayOfNumbers is the param passed to the function

    //expected
    let expected = [2,4,6,8,10]
    expect(result).toEqual(expected); //toEqual is used to print refernce type (array or String), while toBe is used to print primitive(Number)


});

test("Sum the numbers", ()=>{
    //given 
    const arrayOfNumbers1 = [1,2,3,4,5];
    let answer = sum(arrayOfNumbers1);

    //Expected
    let expected2 = 15;
    expect(answer).toBe(expected2);

});

test("Subtract the numbers", ()=>{
    //given 
    const arrayOfNumbers2 = [1,2,3,4,5];
    let answer = subtarction(arrayOfNumbers2);

    //Expected
    let expected3 = -15;
    expect(answer).toBe(expected3);
});

test("Find the largest number", ()=>{
    //given 
    const arrayOfNumbers = [1,2,3,4,5];
    let answer = findLargest(arrayOfNumbers);

    //expected
    let expected = 5;
    expect(answer).toBe(expected);
});

test("find numbers greater than 2", ()=>{
    //given 
    const arrayOfNumbers = [1,2,3,4,5];
    let answer = numbersGreaterThanTwo(arrayOfNumbers);

    //expected
    let expected = [3,4,5];
    expect(answer).toEqual(expected);
});

test("add two to each number using map", ()=>{
    //given
    const arrayOfNumbers = [1,2,3,4,5];
    let answer = addUsingMap(arrayOfNumbers);

    //expected
    let expected = [3,4,5,6,7];
    expect(answer).toEqual(expected);
});

test("Square each number using map", ()=>{
    //given 
    const arrayOfNumbers = [2,4,6,8,10];
    let answer = squareUingMap(arrayOfNumbers);

    //expected
    let expected = [4,16,36,64,100];
    expect(answer).toEqual(expected);
});

test("Add five to student scores", ()=>{
    //given
    const arrayOfNumbers = [85,92,78,88,95];
    let answer = studentScore(arrayOfNumbers);

    //expected
    let expected = [90,97,83,93,100];
    expect(answer).toEqual(expected);
});