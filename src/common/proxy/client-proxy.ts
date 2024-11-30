import { Injectable } from "@nestjs/common";
import { ConfigService } from "@nestjs/config";
import { ClientProxy, ClientProxyFactory, Transport } from "@nestjs/microservices";
import { RabbitMQ } from "../constants";

@Injectable()
export class ClientProxyFlight {
    constructor(private readonly config: ConfigService){}

    clientProxyFlight(config: ConfigService) : ClientProxy{
        return ClientProxyFactory.create({
            transport: Transport.RMQ,
            options: {
                urls: this.config.get("AMQL_URL"),
                queue: RabbitMQ.FlightQueue,
            },
        });
    }
}