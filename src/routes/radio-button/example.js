import { useState } from "react";

const masks = [{"id": 2475, "name": "Gerson"},{"id": 454, "name": "Halyon"}];

const RadioButtonExample = () => {

    const [radioButtons, setRadioButtons] =useState(masks.map((m,index) => { return {"id": index, "primary": false, "secondary": false, "failed": false }}));
    const handleClick = (event) => {
        const className = event.target.className;
        const value = parseInt(event.target.value);
        const newArray = [...radioButtons];
        newArray.forEach(row => {
            if (row.id === value)
            {
                if(className === "primary")
                {
                    row.primary = true;
                    row.secondary = false;
                    row.failed = false;
                }
                else if(className === "secondary")
                {
                    row.primary = false;
                    row.secondary = true;
                    row.failed = false;
                }
                else if (className === "failed")
                {
                    row.primary = false;
                    row.secondary = false;
                    row.failed = true;
                }
            }
            else
            {
                if(className === "primary")
                {
                    row.primary = false;
                }
                else if(className === "secondary")
                {
                    row.secondary = false;
                }
            }
        })
        setRadioButtons(newArray);
    }
    return <table>   
        <thead><tr><th>Name</th><th>Primary</th><th>Secondary</th><th>Failed</th></tr></thead>
        <tbody>
            {masks.map((m,index) => <tr key={index}>
                <td>{m.name}</td>
                <td><input checked={radioButtons[index].primary === true } onChange={(e) => handleClick(e)} type="radio" className="primary" value={index} /></td> 
                <td><input checked={radioButtons[index].secondary === true}  onChange={(e) => handleClick(e)} type="radio" className="secondary" value={index} /></td> 
                <td><input checked={radioButtons[index].failed === true } type="radio" onChange={(e) => handleClick(e)} className="failed" value={index} /></td> 
                </tr>)}
        </tbody>
    </table>
}

export default RadioButtonExample;