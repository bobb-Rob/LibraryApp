import { library } from "./index.js";


const allBooks = (() => {
    
    function component(comp, klassName){
        const element = document.createElement(comp)
        element.className = klassName;
        return element
      };


    // Collection Section on right
  const collection = component("div", "collection");  
  const collectionHeading = component("h3", "col-heading");
        collectionHeading.textContent = "My Collection";
        collection.appendChild(collectionHeading);
        
    const collectionHolder = component("div", "collection-holder");
    collection.appendChild(collectionHolder);
      

      const createNewBookHolder = function(title, author, pages, readSt) {
          const newBookHolder = component("div", "new-book-holder"); 

          const newbookImageWrapper = component("div", "new-img-wrapper")
          const newbookimg = component("img", "new-book-image");
                newbookImageWrapper.appendChild(newbookimg);
                newBookHolder.appendChild(newbookImageWrapper);

          const newBookDescription = component("div", "new-book-desc");    
              // Book description display - using P at end of variable to know it is a paragraph element 
                const newBookTitleP = component("p", "new-book-title");
                newBookTitleP.textContent = `Title: ${title}`;
                newBookDescription.appendChild(newBookTitleP);

                const newAuthorP = component("p", "new-author")
                newAuthorP.textContent = `Author: ${author}`;
                newBookDescription.appendChild(newAuthorP);

                const newPagesP = component("p", "new-no-of-pages");
                newPagesP.textContent = `Pages: ${pages}`;
                newBookDescription.appendChild(newPagesP);

                const newReadStatusP = component("p", "new-read-status");
                newReadStatusP.textContent = `Read Status: ${readSt}`;
                newBookDescription.appendChild(newReadStatusP);

                const ReadNowBtn = component("button", "read-now-btn")
                ReadNowBtn.textContent = "Read now";
                newBookDescription.appendChild(ReadNowBtn);
      newBookHolder.appendChild(newBookDescription);
      return newBookHolder;
  }



    return { collection, createNewBookHolder, collectionHolder }

})()

export { allBooks }