import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

    titles:{
        marginTop:'30%',
        width:'100%',
        alignItems: 'center',
      },
      title:{
        fontSize:40,
        fontWeight:'800',
      },
      subtitle:{
        fontSize:15,
        color:'#5c5e62',
      },
      carContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
      },
      image:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute',
      },
      buttonsContainer: {
        position: 'absolute',
        width: '100%',
        bottom: '50',
      },
      subtitleCTA: {
        textDecorationLine: 'underline',
      
      }

});

export default styles;