(function () {
    //set cookies
    const urlParams = window.location.search;
    const date = new Date();

    function setCookies(name, cookieData, days) {
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        document.cookie = `${name}=${JSON.stringify(cookieData)}; expires=${date.toUTCString()}; path=/; SameSite=Strict;`
    }

    function extractARParams() {
        try {
            // Extract the UTM parameters from the URL
            const ar_ad_id = new URLSearchParams(urlParams).get('ar_ad_id');
            // const ar_website_id = new URLSearchParams(urlParams).get('ar_website_id');
            const ar_item_id = new URLSearchParams(urlParams).get('ar_item_id');
            const ar_template_id = new URLSearchParams(urlParams).get('ar_template_id');

            // Create a dictionary to store the AdRetriever parameters
            const arParams = {
                ar_ad_id: ar_ad_id,
                ar_item_id: ar_item_id,
                ar_template_id: ar_template_id,
            };

            // Check if there is a value for any of the AdRetriever parameters
            const hasARParams = Object.values(arParams).some(param => param !== null);

            // Set the cookie if there is a value for any of the AdRetriever parameters
            if (hasARParams) {
                setCookies("adRetriever", arParams, 5)
            }
        } catch (error) {
        }
    }

    extractARParams()

    // add local adretriever function
    let adretriever = function () {
        var apply = function () {
            let func = arguments[0];
            this[func].apply(this, Array.prototype.slice.call(arguments, 1));
        }
        return apply.bind(this);
    }

    // add pixelEvent as prototype
    adretriever.prototype.pixelEvent = function (event, conversion_id = null) {
        const start_time = new Date();
        const timestamp = new Date().toISOString();
        let retrieverData = {};

        try {
            const retrieverCookie = JSON.parse(document.cookie.split("; ").reduce((cookies, cookie) => {
                const [name, value] = cookie.split("=");
                cookies[name] = value;
                return cookies;
            }, {})['adRetriever']);
            retrieverData = {
                ad_id: retrieverCookie['ar_ad_id'],
                template_id: retrieverCookie['ar_template_id'],
                item_id: retrieverCookie['ar_item_id'],
            }
        } catch (error) {
            // do nothing, since there are no information to be collected
        }
        
        if (this.arWebsiteId === undefined) {
            return
        }

        const data = {
            event_type: "pixel_event",
            event: event,
            user_agent: window.navigator.userAgent,
            time_stamp: timestamp,
            website_id: this.arWebsiteId,
            ...retrieverData
        }

        if (conversion_id) {
            const endTime = new Date();
            data.conversion_type_id = conversion_id;
            data.duration = endTime - start_time;
            data.event = "custom_conversion";
        }
        
        //send it to endpoint - FIXED: Use FormData instead of JSON to avoid CORS preflight
        const xhr = new XMLHttpRequest();
        xhr.open('POST', "https://qa1.adretriever.com/api/tracking_event/");
        
        // Use FormData to avoid CORS preflight request
        const formData = new FormData();
        Object.keys(data).forEach(key => {
            formData.append(key, data[key]);
        });
        
        xhr.send(formData);
    }

    adretriever.prototype.setArWebisteId = function(arWebsiteId = null) {
        if (arWebsiteId === null) {
            return
        } else {
            adretriever.prototype.arWebsiteId = arWebsiteId
        }
    }
    
    let ar_instance = new adretriever();

    // check if window has adretriever, if yes then apply all to local
    if (window.adretriever && window.adretriever._ && window.adretriever._.length) {
        window.adretriever._.forEach(function (args) {
            ar_instance.apply(ar_instance, args);
        });
    }

    // make it global now
    window.adretriever = ar_instance;
    ar_instance('pixelEvent', 'view');
})();
