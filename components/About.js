import React from "react"

import { View, Text, StyleSheet, ActivityIndicator } from "react-native"


export default class About extends React.Component {
    render () { 
        return (
            <View style={styles.view}>
                <Text style={styles.title}>À propos de moi  </Text>
                <Text>
                    Lorem ipsum blabla bla blab ba blablabla ipsum blabla bla blab ba blablabla ipsum blabla bla blab ba blablabla ipsum blabla bla blab ba blablabla
                </Text>
                <ActivityIndicator color="red" size="large" animating={true}/>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    view: {
        margin: 20
    },
    title: {
        fontSize:22,
        marginBottom: 20
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
});