import NavBar from "./components/NavBar";
import Book from "./components/refactor/Book";
import Store from "./components/BookStore";
import countryList from "./components/countryNames";
import './css/style.css';
import './css/toggleReadBtn.css';


const UIElement = (() => {  
        //Append Nav Bar       
        NavBar.createNavBar(); 
        Store.emptyLibraryMsg();                   
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
        <td>${index + 1}</td>
        <td><strong>${book.title}</strong></td>
        <td>${book.author}</td>       
        <td>${book.country}</td>
        <td>${book.isbn}</td>
        <td class='radio-btn-cell' ><div class='radio-btn-div' >
            <button class='read-btn read-status-btn ${book.readStatus ? 'read-btn-green': 'read-btn-red'}' 
            >${book.readStatus ? 'Read' : 'Not read'}</button>
        </div></td>
        <td class='delete-btn-cell' ><button class="btn btn-danger
         btn-sm delete">X</button></td>
        `;

        list.appendChild(row);

        Store.emptyLibraryMsg(); 
    }


    // Remove Book rows before books display after delete;
    static clearBooks(){
        let rows = document.querySelectorAll('.row');
            if(rows){
                rows.forEach(row => row.remove()) 
            }else{
                return;
            }  
    }


    //Delete Book from UI
    static deleteBook(el){
        if(el.classList.contains('delete')){
            el.parentElement.parentElement.remove();            
            //clear the list before display again
            UI.clearBooks();
            //reset list to get serial book count correct;           
            UI.displayBooks();
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
            div.id = `form-alert`;
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
    //  console.log(readStatusOptions.selectedIndex);  
    //  console.log(readStatusOptions.options);  
     const books = Store.getBooks();
 
    function getReadStatus(){
        const readStatusOptions = document.querySelector('#readStatus');
        let index = readStatusOptions.selectedIndex;
        let options = readStatusOptions.options; 

        let out;         
        if(options[index].text.toLowerCase() === 'yes'){
            out = true;
        }else{
           out = false;
        }
        return out;
    }

     // Validate all field
     if(title === '' || author == '' || isbn === ''){
        UI.showAlert('Please fill in all required fields', 'danger'); 
        document.querySelector('#book-title').focus();     
     }else{
        //Check that isbn is unique for each book
        const isbnVerify = books.some(book => isbn === book.isbn);        
        if(isbnVerify){
            UI.showAlert('ISBN must be unique for all books', 'danger');
            document.querySelector('#isbn').focus();
            return;
        } 

        //Check that isbn Number is not less than five and not greater than 9
        if((isbn.toString().length < 5) || (isbn.toString().length > 9) ){
            UI.showAlert('ISBN characters must be between five and nine', 'danger');
            document.querySelector('#isbn').focus();
            return;
        }
        
        //Check that country value is valid
        const matchedCountry = countryList.some(countryName => country.toLowerCase() === countryName.toLowerCase())
        if(matchedCountry === false){
            UI.showAlert('Please input a valid country', 'danger');
            document.querySelector('#country').focus();
            return;
        }
      

        //Instatiate book
        const book = new Book(title, author, country, isbn, getReadStatus());       
        
        //Add book to Book Store array       
        Store.addBookToStore(book)
        console.log(Store.getBooks());
            
        //Add Book to UI
        UI.addBookToLibrary(book, books.length);
        UI.hideForm(e,'hide');
        UI.clearFormFields();
        UI.showAlert('Book Added', 'green');              
     }    
});



//Event: Remove book from Array and UI;
document.querySelector('#book-list').addEventListener('click', (e) => {   
    e.stopPropagation();
    
    if(e.target.classList.contains('btn-sm')){
        UI.showAlert('Book removed', 'orange');       
        Store.removeBook(e.target.parentElement.parentElement.id)
    } 
    //Remove book from UI     
    UI.deleteBook(e.target);
    Store.emptyLibraryMsg();
})

//Toggle Read Status for any Book on the list
document.querySelector('#book-list').addEventListener('click', (e) => { 
    e.stopPropagation();
    if(e.target.classList.contains('read-status-btn')){
        let isbn = e.target.parentElement.parentElement.previousElementSibling.textContent;
       
        const books = Store.getBooks();
        const currentBook = books.find(book => book.isbn === isbn);
             
        if(currentBook.readStatus){           
            currentBook.readStatus = false;
            e.target.textContent = 'Not read';
            e.target.classList.add('read-btn-red');
            if(e.target.classList.contains('read-btn-green')){
                e.target.classList.remove('read-btn-green');
            }
        }else{            
            currentBook.readStatus  = true;
            e.target.textContent = 'Read';
            e.target.classList.add('read-btn-green');  
            if(e.target.classList.contains('read-btn-red')){
                e.target.classList.remove('read-btn-red');
            }          
        }
                
        Store.updateBooks(currentBook);
    }else{
        return;
    }
})