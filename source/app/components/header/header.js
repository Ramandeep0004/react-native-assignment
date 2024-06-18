import React from 'react';
import { StatusBar, Text, View } from 'react-native';
import { styles } from './style';
import { colors } from '../../../assets/styles/colors';



export const HeaderComponet = (props) => {

  return (
    <>
      <StatusBar
        backgroundColor={colors.primary}
        barStyle="dark-content"
      />
      <View style={styles.container}>
        <View style={styles.centerPart}>
          <Text style={styles.title}>{props.title ? props.title : ''}</Text>
        </View>
        <View style={styles.rightSideIcon}>
          {/* {
            props.right === 'cart'
              ?
              <TouchableOpacity
                style={styles.cartIcon}
                onPress={() => props.navigation.navigate('my_cart')}
              >
                <Icons
                  type={IconsType.feather}
                  name={IconsName.shoppingCart}
                  color={colors.white}
                  size={dpHeight(3)}
                />
                <View style={styles.badge}><Text style={styles.cartText}>2</Text></View>
              </TouchableOpacity>
              :
              null
          } */}
        </View>
      </View>
    </>
  );
};


