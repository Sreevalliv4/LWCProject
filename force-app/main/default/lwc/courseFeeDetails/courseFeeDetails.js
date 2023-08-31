import { LightningElement, track } from 'lwc';
export default class CourseFeeDetails extends LightningElement {
    courseFee = '200';
    courseName = 'Lightning Web Component';
    numberOfStudents = '20';
     @track totalCourseFee = 20000;
    changeCourseFee(event){
        this.courseFee = event.target.value;
       // this.calculateTotal();
    }
    changeNumberOfStudents(event){
        this.numberOfStudents = event.target.value;
        //this.calculateTotal();
    }
    calculateTotal(){
         this.totalCourseFee = parseFloat(this.courseFee) * parseFloat(this.numberOfStudents);
    }
}