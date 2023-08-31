import { LightningElement } from 'lwc';

export default class AllCoursesForEachExample extends LightningElement {
    allCourses = [
        {courseName :'LWC', courseDuration : '30 Days'},
        {courseName :'Aura', courseDuration : '20 Days'},
        {courseName :'Apex Programming', courseDuration : '45 Days'},
        {courseName :'Triggers', courseDuration : '40 Days'}
        
    ];
}