import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TaskModule } from './task/task.module';

@Module({
  imports: [
    TaskModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',       
      port: 5432,
      username: 'nest',
      password: 'root',
      database: 'nestdb',
      autoLoadEntities: true,
      synchronize: true,
    }),
  ],
})

export class AppModule {}
