import { Inject, Injectable } from '@nestjs/common';
import { DB_CONNECTION } from './constants';
import { NodePgDatabase } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

@Injectable()
export class DrizzleService {
  constructor(
    @Inject(DB_CONNECTION) readonly db: NodePgDatabase<typeof schema>,
  ) {}
}
