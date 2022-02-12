function setup(){
    createCanvas(200, 200)
    background(0)
}
const imgUrl = document.getElementById('bgurl')
const bgPopup = document.getElementById('bgpopup')
const wholeBg = document.getElementById('bg-whole')
const greyBg = document.getElementById('greybg')
const greyBg2 = document.getElementById('greybg2')
const changeBtn = document.getElementById('backgroundpopup')
const searchBar = document.getElementById("searchbar");
const wholeTab = document.getElementById('tab-whole')
const launchTabCustom = document.getElementById('launchTabCustomize')
const tabName = document.getElementById('tabText')

document.body.style.backgroundImage = `url('${localStorage.getItem('background')}')`
document.title = `${localStorage.getItem('tabName')}`

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


launchTabCustom.addEventListener('click', () => {
    wholeTab.style.visibility = 'visible'
})

greyBg2.addEventListener('click', () => {
    wholeTab.style.visibility = 'hidden'
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

            document.body.style.backgroundImage = `url('${localStorage.getItem('background')}')`
            searchBar.style.opacity = '0.7'
            searchBar.style.backgroundColor = 'black'
        }
    } else if(e.key === 'Escape'){
        wholeBg.style.visibility = "hidden"
    }
    
})




wholeTab.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
        if(tabName.value === ""){
            localStorage.setItem('tabName', tabName.value)
            
            document.title = 'New Tab'

        }else{

            localStorage.setItem('tabName', tabName.value)

            document.title = `${localStorage.getItem('tabName')}`
        }
    } else if(e.key === 'Escape'){
        wholeTab.style.visibility = "hidden"
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
      this.element.querySelector(".clock-second").textContent = `${secondFormatted}s`;
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
  


  dragElement(document.getElementById("draggable"));

function dragElement(elmnt) {
  var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
  if (document.getElementById(elmnt.id + "draggable")) {

    document.getElementById(elmnt.id + "draggable").onmousedown = dragMouseDown;
  } else {

    elmnt.onmousedown = dragMouseDown;
  }

  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();

    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;

    document.onmousemove = elementDrag;
  }

  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();

    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;

    elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
    elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
  }

  function closeDragElement() {
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
const clockDisplay = document.querySelector('.clock')

const isFixed = localStorage.getItem('isFixed')

if(isFixed === true){
    document.querySelector('#clockPosToggle').ariaChecked = true
    clockDisplay.classList.add('fixed')
}else{
    document.querySelector('#clockPosToggle').ariaChecked = false
    clockDisplay.classList.remove('fixed')

}

document.querySelector('#clockPosToggle').addEventListener('click', () => {
        const clockDisplay = document.querySelector('.clock')
        localStorage.setItem('isFixed', isFixed)
        clockDisplay.classList.toggle('fixed')
})

if(document.querySelector('.clock').className.includes('fixed')){
    const isFixed = true
    localStorage.setItem('isFixed', isFixed)

} else {
    const isFixed = false
    localStorage.setItem('isFixed', isFixed)
}
