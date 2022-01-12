import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class createPokemon {
  @Field()
  readonly name: string;
  @Field()
  readonly type: string;
  @Field()
  readonly pokedex: number
}