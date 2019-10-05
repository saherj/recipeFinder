import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import StarRating from 'react-native-star-rating';

export default class Dishes extends Component {
  render() {
      return (
        <View>
        <Image style={styles.favcard} source={this.props.imageName} />
      
        <Text style={styles.favcardtext}> {this.props.title}</Text>
        <Text style={styles.paragraph}> {this.props.para}</Text>
        <View style= {styles.starcontainer}>
            
            <StarRating 
            disabled = {true}
            maxStars = {5}
            rating = {this.props.rating}
            starSize = {15} 
            
            />
        </View>
    </View>
      );
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    favcard: {
        flex: 1,
        margin:15,
        marginTop:10,
        borderRadius:10,
        alignItems: 'center',
        marginHorizontal:20,
        paddingHorizontal:15,
       
        paddingVertical:12,
        width:375,
        height:150,
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

    favcardtext: {
        marginTop:0,
        fontWeight: '400',
        fontSize:25,
        textAlign:'left',
        marginLeft:20,
        padding:0,
    },

    starcontainer: {
        width:100,
        height:15,
        flex:1,
        marginLeft:22,
        marginVertical:10,
        marginBottom:20,
    }, 
    paragraph: {
        marginLeft:18,
        marginHorizontal:20,
        fontSize: 15,
        marginVertical:5,


    },

   
});