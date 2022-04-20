function setup(){
    createCanvas(200, 200)
    background(0)
}
var isFull = false;

const toolScroll = document.getElementById('toolsPopop')
const imgUrl = document.getElementById('bgurl')
const imgUpload = document.getElementById('bgupload')
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
const timeSetBtn = document.getElementById('timetotitle')
const contItem1 = document.getElementById('context-item1')
const contItem2 = document.getElementById('context-item2')
const contItem3 = document.getElementById('context-item3')
const timerBase = document.getElementById('timer')
const timerHr = document.getElementById('hour')
const timerMin = document.getElementById('minute')
const timerSec = document.getElementById('second')

const stopwatch = document.getElementById('stopwatch')
const watchHr = document.getElementById('watchhour')
const watchMin = document.getElementById('watchminute')
const watchSec = document.getElementById('watchsecond')
const watchMs = document.getElementById('watchMs')



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
    shortCut1Url.value = localStorage.getItem('shortcut1SaveUrl')
    launchShortcut1.title = localStorage.getItem('shortcut1SaveUrl')
}

if(localStorage.getItem('shortcut1SaveImg') === 'plussign.png' || localStorage.getItem('shortcut1SaveImg') === null){
    document.getElementById('shortcutImg1').src = 'plussign.png'
} else{
    document.getElementById('shortcutImg1').src = localStorage.getItem('shortcut1SaveImg')
    
}

if(localStorage.getItem('shortcut1SaveUrl') && localStorage.getItem('shortcut1SaveImg') == 'plussign.png'){
    launchShortcut1.href = localStorage.getItem('shortcut1SaveUrl')
    
    document.getElementById('shortcutImg1').src = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${localStorage.getItem('shortcut1SaveUrl')}&size=64`
}
// SHORTCUT 1 END

// SHORTCUT 2 START

if(localStorage.getItem('shortcut2SaveUrl') === 'notSaved' || localStorage.getItem('shortcut2SaveUrl') === null || localStorage.getItem('shortcut2SaveUrl') === ''){
    launchShortcut2.addEventListener('click', () => {
        shortcut2NoSave()
    })
    launchShortcut2.removeAttribute('href')
} else if(localStorage.getItem('shortcut2SaveUrl') !== 'notSaved' || localStorage.getItem('shortcut2SaveUrl') !== null || localStorage.getItem('shortcut2SaveUrl') !== ''){
    launchShortcut2.href = localStorage.getItem('shortcut2SaveUrl')
    launchShortcut2.title = localStorage.getItem('shortcut2SaveUrl')
    shortCut2Url.value = localStorage.getItem('shortcut2SaveUrl')

}

if(localStorage.getItem('shortcut2SaveImg') === 'plussign.png' || localStorage.getItem('shortcut2SaveImg') === null){
    document.getElementById('shortcutImg2').src = 'plussign.png'
} else{
    document.getElementById('shortcutImg2').src = localStorage.getItem('shortcut2SaveImg')
}

if(localStorage.getItem('shortcut2SaveUrl') && localStorage.getItem('shortcut2SaveImg') == 'plussign.png'){
    launchShortcut2.href = localStorage.getItem('shortcut2SaveUrl')
    document.getElementById('shortcutImg2').src = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${localStorage.getItem('shortcut2SaveUrl')}&size=64`
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
    launchShortcut3.title = localStorage.getItem('shortcut3SaveUrl')
    shortCut3Url.value = localStorage.getItem('shortcut3SaveUrl')
}

if(localStorage.getItem('shortcut3SaveImg') === 'plussign.png' || localStorage.getItem('shortcut3SaveImg') === null){
    document.getElementById('shortcutImg3').src = 'plussign.png'
} else{
    document.getElementById('shortcutImg3').src = localStorage.getItem('shortcut3SaveImg')
}

