import { commonStyles } from "@theme/commonStyles";
import { NotoSansFont } from "@theme/fontWithBold";
import { Spacing } from "@theme/size";
import { colors } from "@utils/colors";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    bookItem: {
        marginRight: Spacing.width8,
        flexDirection:'row',
        backgroundColor:colors.white,
        borderRadius:24,
        marginBottom:Spacing.width16,
        padding:Spacing.width12,
        ...commonStyles.shadow,
        justifyContent:'space-between'
    },
    bookImage: {
        width: Spacing.width106,
        aspectRatio: 0.8,
        borderRadius: 12,
        marginRight:Spacing.width16
    },
    titleTxt: {
        ...NotoSansFont.Bold_NotoSans_700,
        fontSize: 16,
        color: colors.black0E,
        marginBottom:Spacing.width4
    },
    authorTxt: {
        ...commonStyles.commonText12_blackA2,
    },
    priceTxt: {
        ...NotoSansFont.Bold_NotoSans_700,
        fontSize: 16,
        color: colors.black0E,
        marginBottom:Spacing.width16
    },
    unitTxt: {
        ...NotoSansFont.Normal_NotoSans_400,
        fontSize: 16,
        color: colors.black0E,
    },
    decreaseBtn: {
        width: Spacing.width32,
        height: Spacing.width32,
        borderRadius: Spacing.width32 / 2,
        borderWidth: 1,
        borderColor: colors.blackA2,
        ...commonStyles.center,
        // marginRight:Spacing.width23
      },
      increaseBtn: {
        width: Spacing.width32,
        height: Spacing.width32,
        borderRadius: Spacing.width32 / 2,
        backgroundColor: colors.secondPrimary,
        ...commonStyles.center,
        // marginLeft:Spacing.width23
      },
      icSub: {
        width: Spacing.width13,
      },
      icPlus: {
        width: Spacing.width16,
        height: Spacing.width16,
        tintColor: colors.white,
      },
      quantityTxt: {
        ...NotoSansFont.Bold_NotoSans_500,
        fontSize: 24,
        color: colors.black0E,
      },
      cart:{
          paddingHorizontal:Spacing.width20,
        //   marginBottom:Spacing.width150
      },
      icX:{
          ...commonStyles.icon24,
          alignSelf:'flex-start'
      },
      checkoutBtn:{
          position:'absolute',
          width:'90%',
          bottom:Spacing.width100,
          alignSelf:'center'
      }
})