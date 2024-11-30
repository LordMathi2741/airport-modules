import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CatDocument = HydratedDocument<Flight>;

@Schema()
export class Flight {
  @Prop()
  origin: string;

  @Prop()
  destination: string;

  @Prop()
  date: string;

  @Prop()
  price: number;

  @Prop()
  duration: number;
}

export const FlightSchema = SchemaFactory.createForClass(Flight);