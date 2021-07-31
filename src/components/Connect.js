import React, { useState } from "react";
import { validateEmail } from "../utility";

const Connect = () => {
    const [name, handleName] = useState("");
    const [email, handleEmail] = useState("");
    const [message, handleMessage] = useState("");
    const [error, handleError] = useState("");

    const submit = () => {
        if (!name || !email) {
            handleError("Please fill all the fields before continuing.");
        } else if (!validateEmail(email)) {
            handleError("Please enter valid email address.");
        } else if (!message) {
            handleError("Please fill all the fields before continuing.");
        } else {
            handleName("");
            handleEmail("");
            handleMessage("");
            handleError("");
        }
    }
    return (
        <section id="connect">
            <div className="inner">
                {/* <h2 className="major">Connect With Me</h2> */}
                {/* <form>
                    <div className="fields">
                        <div className="field">
                            <label htmlFor="name">Name</label>
                            <input type="text" name="name" value={name} id="name" onChange={(e) => handleName(e.target.value)} />
                        </div>
                        <div className="field">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" value={email} id="email" onChange={(e) => handleEmail(e.target.value)} />
                        </div>
                        <div className="field">
                            <label htmlFor="message">Message</label>
                            <textarea name="message" id="message" value={message} rows="4" onChange={(e) => handleMessage(e.target.value)}></textarea>
                        </div>
                    </div>
                </form>
                <div className="error-txt">{error}</div>
                <ul className="actions">
                    <li><input type="button" value="Send Message" onClick={() => submit()} /></li>
                </ul> */}
                <ul className="copyright">
                    <li>No © copyright issues.</li>
                </ul>
            </div>
        </section>
    )
}

export default Connect;
