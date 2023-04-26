import axios from 'axios';
import React, { useState } from 'react';
import { Button, Checkbox, Form } from 'semantic-ui-react'

export default function Create() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [checkbox, setCheckbox] = useState(false);
    

 const postData = () => {
 
        axios.post(`https://643ae7f0447794557350ab84.mockapi.io/fakedata`, {
            firstName,
            lastName,
            checkbox
           
        })
        alert("Record has been added");
    }

//     const postData = () => {
//         console.log(firstName);
//         console.log(lastName);
//         console.log(checkbox);
// }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>First Name</label>
                    <input placeholder='First Name' required onChange={(e) => setFirstName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Last Name</label>
                    <input placeholder='Last Name' required onChange={(e)=>setLastName(e.target.value)}/>
                </Form.Field>
                <Form.Field>
                    <Checkbox label='I agree to the Terms and Conditions' required onChange={(e)=> setCheckbox(!checkbox)} />
                </Form.Field>
                <Button   type='submit' onClick={postData}>Submit</Button>
            </Form>
        </div>
    )
}
