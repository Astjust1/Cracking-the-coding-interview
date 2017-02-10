'use strict';

var React = require('react');
var ReactNative = require('react-native');
var HomeScreen = require('./components/HomeScreen');
var ArrayScreen = require('./components/ArrayScreen');

var _BackAndroid = ReactNative.BackAndroid;
var _navigator;

var styles = ReactNative.StyleSheet.create({
  text: {
    color : 'black',
    backgroundColor: 'blue',
    fontSize: 30,
    margin: 80

  },
  container : {
    flex : 1
  },
  navBar: {
    backgroundColor: 'white',
  },
  navBarText: {
    fontSize: 16,
    marginVertical: 10,
  },
  navBarTitleText: {
    color: '#373E4D',
    fontWeight: '500',
    marginVertical: 9,
  },
  navBarLeftButton: {
    paddingLeft: 10,
  },
  navBarRightButton: {
    paddingRight: 10,
  },
  navBarButtonText: {
    color: '#5890FF',
  }
});

var NavigationBarRouteMapper = {

  LeftButton: function(route, navigator, index, navState) {
    if (index === 0) {
      return null;
    }

    var previousRoute = navState.routeStack[index - 1];
    return (
      <ReactNative.TouchableOpacity
        onPress={() => navigator.pop()}
        style={styles.navBarLeftButton}>
        <ReactNative.Text style={[styles.navBarText, styles.navBarButtonText]}>
          {previousRoute.title}
        </ReactNative.Text>
      </ReactNative.TouchableOpacity>
    );
  },

  RightButton: function(route, navigator, index, navState) {
    //This is a placeholder until I figure out a better way to not use this
    return (undefined);
  },

  Title: function(route, navigator, index, navState) {
    return (
      <ReactNative.Text style={[styles.navBarText, styles.navBarTitleText]}>
        {route.title}
      </ReactNative.Text>
    );
  },

};

export default class CrackTheCode extends React.Component{
  constructor(props){
    super(props);

    this.state = {};
  }


  componentDidMount(){
    if(ReactNative.Platform.OS === 'android'){
      _BackAndroid.addEventListener('hardwareBackPress', () => {
        if(_navigator.getCurrentRoutes().length === 1){
          return false;
        }
        _navigator.pop();
        return true;
      });
    }
  }



  navigatorRenderScene(route, navigator){
    _navigator = navigator;
    switch(route.id){
      case("HomeScreen"):
        return(<HomeScreen route={route} navigator={navigator}/>);
      case("ArrayScreen"):
        return(<ArrayScreen route={route} navigator={navigator}/>);
    }
  }

  render(){
    return(
      <ReactNative.Navigator 
        style={styles.container} 
        initialRoute={{id: "HomeScreen" ,title: 'Crack The Code', component: HomeScreen}}
        renderScene={this.navigatorRenderScene}
        navigationBar={
          <ReactNative.Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
            />
        }

        />
        );
  }
}

