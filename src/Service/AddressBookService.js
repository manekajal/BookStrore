import axios from 'axios';


class AddressBookService {
      baseUrl= "http://localhost:8080/addressbookservice";
  
  addContact(data) {
    return axios.post(`${this.baseUrl}/create`, data);
  }

  getAllContacts() {
    return axios.get(`${this.baseUrl}/getall`);
  }

  getContactById(employee_id) {
    return axios.get(`${this.baseUrl}/get/${employee_id}`);
  }

  updateContact(employee_id,data) {
    return axios.put(`${this.baseUrl}/update/${employee_id}`, data);
  }
  
  deleteContact(employee_id) {
    return axios.delete(`${this.baseUrl}/delete/${employee_id}`); 
  }
}  
export default new AddressBookService();