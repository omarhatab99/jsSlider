//generate list of pagination 
let sliderList = document.querySelector(".slider-content");
let sliderListItem = document.querySelectorAll(".slider-item")
let paginationList = document.querySelector(".slider-pagination");
let controlsBtn = document.querySelectorAll(".slider-controls");
let prevBtn = document.getElementById("prev");
let nextBtn = document.getElementById("next");



//function Create pagination in html
function paginationCreate() {
    
    //generate loop for create pagination depending on slider items
    for (let index = 0; index < sliderListItem.length; index++) {
        let paginationItem = document.createElement("li");

        //style
        paginationItem.classList.add("pagination-item");  
        
        //append 
        paginationList.appendChild(paginationItem);
    }

    document.querySelectorAll(".pagination-item")[0].classList.add("active");
}
//generate method for create pagination
paginationCreate();

let active = 0;

//generate function of buttons controls prev and next
controlsBtn.forEach(function(controlBtn) {
    controlBtn.addEventListener("click" , () => {
        //check if button is prev or next
        (controlBtn.id === "prev") ? scrollPrev() : scrollNext();

        //set class active pagination
        paginationActive()
    });
})

//create method for next 
const scrollNext = () => {
        //check if active is more than length of item
        active = (active + 1 > sliderListItem.length - 1) ? 0 : active + 1;
        reloadSlider() //reload slider
};

//create method for prev 
const scrollPrev = () => {
    //check if active is less than zero
    active = (active - 1 < 0) ?  sliderListItem.length - 1 : active - 1;
    reloadSlider()  //reload slider
};

//create method reloadSlider 
const reloadSlider = () => {
    let checkLeft = sliderListItem[active].offsetLeft; //check left offset 
    sliderList.style.left = -checkLeft + "px";
}

//autoPlay slider
let autoPlaySlider = setInterval(() => {nextBtn.click()} , 8000);

//control autoplay
nextBtn.onmouseenter = () => {
    clearInterval(autoPlaySlider);
};

nextBtn.onmouseleave = () => {
    setTimeout(() => {
        autoPlaySlider = setInterval(() => {nextBtn.click()} , 8000);
    } , 5000);
};
prevBtn.onmouseenter = () => {
    clearInterval(autoPlaySlider);
};

prevBtn.onmouseleave = () => {
    setTimeout(() => {
        autoPlaySlider = setInterval(() => {nextBtn.click()} , 8000);
    } , 5000);
};


//create method do class active pagination 
let paginationListItems = document.querySelectorAll(".slider-pagination li");

function paginationActive() {
    paginationListItems = document.querySelectorAll(".slider-pagination li");
    paginationListItems.forEach((Item) => {
        Item.classList.remove("active");
    });
    paginationListItems[active].classList.add("active");
};


//reload slider by pagination 
paginationListItems.forEach((item , index) => {
    item.addEventListener("click" , () => {
        active = index; //change active value
        reloadSlider(); // generate method for reload slider 
        paginationActive(); //set class active
    });
});
