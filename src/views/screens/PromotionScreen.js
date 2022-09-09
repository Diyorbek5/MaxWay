import { View, SafeAreaView, StyleSheet,ScrollView, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';

export default function PromotionScreen({navigation, route}) {
    const promotion = route.params;

  return (
   <SafeAreaView style={{backgroundColor: COLORS.white}}>
      <View style={style.header}>
        <Icon name="arrow-back-ios" size={15} onPress={navigation.goBack} color='black' />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            height: 150,
            paddingHorizontal:10,
            alignItems:'center'
          }}>
          <Image source={promotion.image} style={{width:310,height:100,resizeMode: 'cover'}} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
    header: {
      paddingVertical: 20,
      flexDirection: 'row',
      alignItems: 'center',
      marginHorizontal: 20,
    },
});
