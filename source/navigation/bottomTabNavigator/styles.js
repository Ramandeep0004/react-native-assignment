import { StyleSheet } from "react-native";
import { dpFont, dpHeight, dpWidth } from "../../assets/styles/sizes";
import { colors } from "../../assets/styles/colors";
import { Font } from "../../assets/styles/fontFamily";


export const styles = StyleSheet.create({
    tabBarStyle: {
        backgroundColor: colors.white,
        height: dpHeight(8),
        borderTopWidth: 0,
        paddingTop: dpHeight(2),
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 0, 
        },
        shadowOpacity: 0.29,
        shadowRadius: 4.65,
        elevation: 7,
        marginHorizontal: dpWidth(4),
        marginVertical: dpHeight(2), 
        borderRadius: dpHeight(2),
    },
    IconMain: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    icon: {
        paddingBottom: dpHeight(0.3)
    },
    badge: {
        position: 'absolute',
        top: dpHeight(-1),
        right: dpWidth(-2.5),
        height: dpHeight(2.5),
        width: dpHeight(2.5),
        borderRadius: dpHeight(2),
        backgroundColor: colors.lightRed,
        zIndex: 99999999,
        alignItems: 'center',
        justifyContent: "center"
    },
    cartText: {
        fontSize: dpFont(10),
        fontFamily: Font.medium,
        color: colors.redDark,
    }
});
