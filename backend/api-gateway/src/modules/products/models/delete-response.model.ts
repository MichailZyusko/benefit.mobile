import { Field, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class DeleteResponse {
  @Field(() => Int, { nullable: true })
  status: number;

  @Field({ nullable: true })
  message: string;
}
