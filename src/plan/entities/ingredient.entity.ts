import { ObjectType, Field } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entities/base.entity';

@ObjectType()
export class Ingredient extends BaseEntity {
  @Field(() => String)
  name: string;

  @Field(() => String)
  category: string;

  @Field(() => String)
  unit_of_measure: string;
}
