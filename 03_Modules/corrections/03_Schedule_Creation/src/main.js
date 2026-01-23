const createPromotionalMessage = () => {
    const messageContainer = document.getElementById('message-container');
    
    const promotionalMessage = document.createElement("div");
    promotionalMessage.textContent = 'Special Offer: Get 20% off your next purchase!';
    promotionalMessage.className = 'bg-red-500 text-white p-4 rounded-lg shadow-lg max-w-md mx-auto';

    messageContainer.appendChild(promotionalMessage);
}

setTimeout(createPromotionalMessage, 3000);