import React from "react";
import Card from "./contactcard";


const ContactList  = (props)=>{

    const renderContactList = props.record.map((contact)=>{
        return <Card contact={contact}></Card>
        
    })
    return <div className="ui celled list">{renderContactList}</div>
}
export default ContactList