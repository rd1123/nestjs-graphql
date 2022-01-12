import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from 'src/entity/pokemon.entity';
import { Repository } from 'typeorm';
import { createPokemon } from './dto/create-pokemon.dto';

@Injectable()
export class PokemonService {
  constructor(
    @InjectRepository(Pokemon)
    private readonly pokemonRepository: Repository<Pokemon>
  ) {}

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
    let resultWording: string = '';
    try {
      await this.pokemonRepository.delete({ pokedex: id });
      resultWording = 'delete success';
    } catch (err) {
      resultWording = 'delete fail'
    }
    return resultWording;
  }
}
