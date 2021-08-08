import React, {useState} from 'react';
import axios from "axios";
import { useHistory } from 'react-router-dom';

const Form = () => {
    let history = useHistory();
    const [contact, setContact] = useState({
        fname: "",
        lname: "",
        phone: "",
        email: "",
        msg: "",
    });
    const {fname, lname, phone, email, msg} = contact;
    const onInputChange = e =>{
        setContact({...contact,[e.target.name]:e.target.value})
    };
    const onSubmit = async e =>{
        e.preventDefault();
        await axios.post("http://localhost:5000/contact", contact);
        alert("Message has been sent to Admin");
        history.push('/');
    }

    return(
        <div className="m-16 flex flex-col pl-8">
            <div className="flex flex-wrap md:flex-no-wrap">
                <div className="w-full md:w-1/2">
                    <label htmlFor="fname">First Name</label>
                    <br/>
                    <input name="fname" value={fname} onChange={e => onInputChange(e)} type="text" id="fname" className="h-12 rounded-xl border-2 mt-1 w-full"/>
                </div>
                <div className="w-full md:w-1/2 ml-0 md:ml-4">
                    <label htmlFor="lname">Last Name</label>
                    <br/>
                    <input name="lname" value={lname} onChange={e => onInputChange(e)} type="text" id="fname" className="h-12 rounded-xl border-2 mt-1"/>
                </div>
            </div>
            <div className="flex mt-8 md:flex-no-wrap flex-wrap">
                <div className="w-full md:w-1/2">
                    <label htmlFor="phone">Phone Number</label>
                    <br/>
                    <input name="phone" value={phone} onChange={e => onInputChange(e)} type="text" id="fname" className="w-full h-12 rounded-xl border-2 mt-1"/>
                </div>
                <div className="w-full md:w-1/2  ml-0 md:ml-4">
                    <label htmlFor="email">Email Address</label>
                    <br/>
                    <input name="email" value={email} onChange={e => onInputChange(e)} type="email" id="fname" className="h-12 rounded-xl border-2 mt-1"/>
                </div>
            </div>
            <div className="flex mt-4">
                <div className="flex flex-col w-full">
                    <label htmlFor="msg">Message</label>
                    <textarea name="msg" value={msg} onChange={e => onInputChange(e)} rows="5" placeholder="Your Message" className="border-2 rounded-xl" />
                </div>
            </div>
            <div className="mt-4">
                <button onClick = {e => onSubmit(e)} className="bg-red-700 text-white p-4 rounded-full w-40 md:w-64">Send Message</button>
            </div>
        </div>
    );
}
export default Form