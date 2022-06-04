import "./AddressCard.css";
export const AddressCard = ({ addressDetail }) => {
    console.log(addressDetail);
    return (
        <div className="radio-item">
            <input type="radio" name="radio" id="radio1" />
            <label for="radio1">
                <p>{addressDetail.name} <span>{addressDetail.addresstype}</span> </p>
                <p>{addressDetail.address} </p>
                <p>{addressDetail.mobile}</p>
            </label>

        </div>
    )
}