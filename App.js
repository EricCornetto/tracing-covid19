import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Tab from './src/ui/student/Tab';
import TabAdmin from './src/ui/admin/Tab';
import Login from './src/ui/student/login/Login';
import LoginAdmin from './src/ui/admin/login/Login';
import ProfileStudent from './src/ui/student/profile/Profile';
import ProfileAdmin from './src/ui/admin/profile/Profile';
import News_Student from './src/ui/student/news/News';
import NewsDetails_Admin from './src/ui/admin/news/NewsDetails'
import { ThemeProvider } from 'react-native-elements';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Stack = createStackNavigator();

function Startup({ navigation }) {
  return (
    <Layout style={styles.container}>

        <ImageBackground style={styles.image_background} source={{
          uri:'https://firebasestorage.googleapis.com/v0/b/tracing-covid19.appspot.com/o/bg1.jpg?alt=media&token=3728e649-3efb-4232-bd17-029d729a2da0'}}
          >
        
        <Image style={styles.logo} source={{
          uri: 'https://firebasestorage.googleapis.com/v0/b/tracing-covid19.appspot.com/o/STMIK%20Primakara%20-%20Primary%20Horizontal%20Logo.png?alt=media&token=d1d931bf-bd45-4322-9eec-04961ae18b84'
        }} />
        <View>
          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
            <Image style={styles.image_student} source={require('./src/img/student.png')} />
            <Text style={styles.role_text}>Student</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LoginAdmin')}>
            <Image style={styles.image_admin} source={require('./src/img/admin.png')} />
            <Text style={styles.role_text}>Admin</Text>
          </TouchableOpacity>
        </View> 
        </ImageBackground>

        

        
    </Layout>
  );
}

export default function App() {
  return (
    <>
    <IconRegistry icons={EvaIconsPack} />
    <ApplicationProvider {...eva} theme={eva.light} > 
      <ThemeProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Startup" component={Startup} options={{headerShown: false}} />
            <Stack.Screen name="Tab_Student" component={Tab} options={{headerShown: false}} />
            <Stack.Screen name="Tab_Admin" component={TabAdmin} options={{headerShown: false}} />
            <Stack.Screen name="Login" component={Login} options={{headerShown: false}} />
            <Stack.Screen name="LoginAdmin" component={LoginAdmin} options={{headerShown: false}} />
            <Stack.Screen name="Profile_Student" component={ProfileStudent} options={{headerShown: false}} />
            <Stack.Screen name="Profile_Admin" component={ProfileAdmin} options={{headerShown: false}} />
            <Stack.Screen name="News_Student" component={News_Student} options={{headerShown: false}} />
            <Stack.Screen name="NewsDetails_Admin" component={NewsDetails_Admin} options={{headerShown: false}} />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </ApplicationProvider>   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  image_background: {
    width: wp('100%'),
    height: hp('100%'),
    justifyContent: 'center',
    alignItems: 'center',
  }
  ,
  button: {
    borderRightWidth: 2,
    borderBottomWidth: 2,
    borderTopWidth: 0.2,
    borderLeftWidth: 0.2,
    width: wp('50%'),
    height : hp('30%'),
    borderRadius: 40,
    marginVertical: 20,
    borderColor: '#D2D2D2'
  },
  image_student: {
    width:  wp('33%'),
    height: hp('21%'),
    alignSelf: 'center',
    marginTop: 15,
  },
  image_admin: {
    width:  wp('35%'),
    height: hp('21%'),
    alignSelf: 'center',
    marginTop: 15,
  },
  role_text: {
    alignSelf: 'center',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#013765'
  },
  header_text: {
    fontWeight: 'bold',
    fontSize: 30,
    marginBottom: 50
  },
  logo: {
    width:  wp('70%'),
    height: hp('10%'),
    right: '20%',
    bottom: '4%'
  }
});
