menubtn = document.getElementById("menu-button")
mobilemenu = document.getElementById("mobile-menu")
hide = true
sg = document.getElementById("sg")
zd = document.getElementById("zd")
inf = document.getElementById("in")

menubtn.onclick = () =>{
    if(hide == true){
        mobilemenu.style.left = "0"
        hide = false
    } else{
        mobilemenu.style.left = "-100%"
        hide = true
    }
}

sg.onclick = function(){
    location.replace("index.html")
}
zd.onclick = function(){
    location.replace("zdjecia.html")
}
inf.onclick = function(){
    location.replace("info.html")
}


a = document.getElementById("barimg1")
b = document.getElementById("barimg2")
c = document.getElementById("barimg3")
d = document.getElementById("barimg4")
e = document.getElementById("barimg5")
mainbg = document.getElementById("zdjeciamain")

a.addEventListener('click', function(){
    changeBackground(1)
})
b.addEventListener('click', function(){
    changeBackground(2)
})
c.addEventListener('click', function(){
    changeBackground(3)
})
d.addEventListener('click', function(){
    changeBackground(4)
})
e.addEventListener('click', function(){
    changeBackground(5)
})

function changeBackground(n){
    switch(n){
        case 1: 
            mainbg.style.backgroundImage = "url(./assets/tky2.jpg)"
            break
        case 2:
            mainbg.style.backgroundImage = "url(./assets/favelas.jpg)"
            break
        case 3:
            mainbg.style.backgroundImage = "url(./assets/sf.jpg)"
            break
        case 4:
            mainbg.style.backgroundImage = "url(./assets/wwa.jpg)"
            break
        case 5:
            mainbg.style.backgroundImage = "url(./assets/capetown.jpg)"
            break
    }
}