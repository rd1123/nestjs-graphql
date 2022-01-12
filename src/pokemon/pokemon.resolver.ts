import { Args, Mutation, ObjectType, Query, Resolver } from '@nestjs/graphql';
import { Pokemon } from 'src/entity/pokemon.entity';
import { createPokemon } from './dto/create-pokemon.dto';
import { outputPokemon } from './dto/output_pokemon.dto';
import { PokemonService } from './pokemon.service';

@Resolver(() => Pokemon)
export class PokemonResolver {
  constructor(
    private readonly pokemonService: PokemonService,
  ) {}

  @Query(() => [outputPokemon], { nullable: true })
  async getAll() {
    return await this.pokemonService.getAllPokemon();
  }

  @Query(() => outputPokemon, { nullable: true })
  async getOneById(
    @Args('id') id: number
  ) {
    return this.pokemonService.getOneById(id);
  }

  @Mutation(() => outputPokemon)
  async createOnePokemon(
    @Args('data') data: createPokemon
  ): Promise<Pokemon> {
    return await this.pokemonService.createOnePokemon(data);
  }

  @Mutation(() => String)
  async deletePokemonById(
    @Args('id') id: number
  ): Promise<string> {
    return this.pokemonService.deletePokemonById(id);
  }
}
