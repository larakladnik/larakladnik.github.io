const button = document.getElementById('toggleBtn');
const output = document.getElementById('output');
let clickCount = 0;

button.addEventListener('click', () => {
    clickCount++;
    
    if (clickCount === 1) {
        output.innerHTML = `<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/2010-kodiak-bear-1.jpg/1200px-2010-kodiak-bear-1.jpg"widht="500" height="400" alt="Bear Image">`;
    } else if (clickCount === 2) {
        output.innerHTML = `<img src="https://i.pinimg.com/736x/b8/25/e1/b825e1484a21bb183466a3890df21c39.jpg"widht="150" hight="100" alt="Rabbit Image">`;
    } else if (clickCount === 3) {
        output.innerHTML = `<p>Hello</p>`;
        clickCount = 0; // Reset the counter after the third click
    }
});



