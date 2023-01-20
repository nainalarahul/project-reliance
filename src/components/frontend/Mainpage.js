
import React, { useState, useEffect } from 'react';
import { View, Picker } from 'react-native';
import "../css/Mainpage.css";

const Mainpage = () => {
    const [data, setData] = useState([]);
    const [setSelectedValue] = useState('');

 
  useEffect(() => {
    fetch('http://localhost:3000/data')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flexDirection: 'row'}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 
        <p id = "text_defined">Select an Option</p>
        <br/>
        <Picker
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} style={{ width: 300, height: 40 }}
      >
              {data.map((item) => (
      <Picker.Item label={item.PlantCode} value={item.PlantCode} key={item.PlantCode} />
      ))}
      </Picker>
        
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <p id = "text_defined">Select an Option</p>
        <br/>
      <Picker 
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} style={{ width: 300, height: 40 }}
      >
              {data.map((item) => (
      <Picker.Item label={item.PlantName} value={item.PlantName} key={item.PlantName} />
      ))}
      </Picker>
        </View>
    </View>
  );
};


export default Mainpage;

