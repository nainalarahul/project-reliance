import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import axios from 'axios';

// const PAT = 'rzuux4bfyknoc247asdqwm7pxxrmwpth2a5nyv7fnkmr5fknoq6a';
const AzureConnection = () => {
  const [message, setMessage] = useState('');
  const handleClick = async () => {
    try {
    
      const projectPath = 'https://dev.azure.com/testserverrel/_git/reltesting?version=GBmain&path=/NewFolder';

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic OnE1Z3lvY3psZDdoendvNGhlNDJoZ3R5N3NleGZiZWV2N2t3NGl1dXNmMzZvYngzc3FjYWE=',
        // 'Authorization': `Bearer ${PAT}`,
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

      console.log("data reached");
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