import { IsBoolean, IsString } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  readonly text: string;

  @IsBoolean()
  readonly isComplete: boolean;
}
