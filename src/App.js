import React from 'react';

import {Cards, Charts, CountryPicker} from './components';
import styles from './App-modules.css';
import {fetchData } from "./api";
import image from "./image/image.png"


class App extends React.Component {
  state = {
    data: {},
    country: '',
  }
async componentDidMount(){
    const fetchedData = await fetchData();
    this.setState({data: fetchedData});
  
}

handleCountryChange = async (country) => {
  let fetchedData ;
  if(country ==='global'){
     fetchedData = await fetchData();
  }else{
     fetchedData = await fetchData(country);
    }
  
  console.log(country);
  this.setState( { data: fetchedData, country:country });
  
  

}
    render(){
      console.log(this.state);
      const { data,country } = this.state;
       return (
           <div className={styles.container}>
             <img className={styles.image} src = {image} alt ="COVID-19"/>
             <Cards data={data}/>
             <CountryPicker handleCountryChange={this.handleCountryChange}/>
             <Charts data={data} country ={country}/>
           </div>
       )
    }
}
export default App;