import React from 'react';
import { WebView } from 'react-native';
//import openhexHtml from './openhex/build/index.html';

export default class App extends React.Component {

    render() {
        return (
            <WebView
                source={{uri: 'https://alcalyn.github.io/openhex/'}}
            />
        );
    }
}
