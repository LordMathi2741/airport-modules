export class FlightResponseDTO {
    id: string;
    origin: string;
    destination: string;
    date: string;
    price: number;
    duration: number;

    constructor(id: string, origin: string, destination: string, date: string, price: number, duration: number) {
        this.id = id;
        this.origin = origin;
        this.destination = destination;
        this.date = date;
        this.price = price;
        this.duration = duration;
    }
}