const {validateCard} = require("./CreditCardValidation");

test("Function return types of card", ()=>{
    //given
    const userCard = "5199110824684028";
    let result = validateCard(userCard);

    //expected
    let expected = "MasterCard";
    expected(result).toBe(expected);
});