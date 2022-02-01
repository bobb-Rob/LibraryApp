



const NavBar = (() => {
    const createNavBar = () => {            
        const navBar = document.createElement("div");
        navBar.className = "navBar";
        navBar.innerHTML = `<h1 class='page-title'>User personal Library</h1>
        <div class='add-btn-div' ><button  
        onclick='() => UI.showForm()' 
        class='add-book-btn'
        >Add Book</button></div> 
        `;
        const form = document.querySelector('#form-container');
        document.querySelector('#mainpage-container').insertBefore(navBar, form);  
    }

    return {createNavBar}

})()

export default NavBar