// import { View, Text, FlatList, Image } from 'react-native'
// import React, { useEffect, useState } from 'react'
// import { Block, ScreenWrapper } from '@components'
// import R from '@assets/R'
// import { colors } from '@utils/colors'
// import FastImage from 'react-native-fast-image'
// import { styles } from './styles'
// import { Spacing } from '@theme/size'
// import { ButtonPrimary, DebounceButton } from '@components/Button/Button'
// import { useImmer } from 'use-immer'
// import AsyncStorageService from '@services/AsyncStorage/AsyncStorageService'
// import { ASYNC_STORAGE_KEY, formatPrice, SCREEN_ROUTER_APP } from '@utils'
// import reactotron from 'reactotron-react-native'
// import { NavigationUtils } from '@navigation'
// import { useFunctions } from './useFunctions'
// import { ProductItem } from '../MarketGeneric'
// import { Order } from '../../../hooks/CartGeneric'
// import { useDispatch } from 'react-redux'
// import { onDecrease, onIncrease, onRemove } from './CartSlice'
// export interface ProductCart {
//   id: number
//   title: string
//   author: string
//   price: number
//   amount: number
//   image: number
// }
// const QuantityView = ({ quantity, index, onDecrease, onIncrease }: {
//   quantity: number,
//   index: number,
//   onDecrease: () => void,
//   onIncrease: () => void
// }) => {
//   return (
//     <Block justifyContent='space-between' width={Spacing.width120} direction='row' >
//       <DebounceButton onPress={() => {
//         onDecrease()
//       }} style={styles.decreaseBtn} >
//         <Image style={styles.icSub} source={R.images.ic_sub} />
//       </DebounceButton>
//       <Text style={styles.quantityTxt} children={quantity > 99 ? '99+' : quantity} />
//       <DebounceButton onPress={() => {
//         onIncrease()
//       }} style={styles.increaseBtn} >
//         <Image style={styles.icPlus} source={R.images.ic_plus} />
//       </DebounceButton>
//     </Block>
//   )
// }
// const CartItem = ({ item, index, onDecrease, onIncrease, onRemove }: {
//   item: Order,
//   index: number,
//   onDecrease: () => void,
//   onIncrease: () => void
//   onRemove: () => void
// }) => {
//   return (
//     <DebounceButton onPress={() => {
//       NavigationUtils.navigate(SCREEN_ROUTER_APP.PRODUCT_DETAIL, { productId: item.product.id }, `product_${item.product.id}`)
//     }}>
//       <Block style={[styles.bookItem]} >
//         <Block flex={1} direction='row' >
//           <FastImage source={{ uri: item.product.image }} style={[styles.bookImage]} />
//           <Block flex={1} >
//             <Block flex={1} >
//               <Text children={item.product.name} style={[styles.titleTxt, { flex: 1 }]} />
//               <Text children={item.product.author.name} style={styles.authorTxt} />
//             </Block>
//             <Text style={[styles.authorTxt, { fontSize: 16 }]} children={item.product.author} />
//             <Text style={[styles.priceTxt]}>
//               {formatPrice(item.product.price)}
//               <Text style={[styles.unitTxt]} children={' ' + 'VND'} />
//             </Text>
//             <QuantityView index={index} onDecrease={onDecrease} onIncrease={onIncrease} quantity={item.number} />
//           </Block>
//         </Block>
//         <DebounceButton onPress={onRemove}>
//           <Image source={R.images.ic_x} style={styles.icX} />
//         </DebounceButton>
//       </Block>
//     </DebounceButton>

//   )
// }
// const CartScreen = () => {
//   const { getTotalPrice, cartState, addToCart } = useFunctions()
//   const dispatch = useDispatch()
//   return (
//     <ScreenWrapper
//       isLoading={cartState.isLoading}
//       isTextHeader={true}
//       back
//       backgroundColor={colors.bgF8}
//       backgroundHeader={colors.bgF8}
//       titleHeader={R.strings().order}
//     // style={{paddingBottom:150}}
//     >
//       <FlatList
//         contentContainerStyle={{ paddingBottom: Spacing.width160 }}
//         style={styles.cart}
//         data={cartState.cart}
//         renderItem={({ item, index }) =>
//           <CartItem onRemove={() => {
//             addToCart(item.product.id, index, true)
//           }} onIncrease={() => {
//             addToCart(item.product.id, index, false)
//           }} onDecrease={() => {
//             if (item.number === 1) addToCart(item.product.id, index, true)
//             else
//               dispatch(onDecrease(index))
//           }} item={item} index={index} />}
//         keyExtractor={(item, index) => item.id.toString()}
//         showsVerticalScrollIndicator={false}
//       />
//       <ButtonPrimary
//         style={styles.checkoutBtn}
//         onPress={() => {
//           NavigationUtils.navigate(SCREEN_ROUTER_APP.BILLING)
//         }}
//         title={`${formatPrice(getTotalPrice())} VND ${R.strings().check_out}`}
//       />
//     </ScreenWrapper>
//   )
// }

// export default CartScreen