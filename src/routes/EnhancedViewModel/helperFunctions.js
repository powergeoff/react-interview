
//export const basePage = (id, description, selections) => (model) => {
export const basePage = (id, description, selections) => {

    const descriptionView = description ? descriptionSection(id, description) : '';
    const selectionsView = selections ? selectionSection(id,selections) : '';
    return <div>{descriptionView} {selectionsView}</div>;
}

export const buttons = (id, value) => <div><button>{value}</button></div>;

const descriptionSection = (id, description) => <h1>{`Id: ${id} Description: ${description}`}</h1>;
const selectionSection = (id, selections) => <div>{`Id: ${id} Selections: ${selections}`}</div>;

//const descipriontSection = (id, description)=> () => <div>{description && <T>{id}.{description}<T/>}</div>;