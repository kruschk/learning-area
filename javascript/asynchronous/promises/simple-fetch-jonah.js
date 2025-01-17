"use strict";
// Call the fetch() method to fetch the image, and store it in a variable
let promise = fetch('coffee.jpg');
// Use a then() block to respond to the promise's successful completion
// by taking the returned response and running blob() on it to transform it into a blob
let promise2 = promise.then(response => response.blob());
// blob() also returns a promise; when it successfully completes it returns
// The blob object in the callback
let promise3 = promise2.then(myBlob => {
    // Create an object URL that points to the blob object
    let objectURL = URL.createObjectURL(myBlob);
    // Create an <img> element to display the blob (it's an image)
    let image = document.createElement('img');
    // Set the src of the <img> to the object URL so the image displays it
    image.src = objectURL;
    // Append the <img> element to the DOM
    document.body.appendChild(image);
})
// If there is a problem, log a useful error message to the console
let errorCase = promise3.catch(e => {
    console.log('There has been a problem with your fetch operation: ' + e.message);
});

