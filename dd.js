import React, { Component } from "react";
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle} from 'reactstrap';

const cardStyle = {
  minWidth: 250,
  display: "inline-block",
  padding: 16,
  border: "1px solid #eee",
  margin: 16,
  cursor: "pointer",
  backgroundColor: "white",
  borderRadius: 12,
  backgroundColor: "#F99DB0",
  boxShadow: "0 0 8px -4px rgba(0,0,0, 0.5)"
};

const cardStylex = {
  minWidth: 250,
  display: "inline-block",
  padding: 16,
  border: "1px solid #eee",
  margin: 16,
  cursor: "pointer",
  backgroundColor: "white",
  borderRadius: 12,
  backgroundColor: "#B1F99D",
  boxShadow: "0 0 8px -4px rgba(0,0,0, 0.5)"
};

const cardStyley = {
  minWidth: 250,
  display: "inline-block",
  padding: 16,
  border: "1px solid #eee",
  margin: 16,
  cursor: "pointer",
  backgroundColor: "white",
  borderRadius: 12,
  backgroundColor: "#9DB1F9",
  boxShadow: "0 0 8px -4px rgba(0,0,0, 0.5)"
};

const image= {
  border: "1px solid #eee",
  borderRadius: 4,
  display:"inline-block",
  padding: 16,
  minWidth: 300,
  float:"right",
  cursor: "pointer",
  height: 150
};

class Cardnew extends Component {
  // Constructor is not used and can be removed
  // it can be used to set some initial state
  constructor(props) {
    super(props);
    this.state={
      activeCases:0,
      recoveredCases:0,
      deaths:0,
      totalActiveCases: 0,
      totalRecoveredCases: 0,
      totalDeaths: 0,

    }
  }

  componentDidMount() {
    fetch("https://disease.sh/v3/covid-19/all").then((res) => {
      res.json().then((json) => {
        let { cases, recovered, deaths, todayCases, todayDeaths, todayRecovered } = json;
        // updateState
        this.setState({
          activeCases: todayCases,
          recoveredCases: todayRecovered,
          deaths: todayDeaths,
          totalActiveCases: cases,
          totalRecoveredCases: recovered,
          totalDeaths: deaths,
        });
      });
    });
  }
  render() {
    // Extarct the value from the props using destructors
    
    // return the HTML snippet, inject values from received from props
    // and apply styles to style the card
    const {activeCases,recoveredCases,deaths,totalActiveCases,totalDeaths,totalRecoveredCases} =this.state
    return (
    <div >
      <Card style={cardStyle} >
        
        <CardBody>
          <CardTitle><h2>Total Cases </h2></CardTitle>
          
          <CardText>+{activeCases.toLocaleString()}</CardText>
           <CardText>Worldwide total :{totalActiveCases.toLocaleString()}</CardText>
          
        </CardBody>
      </Card>
      <Card style ={cardStylex}>
        
        <CardBody>
          <CardTitle><h2>Recovered</h2></CardTitle>
          
          <CardText>+{recoveredCases.toLocaleString()}</CardText>
          <CardText>Worldwide total :{totalRecoveredCases.toLocaleString()}</CardText>
          
        </CardBody>
      </Card>
      <Card style={cardStyley}>
        
        <CardBody>
          <CardTitle> <h2> Deaths</h2> </CardTitle>
          <CardText>+{deaths.toLocaleString()}</CardText>
          <CardText>Worldwide total :{totalDeaths.toLocaleString()}</CardText>
    
          
         
          
        </CardBody>
      </Card>
     
                    <img src="https://images.unsplash.com/photo-1584530007341-7ccbb2778bad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" style={image}/>
                    
     
    </div>
  );
  }
}

export default Cardnew;
