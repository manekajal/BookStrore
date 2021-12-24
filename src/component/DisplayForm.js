import React from 'react'
import './DisplayForm.css';
import { withRouter } from "react-router-dom";
import deleteIcon from "../assets/icons/delete-black-18dp.svg";
import editIcon from "../assets/icons/create-black-18dp.svg";
import AddressBookService from '../Services/api';
import swal from 'sweetalert';

function DisplayForm(props) {
    const update = (id) => {
        props.history.push(`addform/${id}`);
       };

       const remove = (id) => {
        if(window.confirm("Really want to delete data")){
        AddressBookService
          .deleteContact(id)
          .then((response) => {
            // window.location.reload();
            console.log("data after delete", response.data.data);
            props.getAllPersons();
            swal("Data deleted successfully!!");
          })
        
          .catch((err) => {
            swal("error while deleting the data!");
            console.log("error after delete", err);
          });
        }
        else{
          window.location.reload();
        }
      };

    return (
        <div>
            <table id="display">
            <tbody>
                <tr key={-1}>
                <th>FullName</th>
                <th>Address</th>
                <th>City</th>
                <th>State</th>
                <th>Zip</th>
                <th>Phone Number</th>
                <th>Actions</th>
                </tr>
                {props.addressBookArray &&
                props.addressBookArray.map((element, ind) => (
                    <tr key={ind}>
                    <td>{element.name}</td>
                    <td className="">{element.address}</td>
                    <td> {element.city}</td>
                    <td>{element.state}</td>
                    <td>{element.zip}</td>
                    <td>{element.contact}</td>
                    <td>
                        <img
                        onClick={() => remove(element.id)}
                        src={deleteIcon}
                        alt="delete"
                        />
                        <img
                        onClick={() => update(element.id)}
                        src={editIcon}
                        alt="edit"
                        />
                    </td>
                    </tr>
                ))}
            </tbody>
            </table>
            
        </div>
    )
}

export default withRouter(DisplayForm);
