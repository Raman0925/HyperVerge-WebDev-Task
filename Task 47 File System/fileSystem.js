import fs from 'fs'
//deleting a file
fs.unlink('message.txt', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('File has been deleted');
  });
//write file  
fs.writeFile('message.txt','Hello World',(err)=>{
    if(err) throw err;
    console.log("Saved")
})
//appending a file
fs.appendFile('message.txt', 'Learn what matters', (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log('Text has been appended');
  });
  //reading a file
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(data);
  });
  
  