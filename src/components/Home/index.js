import { useState } from "react"
import Item from "./Items"
import { data } from "./data"
import "./style.css"

const Home = () => {
    const [inputText, setInputText] = useState("");
    const [updatedData, setUpdatedData] = useState(data);
    const createItem = (inputText) => {
        if(inputText !== ''){
            setUpdatedData([...updatedData, {
                "id": Math.random(),
                "isDone": false,
                "text": inputText,
            }])
            setInputText('');
        } else {
            alert('Please enter value')
        }
    }
    const change = event => {
        setInputText(event.target.value)
    }
    return (
        <div className="Home">
            <h1>Grocery Bud</h1>
            <input type="text" value={inputText} onChange={change}/>
            <button onClick={() => createItem(inputText)}>Babken</button>
            <div>
                {updatedData.map(item => {
                    return (
                        <Item
                            key = {item.id}
                            {...item}
                            setUpdatedData = {setUpdatedData}
                            updatedData = {updatedData}
                        />
                    )
                })}
            </div>
        </div>
    )
}
export default Home;