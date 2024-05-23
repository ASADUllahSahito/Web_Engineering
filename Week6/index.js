const h1 =document.getElementById('heading1');
h1.style.color='red';

var btn = document.getElementById('btn');

var btnpressed = ()=>{
  
  const ball = document.createElement('div')
  ball.className='ball';
  
  btn.style.background ='green'
  var ctn = document.getElementById('container')
  ctn.appendChild(ball);



}


btn.onclick=btnpressed;