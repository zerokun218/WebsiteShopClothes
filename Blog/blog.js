function clickCart(){
  alert("You need to Log in to see your Cart!!")
}




var j = 1
function slideshow(item) {
  var a = document.getElementsByClassName("slides");
  var b = document.getElementsByClassName("page");
  var i;

  document.getElementById('heading-page').innerText = "PAGE " + item
  document.getElementById('heading-page').style.display = "block"
  for (i = 0; i<a.length; i++) {
    a[i].style.display = "none";
  }
  for (i=0; i<b.length; i++) {
    b[i].className  = b[i].className.replace(' active1', "");
  }
  j = Number(item) - 1
  a[j].style.display = "grid";
  b[j].className += " active1"
}






function search() {
  var a = document.getElementById("input-search").value
  var b = document.getElementsByClassName("searching")

  a = a.trim()
  document.getElementById('message-search').style.display = 'none'
  document.getElementById('heading-search').innerText = a.toUpperCase()
  document.getElementById('heading-search').style.display = "block"

  document.getElementById("heading-page").style.display = "none"
  pages = document.getElementsByClassName("pages")
  for (var i = 0; i < pages.length; i++) {
    pages[i].style.display  = "none"
  }

  for (var i = 0; i < b.length; i++) {
    b[i].style.display  = "none"
  }

  if (a.toLowerCase() == "all") {
    document.getElementById("heading-page").style.display = "block"
    for (var i = 0; i < pages.length; i++) {
      pages[i].style.display  = "block"
    }
    for (var i = 0; i < b.length; i++) {
      b[i].style.display  = "grid"
    }
    return
  }

  a = a.toLowerCase()
  var c = document.getElementsByClassName(a)
  if (c.length != 0){
    for (var i = 0; i < c.length; i++){
      c[i].style.display = "grid"
    }
  }
  else {
    alert("don't have any "+ a)
    for (var i = 0; i < b.length; i++) {
      b[i].style.display = "none";
    }

    document.getElementById('message-search').style.display = 'block'
  }

}
