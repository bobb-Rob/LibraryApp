import NavBar from "./components/NavBar";
import Book from "./components/refactor/Book";
import Store from "./components/BookStore";
import uniqid from 'uniqid'
import './css/style.css';


const UIElement = (() => {  
        //Append Nav Bar       
        NavBar.createNavBar(); 
        Store.emptyArrayMsg();      
       
})();


class UI {
   
    static formDisplayed = 'hide';
          
    static displayBooks(){  
        const books = Store.getBooks();     
        books.forEach((book, index) => UI.addBookToLibrary(book, index));
    }
    
    static clearFormFields(){
        document.querySelector('#book-title').value = '';
        document.querySelector('#author-name').value = '';
        document.querySelector('#country').value = '';
        document.querySelector('#isbn').value = '';
    }

    static showForm(){
        // clear form
        UI.clearFormFields();
        //Make form visible
        document.querySelector('#form-container').style.display = 'block';
        UI.formDisplayed = 'show';
    }

    static hideForm(e,value){
        e.stopPropagation();
        UI.formDisplayed = value;
        document.querySelector('#form-container').style.display = 'none';
    }

    static addBookToLibrary(book, index){
        const list = document.querySelector('#book-list');

        const row = document.createElement('tr');
        row.className = `row`;
        row.id = book.id;       
        console.log(book);
       
        row.innerHTML = `
        <td>${Store.bookNumbering()}</td>
        <td><strong>${book.title}</strong></td>
        <td>${book.author}</td>       
        <td>${book.country}</td>
        <td>${book.isbn}</td>
        <td><div class='radio-btn-div' >
            <input type='radio' name='readstatus' value='yes' id='yes' >
            <label for='yes' >Yes</label>
            <input type='radio' name='readstatus' value='no' id='no' >
            <label for='no' >No</label>
        </div></td>
        <td class='delete-btn-cell' ><button class="btn btn-danger
         btn-sm delete">X</button></td>
        `;

        list.appendChild(row);
        Store.emptyArrayMsg(); 
    }
    //

    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();
        }
    }

    

    static showAlert(message, className){             
        const div = document.createElement('div');
        div.className = `alert alert-${className}`;
        div.appendChild(document.createTextNode(message));

        if(UI.formDisplayed === 'show'){
            // shows alert when form fields are empty
            const form = document.querySelector('#form-container');
            const titleDiv = document.querySelector('.title');
            form.insertBefore(div, titleDiv);             
        }else if(UI.formDisplayed === 'hide'){ 
            // shows alert when add book is successfull
            const table = document.querySelector('.table');
            const container = document.querySelector('.table-container');
            container.insertBefore(div, table);
        }else{
            return;
        }           
        //vanish in 4 seconds
        setTimeout(() => document.querySelector('.alert').remove(), 4000);  
    }
}


//Event: Display Books 
document.addEventListener('DOMContentLoaded', UI.displayBooks);

//Event: Show form on add book button click
document.querySelector('.add-book-btn').addEventListener('click', UI.showForm);

//Close form
document.querySelector('.close-btn').addEventListener('click', 
(e) => UI.hideForm(e,'close btn clicked'));


//Event: Add a Book
document.querySelector("#form-container").addEventListener('submit', (e) =>{
    //Prevent actual Submit or default broswer submit behavior
    e.preventDefault();
     //Get Form Values
     const title = document.querySelector('#book-title').value;
     const author = document.querySelector('#author-name').value;    
     const country = document.querySelector('#country').value;
     const isbn = document.querySelector('#isbn').value;
     const books = Store.getBooks();
 
     // Validate 
     if(title === '' || author == '' || isbn === ''){
        UI.showAlert('Please fill in all required fields', 'danger');       
     }else{
        //Check that isbn is unique for each book
        const isbnVerify = books.some(book => isbn === book.isbn);        
        if(isbnVerify){
            UI.showAlert('ISBN must be unique for all books', 'danger');
            return;
        } 
          
        //Instatiate book
        const book = new Book(title, author, country, isbn);       
        
        //Add book to Book Store array       
        Store.addBookToStore(book)
        console.log(Store.getBooks());
            
        //Add Book to UI
        UI.addBookToLibrary(book, books.length - 1);
        UI.hideForm(e,'hide');
        UI.clearFormFields();
        UI.showAlert('Book Added', 'green');              
     }    
});



//Event: Remove book from Array and UI;
document.querySelector('#book-list').addEventListener('click', (e) => {   
    e.stopPropagation();
    console.log(e.target)
    if(e.target.classList.contains('btn-sm')){
        UI.showAlert('Book removed', 'orange');
        console.log(e.target.parentElement.parentElement.id);
        Store.removeBook(e.target.parentElement.parentElement.id)
    } 
    //Remove book from UI     
    UI.deleteBook(e.target);
    Store.emptyArrayMsg();
})