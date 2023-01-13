import React, {useState} from 'react';
import { FAB } from 'react-native-paper';
import { StyleSheet } from 'react-native';

const MyComponent = () => {
  const [state, setState] = useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    
   
        <FAB.Group
          open={open}
          visible
          icon={open ? 'close' : 'menu'}
          backdropColor={'#00000090'}
          color={'#fff'}
          fabStyle={{backgroundColor:'#000'}}
          actions={[
            {
              icon: 'pen',
              label: 'Παράγγειλε Online',
              onPress: () => console.log('Pressed star'),
              style: styles.customStyles,
              labelStyle: {color:'#fff'},
              color: '#000',
            },
            {
              icon: 'phone',
              label: 'Άμεση Κλήση',
              onPress: () => console.log('Pressed notifications'),
              style: styles.customStyles,
              labelStyle: {color:'#fff'},
              color: '#000'
            },
            {
              icon: 'map-marker',
              label: 'Πλοηγηθείτε',
              onPress: () => console.log('Pressed email'),
              style: styles.customStyles,
              labelStyle: {color:'#fff'},
              color: '#000'
            },
            {
              icon: 'web',
              label: 'Website',
              onPress: () => console.log('Pressed notifications'),
              style: styles.customStyles,
              labelStyle: {color:'#fff'},
              color: '#000'
            },
            {
              icon: 'facebook',
              label: 'Facebook',
              onPress: () => console.log('Pressed star'),
              style: styles.customStyles,
              labelStyle: {color:'#fff'},
              color: '#000'
            },
            {
              icon: 'instagram',
              label: 'Instagram',
              onPress: () => console.log('Pressed star'),
              style: styles.customStyles,
              labelStyle: {color:'#fff'},
              color: '#000'
            },
            {
              icon: 'star',
              label: 'Βαθμολογείστε μας στο TripAdvisor',
              onPress: () => console.log('Pressed star'),
              style: styles.customStyles,
              labelStyle: {color:'#fff'},
              color: '#000',
            },
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              // do something if the speed dial is open
            }
          }}
        />
      
    
  );
};

const styles = StyleSheet.create({
    customStyles: {
    backgroundColor: '#fff',
    label: '#000',
    
  }
});

export default MyComponent;