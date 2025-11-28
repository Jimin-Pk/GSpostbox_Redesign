const selbox = document.querySelector('.selbox');
const bookbox = document.querySelector('.bookbox');
const bookbox2 = document.querySelector('.bookbox2');

const nextBtn = document.getElementById("nextBtn");
const linkURL1 = './inputinfo.html';
const linkURL2 = './inputinfo_dom.html';
const linkURL3 = './inputinfo_int.html';

selbox.addEventListener('click', function() {
  selbox.style.background ="#007def";
  selbox.style.border ="none";
  bookbox.style.background ="none";
  bookbox.style.border = "1px, solid, #c4c4c4"
  bookbox2.style.background = "none";
  bookbox2.style.border = "1px, solid, #c4c4c4"

  nextBtn.disabled = false;
  nextBtn.addEventListener('click',function(){
    window.location.href = linkURL1;
  });

  const next = selbox.querySelectorAll('*');
  next.forEach(function(element) {
    element.style.color = 'white'; 
  });
  const next1 = bookbox.querySelectorAll('*');
  next1.forEach(function(element1) {
    element1.style.color = 'black'; 
  });
  const next2 = bookbox2.querySelectorAll('*');
  next2.forEach(function(element2){
    element2.style.color = 'black';
  });

  const slimg = selbox.querySelectorAll('img');
  slimg.forEach(function(sel) {
    sel.src = "mobileimg/GShalf.png";
  });
  const slimg1 = bookbox.querySelectorAll('img');
  slimg1.forEach(function(sel1) {
    sel1.src = "mobileimg/nondom.png";
  });
  const slimg2 = bookbox2.querySelectorAll('img');
  slimg2.forEach(function(sel) {
    sel.src = "mobileimg/noninter.png";
  });

  const selbtn = document.querySelector('button');
  selbtn.style.opacity= "1"; 
})

bookbox.addEventListener('click', function() {
  bookbox.style.background ="#007def";
  bookbox.style.border ="none";
  selbox.style.background ="none";
  selbox.style.border = "1px, solid, #c4c4c4"
  bookbox2.style.background = "none";
  bookbox2.style.border = "1px, solid, #c4c4c4"

  nextBtn.disabled = false;
  nextBtn.addEventListener('click',function(){
    window.location.href = linkURL2;
  });

  const next = selbox.querySelectorAll('*');
  next.forEach(function(element) {
    element.style.color = 'black'; 
  });
  const next1 = bookbox.querySelectorAll('*');
  next1.forEach(function(element1) {
    element1.style.color = 'white'; 
  });
  const next2 = bookbox2.querySelectorAll('*');
  next2.forEach(function(element2){
    element2.style.color = 'black';
  });

  const slimg = selbox.querySelectorAll('img');
  slimg.forEach(function(sel) {
    sel.src = "mobileimg/nonGShalf.png";
  });
  const slimg1 = bookbox.querySelectorAll('img');
  slimg1.forEach(function(sel1) {
    sel1.src = "mobileimg/dom.png";
  });
  const slimg2 = bookbox2.querySelectorAll('img');
  slimg2.forEach(function(sel) {
    sel.src = "mobileimg/noninter.png";
  });

  const selbtn = document.querySelector('button');
  selbtn.style.opacity= "1";

})

bookbox2.addEventListener('click', function() {
  bookbox2.style.background ="#007def";
  bookbox2.style.border ="none";
  selbox.style.background ="none";
  selbox.style.border = "1px, solid, #c4c4c4"
  bookbox.style.background = "none";
  bookbox.style.border = "1px, solid, #c4c4c4"

  nextBtn.disabled = false;
  nextBtn.addEventListener('click',function(){
    window.location.href = linkURL3;
  });

  const next = selbox.querySelectorAll('*');
  next.forEach(function(element) {
    element.style.color = 'black'; 
  });
  const next1 = bookbox.querySelectorAll('*');
  next1.forEach(function(element1) {
    element1.style.color = 'black'; 
  });
  const next2 = bookbox2.querySelectorAll('*');
  next2.forEach(function(element2){
    element2.style.color = 'white';
  });

  const slimg = selbox.querySelectorAll('img');
  slimg.forEach(function(sel) {
    sel.src = "mobileimg/nonGShalf.png";
  });
  const slimg1 = bookbox.querySelectorAll('img');
  slimg1.forEach(function(sel1) {
    sel1.src = "mobileimg/nondom.png";
  });
  const slimg2 = bookbox2.querySelectorAll('img');
  slimg2.forEach(function(sel) {
    sel.src = "mobileimg/inter.png";
  });

  const selbtn = document.querySelector('button');
  selbtn.style.opacity= "1";
});
