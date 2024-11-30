import { Module } from "@nestjs/common";
import { ClientProxyFlight } from "./client-proxy";

@Module({
    providers: [ClientProxyFlight],
    exports: [ClientProxyFlight],
})


export class ProxyModule {}