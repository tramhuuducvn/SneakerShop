export interface Product {
  id: number;
  image: string;
  name: string;
  description: string;
  price: number;
  color: string;
  total: number;
}

export interface Timeline {
    startTime: Date;
    endTime: Date;
}


export interface ServeItem {
  id: number;
  name: string;
  description: string;
  image: string;
  number: number;
}

export interface Event {
    eventTitle: string;
    promotionMessage: string;
    eventTimeline: Timeline;
    registrationTime: Timeline;
    numberItem: number;
    background: string;
}

export interface RegisteredUser {
  employeeId: string;
  name: string;
  registeredItem: ServeItem;
}
