const API_URL = process.env.REACT_APP_ENVIRONMENT == "prod" ? process.env.REACT_APP_PROD_API_URL : process.env.REACT_APP_DEV_API_URL;

export { API_URL };
