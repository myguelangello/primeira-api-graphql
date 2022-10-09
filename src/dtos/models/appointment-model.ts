import { Field, ObjectType } from "type-graphql";

/**
 * essa classe appointment é uma entidade de camada à nivel HTTP 
 */
@ObjectType()
export class Appointment {
  @Field()
  startsAt: Date;

  @Field()
  endsAt: Date;
}