const cursor = document.querySelector(".cursor");

let mouseX = 0;
let mouseY = 0;

let posX = 0;
let posY = 0;

document.addEventListener("mousemove", (e)=>{
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animate(){
    posX += (mouseX - posX) * 0.1;
    posY += (mouseY - posY) * 0.1;

    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";

    requestAnimationFrame(animate);
}

animate();