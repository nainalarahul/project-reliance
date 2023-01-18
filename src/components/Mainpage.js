
import React, { useState, useEffect } from 'react';
import { View, Picker } from 'react-native';
import "./css/Mainpage.css";

const Mainpage = () => {
    const [data, setData] = useState([]);
    const [selectedValue, setSelectedValue] = useState('');

 
  useEffect(() => {
    fetch('myapiurl')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  return (
    <View style={{ flexDirection: 'row'}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 
        <p id = "text_defined">Select a field {selectedValue}</p>
        <br/>
        <Picker
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} style={{ width: 300, height: 40 }}
      >
        {data.map((item, index) => (
          <Picker.Item key={index} label={item.name} value={item.id} />
        ))}
      </Picker>
        
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

        <p id = "text_defined">Select a field{selectedValue}</p>
        <br/>
      <Picker 
        selectedValue={selectedValue}
        onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)} style={{ width: 300, height: 40 }}
      >
        {data.map((item, index) => (
          <Picker.Item key={index} label={item.name} value={item.id} />
        ))}
      </Picker>
        </View>
    </View>
  );
};


export default Mainpage;
