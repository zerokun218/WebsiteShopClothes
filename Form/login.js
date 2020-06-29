function validateForm()  {
    var u = document.getElementById("account").value;
    var p = document.getElementById("password").value;

    if(u== "") {
        alert("Please enter your Username");
        myForm["account"].focus();
        return false;
    }
    if(p == "") {
        alert("Please enter you Password");
         myForm["password"].focus();
        return false;
    }
    if (u=="hkl" && p=="hkl"){
       alert("All datas are valid!, send it to the server!")
        return true;
   }
    else{
        alert("Your account and password is not correct!");
        document.getElementById("account").value="";
        document.getElementById("password").value="";
        myForm["account"].focus();
        return false;

    }
}

function clickCart(){
  alert("You need to Log in to see your Cart!!")
}
