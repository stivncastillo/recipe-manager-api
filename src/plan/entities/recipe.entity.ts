import { ObjectType, Field, Int } from '@nestjs/graphql';
import { UuidScalar } from 'src/config/graphql/scalars';

@ObjectType()
export class Recipe {
  @Field(() => UuidScalar)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int, { description: 'Time in minutes' })
  preparation_time: number;
}
