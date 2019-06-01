import React, { Component } from 'react'
import { Text, View,Image,StyleSheet,Dimensions,Button} from 'react-native'
//import MapView from 'react-native-maps'
import {connect} from 'react-redux'
import {getUsersLocation} from '../store/actions/places'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

const ASPECT_RATIO=Dimensions.get("window").width/Dimensions.get("window").height*0.0122


class Map extends Component {
  state = {
    focusedLocation: {
      latitude: 37.7900352,
      longitude: -122.4013726,
      latitudeDelta: 0.0122,
      longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * 0.0122

    }
  }
 
  render() {
    // const currentPosition={
    //   latitude: this.props.position.latitude,
    //   longitude: this.props.position.longitude,
    //   latitudeDelta: ASPECT_RATIO,
    //   longitudeDelta: Dimensions.get("window").width / Dimensions.get("window").height * ASPECT_RATIO

    // }
   
    return (
      <View>
        <Button title='show my location' onPress={this.props.getUsersLocation}/>
        <MapView
          style={styles.map}
          initialRegion={this.state.focusedLocation}
          provider={PROVIDER_GOOGLE}
        >
          {/* {this.props.position && <MapView.Marker
            coordinate={currentPosition}
            showsUserLocation
            pinColor="green" />
        
        } */}
        <MapView.Marker
            coordinate={this.state.focusedLocation}
            showsUserLocation
            pinColor="green" />
        </MapView>
          
      </View>
    )
  }
}
export default connect(state=>({position:state.places.position}),{getUsersLocation})(Map)


const styles = StyleSheet.create({
    map: {
      justifyContent: 'center',
      alignItems: 'center',
      width:350,
      height:350
    }
   });
