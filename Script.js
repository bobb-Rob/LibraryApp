// let myLibrary = [];

// function Book() {
    
  
// }

// function addBookToLibrary() {
//   // do stuff here
// }

var lexical = function (){ 
  console.log(this)
} 

//lexical()

const ourObj = {};

ourObj.trim = function (){
  console.log(this);
}

ourObj.trim()