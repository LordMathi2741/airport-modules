import { Inject, Injectable } from "@nestjs/common";
import { IFlightService } from "./iflight.service";
import { FlightResponseDTO } from "../dto/flight-response.dto";
import { IFlightRepository } from "../repositories/iflight.repository";
import { IFlightRepositoryToken } from "../repositories/flight.repository";
@Injectable()
export class FlightService implements IFlightService {

    constructor(@Inject(IFlightRepositoryToken) private readonly flightRepository: IFlightRepository) {}
    async getFlightById(id: string): Promise<FlightResponseDTO> {
        const flightResponse = await this.flightRepository.getFlightById(id);
        return flightResponse;
    }
    async getFlights(): Promise<FlightResponseDTO[]> {
        const flightsResponse = await this.flightRepository.getFlights();
        return flightsResponse;
    }
    async createFlight(flight: FlightResponseDTO): Promise<FlightResponseDTO> {
        const flightResponse = await this.flightRepository.createFlight(flight);
        return flightResponse;
    }
    async updateFlight(id:string, flight: FlightResponseDTO): Promise<FlightResponseDTO> {
        const flightResponse = await this.flightRepository.updateFlight(id, flight);
        return flightResponse;
    }
   async deleteFlight(id: string): Promise<FlightResponseDTO> {
        const flightResponse = await this.flightRepository.deleteFlight(id);
        return flightResponse;
    }
  

}

export const IFlightServiceToken = 'IFlightServiceToken';