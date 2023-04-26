import { Link } from 'react-router-dom';
import { Table , Button} from 'semantic-ui-react'
import axios from 'axios';
import React, { useEffect, useState } from 'react';


const setData = (data) => {
    let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
 }



export default function Read() {

    const [APIData, setAPIData] = useState([]);

   

    useEffect(() => {
        axios.get(`https://643ae7f0447794557350ab84.mockapi.io/fakedata`)
            .then((response) => {
                setAPIData(response.data);
              
            })
    }, [])

    
     const onDelete = (id) => {
        axios.delete(`https://643ae7f0447794557350ab84.mockapi.io/fakedata/${id}`)
     .then(() => {
        getData();
    })
    alert("Are You sure you want to delete this record!!!");
    }

    const getData = () => {
        axios.get(`https://643ae7f0447794557350ab84.mockapi.io/fakedata`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }

   
    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>lastName</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        
                    </Table.Row>
                </Table.Header>
                <Table.Body>
  {APIData.map((data) => {
   
     return (
       <Table.Row>
          <Table.Cell>{data.firstName}</Table.Cell>
           <Table.Cell>{data.lastName}</Table.Cell>
           <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
           <Link to='/update'>
           <Table.Cell> <Button  onClick={() => setData(data)}> Update</Button></Table.Cell></Link>
           <Table.Cell>
              <Button onClick={() => onDelete(data.id)}>Delete</Button>
             </Table.Cell>  
 </Table.Row>
       
   )})}
</Table.Body>
</Table>
 </div>
    )
}
