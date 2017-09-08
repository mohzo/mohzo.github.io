"use strict"

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/converse1.jpg') {
      myImage.setAttribute ('src','images/converse2.jpg');
    } else {
      myImage.setAttribute ('src','images/converse1.jpg');
    }
}