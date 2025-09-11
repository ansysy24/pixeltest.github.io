// Tracking script templates
const TRACKING_TEMPLATES = {
    gtm: {
        head: (gtmId) => `
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','${gtmId}');</script>
    <!-- End Google Tag Manager -->`,
        
        body: (gtmId) => `
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=${gtmId}"
    height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->`
    },
    
    adretriever: {
        head: (websiteId) => `
    <!-- AdRetriever Tracking -->
    <script>
    (function(w, d){(r=function(){adretriever._.push(arguments)})&&(r._=[]);w.adretriever||(w.adretriever=r);adretriever("setArWebisteId", "${websiteId}");var u=new URL("https://app.adretriever.com/pixel.js");var a=d.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",u);a.setAttribute("async","async");if(d.body){d.body.appendChild(a);}else{d.addEventListener('DOMContentLoaded',function(){d.body.appendChild(a);});}})(window,document);
    </script>
    <!-- End AdRetriever Tracking -->`,
        
        body: () => ``
    }
};

// Function to get tracking scripts based on configuration
function getTrackingScripts() {
    const provider = CONFIG.tracking.provider;
    const trackingConfig = CONFIG.tracking[provider];
    
    if (provider === 'gtm') {
        return {
            head: TRACKING_TEMPLATES.gtm.head(trackingConfig.id),
            body: TRACKING_TEMPLATES.gtm.body(trackingConfig.id)
        };
    } else if (provider === 'adretriever') {
        return {
            head: TRACKING_TEMPLATES.adretriever.head(trackingConfig.websiteId),
            body: TRACKING_TEMPLATES.adretriever.body()
        };
    }
    
    return { head: '', body: '' };
}
