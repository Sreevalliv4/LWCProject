import { LightningElement,api } from 'lwc';
export default class EnrollCourse extends LightningElement {
    @api courseDetailInfo = {
                             courseName : "Lightning Web Components",
                             courseDuration : "30 Days",
                             courseFee : "20,000",
                             courseRating : "*****"
                            };
}