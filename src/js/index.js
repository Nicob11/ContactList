//import react into the bundle
import React, {useState} from "react";
import ReactDOM from "react-dom";
import FormContact from "./component/FormContact.jsx";
import ContactsCard from "./component/ContactsCard.jsx";


// include your styles into the webpack bundle
import "../styles/index.css";


//import your own components

//render your react application
ReactDOM.render(<ContactsCard />, document.querySelector("#app"));
