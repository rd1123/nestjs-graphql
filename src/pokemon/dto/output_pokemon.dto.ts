import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class outputPokemon {
  @Field()
  readonly name: string;
  @Field()
  id: string;

  @Field()
  type: string;

  @Field()
  pokedex: number;
}