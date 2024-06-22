
// password alerts
const yourCode=document.getElementById("yourCode");
const password=document.getElementById("password");
const yourName=document.getElementById("yourName");

form1.addEventListener('submit',function(event){ 
    if(yourCode.value==="" || password.value===""){
        alert("استكمل البيانات");
    }
    else{   // transition to dashboard
        const signupButton = document.getElementById('log');  
        signupButton.addEventListener('click', function() {
        window.location.href = 'index2.html';
        });
    }

    event.preventDefault();
});
form2.addEventListener('submit',function(event){ 
    if(yourName.value==="" || yourCode.value===""){
        alert("استكمل البيانات");
    }
    else{   // transition to dashboard
        const signupButton = document.getElementById('sign');  
        signupButton.addEventListener('click', function() {
        window.location.href = 'index2.html';
        });
    }

    event.preventDefault();
});

// ----------------------------------------------------------------
// slider login & sign up
const a =document.getElementById("log-in");
const b =document.getElementById("sign-up");

function login(){
    a.style.left="4px";
    b.style.right="-510px";
}
function register(){
    a.style.left="-510px";
    b.style.right="4px";
}

// ---------------------------------------------------------------
/* animation on "about" section when scrolling */

document.addEventListener('scroll', function() {
    var elementPosition = document.getElementById('about').getBoundingClientRect();
    var animateElements = document.querySelectorAll('#about .about-text, #about .about-image img');
  
    if (elementPosition.top < window.innerHeight / 2) {
      animateElements.forEach(function(el) {
        el.classList.add('animate');
      });
    } else {
      animateElements.forEach(function(el) {
        el.classList.remove('animate');
      });
    }
  });
//   --------------------------------------------------------------------
/* animation on "service" section when scrolling */

document.addEventListener('scroll', function() {
    var elementPosition = document.getElementById('service').getBoundingClientRect();
    var animateElements = document.querySelectorAll('#service #first-row, #service #second-row');
  
    if (elementPosition.top < window.innerHeight / 2) {
      animateElements.forEach(function(el) {
        el.classList.add('animate');
      });
    } else {
      animateElements.forEach(function(el) {
        el.classList.remove('animate');
      });
    }
  });
//   --------------------------------------------------------------------
document.addEventListener('scroll', function() {
    var elementPosition = document.getElementById('app').getBoundingClientRect();
    var animateElements = document.querySelectorAll('#app #screen-img img');
  
    if (elementPosition.top < window.innerHeight / 2) {
      animateElements.forEach(function(el) {
        el.classList.add('animate');
      });
    } else {
      animateElements.forEach(function(el) {
        el.classList.remove('animate');
      });
    }
  });
// window.addEventListener('scroll', function() {
//     var element = document.getElementById('screen-img');
//     var position = element.getBoundingClientRect();
  
//     // Start the animation when the element is in the viewport
//     if (position.top < window.innerHeight && position.bottom >= 0) {
//       element.classList.add('move-left');
//       element.classList.add('rotate-animation');
//     } else {
//       element.classList.remove('move-left');
//       element.classList.remove('rotate-animation');
//     }
//   });