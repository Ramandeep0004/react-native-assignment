import { StyleSheet } from "react-native";
import { colors } from "../../../assets/styles/colors";
import { dpFont, dpHeight, dpWidth } from "../../../assets/styles/sizes";
import { Font } from "../../../assets/styles/fontFamily";


export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        paddingBottom: dpHeight(1.7),
        justifyContent: 'center',
        alignItems: 'center',
    },
    centerPart: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    rightSideIcon: {
        position: 'absolute',
        right: dpWidth(5),
        top: dpHeight(1)
    },
    cartIcon: {
        height: dpHeight(5),
        width: dpHeight(5),
        borderRadius: dpHeight(1),
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontSize: dpFont(20),
        fontFamily: Font.bold,
        color: colors.white,
        letterSpacing: 0.5
    },
    badge: {
        position: 'absolute',
        top: dpHeight(0),
        right: dpWidth(0),
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
        color: colors.white,
    }
});