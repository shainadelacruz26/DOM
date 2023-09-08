const imageElement = document.getElementById('myImage');


const buttonElement = document.getElementById('changeImageBtn');


 


// Add a click event listener to the button


buttonElement.addEventListener('click', function() {


    // Change the image source and alt attribute


    imageElement.src = 'pic2.jpg';


    imageElement.alt = 'Adifferent image';


 


    // Change the button text


    buttonElement.textContent
= 'Image Changed!';


});
