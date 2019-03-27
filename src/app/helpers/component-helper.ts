import {Message} from "../models/message";
import {RestResponse} from "./rest-helper";
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";

export class BaseComponent {
    showLoading: boolean = true;
    message: Message = new Message();
    constructor(protected _router: Router){}

    displayErrorMsg(msg: string) {
        this.message.msg = msg;
        this.message.isError = true;
        this.message.cssClass = "alert alert-error";
    }

  displayAndHandleError(restResponse: RestResponse){
    this.message.msg = restResponse.message;
    this.message.isError = true;
    console.log("msg::"+this.message.msg);
    if (restResponse.code === 109 ) {
      this.message.showComponent = false;
    }
    this.message.cssClass = "alert alert-error";
  }

  hideErrorMsg() {
    this.message.msg = '';
    this.message.isError = false;
    this.message.cssClass = "hide";
  }

    displayMsg(msg: string) {
        this.message.msg = msg;
        this.message.isError = false;
        this.message.cssClass = "alert alert-success";
    }


    handleError(restResponse: RestResponse,rounting: Router): void {
      if (restResponse.code === 400) {
        //Routing here
        rounting.navigate(['/unauthorized']);
      } else {
        this.displayMsg(restResponse.message);
      }
    }

  hasPermission(value: number){
    if(value ===401)
    {
      this._router.navigate(['/login']);
    }
    else if(value==undefined){
      this.message.msg = "Unable to connect server";
      this.message.isError = true;
    }

  }
}

export abstract class BaseForm extends BaseComponent{
  constructor(protected _router: Router){
    super(_router);
  }

    abstract isValid():boolean;

    protected abstract execute():void;

    public onSubmit():void{
        if(this.isValid())
            this.execute();

    }

    public hasAnyChange(source: any, dist: any): string {
     // console.log(" Source :: "+source);
      return source === dist ? '': 'red';
    }

  _keyPress(event: any) {
      console.log("Hello");
    var key = window.event ? event.keyCode : event.which;

    if (event.keyCode === 8 || event.keyCode === 9) {
      return true;
    }
    else if ( key > 57 ||key==32||key==45||key==39||key==44||key==46||key==47 ) {
      return false;
    }
    else return true;
  }
  _onlyCharacters(event: any){
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 9 || key === 32) {
      return true;
    }
    else if(key <= 64){
      return false;
    }

    else return true;
  }
  _onlyNumbers(event: any){
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 9) {
      return true;
    }
    if(key <= 47 || (key >58 && key <126)){
      return false;
    }

    else return true;
  }


  _dateValidate(event: any){
    var key = window.event ? event.keyCode : event.which;
    if (event.keyCode === 8 || event.keyCode === 9) {
      return true;
    }
    if(key <= 46 || (key >58 && key <126)){
      return false;
    }

    else return true;
  }


}
