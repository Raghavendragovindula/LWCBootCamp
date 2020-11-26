import { LightningElement } from 'lwc';
 
export default class quickCreate extends LightningElement {
    strRecordIdAccount;
    strRecordIdContact;
    strRecordIdOpportunity;
    
    arrayFields1 = ['Name'];
    arrayFields2 = ['Salutation','FirstName','LastName','AccountId'];
    arrayFields3 = ['Name','StageName','CloseDate','AccountId']

    handleReset(event) {
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        if (inputFields) {
            inputFields.forEach(field => {
                field.reset();
            });
        }
     }
}
