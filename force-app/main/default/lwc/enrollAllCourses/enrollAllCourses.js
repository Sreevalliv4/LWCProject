import { LightningElement } from 'lwc';

export default class EnrollAllCourses extends LightningElement {
    allCourses = [
        {
            courseName : "Lightning Web Components",
            courseDuration : "30 Days",
            courseFee : "20,000",
            courseRating : "*****"
           },
           {
            courseName : "Lightning Aura Components",
            courseDuration : "25 Days",
            courseFee : "9,000",
            courseRating : "*****"
           },
           {
            courseName : "Apex programming",
            courseDuration : "20 Days",
            courseFee : "8,000",
            courseRating : "*****"
           }
    ];
        
    
}