import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Action, FieldChange, KeyMap, List, ObjectTree, Record } from 'ngx-material-widget';
import { Subscription } from 'rxjs';
import { UserService } from '../../../service';
import { listWithoutHeader } from './config/list-without-header';

@Component({
  selector: 'app-list-without-header',
  templateUrl: './list-without-header.component.html',
  styleUrls: ['./list-without-header.component.scss']
})
export class ListWithoutHeaderComponent implements OnInit {
  listWithoutHeader: List;
  parent: ObjectTree;
  listReset: boolean;
  keyMap: Array<KeyMap> = new Array<KeyMap>();
  record: Record;

  response: any;
  userSubscription: Subscription;

  constructor(
    private userService: UserService
  ) {
  }

  ngOnInit(): void {
    this.listWithoutHeader = listWithoutHeader;

    this.getRecords();
  }

  
  getRecords()  {
    this.userSubscription = this.userService.getUsers().subscribe(data => {
      var pageSize = data['users'].length;

      this.record = {
        rows : data['users'].splice(0, 10),
        total : pageSize,
        pageNo : 1
      };
    });
  }

  fieldChange(fieldChange: FieldChange) {
    console.log(fieldChange);
    this.response = fieldChange;
  }

  formChange(form: FormGroup) {
    console.log(form);
  }

  buttonClick(buttonAction: Action) {
    console.log(buttonAction);
    this.response = buttonAction;

    if (buttonAction.action == "goToGithub") {
      window.open("https://github.com/khaitan-nitin/ngx-material-widget-example/tree/main/src/app/example/component/list/list-without-header", "_blank");
    }
  }

  onSort(sortAction: Action) {
    console.log(sortAction);
    this.response = sortAction;
  }

  onPage(paginationAction: Action) {
    console.log(paginationAction);
    this.response = paginationAction;
  }  
  
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
