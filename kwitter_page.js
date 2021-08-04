var firebaseConfig = {
      apiKey: "AIzaSyDQDwUgvZP657XO9PyaTLWKHI18u6XI-Ow",
      authDomain: "school-chat-46996.firebaseapp.com",
      projectId: "school-chat-46996",
      storageBucket: "school-chat-46996.appspot.com",
      messagingSenderId: "490637409644",
      appId: "1:490637409644:web:03a04e1aa389fd7d44c749"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);



user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

    function send()
    {
          msg = document.getElementById("msg").value;
          firebase.database().ref(room_name).push({
                name: user_name,
                message: msg,
                like: 0
          });
          document.getElementById("msg").value = "";
    }

    function logout()
    {
          localStorage.removeItem("user_name");
          localStorage.removeItem("room_name");
          window.location.replace("index.html");
    }
    getData();