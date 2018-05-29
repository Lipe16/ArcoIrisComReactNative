import React from 'react';
import {View, StyleSheet} from  'react-native'; //ou import ReactNative from 'react-native' => <ReactNative.View>

class App extends React.Component{

  constructor(props){
    super(props);

    this.state = {
      cores :[
        '#FF0000',
        'rgb(255, 127, 0)',
        'yellow',
        '#00FF00',
        '#0000FF',
        'rgba(139, 0, 255, 0.9)'
      ],
    };
  }

  componentDidMount(){
    setInterval(() => {
      let  ultimaCor = this.state.cores.slice(-1); //retorna ultimo item de uma lista
      let  coresSemUltimoItem = this.state.cores.slice(0,-1); //retorna lista sem seu ultimo coresSemUltimoItem

      this.setState({ cores: ultimaCor.concat(coresSemUltimoItem) });
    }, 600);
  }

  render(){


    const ArcoIris = this.state.cores.map( color =>(
        <View  key={color} style={{ flex:1, backgroundColor: color}} />
      )
    );

    return (
      <View style={styles.container}>

        {ArcoIris}

      </View>
    );
  }
}

const styles = StyleSheet.create(
{

  container:{
    flex: 1,
  },
  /*
  containerRed:{
    flex: 4,
    backgroundColor:'red'
  },
  containerGreen:{
    flex: 1,
    backgroundColor:'green'
  }
  */

}
);
export default App;
