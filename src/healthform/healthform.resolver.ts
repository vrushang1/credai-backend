import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { HealthFormType } from './dto/healthform.dto';
import { HealthformService } from './healthform.service';
import { HealthFormInput } from './input-healthform.input';

@Resolver((of) => HealthFormType)
export class HealthformResolver {
  constructor(private healthService: HealthformService) {}

  @Query((returns) => [HealthFormType])
  healthform(): Promise<HealthFormType[]> {
    return this.healthService.getAllHealthForm();
  }

  @Mutation((returns) => HealthFormType)
  async createHealthForm(
    @Args('input') input: HealthFormInput,
  ): Promise<HealthFormType> {
    return this.healthService.create(input);
  }
}
