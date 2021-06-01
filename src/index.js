import "./styles.css";
var normal = true;

const col = document.querySelector(".color")
const colors = ["deeppink","orangered","tomato","gold","dodgerblue","springgreen"]
const btn = document.getElementById("change")
btn.addEventListener(
"click",
function() {
  if (normal){
    const len = colors.length -1;
   const random = Math.floor(Math.random()*(len-0+1)+0);
   document.body.style.backgroundColor = colors[random];
   col.textContent = colors[random];
   
  }
  else{
    var rgb = [];
   for(let i = 0; i < 3; ++i){
     let r = Math.floor((Math.random())* (255-0+1)+0);
     rgb.push(r);
    }
  //  var rgbColor = "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
  var [r,g,b] = rgb; // Destructuring array
  var rgbColor = "rgb("+r+","+g+","+b+")";
  document.body.style.backgroundColor = rgbColor;
   col.textContent = rgbColor;
  }
// normal =!normal;
}
);
function toggle (x) {
  normal = x;
}


