import "./AddressCard.css";
export const AddressCard = () => {
    return (
        <>
            <div className="radio-item">
                <input type="radio" name="radio" id="radio1" />
                <label for="radio1">
                    <p>Name <span>Home</span> </p>
                    <p>Address </p>
                    <p>Mobile number</p>
                </label>

            </div>
        </>
    )
}