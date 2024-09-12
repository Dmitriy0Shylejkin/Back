import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TasksModule } from './tasks/tasks.module';
import { Dialect } from 'sequelize';
import { Task } from './tasks/tasks.model';

@Module({
  controllers: [],
  providers: [],
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    SequelizeModule.forRoot({
      dialect: process.env.POSTGRES_DIALECT as Dialect,
      host: process.env.POSTGRES_HOST,
      port: parseInt(process.env.POSTGRES_PORT, 10),
      username: process.env.POSTGRES_USER,
      password: String(process.env.POSTGRES_PASSWORD),
      database: process.env.POSTGRES_DB,
      models: [Task],
      autoLoadModels: true,
    }),
    TasksModule,
  ],
})
export class AppModule {}
