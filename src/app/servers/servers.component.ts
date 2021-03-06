import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer =false;
  serverCreationStatus = "No server was created!";
  serverName = "Testttt";
  emptyusername = true;
  serverCreated = true;
  userName = '';
  servers = ['Testserver', 'Testserver 2'];
  showSecret= false;
  log = [];
  constructor() { 
    setTimeout(()=>{this.allowNewServer = true},2000);
  }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreated =true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = "Server was created! Name is" + this.serverName;
  }
  onUpdateServerName(event: any){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
  onEmptyUserName(){
    this.emptyusername = false;
  }
  resetUserName(){
    this.userName = '';
    this.emptyusername = true;
  }
  onToggleDetails(){
    this.showSecret = !this.showSecret;
  this.log.push(new Date());
  }
}
