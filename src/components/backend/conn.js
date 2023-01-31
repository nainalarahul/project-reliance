// import axios from 'axios';

// const DBConnection = () => {
// const token = 'rzuux4bfyknoc247asdqwm7pxxrmwpth2a5nyv7fnkmr5fknoq6a';
// const headers = {
//   Authorization: `Bearer ${token}`
// };

// axios.get('https://dev.azure.com/testserverrel/_git/reltesting?version=GBmain&path=/NewFolder', { headers })
//   .then(response => {
//     console.log(response.data);
//   })
//   .catch(error => {
//     console.error(error);
//   });

// };

// export default DBConnection;



import axios from 'axios';


const username = 'username';
const password = 'rzuux4bfyknoc247asdqwm7pxxrmwpth2a5nyv7fnkmr5fknoq6a';
const filePath = '/home/rahulnainala/Desktop/github/project-reliance/script.js';

const config = {
  auth: {
    username,
    password
  },
  headers: {
    'Authorization': `Bearer ${password}`,
    'Content-Type': 'application/json'
  }
};

const createFile = async (fileContent) => {
  try {
    const response = await axios.put(`https://dev.azure.com/testserverrel/_git/reltesting?version=GBmain&path=/NewFolder`, fileContent, config);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
};

const DBConnection = async () => {
  try {
    const response = await axios.get(filePath);
    createFile(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default DBConnection;

