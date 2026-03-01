//Dynamically display gift details
const renderGift = async () => {

    //parse ID as int from URL
    const requestedID = parseInt(window.location.href.split('/').pop());

    //use fetch to retrieve data from gifts endpt
    const response = await fetch('/gifts');
    const data = await response.json();

    const giftContent = document.getElementById('gift-content');

    let gift;

    //check if data is null. Not? find gift w/same ID as req
    if (data) {
        gift = data.find(gift => gift.id === requestedID);
    }

    if (gift) {
        //fill in DOM elements
        document.getElementById('image').src = gift.image;
        document.getElementById('name').textContent = gift.name;
        document.getElementById('submittedBy').textContent = `Submitted By: ${gift.submittedBy}`;
        document.getElementById('submittedOn').textContent = `Submitted On: ${gift.submittedOn}`;
        document.getElementById('pricePoint').textContent = `Price: ${gift.pricePoint}`;
        document.getElementById('audience').textContent = `Great For: ${gift.audience}`;
        document.getElementById('description').textContent = gift.description;
        document.title = `UnEarthed - ${gift.name}`;
    }
    else {
        const message = document.createElement('h2');
        message.textContent = 'No Gifts Available ☹️';
        giftContent.appendChild(message);
    }

};

renderGift();
