/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAaGAbAml_vzpfuUiQFRMYdxSsKRZsZ0Oo',
	authDomain: 'hng-sandpaper-cron-db.firebaseapp.com',
	databaseURL: 'https://hng-sandpaper-cron-db-default-rtdb.firebaseio.com',
	projectId: 'hng-sandpaper-cron-db',
	storageBucket: 'hng-sandpaper-cron-db.appspot.com',
	messagingSenderId: '82618366598',
	appId: '1:82618366598:web:bc6df67e2d9bed82ceef07',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line import/prefer-default-export
export const db = getDatabase(app);
