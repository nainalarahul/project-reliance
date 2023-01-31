import axios from 'axios';

const accessToken = 'your_access_token';
const orgName = 'your_org_name';
const projectName = 'your_project_name';
const repositoryName = 'your_repo_name';
const filePath = 'path/to/your/file.json';

const config = {
  headers: {
    'Authorization': `Bearer ${accessToken}`,
    'Content-Type': 'application/json'
  }
};

const createFile = async (fileContent) => {
  try {
    const response = await axios.put(`https://dev.azure.com/${orgName}/${projectName}/_apis/git/repositories/${repositoryName}/items?path=${filePath}&api-version=6.0`, fileContent, config);
    console.log(response.status);
  } catch (error) {
    console.error(error);
  }
};

const readFile = async () => {
  try {
    const response = await axios.get(filePath);
    createFile(response.data);
  } catch (error) {
    console.error(error);
  }
};

readFile();
