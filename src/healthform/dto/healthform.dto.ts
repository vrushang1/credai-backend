import { Field, ID, Int, ObjectType } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsNumber, IsEmail } from 'class-validator';
@ObjectType()
export class HealthFormType {
  @Field(() => ID)
  @IsString()
  id?: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  businessUEN: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  businessName: string;

  @Field()
  @IsString()
  @IsNotEmpty()
  name: string;

  @Field({ nullable: true })
  @IsString()
  phone: string;

  @Field()
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Field((type) => [String])
  attachments: string[];
}
