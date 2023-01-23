import React, { useState } from "react";
import { StyleSheet, View, Button, Text } from "react-native";
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);

  const handleButtonPress = async () => {
    // First, you'll need to get an access token from Azure DevOps
    const token = await axios.post(
      "https://app.vssps.visualstudio.com/oauth2/token",
      {
        client_id: "your-client-id",
        client_secret: "your-client-secret",
        resource: "https://your-organization.visualstudio.com",
        grant_type: "client_credentials",
      }
    ).then(res => res.data.access_token);

    // Next, you'll use the access token to upload the file to Azure DevOps
    const formData = new FormData();
    formData.append("file", {
      uri: file.uri,
      type: file.type,
      name: file.fileName
    });

    await axios.patch(
      `https://dev.azure.com/{organization}/{project}/_apis/tfvc/items?path=%2F{foldername}%2F${file.fileName}&version=&versionType=None&includeContent=true&overWrite=true`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`,
        },
      }
    ).then(response => {
      console.log(response);
    }).catch(error => {
      console.log(error);
    });
  };

  return (
    <View style={styles.container}>
      <Button
        title="Upload JSON file"
        onPress={handleButtonPress}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;


// replace your-client-id and your-client-secret with the appropriate values from your Azure DevOps application, and organization and project with the appropriate values for your organization and project. The foldername is the folder where you want to upload the file, and the file variable is the file that you want to upload.

// Additionally, you need to import the file picker to pick the file from the user's device and then pass it to the file variable.
