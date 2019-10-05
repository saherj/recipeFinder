import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

import Dishes from './dishes';

export default class FavouriteScreen extends Component {
  render() {
      return (

        <View>
            <View>
                <Text style={styles.title}> Recipe Finder</Text>
            </View>
       
            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                    <Text style={styles.mainheading}>What would you like to cook today?</Text>
                </View>
                    
                    
                <Dishes  imageName ={require('./assets/food2.jpg')} title= "Yam Fries"  para= "Toasty fresh farm yam fries with avocado and more vegtables and two side sauces." rating={4} />
                <Dishes  imageName ={require('./assets/food3.jpg')} title= "Clamp Stir Fry"  para= "Authentic Chiness clamp stir fry with extra vegtables and tangy sauce." rating={3} />

                <View>
                    <Text style={styles.subheading}>Recently Viewed</Text>
                </View>

                <View style={styles.cardcontainer}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        <View>
                            <Image style={styles.mediumcardimage}
                                source={ require('./assets/food4.jpg')}/>
                            <Text style={styles.mediumcardtext}>PIZZA</Text>
                        </View>
                        <View>
                            <Image style={styles.mediumcardimage}
                                source={ require('./assets/food6.jpg')}/>
                            <Text style={styles.mediumcardtext}>VEG ROLL</Text>
                        </View>
                        <View>
                            <Image style={styles.mediumcardimage}
                                source={ require('./assets/food7.jpg')}/>
                            <Text style={styles.mediumcardtext}>AVOCADO SANDWICH</Text>
                        </View>
                        <View>
                            <Image style={styles.mediumcardimage}
                                source={ require('./assets/food8.jpg')}/>
                            <Text style={styles.mediumcardtext}>EGG SANDWICH</Text>
                        </View>
                    </ScrollView>
                </View>

                <View style= {{flex:1, height:150}}></View>
            </ScrollView>
        
        </View>
      );
  }
}

const styles = StyleSheet.create({
   
    title: {
        fontSize:40,
        fontWeight: '900',
        height:55,
        marginVertical:3,
        marginHorizontal:10,
        paddingHorizontal:15,
        textAlign: 'center',
        marginTop:40,
        fontFamily: 'Cochin-BoldItalic',
        textShadowColor: 'red',
    },

    titleFont: { 
        fontSize: 25,
        fontWeight:'700',
        paddingTop:100,
        paddingHorizontal:20
    },

    mainheading: {
        fontSize:30,
        fontWeight: '800',
        marginTop:5,
        paddingHorizontal:20,
        color: '#f7868b',
        fontFamily: 'Georgia-Bold',
    },

    cardcontainer: {
        flexDirection: 'column',
        paddingRight:0,
    },

    mediumcardimage: {
        margin:0,
        flex: 1,
        padding:0,
        marginTop:15,
        marginLeft:20,
        marginRight:0,
        backgroundColor: 'red',
        resizeMode: 'cover',
        width: 150,
        height:80,
    },

    mediumcardtext: {
        marginVertical:10,
        fontWeight: '600',
        fontSize:15,
        textAlign:'left',
        marginLeft:20,
    },

    subheading: {
        fontSize:25,
        fontWeight: '700',
        marginTop:3,
        marginVertical:0,
        marginHorizontal:20,
    },

    featuredcard: {
        flex: 1,
        margin:15,
        marginTop:10,
        borderRadius:10,
        alignItems: 'center',
        marginHorizontal:20,
        paddingHorizontal:15,
        paddingVertical:12,
        width:375,
        height:240,
        resizeMode: 'cover',
    },
});