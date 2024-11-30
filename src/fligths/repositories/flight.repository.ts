import { Injectable } from "@nestjs/common";
import { IFlightRepository } from "./iflight.repository";
import { InjectModel } from "@nestjs/mongoose";
import { Flight } from "../schema/flight.schema";
import { Model } from "mongoose";
import { FlightRequestDTO } from "../dto/flight-request.dto";
import { FlightResponseDTO } from "../dto/flight-response.dto";

@Injectable()
export class FlightRepository implements IFlightRepository{

    constructor(@InjectModel(Flight.name) private flightModel : Model<Flight>) {}
    async createFlight(flight: FlightRequestDTO): Promise<FlightResponseDTO> {
        const newFlight = new this.flightModel(flight);
        await newFlight.save();
        const flightResponse = new FlightResponseDTO(newFlight._id.toString(), newFlight.origin, newFlight.destination, newFlight.date, newFlight.price, newFlight.duration);
        return flightResponse;
    }
    async getFlights(): Promise<FlightResponseDTO[]> {
        const flightsResponse = await this.flightModel.find();
        return flightsResponse.map(flight => new FlightResponseDTO(flight._id.toString(), flight.origin, flight.destination, flight.date, flight.price, flight.duration));
    }
    async getFlightById(flightId: string): Promise<FlightResponseDTO> {
        const flightResponse = await this.flightModel.findById(flightId);
        return new FlightResponseDTO(flightResponse._id.toString(), flightResponse.origin, flightResponse.destination, flightResponse.date, flightResponse.price, flightResponse.duration);
    }
    async updateFlight(flightId: string, FlightRequestDTO: FlightRequestDTO): Promise<FlightResponseDTO> {
        const flight = await this.flightModel.findByIdAndUpdate(flightId, FlightRequestDTO, {new: true});
        return new FlightResponseDTO(flight._id.toString(), flight.origin, flight.destination, flight.date, flight.price, flight.duration);
    }
    async deleteFlight(flightId: string): Promise<FlightResponseDTO> {
        const flight = await this.flightModel.findByIdAndDelete(flightId);
        return new FlightResponseDTO(flight._id.toString(), flight.origin, flight.destination, flight.date, flight.price, flight.duration);
    }
   
}

export const IFlightRepositoryToken = 'IFlightRepositoryToken';