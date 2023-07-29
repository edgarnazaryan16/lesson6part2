import { useState } from "react";
import "./style.css"
const Item = ({id, isDone, text, setUpdatedData, updatedData}) => {
    const [checkBoxValue, setChangeBoxValue] = useState(isDone);
    const handleChangeCheckBox = (id) => {
        setUpdatedData(updatedData.map((item) => {
            if (item.id === id) {
                return {
                    ...item,
                    "isDone": !isDone
                }
            } else {
                return item;
            }
        }))
    }
    const handleDeleteItem = (id) => {
        setUpdatedData(updatedData.filter(item => (item.id !== id)))
    }
    return (
        <div className="Item">
            <input type="checkbox" onClick={() => handleChangeCheckBox(id)}/>
            <p>{!isDone ? (text) : <del>{text}</del>}</p>
            <button onClick={() => handleDeleteItem(id)}>Delete</button>
        </div>
    )
}
export default Item;