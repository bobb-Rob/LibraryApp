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

    // static handleReadStatusChange(){
    //     const radioButtons = document.querySelectorAll('input[name="readstatus"]'); 

    //     radioButtons.forEach(btn => console.log(btn.id))     
    //     // 
    //     // for(const radioBtn of radioButtons){
    //     //     if(radioBtn.checked === true){
    //     //         if(radioBtn.value === 'yes'){
    //     //             this.readStatus =  true;
    //     //             document.querySelector('#yes-div').style.backgroundColor = 'rgb(170, 228, 158)';
    //     //         }
    //     //         return;
    //     //     }else{
    //     //         this.readStatus =  false;
    //     //         document.querySelector('#no-div').style.backgroundColor = 'rgb(218, 38, 38)';
    //     //     }
    //     // }
       
    // }


}