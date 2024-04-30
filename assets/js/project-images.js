const projectImageEls = document.getElementsByClassName('image-list');
const containerImagesMap = new Map();

/**
 * Hide the current image and unhide the next.
 * 
 * @param {*} imageContainer The HTML element that holds the images.
 * @param {int} counter Positive or negative value determines next iamge.
 */
function switchImage(imageContainer, counter) {
    let numImages = containerImagesMap.get(imageContainer)
        .get('numImages');
    let currentImageIndex = containerImagesMap.get(imageContainer)
        .get('currentImage');

    // Only switch images if index is within range.
    let result = currentImageIndex + counter;
    if(result >= 0 && result < numImages){
        // Set new current index.
        containerImagesMap.get(imageContainer).set('currentImage', result);

        // Hide all images except for image at certain index.
        // Also indicate which image is current with the small circles.
        let imageIndicator = imageContainer.querySelector('.images-num-indicator');
        for(let i = 0; i < numImages; i++){
            if(i !== result){
                imageContainer.childNodes[i].classList.add('hidden');
                imageIndicator.childNodes[i].classList.remove('image-indicated');
            }
            else{
                imageContainer.childNodes[i].classList.remove('hidden');
                imageIndicator.childNodes[i].classList.add('image-indicated');
            }
        }
    }
}

for(let imageContainer of projectImageEls){
    // Map the container with another map, consisting of
    // number of images in list, and the current image index.
    let innerMap = new Map();
    innerMap.set('numImages', imageContainer.childNodes.length);
    innerMap.set('currentImage', 0);
    containerImagesMap.set(
        imageContainer,
        innerMap
    );

    let arrowHolder = document.createElement('div');
    arrowHolder.classList.add('image-arrow-holder');

    let leftArrow = document.createElement('div');
    leftArrow.classList.add('image-left-arrow', 'image-arrow');
    let leftSpan = document.createElement('span');
    leftSpan.classList.add('material-symbols-outlined')
    leftArrow.append(leftSpan);
    arrowHolder.append(leftArrow);

    let rightArrow = document.createElement('div');
    rightArrow.classList.add('image-right-arrow', 'image-arrow');
    let rightSpan = document.createElement('span');
    rightSpan.classList.add('material-symbols-outlined')
    rightArrow.append(rightSpan);
    arrowHolder.append(rightArrow);

    // Pass the current image container and each arrow's respective
    // values to the switching function.
    leftArrow.addEventListener('click', (event)=>switchImage(imageContainer, -1));
    rightArrow.addEventListener('click', (event)=>switchImage(imageContainer, 1));
    imageContainer.append(arrowHolder);

    // Append a div that shows total images as small circles.
    let imagesNumIndicator = document.createElement('div');
    imagesNumIndicator.classList.add('images-num-indicator');
    imageContainer.append(imagesNumIndicator);
    let numChildren = containerImagesMap.get(imageContainer).get('numImages');
    for(let i = 0; i < numChildren; i++){
        imagesNumIndicator.append(document.createElement('div'));
    }
    // Highlight the first child.
    if(numChildren > 0){
        imagesNumIndicator.childNodes[0].classList.add('image-indicated');
    }
}