import { getModel } from "./model";

const state = [{ slideName: 'slide38', answer: 'yes'}, {}, {}]
const ViewModelEnhanced = () => {
    const page = getModel('slide2');
    const render = page.content.map(c => c(page, 'someState'));
    return (
        <>
            <h1>New ViewModel</h1>
            {render}
        </>
    );
}

export default ViewModelEnhanced;