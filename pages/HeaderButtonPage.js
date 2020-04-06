import React, { useState, useLayoutEffect } from 'react';
import { Text, Button } from 'react-native';

export const HeaderButtonPage = ({ navigation }) => {
    const [count, setCount] = useState(0);

    // Header interaction with its screen component
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
            <Button onPress={() => setCount(c => c + 1)} title="Update count" />
            ),
        });
    }, [navigation, setCount]);

    return <Text>Count: {count}</Text>;
}