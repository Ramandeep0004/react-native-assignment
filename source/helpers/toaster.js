import React from 'react';
import Toast, { BaseToast, ErrorToast } from 'react-native-toast-message';
import { colors } from '../assets/styles/colors';
import { dpFont, dpHeight, dpWidth } from '../assets/styles/sizes';
import { Font } from '../assets/styles/fontFamily';

export class Toaster extends React.Component {
  constructor(props) {
    super(props);
  }

  success(message) {
    if (message && message !== '' && message !== null) {
      Toast.show({
        type: 'success',
        props: { text1:message },
      });
    }
  }


  error(message) {
    if (message && message !== '' && message !== null) {
      Toast.show({
        type: 'error',
        props: { text1: message },
      });
    }
  }

  render() {
    return <></>;
  }
};


export const toastConfig = {
  success: (props) => (
    <BaseToast
      text1={props && props.props && props.props.text1}
      text1NumberOfLines={3}
      style={{
        backgroundColor: colors.lightGreen,
        borderLeftColor: colors.green,
        marginTop :dpHeight(-5)
      }}
      contentContainerStyle={{ paddingHorizontal: dpWidth(4) }}
      text1Style={{
        fontSize: dpFont(16),
        fontFamily: Font.regular,
        color: colors.black,
      }}
    />
  ),
  error: (props) => (
    <ErrorToast
      text1={props && props.props && props.props.text1}
      text1NumberOfLines={3}
      style={{
        backgroundColor: colors.lightRed2,
        borderLeftColor: colors.red,
        marginTop :dpHeight(-5)
      }}
      contentContainerStyle={{ paddingHorizontal: dpWidth(4) }}
      text1Style={{
        fontSize: dpFont(16),
        fontFamily: Font.regular,
        color: colors.black,
      }}
    />
  ),
};
