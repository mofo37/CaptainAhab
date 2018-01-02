import config from "./configureStore";
import app from "./setup";
import firebase from "firebase";
import "firebase/firestore";

// Initialize Firebase
firebase.initializeApp({
	apiKey: "AIzaSyAd9-_GPC8kfDZjkhwnrkRJnKfU00HH8U8",
    authDomain: "captainahab-ce472.firebaseapp.com",
    databaseURL: "https://captainahab-ce472.firebaseio.com",
    projectId: "captainahab-ce472",
    storageBucket: "captainahab-ce472.appspot.com",
    messagingSenderId: "856646189335"
});

export const auth = firebase.auth()
export const db = firebase.firestore();

export default function() {
	const stores = config();
	return app(stores);
}
