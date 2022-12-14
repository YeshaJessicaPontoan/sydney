//Asyncronous Nomor.1
function helloWorld() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Hello World!");
      }, 2000);
    });
  }
  
  const messages = async () => {
    const msg = await helloWorld();
    console.log(msg);
  };
  messages();
  
  // //Fetch Nomor.2
  // const ambilDataUser = () => {
  //   fetch("https://reqres.in/api/users")
  //     .then((response) => response.json())
  //     .then((users) => console.log(users.data))
  //     .catch((err) => console.log(`Gagal Mengambil Data ${err.message}`));
  // };
  // ambilDataUser();
  
  // //Async Await Nomor.3
  // const ambilDataUserAsync = async () => {
  //   try {
  //     const response = await fetch("https://reqres.in/api/users");
  //     const users = await response.json();
  //     console.log(users.data);
  //     // arr = users.data;
  //     // arr.forEach((item) => console.log(item.email));
  //   } catch (err) {
  //     console.log(`Error fetching data: ${err.message}`);
  //   }
  // };
  // ambilDataUserAsync();
  
  //Axios Nomor.4
  const axios = require("axios");
  const ambilDataUserAxios = async () => {
    try {
      const response = await axios.get("https://reqres.in/api/users");
      console.log(response.data);
    } catch (error) {
      console.log(`Error to get data ${error}`);
    }
  };
  ambilDataUserAxios();
