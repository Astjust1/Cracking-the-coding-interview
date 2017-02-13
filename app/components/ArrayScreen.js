'use strict';

import React, {Component} from 'react';

import {Text, View, StyleSheet, TouchableHighlight, TextInput} from 'react-native';

var now = require("performance-now");


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

class ArrayScreen extends Component{
	constructor(props){
		super(props);

		this.state= {
			uniqueStr: '',
			uniqueInput: 'Apples',
			permutationStr: '',
			permutationInput1: 'Cats',
			permutationInput2: 'Cat',
			whitespaceStr: '',
			whitespaceInput: 'I Like Cereal. '
		};
	}

	onUniqueTextChanged(event){
		this.setState({uniqueInput: event.nativeEvent.text});
	}
	onPermutation1Changed(event){
		this.setState({permutationInput1: event.nativeEvent.text});

	}
	onPermutation2Changed(event){
		this.setState({permutationInput2: event.nativeEvent.text});
	}
	onWhitespaceInputChanged(event){
		this.setState({whitespaceInput: event.nativeEvent.text});
	}

	runner(repitiions,func,value){
		var t0 = now();
		for(var i=0; i <repitiions; ++i){
			func(value);
		}
		var t1 = now();
	//console.log((t1-t0).toFixed(3) + "ms");
	}

	isUnique(){
		//console.log(inputStr);
		var inputStr = this.state.uniqueInput;
		var array = inputStr.split('');

		//console.log(array);
		for(var i=0;i<inputStr.length;++i){
				var j;
				if(i+1 === inputStr.length){
					//console.log(true);
					var str2 = "Yes!" + inputStr + " is unique.";
					//console.log(str2);
					this.setState({uniqueStr: str2});
					return true;
				}else{
					j = i+1;
				}
					//console.log("First index" +inputStr[i] + i);
					//console.log("Second" + inputStr[j] + j);

				if(inputStr[i] === inputStr[j]){

					//console.log(false);
					var str = "No!" + inputStr + " is not unique.";
					//console.log(str);
					this.setState({uniqueStr: str });
					return false;
				}

		}
		//console.log(true);
		var str2 = "Yes!" + inputStr + " is unique.";
		//console.log(str2);
		this.setState({uniqueStr: str2});
		return true;
	}

	permutation(){

		var str1 = this.state.permutationInput1;
		var str2 = this.state.permutationInput2;

		var noMsg = "No! " + str2 + " is not a permutation of " + str1;
		var yesMsg = "Yes! " + str2 + " is a permutation of " + str1;

		//Assuming string 1 is the source string
		if(str2.length > str1.length){
			//console.log("Not a permutation"+ str1 + " " + str2);
			this.setState({permutationStr: noMsg});
			return false;
		}

		for(var i=0;i<str2.length;++i){
			if(!str1.includes(str2[i])){
				//console.log("No permutations here"+ str1 + " " + str2);
				this.setState({permutationStr: noMsg});

				return false;
			}
		}
		//console.log("Yes!" + str1 + " " + str2);
		this.setState({permutationStr: yesMsg});
		return true;


	}

	replaceWhitespace(){
		var array = this.state.whitespaceInput.split('');
		var regex = /\s/;
		var retstr = "";

		for(var i=0;i<array.length;++i){
			if(array[i].match(regex)){
				array[i] = "%20";
			}
		}
		retstr = array.join('');
		this.setState({whitespaceStr: retstr});
		//console.log(retstr);
		return retstr;
	}

	render(){
		return(
			<View>
				<View style={styles.container}>
					<Text style={styles.text}>
						Is Unique?
					</Text>
				<View style={styles.flowRight}>
					<TextInput 
						style={styles.textInput}
						value={this.state.uniqueInput}
						onChange={this.onUniqueTextChanged.bind(this)}
						placeholder="Enter a string to see if its unique!"/>
					<TouchableHighlight
						style ={styles.button}
						underlayColor= 'red'
						onPress={this.isUnique.bind(this)}>
						<Text style={styles.text}> GO! </Text>
					</TouchableHighlight>
				</View>
					<Text style={styles.text}>
						{this.state.uniqueStr}
					</Text>
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>
						Permutation!
					</Text>
					<View style={styles.flowRight}>
						<TextInput 
							style={styles.textInput}
							value={this.state.permutationInput1}
							onChange={this.onPermutation1Changed.bind(this)}
							placeholder="Enter a permutation source"/>
						<TextInput 
							style={styles.textInput}
							value={this.state.permutationInput2}
							onChange={this.onPermutation2Changed.bind(this)}
							placeholder="Enter a second string"/>
						<TouchableHighlight
							style ={styles.button}
							underlayColor= 'red'
							onPress={this.permutation.bind(this)}>
							<Text style={styles.text}> GO! </Text>
					</TouchableHighlight>
					</View>
						<Text style={styles.text}>
							{this.state.permutationStr}
						</Text>
				</View>
				<View style={styles.container}>
					<Text style={styles.text}>
						Whitespace change!
					</Text>
					<View style={styles.flowRight}>
						<TextInput 
							style={styles.textInput}
							value={this.state.whitespaceInput}
							onChange={this.onWhitespaceInputChanged.bind(this)}
							placeholder="Enter a permutation source"/>
						<TouchableHighlight
							style ={styles.button}
							underlayColor= 'red'
							onPress={this.replaceWhitespace.bind(this)}>
							<Text style={styles.text}> GO! </Text>
					</TouchableHighlight>
					</View>
						<Text style={styles.text}>
							{this.state.whitespaceStr}
						</Text>
				</View>
			</View>
			);
	}
}


module.exports = ArrayScreen;