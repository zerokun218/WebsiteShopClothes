function validatePassword (){
    var a = document.getElementById("password").value
    var b = document.getElementById("password2").value

    if (a===b){
        return true
    }
    else {
        document.getElementById("password").value = ""
        document.getElementById("password2").value = ""
        alert("password and confirm password are not similar")
        myForm["password"].focus()
        return false
    }
}

function clickCart(){
  alert("You need to Log in to see your Cart!!")
}
