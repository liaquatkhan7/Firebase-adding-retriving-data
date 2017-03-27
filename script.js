// // alert('connected')
// var inputButton = document.getElementById('sub-btn');
// inputButton.onclick = function(){
//     //firebase
//     var firebaseRef = firebase.database().ref();
//     firebaseRef.child('text').set('some value');
//     var inputText = document.getElementById('inputField').value;
//     var uL = document.getElementById('list');
//     var creatingLI = document.createElement('li');
//     uL.appendChild(creatingLI);
//     creatingLI.innerHTML = inputText + "<span id='cross'>" + "&times;" + "</span>" ;
// }
// dbRefObject.on();
// var listItems = document.getElementsByTagName('li');
// var span = document.getElementById("cross");


// (function(){
//     var config = {
//     apiKey: "AIzaSyBs3s_-0VZRKf54t9dPanolrBvqR_dTHVw",
//     authDomain: "link-assignment.firebaseapp.com",
//     databaseURL: "https://link-assignment.firebaseio.com",
//     storageBucket: "link-assignment.appspot.com",
//     messagingSenderId: "853589186002"
//   };
//   firebase.initializeApp(config);
//   const preObject = document.getElementById('object');
//   //Create reference 
//   const dbRefObj = firebase.database().ref().child('object');
//   //Sync object changes 
//   dbRefObj.on('value', snap => preObject.innerText = JSON.stringify(snap.val(),null,3 ));
//   }());

(function(){
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBs3s_-0VZRKf54t9dPanolrBvqR_dTHVw",
    authDomain: "link-assignment.firebaseapp.com",
    databaseURL: "https://link-assignment.firebaseio.com",
    storageBucket: "link-assignment.appspot.com",
    messagingSenderId: "853589186002"
  };
  firebase.initializeApp(config);
}());

// var btn = document.getElementById('form-submit');
// var name,color,size,quan,savingInObject, savingObj;
// var orders = [];

// btn.onclick = function (){
//     name = document.getElementById('name').value;
//     color = document.getElementById('color').value;
//     size = document.getElementById('size').value;
//     quan = document.getElementById('quantity').value;
    
//     savingInObject = {
//       name1: name,
//       color1: color,
//       size1: size,
//       quantity1: quan
//     }
//     orders.push(savingInObject);
//     checkObject();
//     const dbRefObj = firebase.database().ref();
//     dbRefObj.push().set(savingInObject);
 
// }

// function checkObject(){
//   for(var i=0; i < orders.length; i++){
//     console.log(orders[i]);
//   }
// }

// var fname,lname,email,adress,telNumber,quantity,date,rad,order;
// function vals(){
//     fname = document.getElementById('f').value;
//     lname = document.getElementById('l').value;
//     // eMail = document.getElementById('email').value;
//     adress = document.getElementById('adress').value;
    
//     telNumber = document.getElementById('phone-number').value;
//     if(isNaN(telNumber)){
//       alert('Please Enter valid phone number')
//     }
//     quantity = document.getElementById('quantity').value;
    
//     rad = document.getElementsByName('size');
//     for(var i = 0; i < rad.length; i++){
//       if(rad[i].checked){
//         rad = rad[i].value;
//      }
//    }
//    order = {
//      firstName: fname,
//      lastName: lname,
//     //  Email: email,
//      Adress: adress,
//      mobileNumber: telNumber,
//      pecs: quantity,
//      size: rad
//    }
// }

// var sub = document.getElementById('sub');

// sub.onclick = function(){
//   vals();
//   console.log(order)
//   const dbRefObj = firebase.database().ref();
//   dbRefObj.push().set(order);
// }

// var stuff = [{code:1, color: "white",prise:250, imgOne:"images/935b64236e3a743107929e341617e039.jpg", imgTwo:"images/53466f7575f54.jpg", imgThree: "images/unnamed.jpg"},
// {code:2, color: "white", prise:350, imgOne:"images/935b64236e3a743107929e341617e039.jpg", imgTwo:"images/53466f7575f54.jpg", imgThree: "images/unnamed.jpg"},
// {code:3, color: "white", prise:200, imgOne:"images/935b64236e3a743107929e341617e039.jpg", imgTwo:"images/53466f7575f54.jpg", imgThree: "images/unnamed.jpg"},
// {code:4, color: "white", prise:450, imgOne:"images/935b64236e3a743107929e341617e039.jpg", imgTwo:"images/53466f7575f54.jpg", imgThree: "images/unnamed.jpg"}];

 var pasteVal = document.getElementById('enteredText');
var button = document.getElementById('butt-sahab');
button.onclick = function(){
  var inputVal = document.getElementById('text-field').value;
  var pasteVal = document.getElementById('enteredText');
  console.log(inputVal)
  const firebaseDB = firebase.database().ref();
  firebaseDB.push().set(inputVal);
}

document.getElementById("gtDat").onclick = function (){
var firebasedb = firebase.database().ref().child('heading');
firebasedb.on('value', snap => pasteVal.innerHTML = snap.val() )
}


document.addEventListener("DOMContentLoaded", function(){
  var rootRef = firebase.database().ref().child('users')
  rootRef.on("child_added", snap => {
    var name = snap.child('name').val();
    var email = snap.child('email').val();
    var table = document.getElementById('divForTable').childNodes[1].append("<tr><td>" + name + '</td></tr>');    
  })
}, false);

var table = document.getElementById('divForTable');
console.log(table.childNodes[1])