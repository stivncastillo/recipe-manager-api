import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { GroceryListService } from './grocery-list.service';
import { GroceryList } from './entities/grocery-list.entity';
import { CreateGroceryListInput } from './dto/create-grocery-list.input';
import { UpdateGroceryListInput } from './dto/update-grocery-list.input';

@Resolver(() => GroceryList)
export class GroceryListResolver {
  constructor(private readonly groceryListService: GroceryListService) {}

  @Mutation(() => GroceryList)
  createGroceryList(@Args('createGroceryListInput') createGroceryListInput: CreateGroceryListInput) {
    return this.groceryListService.create(createGroceryListInput);
  }

  @Query(() => [GroceryList], { name: 'groceryList' })
  findAll() {
    return this.groceryListService.findAll();
  }

  @Query(() => GroceryList, { name: 'groceryList' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.groceryListService.findOne(id);
  }

  @Mutation(() => GroceryList)
  updateGroceryList(@Args('updateGroceryListInput') updateGroceryListInput: UpdateGroceryListInput) {
    return this.groceryListService.update(updateGroceryListInput.id, updateGroceryListInput);
  }

  @Mutation(() => GroceryList)
  removeGroceryList(@Args('id', { type: () => Int }) id: number) {
    return this.groceryListService.remove(id);
  }
}
