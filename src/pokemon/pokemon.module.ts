import { Module } from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { PokemonResolver } from './pokemon.resolver';
import { Pokemon } from 'src/entity/pokemon.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forFeature([Pokemon])
  ],
  providers: [PokemonService, PokemonResolver],
})
export class PokemonModule {}
