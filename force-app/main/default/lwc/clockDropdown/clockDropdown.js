import { LightningElement, api } from 'lwc';

export default class ClockDropdown extends LightningElement {
    @api label=''
    @api options=[]
    @api uniqueId=''
}