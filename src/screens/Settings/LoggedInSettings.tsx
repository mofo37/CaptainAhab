import * as React from "react";
import { Container, Content, List, ListItem, Text, Icon, Left, Body, Right, Separator } from 'native-base';
import activeStyles from "./activeStyles";
import { View } from 'react-native';
import firebase from 'firebase';

export interface Props {
  navigation: any;
  loginStore: any;
}
export interface State {
  selected: 0
}
export default class LoggedInSettings extends React.Component<Props, State> {

  signOutUser = () => {
    firebase.auth().signOut()
      .then(()=> {
        this.props.loginStore.loggedInChange(false);
        this.props.navigation.navigate('Credentials');
      })
      .catch(e => console.log(e));
  }

  onValueChange(value) {
    this.setState({selected: value})
  }

	render() {
		return (
			<Container style={activeStyles.container}>
				<Content >
          <Text style={activeStyles.text}>Settings</Text>
          <Text style={activeStyles.name}>Name</Text>
          <Text style={activeStyles.email}>{firebase.auth().currentUser.email}</Text>
          <List>
            <Separator bordered>
              <Text>Account</Text>
            </Separator>
            <ListItem style={{borderBottomColor: '#c9c9c9', borderBottomWidth: .7}}>
              <Left>
                {/* <Picker
                  iosHeader='Choose Your Currency'
                  mode="dropdown"
                  selectedValue={this.state.selected}
                  onValueChange={this.onValueChange.bind(this)}
                  style={{width: 300}}
                >
                  <Item label="Bitcoin" value={0} />
                  <Item label="LiteCoin" value={1} />
                  <Item label="Ethereum" value={2} />
                  <Item label="Monero" value={3} />
                  <Item label="Bitcoin Cash" value={4} />
                </Picker> */}
              </Left>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem>
              <Left>
                <Text>Linked Accounts</Text>
              </Left>
              <Body></Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last>
              <Left>
                <Text>Phone Number</Text>
              </Left>
              <Body></Body>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <Separator >
              <Text>Support</Text>
            </Separator>
            <ListItem style={{borderBottomColor: '#c9c9c9', borderBottomWidth: .3}}>
              <Left>
                <Text>Contact</Text>
              </Left>
              <Body/>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
            <ListItem last onPress={() => this.signOutUser()}>
              <Left>
                <Text>Sign Out</Text>
              </Left>
              <Body/>
              <Right>
                <Icon name="arrow-forward" />
              </Right>
            </ListItem>
          </List>
          <View style={{ backgroundColor: '#F0EFF5', height: 280}} >
          </View>
				</Content>
			</Container>
		);
	}
}