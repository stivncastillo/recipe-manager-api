import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { UuidScalar } from 'src/common/scalars';

@ObjectType()
export class User {
  @Field(() => UuidScalar)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => Int)
  age: string;

  @Field(() => Float)
  weight: string;

  @Field(() => String)
  activity_level: string;
}
