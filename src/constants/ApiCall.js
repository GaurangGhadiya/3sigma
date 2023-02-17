import Request from "./request";

/*************** USER REQUESTS ***************/
export function registerReferral(method, body, cb) {
  Request("register_referral", method, body, cb);
}
/*************** END USER REQUESTS ***************/

/*************** INTEGRATION REQUESTS ***************/
export function getIntegration(method, body, cb) {
  Request("get_integrations_for_webpage", method, body, cb);
}

export function justdialIntegration(method, body, cb) {
  Request("integration/justdial", method, body, cb);
}

export function indiamartIntegration(method, body, cb) {
  Request("integration/indiamart", method, body, cb);
}

export function zapierIntegration(method, body, cb) {
  Request("integration/zapier", method, body, cb);
}
export function googleIntegration(method, body, cb) {
  Request("integration/google", method, body, cb);
}

export function facebookIntegration(method, body, cb) {
  Request("integration/facebook", method, body, cb);
}

export function facebookPastLeads(method, body, cb) {
  Request(`leads/facebookPast`, method, body, cb);
}

export function toggleIntegration(method, body, cb) {
  Request("toggle_integration", method, body, cb);
}
export function insert_integrations(method, body, cb) {
  Request("integration/insert_integrations", method, body, cb);
}

export function disconnectIntegration(method, body, cb) {
  Request("integration/disconnect", method, body, cb);
}

export function facebookIntegrationDisconnect(method, body, cb) {
  Request("integration/facebook/disconnect", method, body, cb);
}
/*************** END INTEGRATION REQUESTS ***************/

/*************** CONTENT REQUESTS ***************/

export function get_content_by_id(method, body, cb) {
  Request("get_content_by_id", method, body, cb);
}

export function increment_activity_view_count(method, body, cb) {
  Request("increment_activity_view_count", method, body, cb);
}

export function get_page_contents(method, body, cb) {
  Request("get_page_contents", method, body, cb);
}
export function generateHash(method, body, cb) {
  Request("generate_hash_code", method, body, cb);
}
export function getFacebookLeadForm(
  method,
  { page_id, page_access_token },
  cb
) {
  Request(
    `https://graph.facebook.com/${page_id}/leadgen_forms?access_token=${page_access_token}`,
    method,
    {},
    cb,
    {},
    true
  );
}

// export function facebookIntegration(method, body, cb) {
//     Request("integration/facebook", method, body, cb);
// }

// export function toggleIntegration(method, body, cb) {
//     Request("toggle_integration", method, body, cb);
// }

/*************** END CONTENT REQUESTS ***************/
