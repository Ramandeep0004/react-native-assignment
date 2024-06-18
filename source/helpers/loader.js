import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { SkypeIndicator } from 'react-native-indicators';
import { colors } from '../assets/styles/colors';
import { dpFont } from '../assets/styles/sizes';


export default class Loader extends Component {
  _renderLoader = () => {
    if (this.props.loader)
      return (
        <View style={styles.background}>
          <SkypeIndicator
            size={dpFont(60)}
            color={colors.primary}
          />
        </View>
      );
    else return null;
  };

  render() {
    return this._renderLoader();
  } white
}

const styles = StyleSheet.create({
  background: {
    top: 0,
    left: 0,
    flex: 1,
    right: 0,
    bottom: 0,
    opacity: 0.2,
    zIndex: 9999,
    position: 'absolute',
    alignItems: 'center',
    backgroundColor: colors.primary,
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
