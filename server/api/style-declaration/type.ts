import { Field, ObjectType } from "type-graphql";

@ObjectType()
export default class StyleDeclaration {
  @Field()
  name: string;

  @Field()
  value: string;
}
