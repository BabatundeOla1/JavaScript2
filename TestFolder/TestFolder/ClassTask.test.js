const {squareUingMap, studentScore, numbersGreaterThanSeventy, sharingBooks, studentGrades, sumOfExpenses, newShoppingList, ecommerceShopping, studentClassSchedule} = require("./ClassTask")

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

test("for each book", ()=>{
    let persons =  ["Emily","Jack","Sophia","Daniel"];
    let answer = sharingBooks(persons);

    let expected = {
                    Emily: "Secret of Old Age",
                    Jack: "Secret of Old Age",
                    Sophia: "Secret of Old Age",
                    Daniel: "Secret of Old Age"
                };
   
    expect(answer).toEqual(expected);

});

test("Student Grades", ()=>{
    const studentScores = [95, 78, 85, 60, 45, 92];
    let answer = studentGrades(studentScores);

    let expected = ['A','C','B','D','F','A'];
    expect(answer).toEqual(expected);
});

test("calculate David' Expenses", ()=>{
    const davidExpenses = {
                            "Grocries": 150,
                            "Dining out": 100,
                            "Transportation": 50,
                            "Entertainmet": 80
                        };

    let answer = sumOfExpenses(davidExpenses);
    let expected = 380
    expect(answer).toBe(expected);
});

test("Amy chopping list", ()=>{
    const shoppingList = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        { name: 'Soda', category: 'Beverages', isHealthy: false }
        ];

    let result = newShoppingList(shoppingList);
    let expected = [
        { name: 'Apples', category: 'Fruits', isHealthy: true },
        { name: 'Carrots', category: 'Vegetables', isHealthy: true },
        { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
        ];
    expect(result).toEqual(expected);
        
});

test("E-commerce company", ()=>{
    const orders = [
        { id: 1, items: [{ price: 25, quantity: 2 }, { price: 15, quantity: 3 }] },
        { id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }] },
        { id: 3, items: [{ price: 30, quantity: 1 }] },
       ];

       let result = ecommerceShopping(orders);
       let expected = [{ id: 2, items: [{ price: 100, quantity: 1 }, { price: 25, quantity: 2 }]}];
       expect(result).toEqual(expected);
});

test("Student Schedule", ()=>{
    const classTiming = ["9:00 AM","11:00 AM","1:00 PM","3:00 PM","5:00 PM"];
    let result = studentClassSchedule(classTiming);

    let expected = ["1:00 PM", "3:00 PM", "5:00 PM"];
    expect(result).toEqual(expected);
})