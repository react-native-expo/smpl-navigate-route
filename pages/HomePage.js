import React from 'react';
import { View, Text, Button} from 'react-native';

export default function HomePage({ navigation, route }) {

    React.useEffect(() => {
        if (route.params?.data) {
          // Post updated, do something with `route.params.post`
          // For example, send the post to the server

          console.log('data pass from other screen', {post: route.params?.data});
        }
    }, [route.params?.data]);

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
            <Text>Sending from Detail: {route.params?.data}</Text>
            <Button
                title="Go to Details"
                onPress={() => {
                    /* 1. Navigate to the Details route with params */
                    navigation.navigate('Details', {
                        itemId: 86,
                        otherParam: 'anything you want here',
                    });
                }}
            />

        </View>
    )
}