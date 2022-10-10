import { InputType, Field, Int } from '@nestjs/graphql';
import { GraphQLUpload, FileUpload } from 'graphql-upload';

@InputType()
export class HealthFormInput {
  @Field(() => Int)
  readonly businessUEN: number;

  @Field()
  readonly businessName: string;

  @Field()
  readonly name: string;

  @Field()
  readonly phone: string;

  @Field()
  readonly email: string;
}
