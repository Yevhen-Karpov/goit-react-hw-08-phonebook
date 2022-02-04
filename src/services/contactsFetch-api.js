import axios from 'axios';

// axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const { data } = await axios.get('/contacts');
  console.log(data);
  return data;
}
export async function fetchAddContact(payload) {
  const { data } = await axios.post('/contacts', payload);
  console.log(data);
  return data;
}
export async function fetchDeleteContact(value) {
  const response = await axios.delete(`/contacts/${value}`);
  console.log(response);
  return response.data;
}
// export async function fetchContacts() {
//   const { data } = await axios.get('/contacts');

//   return data;
// }
