import { currentBook } from "./currentBook.js";
import { header } from "./header.js";
import { allBooks } from "./allBook";
import { bookLogic } from "./Script.js";

import './css/style.css';


const library = (function(){
  
  const pageContainer = document.getElementById("mainpage-container");
  console.log(pageContainer);

  function component(comp, klassName){
    const element = document.createElement(comp)
    element.className = klassName;
    return element
  };

   // Section below Header
   const librarySection = component("div", "books-section");   

  // current Book secton on the left
  const CR = currentBook.currentRead;
  librarySection.appendChild(CR);

  // Collection on the right
  librarySection.appendChild(allBooks.collection);
 
  

  pageContainer.insertAdjacentElement("afterbegin", librarySection);
  // Add Button;       Note: The Add Button is appended before the NavBar but 
// it appears on the browser in reverse order i.e "navBar" is dislayed before "Add Book btn".
  pageContainer.insertAdjacentElement("afterbegin", bookLogic.addBookButton);
  pageContainer.insertAdjacentElement("afterbegin", header.navBar); 
    
    

    

    return { librarySection, component };

})()




  export { library }