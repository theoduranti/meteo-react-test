import React from "react"
import { TextInput, StyleSheet, View } from "react-native"

export default class Home extends React.Component{

    constructor (props) {
        super (props)
        this.state = {
            city: "Montpellier"
        }

    }
    setCity (city) {
        this.setState({
            // city: city
            city
        })
    }

    render() {
        return (
            <View>
                <TextInput
                style={{height: 40, borderColor: "gray", borderWidth: 1}}
                underlineColorAndroid="transparent"
                value={this.state.city}
                onChangeText={(text) => this.setCity(text)}
                />

            </View>
        )
    }


}
