import { IsNotEmpty, IsString, IsNumber, IsPositive } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class FlightRequestDTO {
    @ApiProperty({
        example: "New York",
        description: "The origin of the flight.",
    })
    @IsString()
    @IsNotEmpty()
    readonly origin: string;

    @ApiProperty({
        example: "London",
        description: "The destination of the flight.",
    })
    @IsString()
    @IsNotEmpty()
    readonly destination: string;

    @ApiProperty({
        example: "2024-11-30T10:00:00Z",
        description: "The departure date and time in ISO format.",
    })
    @IsString()
    @IsNotEmpty()
    readonly date: string;

    @ApiProperty({
        example: 500,
        description: "The price of the flight in USD.",
    })
    @IsNumber()
    @IsPositive()
    readonly price: number;

    @ApiProperty({
        example: 8,
        description: "The duration of the flight in hours.",
    })
    @IsNumber()
    @IsPositive()
    @IsNotEmpty()
    readonly duration: number;
}
