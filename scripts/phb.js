/*
* Original work by Scott Tolksdorf
* @see https://github.com/naturalcrit/homebrewery/blob/master/scripts/phb.js
* Code distributed under MIT license https://choosealicense.com/licenses/mit/
*/
const less = require('less');
const fs = require('fs');

less.render(fs.readFileSync('./phbStyle/phb.style.less', 'utf8'), { compress: true })
	.then((output)=>{
		fs.writeFileSync('./module/css/phb.css', output.css);
		console.log('phb.css created!');
	}, (err)=>{
		console.error(err);
	});