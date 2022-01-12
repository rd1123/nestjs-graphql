import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class helloOutput {
  @Field()
  readonly name: string;
  @Field()
  readonly age: number;
}