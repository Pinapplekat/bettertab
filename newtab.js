function setup(){
    createCanvas(200, 200)
    background(0)
}
const imgUrl = document.getElementById('bgurl')
const bgPopup = document.getElementById('bgpopup')
const wholeBg = document.getElementById('bg-whole')
const greyBg = document.getElementById('greybg')
const changeBtn = document.getElementById('backgroundpopup')
const searchBar = document.getElementById("searchbar");

document.body.style.backgroundImage = `url('${localStorage.getItem('background')}')`


if(localStorage.getItem('background') != ''){
    searchBar.style.opacity = '0.7'
    searchBar.style.backgroundColor = 'black'
}

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

if(document.querySelector('.autofiller')){
    searchBar.setAttribute('autocomplete', 'on')
}
else {
    searchBar.setAttribute('autocomplete', 'off')
}



changeBtn.addEventListener('click', () => {
    wholeBg.style.visibility = 'visible'
})

greyBg.addEventListener('click', () => {
    wholeBg.style.visibility = 'hidden'
})







wholeBg.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
        if(imgUrl.value === ""){
            localStorage.setItem('background', imgUrl.value)
            
            searchBar.style.opacity = '1'
            searchBar.style.backgroundColor = '#FF8F9E'
            document.body.style.background = ''

        }else{

            localStorage.setItem('background', imgUrl.value)

            window.localStorage.setItem('bg', imgUrl.value)
            document.body.style.backgroundImage = `url('${localStorage.getItem('background')}')`
            searchBar.style.opacity = '0.7'
            searchBar.style.backgroundColor = 'black'
        }
    } else if(e.key === 'Escape'){
        wholeBg.style.visibility = "hidden"
    }
    
})



class DigitalClock {
    constructor(element) {
      this.element = element;
    }
  
    start() {
      this.update();
  
      setInterval(() => {
        this.update();
      }, 500);
    }
  
    update() {
      const parts = this.getTimeParts();
      const minuteFormatted = parts.minute.toString().padStart(2, "0");
      const timeFormatted = `${parts.hour}:${minuteFormatted}`;
      const amPm = parts.isAm ? "AM" : "PM";
      const secondFormatted = parts.second.toString().padStart(2, "0")
  
      this.element.querySelector(".clock-time").textContent = timeFormatted;
      this.element.querySelector(".clock-ampm").textContent = amPm;
      this.element.querySelector(".clock-second").textContent = `${secondFormatted} s`;
    }
  
    getTimeParts() {
      const now = new Date();
  
      return {
        hour: now.getHours() % 12 || 12,
        minute: now.getMinutes(),
        second: now.getSeconds(),
        isAm: now.getHours() < 12
      };
    }
  }
  
  const clockElement = document.querySelector(".clock");
  const clockObject = new DigitalClock(clockElement);
  
  clockObject.start();
  
