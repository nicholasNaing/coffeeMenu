const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log("entry");
        if (entry.isIntersecting) {
            entry.target.classList.add("show")
        } else {
            entry.target.classList.remove("show")
        }
    });
},{
    root:null,
    rootMargin:"-15% 0px -15% 0px"
});
  
const animateHiddens = document.querySelectorAll(".animateHidden");
const benefitsScroll = document.querySelectorAll(".beneScroll")

benefitsScroll.forEach((bene)=>{
    observer.observe(bene)
})

// Iterate over each element and tell the observer to observe it
animateHiddens.forEach((element) => {
    observer.observe(element);
});

let appContainer = document.querySelector(".social_media_container");

appContainer.addEventListener("click", function () {
this.classList.toggle("active");
});
  