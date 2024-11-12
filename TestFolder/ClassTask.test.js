const {squareUingMap, studentScore, numbersGreaterThanSeventy, studentGrades} = require("./ClassTask")

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

test("Student score", ()=>{
    let arrayOfScores = [100,70,25,60,50,80];
    let answer = numbersGreaterThanSeventy(arrayOfScores);

    let expected = [100,70,80];
    expect(answer).toEqual(expected);
});

test("Student Grades", ()=>{
    const studentScores = [95, 78, 85, 60, 45, 92];
    let answer = studentGrades(studentScores);

    let expected = ['A','B'];
    expect(answer).toEqual(expected);
});