(function (d, s, id) {
    var js,
        fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {
        return;
    }
    js = d.createElement(s);
    js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
})(document, "script", "facebook-jssdk");

function subscribeApp(page_id, page_access_token, cb, pageName) {
    console.log("Subscribing page to app! " + page_id);
    FB.api("/" + page_id + "/subscribed_apps", "post", { access_token: page_access_token, subscribed_fields: ["leadgen"] }, function (response) {
        console.log("Successfully subscribed page", response);
        cb(page_id, page_access_token, pageName);
    });
}

// Only works after `FB.init` is called
function handleFacebookLogin(accessToken, cb) {
    fetch(`https://graph.facebook.com/v8.0/me/accounts?access_token=${accessToken}`)
        .then((response) => response.json())
        .then(async (response) => {
            console.log("Successfully retrieved pages", response);
            var pages = response.data;
            for (var i = 0, len = pages.length; i < len; i++) {
                var page = pages[i];
                console.log(page);
                subscribeApp(page.id, page.access_token, cb, page.name);
            }
        })
        .catch((err) => {
            console.log(err);
        });
}

function handleFacebookLogin2() {
    FB.login(
        function (response) {
            console.log("Successfully logged in", response);
            FB.api("/me/accounts", function (response) {
                console.log("Successfully retrieved pages", response);
                var pages = response.data;
                for (var i = 0, len = pages.length; i < len; i++) {
                    var page = pages[i];
                    console.log(page);
                }
            });
        },
        { scope: "pages_show_list,pages_read_engagement,pages_manage_metadata,ads_management,leads_retrieval,pages_manage_ads" }
    );
}

let map;

function initMap(lat, lng) {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat, lng },
        zoom: 8,
    });
}
