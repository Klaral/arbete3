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
        loggut.style.display = "none";
        
    

 
    
    /**loggin**/
    
loggin.addEventListener("click",function(event){
    
    // Skapa ett Promise som visar ett popup-fönster
        firebase.auth().signInWithPopup(provider).then(function(result) {
        var user = result.user;
        userEmail = user.email; 
        if(user.displayName == null){
            infotext.innerHTML = `Du är inloggad som ${user.email}`;
            
            //vipBtn.disabled = "false";
            
            
        } else {
            infotext.innerHTML = `Du är inloggad som ${user.displayName}`;
        }
              
            if(userEmail == "klaralundgren@gmail.com"){
               vipBtn.disabled = false;
                  
            }   else {
                vipBtn.disabled = true;
                }

               
        });
    loggin.style.display = "none";
    loggut.style.display = "inherit";

    });
    
    vipBtn.addEventListener("click", function(event){
        window.alert("Hej Klara");
    });

    /**loggut**/
    
    loggut.addEventListener("click", function(event){
        userEmail = null;
        vipBtn.disabled = true;
    firebase.auth().signInWithPopup(provider)
    firebase.auth().signOut().then(function(result){
        //Utloggning lyckad
        infotext.style.display ="none";
        console.log("Du är utloggad");
        infotext.innerHTML = `Du är inte inloggad`;
        
        
    
    }).catch(function(error){
        console.log("Utloggning misslyckades");
        infoFail.innerHTML = "Utloggning misslyckades";
    });
        //infotext
        loggin.style.display = "inherit";
        loggut.style.display = "none";
  
});
    




}


 
      
    
      
    
    
