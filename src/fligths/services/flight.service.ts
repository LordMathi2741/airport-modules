import { Inject, Injectable } from "@nestjs/common";
import { IFlightService } from "./iflight.service";
import { FlightResponseDTO } from "../dto/flight-response.dto";
import { IFlightRepository } from "../repositories/iflight.repository";
import { IFlightRepositoryToken } from "../repositories/flight.repository";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { FlightMSG } from "src/common/constants";
import { FlightRequestDTO } from "../dto/flight-request.dto";
@Injectable()
export class FlightService implements IFlightService {

    constructor(@Inject(IFlightRepositoryToken) private readonly flightRepository: IFlightRepository) {}
    @MessagePattern(FlightMSG.GET_FLIGHTS)
    async getFlights() {
        return await this.flightRepository.getFlights();
    }
    @MessagePattern(FlightMSG.GET_FLIGHT_BY_ID)
    async getFlightById(@Payload() id: string) {
        return await this.flightRepository.getFlightById(id);
    }

    @MessagePattern(FlightMSG.CREATE_FLIGHT)
    async createFlight(@Payload() flight: FlightRequestDTO) {
        return await this.flightRepository.createFlight(flight);
    }

    @MessagePattern(FlightMSG.UPDATE_FLIGHT)
    async updateFlight(@Payload() payload: any) {
        return await this.flightRepository.updateFlight(payload.id, payload.flight);
    }
    @MessagePattern(FlightMSG.DELETE_FLIGHT)
    async deleteFlight(@Payload() id: string) {
        return await this.flightRepository.deleteFlight(id);
    }
  

}

export const IFlightServiceToken = 'IFlightServiceToken';