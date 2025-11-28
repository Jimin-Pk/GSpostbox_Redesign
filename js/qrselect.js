const sendp = document.getElementById('sendp');
const receivep = document.getElementById('receivep');

sendp.addEventListener('click', function click1() {
  sendp.style.background ="#007def";
  receivep.style.background ="#d9d9d9";

  const next = sendp.querySelectorAll('*');
  next.forEach(function(element) {
    element.style.color = 'white'; 
  });
  const next1 = receivep.querySelectorAll('*');
  next1.forEach(function(element1) {
    element1.style.color = 'black'; 
  });

  const line1 = sendp.querySelectorAll('div');
  line1.forEach(function(line1) {
    line1.style.backgroundColor = 'white';
  });
  const line2 = receivep.querySelectorAll('div');
  line2.forEach(function(line2) {
    line2.style.backgroundColor = '#4c4c4c';
  });

  const send = sendp.querySelectorAll('img');
  send.forEach(function(send) {
    send.src = "mobileimg/send.png";
  });
  const receive = receivep.querySelectorAll('img');
  receive.forEach(function(receive){
    receive.src = "mobileimg/nonreceive.png";
  })

  const selbtn = document.querySelector('button');
  selbtn.style.background= "#007def";
});

receivep.addEventListener('click', function click2() {
  receivep.style.background ="#007def";
  sendp.style.background ="#d9d9d9";

  const next1 = receivep.querySelectorAll('*');
  next1.forEach(function(element1) {
    element1.style.color = 'white'; 
  });
  const next = sendp.querySelectorAll('*');
  next.forEach(function(element) {
    element.style.color = 'black'; 
  });

  const line2 = receivep.querySelectorAll('div');
  line2.forEach(function(line2) {
    line2.style.backgroundColor = 'white';
  });
  const line1 = sendp.querySelectorAll('div');
  line1.forEach(function(line1) {
    line1.style.backgroundColor = '#4c4c4c';
  });

  const receive = receivep.querySelectorAll('img');
  receive.forEach(function(receive){
    receive.src = "mobileimg/receive.png";
  });
  const send = sendp.querySelectorAll('img');
  send.forEach(function(send) {
    send.src = "mobileimg/nonsend.png";
  });

  const selbtn = document.querySelector('button');
  selbtn.style.background= "#007def";
});
