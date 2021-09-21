import React, { Component } from 'react'
import { SafeAreaView,ScrollView,StatusBar,StyleSheet,Text,useColorScheme,View} from 'react-native'
import Header from './dashboard-component/Header'
import Attendance from './dashboard-component/Attend'
import Course from './dashboard-component/Course'
import Exam from './dashboard-component/Exam'
import Assignments from './dashboard-component/Assignment'
import Discussion from './dashboard-component/Discussion'

import Certificate from './dashboard-component/Certificate'
import Notebook from './dashboard-component/Notebook'
import Upcoming from './dashboard-component/Upcoming'
import Following from './dashboard-component/Following'
import Footer from './dashboard-component/Footer'
export default class Dashboard extends Component {
    render() {
        return (
            <View style={{flex:1}}>

                <ScrollView
                scrollEventThrottle={16}
                nestedScrollEnabled = {true}>
                    <Header/>
                    <Attendance/>
                    <Course/>
                    <Exam/>
                    <Assignments/>
                    <Discussion/>
                    <Certificate/>
                    <Notebook/>
                    <Upcoming/>
                    <Following/>
                </ScrollView>
                <Footer/>
            </View>
        )
    }
}

const styles = StyleSheet.create({})
