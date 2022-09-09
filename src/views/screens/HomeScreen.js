import React from 'react';
import {
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  FlatList,
  ScrollView,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialIcons';
import COLORS from '../../consts/colors';
import categories from '../../consts/categories';
import promotions from '../../consts/promotion';
import foods from '../../consts/foods';
const {width} = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

const HomeScreen = ({navigation}) => {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

  const Promotions = ({promotion}) => {
    return (
        <TouchableOpacity
        style={style.promotions}
          activeOpacity={0.8}
          onPress={()=> navigation.navigate('PromotionScreen', promotion)}>
              <Image
                source={promotion.image}
                style={{height: 80, width: 110,alignItems:'center', borderRadius:10, justifyContent:'space-evenly',}}
              />
        </TouchableOpacity>
    );
  }

  const ListCategories = () => {
    return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoriesListContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity
            key={index}
            activeOpacity={0.8}
            onPress={() => setSelectedCategoryIndex(index)}>
            <View
              style={{
                backgroundColor:
                  selectedCategoryIndex == index
                    ? COLORS.secondary
                    : COLORS.white,
                ...style.categoryBtn,
              }}>
              <View style={style.categoryBtnImgCon}>
                <Image
                  source={category.image}
                  style={{height: 28, width: 28, resizeMode: 'cover'}}
                />
              </View>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 'bold',
                  color: COLORS.dark,
                  marginLeft: 5,
                  color:
                    selectedCategoryIndex == index
                      ? COLORS.white
                      : COLORS.primary,
                }}>
                {category.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  };

  const Card = ({food}) => {
    return (
      
      <TouchableHighlight
        underlayColor={COLORS.white}
        activeOpacity={0.9}
        onPress={() => navigation.navigate('DetailsScreen', food)}>

        <View style={style.card}>

          <View style={{alignItems: 'center', top: 20}}>
            <Image source={food.image} style={{height: 90, width: 140}} />
          </View>
          <View style={{alignItems:'center'}}>
            <Text style={{fontSize: 13, fontWeight: 'bold',marginTop: 30,color: COLORS.dark}}>{food.name}</Text>
          </View>

          <View
            style={{
              marginTop: 10,
              marginHorizontal: 10,
            }}>
            <TouchableOpacity style={style.addToCartBtn}>
              <Text style={{fontSize: 13,color: COLORS.dark}}>{food.price}</Text>
            </TouchableOpacity>
          </View>

        </View>
      </TouchableHighlight>
    );
  };

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{
          marginTop: 10,
          flexDirection: 'row',
          paddingHorizontal: 10,
        }}>
        <View style={style.inputContainer}>
          <Icon name="search" size={22} />
          <TextInput
            style={{flex: 1, fontSize: 13}}
            placeholder="Search"
          />
        </View>
      </View>

      <ScrollView
      contentContainerStyle={{backgroundColor: COLORS.light}}
      showsVerticalScrollIndicator={false}>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={3}
        data={promotions}
        renderItem={({item}) => <Promotions promotion={item} />}
      />
      <View>
        <ListCategories />
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={foods}
        renderItem={({item}) => <Card food={item} />}
      />
      </ScrollView>

    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  inputContainer: {
    flex: 1,
    height: 38,
    borderRadius: 10,
    flexDirection: 'row',
    backgroundColor: COLORS.light,
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom:10
  },
  promotions: {
    flexDirection: 'row',
    marginTop:20,
    paddingHorizontal:10,
    alignItems:'center',
    justifyContent:'space-between',
    elevation: 15,
  },  
  categoriesListContainer: {
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  categoryBtn: {
    height: 25,
    width: 90,
    marginRight: 10,
    borderRadius: 7,
    alignItems: 'center',
    paddingHorizontal: 5,
    flexDirection: 'row',
  },
  categoryBtnImgCon: {
    height: 20,
    width: 20,
    backgroundColor: COLORS.white,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    marginBottom: 20,
    marginTop: 5,
    borderRadius: 10,
    elevation: 10,
    justifyContent:'center',
    backgroundColor: COLORS.white,
  },
  addToCartBtn: {
    height: 40,
    borderRadius: 10,
    backgroundColor: COLORS.grey,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default HomeScreen;
