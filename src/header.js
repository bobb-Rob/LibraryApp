import { library } from "./index";

const header = (function(){

    function component(comp, klassName){
        const element = document.createElement(comp)
        element.className = klassName;
        return element
      };

    // Nav Bar
    const navBar = component("div", "navBar");
    const navBarTitle = component("h1", "page-title");
    navBarTitle.textContent = "User Personal Library";
    
    navBar.appendChild(navBarTitle); 
    return { navBar };

})()


export { header }