import { observer } from 'mobx-react'
import NewDataForm from './NewDataForm'
import PhoneStore from '../Stores/Store'

const List = observer(() => {
    const deleteSelectedPhone = (id) => {
        PhoneStore.deletePhone(id)
    }
    return (
      <>
        <h1>Test Project</h1>
        <h2>Phone List</h2>
          {PhoneStore.phones.map((phone, index) => (
          <ul>  
            <li key={index}>
            Phone Brand: {phone.name} <br />
            Phone ID: {phone.docId}
            </li>
            <button onClick={() => deleteSelectedPhone(phone.docId)}>Delete</button> 
          </ul>           
          ))}
        <NewDataForm/>
      </>
    );
  })

export default List
