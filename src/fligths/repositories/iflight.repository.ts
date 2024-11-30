import { FlightRequestDTO } from '../dto/flight-request.dto';
import { FlightResponseDTO } from "../dto/flight-response.dto";

export interface IFlightRepository {
    createFlight(flight: FlightRequestDTO): Promise<FlightResponseDTO>;
    getFlights(): Promise<FlightResponseDTO[]>;
    getFlightById(flightId: string): Promise<FlightResponseDTO>;
    updateFlight(flightId: string, FlightRequestDTO: FlightRequestDTO): Promise<FlightResponseDTO>;
    deleteFlight(flightId: string): Promise<FlightResponseDTO>;
}