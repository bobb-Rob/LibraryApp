

function component(comp, klassName){
  const element = document.createElement(comp)
  element.className = klassName;
  return element
}

// Page container
const pageContainer = document.querySelector(".mainpage-container");


// Book Collection Section
const bookCollection = component("div", "books-section");

  // current Book secton on the left
  const currentRead = component("div", "current-read");

    const currentReadHeading = component("h3", "cur-heading");
        currentReadHeading.textContent = "Current Read";
        currentRead.appendChild(currentReadHeading);

    const curBookHolder = component("div", "book-holder");
          currentRead.appendChild(curBookHolder);

        const bookImageWrapper = component("div", "img-wrapper")
        const bookimg = component("img", "cur-book-image");
              bookImageWrapper.appendChild(bookimg);
              curBookHolder.appendChild(bookImageWrapper);

        const bookDescription = component("div", "book-desc");    
            // Book description display - using P at end of variable to know it is a paragraph element 
              const bookTitleP = component("p", "cur-book-title");
              bookTitleP.textContent = `Title: ${"bookName"}`;
              bookDescription.appendChild(bookTitleP);

              const authorP = component("p", "cur-author")
              authorP.textContent = `Author: ${"authorName"}`;
              bookDescription.appendChild(authorP);

              const pagesP = component("p", "cur-no-of-pages");
              pagesP.textContent = `Pages: ${'noOfPages'}`;
              bookDescription.appendChild(pagesP);

              const readStatusP = component("p", "cur-read-status");
              readStatusP.textContent = `Read Status: ${'readStatusValue'}`;
              bookDescription.appendChild(readStatusP);

              const continueReadBtn = component("button", "contRead-btn")
              continueReadBtn.textContent = "Continue Reading";
              bookDescription.appendChild(continueReadBtn);   
    
    curBookHolder.appendChild(bookDescription);   
  
  bookCollection.appendChild(currentRead);


  // Collection Section on right
  const collection = component("div", "collection");

  const collectionHeading = component("h3", "col-heading");
        collectionHeading.textContent = "My Collection";
        collection.appendChild(collectionHeading);

        const collectionHolder = component("div", "collection-holder");
        collection.appendChild(collectionHolder);

  bookCollection.appendChild(collection);
pageContainer.insertAdjacentElement("afterbegin", bookCollection);



// Add Button;       Note: The Add Button is appended before the NavBar but 
// it appears on the browser in reverse order i.e "navBar" is dislayed before "Add Book btn".
const addBookButton = component("button", "add-btn");
addBookButton.textContent = "Add Book";
pageContainer.insertAdjacentElement("afterbegin", addBookButton);

// Nav Bar
const navBar = component("div", "navBar");
const navBarTitle = component("h1", "page-title");
navBarTitle.textContent = "User Personal Library";

navBar.appendChild(navBarTitle);
pageContainer.insertAdjacentElement("afterbegin", navBar);


console.log(pageContainer)


// Dynamic Page Logic section

// Add book button Event
const formWrapper = document.getElementById("form-container");

addBookButton.addEventListener("click", ()=>{
  clearForm();
  formWrapper.style.display = "block";
  console.log("I was clicked")
})

// close form button evnt
const formCloseBtn = formWrapper.querySelector(".close-btn");
  formCloseBtn.addEventListener("click", ()=>{
  formWrapper.style.display = "none";
})

// book constructor function and protoype

function Book(bookTitle, author, pages, readStatus){
  this.title = bookTitle;
  this.author = author;
  this.pages = pages;
  this.readStatus = readStatus;
}

// Book.prototype.addNewBookToCollection = function(arr){
//   arr.forEach(element => {        
 
//   });
// }

Book.prototype.createNewBookHolder = function() {
          const newBookHolder = component("div", "new-book-holder"); 

        const newbookImageWrapper = component("div", "new-img-wrapper")
        const newbookimg = component("img", "new-book-image");
              newbookImageWrapper.appendChild(newbookimg);
              newBookHolder.appendChild(newbookImageWrapper);

        const newBookDescription = component("div", "new-book-desc");    
            // Book description display - using P at end of variable to know it is a paragraph element 
              const newBookTitleP = component("p", "new-book-title");
              newBookTitleP.textContent = `Title: ${this.title}`;
              newBookDescription.appendChild(newBookTitleP);

              const newAuthorP = component("p", "new-author")
              newAuthorP.textContent = `Author: ${this.author}`;
              newBookDescription.appendChild(newAuthorP);

              const newPagesP = component("p", "new-no-of-pages");
              newPagesP.textContent = `Pages: ${this.pages}`;
              newBookDescription.appendChild(newPagesP);

              const newReadStatusP = component("p", "new-read-status");
              newReadStatusP.textContent = `Read Status: ${this.readStatus}`;
              newBookDescription.appendChild(newReadStatusP);

              const ReadNowBtn = component("button", "read-now-btn")
              ReadNowBtn.textContent = "Read now";
              newBookDescription.appendChild(ReadNowBtn);
    newBookHolder.appendChild(newBookDescription);
   
return newBookHolder;
}

console.log(Book.prototype)



// Form Submit Logic
let myLibrary = [];

  const bookName = document.getElementById("author-name");
  const bookAuthor = document.getElementById("book-title");
  const pagesCount = document.getElementById("no-of-pages");
  const pageCountLabel = document.getElementById("label-display"); 
  const readStatus = document.getElementById("read-status");  
   
  
  function clearForm(){
    bookName.value = ""; 
    bookAuthor.value = ""; 
    pagesCount.value = "";
    readStatus.checked = false;
    };

    // form submission
formWrapper.addEventListener("submit", (e)=>{
  e.preventDefault();    
//  Check if Read status is checked(Yes)
  let displayReadStatus = "Not Read"
if(readStatus.checked === true){
  displayReadStatus = "Read";  
};

// check if pages value is a number
if(isNaN(pagesCount.value)){
  pageCountLabel.textContent = "Must input numbers";
  pageCountLabel.style.color = "red";
  return false;
}
// create new Book
const newBook = new Book(bookName.value, bookAuthor.value, pagesCount.value, displayReadStatus);

// Push into library Array
myLibrary.push(newBook);
console.log(myLibrary);

// append new book to Document
const bookHolder = newBook.createNewBookHolder();
collectionHolder.appendChild(bookHolder);

// check for read status, and change display button to read now or continue reading
let readStatusDisplay = document.querySelector(".new-read-status");
console.log(readStatusDisplay)
if(readStatusDisplay.textContent === "Read Status: Read"){
let readbtn = document.querySelector(".read-now-btn");
console.log(readbtn)
readbtn.textContent = "Continue Reading";
}

formWrapper.style.display = "none";
pageCountLabel.textContent = "How many pages?";
pageCountLabel.style.color = "var(--limegreen)";
clearForm();
})

