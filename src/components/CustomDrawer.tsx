import React, { useState } from "react";
import { ImageBackground, Text, View,Image } from "react-native";
import { DrawerContentScrollView,DrawerItemList} from "@react-navigation/drawer";
// import Design from '../assets/svgs/design.svg'
import { height } from "../constants";
import User from '../assets/svgs/UserS.svg'
import { Use } from "react-native-svg";

import { TouchableOpacity } from "react-native-gesture-handler";
import { DrawerItem} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import Up from '../assets/svgs/Up.svg'
import Down from '../assets/svgs/Down.svg'
import Design from '../assets/svgs/design.svg'
const Drawer=(props)=>{
  const[focus,setFocus]=useState('1')


  const[DashboarddrawerItem,setDashboardDrawerItem]=useState(false);
  const[CoursesdrawerItem,setcoursesDrawerItem]=useState(false);
  const[ScheduledrawerItem,setScheduleDrawerItem]=useState(false);
  const[StudydrawerItem,setstudyDrawerItem]=useState(false);
  const[TicketdrawerItem,setTicketDrawerItem]=useState(false);



  const NestedDrawerItemM =()=>{
    if(DashboarddrawerItem == true){
      setDashboardDrawerItem(false)
    }
    else
    {
      setDashboardDrawerItem(true)

    }
  }
  const NestedDrawerScheduleItem =()=>{
    if(ScheduledrawerItem == true){
      setScheduleDrawerItem(false)
    }
    else
    {
      setScheduleDrawerItem(true)

    }
  }
  const NestedDrawerCourseItem =()=>{
    if(CoursesdrawerItem == true){
      setcoursesDrawerItem(false)
    }
    else
    {
      setcoursesDrawerItem(true)

    }
  }
  const NestedDrawerStudyItem =()=>{
    if(StudydrawerItem == true){
      setstudyDrawerItem(false)
    }
    else
    {
      setstudyDrawerItem(true)

    }
  }
  const NestedDrawerTicketItem =()=>{
    if(TicketdrawerItem == true){
      setTicketDrawerItem(false)
    }
    else
    {
      setTicketDrawerItem(true)

    }
  }



  return(
    <View style={{flexDirection:'column',}}>
      <View style={{height:190,backgroundColor:'white'}}>
    <View style={{height:190,backgroundColor:'#380885',borderBottomLeftRadius:30}}>
        <View style={{height:70,justifyContent:'center',alignContent:'center',marginLeft:-150}}>
          {/* <Design/> */}
        </View>

      <View style={{flexDirection:'row',height:60,top:50,marginHorizontal:30}}>
        <TouchableOpacity onPress={props.onPress}>
        <User/>
        </TouchableOpacity>
        <View style={{flexDirection:'column',height:40}}>
        <Text style={{fontSize:18,color:'white',marginHorizontal:9,top:10}}>Sheela</Text>
        <Text style={{fontSize:15,color:'white',marginHorizontal:9,top:10}}>@teachersheela</Text>
        </View>
        {/* <Design style={{right:330,bottom:160}}/> */}
      </View>
    </View>
    </View>
    {/* For DrawerDesign */}
    <View style={{height:600,backgroundColor:'#380885'}}>
    <View style={{borderTopRightRadius:30,height:700,backgroundColor:'white',justifyContent:'center',alignContent:'center',}}>      
      <DrawerContentScrollView {...props} 
      contentContainerStyle={{backgroundColor:'white',
      borderTopRightRadius:30,
      alignContent:'center',justifyContent:'center',
      marginHorizontal:35,marginVertical:20}}>
      
        {/* For Dashboard */}
        <DrawerItem style={{backgroundColor:'transperent',}}
        focused={focus == 1 ? true:false}
            
        label={({focused})=>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:'#380885',fontSize:17}}>Dashboard</Text>
        {DashboarddrawerItem == true && 
        <Up style={{top:5}}/>
        }
        {DashboarddrawerItem == false && 
        <Down style={{top:5}}/>
        }
        </View>
        }
        onPress={()=>{
          setFocus('1');
          NestedDrawerItemM()
        }}
        />
        {/* For Submenu */}
        {DashboarddrawerItem == true && 
       <DrawerItem 
        icon={({focused})=>(
          <Image source={require('../assets/images/dSubMenu.png')}/>
        )}     
        label={({focused})=><Text style={{color:'#380885',fontSize:14}}>Teacher</Text>}
        onPress={()=>{
          setFocus('1');
          props.navigation.navigate('Teacher')
        }}
        />
        }
          {/* For Courses*/}

          <DrawerItem style={{backgroundColor:'transperent'}}
        focused={focus == 1 ? true:false}
            
        label={({focused})=>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text style={{color:'#380885',fontSize:17}}>Courses</Text>
        {CoursesdrawerItem == true && 
        <>
        <Up style={{top:5}}/>
        </>
        }
        {CoursesdrawerItem == false && 
        <Down style={{top:5}}/>
        }
        </View>
        }
        onPress={()=>{
          setFocus('1');
          NestedDrawerCourseItem()
        }}
        />
        {/* For Submenu */}

        {CoursesdrawerItem == true &&
        <> 
        <View style={{height:330,width:200,backgroundColor:'#D1D6FF66',borderRadius:10}}>
       <DrawerItem 
       
        icon={({focused})=>(
          <Image source={require('../assets/images/dSubMenu.png')}/>
        )}     
        label={({focused})=><Text style={{color:'#380885',fontSize:14}}>BrowseCourses</Text>}
        onPress={()=>{
          setFocus('1');
          props.navigation.navigate('BrowseCourse')
        }}
        />
         
       <DrawerItem 
        icon={({focused})=>(
          <Image source={require('../assets/images/dSubMenu.png')}/>
        )}     
        label={({focused})=><Text style={{color:'#380885',fontSize:14}}>My Courses</Text>}
        onPress={()=>{
          setFocus('1');
          props.navigation.navigate('MyCourse')
        }}
        />
        
       <DrawerItem 
        icon={({focused})=>(
          <Image source={require('../assets/images/dSubMenu.png')}/>
        )}     
        label={({focused})=><Text style={{color:'#380885',fontSize:14}}>Lactures</Text>}
        onPress={()=>{
          setFocus('1');
          props.navigation.navigate('Lactures')
        }}
        />
        
       <DrawerItem 
        icon={({focused})=>(
          <Image source={require('../assets/images/dSubMenu.png')}/>
        )}     
        label={({focused})=><Text style={{color:'#380885',fontSize:14}}>Exam</Text>}
        onPress={()=>{
          setFocus('1');
          props.navigation.navigate('Exam')
        }}
        />
         
       <DrawerItem 
        icon={({focused})=>(
          <Image source={require('../assets/images/dSubMenu.png')}/>
        )}     
        label={({focused})=><Text style={{color:'#380885',fontSize:14}}>Assignment</Text>}
        onPress={()=>{
          setFocus('1');
          props.navigation.navigate('Assignment')
        }}
        />
         
       <DrawerItem 
        icon={({focused})=>(
          <Image source={require('../assets/images/dSubMenu.png')}/>
        )}     
        label={({focused})=><Text style={{color:'#380885',fontSize:14}}>Attendence</Text>}
        onPress={()=>{
          setFocus('1');
          props.navigation.navigate('Attendence')
        }}
        />
       <DrawerItem 
        icon={({focused})=>(
          <Image source={require('../assets/images/dSubMenu.png')}/>
        )}     
        label={({focused})=><Text style={{color:'#380885',fontSize:14}}>Certificate</Text>}
        onPress={()=>{
          setFocus('1');
          props.navigation.navigate('Certificate') 
        }}
        />
        </View>
         </>
        }
        {/* For Schedule */}
         <DrawerItem style={{backgroundColor:'transperent'}}
        focused={focus == 1 ? true:false}
            
        label={({focused})=>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text  style={{color:'#380885',fontSize:17}}>Schedule</Text>
        {ScheduledrawerItem == true && 
        <Up style={{top:5}}/>
        }
        {ScheduledrawerItem == false && 
        <Down style={{top:5}}/>
        }
        </View>
        }
        onPress={()=>{
          setFocus('1');
          NestedDrawerScheduleItem()
        }}
        />

       {/* For Submenu */}
        {ScheduledrawerItem == true && 
       <DrawerItem 
        icon={({focused})=>(
          <Image source={require('../assets/images/dSubMenu.png')}/>
        )}     
        label={({focused})=><Text style={{color:'#380885',fontSize:14}}>Sub menu</Text>}
        onPress={()=>{
          setFocus('1');
          props.navigation.navigate('Teacher')
        }}
        />
        }

        {/* For Study/Group */}
        <DrawerItem style={{backgroundColor:'transperent'}}
        focused={focus == 1 ? true:false}
            
        label={({focused})=>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text  style={{color:'#380885',fontSize:17}}>Study Group</Text>
        {StudydrawerItem == true && 
        <Up style={{top:5}}/>
        }
        {StudydrawerItem == false && 
        <Down style={{top:5}}/>
        }
        </View>
        }
        onPress={()=>{
          setFocus('1');
          NestedDrawerStudyItem()
        }}
        />

        {/* For Submenu */}
        {StudydrawerItem == true && 
       <DrawerItem 
        icon={({focused})=>(
          <Image source={require('../assets/images/dSubMenu.png')}/>
        )}     
        label={({focused})=><Text style={{color:'#380885',fontSize:14}}>Sub menu</Text>}
        onPress={()=>{
          setFocus('1');
          props.navigation.navigate('Teacher')
        }}
        />
        }

         {/* For Ticket */}
         <DrawerItem style={{backgroundColor:'transperent'}}
        focused={focus == 1 ? true:false}
            
        label={({focused})=>
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
        <Text  style={{color:'#380885',fontSize:17}}>Ticket</Text>
        {TicketdrawerItem == true && 
        <Up style={{top:5}}/>
        }
        {TicketdrawerItem == false && 
        <Down style={{top:5}}/>
        }
        </View>
        }
        onPress={()=>{
          setFocus('1');
          NestedDrawerTicketItem()
        }}
        />
        {/* For Submenu */}
        {TicketdrawerItem == true && 
       <DrawerItem 
        icon={({focused})=>(
          <Image source={require('../assets/images/dSubMenu.png')}/>
        )}     
        label={({focused})=><Text style={{color:'#380885',fontSize:14}}>Ticket</Text>}
        onPress={()=>{
          setFocus('1');
          props.navigation.navigate('Ticket')
        }}
        />
        }
      </DrawerContentScrollView>
      </View>
      </View>
     
      </View>
  )
}
export default Drawer