import { CreateGroceryListInput } from './create-grocery-list.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateGroceryListInput extends PartialType(CreateGroceryListInput) {
  @Field(() => Int)
  id: number;
}
