import React, { Component } from 'react'
import { Text, View,Image} from 'react-native'
import {connect} from 'react-redux'
import {setName,addPlace} from '../store/actions/places'

import Map from './Map'
import SearchBox from './SearchBox'




console.log('SET_NAME',setName)

class Main extends Component {
    componentDidMount(){
        this.props.setName()
        this.props.addPlace('Lvov')
    }
    
    render() {
        console.log('PROPS',this.props.places)
        const name=this.props.places.map(item=>(<View key={item.key}>
            <Text >{item.name}</Text>
            <Image  source={item.image.uri} style={{height:60,width:60}}/>
            </View>))

        
        return (
            <View>
                <SearchBox />
                <Text>Hello my friend {this.props.mary}</Text>
                {name}
                <Map getUsersLocation={this.props.getUsersLocation}/>
            </View>
        )
    }
}

    

export default connect(state=>({
    mary:state.places.set,
    places:state.places.places
}),{setName,addPlace})(Main)


//Taken from index.js no additional settings in App just rendering
// import App from './App';
// import {name as appName} from './app.json';

// const store=configureStore()
// window.store=store

// const RNRedux=()=>(
//     <Provider store={store}>
//       <App/>
//     </Provider>
// )
// AppRegistry.registerComponent(appName, () => RNRedux);