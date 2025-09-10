// Pixel tracking function
function adretriever(eventType, pixelName, pixelId) {
    console.log(`Pixel Event: ${eventType}, Pixel: ${pixelName}, ID: ${pixelId}`);
    
    // In a real implementation, this would send data to your analytics service
    // For testing purposes, we'll just log the events
    const eventData = {
        event: eventType,
        pixel: pixelName,
        id: pixelId,
        timestamp: new Date().toISOString(),
        url: window.location.href
    };
    
    // Store events in localStorage for testing
    let events = JSON.parse(localStorage.getItem('pixelEvents') || '[]');
    events.push(eventData);
    localStorage.setItem('pixelEvents', JSON.stringify(events));
    
    // Display event in console for testing
    console.log('Pixel Event Data:', eventData);
}

// Track car card clicks
function trackCarClick(carName) {
    adretriever("pixelEvent", "test1", "d273310c");
    
    // Navigate to car detail page
    const carPages = {
        'tesla': 'car1.html',
        'bmw': 'car2.html',
        'mercedes': 'car3.html',
        'audi': 'car4.html',
        'porsche': 'car5.html'
    };
    
    if (carPages[carName]) {
        window.location.href = carPages[carName];
    }
}

// Track view details button clicks
function trackViewDetails(carName) {
    adretriever("pixelEvent", "test2", "d273310c");
    
    // Prevent event bubbling to avoid double tracking
    event.stopPropagation();
    
    // Navigate to car detail page
    const carPages = {
        'tesla': 'car1.html',
        'bmw': 'car2.html',
        'mercedes': 'car3.html',
        'audi': 'car4.html',
        'porsche': 'car5.html'
    };
    
    if (carPages[carName]) {
        window.location.href = carPages[carName];
    }
}

// Track page views
function trackPageView() {
    adretriever("pixelEvent", "test1", "d273310c");
}

// Track back button clicks
function trackBackClick() {
    adretriever("pixelEvent", "test2", "d273310c");
    window.location.href = 'index.html';
}

// Initialize tracking when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    trackPageView();
    
    // Add click tracking to all car cards
    const carCards = document.querySelectorAll('.car-card');
    carCards.forEach(card => {
        card.addEventListener('click', function() {
            const carName = this.querySelector('.car-name').textContent.toLowerCase().replace(/\s+/g, '');
            trackCarClick(carName);
        });
    });
    
    // Add click tracking to view details buttons
    const detailButtons = document.querySelectorAll('.view-details-btn');
    detailButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.stopPropagation();
            const carName = this.closest('.car-card').querySelector('.car-name').textContent.toLowerCase().replace(/\s+/g, '');
            trackViewDetails(carName);
        });
    });
    
    // Add back button tracking if on detail page
    const backButton = document.querySelector('.back-btn');
    if (backButton) {
        backButton.addEventListener('click', trackBackClick);
    }
});

// Utility function to view all tracked events (for testing)
function viewTrackedEvents() {
    const events = JSON.parse(localStorage.getItem('pixelEvents') || '[]');
    console.log('All Tracked Events:', events);
    return events;
}

// Clear tracked events (for testing)
function clearTrackedEvents() {
    localStorage.removeItem('pixelEvents');
    console.log('Tracked events cleared');
}
