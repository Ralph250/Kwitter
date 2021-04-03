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

  user_name = localStorage.getItem("user_name");
  room_name = localStorage.getItem("room_name");

  function send(){
    msg = document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
    name:user_name,
    message:msg,
    like:0
  
});
document.getElementById("msg").value = "";
  }

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key; childData = childSnapshot.val(); 
    
    if(childKey != "Ralph") {

  firebase_message_id = childKey;
  key_pairs = childData;
  console.log(firebase_message_id);
  console.log(key_pairs);

  name_user = key_pairs['name'];
  like = key_pairs['like'];
  message = key_pairs['message'];
  
  message_with_name = "<h4>" + name_user + "<img class = 'user_tick' src = 'tick.png'></h4>";
  message_tag = "<h4>" + message + "</h4>";
  like_button = "<button class = 'btn btn-warning' id = " + firebase_message_id + " value = " + like + " onclick = 'updatelike(this.id)'>"; 
  span_with_tag = "<span class = 'glyphicon glyphicon-thumbs-up'> Like: " + like + "</span></button>" + "<hr>";

  row = message_with_name + message_tag + like_button + span_with_tag;
  document.getElementById("output").innerHTML += row;
}



} ); }); } getData();
var liketrack = "notliked";
function updatelike(message_id){

  console.log("Message ID = "+message_id);
likes = document.getElementById(message_id).value;
if(likes == 0){
updated_likes = Number(likes) + 1;
console.log("Updated Likes = "+updated_likes);
firebase.database().ref(room_name).child(message_id).update({
like : updated_likes
});
}
else{
  updated_likes = Number(likes) - 1;
  console.log("Updated Likes = "+updated_likes);
  firebase.database().ref(room_name).child(message_id).update({
  like : updated_likes
  
});
}
}
function logout(){
localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location.replace("index.html");
}