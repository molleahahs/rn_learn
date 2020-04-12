import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import NavigationUtil from '../navigator/NavigationUtil';

export default class WelcomePage extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
		this.timer = setTimeout(() => {
			NavigationUtil.resetToHomePage(this.props);
		}, 2000)
	}
	UNSAFE_componentWillMount() {
		this.timer && clearTimeout(this.timer);
	}
	
	render() {
		return (
			<View style={styles.container}>
				<Text>
					WelcomePage
				</Text>
			</View>
		);
	}
}


const styles=StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	}
})


