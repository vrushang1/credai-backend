import { Document } from 'mongoose';

export interface HealthFormInterface extends Document {
  readonly businessUEN: string;
  readonly businessName: string;
  readonly name: string;
  readonly phone: string;
  readonly email: string;
  readonly attachments: Array<string>;
}
