'use strict';
import React, {Component} from 'react';

import{Text, StyleSheet, View, TextInput} from 'react-native';

var styles = StyleSheet.create({
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	},
	text: {
		fontSize:18,
		alignSelf: 'center',
		color: '#656565'
	},
	textInput: {
		height:40,
		padding: 4,
		flex:4,
		marginRight: 5,
		fontSize: 18,
		borderWidth: 1,
		borderColor: '#48BBEC',
		borderRadius: 8,
		color: '#48BBEC'
	},
	button:  {
		height: 36,
		flexDirection: 'row',
		backgroundColor: '#48BBEC',
		borderColor: '#48BBEC',
		borderWidth: 1,
		borderRadius: 8,
		marginBottom: 10,
		alignSelf: 'stretch',
		justifyContent: 'center'
	},
	flowRight: {
		flexDirection: 'row',
		alignItems: 'center',
		alignSelf: 'stretch'
	}
});


class TestingScreen extends Component{
	constructor(props){
		super(props);
	}

		return(){

		return(<View style={styles.container}>
				<Text style = {styles.text}> TBD </Text>
				</View>
				);
			};
};

module.exports = TestingScreen;