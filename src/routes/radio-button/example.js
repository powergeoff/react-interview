import { useState } from "react";

const masks = [{"id": 2475, "name": "Gerson"},{"id": 454, "name": "Halyon"}];

const RadioButtonExample = () => {
    const [form, setForm] = useState({ "failed": [], "primary": "", "secondary": ""});
    const [radioButtons, setRadioButtons] = useState(masks.map((m,index) => { return {"id": m.id, "primary": false, "secondary": false, "failed": false }}));
    const handleSubmit = () => {
        console.log(form);
    }
    const handleClick = (event) => {
        const className = event.target.className;
        const value = parseInt(event.target.value);
        const newArray = [...radioButtons];
        const newForm = {...form};
        const newFailedArray = [...newForm.failed];
        newArray.forEach(row => {
            if (row.id === value)
            {
                if(className === "primary")
                {
                    row.primary = true;
                    row.secondary = false;
                    row.failed = false;
                    newForm.primary = value;
                    newForm.secondary = newForm.secondary === value ? "" : newForm.secondary;
                    newFailedArray.pop(value);
                }
                else if(className === "secondary")
                {
                    row.primary = false;
                    row.secondary = true;
                    row.failed = false;
                    newForm.secondary = value;
                    newForm.primary = newForm.primary === value ? "" : newForm.primary;
                    newFailedArray.pop(value);
                }
                else if (className === "failed")
                {
                    row.primary = false;
                    row.secondary = false;
                    row.failed = true;
                    newForm.primary = newForm.primary === value ? "" : newForm.primary;
                    newForm.secondary = newForm.secondary === value ? "" : newForm.secondary;
                    newFailedArray.push(value);
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
        newForm.failed = newFailedArray;
        setForm(newForm)
    }
    return (
        <>
        <table>   
        <thead><tr><th>Name</th><th>Primary</th><th>Secondary</th><th>Failed</th></tr></thead>
        <tbody>
            {masks.map((m,index) => <tr key={index}>
                <td>{m.name}</td>
                <td><input checked={radioButtons[index].primary === true } onChange={(e) => handleClick(e)} type="radio" className="primary" value={m.id} /></td> 
                <td><input checked={radioButtons[index].secondary === true}  onChange={(e) => handleClick(e)} type="radio" className="secondary" value={m.id} /></td> 
                <td><input checked={radioButtons[index].failed === true } type="radio" onChange={(e) => handleClick(e)} className="failed" value={m.id} /></td> 
                </tr>)}
        </tbody>
    </table>
    <><button onClick={handleSubmit}>Submit</button></>
    </>
);
}

export default RadioButtonExample;