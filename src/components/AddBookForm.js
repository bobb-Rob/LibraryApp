

const form = (() => {

    const formWrapper = document.getElementById("form-container");

    const bookName = document.getElementById("author-name");
    const bookAuthor = document.getElementById("book-title");
    const pagesCount = document.getElementById("no-of-pages");
    const pageCountLabel = document.getElementById("label-display"); 
    const readStatus = document.getElementById("read-status");  

    let readStatusDisplayDiv = document.querySelector(".new-read-status");

    // close form button evnt
    const formCloseBtn = document.querySelector(".close-btn");
    formCloseBtn.addEventListener("click", ()=>{
    formWrapper.style.display = "none";
    })

    const clearForm = () =>{
        bookName.value = ""; 
        bookAuthor.value = ""; 
        pagesCount.value = "";
        readStatus.checked = false;
      };

      const readStatusDisplay = () => readStatus.checked === true ? "Read" : "Not read";

    const isPageValueANumber = () =>{
        if(isNaN(pagesCount.value)){
          pageCountLabel.textContent = "Pages must be numbers only";
          pageCountLabel.style.color = "red";
          return false;
        }
      };


    return { formWrapper, bookName, bookAuthor, pagesCount, pageCountLabel, readStatus, clearForm, readStatusDisplay, readStatusDisplayDiv, isPageValueANumber  }

})()

export { form }