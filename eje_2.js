const getUsers = async () => {
    try {
        const response = await fetch ("https://jsonplaceholder.typicode.com/users");
        const data = await response.json(); //convetir la respuestas en JSON 
        console.log(data);
    } catch (error) {
        console.error("error al obtener usuarios",error);
    }
}

getUsers();