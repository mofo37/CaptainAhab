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
  currencies: any;
}
export interface State {}
class Prices extends React.Component<Props, State> {
  render() {
    return (
      <Container style={styles.container}>
        <Content>
          <Text style={styles.text}>Prices</Text>
          {this.props.currencies.map((item, i) => {
            return <PriceCard
                key={i}
                coinName={item.FROMSYMBOL}
                coinTicker={item.TOSYMBOL}
                dailyPrice={item.CHANGEPCT24HOUR}
                price={item.PRICE}
                navigation={this.props.navigation}
            />
          })}
        </Content>
      </Container>
    );
  }
}

export default Prices;
