import React, { useState } from 'react';
import { Image, SafeAreaView, Text } from 'react-native';
import ImageStyles from './ImageComponentStylesheet';

const ImageComponent = () => {
  const [imageSource, setImageSource] = useState({ uri: 'https://www.example.com' });

  return (
    <SafeAreaView>
      <Image source={require('../../../Resources/cupcake.jpg')} style={ImageStyles.cupCakeImage} />
      <Image
        source={imageSource}
        style={ImageStyles.cupCakeImage}
        onLayout={() => console.log('Image mounted')}
        onError={() => setImageSource({ uri: 'https://reactnative.dev/img/tiny_logo.png' })}
      />
      <Text>this is just a text</Text>
    </SafeAreaView>
  );
};

export default ImageComponent;
