import CountDown from 'react-native-countdown-component';
import React from 'react';

export default class Timer extends React.Component{

render() {
    return (
      <CountDown
        size={25}
        until={1000}
        onFinish={() => alert('Finished')}
        digitStyle={{backgroundColor: '#fff',bottom:20}}
        digitTxtStyle={{color: '#f16600'}}
        timeLabelStyle={{color: 'silver', fontWeight: 'bold',bottom:40}}
        separatorStyle={{color: '#f16600',fontWeight:'bold',marginBottom:60}}
        timeToShow={['H', 'M', 'S']}
        timeLabels={{h:'Hour',m: 'Minutes', s:'Seconds'}}
        showSeparator
        
      />
    )
}
}
