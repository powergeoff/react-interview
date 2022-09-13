import { basePage, buttons } from "./helperFunctions";

const model = {
    slide1: {
        content: [basePage('someId', true), buttons('someId', 'Submit')],
    },
  
    slide2: {
      content: [basePage('secondPage', false), buttons('secondPage', 'Continue')],
    },

    slide3: {
        content: [basePage('slide3', false), buttons('slide3', 'Continue')],
      },
  
    /* thirdPage: {
  
      content: [selectionSection(asd,asd,asd,asd)],
  
      sdasd: '',
  
      asdasd: ''
  
    }, */
  
};
export default model;
export const getModel = (id) => model[id];