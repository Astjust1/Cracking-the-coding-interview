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

class Node{
	constructor(data){
		this.next = null;
		if(!data){
			this.data = -1;
		}else{
		this.data = data;
	}
	}

	appendToTail(data){
		var newNode = Node(data);

		var n = this;

		while(n.next !== null){
			n = n.next;
		}
		n.next = newNode;
	}

}
class DoubleNode{
	constructor(data){
		this.next = null;
		this.prev = null;
		if(!data){
			this.data = -1;
		}else{
			this.data = data;
		}
	}

	appendToTail(data){
		var newNode = DoubleNode(data);
		var n = this;

		while(n.next !== null){
			n = n.next;
		}
		newNode.prev = n;
		n.next = newNode;

	}
}
class SinglyLinkedList{
	constructor(node){
		if(!node){
			this.head = Node();
		}else{
			this.head = node;
		}

	}

	deleteNode(value){
		var head = this.head;
		//if the first node shares the value remove it and return the rest of the list
		if(head.data === value){
			return head.next;
		}
		//otherwise loop through the list to find the node
		//remove it and rejoin the list
		//return the updated list
		while(head.next !== null){
			if(head.next.data === d){
				var n = head.next.next;
				head.next = n;
				return this.next;
			}
			head = head.next;
		}
		return this.head;
	}

	clearDuplicates(){
		var nodeAndCount = {};
			var n = this.head;
			var prev = this.head;
			if(n.next === null){
				return;
			}
		while(n.next !== null){
			if(!nodeAndCount[n.data]){
				nodeAndCount[n.data] = 1;
			}else{
				//remove node
				var child = n.next;

				//Rejoin the list
				prev.next = child;
				//Increment the counter
				//We dont want to delete it because it will
				nodeAndCount[n.data] = nodeAndCount[n.data] + 1;
			}
			prev = n;
			n = n.next;
		}
	}

	findKthToLast(k){
		var nodeArray =[];
		var n = this.head;
		if(n.next === null){
			return n;
		}
		while(n.next !== null){
			nodeArray.push(n);
			n = n.next;
		}

		var index = nodeArray.length - k;
		return nodeArray[index];
	}
}

class DoublyLinkedList{
	constructor(node){
		if(!node){
			this.head = DoubleNode();
		}else{
			this.head = node;
		}
	}

	deleteNode(value){
		var n = this.head;

		while(n.next !== null){
			if(n.next.data === value){
				var n2 = n.next.next;
				n2.prev = n;
				n.next = n2;
				return this.head;
			}
			n = n.next;
		}
		return this.head;

	}

	clearDuplicates(){
		var nodeAndCount = {};
			var n = this.head;
			if(n.next === null){
				return;
			}
		while(n.next !== null){
			if(!nodeAndCount[n.data]){
				nodeAndCount[n.data] = 1;
			}else{
				//remove node
				var parent = n.prev;
				var child = n.next;

				//Rejoin the list
				child.prev = parent;
				parent.next = child;
				//Increment the counter
				//We dont want to delete it because it will
				nodeAndCount[n.data] = nodeAndCount[n.data] + 1;
			}
			n = n.next;

		}
	}

	findKthToLast(k){
		var nodeArray =[];
		var n = this.head;
		if(n.next === null){
			return n;
		}
		while(n.next !== null){
			nodeArray.push(n);
			n = n.next;
		}

		var index = nodeArray.length - k;
		return nodeArray[index];
	}
}

class LinkedListScreen extends Component{
	constructor(props){
		super(props);

		this.state = {}
	}

	render(){
		return(<View style={styles.container}>
				<Text style = {styles.text}> TBD </Text>
				</View>
			);
	}
}