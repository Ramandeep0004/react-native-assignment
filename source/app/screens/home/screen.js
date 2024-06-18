import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './styles';
import { colors } from '../../../assets/styles/colors';
import { dpHeight } from '../../../assets/styles/sizes';
import { Images } from '../../../assets/styles/images';
import { IconsName, IconsType } from '../../../assets/styles/Icon';
import Icons from '../../components/icon';


const HomeScreen = (props) => {
  const {
    carsListing,
    handleAddToCart,
  } = props


  return (
    <View style={styles.main}>
      <FlatList
        contentContainerStyle={styles.flat}
        data={carsListing}
        keyExtractor={(item, index) => (item, index)}
        numColumns={2}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.emptyList}>
            <Text style={styles.emptyText}>No Data Found</Text>
          </View>
        }
        renderItem={({ item }) => {
          return (
            <View style={styles.container}>
              <View style={styles.imageMain}>
                <Image
                  style={styles.listImage}
                  resizeMode='cover'
                  source={item && item.image_preview ? { uri: item.image_preview } : Images.dummyCar}
                />
              </View>
              <View style={styles.titleRow}>
                <View style={styles.childOne}>
                  <Text
                    style={styles.titleText}
                    numberOfLines={1}>{item.title}</Text>
                </View>
                <TouchableOpacity
                  style={styles.childTwo}
                  onPress={() => handleAddToCart(item)}
                >
                  {
                    item.checked ?
                      <Icons
                        size={dpHeight(2.5)}
                        type={IconsType.materialCommunityIcons}
                        name={IconsName.cartCheck}
                        color={colors.green}
                      />
                      :
                      <Icons
                        size={dpHeight(2.5)}
                        type={IconsType.materialIcons}
                        name={IconsName.addShoppingCart}
                        color={colors.black}
                      />
                  }
                </TouchableOpacity>
              </View>
            </View>
          )
        }}
      />
    </View>
  );
};

export default HomeScreen;
