// $(document).click(function(){
//     $("#bar").hide();
// });
// window.onload=function(){
//     var myDiv = document.getElementById("bar");
//     var myBox = document.getElementById("box");
//     document.addEventListener("click",function(){
//         myDiv.style.display="none";
//         myBox.style.display="none";
//     });
//     myDiv.addEventListener("click",function(event){
//         event=event||window.event;
//         event.stopPropagation();
//     });
// };
// function my$(id) {
//     return document.getElementById(id);
// }
// //最外面的div
// var scrolls = my$("scrolls");
// //文字div
// var selectorDetail = my$("selectorDetail");
// //装滚动条的div---容器
// var scrollBar = my$("scrollBar");
// //滚动条
// var boxs = my$("boxs");
// //设置滚动条的高度
// //滚动条的高=装滚动条的div的高*box的高/文字div的高
// var height = scrollBar.offsetHeight * scrolls.offsetHeight / selectorDetail.offsetHeight;
// // boxs.style.height = height + "px";

// //移动滚动条
// boxs.onmousedown = function (e) {
//     //   console.log(e);
//     var spaceY = e.clientY - boxs.offsetTop;
//     document.onmousemove = function (e) {//移动事件
//         // console.log(e);
//         var y = e.clientY - spaceY;
//         y = y < 0 ? 0 : y;//最小值
//         y = y > scrollBar.offsetHeight - boxs.offsetHeight ? scrollBar.offsetHeight - boxs.offsetHeight : y;
//         boxs.style.top = (y+18) + "px";
//         window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
//         var moveY = y * (selectorDetail.offsetHeight - scrolls.offsetHeight) / (scrollBar.offsetHeight - boxs.offsetHeight);
//         selectorDetail.style.marginTop = -moveY +"px";
//         console.log(moveY)
//     };
// };
// //最外面的div
// var scroll = my$("r_bt");
// //文字div
// var selectorDetail1 = my$("selectorDetail1");
// //装滚动条的div---容器
// var scrollBar1 = my$("scrollBar1");
// //滚动条
// var boxs1 = my$("boxs1");
// //设置滚动条的高度
// //滚动条的高=装滚动条的div的高*box的高/文字div的高
// var height = scrollBar1.offsetHeight * scroll.offsetHeight / selectorDetail1.offsetHeight;
// // boxs.style.height = height + "px";

// //移动滚动条
// boxs1.onmousedown = function (e) {
//     //   console.log(e);
//     var spaceY = e.clientY - boxs1.offsetTop;
//     document.onmousemove = function (e) {//移动事件
//         // console.log(e);
//         var y = e.clientY - spaceY;
//         y = y < 0 ? 0 : y;//最小值
//         y = y > scrollBar1.offsetHeight - boxs1.offsetHeight ? scrollBar1.offsetHeight - boxs1.offsetHeight : y;
//         boxs1.style.top = (y-20) + "px";
//         window.getSelection ? window.getSelection().removeAllRanges() : document.selection.empty();
//         var moveY = y * (selectorDetail1.offsetHeight - scroll.offsetHeight) / (scrollBar1.offsetHeight - boxs1.offsetHeight);
//         selectorDetail1.style.marginTop = moveY +"%";

//         console.log(moveY)
//     };
// };
// document.onmouseup = function () {
//     document.onmousemove = null;
// };
