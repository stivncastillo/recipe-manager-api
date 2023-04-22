import { Test, TestingModule } from '@nestjs/testing';
import { GroceryListResolver } from './grocery-list.resolver';
import { GroceryListService } from './grocery-list.service';

describe('GroceryListResolver', () => {
  let resolver: GroceryListResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [GroceryListResolver, GroceryListService],
    }).compile();

    resolver = module.get<GroceryListResolver>(GroceryListResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
