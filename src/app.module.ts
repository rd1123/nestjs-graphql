import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import path, { join } from 'path';
import { AppResolver } from './app.resolver';
import { AppService } from './app.service';
import { PokemonModule } from './pokemon/pokemon.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
    }),
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: '127.0.0.1',
      port: 3318,
      username: 'user',
      password: 'user',
      database: 'pokemon',
      entities: [__dirname + "/**/*.entity{.ts,.js}"],
      // entities: [ __dirname + '/**/*.entity{.ts, .js}'],
      logging: true,
      synchronize: true,
    }),
    PokemonModule
  ],
  providers: [AppService, AppResolver],
})
export class AppModule {}
