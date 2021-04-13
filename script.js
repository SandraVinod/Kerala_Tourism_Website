
       function validation(){
    var emailid=document.getElementById("exampleInputEmail1");   
    var phnno=document.getElementById("phoneno").value;
    var password=document.getElementById("exampleInputPassword1"); 
    var repwd=document.getElementById("exampleInputPassword2");
    var passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  var regexp = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(!emailid.value.match(emailExp)){
    alert("Give a valid Email Id!!")
    return false;
  }
  if(!phnno.match(regexp)){
    alert("Give a valid phone number!!");  
      return false;
  }
  if (password.value==""){
      alert("Password field is empty!!");
      return false;
    }

  if (!password.value.match(passwordExp)) {
        alert("Password must contain minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number!!");     
        return false;
    }   

 

  

    var repwd=document.getElementById("exampleInputPassword2");
    if(repwd.value!=password.value){
    alert("Re-entered Password dont match!!");
    return false;
  }
 else {
       
       return true;
   } 
}
function validatePwd(){
  var password=document.getElementById("exampleInputPassword1");       
var passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

let lowerCaseLetters = /[a-z]/g;
let upperCaseLetters = /[A-Z]/g;
let numbers = /[0-9]/g;  


   
    let strength = 0;
    if (password.value.match(lowerCaseLetters)) {
        strength += 5;
    }
    if (password.value.match(upperCaseLetters)) {
        strength += 5;
    } if (password.value.match(numbers) && password.value.length>=8) {
        strength += 5;
    }
    // if (strength =0) {
    //    alert("Password field is empty!!");
    // }
    if (strength == 5) {
      
        password.style.border = "2px solid red";
    }
    if (strength == 10) {
      password.style.border = "2px solid orange";
    }
    if (strength == 15) {
      password.style.border = "2px solid green";
    }
    
   
   
}
function checkpwd(){
  var password=document.getElementById("exampleInputPassword1"); 
    var repwd=document.getElementById("exampleInputPassword2");
    if(repwd.value!=password.value){
    repwd.style.border="2px solid red";
  }
  if(repwd.value==password.value){
    repwd.style.border="2px solid green";
  }
}
function loginvalidation(){
    var password=document.getElementById("exampleInputPassword1");
    var emailid=document.getElementById("exampleInputEmail1");  
    var passwordExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    let emailExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; 

    if(!emailid.value.match(emailExp)){
        alert("Give a valid Email Id!!")
        return false;
      }
      if (password.value==""){
        alert("Password field is empty!!");
        return false;
      }
  
    if (!password.value.match(passwordExp)) {
          alert("Password must contain minimum 8 characters, at least one uppercase, and one lower case, must contain at least one number!!");     
          return false;
      } 
      else {
       
        return true;
    }      
}

 
      