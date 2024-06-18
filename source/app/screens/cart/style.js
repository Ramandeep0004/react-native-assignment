import { StyleSheet } from "react-native";
import { dpFont, dpHeight, dpWidth } from "../../../assets/styles/sizes";
import { colors } from "../../../assets/styles/colors";
import { Font } from "../../../assets/styles/fontFamily";


export const styles = StyleSheet.create({
    main: {
        flex: 1,
        backgroundColor: colors.secondary,
    },
    itemListContainer: {
        flex: 0.88,
    },
    calculationContainer: {
        flex: 0.12,
    },
    itemListContainerSub: {
        backgroundColor: colors.white,
        marginHorizontal: dpWidth(5),
        marginVertical: dpHeight(2),
        borderRadius: dpHeight(2),
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    flat: {
        flexGrow: 1,
        paddingHorizontal: dpWidth(2),
        paddingTop: dpWidth(4)
    },
    container: {
        flexGrow :1,
        flexDirection: 'row',
        minHeight: dpHeight(16),
        borderRadius: dpHeight(2),
        marginBottom: dpHeight(2),
        marginHorizontal: dpHeight(1),
        backgroundColor: colors.background,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,

        elevation: 7,
    },
    LeftrowChild: {
        flex: 0.4,
    },
    rightRowChild: {
        flex: 0.6,
        paddingHorizontal: dpWidth(3),
        paddingVertical: dpHeight(1)
    },
    listImage: {
        height: dpHeight(16),
        width: '100%',
        borderRadius: dpHeight(2),
        overflow: 'hidden'
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
    titleText: {
        fontFamily: Font.bold,
        fontSize: dpFont(18),
        color: colors.black,
        textTransform: "capitalize",
    },
    price: {
        fontFamily: Font.medium,
        fontSize: dpFont(16),
        color: colors.lightGrey,
    },
    titleMain: {
        marginBottom: dpHeight(1)
    },
    prizeMain: {
        marginBottom: dpHeight(1)
    },
    button: {
        backgroundColor: colors.lightRed2,
        paddingVertical: dpHeight(1),
        paddingHorizontal: dpWidth(2),
        borderRadius: dpHeight(3),
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: Font.medium,
        fontSize: dpFont(16),
        color: colors.red,
    },
    addremoveIconsMain: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    calcuSub: {
        height: '80%',
        backgroundColor: colors.primary,
        marginVertical: dpHeight(1),
        marginHorizontal: dpWidth(4),
        borderRadius: dpHeight(1),
        borderBottomRightRadius: dpHeight(1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    totalAmount: {
        fontFamily: Font.bold,
        fontSize: dpFont(20),
        color: colors.white,
    }
});
