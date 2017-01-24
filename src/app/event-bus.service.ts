import {Injectable} from "@angular/core";
import {Subject} from "rxjs";

@Injectable()
export class EventBusService {

  private message = new Subject<Event>();

  emit(eventType: EventType, data: any) {
    this.message.next({
      type: eventType,
      data: data
    });
  }

  observe(eventType: EventType) {
    return this.message
      .filter(args => args.type === eventType)
      .map(args => args.data);
  }
}

interface Event {
  type: EventType;
  data: any;
}

export enum EventType {
  NavigatedToContactList,
  NavigatedToContact,
  EditingContact
}
