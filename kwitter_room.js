const firebaseConfig = {
      apiKey: "AIzaSyDjomo9LY8Ry9pOmNUv1Lu77BhAIQ11ykM",
      authDomain: "zwitter1-1f08c.firebaseapp.com",
      databaseURL: "https://zwitter1-1f08c-default-rtdb.firebaseio.com",
      projectId: "zwitter1-1f08c",
      storageBucket: "zwitter1-1f08c.appspot.com",
      messagingSenderId: "419280278730",
      appId: "1:419280278730:web:dd2341459c4bf15ff31033"
    };
    
    const app = initializeApp(firebaseConfig);
    // Initialize Firebase
    
//ADD YOUR FIREBASE LINKS HERE
user_name=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="Welcome"+user_name+"!";

function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({ purpose : "adding room name" });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function getData() { firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey = childSnapshot.key;
       Room_names = childKey;
       console.log("room-name"+Room_names);
      //Start code
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>"; 
      document.getElementById("output").innerHTML += row;

      //End code
      });});}
getData();
function redirectToRoomName(name){
      console.log(name);
      localStorage.setItem("room_name",name);
      window.location="kwitter_page.html";
}


function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location="kwitter.html";

}
