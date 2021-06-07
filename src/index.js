// import "./styles.css";
window.toggle = toggle; // FOR CODESANDBOX
var option = 2;
let mode;
const col = document.querySelector(".color");
const colors = ["deeppink", "orangered", "tomato", "gold", "dodgerblue", "springgreen",];
const btn = document.getElementById("change-btn");
let colorBorder = document.createElement('style');
const hex_vals = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"]
const type = document.querySelector(".mode");
let genColor = "";
btn.addEventListener(
  "click",
  function () {
    if (option === 0) {
      const len = colors.length - 1;
      const random = Math.floor(Math.random() * (len - 0 + 1) + 0);
      genColor = colors[random];
    }
    // FOR RGB 
    else if (option === 1) {
      var rgb = [];
      for (let i = 0; i < 3; ++i) {
        let r = Math.floor((Math.random()) * (255 - 0 + 1) + 0);
        rgb.push(r);
      }
      //  var rgbColor = "rgb("+rgb[0]+","+rgb[1]+","+rgb[2]+")";
      var [r, g, b] = rgb; // Destructuring array
      var rgbColor = "rgb(" + r + "," + g + "," + b + ")";
      genColor = rgbColor;
    }
    //FOR HEX
    else {
      let hexColor = "#";
      for (let i = 0; i < 6; ++i) {
        hexColor += hex_vals[Math.floor(Math.random() * (hex_vals.length))];
      }
      genColor = hexColor;
    }
    genColor = genColor.toUpperCase();
    document.body.style.backgroundColor = genColor;
    document.head.appendChild(colorBorder);
    colorBorder.innerHTML = `#nav-links li{box-shadow: 0px 0px 0px 0.09rem ${genColor} inset ;border-radius: 0.975em ;}`
    col.textContent = genColor;
  }
  );
  function toggle(x) {
    if (x === 0) {
      mode = "Normal";
    }
    else if (x === 1) {
      mode = "RGB";
    }
    else {
      mode = "Hexcode";
    }
    type.textContent = mode;
    option = x;
  }
  