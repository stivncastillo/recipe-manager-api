import { ObjectType, Field } from '@nestjs/graphql';
import { UuidScalar } from 'src/config/graphql/scalars';

@ObjectType()
export class Ingredient {
  @Field(() => UuidScalar)
  id: string;

  @Field(() => String)
  name: string;

  @Field(() => String)
  category: string;

  @Field(() => String)
  unit_of_measure: string;
}
