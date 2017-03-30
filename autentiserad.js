window.onload = function(){

var loggin = document.getElementById("loggin"); 
var loggut = document.getElementById("loggut");    
var infotext = document.getElementById("infotext");
var infoFail = document.getElementById("infoFail");
var vipBtn = document.getElementById("vipBtn"); 
    
    vipBtn.disabled = true;
    
// Ett objekt för att hantera GitHub-autentisering
var provider = new firebase.auth.GithubAuthProvider();

 
    
    /**loggin**/
    
loggin.addEventListener('click',function(){
    
    // Skapa ett Promise som visar ett popup-fönster
    firebase.auth().signInWithPopup(provider)
    .then(function(result) {
        console.log(result.user);
        if(result.user !== null){
            window.sessionStorage.user = JSON.stringify(result.user);
            var user = sessionStorage.user;  
            if(user === undefined || user === null){
                loggut.disabled = true;  
            } else{ 
                
                 user = JSON.parse(user);        
       var userinfo = document.getElementById("userinfo");
       status.innerHTML = user.email;
       /*var imageDiv = document.getElementById("imageDiv");
       image.setAttribute('src', user.photoURL);*/
       console.log(user);
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
    
      
    
    
