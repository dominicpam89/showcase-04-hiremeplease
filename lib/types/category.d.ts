declare type TypeCategoryPush = string
declare type TypeCategoryFetch = {
     id: string
     val: string
}

declare type TypeCategory<T extends "push" | "fetch"> =
     T extends "push" ? TypeCategoryPush : TypeCategoryFetch
