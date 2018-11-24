import React, { Component } from 'react';
import { Platform, StatusBar, StyleSheet, View } from 'react-native';
import { StyleProvider, Root } from 'native-base';
import AppNavigator from '../navigation/AppNavigator';
import getTheme from '../native-base-theme/components';
import platform from '../native-base-theme/variables/platform';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});

class MyApp extends Component {
  render() {
    return (
      <Root>
        <StyleProvider style={getTheme(platform)}>
          <View style={styles.container}>
            {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
            <AppNavigator />
          </View>
        </StyleProvider>
      </Root>
    );
  }
}

export default MyApp;
