function getRandomUpperCase(){
    return String.fromCharCode(Math.floor(Math.random()*26)+65);
}
function getRandomLowerCase(){
   return String.fromCharCode(Math.floor(Math.random()*26)+97);
}
function getRandomNumber(){
   return String.fromCharCode(Math.floor(Math.random()*10)+48);
}
function getRandomSymbol(){
    let symbol = "!@#$%^&*(){}[]=<>/,.|~?";
    return symbol[Math.floor(Math.random()*symbol.length)];
}

function generateCharacter(){
	let charList = []
	charList.push(getRandomLowerCase());
	charList.push(getRandomUpperCase());
	charList.push(getRandomNumber());
	charList.push(getRandomSymbol());
	return charList[Math.floor(Math.random()*charList.length)];
}

module.exports.generateString = () => {
	let password = ""
	for(let i = 0; i < 50; i++){
		password += generateCharacter()
	};
	
	return password;
}