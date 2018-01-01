import * as React from "react";
import { Text, Card, CardItem, Body } from "native-base";
import { Dimensions, View, TouchableOpacity } from 'react-native'
let { width } = Dimensions.get('window')
import colors from '../theme/colors';

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
        redOrGreen = colors.aqua
    } else {
        redOrGreen = colors.coral
    }

    return (
        <TouchableOpacity onPress={() =>  props.navigation.navigate('PriceDetails')}>
            <Card style={{ flex: 0, width: width - 50, marginTop: 30, borderColor: redOrGreen, backgroundColor: redOrGreen, borderWidth: 5}}>
                <CardItem style={{ backgroundColor: redOrGreen ,borderWidth: 1,borderColor: redOrGreen,  }}>
                    <Body style={{flexDirection: 'row', justifyContent: 'space-between',}}>
                        <View>
                            <Text style={{ color: colors.white,fontSize: 25, marginTop: 5 }}>{props.coinName}</Text>
                            <Text style={{ color: colors.white,fontSize: 15, }}>{props.coinTicker}</Text>
                        </View>
                        <View style={{}}>
                            <Text style={{ color: colors.white,fontSize: 25, marginTop: 5 }}>
                                {`$${props.price}`}
                            </Text>
                            <Text style={{ color: colors.white, fontSize: 15, }}>
                                {`(%${_.round(props.dailyPrice, 2)})`}
                            </Text>
                        </View>
                    </Body>
                </CardItem>
            </Card>
        </TouchableOpacity>
    );
}