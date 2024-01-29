import React from "react";

const AddContact = ()=>{
    return(
        <div className="ui main">
            <h2> Add Contact</h2>
            <form className="ui form">
                <div className="field">
                    <label>Name</label>
                    <input type="text" name = "name" placeholder = "Name here"/>
                </div>
                <div className="field">
                    <label>E-mail</label>
                    <input type="email" name = "email" placeholder = "Email here"/>
                </div>
                <button className = "ui button purple"> Add </button>
            </form>
        </div>
    )
}
export default AddContact