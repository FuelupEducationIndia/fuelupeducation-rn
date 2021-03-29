import React from 'react'
import { StyleSheet, Dimensions } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import DashboardTeacherTicket from './screens/DashboardTeacherTicket'
import { NavigationContainer } from '@react-navigation/native'
import EntypoIcons from 'react-native-vector-icons/Entypo'
import IonIcons from 'react-native-vector-icons/Ionicons'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import FeatherIcons from 'react-native-vector-icons/Feather'
import SimplelineIcons from 'react-native-vector-icons/SimpleLineIcons'
const Tab = createBottomTabNavigator()
const { width, height } = Dimensions.get('window')
const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName='Home'
        tabBarOptions={{
          activeTintColor: '#FFFFFF',
          inactiveTintColor: '#707070',
          style: {
            backgroundColor: '#380885',
            height: 0.089 * height,
            marginTop: 0.91 * height,
            position: 'absolute',
          },
          labelStyle: {
            fontFamily: 'Mulish-Regular',
            fontSize: 12,
            marginTop: 0.96 * height,
            position: 'absolute',
          },
        }}>
        <Tab.Screen
          name='Home'
          component={DashboardTeacherTicket} //relevant screen will be added here.
          options={{
            title: 'Home',
            tabBarIcon: ({ color, size }) => (
              <EntypoIcons
                name='home'
                color={color}
                size={size}
                style={styles.tabBarIcons}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Search'
          component={DashboardTeacherTicket} //relevant screen will be added here.
          options={{
            title: 'Search',
            tabBarIcon: ({ color, size }) => (
              <IonIcons
                name='search'
                color={color}
                size={size}
                style={styles.tabBarIcons}
              />
            ),
          }}
        />
        <Tab.Screen
          name='Coursese'
          component={DashboardTeacherTicket} //relevant screen will be added here.
          options={{
            title: 'My Courses',
            tabBarIcon: ({ color, size }) => (
              <FeatherIcons
                name='play-circle'
                color={color}
                size={size}
                style={styles.tabBarIcons}
              />
            ),
          }}
        />

        <Tab.Screen
          name='Profile'
          component={DashboardTeacherTicket} //relevant screen will be added here.
          options={{
            title: 'Profile',
            tabBarIcon: ({ color, size }) => (
              <SimplelineIcons
                name='user'
                color={color}
                size={size}
                style={styles.tabBarIcons}
              />
            ),
          }}
        />
        <Tab.Screen
          name='More'
          component={DashboardTeacherTicket} //relevant screen will be added here.
          options={{
            title: 'More',
            tabBarIcon: ({ color, size }) => (
              <MaterialIcons
                name='more'
                color={color}
                size={size}
                style={styles.tabBarIcons}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  )
}
const styles = StyleSheet.create({
  tabBarIcons: {
    width: 0.075 * width,
    height: 0.034 * height,
    marginLeft: 0.08 * width,
    marginTop: 0.93 * height,
    position: 'absolute',
  },
})
export default App
