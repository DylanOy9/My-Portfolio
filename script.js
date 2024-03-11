let button = document.getElementById('changeColorButton');
let isOriginalColor = localStorage.getItem('isOriginalColor') !== 'false';
let contactLinks = document.getElementsByName('contact-link'); 


if (!isOriginalColor) {
    document.documentElement.style.backgroundColor = "black";
    document.documentElement.style.color = "white";
    button.textContent = "Light Mode";
    Array.from(contactLinks).forEach(link => {
        link.style.color = "white";
    });
}

button.addEventListener('click', function() {
    if (isOriginalColor) {
        document.documentElement.style.backgroundColor = "black";
        document.documentElement.style.color = "white";
        button.textContent = "Light Mode";
        Array.from(contactLinks).forEach(link => {
            link.style.color = "white"; 
        });
        isOriginalColor = false;
    } else {
        document.documentElement.style.backgroundColor = ""; 
        document.documentElement.style.color = "";
        button.textContent = "Dark Mode";
        Array.from(contactLinks).forEach(link => {
            link.style.color = ""; 
        });
        isOriginalColor = true;
    }
    // Save the color mode in localStorage
    localStorage.setItem('isOriginalColor', isOriginalColor);
});