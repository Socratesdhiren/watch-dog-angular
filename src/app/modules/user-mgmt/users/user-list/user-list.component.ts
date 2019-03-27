import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../services/user.service';
import {MessageService} from 'primeng/components/common/messageservice';
import {UsersModel} from '../../../../models/users-model';
import {Router} from '@angular/router';
import { ShowLoadingService } from '../../../../services/showLoading.service';
import { BaseComponent } from './../../../../helpers/component-helper';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent extends BaseComponent implements OnInit {

  users : UsersModel[] = [];
  userList: UsersModel[] = [];
  deleteDisplay: boolean = false;
  deleteUserName: string;
  constructor(private userService: UserService, private showLoadingSerive: ShowLoadingService,
              private messageService: MessageService,
              protected _router: Router) { super( _router) }

  ngOnInit() {
 
    
  }

  
  

}
