
//ADD YOUR FIREBASE LINKS HERE
const firebaseConfig = {
      apiKey: "AIzaSyAHOyhOcsDIrhQmMXBHJVEDppv1mrbjb7Y",
      authDomain: "kwitterlol-5fbe9.firebaseapp.com",
      databaseURL: "https://kwitterlol-5fbe9-default-rtdb.firebaseio.com",
      projectId: "kwitterlol-5fbe9",
      storageBucket: "kwitterlol-5fbe9.appspot.com",
      messagingSenderId: "86514800697",
      appId: "1:86514800697:web:09f9960257d36f42e415e8"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    
    user_name=localStorage.getItem("user_name")
    document.getElementById("user_name").innerHTML="welcome"+user_name+"!"
    function addRoom()
    {
          room_name = document.getElementById("room_name").value;

          firebase.database().ref("/").child(room_name).update({
                purpose : "adding room name"
          });
          localStorage.setItem("room_name", room_name);

          window_location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("Room Name - " + Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
document.getElementById("output").innerHTML += row;
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
      console.log(name);
      localStoragesetItem("room_name", name);
      window.location="kwitter_pge.html";
}
function logout(){

localStorage.removeItem("user_name");
localStorage.removeItem("room_name");
window.location="kwitter.html";
}