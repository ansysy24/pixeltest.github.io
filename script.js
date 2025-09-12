// Simple utility functions (no tracking)
function trackCarClick(carName) {
    // Tracking removed - function kept for compatibility
    console.log('Car clicked:', carName);
}

function trackViewDetails(carName) {
    // Tracking removed - function kept for compatibility
    console.log('View details clicked:', carName);
}

function trackPageView() {
    // Tracking removed - function kept for compatibility
    console.log('Page view tracked');
}

function trackBackClick() {
    // Tracking removed - function kept for compatibility
    console.log('Back button clicked');
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    console.log('Car Showcase loaded');
});

// Utility functions (no tracking)
function viewTrackedEvents() {
    console.log('No tracking events to view');
    return [];
}

function clearTrackedEvents() {
    console.log('No tracking events to clear');
}
