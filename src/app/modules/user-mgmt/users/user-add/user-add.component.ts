import { Component, OnInit } from '@angular/core';
//import {UsersModel} from '../../../../models/users-model'
import {BaseForm} from '../../../../helpers/component-helper';
import {ActivatedRoute, Route, Router} from '@angular/router';
import {UserService} from '../../../../services/user.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {SelectItem} from 'primeng/api';
import { ShowLoadingService } from '../../../../services/showLoading.service';
import { UsersModel } from '../../../../models/users-model';
@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.scss']
})
export class UserAddComponent implements OnInit {
  users: UsersModel[] = [];
  userModel: UsersModel = new UsersModel();
  isUpdated: boolean = false;
  roles:  SelectItem[];
  submit ="save changes";
  usersArray :UsersModel[]=[]
    OBJ:UsersModel= new UsersModel();
  
  roleValue: any;
  constructor(protected _router: Router, private route: ActivatedRoute, private userService: UserService,
              private messageService: MessageService, private showLoadingSerive: ShowLoadingService) {
    
             
    
   
    


  }

  ngOnInit() {
    // this.roles = [
    // {label: 'Admin',  value: 'ADMIN'},
      // {label: 'Normal User', value: 'NORMAL_USER'},
     //];
     
     this.userModel.role="ADMIN";
     
    const id = this.route.snapshot.params['id'];
    if(id){
     // this.getByUserId(id);
      this.isUpdated = true;
    }
  }
 
  add() {
    console.log("Input values for the login"+JSON.stringify(this.users) ) ;
    this.users.push(this.userModel);
  
    
    this.OBJ= new UsersModel();
    
   
  }


  Submit(user:UsersModel){
    this.userModel=user;
    this.submit="saved"
  }


  
 

  delete(OBJ){
  
    console.log("the selected value to be deleted"+JSON.stringify(OBJ))
    for(var i=0;i<this.usersArray.length;i++){
      if(this.usersArray[i]==OBJ){
        this.usersArray.splice(i,1);
      }
    }
  
  }
  

}
