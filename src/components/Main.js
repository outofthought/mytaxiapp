import React, { Component } from 'react'
import { Text, View,Image} from 'react-native'
import {connect} from 'react-redux'
import {setName,addPlace} from '../store/actions/places'

console.log('SET_NAME',setName)

class Main extends Component {
    componentDidMount(){
        this.props.setName()
        this.props.addPlace('Lviv')
    }
    
    render() {
        console.log('PROPS',this.props.places)
        return (
            <View>
                <Text>
                    {/* <Image source={this.props.places.image} /> */}
                   {this.props.places.map(item=>(<Text key={item.key}>{item.name}</Text>))}
                </Text>
                <Text>
                    {this.props.name}
                </Text>
            </View>
        )
    }
}

    

export default connect(state=>({
    name:state.places.set,
    places:state.places.places
}),{setName,addPlace})(Main)