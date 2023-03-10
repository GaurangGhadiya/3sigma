/* Libraries */
import Axios from "axios";
const ENVIRONMENT = process.env.REACT_APP_ENVIRONMENT;
const LOCAL_API_URL = process.env.REACT_APP_LOCAL_API_URL;
const DEV_API_URL = process.env.REACT_APP_DEV_API_URL;
// const DEV_API_URL = "https://threesigma-backend-staging.herokuapp.com/";
const PROD_API_URL = process.env.REACT_APP_PROD_API_URL;

export default function request(
  url,
  method,
  fields = {},
  cb,
  headers = {},
  useApi = false
) {
  Axios.interceptors.request.use((request) => {
    return request;
  });

  Axios.interceptors.response.use((response) => {
    return response;
  });
  if (ENVIRONMENT == "prod") {
    var API_URL = PROD_API_URL;
  } else if (ENVIRONMENT == "dev") {
    var API_URL = DEV_API_URL;
  } else {
    var API_URL = LOCAL_API_URL;
  }
  var finalUrl = "";
  if (useApi) {
    finalUrl = url;
  } else {
    finalUrl = API_URL + url;
  }
  // console.log(username, password)
  let axios_params = {
    method,
    url: finalUrl,
    data: fields,
    headers: headers,
  };
  Axios(axios_params)
    .then(function (response) {
      return cb(null, response.data);
    })
    .catch(function (error) {
      console.log(error);
      if (error.response) {
        return cb(error.response.status, error.response.data);
      } else if (error.request) {
        return cb(600, "Connection error");
      } else {
        return cb(600, "Connection error");
      }
    });
}
