// Keep list of DOM elements for clearing later when reloading
var listItems = [];
var database;

function setup() {

  var config = {
    apiKey: "AIzaSyCEp3cM3MdtjfvKGJhclKm6FZsjpbdmO8U",
    authDomain: "examen-59a7c.firebaseapp.com",
    databaseURL: "https://examen-59a7c.firebaseio.com",
    projectId: "examen-59a7c",
    storageBucket: "",
    messagingSenderId: "686450629213",
    appId: "1:686450629213:web:ba9659a5a31d9216"
  };
  firebase.initializeApp(config);
  database = firebase.database();

  // Input fields
  // fruitInput = select('#fruit');
  // totalInput = select('#total');

  // Submit button
  // var submit = select('#submit');
  // submit.mousePressed(sendToFirebase);

  // Start loading the data
  loadFirebase();
}

function loadFirebase() {
  var ref = database.ref("questions");
  ref.on("value", gotData, errData);
}

function errData(error) {
  console.log("Something went wrong.");
  console.log(error);
}

// The data comes back as an object
function gotData(data) {
  var fruits = data.val();
  // Grab all the keys to iterate over the object
  var keys = Object.keys(fruits);

  // clear previous HTML list
  clearList();

  // Make an HTML list
  var list = createElement('ol');
  list.parent('data');

  // Loop through array
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var fruit = fruits[key];
    var li = createElement('li', fruit.fruit + ': ' + fruit.total + ", key: " + key);
    li.parent(list);
    listItems.push(li);
  }
}

// Clear everything
function clearList() {
  for (var i = 0; i < listItems.length; i++) {
    listItems[i].remove();
  }
}

// This is a function for sending data
function sendToFirebase() {
  var fruits = database.ref('fruits');

  // Make an object with data in it
  var data = {
    fruit: fruitInput.value(),
    total: totalInput.value()
  }

  var fruit = fruits.push(data, finished);
  console.log("Firebase generated key: " + fruit.key);

  // Reload the data for the page
  function finished(err) {
    if (err) {
      console.log("ooops, something went wrong.");
      console.log(err);
    } else {
      console.log('Data saved successfully');
    }
  }
}
