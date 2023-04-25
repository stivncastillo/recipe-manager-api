import { ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { BaseEntity } from 'src/common/entities/base.entity';

@ObjectType()
export class Plan extends BaseEntity {
  @Field(() => String)
  userId: string;

  @Field(() => GraphQLISODateTime)
  startDate: string;

  @Field(() => GraphQLISODateTime)
  endDate: string;
}
