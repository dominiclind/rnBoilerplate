import React, { Component } from 'react';
import { AppRegistry } from 'react-native';
import Root from './src/root';

import codePush from "react-native-code-push";
codePush.sync();

AppRegistry.registerComponent('rnBoilerplate', () => Root);
