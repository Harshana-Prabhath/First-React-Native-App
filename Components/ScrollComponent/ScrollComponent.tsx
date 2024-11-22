import React from 'react';
import { Image, ScrollView } from 'react-native';
import ScrollViewStyles from './ScrollComponentsStyle';

const UserScroll = () => {
  return (
    <ScrollView>
      <Image style={ScrollViewStyles.imageStyles} source={require('../../Resources/cake.jpg')} />
      <Image style={ScrollViewStyles.imageStyles} source={require('../../Resources/cake.jpg')} />
      <Image style={ScrollViewStyles.imageStyles} source={require('../../Resources/cake.jpg')} />
    </ScrollView>
  );
};

export default UserScroll;
