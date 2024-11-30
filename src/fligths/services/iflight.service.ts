import { FlightRequestDTO } from "../dto/flight-request.dto";
import { FlightResponseDTO } from "../dto/flight-response.dto";

export interface IFlightService {
    getFlightById(id: string): Promise<FlightResponseDTO>;
    getFlights(): Promise<FlightResponseDTO[]>;
    createFlight(flight: FlightRequestDTO): Promise<FlightResponseDTO>;
    updateFlight(id:string, flight: FlightRequestDTO): Promise<FlightResponseDTO>;
    deleteFlight(id: string): Promise<FlightResponseDTO>;
}