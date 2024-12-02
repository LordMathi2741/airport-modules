import { Module } from "@nestjs/common";
import { ClientProxyFlight, ClientProxyAuth } from "./client-proxy";

@Module({
    providers: [ClientProxyFlight, ClientProxyAuth],
    exports: [ClientProxyFlight, ClientProxyAuth],
})


export class ProxyModule {}