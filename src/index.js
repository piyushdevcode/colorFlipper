// import "./styles.css";
window.toggle = toggle; // FOR CODESANDBOX
var option = 2;
let mode = "Hexcode";
const col = document.querySelector(".color")
const colors = ["deeppink","orangered","tomato","gold","dodgerblue","springgreen"]
const btn = document.getElementById("change")
const hex_vals = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"]
const type = document.querySelector(".mode");
btn.addEventListener(
"click",
function() {
  if (option === 0){
    const len = colors.length -1;
    const random = Math.floor(Math.random()*(len-0+1)+0);
    document.body.style.backgroundColor = colors[random];
    col.textContent = colors[random];
    
  }
  // FOR RGB 
  else if(option === 1) {
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
  //FOR HEX
  //FOR HEX
  else{
    let hexColor = "#";
    for(let i = 0; i < 6; ++i){
     hexColor += hex_vals[Math.floor(Math.random()*(hex_vals.length))];
    }
    document.body.style.backgroundColor = hexColor;
   col.textContent = hexColor;
  }
//self toggling normal =!normal; 
//self toggling normal =!normal; 
}
);
function toggle (x) {
  if(x === 0){
    type.textContent = "Normal";
  }
  else if(x === 1){
    type.textContent = "RGB";
  }
  else{
    type.textContent = "Hexcode";
  }
  option = x;
}
