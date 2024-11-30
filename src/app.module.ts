import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FlightModule } from './fligths/flight.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.development'],
      isGlobal: true, 
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI),
    FlightModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
