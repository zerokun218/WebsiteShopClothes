function deleteItem(item) {
  document.getElementById(item).style.display = "none";
}

function validate(id){
  var a = document.getElementById('amount' + id).value
  if (a < 1 || a > 100){
    alert('Amount in between 1 and 100!')
    document.getElementById('amount' + id).value = 1
    document.getElementById("cost" + id).value = 300
    a.focus()
  }
  else{
    var a = document.getElementById("amount" + id).value
    document.getElementById("cost" + id).value = Number(a)*300
  }
}


function onConfirm() {
  alert('Accepted! thanks for buying Our clothes. Having a good shopping!!')
}
