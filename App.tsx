import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import { WebView } from 'react-native-webview';

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      {loading && (
        <View style={styles.splash}>
          <Image source={require('./assets/splash_logo.png')} style={styles.logo} />
          <ActivityIndicator color="#ffffff" size="large" style={{ marginTop: 20 }} />
        </View>
      )}
      <WebView
        source={{ uri: 'https://ajamba.org' }}
        onLoadEnd={() => setLoading(false)}
        style={styles.webview}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  splash: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#20232a',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1,
  },
  logo: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  webview: {
    flex: 1,
  },
});

export default App;
