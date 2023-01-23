import React, { useState } from 'react';
import { View, Picker, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MyComponent = () => {
  const [firstPickerValue, setFirstPickerValue] = useState('option1');
  const [secondPickerValue, setSecondPickerValue] = useState(null);

  const navigation = useNavigation();

  const secondPickerOptions = {
    option1: ['option1-1', 'option1-2', 'option1-3'],
    option2: ['option2-1', 'option2-2', 'option2-3'],
    option3: ['option3-1', 'option3-2', 'option3-3'],
  };

  const navigate = () => {
    if (firstPickerValue === 'option1' && secondPickerValue === 'option1-1') {
      navigation.navigate();
    } else if (firstPickerValue === 'option2' && secondPickerValue === 'option2-2') {
      navigation.navigate();
    } else {
      navigation.navigate();
    }
  };
  return (
    <div>
    <view>
    </view>
    <View>
      <Picker
        selectedValue={firstPickerValue}
        onValueChange={(itemValue) => setFirstPickerValue(itemValue)}
      >
        <Picker.Item label="Option 1" value="option1" />
        <Picker.Item label="Option 2" value="option2" />
        <Picker.Item label="Option 3" value="option3" />
      </Picker>
      <Picker
        selectedValue={secondPickerValue}
        onValueChange={(itemValue) => setSecondPickerValue(itemValue)}
      >
        {secondPickerOptions[firstPickerValue].map((option) => (
          <Picker.Item key={option} label={option} value={option} />
        ))}
      </Picker>
      <Button onPress={navigate} title="Proceed" />
    </View>
    </div>
  );
};

export default MyComponent;
