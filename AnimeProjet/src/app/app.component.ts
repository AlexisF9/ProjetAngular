import { Component } from '@angular/core';
import { CharactersRepository } from './services/api-config-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'AnimeProjet';

  constructor(private charactersrepository : CharactersRepository) {
    this.charactersrepository.getAllCharacters();
  }

}
