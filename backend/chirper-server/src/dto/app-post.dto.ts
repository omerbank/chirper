import { IsOptional, IsString, IsUUID, MaxLength } from 'class-validator';

export class AddPostDto {
  @IsUUID()
  userId: string;

  @IsOptional()
  @IsUUID()
  parentPostId?: string;

  @IsString()
  @MaxLength(280)
  content: string;
}
