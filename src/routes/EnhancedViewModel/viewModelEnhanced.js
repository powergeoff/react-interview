import {model} from "./model"
import { getModel } from "./model";


const ViewModelEnhanced = () => {
    const page = getModel('slide2');
    return (
        <>
            <h1>New ViewModel</h1>
            {page.content.map((item, index) => <div key={index}>{item}</div>)}
        </>
    );
}

export default ViewModelEnhanced;