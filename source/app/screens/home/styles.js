import { Dimensions } from "react-native";
import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/colors";
import { dpFont, dpHeight, dpImageHeight, dpWidth } from "../../../assets/styles/sizes";
import { Font } from "../../../assets/styles/fontFamily";

const { width } = Dimensions.get('window');
const itemWidth = (width - dpWidth(12)) / 2;


export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    flat: {
        flexGrow: 1,
        paddingTop: dpHeight(3),
        marginLeft: dpWidth(2)
    },
    container: {
        height: dpHeight(23),
        width: itemWidth,
        borderRadius: dpHeight(2),
        overflow: 'hidden',
        marginBottom: dpHeight(3),
        marginHorizontal: dpHeight(1),
        backgroundColor: colors.background,
        paddingHorizontal: dpWidth(2),
        paddingTop: dpWidth(2),
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    textgd: {
        fontSize: dpFont(28),
        fontFamily: Font.regular,
        color: colors.black,
    },
    imageMain: {
        height: dpImageHeight(130),
        borderRadius: dpHeight(2),
        overflow: 'hidden'
    },
    listImage: {
        height: '100%',
        width: '100%',
    },
    emptyList: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    emptyText: {
        fontSize: dpFont(22),
        fontFamily: Font.medium,
        color: colors.black,
    },
    titleMian: {
        height: '100%',
    },
    titleText: {
        fontFamily: Font.medium,
        fontSize: dpFont(16),
        color: colors.black,
        textTransform: "capitalize",
    },
    titleRow: {
        flex: 1,
        marginHorizontal: dpWidth(1),
        flexDirection: 'row',
        alignItems: 'center',
    },
    childOne: {
        width: '80%',
        justifyContent: 'center'
    },
    childTwo: {
        width: '20%',
        alignItems: 'flex-end'
    }
});
