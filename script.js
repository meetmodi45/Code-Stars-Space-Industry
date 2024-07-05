var c= document.querySelector("#cursor")
document.addEventListener("mousemove",function(dets){
    c.style.left = dets.x -20+"px"
    c.style.top = dets.y -20+"px"
   
})