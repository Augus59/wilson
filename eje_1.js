const getUsers = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    if (!response.ok) {
    }
    const data = await response.json();
    console.log(data);
  }  catch (error) {
        console.error("error al obtener usuarios",error);
        
  }
}

getUsers();