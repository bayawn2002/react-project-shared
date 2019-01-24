import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { get } from '/home/bobby/development/repos/RnD/react/react-project-shared/shared-components/helpers/Ajax';

export default class App extends React.Component {

  render() {
    get('http://localhost:9763/api/v1/dealergroups')
    .then( (data) => {
        console.log(data);
    });

    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app! test</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
