import { Component, OnInit } from '@angular/core';
import { Game } from '../../models/Game';
import { GameService } from '../../services/game.service';
@Component({
  selector: 'app-marketview',
  templateUrl: './marketview.component.html',
  styleUrls: ['./marketview.component.css']
})
export class MarketviewComponent implements OnInit {

  constructor(private gameservice :GameService) { }
  games :Game[] = [];
  game :Game;
  ngOnInit() {
    this.gameservice.getGames().subscribe((response) =>{
      this.game.gameId = response.gameId;
      this.game.genre = response.genre;
      this.game.photo = response.photo;
      this.game.price = response.price;
      this.game.releaseDate = response.releaseDate;
      this.game.title = response.title;
      this.game.rated = response.rated;
      this.game.description = response.description;
      this.games.push(this.game);
    },(response)=>{
      console.log("There was an error getting all games.");
    });
  }

}
