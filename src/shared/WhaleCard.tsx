import * as React from "react";
import { Button, Text, Card, CardItem, Body } from "native-base";
import { Image } from 'react-native';
import { Dimensions } from 'react-native'
let { width } = Dimensions.get('window')
import colors from '../theme/colors';

interface Props {
    coin: any;
    description: any;
    pic: any;
    id: any;
}

export default function WhaleCard(props: Props) {
    return (
        <Card style={{ flex: 0, width: width - 50, marginTop: 30,shadowColor: colors.navy }}>
            <CardItem>
                <Body>
                    <Image source={{ uri: props.pic }}
                        style={{ height: 200, width: width - 75, alignSelf: 'center', borderRadius: 5, flex: 1 }} />
                    <Text style={{ fontSize: 25, marginTop: 5, color: colors.navy }}>{props.coin}</Text>
                    <Text style={{ fontSize: 15, color: 'grey' }}>{props.description}</Text>
                    <Button style={{ backgroundColor: colors.coral, alignSelf: 'flex-end', marginTop: 10 }}>
                        <Text>Add</Text>
                    </Button>
                </Body>
            </CardItem>
        </Card>
    );
}