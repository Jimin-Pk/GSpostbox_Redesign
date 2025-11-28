const fc = document.querySelectorAll(".formcontrol");
const link = document.getElementById("link");
const logbtn = document.getElementById("logbtn");

function fillIn() {
  var allFilled = true;
  
  fc.forEach(function(input){
    if(input.value == "") {
      allFilled = false;
    }
    });

    if (allFilled) {
      logbtn.disabled = false;
      link.classList.remove("disabled");
      logbtn.style.opacity= "1";
    } else {
      logbtn.disabled = true;
      link.classList.add("disabled");
      logbtn.style.opacity= "0.4";
    }
}

function handleLink(e) {
  if (logbtn.disabled) {
    e.preventDefault(); 
  } else {
    link.href = "./main.html";
  }
}

fc.forEach(function(input){
  input.addEventListener("input",fillIn);
});
link.addEventListener("click",handleLink); 


