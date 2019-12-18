// function setRem() {
//   const scale = document.documentElement.clientWidth / 10;
//   document.documentElement.style.fontSize = scale + "px";
// }
// setRem();
// window.onresize = function() {
//   setRem();
// };

/**
 * 720代表设计师给的设计稿的宽度，你的设计稿是多少，就写多少;
 * 100代表换算比例，这里写100是为了以后好算,
 * 比如，你测量的一个宽度是100px,就可以写为1rem,以及1px=0.01rem等等
 */
// const oWidth = 720;
const oWidth = 1920;
const prem = 100; // 根fontsize，大于12px
// window.onload = function() {
getRem();
// };
window.onresize = function() {
  getRem();
};
function getRem() {
  console.log("rem");
  var html = document.getElementsByTagName("html")[0];
  // 网页可见区域宽
  var clientWidth =
    document.body.clientWidth || document.documentElement.clientWidth;
  html.style.fontSize = (clientWidth / oWidth) * prem + "px";
}
