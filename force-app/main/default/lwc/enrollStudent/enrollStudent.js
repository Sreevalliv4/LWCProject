import { LightningElement,api } from 'lwc';

export default class EnrollStudent extends LightningElement {
    @api StudentInfo = {
                        fName : "Sreevalli",
                        lName : "Nadella",
                        age : "36",
                        degree : "B.Tech"
    };
}