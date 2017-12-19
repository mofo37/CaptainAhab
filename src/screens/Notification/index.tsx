import * as React from "react";
import { Container, Content, Text, } from "native-base";
import WhaleCard from '../../shared/WhaleCard';

import styles from "./styles";
export interface Props {
	navigation: any;
}
export interface State {}
class Notification extends React.Component<Props, State> {
	
	render() {
		let data = [{coin: 'Bitcoin', pic: 'https://themerkle.com/wp-content/uploads/2017/01/bitcoin-price-rises.jpg', description: 'This whale is out and about winning!',id: '1234554'},{coin: 'Litecoin', pic: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgLSUXMiQcVBv7Ogh5FVNy8_0jwwLxHNPssuEQEtNeEccSp8c-', description: 'This whale is out and about winning!',id: '1234554'},{coin: 'Ethereum', pic: 'https://media.wired.com/photos/598a36a7f15ef46f2c68ebab/master/pass/iStock-696221484.jpg', description: 'This whale is out and about winning!',id: '1234554'}];
		return (
			<Container style={styles.container}>
				<Content>
					<Text style={{fontSize: 40}}>Whales</Text>
					{data.map((whale,i) => {
						return <WhaleCard pic={whale.pic} coin={whale.coin} description={whale.description} id={whale.id} key={i}/>
					})}
				</Content>
			</Container>
		);
	}
}

export default Notification;
