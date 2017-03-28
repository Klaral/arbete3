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
        imageDiv.setAttribute('src', user.photoURL);
    }   
    }
	
})

      
})
    
 
      }
    
      
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    /***loggin
    
loggin.addEventListener('click',function(){
  localStorage.setItem('whatever', allName);
    if (localStorage.getItem('whatever') !== null){
        var paragraf = document.getElementById("paragraf");
        paragraf.innerHTML = "Välkommen: " + localStorage.getItem('whatever');  
    } else{
        var paragraf = document.getElementById("paragraf");
        paragraf.innerHTML = "Skriv in ditt namn" + localStorage.getItem('whatever');
    }
  
  var fb = firebase.database();
    fb.ref().child("message").once("value",function(snapshot){
  var data = snapshot.val();
  var count = Object.keys(data).length;
  var message = {
      name: allName,
      text: text.value,
      time: moment().format('MMMM Do YYYY, h:mm:ss a'), // March 21st 2017, 12:38:42 pm
      id: count+1
      
  } 
  
  fb.ref('message/' + message.id).set(message);

    });
  
    
});


view.addEventListener("click", function(event){
table.innerHTML = "";
    firebase.database().ref('message/').once('value', function(snapshot) {
	var allData = snapshot.val();
        Object.keys(allData).reverse().forEach(function(key){
            var meddelande = allData[key];
            
    var tr = document.createElement("tr");
            tr.innerHTML = `<td>${meddelande.name}</td>
<td>${meddelande.text}</td> <td>${meddelande.time}</td> <td>${meddelande.id}</td>`
            table.appendChild(tr);
        })
	
});

});

    
    
    
    
/**loggut
    
var loggaut = document.getElementById("loggaut")
loggut.addEventListener("click", function(event){
localStorage.removeItem("whatever");
    paragraf.innerHTML = "Vänligen skriv ditt namn";
    
}); 
    
**/

    
}