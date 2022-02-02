import uniqid from 'uniqid';

export default class Book {
    constructor(title, author, country, isbn, readStatus){
        this.title = title;
        this.author = author;
        this.country = country;
        this.isbn = isbn;
        this.readStatus = readStatus;
        this.id = uniqid();
        this.toggleReadStatus = this.toggleReadStatus.bind(this);
    }

    toggleReadStatus(){  
        this.readStatus =  !this.readStatus;
    }

}