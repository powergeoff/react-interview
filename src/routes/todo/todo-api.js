

export const getTodos = async () => {
    try {
        const response = await fetch(process.env.REACT_APP_HEROKU_URL);
        //const response = await fetch('http://google.com')
        const json = await response.json();
        return json;
      } catch (error) {
        //console.error("error", error);
        throw new Error(`Error! status ${error}`);
      }
}

export const getTodo = async (id) => {
    try {
        const response = await fetch(process.env.REACT_APP_HEROKU_URL + '/' + id);
        const json = await response.json();
        return json;
    } catch (error){
        console.error("error", error);
    }
}

export const deleteTodo = async (id) => {
    const data = {token : process.env.REACT_APP_SECRET_TOKEN};
    try {
        const response = await fetch(process.env.REACT_APP_HEROKU_URL + '/' + id , {
            method: 'DELETE',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        const json = await response.json();

        console.dir(json);
    } catch (error) {
        console.log("error", error);
    }
    
}

export const createTodo = async ({title, description}) => {
    const data = {
        title,
        description,
        token : process.env.REACT_APP_SECRET_TOKEN
    };
    try {
        const response = await fetch(process.env.REACT_APP_HEROKU_URL , {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log("error", error);
    }
}
export const updateTodo = async ({_id, title, description}) => {
    const data = {
        title,
        description,
        token : process.env.REACT_APP_SECRET_TOKEN
    };
    try {
        const response = await fetch(process.env.REACT_APP_HEROKU_URL + '/' + _id , {
            method: 'PUT',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
          });
        const json = await response.json();
        return json;
    } catch (error) {
        console.log("error", error);
    }
    
}