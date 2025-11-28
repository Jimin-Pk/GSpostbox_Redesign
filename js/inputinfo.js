const pr = document.querySelectorAll(".pr");
const link = document.getElementById("link");
const nextBtn = document.getElementById("nextBtn");

function fillIn() {
  var allFilled = true;
  
  pr.forEach(function(input){
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
    link.href = "./book_halfpost.html";
  }
}

pr.forEach(function(input){
  input.addEventListener("input",fillIn);
});
link.addEventListener("click",handleLink); 


