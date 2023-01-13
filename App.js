import { Portal, Provider } from 'react-native-paper';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { FontAwesome5 } from '@expo/vector-icons';
import MyComponent from './MyComponent';


export default function App() {
  return (
    <Provider
    // settings={{
    //   icon: props => <FontAwesome5 {...props} size={21.5} />,
    // }}
    >
      
      <ImageBackground source={require('./assets/bg.jpg')} style={styles.background} />  
      <Portal>
        <StatusBar style="auto" />
        <MyComponent />
      </Portal>
      
    </Provider> 
    
  );
}

const styles = StyleSheet.create({
  background: {
    
    width: '100%',
    height: '100%'
  },
});
