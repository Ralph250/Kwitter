
//ADD YOUR FIREBASE LINKS HERE

var firebaseConfig = {
      apiKey: "AIzaSyD9ZIQH4TsjwYtqSndZiFikjNR1tPlY0iE",
      authDomain: "kwitter-ffa74.firebaseapp.com",
      databaseURL: "https://kwitter-ffa74-default-rtdb.firebaseio.com",
      projectId: "kwitter-ffa74",
      storageBucket: "kwitter-ffa74.appspot.com",
      messagingSenderId: "918916844880",
      appId: "1:918916844880:web:a2f8e362c4e910088cb055"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    username = localStorage.getItem("user_name");
    document.getElementById("h3user_name").innerHTML = "Welcome " + username + "!";



function addroom(){
room_name = document.getElementById("room_input").value;

firebase.database().ref("/").child(room_name).update({
      Ralph:"Testing Kwitter"
});

localStorage.setItem("room_name", room_name);

window.location = "kwitter_message.html";

}

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name-"+ Room_names);
row = "<div class = 'room_name' id = "+  Room_names + " onclick = 'redirect(this.id)'> # " + Room_names + "</div><hr>";
document.getElementById("output").innerHTML += row;     
//End code
      });});}
getData();

function redirect(name){
console.log(name);
localStorage.setItem("room_name", name);
window.location = "kwitter_message.html";
}

function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location = "index.html";
}