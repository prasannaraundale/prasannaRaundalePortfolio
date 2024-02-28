import { LightningElement } from 'lwc';

export default class BmiCalculator extends LightningElement {
    height =''
    weight =''
    bmivalue=''
    result=''
    inputHandler(event){
        const {name,value}=event.target
        if(name === "height"){
            this.height = value
        }
        if(name === "weight"){
            this.weight= value
        }

        //this.[name] = value
    }
    submitHandler(event){
        event.preventDefault()
        console.log("height",this.height)
        console.log("weight",this.weight)
        this.calculate()
    }
    calculate(){
        //BMI= weight in kg/ (height in m* height in m)
        let height =Number(this.height)/100;
        let bmi= Number(this.weight)/(height*height);
        
        this.bmivalue= Number(bmi.toFixed(2))  
        
        if(this.bmivalue<18.5){
            this.result="Underweight"
        }
        else if(this.bmivalue>=18.5 && this.bmivalue<=25){
            this.result="Healthy"
        }
        else if(this.bmivalue>=25 && this.bmivalue<=30){
            this.result="Overweight"
        }
        else{
            this.result="obese"
        }
        console.log("BIM value is :",this.bmivalue);
        console.log("result value is:" ,this.result);
    }
    reCalculateHandler(){
        this.result=''
        this.weight=''
        this.height=''
        this.bmivalue=''
    }
}