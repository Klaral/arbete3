window.onload = function(){

// Ett objekt för att hantera GitHub-autentisering
var provider = new firebase.auth.GithubAuthProvider();    
var loggin = document.getElementById("loggin"); 
var loggut = document.getElementById("loggut");    
var infotext = document.getElementById("infotext");
var infoFail = document.getElementById("infoFail");
var vipBtn = document.getElementById("vipBtn"); 
var userEmail;    
    
    vipBtn.disabled = true;
    
    
    
    /**VIP**/
    
    loggut.style.dispaly = "none";

 
    
    /**loggin**/
    
loggin.addEventListener('click',function(event){
    
    // Skapa ett Promise som visar ett popup-fönster
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        var user = result.user;
        userEmail = user.email; 
        if(user.displayName == null){
            infoText.innerHTML = `Du är inloggad som ${user.email}`;
        } else {
            infoText.innerHTML = `Du är inloggad som ${user.displayName}`;
        }
              
            if(userEmail == "klaralundgren@gmail.com"){
                vipBtn.disabled = false;
                  
            } else{ 
                        
       vipBtn.disabled = true;
       
            }

               
        });
    loggin.style.display = "none";
    loggut.style.dispaly = "inherit";

    });
    
    vipBtn.addEventListener("click", function(event){
        window.alert("Hej Klara");
    });

    /**loggut**/

})

loggut.addEventListener('click', function(){
  firebase.auth().signOut()
  .then(function(result){
      
      delete sessionStorage.user; 
      userinfo.innerHTML = "";
      
  })
})
    
 
      }
    
      
    
    
