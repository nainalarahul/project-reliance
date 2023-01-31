
import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import axios from 'axios';

const PAT = 'rzuux4bfyknoc247asdqwm7pxxrmwpth2a5nyv7fnkmr5fknoq6a';
const AzureConnection = () => {
  const [message, setMessage] = useState('');
  const handleClick = async () => {
    try {
    
      const projectPath = 'https://dev.azure.com/testserverrel/_git/reltesting?version=GBmain&path=/NewFolder';

      const headers = {
        'Content-Type': 'application/json',
        // 'Authorization': 'Basic dXNlcm5hbWU6cnp1dXg0YmZ5a25vYzI0N2FzZHF3bTdweHhybXdwdGgyYTVueXY3Zm5rbXI1Zmtub3E2YQ==',
        'Authorization': `Bearer ${PAT}`,


      }
       
      
      console.log('Headers:', headers);
      const result = await axios.post(
        projectPath,
        {
          refUpdates: [
            {
              name: 'refs/heads/Files',
              newObjectId: '<COMMIT_HASH>',
            },
          ],
          commits: [
            {
              comment: 'New File created',
              changes: [
                {
                  changeType: 'add',
                  item: {
                    path: '/home/rahulnainala/Desktop/github/project-reliance/script.js',
                  },
                },
              ],
            },
          ],
        },
        { headers }
      );
      // This code is making an HTTP POST request to the URL specified by projectPath with a JSON payload that includes information about updates to a Git repository. The payload includes an array of refUpdates, with a single update to the Git reference refs/heads/main to change its object ID to the specified COMMIT_HASH. The payload also includes an array of commits, with a single commit that includes a comment "New File created" and a change to add a file at the specified path. The request also includes headers as additional request headers.

      setMessage(`File pushed successfully with push ID: ${result.data.commitId}`);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Button onPress={handleClick} title="Push JSON File" />
      <Text>{message}</Text>
    </View>
  );
};

export default AzureConnection;



// import axios from 'axios';

// const getData = async () => {
//   const accessToken = await getAccessTokenFromAAD(); // implement this function to get the access token from AAD
//   const headers = {
//     'Content-Type': 'application/json',
//     'Authorization': `Bearer ${accessToken}`,
//   };

//   const response = await axios.get('https://dev.azure.com/{organization}/{project}/_apis/build/builds?api-version=6.0', { headers });

//   console.log(response.data);
// };
