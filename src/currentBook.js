import { library } from "./index.js";

const currentBook = (function (){

    function component(comp, klassName){
        const element = document.createElement(comp)
        element.className = klassName;
        return element
      };

// current Book secton on the left
    
    
        const currentRead = component("div", "current-read");
        const currentReadHeading = component("h3", "cur-heading");
        currentReadHeading.textContent = "Current Book";
        currentRead.appendChild(currentReadHeading);         
   

    return { currentRead }
})()


export { currentBook } 