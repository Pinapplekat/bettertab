function setup(){
    createCanvas(200, 200)
    background(0)
}
const imgUrl = document.getElementById('bgurl')
const bgPopup = document.getElementById('bgpopup')
const wholeBg = document.getElementById('bg-whole')
const wholeColor = document.getElementById('color-whole')
const greyBg = document.getElementById('greybg')
const greyBg2 = document.getElementById('greybg2')
const greyBg7 = document.getElementById('greybg7')
const changeBtn = document.getElementById('backgroundpopup')
const searchBar = document.getElementById("searchbar");
const wholeTab = document.getElementById('tab-whole')
const launchTabCustom = document.getElementById('launchTabCustomize')
const launchColor = document.getElementById('launchColorCustomize')
const tabName = document.getElementById('tabText')
// SHORTCUT 1
const wholeShortcut1 = document.getElementById('shortcut1-whole')
const launchShortcut1 = document.getElementById('shortcut1')
const shortCut1Url = document.getElementById('UrlShortcut1')
const shortCut1Img = document.getElementById('imgUrlShortcut1')
const greyBg3 = document.getElementById('greybg3')

// SHORTCUT 2
const wholeShortcut2 = document.getElementById('shortcut2-whole')
const launchShortcut2 = document.getElementById('shortcut2')
const shortCut2Url = document.getElementById('UrlShortcut2')
const shortCut2Img = document.getElementById('imgUrlShortcut2')
const greyBg4 = document.getElementById('greybg4')

// SHORTCUT 3
const wholeShortcut3 = document.getElementById('shortcut3-whole')
const launchShortcut3 = document.getElementById('shortcut3')
const shortCut3Url = document.getElementById('UrlShortcut3')
const shortCut3Img = document.getElementById('imgUrlShortcut3')
const greyBg5 = document.getElementById('greybg5')

// SHORTCUT 4
const wholeShortcut4 = document.getElementById('shortcut4-whole')
const launchShortcut4 = document.getElementById('shortcut4')
const shortCut4Url = document.getElementById('UrlShortcut4')
const shortCut4Img = document.getElementById('imgUrlShortcut4')
const greyBg6 = document.getElementById('greybg6')




// SHORTCUT 1 START

if(localStorage.getItem('shortcut1SaveUrl') === 'notSaved' || localStorage.getItem('shortcut1SaveUrl') === null || localStorage.getItem('shortcut1SaveUrl') === ''){
    launchShortcut1.addEventListener('click', () => {
        shortcut1NoSave()
    })
    launchShortcut1.removeAttribute('href')
} else if(localStorage.getItem('shortcut1SaveUrl') !== 'notSaved' || localStorage.getItem('shortcut1SaveUrl') !== null || localStorage.getItem('shortcut1SaveUrl') !== ''){
    launchShortcut1.href = localStorage.getItem('shortcut1SaveUrl')
}

if(localStorage.getItem('shortcut1SaveImg') === 'plussign.png' || localStorage.getItem('shortcut1SaveImg') === null){
    document.getElementById('shortcutImg1').src = 'plussign.png'
} else{
    document.getElementById('shortcutImg1').src = localStorage.getItem('shortcut1SaveImg')
}
// SHORTCUT 1 END

// SHORTCUT 2 START

if(localStorage.getItem('shortcut2SaveUrl') === 'notSaved' || localStorage.getItem('shortcut2SaveUrl') === null || localStorage.getItem('shortcut2SaveUrl') === ''){
    launchShortcut2.addEventListener('click', () => {
        shortcut2NoSave()
    })
    launchShortcut2.removeAttribute('href')
} else{
    launchShortcut2.href = localStorage.getItem('shortcut2SaveUrl')
}

if(localStorage.getItem('shortcut2SaveImg') === 'plussign.png' || localStorage.getItem('shortcut2SaveImg') === null){
    document.getElementById('shortcutImg2').src = 'plussign.png'
} else{
    document.getElementById('shortcutImg2').src = localStorage.getItem('shortcut2SaveImg')
}
// SHORTCUT 2 END

// SHORTCUT 3 START

