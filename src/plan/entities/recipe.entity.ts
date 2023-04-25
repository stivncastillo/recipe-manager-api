import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entities/base.entity';

@ObjectType()
export class Recipe extends BaseEntity {
  @Field(() => String)
  name: string;

  @Field(() => String)
  description: string;

  @Field(() => Int, { description: 'Time in minutes' })
  preparation_time: number;
}
