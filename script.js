// password alerts
const yourCode=document.getElementById("yourCode");
const password=document.getElementById("password");
const yourName=document.getElementById("yourName");

form1.addEventListener('submit',function(event){ 
    if(yourCode.value==="" || password.value===""){
        alert("استكمل البيانات");
    }
    event.preventDefault();
});
form2.addEventListener('submit',function(event){ 
    if(yourName.value==="" || yourCode.value===""){
        alert("استكمل البيانات");
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
