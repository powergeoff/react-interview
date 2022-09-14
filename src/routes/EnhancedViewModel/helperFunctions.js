//closure is the term
export const basePage = (description, selections) => (modelInstance, state) => {
    console.log(state)
    const descriptionView = descriptionSection(modelInstance.id, description);
    const selectionsView = selectionSection(modelInstance.id, selections);
    return <div key='mainDiv'><h2>{modelInstance.id}</h2>{descriptionView} {selectionsView}</div>;
}

export const buttons = (value, onClick) => (modelInstance, state) => {
    console.log(modelInstance.id, state)
    return <div key='buttonDiv'><button onClick={onClick}>{value}</button></div>;
}

const descriptionSection = (id, description) => <h1 key={`description${id}`}>{description && `Id: ${id} Description: 'GO GET VALUES FROM TRANSLATION FILE'`}</h1>;
const selectionSection = (id, selections) => <div key={`selections${id}`}>{selections && `Id: ${id} Selections: 'GO GET VALUES FROM TRANSLATION FILE'`}</div>;