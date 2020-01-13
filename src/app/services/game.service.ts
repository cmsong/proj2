import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  getGames(){
    //This will change once we connect to our DB via Spring.
    return null;
  }
}