if(localStorage.getItem('shortcut3SaveUrl') && localStorage.getItem('shortcut3SaveImg') == 'plussign.png'){
    launchShortcut3.href = localStorage.getItem('shortcut3SaveUrl')
    document.getElementById('shortcutImg3').src = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${localStorage.getItem('shortcut3SaveUrl')}&size=64`
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
    launchShortcut4.title = localStorage.getItem('shortcut4SaveUrl')
    shortCut4Url.value = localStorage.getItem('shortcut4SaveUrl')
}

if(localStorage.getItem('shortcut4SaveImg') === 'plussign.png' || localStorage.getItem('shortcut4SaveImg') === null){
    document.getElementById('shortcutImg4').src = 'plussign.png'
} else{
    document.getElementById('shortcutImg4').src = localStorage.getItem('shortcut4SaveImg')
}

if(localStorage.getItem('shortcut4SaveUrl') && localStorage.getItem('shortcut4SaveImg') == 'plussign.png'){
    launchShortcut4.href = localStorage.getItem('shortcut4SaveUrl')
    document.getElementById('shortcutImg4').src = `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${localStorage.getItem('shortcut4SaveUrl')}&size=64`
}
// SHORTCUT 4 END

var toolsOpened = false

toolScroll.addEventListener('click', () => {
    if(toolsOpened == false){
        toolsOpened = true
        document.getElementById('footer').scrollIntoView()
    }else if(toolsOpened == true){
        toolsOpened = false
        document.body.scrollIntoView()
    }
    
})


document.body.style.backgroundImage = `url('${localStorage.getItem('background')}')`
document.getElementById('newscorner').style.backgroundImage = `url('${localStorage.getItem('background')}')`

if (localStorage.tabNameClock == "true"){
    timeToTab()
} else if(localStorage.tabNameClock == "false"){
    if(localStorage.tabName){
        document.title = `${localStorage.getItem('tabName')}`
    }
    document.title = `New Tab`
}


if(localStorage.getItem('background') != ''){
    // searchBar.style.opacity = '0.7'
    searchBar.style.backdropFilter = 'blur(15px)'
    searchBar.style.background = 'rgba(255, 255, 255, 0.2)'
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

// launchColor.addEventListener('click', () => {
//     wholeColor.style.visibility = 'visible'
// })

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
            
            // searchBar.style.opacity = '1'
            searchBar.style.backgroundColor = '#121212'
            document.body.style.background = ''

        }else{

            localStorage.setItem('background', imgUrl.value)

            document.body.style.backgroundImage = `url('${localStorage.getItem('background')}')`
            // searchBar.style.opacity = '0.7'
            searchBar.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
            document.getElementById('newscorner').style.backgroundImage = `url('${localStorage.getItem('background')}')`

        }
    } else if(e.key === 'Escape'){
        wholeBg.style.visibility = "hidden"
    }
    
})
imgUpload.addEventListener("change", function(e) {
    var reader = new FileReader();
    reader.readAsDataURL(imgUpload.files[0]);
    reader.onload = function () {
        console.log(reader.result);  
        document.body.style.backgroundImage = "url(" + reader.result + ")"; // or something 
        document.getElementById('newscorner').style.backgroundImage = `url('${reader.result}')`
        localStorage.setItem('background', reader.result)
        searchBar.style.backgroundColor = 'rgba(255, 255, 255, 0.2)'
    };
    reader.onerror = function (error) {
        console.log('Error: ', error);
    };
})
wholeTab.addEventListener('keydown', (e) => {
    console.log(e.key)
    if(e.key === 'Enter'){
        if(tabName.value === ""){
            localStorage.setItem('tabName', 'New Tab')
            localStorage.setItem('tabNameClock', false)
            document.title = 'New Tab'
            

        }else{

            localStorage.setItem('tabName', tabName.value)
            localStorage.setItem('tabNameClock', false)
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
            } else if(shortCut1Url.value.includes('.') && !shortCut1Url.value.includes(' '))
                localStorage.setItem('shortcut1SaveUrl', `https://${shortCut1Url.value}`)
                launchShortcut1.href = localStorage.getItem('shortcut1SaveUrl')
                launchShortcut1.title = localStorage.getItem('shortcut1SaveUrl')
        }

        if(shortCut1Img.value == '' && shortCut1Url.value.includes('.') && !shortCut1Url.value.includes(' ')){
            localStorage.setItem('shortcut1SaveImg', `http://www.google.com/s2/favicons?domain=${shortCut1Url.value}&sz=64`)
            document.getElementById('shortcutImg1').src = localStorage.getItem('shortcut1SaveImg')
            
        } else if(shortCut1Img.value == '' && shortCut1Url.value.startsWith('https://') || shortCut1Img.value == '' && shortCut1Url.value.startsWith('http://')){
            localStorage.setItem('shortcut1SaveImg', `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${shortCut1Url.value}`)
            document.getElementById('shortcutImg1').src = localStorage.getItem('shortcut1SaveImg')
        }

        if(shortCut1Img.value === ""){
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
            } else if(shortCut2Url.value.includes('.') && !shortCut2Url.value.includes(' '))
                localStorage.setItem('shortcut2SaveUrl', `https://${shortCut2Url.value}`)
                launchShortcut2.title = localStorage.getItem('shortcut2SaveUrl')
                launchShortcut2.href = localStorage.getItem('shortcut2SaveUrl')
        }

        if(shortCut2Img.value == '' && shortCut2Url.value.includes('.') && !shortCut2Url.value.includes(' ')){
            localStorage.setItem('shortcut2SaveImg', `http://www.google.com/s2/favicons?domain=${shortCut2Url.value}&sz=64`)
            document.getElementById('shortcutImg2').src = localStorage.getItem('shortcut2SaveImg')
            
        } else if(shortCut2Img.value == '' && shortCut2Url.value.startsWith('https://') || shortCut2Img.value == '' && shortCut2Url.value.startsWith('http://')){
            localStorage.setItem('shortcut2SaveImg', `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${shortCut2Url.value}`)
            document.getElementById('shortcutImg2').src = localStorage.getItem('shortcut2SaveImg')
        }

        if(shortCut2Img.value === ""){
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
            } else if(shortCut3Url.value.includes('.') && !shortCut3Url.value.includes(' '))
                localStorage.setItem('shortcut3SaveUrl', `https://${shortCut3Url.value}`)
                launchShortcut3.href = localStorage.getItem('shortcut3SaveUrl')
                launchShortcut3.title = localStorage.getItem('shortcut3SaveUrl')
        }

        if(shortCut3Img.value == '' && shortCut3Url.value.includes('.') && !shortCut3Url.value.includes(' ')){
            localStorage.setItem('shortcut3SaveImg', `http://www.google.com/s2/favicons?domain=${shortCut3Url.value}&sz=64`)
            document.getElementById('shortcutImg3').src = localStorage.getItem('shortcut3SaveImg')
            
        } else if(shortCut3Img.value == '' && shortCut3Url.value.startsWith('https://') || shortCut3Img.value == '' && shortCut3Url.value.startsWith('http://')){
            localStorage.setItem('shortcut3SaveImg', `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${shortCut3Url.value}`)
            document.getElementById('shortcutImg3').src = localStorage.getItem('shortcut3SaveImg')
        }

        if(shortCut3Img.value === ""){
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
            } else if(shortCut4Url.value.includes('.') && !shortCut4Url.value.includes(' '))
                localStorage.setItem('shortcut4SaveUrl', `https://${shortCut4Url.value}`)
                launchShortcut4.href = localStorage.getItem('shortcut4SaveUrl')
                launchShortcut4.title = localStorage.getItem('shortcut4SaveUrl')
        }

        if(shortCut4Img.value == '' && shortCut4Url.value.includes('.') && !shortCut4Url.value.includes(' ')){
            localStorage.setItem('shortcut4SaveImg', `http://www.google.com/s2/favicons?domain=${shortCut4Url.value}&sz=64`)
            document.getElementById('shortcutImg4').src = localStorage.getItem('shortcut4SaveImg')
            
        } else if(shortCut4Img.value == '' && shortCut4Url.value.startsWith('https://') || shortCut4Img.value == '' && shortCut4Url.value.startsWith('http://')){
            localStorage.setItem('shortcut4SaveImg', `https://t0.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${shortCut4Url.value}`)
            document.getElementById('shortcutImg4').src = localStorage.getItem('shortcut4SaveImg')
        }

        if(shortCut4Img.value === ""){
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

// if(isFixed === true){
//     document.querySelector('#clockPosToggle').ariaChecked = true
//     clockDisplay.classList.add('fixed')
// }else{
//     document.querySelector('#clockPosToggle').ariaChecked = false
//     clockDisplay.classList.remove('fixed')

// }

// document.querySelector('#clockPosToggle').addEventListener('click', () => {
//         const clockDisplay = document.querySelector('.clock')
//         localStorage.setItem('isFixed', isFixed)
//         clockDisplay.classList.toggle('fixed')
// })

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
    // document.getElementById('clockToggleLabel').style.color = 'white'
    document.getElementById('everybetterProjectCredits').style.color = 'white'
    document.getElementById('madeByMeCredits').style.color = 'white'
    document.getElementById('betterTabCredits').style.color = 'white'
    searchBar.style.color = 'white'

} else if(localStorage.mainColor === '#ffffff'){
    document.getElementById('betterThanYou').style.color = 'black'
    document.getElementById('betterVideo').style.color = 'black'
    document.getElementById('betterAssistant').style.color = 'black'
    document.getElementById('credits').style.color = 'black'
    // document.getElementById('clockToggleLabel').style.color = 'black'
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

// resetColors.addEventListener('click', () => {
//     localStorage.removeItem('mainColor')
//     window.location.reload()
// })


var elem = document.documentElement;
document.addEventListener('keydown', (e) => {
    
})

document.addEventListener('keydown', (e) => {
    if(e.ctrlKey && e.altKey && e.which == 67){
        enterFullScreen()
        
    } else if(e.which == 27 || e.key == "f"){
        leaveFullScreen()
    }
})

function enterFullScreen(){
    isFull = true
    if (elem.requestFullscreen) {
        elem.requestFullscreen();
      } else if (elem.webkitRequestFullscreen) { /* Safari */
        elem.webkitRequestFullscreen();
      } else if (elem.msRequestFullscreen) { /* IE11 */
        elem.msRequestFullscreen();
    }
    clockDisplay.classList.add('clock-large')
    clockDisplay.classList.remove('clock')
    clockDisplay.style.top = "0"
    clockDisplay.style.left = "0"
    clockDisplay.style.cursor = 'none'
    // document.querySelector(".clock-ampm").classList.add('hidden')
    document.querySelector(".clock-second").classList.add('hidden')
    document.getElementById('shortcuts').classList.add('hidden')
    document.getElementById('search').classList.add('hidden')
    document.getElementById('mainlogo').classList.add('hidden')
    document.getElementById('footer').classList.add('hidden')
    clockDisplay.removeAttribute('title')
}

function leaveFullScreen(){
    isFull = false;
    document.exitFullscreen()
        clockDisplay.classList.remove('clock-large')
        clockDisplay.classList.add('clock-swipe')
        clockDisplay.style.top = '0'
        setTimeout(function(){
            clockDisplay.classList.remove('clock-swipe')
            clockDisplay.classList.add('clock')
            
        },1000);
        clockDisplay.removeAttribute('style')
        // document.querySelector(".clock-ampm").classList.remove('hidden')
        document.querySelector(".clock-second").classList.remove('hidden')
        document.querySelector(".clock-second").classList.remove('hidden')
        document.getElementById('shortcuts').classList.remove('hidden')
        document.getElementById('search').classList.remove('hidden')
        document.getElementById('mainlogo').classList.remove('hidden')
        document.getElementById('footer').classList.remove('hidden')
        clockDisplay.title = 'CTRL + ALT + C'
}

clockElement.addEventListener("contextmenu", function(event){
    event.preventDefault()
    var contextElement = document.getElementById("context-menu")
    contextElement.style.top = event.clientY + 'px'
    contextElement.style.left = event.clientX + 'px'
    contextElement.classList.add("active")

})

stopwatch.addEventListener("contextmenu", function(event){
    event.preventDefault()
    var contextElementTimer = document.getElementById("context-menu-timer")
    contextElementTimer.style.top = event.clientY + 'px'
    contextElementTimer.style.left = event.clientX + 'px'
    contextElementTimer.classList.add("active")
    
})

launchShortcut1.addEventListener("contextmenu", function(event){
    event.preventDefault()
    var contextElementShortcut1 = document.getElementById("context-menu-shortcut1")
    contextElementShortcut1.style.top = event.clientY + 'px'
    contextElementShortcut1.style.left = event.clientX + 'px'
    contextElementShortcut1.classList.add("active")
    
})

launchShortcut2.addEventListener("contextmenu", function(event){
    event.preventDefault()
    var contextElementShortcut2 = document.getElementById("context-menu-shortcut2")
    contextElementShortcut2.style.top = event.clientY + 'px'
    contextElementShortcut2.style.left = event.clientX + 'px'
    contextElementShortcut2.classList.add("active")
    
})

launchShortcut3.addEventListener("contextmenu", function(event){
    event.preventDefault()
    var contextElementShortcut3 = document.getElementById("context-menu-shortcut3")
    contextElementShortcut3.style.top = event.clientY + 'px'
    contextElementShortcut3.style.left = event.clientX + 'px'
    contextElementShortcut3.classList.add("active")
    
})

launchShortcut4.addEventListener("contextmenu", function(event){
    event.preventDefault()
    var contextElementShortcut4 = document.getElementById("context-menu-shortcut4")
    contextElementShortcut4.style.top = event.clientY + 'px'
    contextElementShortcut4.style.left = event.clientX + 'px'
    contextElementShortcut4.classList.add("active")
    
})

searchBar.addEventListener("contextmenu", function(event){
    event.preventDefault()
    const contextElementSearch = document.getElementById('context-menu-searchbar')
    contextElementSearch.style.top = event.clientY + 'px'
    contextElementSearch.style.left = event.clientX + 'px'
    contextElementSearch.classList.add("active")
    
})


window.addEventListener("mouseup", () => {
    document.getElementById("context-menu-shortcut4").classList.remove('active')
    document.getElementById("context-menu-shortcut3").classList.remove('active')
    document.getElementById("context-menu-shortcut2").classList.remove('active')
    document.getElementById("context-menu-shortcut1").classList.remove('active')
    document.getElementById("context-menu-timer").classList.remove('active')
    document.getElementById("context-menu").classList.remove('active')
    document.getElementById("context-menu-searchbar").classList.remove('active')

})

document.getElementById('context-menu-shortcut1').addEventListener('contextmenu', (event) => {
    event.preventDefault()
})

document.getElementById('context-menu-searchbar').addEventListener('contextmenu', (event) => {
    event.preventDefault()
})

document.getElementById('context-menu').addEventListener('contextmenu', (event) => {
    event.preventDefault()
})

document.getElementById('context-menu-timer').addEventListener('contextmenu', (event) => {
    event.preventDefault()
})

document.getElementById('context-menu-shortcut2').addEventListener('contextmenu', (event) => {
    event.preventDefault()
})

document.getElementById('context-menu-shortcut3').addEventListener('contextmenu', (event) => {
    event.preventDefault()
})

document.getElementById('context-menu-shortcut4').addEventListener('contextmenu', (event) => {
    event.preventDefault()
})

timeSetBtn.addEventListener('click', (e) => {
    localStorage.setItem('tabNameClock', true)
    timeToTab()
    localStorage.setItem('tabName', null)
})

function timeToTab(){

    class TabClock {
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
      
          document.title = timeFormatted + ':' + secondFormatted
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

    const clockTab = new TabClock();
  
    clockTab.start();
  
    
            
    
}

window.addEventListener('mousemove', () => {
    if(isFull == true){
        contItem1.innerHTML = 'Exit Fullscreen'
    } else if(isFull == false){
        contItem1.innerHTML = 'Fullscreen'
    }
})


contItem1.addEventListener('mouseup', () => {
    if(isFull == true){
        leaveFullScreen()
        contItem1.innerHTML = 'Fullscreen'
    }  else if(isFull == false){
        enterFullScreen()
        contItem1.innerHTML = 'Exit Fullscreen'

    }
    
})

contItem3.addEventListener('mouseup', () => {
    toggleTimer()
    
})
const contItem3Watch = document.getElementById('context-itemWatch')
contItem3Watch.addEventListener('mouseup', () => {
    toggleTimer()
    
})
const pauseWatch = document.getElementById('pauseWatch')
function toggleTimer(){
    if(stopwatch.style.visibility == 'visible'){
        stopwatch.style.visibility = 'hidden'
        killTimer()
        pauseWatch.innerHTML = 'Restart'
    } else if(!stopwatch.style.visibility || stopwatch.style.visibility == 'hidden'){
        stopwatch.style.visibility = 'visible'
    }
}





var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;
var stoptime = true;

function startTimer() {
  if (stoptime == true) {
        stoptime = false;
        timerCycle();
        
    }
}
function stopTimer() {
  if (stoptime == false) {
    stoptime = true;
  }
}

function killTimer(){
    stopTimer()
    ms = 0
    sec = 0
    min = 0
    hr = 0
}

function timerCycle() {
    if (stoptime == false) {
    ms = parseInt(ms)
    sec = parseInt(sec);
    min = parseInt(min);
    hr = parseInt(hr);
    ms = ms + 1;
    if (ms == 100){
        ms = 0 
        sec = sec + 1;
    }
    

    if (sec == 60) {
      min = min + 1;
      sec = 0;
      ms = 0;
    }
    if (min == 60) {
      hr = hr + 1;
      min = 0;
      sec = 0;
      ms = 0;
    }
    if (ms < 10 || ms == 0){
        ms = '0' + ms;
    }
    if (sec < 10 || sec == 0) {
      sec = '0' + sec;
    }
    if (min < 10 || min == 0) {
      min = '0' + min;
    }
    if (hr < 10 || hr == 0) {
      hr = '0' + hr;
    }
    watchSec.innerHTML = sec + '.'
    watchMin.innerHTML = min + ':'
    watchHr.innerHTML = hr + ':'
    watchMs.innerHTML = ms

    
    setTimeout(() => {
        timerCycle()
    }, 10);
  }
}


pauseWatch.addEventListener('click', () => {
    if(stoptime == false){
        stopTimer()
        pauseWatch.innerHTML = 'Resume'
    } else if(stoptime == true){
        startTimer()
        pauseWatch.innerHTML = 'Pause'
    }
    
})



const contItem1Shortcut1 = document.getElementById('context-item1Shortcut1')
contItem1Shortcut1.addEventListener('mouseup', () => {
    wholeShortcut1.style.visibility = "visible"
})

const contItem2Shortcut1 = document.getElementById('context-item2Shortcut1')
contItem2Shortcut1.addEventListener('mouseup', () => {
    localStorage.removeItem('shortcut1SaveUrl')
    localStorage.removeItem('shortcut1SaveImg')
    document.getElementById('shortcutImg1').src = 'plussign.png'
    launchShortcut1.removeAttribute('title')
    launchShortcut1.removeAttribute('href')

})

const contItem1Shortcut2 = document.getElementById('context-item1Shortcut2')
contItem1Shortcut2.addEventListener('mouseup', () => {
    wholeShortcut2.style.visibility = "visible"
})

const contItem2Shortcut2 = document.getElementById('context-item2Shortcut2')
contItem2Shortcut2.addEventListener('mouseup', () => {
    localStorage.removeItem('shortcut2SaveUrl')
    localStorage.removeItem('shortcut2SaveImg')
    document.getElementById('shortcutImg2').src = 'plussign.png'
    launchShortcut2.removeAttribute('title')
    launchShortcut2.removeAttribute('href')

})

const contItem1Shortcut3 = document.getElementById('context-item1Shortcut3')
contItem1Shortcut3.addEventListener('mouseup', () => {
    wholeShortcut3.style.visibility = "visible"
})

const contItem2Shortcut3 = document.getElementById('context-item2Shortcut3')
contItem2Shortcut3.addEventListener('mouseup', () => {
    localStorage.removeItem('shortcut3SaveUrl')
    localStorage.removeItem('shortcut3SaveImg')
    document.getElementById('shortcutImg3').src = 'plussign.png'
    launchShortcut3.removeAttribute('title')
    launchShortcut3.removeAttribute('href')

})

const contItem1Shortcut4 = document.getElementById('context-item1Shortcut4')
contItem1Shortcut4.addEventListener('mouseup', () => {
    wholeShortcut4.style.visibility = "visible"
})

const contItem2Shortcut4 = document.getElementById('context-item2Shortcut4')
contItem2Shortcut4.addEventListener('mouseup', () => {
    localStorage.removeItem('shortcut4SaveUrl')
    localStorage.removeItem('shortcut4SaveImg')
    document.getElementById('shortcutImg4').src = 'plussign.png'
    launchShortcut4.removeAttribute('href')
    launchShortcut4.removeAttribute('title')

})

const contItem1Search = document.getElementById('context-item1Search')
contItem1Search.addEventListener('mouseup', function () {
    const mySelection = window.getSelection().toString()
    navigator.clipboard.writeText(mySelection);
})

// const contItem2Search = document.getElementById('context-item2Search')
// contItem2Search.addEventListener('mouseup', function (e) {
//     selObj = window.getSelection()
//     var selectedText = selObj.toString()
//     var caretPos = e.target.selectionStart
//     navigator.clipboard
//         .readText()
//             .then(
//                 cliptext =>
//                     (selectionReplace(cliptext, caretPos)),
                    
//                     err => console.log(err)
//             )
// })

function selectionReplace(pastedString, eventInfo) {
    var selObj = window.getSelection()
    var removedString = `${selObj.toString()}`
   
    if(selObj == null || selObj == ''){
        
        var indexPosition = eventInfo.target.selectionStart
        console.log('Caret at: ', eventInfo.target.selectionStart)
        let origString = searchBar.value
        let stringToAdd = pastedString
        origString = origString.split('')
        origString.splice(indexPosition, 0, stringToAdd)
        newString = origString.join('')
        searchBar.value = newString
        console.log('New Value: ' + newString)
    } else{
        console.log(searchBar.value.replace(removedString, pastedString))
        searchBar.value = searchBar.value.replace(removedString, pastedString)
        console.log('New Value: ' + searchBar.value.replace(removedString, pastedString))
    
    }
    
    
    
}


const contItem3Search = document.getElementById('context-item3Search')
contItem3Search.addEventListener('mouseup', function () {
    var selObj = window.getSelection()
    var removedString = `${selObj.toString()}`
    navigator.clipboard.writeText(removedString);
    console.log('Removed + Copied: ' + removedString)
    console.log('New value: ' + searchBar.value.replace(removedString, ''))
    searchBar.value = searchBar.value.replace(removedString, '')
})
var newsopened = false
const ripple = document.getElementById('rippletransition')
const newsOpener = document.getElementById('newscornertoggle')
const newsCorner = document.getElementById('newscorner')

// variables
const generalBtn = document.getElementById("genral");
const businessBtn = document.getElementById("business");
const sportsBtn = document.getElementById("sport");
const entertainmentBtn = document.getElementById("entertainment");
const technologyBtn = document.getElementById("technology");
const searchBtn = document.getElementById("searchBtn");

const newsQuery = document.getElementById("newsQuery");
const newsType = document.getElementById("newsType");
const newsdetails = document.getElementById("newsdetails");

// Array
var newsDataArr = [];

// apis 
var itDepends = Math.floor(Math.random() * 3) + 1;
console.log(itDepends)
var API_KEY
if(itDepends == 1){
    API_KEY = "7zdGHjGLHpGBToVpUrkAqMtVl79peU8L"
} else if(itDepends == 2){
    API_KEY = "RHIG4O07wvBoVRoIxDPfY1ZSb0t9UWno"
} else if(itDepends == 3){
    API_KEY = "iWVQKM6VFbqvUbvCdpuJhYwDOZMWm43w"
} else{
    API_KEY = "RHIG4O07wvBoVRoIxDPfY1ZSb0t9UWno"
}

const HEADLINES_NEWS = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
const GENERAL_NEWS = `https://api.nytimes.com/svc/topstories/v2/home.json?api-key=${API_KEY}`;
const BUSINESS_NEWS = `https://api.nytimes.com/svc/topstories/v2/business.json?api-key=${API_KEY}`;
const SPORTS_NEWS = `https://api.nytimes.com/svc/topstories/v2/sports.json?api-key=${API_KEY}`;
const ENTERTAINMENT_NEWS = `https://api.nytimes.com/svc/topstories/v2/insider.json?api-key=${API_KEY}`;
const TECHNOLOGY_NEWS = `https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=${API_KEY}`;
// const SEARCH_NEWS = `https://api.nytimes.com/svc/topstories/v2/api-key=${API_KEY}&query=`;


newsOpener.addEventListener('mousedown', (e) => {
    if(newsopened == true){
        newsCorner.style.visibility = 'visible'
        ripple.classList.remove('open')
        ripple.classList.add('closed')
        newsCorner.removeAttribute('style')
        newsopened = false
        newsOpener.innerHTML = 'News'
        newsCorner.classList.add('closed')
        document.body.style.overflow = 'auto'
    } else if(newsopened == false){
        ripple.classList.remove('closed')
        ripple.classList.add('open')
        document.getElementById('newscorner').style.backgroundImage = `url('${localStorage.getItem('background')}')`
        newsOpener.innerHTML = 'Close'
        document.body.style.overflow = 'hidden'
        document.body.scrollIntoView()
        fetchGeneralNews()
        setTimeout(() => {
            newsCorner.style.visibility = 'visible'
            ripple.classList.add('fade')
            newsCorner.classList.remove('closed')
            setTimeout(() => {
                ripple.classList.remove('open')
                ripple.classList.add('closed')
                setTimeout(() => {
                    ripple.classList.remove('fade')
                }, 400)
                
            }, 2000)
        }, 400)
        newsopened = true
    }
    
})

generalBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>General news</h4>";
    fetchGeneralNews();
});

businessBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Business</h4>";
    fetchBusinessNews();
});

sportsBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Sports</h4>";
    fetchSportsNews();
});

entertainmentBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Insider</h4>";
    fetchEntertainmentNews();
});

technologyBtn.addEventListener("click",function(){
    newsType.innerHTML="<h4>Technology</h4>";
    fetchTechnologyNews();
});

// searchBtn.addEventListener("click",function(){
//     newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
//     fetchQueryNews();
// });

// newsQuery.addEventListener('keydown', (e) => {
//     if(e.key == 'Enter'){
//         newsType.innerHTML="<h4>Search : "+newsQuery.value+"</h4>";
//         fetchQueryNews();
//     }
    
// })

const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        await response.json().then(json => {
            newsDataArr = json.results;
        })
        
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}


const fetchGeneralNews = async () => {
    const response = await fetch(GENERAL_NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        await response.json().then(json => {
            newsDataArr = json.results;
        })
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews('General');
}

const fetchBusinessNews = async () => {
    const response = await fetch(BUSINESS_NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        await response.json().then(json => {
            newsDataArr = json.results;
        })
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews('Business');
}

const fetchEntertainmentNews = async () => {
    const response = await fetch(ENTERTAINMENT_NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        await response.json().then(json => {
            newsDataArr = json.results;
        })
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews('Insider');
}

const fetchSportsNews = async () => {
    const response = await fetch(SPORTS_NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        await response.json().then(json => {
            newsDataArr = json.results;
        })
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews('Sports');
}

const fetchTechnologyNews = async () => {
    const response = await fetch(TECHNOLOGY_NEWS);
    newsDataArr = [];
    if(response.status >=200 && response.status < 300) {
        await response.json().then(json => {
            newsDataArr = json.results;
        })
    } else {
        // handle errors
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews('Technology');
}

const fetchQueryNews = async () => {

    if(newsQuery.value == null)
        return;

    const response = await fetch(SEARCH_NEWS+encodeURIComponent(newsQuery.value));
    newsDataArr = [];
    if(response.status >= 200 && response.status < 300) {
        await response.json().then(json => {
            newsDataArr = json.results;
        })
    } else {
        //error handle
        console.log(response.status, response.statusText);
        newsdetails.innerHTML = "<h5>No data found.</h5>"
        return;
    }

    displayNews();
}

function displayNews(category) {
    console.log(newsDataArr.length + ' articles were found for ' + category)
    newsType.innerHTML = newsDataArr.length + ' results - ' + category;
    newsdetails.innerHTML = ''

    // if(newsDataArr.length == 0) {
    //     newsdetails.innerHTML = "<h5>No data found.</h5>"
    //     return;
    // }

    newsDataArr.forEach(news => {

        var randomImage = Math.floor(Math.random() * 10) + 1;


        var date = news.created_date.split("T");
        var updatedDate = news.updated_date.split("T");
        
        var col = document.createElement('div');
        col.className="col-sm-12 col-md-4 col-lg-3 p-2 card";
        col.style.background = 'transparent'
        col.style.margin = '5px'
        col.style.border = 'none'

        

        var card = document.createElement('div');
        card.className = "p-2";
        card.style.background = 'rgba(0, 0, 0, 0.164)'
        card.style.backdropFilter = 'blur(50px)'
        card.style.borderRadius = '8px'
        card.style.cursor = 'pointer'
        

        function random(mn, mx) {
            Math.random() * (mx - mn) + mn;
        }

        var image = document.createElement('img');
 
        image.style.maxWidth = '100%'
        image.style.minWidth = '100%'
        image.style.minHeight = '280px'
        image.style.background = 'transparent'
        image.style.position = 'table-cell'
        image.style.verticalAlign = 'center'
        if(news.title == null || news.multimedia == null){
            return
        } else{
            image.title = news.multimedia[0].caption + ' - Image by: ' + news.multimedia[0].copyright
        }
        


        var imageHolder = document.createElement('div')
        imageHolder.setAttribute("width","100%");
        imageHolder.style.height = '280px'
        imageHolder.style.background = 'transparent'
        imageHolder.style.borderRadius = '10px'
        imageHolder.style.marginBottom = '5px'
        imageHolder.style.overflowY = 'hidden'
        imageHolder.appendChild(image)
        
        if(news.multimedia){

            image.src = news.multimedia[0].url
        } else{
            image.src = `imageNull${randomImage}.jpg`
        }
        
        
        
        card.addEventListener('click', () => {
            window.open(news.url)
        })

        var cardBody = document.createElement('div');
        
        var newsHeading = document.createElement('h5');
        newsHeading.className = "card-title";
        newsHeading.innerHTML = '<h3>' + news.title + '</h3>';
        newsHeading.style.userSelect = 'auto'
        newsHeading.style.background = 'transparent'

        var dateHeading = document.createElement('h6');
        dateHeading.className = "text-light";
        dateHeading.innerHTML = date[0] + ', Edited on ' + updatedDate[0];
        dateHeading.style.userSelect = 'auto'
        dateHeading.style.background = 'transparent'

        var discription = document.createElement('p');
        discription.className="text-light";
        discription.innerHTML = news.abstract;
        discription.style.userSelect = 'auto'
        discription.style.background = 'transparent'
        discription.style.fontWeight = 'bolder'
        discription.style.fontSize = '15px'
        card.style.color = '#ffffff'

        var newsUrl = document.createElement('a');
        newsUrl.className="btn btn-dark";
        // newsUrl.style.position = 'absolute'
        newsUrl.style.bottom = '3px'
        newsUrl.style.left = '3px'
        // newsUrl.href = news.url;
        newsUrl.innerHTML="Read more";
        newsUrl.style.borderRadius = '5px'

        cardBody.appendChild(newsHeading);
        cardBody.appendChild(dateHeading);
        cardBody.appendChild(discription);
        cardBody.appendChild(newsUrl);
        cardBody.style.background = 'transparent'
        card.appendChild(imageHolder);
        card.appendChild(cardBody);

        col.appendChild(card);

        newsdetails.appendChild(col);
    });

    newsDataArr = []

}
