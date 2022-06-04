import "./AddressFormModal.css";
import { Modal } from "../../../components/index";
export const AddressFormModal = ({ isOpen, onClose }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose}>
            <div className="address-form-container">
             <h2 className="delivery-title">Delivery Details</h2>   
            <form className="address-form">
                <label>Name</label>
               <input type="text"/>
               <label>Delivery Address</label>
               <textarea type="text" row="3">
               </textarea>
               <label>Phone Number</label>
               <input type="number"/>
              <button className="add-address-btn">
                  Add
              </button>
            </form>
            </div>
        </Modal>
    )
}