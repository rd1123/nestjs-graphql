import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from 'src/entity/pokemon.entity';
import { Repository } from 'typeorm';
import { createPokemon } from './dto/create-pokemon.dto';

@Injectable()
export class PokemonService {
  private resultWording: string;
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>
  ) {
    this.resultWording = '';
  }

  async getAllPokemon(): Promise<Pokemon[]> {
    const result = await this.pokemonRepository.find();
    console.log(result);
    return result;
  }

  async getOneById(id: number): Promise<Pokemon> {
    const result = await this.pokemonRepository.findOne({
      pokedex: id
    })

    console.log(result);
    return result;
  }

  async createOnePokemon(pokemon: createPokemon): Promise<Pokemon> {
    try {
      const po = await this.pokemonRepository.save(pokemon);
      return po;
    } catch (err) {
      throw new HttpException(err.message, 400);
    }
  }

  async deletePokemonById(id: number): Promise<string> {
    try {
      await this.pokemonRepository.delete({ pokedex: id });
      this.resultWording = 'delete success';
    } catch (err) {
      this.resultWording = 'delete fail'
    }
    return this.resultWording;
  }

  async modifyById(id: number, name: string): Promise<string> {
    try {
      const findPokemon = await this.pokemonRepository.findOne({
        pokedex: id
      })

      await this.pokemonRepository.update({ pokedex: findPokemon.pokedex }, {
        name
      });
      this.resultWording = 'modify success';
    } catch (err) {
      this.resultWording = 'modify fail'
    }
    return this.resultWording;
  }
}
