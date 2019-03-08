import { StyleSheet,} from 'react-native';

  const styles = StyleSheet.create({
    
    textview: {
     color: '#15d5ea',
     width:80,
    paddingLeft:15
   },
   left:{
         borderRightWidth: 2,
         borderColor:'gray',
         height:70,
         flex:1,
         marginTop:-2,
         marginLeft:-8
   },
   buttonbook:{
         backgroundColor:'#15d5ea' ,
         borderRadius:35,
          
            height:45,
            width:110,
            justifyContent:"center",
            borderColor:'#15d5ea',
            marginLeft:'35%'       
   },
   buttonbookdetatil:{
    backgroundColor:'white' ,
    borderRadius:35,
     borderWidth:1,
       height:45,
       width:110,
       justifyContent:"center",
       borderColor:'#15d5ea',
      
},
   footeric:{
     width:15,
     height:20
   },
   footext:{
       marginTop:3  
   },
   foobtn:{
     marginTop:3
   },
   active:{
      
       color:'#15d5ea' 
   }
   ,
   viewitem:{
     marginTop:20,
      marginLeft:10,
      marginRight:10,
      borderRadius:10,
      marginBottom:20,
     borderWidth:1,
     height:100,
     backgroundColor:"white",
     flex:1
   },
   listitem:{
     borderBottomWidth:0,
     marginTop:-2
   },
   leftview:{

      marginLeft:2,
      borderRadius:35,
     borderWidth:1,
     width:75,
     height:75,
     justifyContent:"center",
     alignItems:"center",
     backgroundColor:"#bae4f9"
   },
   imgspa:{
     height:100,
     width:100,
     borderRadius:50
   },
   textdetailsp:{
    color:"#170e8c"
   },
   viewspadetail:
   { backgroundColor: "white", 
   borderRadius: 3,
    borderWidth: 1, 
    borderColor:'gray',
    marginRight: 7,
     marginLeft: 18,height:50,justifyContent:"center"
     ,alignItems:"center" },

     viewtotal: { 
  marginLeft:15,
    marginRight: 7,
    justifyContent:"center"
     ,alignItems:"center" },

     textspadetail:{
       color:"#170e8c",
       fontSize:15,
       fontWeight:"bold"
     },
     textdetail:{
      color:"#170e8c",
      
    },
   imggif:{
    backgroundColor: '#ccc',
    flex: 1,
    resizeMode:"stretch",
    position: 'absolute',
    
    justifyContent: 'center',
  }
});

export default styles;