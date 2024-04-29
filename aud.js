/**
 * 
 *  (same

audio
time
progress 
control
)


(different
    h2
    info
)
 */


/**
 * 
 *             <div class="pd">
                <div class="image">
                    <img src="images/tyl.jpg" draggable="false"/>
                </div>
                <div class="titl">
                    Cream Valley 80g x 24
                </div>
                <div class="bt">
   
                </div>
            </div>
 *                  <!--2-->
                 <div class="pd">
                    <div class="image">
                        <img src="images/trd.jpg"  draggable="false"/>
                    </div>
                    <div class="titl">
                        Cream Valley 80g x 24
                    </div>
                    <div class="bt">
   
                    </div>
                </div>
 * 
 */

// 1. What is the same?
// Div -> Image Div (img) -> Title Div --> Button Div
// 2. What is different?
// Image & Title
function createProductDiv(title, image) {
    // Create parent Div
    const parentDiv = document.createElement('div');
    parentDiv.className = 'pd';

    // Create Image Div
    const imageDiv = document.createElement('div');
    imageDiv.className = 'image';

    const imageElement = document.createElement('img');
    imageElement.draggable = false;
    imageElement.src = image;

    // Add image element to image div
    imageDiv.appendChild(imageElement);

    // Add img div to parent div
    parentDiv.appendChild(imageDiv);

    // Create title div
    const titleDiv = document.createElement('div');
    titleDiv.className = 'titl';
    titleDiv.textContent = title;

    // Add Title Div to parent Div
    parentDiv.appendChild(titleDiv);

    // Create Contact Button
    const contact = document.createElement('div');
    contact.className = 'bt';

    // Add Contact Btn to Parent Div
    parentDiv.appendChild(contact);

    // Return parent Div
    return parentDiv;
}

// What will we call it with?
let milkProducts = [
    {"image": "images/tyl.jpg", "title": "Cream Valley 80g x 24"},
    {"image": "images/trd.jpg", "title": "Cream Valley 80g x 24"},
    {"image": "images/tbl.jpg", "title": "Cream Valley 80g x 24"},
    {"image": "images/rgg.jpg", "title": "Cream Valley 80g x 24"},
    {"title": "Cream 64g x 60", "image": "images/kdd.jpg"},
    {"title": "Cream 64g x 60", "image": "images/dpp.jpg"},
    {"title": "Cream 64g x 60", "image": "images/kdk.jpg"},
    {"title": "Cream 64g x 60", "image": "images/jby.jpg"},
    {"title": "Mohammed", "image": "images/jbg.jpg"}
];


// How do we call it?
// Find main div
let mainDiv = document.getElementById('mainProducts');

// For each milk product, create the div, and add to main div
milkProducts.forEach(product => {
    const productDiv = createProductDiv(product.title, product.image);
    mainDiv.appendChild(productDiv);
});