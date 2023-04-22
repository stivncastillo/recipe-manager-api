import { CreateShoppingListInput } from './create-shopping-list.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateShoppingListInput extends PartialType(CreateShoppingListInput) {
  @Field(() => Int)
  id: number;
}