if(localStorage.getItem('shortcut3SaveUrl') === 'notSaved' || localStorage.getItem('shortcut3SaveUrl') === null || localStorage.getItem('shortcut3SaveUrl') === ''){
    launchShortcut3.addEventListener('click', () => {
        shortcut3NoSave()
    })
    launchShortcut3.removeAttribute('href')
} else if(localStorage.getItem('shortcut3SaveUrl') !== 'notSaved' || localStorage.getItem('shortcut3SaveUrl') !== null || localStorage.getItem('shortcut3SaveUrl') !== ''){
    launchShortcut3.href = localStorage.getItem('shortcut3SaveUrl')
}

if(localStorage.getItem('shortcut3SaveImg') === 'plussign.png' || localStorage.getItem('shortcut3SaveImg') === null){
    document.getElementById('shortcutImg3').src = 'plussign.png'
} else{
    document.getElementById('shortcutImg3').src = localStorage.getItem('shortcut3SaveImg')
}
// SHORTCUT 3 END

// SHORTCUT 4 START

if(localStorage.getItem('shortcut4SaveUrl') === 'notSaved' || localStorage.getItem('shortcut4SaveUrl') === null || localStorage.getItem('shortcut4SaveUrl') === ''){
    launchShortcut4.addEventListener('click', () => {
        shortcut4NoSave()
    })
    launchShortcut4.removeAttribute('href')
} else{
    launchShortcut4.href = localStorage.getItem('shortcut4SaveUrl')
}

if(localStorage.getItem('shortcut4SaveImg') === 'plussign.png' || localStorage.getItem('shortcut4SaveImg') === null){
    document.getElementById('shortcutImg4').src = 'plussign.png'
} else{
    document.getElementById('shortcutImg4').src = localStorage.getItem('shortcut4SaveImg')
}
// SHORTCUT 4 END





document.body.style.backgroundImage = `url('${localStorage.getItem('background')}')`
document.title = `${localStorage.getItem('tabName')}`

if(localStorage.getItem('background') != ''){
    searchBar.style.opacity = '0.7'
    searchBar.style.backgroundColor = '#262626'
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

launchColor.addEventListener('click', () => {
    wholeColor.style.visibility = 'visible'
})

greyBg2.addEventListener('click', () => {
    wholeTab.style.visibility = 'hidden'
})

greyBg7.addEventListener('click', () => {
    wholeColor.style.visibility = 'hidden'
})


greyBg3.addEventListener('click', () => {
    wholeShortcut1.style.visibility = 'hidden'
})

greyBg4.addEventListener('click', () => {
    wholeShortcut2.style.visibility = 'hidden'
})
greyBg5.addEventListener('click', () => {
    wholeShortcut3.style.visibility = 'hidden'
})
greyBg6.addEventListener('click', () => {
    wholeShortcut4.style.visibility = 'hidden'
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


// START SHORTCUT 1
wholeShortcut1.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
        if(shortCut1Url.value === ""){
            localStorage.setItem('shortcut1SaveUrl', 'notSaved')
        }else{
            if(shortCut1Url.value.startsWith('https://') || shortCut1Url.value.startsWith('http://')){
                localStorage.setItem('shortcut1SaveUrl', shortCut1Url.value)
                launchShortcut1.href = localStorage.getItem('shortcut1SaveUrl')
            }
            
        }

        if(shortCut1Img.value === ""){
            localStorage.setItem('shortcut1SaveImg', 'plussign.png')
        }else{
            if(shortCut1Img.value.startsWith('https://') || shortCut1Img.value.startsWith('http://')){
                localStorage.setItem('shortcut1SaveImg', shortCut1Img.value)
                document.getElementById('shortcutImg1').src = localStorage.getItem('shortcut1SaveImg')
            }
            
        }
    } else if(e.key === 'Escape'){
        wholeShortcut1.style.visibility = "hidden"
    }
    
})

launchShortcut1.addEventListener('click', () => {
    if(localStorage.getItem('shortcut1SaveUrl') === 'notSaved' || localStorage.getItem('shortcut1SaveUrl') === null){
        shortcut1NoSave()
    } else{
        window.location = localStorage.getItem('shortcut1SaveUrl')

    }
})

