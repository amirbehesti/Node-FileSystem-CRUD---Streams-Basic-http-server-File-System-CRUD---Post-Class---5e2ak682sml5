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
const myFileReader = async (fileName) => {
	// write code here
	// dont chnage function name
	try {
		const data = await fs.readFile(fileName);
		console.log(data);
	  } catch (err) {
		console.log(err);
	  }
}

const myFileUpdater = async (fileName, fileContent) => {
	// write code here
	// dont chnage function name
	try {
	await fs.appendFile(fileName, fileContent);
	}catch (err) {
		console.log(err);
	  }
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