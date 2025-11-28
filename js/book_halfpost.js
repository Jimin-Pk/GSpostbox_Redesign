const fc = document.querySelectorAll(".formcontrol");
const link = document.getElementById("link");
const nextBtn = document.getElementById("nextBtn");

function fillIn() {
  var allFilled = true;
  
  fc.forEach(function(input){
    if(input.value == "") {
      allFilled = false;
    }
    });

    if (allFilled) {
      nextBtn.disabled = false;
      link.classList.remove("disabled");
      nextBtn.style.opacity= "1";
    } else {
      nextBtn.disabled = true;
      link.classList.add("disabled");
      nextBtn.style.opacity= "0.4";
    }
}

function handleLink(e) {
  if (nextBtn.disabled) {
    e.preventDefault(); 
  } else {
    link.href = "./bookingcomplete.html";
  }
}

fc.forEach(function(input){
  input.addEventListener("input",fillIn);
});
link.addEventListener("click",handleLink); 


