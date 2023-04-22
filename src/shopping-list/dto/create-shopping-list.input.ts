import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateShoppingListInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
