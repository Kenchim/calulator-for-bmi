import React from 'react';
import '../App.css';


class ResultBmi extends React.Component {

  render(){

    // const showBmi = '';
    // const showAppropriateWeight = '';
    // const message = '';
    this.inputWeight = this.props.appropriateWeight * this.props.bmi / 22;
    this.differenceMinus = this.inputWeight - this.props.appropriateWeight ;
    this.differencePlus = this.props.appropriateWeight - this.inputWeight ;

    if (this.props.bmi !== ''){
      this.showBmi = `BMI --- ${this.props.bmi}.`
      this.showAppropriateWeight = `Appropriate Weight --- ${this.props.appropriateWeight}kg.`
    } else {
      this.showBmi = ''
      this.showAppropriateWeight = ''
      this.message = ''
    }

    if(this.props.bmi !== '' && this.props.appropriateWeight * this.props.bmi / 22  >  this.props.appropriateWeight){
      this.message = `Please try to lose --- ${this.differenceMinus.toFixed(2)}kg`
    }else if(this.props.bmi !== '' && this.props.appropriateWeight * this.props.bmi / 22  <  this.props.appropriateWeight){
      this.message = `Please try to gain --- ${this.differencePlus.toFixed(2)}kg`
    }




  return(
      <div>
        <div className="result">
          <div className="resultChild">
            {this.showBmi}
          </div>
          <div className="resultChild">
            {this.showAppropriateWeight}
          </div>
          <div className="resultChild">
            {this.message}
          </div>
        </div>
        <table border="3" width="250" >
          <tbody align="center">
            <tr ><th>BMI</th><th>Degree</th></tr>
            <tr style={this.props.bmi > 0 && this.props.bmi < 18.4 ? { background: "#ffe4e1" } : {}}><td>---18.4</td><td>thin</td></tr>
            <tr style={this.props.bmi >= 18.5 && this.props.bmi < 24.9 ? { background: "#ffe4e1" } : {}}><td>18.5--24.9</td><td>appropiate</td></tr>
            <tr style={this.props.bmi >= 25 && this.props.bmi < 29.9 ? { background: "#ffe4e1" } : {}}><td>25--29.9</td><td>obesity a bit</td></tr>
            <tr style={this.props.bmi > 30 ? { background: "#ffe4e1" } : {}}><td>30---</td><td>obesity!</td></tr>
          </tbody>
        </table>
      </div>
    );
  }
}
export default ResultBmi;
