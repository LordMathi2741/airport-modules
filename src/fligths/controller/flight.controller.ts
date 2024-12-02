import {Body, Controller, Delete, Get, Inject, Post, Put, Query} from "@nestjs/common";;
import { IFlightServiceToken } from "../services/flight.service";
import { IFlightService } from "../services/iflight.service";
import { FlightRequestDTO } from "../dto/flight-request.dto";

@Controller("api/v1/flights")
export class FlightController {
    constructor(@Inject(IFlightServiceToken) private readonly flightService: IFlightService) {}

    @Get()
    async getFlights() {
        return await this.flightService.getFlights();
    }

    @Get(":id")
    async getFlightById(@Query("id") id: string) {
        return await this.flightService.getFlightById(id);
    }

    @Post()
    async createFlight(@Body() flight: FlightRequestDTO) {
        return await this.flightService.createFlight(flight);
    }

    @Put(":id")
    async updateFlight(@Query("id") id: string, @Body() flight: FlightRequestDTO) {
        return await this.flightService.updateFlight(id, flight);
    }

    @Delete(":id")
    async deleteFlight(@Query("id") id: string) {
        return await this.flightService.deleteFlight(id);
    }
    

    

}
