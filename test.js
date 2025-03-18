window.onload = function() {
    console.log("Window loaded completely");
    
    const rainButton = document.getElementById("rainButton");
    
    if (rainButton) {
        rainButton.onclick = function() {
            console.log("Rain button clicked");
            // Start creating pixels
            let rainInterval = setInterval(createPixel, 100);
            
            // Optional: Stop creating new pixels after 30 seconds
            setTimeout(function() {
                clearInterval(rainInterval);
            }, 30000);
        };
    }
    
    function createPixel() {
        // Create a new pixel
        const pixel = document.createElement("div");
        pixel.className = "pixel";
        
        // Set random position and color
        const startX = Math.random() * window.innerWidth;
        const color = getRandomColor();
        
        // Style the pixel
        pixel.style.left = startX + "px";
        pixel.style.top = "0px";
        pixel.style.backgroundColor = color;
        
        // Add to document
        document.body.appendChild(pixel);
        
        // Animate the pixel falling
        let position = 0;
        let speed = Math.random() * 3 + 2;
        
        let fallInterval = setInterval(function() {
            position += speed;
            pixel.style.top = position + "px";
            
            // Remove pixel when it goes off screen
            if (position > window.innerHeight) {
                clearInterval(fallInterval);
                pixel.remove();
            }
        }, 20);
    }
    
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
};