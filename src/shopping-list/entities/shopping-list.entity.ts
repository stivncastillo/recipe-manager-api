import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ShoppingList {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
