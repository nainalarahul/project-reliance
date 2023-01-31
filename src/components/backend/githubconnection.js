
import Base64 from 'react-native-base64';
async function fetchData(url, username, password) {
  const encodedCredentials = await Base64.btoa(`${username}:${password}`)

  try {
    let response = await fetch(url, {
      headers: {
        'Authorization': `Basic ${encodedCredentials}`,
      },
    })

    let responseJson = await response.json()
    return responseJson
  } catch (error) {
    if (error.status === 401) {
      // Handle invalid credentials error
    } else {
      // Handle other errors
    }
  }
}
