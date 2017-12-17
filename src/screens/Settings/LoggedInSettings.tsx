import * as React from "react";
import { Container, Content, List, ListItem, Text, Icon, Left, Body, Right, Separator } from 'native-base';
import activeStyles from "./activeStyles";
import { View } from 'react-native';
export interface Props {
	navigation: any;
}
export interface State {}
export default class LoggedInSettings extends React.Component<Props, State> {
	render() {
		return (
			<Container style={activeStyles.container}>
				<Content >
          <Text style={activeStyles.text}>Settings</Text>
          <Text style={activeStyles.name}>Name</Text>
          <Text style={activeStyles.email}>email@email.com</Text>
          <List>
            <Separator bordered>
              <Text>Account</Text>
            </Separator>
            <ListItem style={{borderBottomColor: '#c9c9c9', borderBottomWidth: .7}}>
              <Left>
                <Text>Main Currency</Text>
              </Left>
              <Body></Body>
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
            <ListItem last>
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