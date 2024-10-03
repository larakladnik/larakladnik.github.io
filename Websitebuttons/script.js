const button = document.getElementById('toggleBtn');
const output = document.getElementById('output');
let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === 1) {
        output.innerHTML = `<img src="Slike/Slika1.jpg">`;
    } else if (clickCount === 2) {
        output.innerHTML = `<img src="Slike/Slika2.jpg">`;
    } else if (clickCount === 3) {
    
        output.innerHTML = `<p>Hello</p>`;
        
        clickCount = 0; // Reset the counter after the third click
    }
});



