const fs = require('fs/promises')

const myFileWriter = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
 await fs.appendFile(fileName, fileContent, function (err) {
  if (err){
	console.error(err);
	return;
  };
  console.log('Saved!');
});
}
myFileWriter("input.txt", "Hello");
const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.readFile(fileName, 'utf8', function(err, data){
		if (err) {
		  console.error(err);
		  return;
		}
		console.log(data);
	  });
}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	await fs.appendFile(fileName, fileContent, function (err) {
		if (err){
			console.error(err);
			return;
		}
		console.log('Updated!');
	  });
}

const myFileDeleter = async (fileName) => {
	// write code here
	// dont chnage function name
	await fs.unlink(fileName, function (err) {
		if (err){
			console.error(err);
			return;
		}
		console.log('File deleted!');
	  });
}



module.exports = { myFileWriter, myFileUpdater, myFileReader, myFileDeleter }