import React , {Component} from "react"
import {Header,Icon,Badge} from 'react-native-elements'
import {View,Text,StyleSheet}from 'react-native'
export default class MyHeader extends Component{
    constructor(props){
        super(props);
        this.state = {
            value:"",
        }
    }
    getUnreadNotifs(){
        db.collection("all_notifications").where("notification_status", "==","unread").onSnapshot((snapshot)=>{
            var unreadNotifications = snapshot.docs.map((doc)=>doc.data())
            this.setState({
                value:unreadNotifications.length
            })
        })
    }
    componentDidMount(){
        this.getUnreadNotifs()
    }
bellIconWithBadge = ()=>{
return(
    <View>
        <Icon name = "bell" type = "font-awesome" color = "yellow" size = {30}onPress = {()=>{
            this.props.navigation.navigate("Notification")
        }} />
        <Badge value = {this.state.value}
        containerStyle = {{position:"absolute",top:-4,right:-4}}/>
    </View>
)
}
render(){
    return(
        <Header leftComponent = {<Icon name = "bars" type = "font-awesome" color = "coral" onPress = {()=>props.navigation.toggleDrawer()}/>} centerComponent = {{text:props.title, style:{color:"white", fontSize:20,fontWeight:"bold"}}}
        backgroundColor = "black"/>
    )
}

      
    
}
