import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Alert, Image } from 'react-native';
import { Button } from 'react-native-elements';



export default class ProfileScreen extends Component {
  render() {
      return (
      
        <View>
            <View>
                <Text style={styles.title}> Recipe Finder</Text>
            </View>
            
            <ScrollView>
                <View style={styles.profilecontainer}>
                    <View>
                        <Image style={styles.profileImage}
                                source={ require('./assets/granny.png')}/>
                    </View>
                    <View>
                        <Text style={styles.profileheading}>Debbie Lee</Text>
                        <Text style={styles.profiletext}>Adventurous Chef - Toronto</Text>
                    </View>
                </View>
                
                
                <View>
                    <Button title="UPLOAD" style={styles.uploadbutton} onPress={() => Alert.alert('Unable to upload anything yet.')}/>
                </View>

                <View style={styles.uploadcontainer}>
                    <View>
                        <Image style={styles.profileImage}
                                source={ require('./assets/food1.jpg')}/>
                        <Text style={styles.profilecardtext}>Eggplant</Text>
                    </View>
                    
                    <View>
                        <Image style={styles.profileImage}
                                source={ require('./assets/food2.jpg')}/>
                        <Text style={styles.profilecardtext}>Yam Fries</Text>
                    </View>
                    <View>
                        <Image style={styles.profileImage}
                                source={ require('./assets/food4.jpg')}/>
                        <Text style={styles.profilecardtext}>Pizza</Text>
                    </View>
                    <View>
                        <Image style={styles.profileImage}
                                source={ require('./assets/food5.jpg')}/>
                        <Text style={styles.profilecardtext}>Gluten Free Pizza</Text>
                    </View>
                    <View>
                        <Image style={styles.profileImage}
                                source={ require('./assets/food7.jpg')}/>
                        <Text style={styles.profilecardtext}>Avocado Roll</Text>
                    </View>
                    <View>
                        <Image style={styles.profileImage}
                                source={ require('./assets/food9.jpg')}/>
                        <Text style={styles.profilecardtext}>Bean Salad</Text>
                    </View>
                </View>
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

    profilecontainer: {
        flex:1,
        flexDirection: 'row',
        backgroundColor: '#f59094',
        height:150,
        paddingHorizontal:20,
    },

    uploadbutton: {
        color: 'white',
        backgroundColor: '#f59094',
        marginLeft: 250,
        width:120,
        marginVertical:20,
    },

    uploadcontainer: {
        flex:3,
        flexDirection: 'row',
        flexWrap: 'wrap',
        width:390,
        height:310,
        justifyContent: 'space-evenly',
        marginRight:20,
        marginLeft:10,
    },

    profileImage: {
        width:110,
        height: 100,
        marginVertical: 15,
        resizeMode: 'cover',
        marginLeft:0,
    },

    profilecardtext: {
        fontWeight: '500',
        fontSize:15,
        marginLeft:20,
        color: 'black',
        marginLeft:0,
    },

    profileheading: {
        fontSize:30,
        fontWeight: '700',
        marginTop:20,
        marginBottom:20,
        marginVertical:0,
        marginHorizontal:20,
        color: 'white',
    },

    profiletext: {
        color: 'white',
        fontSize: 20,
    }


});