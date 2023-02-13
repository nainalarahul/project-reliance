import React, { useState } from 'react';
import { Button, Text } from 'react-native';
import axios from 'axios';

const DevOpsCommitAndPush = () => {
  const [status, setStatus] = useState('Not committed');

  const handleCommitAndPush = async () => {
    try {
      const fileContent = {
        data: [
          { id: 1, name: 'Item 1' },
          { id: 2, name: 'Item 2' },
          { id: 4, name: 'Item 3' },
        ],
      };

      const url = 'https://dev.azure.com/testserverrel/_git/reltesting?version=GBmain&path=/NewFolder';

      const headers = {
        'Content-Type': 'application/json',
        'Authorization': 'Basic OnE1Z3lvY3psZDdoendvNGhlNDJoZ3R5N3NleGZiZWV2N2t3NGl1dXNmMzZvYngzc3FjYWE=',
        'If-Match': '*',
      };
      const config = {
        headers,
        data: {
          content: btoa(JSON.stringify(fileContent)),
          message: 'Adding JSON file to the repository',
        },
      };

      await axios.post(url, config);

      setStatus('Committed and Pushed');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button title="Commit and Push JSON file" onPress={handleCommitAndPush} />
      <Text>{status}</Text>
    </>
  );
};

export default DevOpsCommitAndPush;


// A 302 response status code indicates a temporary redirect. This can happen if the URL in the code is incorrect or if there is a misconfiguration with the API endpoint.

// Here are some steps to help you troubleshoot the issue:

// Verify the API endpoint URL: Make sure the URL in the code is correct and that it includes the correct organization, project, and repository information.

// Verify your API access: Make sure you have the necessary permissions to access the API and that you have created a Personal Access Token (PAT) with the correct scopes.

// Check the API documentation: Make sure you are using the correct API version and that you are sending the correct request parameters and headers.

// Inspect the API response: You can inspect the API response by logging it to the console or by using a tool like Postman to make a request to the API endpoint.

// Check the DevOps repository: If the API request is successful, verify that the file was added to the correct location in the DevOps repository.

// Try these steps and let me know if you still encounter the issue. I'd be happy to help you further.