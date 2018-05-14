import React from 'react';
import { Text, View, StyleSheet, Image } from "react-native";
import CollapseView from "react-native-collapse-view";
// import GestureRecognizer, { swipeDirections } from 'react-native-swipe-gestures';

export default class App extends React.Component {

    // render() {
    //     return(
    //         <View style={styles.container}>
    //             <Text>App.j</Text>
    //         </View>
    //     );
    // }

    _renderView = (collapse) => {
        return(
          <View style={styles.view}>
            <Text>Toggle {collapse? 'on': 'off'}</Text>
          </View>
        )
      }
    
      _renderTensionView = (collapse) => {
        return(
          <View style={styles.view}>
            <Text>With tension effect</Text>
          </View>
        )
      }
    
      _renderIconView = (collapse) => {
        return(
          <View style={styles.iconView}>
            <Text>Toggle {collapse? 'on': 'off'}</Text>
            <View>
              {
                collapse?
                <Image source={require('./img/up.png')}/>:
                <Image source={require('./img/down.png')}/>
              }
            </View>
          </View>
        )
      }
    
      _renderCollapseView = (collapse) => {
        return(
          <View style={styles.collapseView}>
            <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</Text>
          </View>
        )
      }
    
      render() {
        return (
        <View style={styles.container}>
          <CollapseView 
            tension={100}
            renderView={this._renderTensionView}
            renderCollapseView={this._renderCollapseView}
          />
          <CollapseView 
            renderView={this._renderView}
            renderCollapseView={this._renderCollapseView}
          />
          <CollapseView 
            renderView={this._renderIconView}
            renderCollapseView={this._renderCollapseView}
          />
        </View>
        );
      }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         myText: 'I\'m ready to get swiped!',
    //         gestureName: 'none',
    //         backgroundColor: '#fff'
    //     };
    // }

    // onSwipeLeft(gestureState) {
    //     this.setState({ myText: 'You swiped left!' });
    // }

    // onSwipeRight(gestureState) {
    //     this.setState({ myText: 'You swiped right!' });
    // }

    // render() {
    //     const config = {
    //         velocityThreshold: 0.3,
    //         directionalOffsetThreshold: 80
    //     };

    //     return (
    //         <GestureRecognizer
    //             onSwipeLeft={(state) => this.onSwipeLeft(state)}
    //             onSwipeRight={(state) => this.onSwipeRight(state)}
    //             config={config}
    //             style={{
    //                 flex: 1,
    //                 backgroundColor: this.state.backgroundColor
    //             }}
    //         >
    //             <Text>{this.state.myText}</Text>
    //             <Text>onSwipe callback received gesture: {this.state.gestureName} வணக்கம்</Text>
    //         </GestureRecognizer>
    //     );
    // }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#009688',
    },
    view: {
      height:50,
      padding: 20,
      justifyContent:'center',
      backgroundColor:'#ffffff',
    },
    collapseView: {
      padding: 20
    },
    iconView: {
      padding: 20,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      backgroundColor:'#ffffff',
    }
  });