import { Args, Query, Resolver } from '@nestjs/graphql';
import { IngredientService } from '../services';
import { Ingredient } from '../entities/ingredient.entity';

@Resolver()
export class IngredientResolver {
  constructor(private readonly ingredientService: IngredientService) {}

  @Query(() => [Ingredient], { name: 'ingredient' })
  findAll() {
    return this.ingredientService.findAll();
  }

  @Query(() => Ingredient, { name: 'plan' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.ingredientService.findOne(id);
  }
}
