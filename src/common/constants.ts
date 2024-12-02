export enum RabbitMQ{
    FlightQueue = "flights",
    AuthQueue = "auth"
}

export enum FlightMSG{
    CREATE_FLIGHT = "CREATE_FLIGHT",
    UPDATE_FLIGHT = "UPDATE_FLIGHT",
    DELETE_FLIGHT = "DELETE_FLIGHT",
    GET_FLIGHTS = "GET_FLIGHTS",
    GET_FLIGHT_BY_ID = "GET_FLIGHT_BY_ID"
}

export enum AuthMSG{
    SIGN_IN = "SIGN_IN",
    SIGN_UP = "SIGN_UP",
}