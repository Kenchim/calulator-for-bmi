import React from 'react';
import ResultBmi from './components/ResultBmi';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      height:'',
      weight:'',
      bmi:'',
      appropriateWeight:'',

    }
  }

  handleChangeHeight = (event) => {
    this.setState({ height: event.target.value});
  }

  handleChangeWeight = (event) => {
    this.setState({ weight: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault();
    const yourBmi_0 =  this.state.weight / this.state.height / this.state.height * 10000;
    const yourBmi = yourBmi_0.toFixed(2);
    const appropriateWeight_0 = this.state.height * this.state.height * 22 / 10000;
    const yourAppropriateWeight = appropriateWeight_0.toFixed(2);
  //  const bmiClass = this.getBmi(yourBmi);

   if(this.state.weight !== '' && this.state.height !== ''){
    this.setState({  height:'' , weight:'', bmi: yourBmi, appropriateWeight: yourAppropriateWeight})
  }}

  onClear = (event) => {
    event.preventDefault();
    this.setState({ bmi :'' })
  }



  render(){
    return(
      <div className="wrap">
        <h1>Check Your BMI</h1>
          <div className="">
            <input  value={this.state.height} type="number" onChange={this.handleChangeHeight} placeholder="height"/><a>cm</a>
            <br/>
            <input  value={this.state.weight} type="number" onChange={this.handleChangeWeight} placeholder="weight" /><a>kg</a>
            <br/>
            <button bmi={this.state.bmi} onClick={this.onSubmit}>calculate</button>
            <button onClick={this.onClear}>clear</button>
          </div>
          <ResultBmi bmi={this.state.bmi} appropriateWeight={this.state.appropriateWeight} />
      </div>
    );
  }
}

export default App;
