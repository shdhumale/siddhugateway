export interface ICategory {
  id?: number;
  name?: string;
  description?: string | null;
}

export class Category implements ICategory {
  constructor(public id?: number, public name?: string, public description?: string | null) {}
}

export function getCategoryIdentifier(category: ICategory): number | undefined {
  return category.id;
}
