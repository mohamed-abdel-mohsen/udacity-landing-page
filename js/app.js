/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/




/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/


// declare the list parent 
let parentOfList = document.querySelector("#navbar__list");
// creating array of sections to loop throug it 
let allSectionsInArrays = Array.from(document.querySelectorAll("section"));
// build the nav
function creatingNewListItems() {
    for(section of allSectionsInArrays) {
        newItem = document.createElement("li");
        newItem.innerHTML = `<a href ="#${section.id}" class="menu__link"> ${section.id} </a>`;
        parentOfList.appendChild(newItem);
    }
}
creatingNewListItems();




// declaring the sections 
let sections = document.querySelectorAll("section");
//declare the button that will scroll to top 
let toTopBtn = document.querySelector(".to__top--butn");
// Add class 'active' to section when near top of viewport
window.addEventListener("scroll" , function() {
    
    if(scrollY > 200){
                    toTopBtn.style.display = "block";
            } else{
                    toTopBtn.style.display = "none";
            };

    sections.forEach(function(viewpoint) {
        if(viewpoint.getBoundingClientRect().top <= 400 && viewpoint.getBoundingClientRect().top >=-150){
            viewpoint.classList.add("your-active-class")
        }else {
            viewpoint.classList.remove("your-active-class")
            
        }        
    })
})

//highlighting the item background using delegation event
let listItems = document.querySelectorAll("li a");
parentOfList.addEventListener("click" , function(e) {
    const clicked = e.target.closest("li a");
    listItems.forEach(c=> c.classList.remove("selectedsection"));
    clicked.classList.add("selectedsection");
})

// Scroll to anchor ID using scrollTO event
// declaring the anchor link
let anchorLinks = document.querySelectorAll(".menu__link")
anchorLinks.forEach(function(el) {
    el.addEventListener("click" , function(e) {
        e.preventDefault();
        const catchTheSection = this.getAttribute('href');
        document.querySelector(catchTheSection).scrollIntoView({behavior: 'smooth'});
        
    });
})

//scroll to top page when click the btn
function toTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 





// Scroll to section on link click







// Set sections as active


