import React, { useState } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'
import Logo from '../logo/Logo'

const Contact = () => {

const [email,setEmail] = useState({
    name : '',
    email : '',
    message : ''
})
        
    
const sendEmail = (e) => {
    e.preventDefault()
    const template_params = {
        name : `${email.name}`,
        email : `${email.email}`,
        message : `${email.message}`
     }
     const user_id = 'user_BpnnzXxlPJRCvNcpfShOb'
     const service_id = "default_service";
     const template_id = "portfolio";
     emailjs.send(service_id, template_id,template_params,user_id)
     .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
    }  
    
    console.log(email)
    
    return(
            <div id='containerContact'>
                <h3>Contact</h3>
                <div className="blocContact">
                <div id='contactText'>
                    <p>N'hésitez pas à me contacter pour toute question.</p>
                </div>
               <form id='formulaire' onSubmit={sendEmail}>
                     {/* <input type="hidden" name="contact_number" /> */}
                        <label>Nom</label>
                            <input name="name" value={email.name} required type='text' onChange={e => setEmail({...email,name : e.target.value})} />
                                <label>Email</label>
                                    <input  name="email" value={email.email} required type="email" onChange={e => setEmail({...email,email : e.target.value })}/>
                            <label>Message</label>
                        <textarea name="message" value={email.message} required type='text' onChange={e => setEmail({...email,message : e.target.value})} />
                <input className='boutonEmail' type="submit" value='Envoyer'/>
            </form>
            </div>
            <Logo/>
            </div>
        )
}

export default Contact