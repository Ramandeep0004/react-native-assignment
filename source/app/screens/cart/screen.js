import { FlatList, Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from './style';
import { Images } from '../../../assets/styles/images';
import { formatToIndianNumberingSystem } from '../../../helpers/general';
import Loader from '../../../helpers/loader';



const MyCartScreen = (props) => {
    const {
        loader,
        cartListing,
        totalAmount,
        handleRemoveFromCart
    } = props


    return (
        <View style={styles.main}>
            {
                cartListing && cartListing.length > 0 ?
                    <>
                        <View style={styles.itemListContainer}>
                            <View style={styles.itemListContainerSub}>
                                <FlatList
                                    contentContainerStyle={styles.flat}
                                    data={cartListing}
                                    keyExtractor={(item, index) => (item, index)}
                                    showsVerticalScrollIndicator={false}
                                    renderItem={({ item, index }) => {
                                        return (
                                            <View style={styles.container}>
                                                <View style={styles.LeftrowChild}>
                                                    <Image
                                                        style={styles.listImage}
                                                        resizeMode='cover'
                                                        source={item && item.image_preview ? { uri: item.image_preview } : Images.dummyCar}
                                                    />
                                                </View>
                                                <View style={styles.rightRowChild}>
                                                    <View style={styles.titleMain}>
                                                        <Text style={styles.titleText}>{item.title}</Text>
                                                    </View>
                                                    <View style={styles.prizeMain}>
                                                        <Text style={styles.price}>{`${formatToIndianNumberingSystem(item.price)}₹`}</Text>
                                                    </View>
                                                    <View style={styles.addremoveIconsMain}>
                                                        <TouchableOpacity
                                                            style={styles.button}
                                                            onPress={() => handleRemoveFromCart(item)}
                                                        >
                                                            <Text style={styles.buttonText}>Remove From Cart</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        )
                                    }}
                                />
                            </View>
                        </View>
                        <View style={styles.calculationContainer}>
                            <View style={styles.calcuSub}>
                                <Text style={styles.totalAmount}> Total : {`${formatToIndianNumberingSystem(totalAmount)}₹`}</Text>
                            </View>
                        </View>
                    </>
                    :
                    !loader ?
                        <View style={styles.emptyList}>
                            <Text style={styles.emptyText}>Your cart is empty.</Text>
                        </View>
                        :
                        null
            }
            {loader ? <Loader loader={loader} /> : null}
        </View>
    );
};

export default MyCartScreen;
