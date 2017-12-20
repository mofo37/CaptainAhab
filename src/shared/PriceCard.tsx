import * as React from "react";
import { Text, Card, CardItem, Body } from "native-base";
import { Dimensions, View, TouchableOpacity } from 'react-native'
let { width } = Dimensions.get('window')

interface Props {
    coinName: any;
    coinTicker: any;
    dailyPrice: any;
    price: any;
    navigation: any;
}

export default function PriceCard(props: Props) {
    return (
        <TouchableOpacity onPress={() =>  props.navigation.navigate('PriceDetails')}>
            <Card style={{ flex: 0, width: width - 50, marginTop: 30 }}>
                <CardItem>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                        <View>
                            <Text style={{ fontSize: 25, marginTop: 5 }}>{props.coinName}</Text>
                            <Text style={{ fontSize: 15, color: 'grey' }}>{props.coinTicker}</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ fontSize: 25, marginTop: 5 }}>{props.price}</Text>
                            <Text style={{ fontSize: 15, color: 'grey' }}>{props.dailyPrice}</Text>
                        </View>
                    </Body>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}