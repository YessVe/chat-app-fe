import { Component, OnInit } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';

@Component({
  selector: 'app-container-users',
  templateUrl: './container-users.component.html',
  styleUrls: ['./container-users.component.scss']
})
export class ContainerUsersComponent implements OnInit {
  
  // socketConnectedUsers:Array<any>=[];
  client:any;

  constructor(private socketService:SocketService) {
    
  }

  ngOnInit(): void {
    
    this.socketService.socket.on("connectedUsers", (client: any)=>{
      this.client = client;   
        
    })
  }
}
