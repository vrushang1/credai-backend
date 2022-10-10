import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthformModule } from './healthform/healthform.module';
import { ApolloDriver } from '@nestjs/apollo';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/credlinkai'),
    GraphQLModule.forRoot({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      uploads: false,
    }),
    HealthformModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
