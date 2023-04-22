import { join } from 'path';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import configuration from './config/configuration';
import { enviroments } from './config/environments';
import { UserModule } from './user/user.module';
import { PlanModule } from './plan/plan.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';

import * as Joi from 'joi';
import { UuidScalar } from './config/graphql/scalars';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: enviroments[process.env.NODE_ENV] || '.env',
      load: [configuration],
      isGlobal: true,
      validationSchema: Joi.object({
        PORT: Joi.number().default(3000),
        OPENIA_API_KEY: Joi.number().required(),
        DATABASE_USER: Joi.string().required(),
        DATABASE_PASSWORD: Joi.string().required(),
      }),
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/graphql/schema.gql'),
      sortSchema: false,
      resolvers: { UUID: UuidScalar },
    }),
    UserModule,
    PlanModule,
    ShoppingListModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
