// var check = 1
//     function myfunc() {
//       var a = document.getElementById('home');
//       if (check === 1) {
//         check = 0;
//         a.className = ' home';
//         a.style.color = 'orange';
//       }
//       else{
//         check = 1;
//         a.className = ' home';
//         a.style.color = 'red';
//       }

//     }

function clickCart(){
  alert("You need to Log in to see your Cart!!")
}

var j = 0
var k = 0
function slideshow(sl,item) {
  var a = document.getElementsByClassName("slides"+sl);
  var i;

  for (i = 0; i<a.length; i++) {
    a[i].style.display = "none";
  }
  if (sl == 1) {
    j += Number(item)
    if (j === a.length) {
      j = 0
    }
    if (j < 0) {
      j = a.length - 1
    }
    a[j].style.display = "block";
  }
  else {
    k += Number(item)
    if (k === a.length) {
      k = 0
    }
    if (k < 0) {
      k = a.length - 1
    }
    a[k].style.display = "block";
  }

}
