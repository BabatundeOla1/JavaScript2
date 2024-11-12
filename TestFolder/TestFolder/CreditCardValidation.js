/*console  = require("prompt-sync");
console prompt = ps();*/

let userCard = "5199110824684028";

function validateCard(card){

	if(card.startsWith("4")){
		return "VisaCard";
	}
	else if(card.startsWith("5")){
		return "MasterCard";
	}
	else if(card.startsWith("6")){
		return "Discover Credit Card";
	}
	else if(card.startsWith("37")){
		return "America Express";
	}
	else 
		return "Invalid Card";
};
module.exports = {validateCard};
/*
function checkValidity(cardNumber){

	let sumOdd = 0;
	let sumEven = 0;
	let totalSum = 0;

	let length = cardNumber.length;
    const cardDigits = [];
	const doubled = [];

        for (let index = length - 1; index >= 0; index--) {
			
    	   if (index % 2 == 0) {
				cardDigits[index] =Number(cardNumber.charAt(index));
		          doubled[index] = cardDigits[index] * 2;
                if (doubled[index] > 9) {
                    doubled[index] = (doubled[index] / 10) + (doubled[index] % 10);	
                }
                sumEven += doubled[index];		
            } 
			if(index % 2 != 0) {
              	sumOdd += cardDigits[index];
            }
			totalSum = sumEven + sumOdd;
        }
		
	    return (totalSum % 10 == 0) ? "Valid" : "Invalid";
		
}

console.log("****************************************");
console.log("Card Number: " + userCard);
console.log("Card Type: " + validateCard(userCard));
console.log("Card Length: " + userCard.length);
console.log("Card Validity: " + checkValidity(userCard));
console.log("****************************************");
*/


