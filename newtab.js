function setup(){
    createCanvas(200, 200)
    background(0)
}

const searchBar = document.getElementById("searchbar");



searchBar.addEventListener('keydown', (e) => {
    if(e.key === 'Enter'){
        if(searchBar.value !== "" || searchBar.value !== " " || searchBar.value !== null){
            if(searchBar.value.startsWith("https://") || searchBar.value.startsWith("http://")){
                window.location = `${searchBar.value}`
            } else if (searchBar.value.includes(".") && !searchBar.value.includes(" ")){
                window.location = `https://${searchBar.value}`
            } else{
                console.log("Searching", searchBar.value)
                window.location = `https://www.google.com/search?q=${searchBar.value}`
            }
            
            
        } else{
            print("Can't just say nothing!")
        }
        
    }
    
})
const autofill = document.getElementById('autofill')

autofill.addEventListener('click', () => {
    autofill.classList.toggle('autofiller')
})

if(document.querySelector('.autofiller')){
    searchBar.setAttribute('autocomplete', 'on')
}
else {
    searchBar.setAttribute('autocomplete', 'off')
}
