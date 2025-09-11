function trackCarClick(carName) {
    adretriever("pixelEvent", "test1", "d273310c");
}

// Track view details button clicks
function trackViewDetails(carName) {
    adretriever("pixelEvent", "test2", "d273310c");
}

// Track page views
function trackPageView() {
    adretriever("pixelEvent", "test1", "d273310c");
}

// Track back button clicks
function trackBackClick() {
    adretriever("pixelEvent", "test2", "d273310c");
}

// Initialize tracking when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Track page view
    trackPageView();
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
