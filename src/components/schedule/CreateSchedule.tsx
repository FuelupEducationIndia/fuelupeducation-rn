import React, {useState} from 'react';


// import all the components we are going to use
import { SearchBar, CourseCard, Button, } from '../../components'
import { FilterModal2 } from '../Modals';
import {
  SafeAreaView,
  StyleSheet,
  View,
  Dimensions,
  ScrollView
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler'
import theme, {  Card, Text } from '../../theme'
import FilterOpen from '../../assets/svgs/FilterOpen.svg'


//import EventCalendar component
import EventCalendar from 'react-native-events-calendar';

//get the size of device
let {width} = Dimensions.get('window');

const App = () => {
  const [events, setEvents] = useState([
    {
      start: '2020-01-01 00:00:00',
      end: '2020-01-01 02:00:00',
      title: 'New Year Party',
      summary: 'xyz Location',
    },
    {
      start: '2020-01-01 01:00:00',
      end: '2020-01-01 02:00:00',
      title: 'New Year Wishes',
      summary: 'Call to every one',
    },
    {
      start: '2020-01-02 00:30:00',
      end: '2020-01-02 01:30:00',
      title: 'Parag Birthday Party',
      summary: 'Call him',
    },
    {
      start: '2020-01-03 01:30:00',
      end: '2020-01-03 02:20:00',
      title: 'My Birthday Party',
      summary: 'Lets Enjoy',
    },
    {
      start: '2020-02-04 04:10:00',
      end: '2020-02-04 04:40:00',
      title: 'Engg Expo 2020',
      summary: 'Expoo Vanue not confirm',
    },
  ]);

  const eventClicked = (event) => {
    //On Click of event showing alert from here
    alert(JSON.stringify(event));
  };
  const [showFilter, setShowFilter] = React.useState(false)

  return (
    <SafeAreaView style={styles.container}>
      <View style={{height:40,flexDirection:'row',justifyContent:'space-evenly',alignItems:'stretch',alignContent:'space-between'}}>
      <TouchableOpacity style={{top:10,left:20,height:50,width:50}}
            onPress={() => setShowFilter(true)}
            activeOpacity={0.9}> 
            <FilterOpen  />
          </TouchableOpacity>
          <ScrollView>
        <FilterModal2
          visible={showFilter}
          onRequestClose={() => setShowFilter(false)}
        /></ScrollView>
        <EventCalendar 
          eventTapped={eventClicked}
          // Function on event press
          events={events}
          // Passing the Array of event
          width={width}
          // Container width
          size={60}
        
          // number of date will render before and after initDate
          // (default is 30 will render 30 day before initDate
          // and 29 day after initDate)
          initDate={'2020-01-01'}
          // Show initial date (default is today)
          scrollToFirst
          // Scroll to first event of the day (default true)
        />
      </View>
    </SafeAreaView>
  );
};
export default App;

const styles = StyleSheet.create({
  container: {
    marginVertical:20,
    flex: 1,
    
  },
});

