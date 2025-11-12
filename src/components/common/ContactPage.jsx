import React, {useState} from "react";

function Contact() {
    const [myForm, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevForm => ({
            ...prevForm,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting me')
        setFormData({
            name: '',
            email: '',
            message: '',
        });
    };

    return (
        <div class='contact'>
            <h2>Contact Me</h2>
            <input
                type="text"
                name="name"
                value={myForm.name}
                onChange={handleChange}
                placeholder="Name"
            />
            <input
                type="email"
                name="email"
                value={myForm.email}
                onChange={handleChange}
                placeholder="Email"
            />
            <textarea
                name="message"
                value={myForm.message}
                onChange={handleChange}
                placeholder="Message"
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Contact;