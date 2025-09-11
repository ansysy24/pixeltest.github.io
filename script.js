// Tracking functions that work with both GTM and AdRetriever
function trackCarClick(carName) {
    if (CONFIG.tracking.provider === 'gtm') {
        // Google Tag Manager tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'car_click', {
                'car_name': carName,
                'event_category': 'engagement'
            });
        }
    } else if (CONFIG.tracking.provider === 'adretriever') {
        // AdRetriever tracking
        if (typeof adretriever !== 'undefined') {
            adretriever("pixelEvent", "test1", CONFIG.tracking.adretriever.pixelId);
        }
    }
}

// Track view details button clicks
function trackViewDetails(carName) {
    if (CONFIG.tracking.provider === 'gtm') {
        // Google Tag Manager tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'view_details', {
                'car_name': carName,
                'event_category': 'engagement'
            });
        }
    } else if (CONFIG.tracking.provider === 'adretriever') {
        // AdRetriever tracking
        if (typeof adretriever !== 'undefined') {
            adretriever("pixelEvent", "test2", CONFIG.tracking.adretriever.pixelId);
        }
    }
}

// Track page views
function trackPageView() {
    if (CONFIG.tracking.provider === 'gtm') {
        // Google Tag Manager tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'page_view', {
                'page_title': document.title,
                'event_category': 'navigation'
            });
        }
    } else if (CONFIG.tracking.provider === 'adretriever') {
        // AdRetriever tracking
        if (typeof adretriever !== 'undefined') {
            adretriever("pixelEvent", "test1", CONFIG.tracking.adretriever.pixelId);
        }
    }
}

// Track back button clicks
function trackBackClick() {
    if (CONFIG.tracking.provider === 'gtm') {
        // Google Tag Manager tracking
        if (typeof gtag !== 'undefined') {
            gtag('event', 'back_click', {
                'event_category': 'navigation'
            });
        }
    } else if (CONFIG.tracking.provider === 'adretriever') {
        // AdRetriever tracking
        if (typeof adretriever !== 'undefined') {
            adretriever("pixelEvent", "test2", CONFIG.tracking.adretriever.pixelId);
        }
    }
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
