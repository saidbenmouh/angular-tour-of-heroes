import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  messages: string[] = [];

  //Add a message
  add(message: string){
    this.messages.push(message);
  }

  //clear messages
  clear(){
    this.messages = [];
  }

}
