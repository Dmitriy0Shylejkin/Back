import { IsBoolean, IsString } from 'class-validator';

export class UpdateTaskDto {
  @IsString()
  readonly text: string;

  @IsBoolean()
  readonly isComplete: boolean;
}
