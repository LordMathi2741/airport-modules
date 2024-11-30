import {Controller, Inject} from "@nestjs/common";;
import { IFlightServiceToken } from "../services/flight.service";
import { IFlightService } from "../services/iflight.service";
import { FlightRequestDTO } from "../dto/flight-request.dto";
import { MessagePattern, Payload } from "@nestjs/microservices";
import { FlightMSG } from "src/common/constants";

@Controller("api/v1/flights")
export class FlightController {
    constructor(@Inject(IFlightServiceToken) private readonly flightService: IFlightService) {}

    @MessagePattern(FlightMSG.GET_FLIGHTS)
    async getFlights() {
        return await this.flightService.getFlights();
    }
    @MessagePattern(FlightMSG.GET_FLIGHT_BY_ID)
    async getFlightById(@Payload() id: string) {
        return await this.flightService.getFlightById(id);
    }

    @MessagePattern(FlightMSG.CREATE_FLIGHT)
    async createFlight(@Payload() flight: FlightRequestDTO) {
        return await this.flightService.createFlight(flight);
    }

    @MessagePattern(FlightMSG.UPDATE_FLIGHT)
    async updateFlight(@Payload() payload: any) {
        return await this.flightService.updateFlight(payload.id, payload.flight);
    }
    @MessagePattern(FlightMSG.DELETE_FLIGHT)
    async deleteFlight(@Payload() id: string) {
        return await this.flightService.deleteFlight(id);
    }

}
