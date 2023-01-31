//azure connection but not yet run this code

import React, { useState } from 'react';
import { Button, Settings, Text, View } from 'react-native';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      // Update the project and repository paths in the URL below
      const projectPath = 'https://dev.azure.com/<ORGANIZATION>/<PROJECT>/_apis/git/repositories/<REPO_ID>/pushes';

      // Authorize the API request with a personal access token
      const headers = {
        Authorization: 'Bearer <YOUR_ACCESS_TOKEN_HERE>',
        'Content-Type': 'application/json',
      };

      // Create a new file in the repository
      const result = await axios.post(
        projectPath,
        {
          refUpdates: [
            {
              name: 'refs/heads/master',
              newObjectId: '<COMMIT_HASH>',
            },
          ],
          commits: [
            {
              comment: 'Initial commit',
              changes: [
                {
                  changeType: 'add',
                  item: {
                    path: '/data.json',
                  },
                  newContent: {
                    content: btoa(JSON.stringify({ key: 'value' })),
                    contentType: 'rawText',
                  },
                },
              ],
            },
          ],
        },
        { headers }
      );

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

export default App;


// to get the data from azure as a token we need to get it from these :
//   1. click profile go to Settings
//   2. go to personal aceess tokens and click on new tokens
//   3. select the scopes needed for the token based on your use case.
//   4. click the create button to create the token