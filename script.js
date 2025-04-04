document.addEventListener('DOMContentLoaded', function() {
    const cursor = document.querySelector('.cursor');
    const cursorTrailer = document.querySelector('.cursor-trailer');
    
    // Update cursor position on mouse move
    document.addEventListener('mousemove', function(e) {
        // Main cursor follows immediately
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // Trailer follows with a delay
        setTimeout(() => {
            cursorTrailer.style.left = e.clientX + 'px';
            cursorTrailer.style.top = e.clientY + 'px';
        }, 5);
    });
    
    // Add pulse effect on click
    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.7)';
        cursorTrailer.style.transform = 'translate(-50%, -50%) scale(1.2)';
    });
    
    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorTrailer.style.transform = 'translate(-50%, -50%) scale(1)';
    });
    
    // Handle cursor leaving the window
    document.addEventListener('mouseout', function() {
        cursor.style.opacity = '0';
        cursorTrailer.style.opacity = '0';
    });
    
    document.addEventListener('mouseover', function() {
        cursor.style.opacity = '1';
        cursorTrailer.style.opacity = '0.5';
    });
});