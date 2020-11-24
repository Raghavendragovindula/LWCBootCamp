import { LightningElement } from 'lwc';

export default class CalcDemo extends LightningElement {
    result = 0;
    input='';
    inp='';
    val='';
    buttons =[{key:1, variant:'Neutral'} , {key:2, variant:'Neutral'}, {key:3, variant:'Neutral'}, {key:'+', variant:'brand'},
    {key:4, variant:'Neutral'}, {key:5, variant:'Neutral'}, {key:6, variant:'Neutral'}, {key:'-', variant:'brand'},
    {key:7, variant:'Neutral'}, {key:8, variant:'Neutral'}, {key:9, variant:'Neutral'}, {key:'*', variant:'brand'},
    {key:'CLR', variant:'destructive-text'},{key:0, variant:'Neutral'}, {key:'=', variant:'success'}, {key:'/', variant:'brand'}
];
/*handleChange(event){
    let v = event.target.value;
    this.val = this.val+v;
}*/
calculate(event){
    let val = event.target.label;
    this.result=0;
    this.input = this.input + val;
    //alert('this is '+this.input);
    if(this.input.endsWith('=')){
        //this.input='';
        //this.result=0;
        let val = this.input.substr(0,this.input.length-1);
        try{
            this.result = eval(val);
            this.input= val;
        }catch(Exception){
            this.result = "Invalid Expression"; 
            console.log('error ' + this.result);
        }
    }
    else if(val == 'CLR'){
        this.result = 0; 
        this.input = '';
    }
  }
}
