let button = document.getElementById('changeColorButton');

let isOriginalColor = localStorage.getItem('isOriginalColor') !== 'false';


if (!isOriginalColor) {
    document.documentElement.style.backgroundColor = "black";
    document.documentElement.style.color = "white";
    button.textContent = "Light Mode";
}

button.addEventListener('click', function() {
    if (isOriginalColor) {
        document.documentElement.style.backgroundColor = "black";
        document.documentElement.style.color = "white";
        button.textContent = "Light Mode";
        isOriginalColor = false;
    } else {
        document.documentElement.style.backgroundColor = ""; 
        document.documentElement.style.color = "";
        button.textContent = "Dark Mode"; 
        isOriginalColor = true;
    }
    
    localStorage.setItem('isOriginalColor', isOriginalColor);
});