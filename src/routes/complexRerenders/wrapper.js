
import ComplexStore from "../../state/complexSlice/store";
import ComplexPage from "./complexPage";
const Wrapper = () => {
    return <ComplexStore>
        <ComplexPage />
    </ComplexStore>
}

export default Wrapper;