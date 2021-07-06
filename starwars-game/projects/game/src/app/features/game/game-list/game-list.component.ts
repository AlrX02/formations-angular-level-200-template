import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subject, Subscription } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { GameDto } from '../../../core/models/game.dto';
import { SearchService } from '../../../shared/services/search.service';
import { GameService } from '../services/game.service';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {

  games: GameDto[] = [];
  gamesResult: GameDto[] = [];
  searchItem = '';
  itemsPerPage = [ 10, 25, 50, 100 ];
  private subscriptions: Subscription[] = [];

  listGame$ !: Observable<GameDto[]>;
  listGame2$ !: Observable<GameDto[]>;

  private subjectToClose = new Subject<boolean>();

  constructor(private gameService: GameService, private searchService: SearchService) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => item.unsubscribe());

    this.subjectToClose.next(true);
    this.subjectToClose.unsubscribe();
  }

  ngOnInit(): void {
    // this.searchService.state.subscribe(value => this.games = this.games.filter(item => item.title.startsWith(value)));

    this.listGame$ = this.gameService.getAll(3);
    this.listGame2$ = this.gameService.getAll(3).pipe(
      takeUntil(this.subjectToClose)
    );

    // this.subscriptions.push(obs$.subscribe(items => this.games = items));

    // this.subscriptions.push(obs$.subscribe(items => this.games = items));
    // this.subscriptions.push(obs$.subscribe(items => this.games = items ));

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
