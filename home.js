import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, TextInput } from 'react-native';
import { SearchBar} from 'react-native-search-bar';


export default class HomeScreen extends Component {
  render() {

    
      return (
          <View>

            <View>
                <Text style={styles.title}> Recipe Finder</Text>
                <View style={styles.fakesearchbar}>
                    <TextInput placeholder= 'seach' style={styles.searchtext} ></TextInput>
                </View>
  
            
            </View>

            <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                
                    <View style={styles.cardcontainer}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View>
                                <View style={styles.minicard}>
                                    <Image style={styles.mainImage}
                                        source={ require('./assets/pizza64X64.png')}/>
                                </View>
                                <Text style={styles.minicardtext}>PIZZA</Text>
                            </View>
                            <View>
                                <View style={styles.minicard}>
                                    <Image style={styles.mainImage}
                                        source={ require('./assets/rice64X64.png')}/>
                                </View>
                                <Text style={styles.minicardtext}>RICE</Text>
                            </View><View>
                                <View style={styles.minicard}>
                                    <Image style={styles.mainImage}
                                        source={ require('./assets/fried64X64.png')}/>
                                </View>
                                <Text style={styles.minicardtext}>FRIED</Text>
                            </View><View>
                                <View style={styles.minicard}>
                                    <Image style={styles.mainImage}
                                        source={ require('./assets/burger48X48.png')}/>
                                </View>
                                <Text style={styles.minicardtext}>BURGER</Text>
                            </View>
                        </ScrollView>
                    </View>
                

                    
                </View>

                <View>
                    <Image style={styles.featuredcard} source={ require('./assets/food1.jpg')}/>
                </View>

                <View>
                    <Text style={styles.subheading}>Popular Choices</Text>
                </View>

                <View style={styles.cardcontainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/food2.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Yam Fries</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/food3.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Clamp Stir Fry</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/food4.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Pizza</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/food9.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Beet Salad Bowl</Text>
                                </View>
                            </ScrollView>
                        </View>

                <View>
                    <Text style={styles.subheading}>Best Desserts</Text>
                </View>

                <View style={styles.cardcontainer}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/dessert1.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Strawberry Pie</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/dessert4.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Croissant</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/dessert5.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Lemon Cake</Text>
                                </View>
                                <View>
                                    <Image style={styles.mediumcardimage}
                                        source={ require('./assets/dessert3.jpg')}/>
                                    <Text style={styles.mediumcardtext}>Blueberry Parfait</Text>
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

    fakesearchbar: { 
         paddingHorizontal: 30,
         borderRadius: 5,
         borderWidth: 1,
         borderColor: 'lightgray',
         color: 'white',
         marginHorizontal:20,
         height:40,
         marginBottom:5,
     },

     searchtext: {
        fontSize:18,
        padding:10,
     },
  

    cardcontainer: {
        flexDirection: 'column',
        paddingRight:0,
       
    },
    minicard: {
        flex: 1,
        marginHorizontal:20,
        marginVertical:15,
        marginLeft:20,
        marginRight:0,
        borderColor: '#ffabaf',
        backgroundColor: '#ffabaf',
        borderWidth:1,
        borderRadius:10,
        alignItems: 'center',
        paddingHorizontal:30,
        paddingVertical:6,
    },
    minicardtext: {
        flex: 1,
        marginTop:0,
        margin:15,
        marginLeft:20,
        marginVertical:10,
        fontWeight: '600',
        fontSize:15,
        backgroundColor: 'white',
        textAlign: 'center',
    },
    mainImage: {
        width:64,
        height:64,
    },

    mainheading: {
        fontSize:30,
        fontWeight: '800',
        marginTop:5,
        paddingHorizontal:20,

    },
    subheading: {
        fontSize:25,
        fontWeight: '700',
        marginTop:7,
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




});