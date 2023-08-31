import { LightningElement, api } from 'lwc';

export default class LWCLifecycleHooksExample extends LightningElement {
@api message = 'Welcome';
constructor(){
    super();
    this.message = this.message + ' to LWC Lifecycle hooks';
    console.log('Executing Constructor method');
}
connectedCallback(){
    console.log('Executing Connected callback method');
}
disconnectedCallbackconnectedCallback(){
    console.log('Executing disconnected callback method');
}
renderedCallback(){
    console.log('Executing renderedCallback method');
}
errorCallback(error,stack){
    console.log('Executing Error callback method' +error);
}
}