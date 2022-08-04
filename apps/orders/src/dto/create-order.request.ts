import {
  IsString,
  IsNotEmpty,
  IsPositive,
  IsPhoneNumber,
} from 'class-validator';
export class CreateOrderRequest {
  @IsString()
  @IsNotEmpty()
  readonly name: string;
  @IsPositive()
  readonly price: number;
  @IsPhoneNumber()
  readonly phoneNumber: string;
}
