import { Injectable } from "@angular/core";
import {HttpClient} from '@angular/common/http';

@Injectable({ providedIn: "root" })

export class CharactersRepository {

  constructor(private httpClient: HttpClient) {}

  async getAllCharacters() {​​

    const response = await this.httpClient  
    .get('https://api.myanimelist.net/v2/anime')
    .toPromise();

    return response;
    
    }​​
}