function shortcut1NoSave(){
    wholeShortcut1.style.visibility = 'visible'
}

// END SHORTCUT 1

// START SHORTCUT 2
wholeShortcut2.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
        if(shortCut2Url.value === ""){
            localStorage.setItem('shortcut2SaveUrl', 'notSaved')
        }else{
            if(shortCut2Url.value.startsWith('https://') || shortCut2Url.value.startsWith('http://')){
                localStorage.setItem('shortcut2SaveUrl', shortCut2Url.value)
                launchShortcut2.href = localStorage.getItem('shortcut2SaveUrl')
            }
            
        }

        if(shortCut2Img.value === ""){
            localStorage.setItem('shortcut2SaveImg', 'notSaved')
        }else{
            if(shortCut2Img.value.startsWith('https://') || shortCut2Img.value.startsWith('http://')){
                localStorage.setItem('shortcut2SaveImg', shortCut2Img.value)
                document.getElementById('shortcutImg2').src = localStorage.getItem('shortcut2SaveImg')
            }
            
        }
    } else if(e.key === 'Escape'){
        wholeShortcut2.style.visibility = "hidden"
    }
    
})

launchShortcut2.addEventListener('click', () => {
    if(localStorage.getItem('shortcut2SaveUrl') === 'notSaved' || localStorage.getItem('shortcut2SaveUrl') === null){
        shortcut2NoSave()
    } else{
        window.location = localStorage.getItem('shortcut2SaveUrl')

    }
})

function shortcut2NoSave(){
    wholeShortcut2.style.visibility = 'visible'
}

// END SHORTCUT 2


// START SHORTCUT 3
wholeShortcut3.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
        if(shortCut3Url.value === ""){
            localStorage.setItem('shortcut3SaveUrl', 'notSaved')
        }else{
            if(shortCut3Url.value.startsWith('https://') || shortCut3Url.value.startsWith('http://')){
                localStorage.setItem('shortcut3SaveUrl', shortCut3Url.value)
                launchShortcut3.href = localStorage.getItem('shortcut3SaveUrl')
            }
            
        }

        if(shortCut3Img.value === ""){
            localStorage.setItem('shortcut3SaveImg', 'plussign.png')
        }else{
            if(shortCut3Img.value.startsWith('https://') || shortCut3Img.value.startsWith('http://')){
                localStorage.setItem('shortcut3SaveImg', shortCut3Img.value)
                document.getElementById('shortcutImg3').src = localStorage.getItem('shortcut3SaveImg')
            }
            
        }
    } else if(e.key === 'Escape'){
        wholeShortcut3.style.visibility = "hidden"
    }
    
})

launchShortcut3.addEventListener('click', () => {
    if(localStorage.getItem('shortcut3SaveUrl') === 'notSaved' || localStorage.getItem('shortcut3SaveUrl') === null){
        shortcut3NoSave()
    } else{
        window.location = localStorage.getItem('shortcut3SaveUrl')

    }
})

function shortcut3NoSave(){
    wholeShortcut3.style.visibility = 'visible'
}

// END SHORTCUT 3

// START SHORTCUT 4
wholeShortcut4.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
        if(shortCut4Url.value === ""){
            localStorage.setItem('shortcut4SaveUrl', 'notSaved')
        }else{
            if(shortCut4Url.value.startsWith('https://') || shortCut4Url.value.startsWith('http://')){
                localStorage.setItem('shortcut4SaveUrl', shortCut4Url.value)
                launchShortcut4.href = localStorage.getItem('shortcut4SaveUrl')
            }
            
        }

        if(shortCut4Img.value === ""){
            localStorage.setItem('shortcut4SaveImg', 'plussign.png')
        }else{
            if(shortCut4Img.value.startsWith('https://') || shortCut4Img.value.startsWith('http://')){
                localStorage.setItem('shortcut4SaveImg', shortCut4Img.value)
                document.getElementById('shortcutImg4').src = localStorage.getItem('shortcut4SaveImg')
            }
            
        }
    } else if(e.key === 'Escape'){
        wholeShortcut4.style.visibility = "hidden"
    }
    
})

