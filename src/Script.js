import currentBook from "./currentBook.js";
import { form } from "./components/AddBookForm.js";
import { allBooks } from "./allBook.js";


const bookLogic = (() => {

  function component(comp, klassName){
    const element = document.createElement(comp)
    element.className = klassName;
    return element
  }

  // Add book Button 
  const addBookButton = component("button", "add-btn");
  addBookButton.textContent = "Add Book";

  addBookButton.onclick = () =>{
      form.clearForm();
      form.formWrapper.style.display = "block";
      console.log("Add book button clicked and form displayed")
    }
   

    let myLibrary = [
          {title: "RichDad",
          author: "Robert Kiyosaki",
          pages: "257",
          readStatus: false},
          {title: "People as Asset",
          author: "Laide Abel",
          pages: "170",
          readStatus: false}
        ];

        myLibrary.forEach((book) => {
          console.log(book)
          let ourBook = allBooks.createNewBookHolder(book.title, book.author, book.pages, book.read)
          allBooks.collectionHolder.appendChild(ourBook);
        })

    const addBookToLibrary = (bookName, bookAuthor, pagesCount, readStatus) => {
      const BookFactory = (title, author, pages, readStatus) => { 
        return {title, author, pages, readStatus};
      }
      let newBook = BookFactory(bookName, bookAuthor, pagesCount, readStatus);
      myLibrary.push(newBook);      
    }
         

    function displayBook(newBookTitle){
      myLibrary.filter((book) => book.title === newBookTitle ).forEach((book) => {
        console.log(book)
        let ourBook = allBooks.createNewBookHolder(book.title, book.author, book.pages, book.read)
        allBooks.collectionHolder.appendChild(ourBook);
      })
    }
          // form submission
      form.formWrapper.onsubmit = (e) => {
        e.preventDefault();      
        form.isPageValueANumber();
        addBookToLibrary(form.bookName.value, form.bookAuthor.value, form.pagesCount.value, form.readStatus.checked);
        form.readStatusDisplay();
        displayBook(form.bookName.value);
        
        console.log(myLibrary);  
        // check for read status, and change display button to read now or continue reading     
        // console.log(form.readStatusDisplayDiv)
        // if(form.readStatusDisplayDiv.textContent === "Read Status: Read"){
        // let readbtn = document.querySelector(".read-now-btn");
        // console.log(readbtn)
        // readbtn.textContent = "Start Reading";
        // }

        form.formWrapper.style.display = "none";
        form.pageCountLabel.textContent = "How many pages?";
        form.pageCountLabel.style.color = "var(--limegreen)";
        form.clearForm();
      }


  return { addBookButton, myLibrary }

})()


export { bookLogic }

 
