import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import axios from 'axios';

const URL = ':https://dev.azure.com/testserverrel/_git/reltesting?version=GBmain&path=/NewFolder';
// const token = 'rzuux4bfyknoc247asdqwm7pxxrmwpth2a5nyv7fnkmr5fknoq6a';
const CheckConn = () => {
  const [fileData, setFileData] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const response = await axios.get('http://localhost:3000/data');
        setFileData(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

 
  useEffect(() => {
    (async () => {
      try {
        const response = await axios.post(URL, fileData, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer {rzuux4bfyknoc247asdqwm7pxxrmwpth2a5nyv7fnkmr5fknoq6a}',
            // 'Authorization': 'Basic dXNlcm5hbWU6cnp1dXg0YmZ5a25vYzI0N2FzZHF3bTdweHhybXdwdGgyYTVueXY3Zm5rbXI1Zmtub3E2YQ==',
        },
        });
        console.log(response.data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [fileData]);

  return (
    <View>
      <Text>Pushing local JSON file to Azure DevOps</Text>
    </View>
  );
};

export default CheckConn;
