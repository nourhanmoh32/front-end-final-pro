const username=document.getElementById("username");
const password=document.getElementById("password");

form.addEventListener('submit',function(event){ 
    if(username.value==="" || password.value===""){
        alert("استكمل البيانات");
    }
    event.preventDefault();
});
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
    link.addEventListener("click", function(e){
        e.preventDefault();

        const sectionId =this.getAttribute("href");
        const section =document.querySelector(sectionId);

        const allSections = document.querySelectorAll("section");
        allSections.forEach(section => {
           section.style.display = "none";
        });
section.style.display = "block";
    });
});