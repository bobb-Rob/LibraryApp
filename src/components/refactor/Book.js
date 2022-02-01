import uniqid from 'uniqid';

export default class Book {
    constructor(title, author, country, isbn){
        this.title = title;
        this.author = author;
        this.country = country;
        this.isbn = isbn;
        this.readStatus = false;
        this.id = uniqid();
    }
    


    toggleReadStatus(){
        this.readStatus =  !this.readStatus;
    }


}