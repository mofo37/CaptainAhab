import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

export interface Props {
  navigation: any;
  screenProps: any;
}
export interface State {}

export default function DismissableStackNavigator(routes, options) {
  const StackNav = StackNavigator(routes, options);

  return class DismissableStackNav extends Component<Props,State> {
    static router = StackNav.router;

    render() {
      const { state, goBack } = this.props.navigation;
      const props = {
        ...this.props.screenProps,
        dismiss: () => goBack(state.key),
      };
      return (
        <StackNav
          screenProps={props}
          navigation={this.props.navigation}
        />
      );
    }
  }
};