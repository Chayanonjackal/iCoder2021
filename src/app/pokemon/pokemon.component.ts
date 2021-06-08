import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PokemonData, PokemonDataResponse } from './pokemon';


@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
})
export class PokemonComponent implements OnInit {
  pokemonUrl: string = '';
  PokemonDataList : PokemonData[] = [] ;


  constructor(public http: HttpClient) {

    const x: any = '111'
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon/ditto').subscribe(response => {
      this.pokemonUrl = response.sprites.front_default
    })
    this.http.get<PokemonDataResponse>('https://pokeapi.co/api/v2/pokemon?limit=100&offset=200').subscribe(response => {
    this.PokemonDataList = response.results
    })


   }

   showPokemon(pokemon:PokemonData ){
    this.http.get(pokemon.url).subscribe(response=>{
        console.log(response)
      //  this.pokemonUrl = response.sprites.front_default
    })
   }


  ngOnInit(): void {
  }
  movement(el: HTMLImageElement){
    el.animate({transform:'translateY(100px)'}, {duration: 1000})
  }
  //job image
  getImage(url: string){
    let arr:string[] = url.split('/');
    return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${arr[arr.length-2]}.png`;
  }
}
