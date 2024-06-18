import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { dpHeight } from '../../assets/styles/sizes';
import { colors } from '../../assets/styles/colors';
import { IconsName, IconsType } from '../../assets/styles/Icon';
import Home from '../../app/screens/home';
import { HeaderComponet } from '../../app/components/header/header';
import { styles } from './styles';
import MyCart from '../../app/screens/cart';
import { useSelector } from 'react-redux';
import Icons from '../../app/components/icon';


const BottomTabs = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  const cartList = useSelector(state => state.cartReducer.products);

  return (
    <BottomTabs.Navigator
      initialRouteName='home'
      screenOptions={({ route, navigation }) => {
        return {
          tabBarStyle: styles.tabBarStyle,
          tabBarActiveTintColor: colors.black,
          tabBarInactiveTintColor: colors.primary,
          tabBarHideOnKeyboard: true,
          tabBarLabel: ''
        }
      }}
    >
      <BottomTabs.Screen
        name="home"
        component={Home}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.IconMain}>
              <Icons
                style={styles.icon}
                size={dpHeight(3.5)}
                type={focused ? IconsType.entypo : IconsType.antDesign}
                name={focused ? IconsName.home : IconsName.home}
                color={focused ? colors.primary : colors.black}
              />
            </View>
          ),
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              right='cart'
              title={'Home'}
              navigation={navigation}
            />
          ),
        }}
      />
      <BottomTabs.Screen
        name="my_cart"
        component={MyCart}
        options={{
          // tabBarBadge: 3, 
          tabBarIcon: ({ focused, color, size }) => (
            <View style={styles.IconMain}>
              <Icons
                style={styles.icon}
                size={dpHeight(3.2)}
                type={IconsType.feather}
                name={IconsName.shoppingCart}
                color={focused ? colors.primary : colors.black}
              />
              {
                cartList && cartList.length > 0 ?
                  <View style={styles.badge}><Text style={styles.cartText}>{cartList && cartList.length}</Text></View>
                  :
                  null
              }
            </View>
          ),
          header: ({ navigation, route, options }) => (
            <HeaderComponet
              right=""
              title={'My Cart'}
              navigation={navigation}
            />
          ),
        }}
      />
    </BottomTabs.Navigator>
  )
};


