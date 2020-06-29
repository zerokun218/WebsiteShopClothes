showItem = (type) => {
    if(type == "men") {
        var list = document.getElementById(type);
        var minus = document.getElementById(type+"-items");
        if(minus.innerText === "-") {
            minus.innerText = "+";
            list.classList.remove("showitem");
        } else {
            minus.innerText = "-";
            list.classList.add("showitem");
        }
    }
    if(type == "women") {
        var list = document.getElementById(type);
        var minus = document.getElementById(type+"-items");
        if(minus.innerText === "-") {
            minus.innerText = "+";
            list.classList.remove("showitem");
        } else {
            minus.innerText = "-";
            list.classList.add("showitem");
        }
    }
    if(type == "jewelry") {
        var list = document.getElementById(type);
        var minus = document.getElementById(type+"-items");
        if(minus.innerText === "-") {
            minus.innerText = "+";
            list.classList.remove("showitem");
        } else {
            minus.innerText = "-";
            list.classList.add("showitem");
        }
    }
}

function clickCart(){
  alert("You need to Log in to see your Cart!!")
}


changeActive = (index) => {
    document.getElementsByClassName("activepagi")[0].classList.remove("activepagi")
    document.getElementsByClassName("page-link")[index].classList.add("activepagi")
}

changeItem = (index) => {
    console.log("here")
    if(index) {
        document.getElementsByClassName("row")[index].classList.add("show")

    } else {
        let shows = document.getElementsByClassName("show")
        shows = [...shows]
        shows.forEach(e => {
            e.classList.remove("show");
        });
        console.log(shows);
    }
}

changeItems = () => {
    let index = Math.floor(Math.random()*4)
    if(index) {
        document.getElementsByClassName("row")[index].classList.add("show")

    } else {
        let shows = document.getElementsByClassName("show")
        shows = [...shows]
        shows.forEach(e => {
            e.classList.remove("show");
        });
        console.log(shows);
    }
}

moveback = () => {
    let index = document.getElementsByClassName("activepagi")[0].innerHTML;
    index--;
    if(!index) index = 5;
    index = (index-1) % 5 + 1;
    document.getElementsByClassName("activepagi")[0].classList.remove("activepagi")
    document.getElementsByClassName("page-link")[index].classList.add("activepagi")
}

movenext = () => {
    let index = document.getElementsByClassName("activepagi")[0].innerHTML;
    index++
    index = (index-1) % 5 + 1;
    document.getElementsByClassName("activepagi")[0].classList.remove("activepagi")
    document.getElementsByClassName("page-link")[index].classList.add("activepagi")
}