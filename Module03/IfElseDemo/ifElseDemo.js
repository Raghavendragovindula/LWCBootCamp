import { LightningElement,track } from 'lwc';
import jerry from '@salesforce/resourceUrl/jerry';
import tom from '@salesforce/resourceUrl/tom';

export default class IfElseDemo extends LightningElement {
    tomImage = tom;
    jerryImage = jerry;
    @track isShow = true;
    showJerry(){
        this.isShow=false;
    }
    showTom(){
        this.isShow=true;
    }
}
