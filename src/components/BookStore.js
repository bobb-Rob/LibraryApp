

export default class Store {
    static getBooks(){
        let books;
        if(localStorage.getItem('books') === null){
            books = [];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }

    static updateBooks(updatedBook){
        const books = Store.getBooks();
        const newBooks = books.map(book => {
            if(book.isbn === updatedBook.isbn){
                book = updatedBook;
            }
            return book;
        })
        localStorage.setItem('books', JSON.stringify(newBooks));
        console.log(newBooks);
    }

    
    static addBookToStore(book){
        const books = Store.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));
        console.log(books);
    }

    static removeBook(id) {
        let books = Store.getBooks();
        const newBooks = books.filter( book => book.id !== id);
        localStorage.setItem('books', JSON.stringify(newBooks));
        console.log(newBooks);
    }

    static emptyLibraryMsg(){
        const div = document.createElement('div');
        div.className = `empty alert-empty`;
        div.appendChild(document.createTextNode('Library is empty. Add a book'));
        const books = Store.getBooks();
        if(books.length === 0){
            const table = document.querySelector('.table');
            const container = document.querySelector('.table-container');
            container.insertBefore(div, table);
        }else{
            if(document.querySelector('.empty')){
                document.querySelector('.empty').remove();
                return;
            }           
        } 
        
    }    
}