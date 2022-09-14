import { basePage, buttons } from "./helperFunctions";

const model = {
    slide1: {
        id: 'slide1',
        content: [basePage(true, true), buttons('Submit', () => {alert('Submit')})],
    },
    slide2: {
        id: 'slide2',
      content: [basePage(), buttons('Continue', () => {alert('Continue')})],
    },
    slide3: {
        id: 'slide3',
        content: [basePage(false, true), buttons('Continue', () => {alert('Continue')})],
    }
};
export default model;
export const getModel = (id) => model[id];