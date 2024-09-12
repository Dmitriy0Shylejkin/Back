import {
  IsBoolean,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { Transform } from 'class-transformer';

export class UpdateTaskDto {
  @IsString()
  @IsNotEmpty()
  @MaxLength(255)
  @Transform(({ value }) => value.trim())
  @IsOptional()
  readonly text?: string;

  @IsBoolean()
  @IsOptional()
  readonly isComplete?: boolean;
}
