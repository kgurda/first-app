import { Component, OnInit } from '@angular/core';
import {count} from "rxjs/operator/count";

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServer = false;
  serverCreationStatus = 'No';
  serverName = '';
  serverCreated = false;
  servers = ['Test1', 'Test2'];
  events = [];
  buttonToggle = false;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'created, name: ' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onResetServerName() {
    this.serverName = '';
  }
  showParagraph(event) {
    this.events.push(this.events.length + 1);
    this.buttonToggle === false ? this.buttonToggle = true : this.buttonToggle = false;
  }
}
