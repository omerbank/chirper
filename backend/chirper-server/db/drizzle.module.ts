import { Global, Module } from '@nestjs/common';
import { DrizzleService } from './drizzle.service';
import { DB_CONNECTION } from './constants';
import { ConfigService } from '@nestjs/config';
import { Client } from 'pg';
import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from './schema';

@Global()
@Module({
  exports: [DrizzleService],
  providers: [
    DrizzleService,
    {
      provide: DB_CONNECTION,
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => {
        const client = new Client({
          host: config.get('DB_HOST'),
          port: config.get('DB_PORT'),
          user: config.get('DB_USER'),
          password: config.get('DB_PASSWORD'),
          database: config.get('DB_DATABASE'),
        });

        await client.connect();
        return drizzle(client, { schema, logger: true });
      },
    },
  ],
})
export class DrizzleModule {}
