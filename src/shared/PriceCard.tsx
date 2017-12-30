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
    let redOrGreen;
    if(props.dailyPrice > 0) {
        redOrGreen = '#28E8BE'
    } else {
        redOrGreen = '#EB7263'
    }

    return (
        <TouchableOpacity onPress={() =>  props.navigation.navigate('PriceDetails')}>
            <Card style={{ flex: 0, width: width - 50, marginTop: 30 }}>
                <CardItem style={{backgroundColor: redOrGreen}}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-between', }}>
                        <View>
                            <Text style={{ color: 'white',fontSize: 25, marginTop: 5 }}>{props.coinName}</Text>
                            <Text style={{ color: 'white',fontSize: 15, }}>{props.coinTicker}</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ color: 'white',fontSize: 25, marginTop: 5 }}>{props.price}</Text>
                            <Text style={{ color: 'white', fontSize: 15, }}>{props.dailyPrice}</Text>
                        </View>
                    </Body>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}