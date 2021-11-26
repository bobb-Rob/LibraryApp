

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


  // Book Collection Section
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






// addBookForm.appendChild(author, bookTitle, pages, readStatus);
// addBookForm.appendChild(bookTitle);
// addBookForm.appendChild(pages);
// addBookForm.appendChild(readStatus);
// pageContainer.appendChild(addBookForm);

// 






console.log(pageContainer)
