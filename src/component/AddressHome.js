import React, { Component } from 'react';
import { Link } from "react-router-dom";
import logo from "../assets/icons/logo.png";
import addIcon from '../assets/icons/add.svg';
import './AddressHome.css';
import Display from '../component/DisplayForm';
import AddressBookService from '../Services/api';

class AddressHome extends Component {
    constructor(props) {
        super(props);
        this.state = {
          addressBookArray: [],
        };
      }
      
      componentDidMount() {
        this.getAllPerson();
      }
    
      getAllPerson = () => {
        AddressBookService
          .getAllContacts()
          .then((response) => {
            console.log("Contact ", response.data);
            this.setState({
              addressBookArray: response.data.data,
            });
          })
          .catch((err) => {
            console.log("There is an error ", err);
          });
      };

    render() {
        return (
            <div>
                <header className='header row center'>
                <div className="logo">
                    <img src={logo} alt="" width="37px" />
                    <div>
                        <span className="emp-text">ADDRESS</span> <br />
                        <span className="emp-text emp-payroll">BOOK</span>
                    </div>
                </div>
                </header>
                <div className="column content">
                <div className="emp-detail">
                    <div className="detail-text">
                    Person Details <div className="count"></div>
                    </div>
                    
                    <Link to="/addform" className="add-button flex-row-center" >
                        <img src={addIcon} alt="" /> Add Person
                    </Link>
                    </div>
                    
                    
                <div className="table-main">
                    <Display
                        addressBookArray={this.state.addressBookArray}
                        getAllPersons={this.getAllPerson}
                    />
                </div>
                </div>
                
            </div>
        )
    }
}

export default AddressHome
