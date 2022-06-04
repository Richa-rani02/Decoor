import "./AddressCard.css";
export const AddressCard = ({ addressDetail }) => {
    return (
        <div className="radio-item">
            <input type="radio" name="radio" id={addressDetail._id} />
            <label for={addressDetail._id}>
                <p>{addressDetail.name} <span>{addressDetail.addresstype}</span> </p>
                <p>{addressDetail.address} </p>
                <p>{addressDetail.mobile}</p>
            </label>

        </div>
    )
}