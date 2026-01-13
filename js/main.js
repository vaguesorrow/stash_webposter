document.addEventListener('DOMContentLoaded', () => {
    let canvas = document.querySelector(".canva-paint");
    const ctx = canvas.getContext('2d');

    let drawing = false; 
    let lastX, lastY; 


    const colorButtons = document.querySelectorAll('.color-button');

    colorButtons.forEach(div => {
        div.addEventListener('click', () => {
            const color = window.getComputedStyle(div).backgroundColor;
            setColor(color);
        });
    });


    function setColor(color) {
        currentColor = color; 
        ctx.strokeStyle = currentColor;
    }

    ctx.lineWidth = 3; 
    ctx.lineCap = 'round';
    ctx.globalCompositeOperation = 'source-over';

    canvas.addEventListener('mousedown', (e) => {
        drawing = true;

        lastX = e.clientX - canvas.getBoundingClientRect().left;
        lastY = e.clientY - canvas.getBoundingClientRect().top;

        ctx.beginPath(); 
        ctx.moveTo(lastX, lastY); 

        document.addEventListener('mousemove', mouseMoveHandler);
        document.addEventListener('mouseup', mouseUpHandler);
    });

    function mouseMoveHandler(e) {
        if (!drawing) return; 

        const x = e.clientX - canvas.getBoundingClientRect().left;
        const y = e.clientY - canvas.getBoundingClientRect().top;

        ctx.lineTo(x, y); 
        ctx.stroke(); 

        lastX = x; 
        lastY = y;
    }

    function mouseUpHandler() {
        drawing = false; 
        ctx.closePath();
        document.removeEventListener('mousemove', mouseMoveHandler);
        document.removeEventListener('mouseup', mouseUpHandler);
    }

    document.querySelector(".window-1").addEventListener("click", () => {
        window.open("https://hseadc.github.io/dikiioguretz/", "_blank");
    });

    document.querySelectorAll(".window-2").forEach(el => {
        el.addEventListener("click", () => {
        window.open("https://t.me/oldweb_core", "_blank");
    });
    });
});