document.addEventListener('DOMContentLoaded', () => {
    const adsContainer = document.getElementById('ads-container');
    const products = [
        {
            title: 'Refurbished MacBook Pro (2018)',
            price: '₹45,000',
            location: 'Mumbai, Maharashtra',
            image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8',
            sustainabilityScore: 4.5
        },
        {
            title: 'Upcycled Denim Jacket',
            price: '₹1,500',
            location: 'Delhi, Delhi',
            image: 'https://images.unsplash.com/photo-1589139191024-3406e2329245',
            sustainabilityScore: 5.0
        },
        {
            title: 'Used Wooden Pallet Table',
            price: '₹3,000',
            location: 'Bangalore, Karnataka',
            image: 'https://images.unsplash.com/photo-1596703598774-72b9472e9a5d',
            sustainabilityScore: 4.0
        },
        {
            title: 'Recycled Plastic Bottle Pellets (1kg)',
            price: '₹250',
            location: 'Chennai, Tamil Nadu',
            image: 'https://images.unsplash.com/photo-1594954477810-745a33c09f3c',
            sustainabilityScore: 5.0
        },
        {
            title: 'Pre-loved Mountain Bike',
            price: '₹12,000',
            location: 'Kolkata, West Bengal',
            image: 'https://images.unsplash.com/photo-1549400827-011c75047805',
            sustainabilityScore: 4.5
        },
        {
            title: 'Refurbished Refrigerator',
            price: '₹8,000',
            location: 'Pune, Maharashtra',
            image: 'https://images.unsplash.com/photo-1628108529248-1b6a1e9c8a9d',
            sustainabilityScore: 4.0
        },
    ];

    function createProductCard(product) {
        const card = document.createElement('div');
        card.classList.add('product-card');

        card.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <span class="sustainability-score">⭐ ${product.sustainabilityScore}</span>
            <div class="product-details">
                <p class="price">${product.price}</p>
                <h3>${product.title}</h3>
                <p class="location">${product.location}</p>
            </div>
        `;
        
        adsContainer.appendChild(card);
    }

    products.forEach(product => {
        createProductCard(product);
    });
});