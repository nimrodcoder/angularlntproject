import { Injectable } from '@angular/core';
import { Event } from 'src/app/model/Event';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  events: Event[] = [
    { id: 1, name: 'Angular', description: 'Angular Event', speaker: 'Himanshu' },
    { id: 2, name: 'React', description: 'React Event', speaker: 'Saurabh' },
    { id: 3, name: 'Java', description: 'Java Event', speaker: 'Meenal' }
];
getEvents() {
  return this.events;
}

addEvent(eventName:string,desc:string,speaker:string) { 
  let newEvent= { id: this.events.length+1,
   name: eventName, description:desc, speaker: speaker };
   return this.events.push(newEvent);
}

deleteEvent(e:Event){
  const id=this.events.indexOf(e);
  this.events.splice(id,1);
}
  constructor() { }
}
