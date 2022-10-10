import { Document } from 'mongoose';

export interface HealthFormInterface extends Document {
  readonly businessUEN: number;
  readonly businessName: string;
  readonly name: string;
  readonly phone: string;
  readonly email: string;
}