launchShortcut4.addEventListener('click', () => {
    if(localStorage.getItem('shortcut4SaveUrl') === 'notSaved' || localStorage.getItem('shortcut4SaveUrl') === null){
        shortcut4NoSave()
    } else{
        window.location = localStorage.getItem('shortcut4SaveUrl')

    }
})

function shortcut4NoSave(){
    wholeShortcut4.style.visibility = 'visible'
}

// END SHORTCUT 4

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

const clearShortcuts = document.getElementById('clearShortcuts')
clearShortcuts.addEventListener('click', () => {
    clearAllShortcuts()
})
function clearAllShortcuts(){
    localStorage.removeItem('shortcut1SaveUrl')
    localStorage.removeItem('shortcut2SaveUrl')
    localStorage.removeItem('shortcut3SaveUrl')
    localStorage.removeItem('shortcut4SaveUrl')
    localStorage.removeItem('shortcut1SaveImg')
    localStorage.removeItem('shortcut2SaveImg')
    localStorage.removeItem('shortcut3SaveImg')
    localStorage.removeItem('shortcut4SaveImg')

    window.location.reload()
}

const colorSubmit = document.getElementById('colorsubmit')
const colorInput = document.getElementById('colorInput')

clockElement.style.backgroundColor = localStorage.getItem('mainColor')
document.getElementById('shortcut1').style.backgroundColor = localStorage.getItem('mainColor')
document.getElementById('shortcut2').style.backgroundColor = localStorage.getItem('mainColor')
document.getElementById('shortcut3').style.backgroundColor = localStorage.getItem('mainColor')
document.getElementById('shortcut4').style.backgroundColor = localStorage.getItem('mainColor')
document.getElementById('footer').style.backgroundColor = localStorage.getItem('mainColor')
console.log(localStorage.mainColor)
if(localStorage.mainColor === '#000000'){
    document.getElementById('betterThanYou').style.color = 'white'
    document.getElementById('betterVideo').style.color = 'white'
    document.getElementById('betterAssistant').style.color = 'white'
    document.getElementById('credits').style.color = 'white'
    document.getElementById('clockToggleLabel').style.color = 'white'
    document.getElementById('everybetterProjectCredits').style.color = 'white'
    document.getElementById('madeByMeCredits').style.color = 'white'
    document.getElementById('betterTabCredits').style.color = 'white'
    searchBar.style.color = 'white'

} else if(localStorage.mainColor === '#ffffff'){
    document.getElementById('betterThanYou').style.color = 'black'
    document.getElementById('betterVideo').style.color = 'black'
    document.getElementById('betterAssistant').style.color = 'black'
    document.getElementById('credits').style.color = 'black'
    document.getElementById('clockToggleLabel').style.color = 'black'
    document.getElementById('everybetterProjectCredits').style.color = 'black'
    document.getElementById('madeByMeCredits').style.color = 'black'
    document.getElementById('betterTabCredits').style.color = 'black'
    document.querySelector('.clock-time').style.color = 'black'
    document.querySelector('.clock-ampm').style.color = 'black'
    document.querySelector('.clock-second').style.color = 'black'
    searchBar.style.color = 'black'


}

colorSubmit.addEventListener('click', () => {
    localStorage.setItem('mainColor', colorInput.value)
    
    wholeColor.style.visibility = 'hidden'
    clockElement.style.backgroundColor = localStorage.getItem('mainColor')
    document.getElementById('shortcut1').style.backgroundColor = localStorage.getItem('mainColor')
    document.getElementById('shortcut2').style.backgroundColor = localStorage.getItem('mainColor')
    document.getElementById('shortcut3').style.backgroundColor = localStorage.getItem('mainColor')
    document.getElementById('shortcut4').style.backgroundColor = localStorage.getItem('mainColor')
    document.getElementById('footer').style.backgroundColor = localStorage.getItem('mainColor')
    searchBar.style.backgroundColor = localStorage.getItem('mainColor')

    window.location.reload()
    
})

const resetColors = document.getElementById('resetColors')

resetColors.addEventListener('click', () => {
    localStorage.removeItem('mainColor')
    window.location.reload()
})
