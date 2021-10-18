let usereName= prompt("Enter Your User Name.")

alert(usereName);


function checkUser() {

      let user = prompt("Enter Your User Name");
      if (user=== "Syed Mustjab") {
            console.log("You are Authorized User")
      }
      else{
            console.log("You are not Authorize User")
      }
      
}
checkUser()