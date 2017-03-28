window.onload = function(){

var loggin = document.getElementById("loggin"); 
var loggut = document.getElementById("loggut");    
var userinfo = document.getElementById("userinfo");
    
// Ett objekt för att hantera GitHub-autentisering
var provider = new firebase.auth.GithubAuthProvider();

 
    
    /**loggin**/
    
loggin.addEventListener('click',function(){
    
    // Skapa ett Promise som visar ett popup-fönster
    // Obs! Kontrollera att fönstret inte blockeras av en ad blocker
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        console.log(result.user);
        if(result.user !== null){
            sessionStorage.user = JSON.stringify(result.user);
            var user = sessionStorage.user;  
            if(user === undefined || user === null){
                loggut.disabled = true;  
            } else{   

                user = JSON.parse(user);
                userinfo.innerHTML = user.displayName;
                var imageDiv = document.getElementById("imageDiv");
                //imageDiv.setAttribute('src', user.photoURL);
            }
        }

    })


})
    
 
      }
    
      
    
    
