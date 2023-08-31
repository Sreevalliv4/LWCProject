import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
export default class NavigateToObjectHome extends NavigationMixin(LightningElement) {
    NavigateToAccHome(){
        this[NavigationMixin.Navigate]({
            type: 'standard__ObjectPage',
            attributes : {
                          objectApiName: 'Account',
                          actionName : 'home'
                         }
            });
        }
    }
