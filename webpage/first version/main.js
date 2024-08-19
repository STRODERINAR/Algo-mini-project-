const container = document.querySelector('.container');

// Array to store images (simulating a data source)
const imagePool = [
    { src: 'image/360_F_641426931_sJkCqdIkiI5GPtbBQ92S7xIJk9akRo33.jpg', description: 'Description for Pin 1' },
    { src: 'image/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.avif', description: 'Description for Pin 2' },
    { src: 'image/pexels-pixabay-358457.jpg', description: 'Description for Pin 3' },
    { src: 'image/pexels-souvenirpixels-417074.jpg', description: 'Description for Pin 4' },
    { src: 'image/new_image1.jpg', description: 'Description for New Pin 5' },
    { src: 'image/new_image2.jpg', description: 'Description for New Pin 6' },
    { src: 'image/new_image3.jpg', description: 'Description for New Pin 7' },
    { src: 'image/new_image4.jpg', description: 'Description for New Pin 8' }
    // Add more images here if needed
];

let pinIndex = 0;

// Function to load more pins
function loadMorePins() {
    // Simulate fetching new images (could be from an API in a real scenario)
    for (let i = 0; i < 4; i++) {
        if (pinIndex >= imagePool.length) return; // Stop if no more images

        const pin = imagePool[pinIndex++];
        const box = document.createElement('div');
        box.className = 'box';
        box.innerHTML = `
            <img src="${pin.src}" alt="${pin.description}">
            <p>${pin.description}</p>
        `;
        container.appendChild(box);
    }
}

// Event listener for scrolling
window.addEventListener('scroll', () => {
    if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        loadMorePins();
    }
});

// Initial load
loadMorePins();
