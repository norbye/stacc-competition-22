import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { NftsModule } from './nfts/nft.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: 'schema.gql',
    }),
    NftsModule,
    MongooseModule.forRoot('mongodb://localhost/nestgraphql'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
