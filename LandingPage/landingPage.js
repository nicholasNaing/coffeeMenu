document.addEventListener("DOMContentLoaded",function(){
    let appContainer = document.querySelector(".social_media_container")

    appContainer.addEventListener("click",function(){
        this.classList.toggle("active")
    })
})
