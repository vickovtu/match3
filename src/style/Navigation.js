import {Button} from "react-native";
import React from "react";

export const QrNav = {
    headerTitle: 'Scan QR code',
    headerBackTitle: 'go back to dame',
    headerRight: (
        <Button
            onPress={() => alert('Scan QR code !')}
            title="Info"
            color="#fff"
        />
    ),
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
}

export const navStart = {
    headerTitle: 'Wellcome',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};

export const navHome = {
    headerTitle: 'Match-3 Game',
    headerStyle: {
        backgroundColor: '#f4511e',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
        fontWeight: 'bold',
    },
};