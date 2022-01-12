import { Query, Resolver } from '@nestjs/graphql';
import { helloOutput } from './dto/register.dto';

@Resolver()
export class AppResolver {
  @Query(() => helloOutput)
  hello() {
    const output: helloOutput = {
      name: 'Nick',
      age: 20,
    }
    return output;
  }
}
