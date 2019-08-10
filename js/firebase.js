(function(){
 
    //Initialize Firebase
    var firebaseConfig = {
        apiKey: "AIzaSyBrIJIZvn7q5eJqjG1_APXZb11q4AC6o6A",
        authDomain: "quiz-simulation.firebaseapp.com",
        databaseURL: "https://quiz-simulation.firebaseio.com",
        projectId: "quiz-simulation",
        storageBucket: "quiz-simulation.appspot.com",
        messagingSenderId: "903425068213",
        appId: "1:903425068213:web:a4cfa26b8e2b1427"
      };
    
    firebase.initializeApp(firebaseConfig);
    
    const dbRefObject = firebase.database().ref().child('0');
    
    dbRefObject.on('value', snap => {
       data = JSON.stringify(snap.val()); 
    });
    
 }());