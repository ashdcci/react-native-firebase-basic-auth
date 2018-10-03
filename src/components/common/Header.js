// import lib for making a component
import React from 'react';
import { Text, View } from 'react-native';


// make a component
const Header = (props) =>{
const { textStyle } = styles;
return (
    <View style={styles.viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
    </View>
);
};

const styles = {
    textStyle: {
        fontSize: 20
    },
    viewStyle: {
        backgroundColor: '#f8f8f8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2, // for ios
        elevation: 2, // for android
        position: 'relative'
    }
};


// make the component available to other parts of the app
export { Header };
