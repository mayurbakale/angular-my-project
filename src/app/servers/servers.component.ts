import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  //selector: '[app-servers]',
  //selector: '.app-servers',
  /*template: `
      <app-server></app-server>
      <app-server></app-server>
      `,*/
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  allowNewServers = false;
  serverCreatedString = "No Server Was Created";

  serverName = "TestServer";
  serverCreated:boolean = false;

  servers = ['TestServer1','TestServer2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServers = true;
    },5000);
  }

  ngOnInit() {
  }

  getNewServers() {
    return this.allowNewServers;
  }

  onClickForServerCreation() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreatedString = "Server Was Created " + this.serverName;
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
