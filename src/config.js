'use strict';
const dotenv = require('dotenv');
// const assert = require('assert');

dotenv.config();

const {

LOCAL_PORT,
HOST,
HOST_URL,
LOCAL_URL,
PRODUCTION_URL,
SECRET,
NUMBER_HASH,


API_KEY,
AUTH_DOMAIN,
PROJECT_ID,
STORAGE_BUCKET,
MESSSGING_SENDER_ID,
APP_ID,
MEASUREMENT_ID,

} = process.env;

// assert(PORT, 'PORT is required');
// assert(HOST, 'HOST is required');

module.exports={

  port:LOCAL_PORT,
  host:HOST,
  url:HOST_URL,
  localUrl:LOCAL_URL,
  productionUrl:PRODUCTION_URL,
  secret:SECRET,
  numberHash:NUMBER_HASH,

  firebaseConfig : {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSSGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
  }

}
