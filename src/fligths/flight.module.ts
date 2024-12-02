import { Module } from '@nestjs/common';
import { FlightRepository, IFlightRepositoryToken } from './repositories/flight.repository';
import { FlightService, IFlightServiceToken } from './services/flight.service';
import { FlightController } from './controller/flight.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Flight, FlightSchema } from './schema/flight.schema';
import { ProxyModule } from 'src/common/proxy/proxy.module';

@Module({
    exports: [
        IFlightRepositoryToken,
        IFlightServiceToken
    ],
    providers: [
        {
            provide: IFlightRepositoryToken,
            useClass: FlightRepository
        },
        {
            provide: IFlightServiceToken,
            useClass: FlightService
        }
    ],
    controllers: [FlightController],
    imports: [
        MongooseModule.forFeature([{ name: Flight.name, schema: FlightSchema }]), 
        ProxyModule
    ],
})
export class FlightModule {}
