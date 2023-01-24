
import React, { useState, useEffect } from 'react';
import { View, Picker } from 'react-native';
import "../css/Mainpage.css";
import Footer from './footer';

const Mainpage = () => {
    const [data, setData] = useState([]);
    // const [setSelectedValue] = useState('');

 
  useEffect(() => {
    fetch('http://localhost:3000/data') //api getting called here
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error));
  }, []);

  //To not show multiple entries of the data (plantcode)
    const groupByPlantCode = data.reduce((result, currentValue) => {
    (result[currentValue.PlantCode] = result[currentValue.PlantCode] || []).push(currentValue);
    return result;
  }, {});
  const pcode = Object.entries(groupByPlantCode);

  //To not show multiple entries of the data (plantname)
  const groupByPlantName = data.reduce((result, currentValue) => {
    (result[currentValue.PlantName] = result[currentValue.PlantName] || []).push(currentValue);
    return result;
  }, {});
  const pname = Object.entries(groupByPlantName);
 
  
  return (
    <div>
    <View style={{ flexDirection: 'row'}}>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <p id = "text_defined">Plant Code</p>
        <br/>
        <Picker
         style={{ width: 300, height: 40 }} >
         {pcode.map(([key, itemValue]) => (
          <Picker.Item label={key} value={key} key={key} />
          ))}
        </Picker>
        </View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <p id = "text_defined">Area Code</p>
        <br/>
        <Picker
          style={{ width: 300, height: 40 }} >
          {pname.map(([key, itemValue]) => (
          <Picker.Item label={key} value={key} key={key} />
          ))}
        </Picker>
        </View>
    </View>
    <br /> <br />
    <div>
      <div id='text_defined'>
        <view>
          <text>Choose one of the Microservices from Below</text>
        </view>
      </div>
      <div class='services_buttons'>
                <view>
                  <button id='button_service' onClick={{}} value="LIMS">
                    <h2>LIMS</h2>
                  </button>
                </view>
                <view>
                  <button id='button_service' value="MIIS">
                    <h2>MIIS</h2>
                  </button>
                </view>
                <view>
                  <button id='button_service' value="OMPRO">
                    <h2>OMPRO</h2>
                  </button>
                </view>
                <view>
                  <button id='button_service' value="RCOW">
                    <h2>RCOW</h2>
                  </button>
                  </view>
                  <view>
                  <button id='button_service' value="">
                    <h2>LIMS</h2>
                  </button>
                </view>
                <view>
                  <button id='button_service' value="">
                    <h2>New</h2>
                  </button>
                </view>
                                <view>
                  <button id='button_service' value="">
                    <h2>NeW</h2>
                  </button>
                </view>    
      </div>
    </div>
    <Footer />
    </div>
  );
};


export default Mainpage;

