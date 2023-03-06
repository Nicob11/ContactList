
import { contactos } from "../contactos.jsx";
import React from "react";

const ContactsCard = (props) => {
    console.log(props)
    
    return (
                <>
                <div className="container">
             <div className="div"><img src={contactos[0].img} alt="" /></div>
                <h1>{contactos[0].email}</h1><i className="fa-sharp fa-solid fa-pencil"></i><i className="fa-solid fa-trash"></i>
                <h3>{contactos[0].address}</h3><i className="fa-sharp fa-solid fa-pencil"></i><i className="fa-solid fa-trash"></i>
                <h3>{contactos[0].phone}</h3><i className="fa-sharp fa-solid fa-pencil"></i><i className="fa-solid fa-trash"></i>                
            </div>
            </>


    )
}

export default ContactsCard;