document.addEventListener('DOMContentLoaded',function(){
    let btnSearch = document.querySelector(".search-box__btn")
    let searchBox = document.querySelector(".search-box")
    let searchInput = document.querySelector(".search-box__input")

    // function handleClick(){
    //     searchBox.classList.add('active')
    // }
    // if(btnSearch){
    //     btnSearch.addEventListener('click',handleClick)
    // }

    btnSearch.addEventListener('click',function(){
        this.parentElement.classList.toggle('active')
        if (this.previousElementSibling) {
        console.log(this.previousElementSibling); 
        this.previousElementSibling.focus(); 
    } else {
        console.error('No previous element to focus on.');
    }
    })
})