import * as React from "react";
import { Platform } from "react-native";
import { Container, Content, Body, Title, Button, Text, View, Icon } from "native-base";
// import styles from "./styles";
export interface Props {
    registerForm: any;
    onRegister: Function;
    navigation: any;
    screenProps: any;
}
export interface State { }
class Register extends React.Component<Props, State> {
    render() {
        return (
            <Container style={{ paddingTop: 60 }}>
                <Content>
                    {/* <Icon style={{marginLeft: 15}} name='ios-close-circle-outline' onPress={() => this.props.screenProps.dismiss()} /> */}
                    <Body style={{ alignItems: "center", marginTop: 50  }}>
                        <Icon name="flash" style={{ fontSize: 104 }} />
                        <Title>ReactNativeSeed.com</Title>
                        <View padder>
                            <Text style={{ color: Platform.OS === "ios" ? "#000" : "#FFF" }} />
                        </View>
                    </Body>
                    {this.props.registerForm}
                    <View padder style={{marginTop: 20}}>
                        <Button block onPress={() => this.props.onRegister()}>
                            <Text>Login</Text>
                        </Button>
                    </View>
                    <View padder style={{marginTop: 10}}>
						<Text style={{textAlign: 'center', textDecorationLine: 'underline'}} onPress={() => this.props.navigation.goBack()}>Have An Account? Sign In</Text>
					</View>
                </Content>
            </Container>
        );
    }
}

export default Register;
