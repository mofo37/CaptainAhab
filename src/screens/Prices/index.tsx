import * as React from "react";
import {
  Container,
  Content,
  Text,
} from "native-base";
import PriceCard from '../../shared/PriceCard';
import styles from "./styles";
export interface Props {
  navigation: any;
  list: any;
}
export interface State {}
class Prices extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={{fontSize: 40}}>Prices</Text>
          {this.props.list.map((item, i) => (
            <PriceCard
                key={i}
                coinName={item.coinName}
                coinTicker={item.coinTicker}
                dailyPrice={item.dailyPrice}
                price={item.price}
                navigation={this.props.navigation}
            />
            ))}
        </Content>
      </Container>
    );
  }
}

export default Prices;
