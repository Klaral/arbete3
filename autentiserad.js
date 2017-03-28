window.onload = function(){

var loggin = document.getElementById("loggin"); 
var loggut = document.getElementById("loggut");    
var userinfo = document.getElementById("userinfo");
    
// Ett objekt för att hantera GitHub-autentisering
var provider = new firebase.auth.GithubAuthProvider();

 
    
    /**loggin**/
    
loggin.addEventListener('click',function(){
    
    // Skapa ett Promise som visar ett popup-fönster
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
                imageDiv.setAttribute('src', user.photoURL);
            }
        }

    })


})

loggut.addEventListener('click', function(){
  firebase.auth().signOut()
  .then(function(result){
      
      delete sessionStorage.user; 
      userinfo.innerHTML = "";
      
  })
})
    
 
      }
    
      
    
    
