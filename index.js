let homeScore = document.getElementById("homeScorePoint");
let guestScore = document.getElementById("guestScorePoint");

let plus1a = document.getElementById("plus1a");
let plus2a = document.getElementById("plus2a");
let plus3a = document.getElementById("plus3a");

let plus1b = document.getElementById("plus1b");
let plus2b = document.getElementById("plus2b");
let plus3b = document.getElementById("plus3b");

let homeCount = 0;
let guestCount = 0;

// Home Section
plus1a.addEventListener("click", function(){
  homeCount += 1;
  homeScore.textContent = homeCount;
  
})

plus2a.addEventListener("click", function(){
  homeCount += 2;
  homeScore.textContent = homeCount;
})

plus3a.addEventListener("click", function(){
  homeCount += 3;
  homeScore.textContent = homeCount;
})

plus1b.addEventListener("click", function(){
  guestCount += 1;
  guestScore.textContent = guestCount;
  
})

// Guest Section

plus2b.addEventListener("click", function(){
  guestCount += 2;
  guestScore.textContent = guestCount;
})

plus3b.addEventListener("click", function(){
  guestCount += 3;
  guestScore.textContent = guestCount;
})



