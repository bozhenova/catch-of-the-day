import Rebase from 're-base';
import firebase from 'firebase/app';
import 'firebase/database';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDJWtLE7ofX_AADhiLuqFy5Nm4efTkP7z0',
  authDomain: 'catch-of-the-day-f9236.firebaseapp.com',
  databaseURL: 'https://catch-of-the-day-f9236.firebaseio.com'
});

const base = Rebase.createClass(firebaseApp.database());

export { firebaseApp };

export default base;
