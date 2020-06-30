window.addEventListener('load', () => {
    const images = document.querySelectorAll('img')

    images.forEach((img) => {
        if (img.clientHeight > 50) {
            // Replace image with a cute kitten
            img.removeAttribute('srcset');
            img.setAttribute('src', `https://placekitten.com/${img.clientWidth}/${img.clientHeight}`);
        }
    });
});
