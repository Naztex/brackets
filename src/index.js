module.exports = function check(str, bracketsConfig) {

	let brackets = bracketsConfig.join('').replace(/,/g, '');
	let arrayCount = [];

	for (let element of str) {
			let index = brackets.indexOf(element)

			if (index % 2 === 0) {
				
				if (element === brackets[index + 1] && arrayCount[arrayCount.length - 1] === index){
						arrayCount.pop();
				} else if (element === brackets[index + 1] && arrayCount[arrayCount.length - 1] !== index) {
						arrayCount.push(index)
				}
				else{
						arrayCount.push(index)
				}

			} else {
				if (arrayCount.pop() !== index-1){
						return false;
				}
			}
			
		}
	return arrayCount.length === 0;
}
