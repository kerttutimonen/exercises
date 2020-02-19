"use strict";

let i = 0;
let text = document.getElementById("typewriter").innerHTML;

function type() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(type, 100);
  }
}

type();
