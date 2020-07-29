import React from 'react';
import styles from './App.module.css'
import { Navbar, NavbarBrand } from 'reactstrap';
import {Cards, Charts, CountryPicker } from './Components'
import {fetchData} from './API';//we dont have to specify index file name if your file name is index
import Cardnew from "./dd";
class App extends React.Component {
    state = {       
    data: {},
    country: '',
    }
    async componentDidMount(){
        const data = await fetchData();
        //console.log(fetchedData);
        this.setState({data});
    }

     handleCountryChange = async (country) => {        
        const data = await fetchData(country);
        this.setState({data: data, country: country});
     }

    render(){
        const {data, country } = this.state;
        return (
        
        <div  className={styles.container} >
            <h1> Covid-19 Tracker </h1>
            <Cardnew />
           
            <CountryPicker handleCountryChange={this.handleCountryChange}/>
            <Cards data={data}/>
            <Charts data={data} country={country}/>
        </div>
    )
}
}

export default App;