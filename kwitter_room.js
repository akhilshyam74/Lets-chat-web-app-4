var firebaseConfig = {
      apiKey: "AIzaSyCXM6B94INvF2jYnBFFTy_kKfs292EW7bU",
      authDomain: "kwitter-43a23.firebaseapp.com",
      databaseURL: "https://kwitter-43a23-default-rtdb.firebaseio.com",
      projectId: "kwitter-43a23",
      storageBucket: "kwitter-43a23.appspot.com",
      messagingSenderId: "962034867881",
      appId: "1:962034867881:web:4859d34c3a1b943a07d3b8"
      };
    
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row="<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)'>#"+Room_names +"</div><hr>"
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

user_name=localStorage.getItem("user_name");
console.log(user_name)
      document.getElementById("user_name").innerHTML="Welcome "+user_name+"!";

function addRoom () {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({purpose:"adding room name"});
      localStorage.setItem ("room_name",room_name);
      window.location="kwitter_page.html"
}
function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location = "kwitter_page.html"
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="index.html"
}
