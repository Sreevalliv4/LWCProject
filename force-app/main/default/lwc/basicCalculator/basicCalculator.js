import { LightningElement } from 'lwc';

export default class BasicCalculator extends LightningElement {
    firstInput;
    secondInput;
    totalValue;
    showResult = false;
    firstInputChange(event){
        this.firstInput = event.target.value;
    }
    secondInputChange(event){
        this.secondInput = event.target.value;
    }
    add(event){
        this.totalValue = Number(this.firstInput) + Number(this.secondInput);
        this.showResult = true;
        
    }
    sub(event){
        this.totalValue = Number(this.firstInput) - Number(this.secondInput);
        this.showResult = true;
    }
    mul(event){
        this.totalValue = Number(this.firstInput) * Number(this.secondInput);
        this.showResult = true;
    }
    div(event){
        this.totalValue = Number(this.firstInput) / Number(this.secondInput);
        this.showResult = true;
    }
}