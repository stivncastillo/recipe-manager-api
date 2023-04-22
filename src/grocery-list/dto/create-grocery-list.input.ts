import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateGroceryListInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
