import React from 'react';
import {Cards, Charts, CountryPicker} from './components';
import Button from '@material-ui/core/Button';
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
Exam= async()=>{
  fetch('https://covid-react7547.firebaseapp.com/run')
  .then(response => {
    console.log(response);
  })
  .catch(err => {
    console.log(err);
  })
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
             <div style={{display:'flex',marginBottom:'2%', alignItems :'center', justifyContent :'center'}}>
             <div style={{flex:'1'}}>
             <img src = {image} alt ="COVID-19" style ={{max_width:"370px",width:"100%",marginTop:"0"}}/>
             </div>
             <div style={{flex:'3'}}>
             <Button onClick={()=>this.Exam()} variant="contained" color="primary" style={{float:'right'}}>
              Need Help!
             </Button>
             </div>
             </div>
             <Cards data={data}/>
             <CountryPicker handleCountryChange={this.handleCountryChange}/>
             <Charts data={data} country ={country}/>
           </div>
           
       )
    }
}
export default App;
