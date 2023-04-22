import { ObjectType, Field, GraphQLISODateTime } from '@nestjs/graphql';
import { UuidScalar } from 'src/config/graphql/scalars';

@ObjectType()
export class Plan {
  @Field(() => UuidScalar)
  id: string;

  @Field(() => String)
  userId: string;

  @Field(() => GraphQLISODateTime)
  startDate: string;

  @Field(() => GraphQLISODateTime)
  endDate: string;
}
