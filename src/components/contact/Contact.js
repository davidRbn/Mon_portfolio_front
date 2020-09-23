import React, { useState } from 'react'
import './contact.css'
import emailjs from 'emailjs-com'

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
                <div id='contactText'>
                    <p>deoque fertur neminem aliquando ob haec vel similia poenae addictum oblato de more elogio revocari iussisse, quod inexorabiles quoque principes factitarunt. et exitiale hoc vitium, quod in aliis non numquam intepescit, in illo aetatis progressu</p>
                </div>
               <form id='formulaire' onSubmit={sendEmail}>
                     {/* <input type="hidden" name="contact_number" /> */}
                        <label>Name</label>
                            <input name="name" value={email.name} required type='text' onChange={e => setEmail({...email,name : e.target.value})} />
                                <label>Email</label>
                                    <input  name="email" value={email.email} required type="email" onChange={e => setEmail({...email,email : e.target.value })}/>
                            <label>Message</label>
                        <textarea name="message" value={email.message} required type='text' onChange={e => setEmail({...email,message : e.target.value})} />
                <input className='boutonEmail' type="submit" value='Envoyer'/>
            </form>
            </div>
        )
}

export default Contact