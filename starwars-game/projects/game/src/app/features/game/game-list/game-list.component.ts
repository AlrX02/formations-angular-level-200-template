import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {
  games: GameDto[] = [];
  searchItem = '';
  itemsPerPage = [ 10, 25, 50, 100 ];
  private subscriptions: Subscription[] = [];

  constructor(private gameService: GameService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());
  }

  ngOnInit(): void {
    const obs$ = this.gameService.getAll(3);

    this.subscriptions.push(obs$.subscribe(items => this.games = items));

    this.subscriptions.push(obs$.subscribe(items => this.games = items));
    this.subscriptions.push(obs$.subscribe(items => this.games = items ));

    // Producteur
    const monObservable$ = new Observable(observer => {
      console.info('hey je m\'execute', Math.random());

      observer.next(1);
      observer.next(2);

      setTimeout(() => {
        observer.next(30);
      }, 1500);

      setTimeout(() => {
        observer.next(40);
      }, 0);

      observer.next(3);
      observer.complete();
      observer.next(5);
    });


    // Consommateur
    monObservable$.subscribe();
    monObservable$.subscribe();

    monObservable$.subscribe(
    item => {
      console.info('conso:', item);
    },
    error => {},
    () => console.info('complete ici'));

    console.info('ici ???');
  }

}
