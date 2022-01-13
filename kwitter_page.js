var firebaseConfig = {
      apiKey: "AIzaSyBp3Sdw_QJEAUtbh2frxlK7xY_Iyy9KvCs",
      authDomain: "kwitter-8b5ee.firebaseapp.com",
      databaseURL: "https://kwitter-8b5ee-default-rtdb.firebaseio.com",
      projectId: "kwitter-8b5ee",
      storageBucket: "kwitter-8b5ee.appspot.com",
      messagingSenderId: "343865115448",
      appId: "1:343865115448:web:3eb5eebe52c50361faf7cd"
    };
    
firebase.initializeApp(firebaseConfig);
user_name=localStorage.getItem("user_name");
room_name=localStorage.getItem("room_name");


function send()
{
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
      });
      document.getElementById("msg").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
