//code to connect to github 

import React, { useState } from 'react';
import { Button, Text, View } from 'react-native';
import axios from 'axios';

const App = () => {
  const [message, setMessage] = useState('');

  const handleClick = async () => {
    try {
      // Update the repository path in the URL below
      const repoPath = 'https://api.github.com/repos/user/repo';

      // Authorize the API request with a personal access token
      const headers = {
        Authorization: 'Token <YOUR_ACCESS_TOKEN_HERE>',
        'Content-Type': 'application/json',
      };

      // Create a new file in the repository
      await axios.post(
        `${repoPath}/contents/data.json`,
        {
          message: 'Initial commit',
          content: btoa(JSON.stringify({ key: 'value' })),
        },
        { headers }
      );

      setMessage('File pushed successfully!');
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    }
  };
return(
    <view>

    <Button onPress={handleClick} title="cl"
    ></Button>
    </view>
);
};

export default App;