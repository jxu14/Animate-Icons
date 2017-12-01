let a = document.getElementById("countdown");

function countdown(){
  a.innerHTML = "&#xf0a8;"
  let num = 999;
  for(let i = 0; i < num ; i++) {
    setTimeout(function(){a.innerHTML = num - i}, i*1000)
  }
  // setTimeout(function(){
  //   a.innerHTML = "&#xf037;";
  // }
  // , 1000)
  // setTimeout(function(){
  //   a.innerHTML = "&#xf2ba;";
  // }
  // , 2000)

  // setTimeout(function(){
  //   a.innerHTML = "&#xf1fe;";
  // }
  // , 3000)

  // setTimeout(function(){
  //   a.innerHTML = "&#xf190;";
  // }
  // , 4000)
  // setTimeout(function(){
  //   a.innerHTML = "&#xf01b;";
  // }
  // , 5000)
  // setTimeout(function(){
  //   a.innerHTML = "&#xf0aa;";
  // }
  // , 6000)
  // setTimeout(function(){
  //   a.innerHTML = "&#xf060;";
  // }
  // , 7000)
  // setTimeout(function(){
  //   a.innerHTML = "&#xf062;";
  // }
  // , 8000)
  // setTimeout(function(){
  //   a.innerHTML = "&#xf0b2;";
  // }
  // , 9000)
  // setTimeout(function(){
  //   a.innerHTML = "&#xf0fc;";
  // }
  // , 10000)
  // setTimeout(function(){
  //   a.innerHTML = "&#xf241;";
  // }
  // , 11000)

}


// setInterval(countdown, 11000)
countdown();