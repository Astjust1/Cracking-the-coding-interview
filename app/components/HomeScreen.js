'use strict';

import React , { Component} from 'react';

import {View ,Text, StyleSheet, ScrollView, TouchableHighlight} from 'react-native';

var ArrayScreen = require('./ArrayScreen');
var LinkedListScreen = require('./LinkedListScreen');
var StacksScreen = require('./StacksScreen');
var TreesScreen = require('./TreesScreen');
var BitScreen = require('./BitScreen');
var MathScreen = require('./MathScreen');
var ObjectOrientScreen = require('./ObjectOrientScreen');
var RecursionScreen = require('./RecursionScreen');
var SystemScreen = require('./SystemScreen');
var TestingScreen = require('./TestingScreen');
var DatabaseScreen = require('./DatabaseScreen');
var ThreadScreen = require('./ThreadScreen');
var ModerateScreen = require('./ModerateScreen');
var HardScreen = require('./HardScreen');

var styles = StyleSheet.create({
	container: {
		padding: 30,
		marginTop: 65,
		alignItems: 'center'
	},
	description: {
		marginBottom:20,
		fontSize:18,
		textAlign: 'center',
		color: '#656565'
	},
	item: {
      margin: 15,
      padding: 15,
      height: 40,
      borderColor: 'red',
      borderWidth: 1
   }
});

var chapterDict = [ 
{'name' : 'Arrays and Strings', 'id' : 0},
{'name' : 'Linked Lists', 'id' : 1},
{'name' : 'Stacks and Queues', 'id' : 2},
{'name' : 'Trees and Graphs', 'id' : 3},
{'name' : 'Bit Manipulation', 'id' : 4},
{'name' : 'Math and Logic', 'id' : 5},
{'name' : 'Object Oriented Design', 'id' : 6},
{'name' : 'Recursion and Dynamic Programming', 'id' : 7},
{'name' : 'System Design and Scalability', 'id' : 8},
{'name' : 'Testing', 'id' : 9},
{'name' : 'Databases', 'id' : 10},
{'name' : 'Threads and Locks', 'id' : 11},
{'name' : 'Moderate', 'id' : 12},
{'name' : 'Hard', 'id' : 13}
			];

var chapterComponents = [

{id:"ArrayScreen",title:"Arrays",component:ArrayScreen},
{id:"LinkedListScreen",title:"Linked Lists",component:LinkedListScreen},
{id:"StacksScreen",title:"Stacks and Queues",component:StacksScreen},
{id:"TreesScreen",title:"Trees and Graphs",component:TreesScreen},
{id:"BitScreen",title:"Bit Manipulation",component:BitScreen},
{id:"MathScreen",title:"Math and Logic",component:MathScreen},
{id:"ObjectOrientScreen",title:"Object Oriented Design",component:ObjectOrientScreen},
{id:"RecursionScreen",title:"Recursion and Dynamic Programming",component:RecursionScreen},
{id:"SystemScreen",title:"System Design and Scalability",component:SystemScreen},
{id:"TestingScreen",title:"Testing",component:TestingScreen},
{id:"DatabaseScreen",title:"Databases",component:DatabaseScreen},
{id:"ThreadScreen",title:"Threads and Locks",component:ThreadScreen},
{id:"ModerateScreen",title:"Moderate",component:ModerateScreen},
{id:"HardScreen",title:"Hard",component:HardScreen}


];



/**
const createItem =  (item) => (
	<TouchableHighlight key={item.id} onPress={() => rowPressed(item.id)}>
		<Text
			key={item.id}
			style={styles.item}>
			{item.name}
		</Text>
	</TouchableHighlight>

)
**/

class HomeScreen extends Component{
	constructor(props){
		super(props);

		this.state = {
		};
	}

	rowPressed(id){
		var screen = chapterComponents[id];
		console.log(screen);

		this.props.navigator.push({
			id:screen.id,
			title:screen.title,
			component:screen.component

		});

	}

	render(){

		return(

			<View style={styles.container}>
				<Text style={styles.description}>
					Let's Crack the Coding Interview
				</Text>
				<ScrollView>
					{chapterDict.map((item) => (
						<TouchableHighlight key={item.id} onPress={() => this.rowPressed(item.id)}>
							<Text
								key={item.id}
								style={styles.item}>
								{item.name}
							</Text>
						</TouchableHighlight>))}
				</ScrollView>
			</View>

			);
	}

}

module.exports = HomeScreen;