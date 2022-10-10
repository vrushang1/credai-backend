import { Module } from '@nestjs/common';
import { HealthformService } from './healthform.service';
import { HealthformResolver } from './healthform.resolver';
import { MongooseModule } from '@nestjs/mongoose';
import { HealthFormSchema } from './schemas/healthform.schema';
@Module({
  imports: [
    MongooseModule.forFeature([
      {
        name: 'healthforms',
        schema: HealthFormSchema,
      },
    ]),
  ],
  providers: [HealthformService, HealthformResolver],
})
export class HealthformModule {}
