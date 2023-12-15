import { Module } from '@nestjs/common';
import { VisitorsModule } from './visitors/visitors.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import entities from './typeorm';

@Module({
  imports: [
    VisitorsModule,
    TypeOrmModule.forRoot({
      type: 'mssql',
      host: '192.168.0.139',
      port: 1433,
      username: 'sa',
      password: 'Ozzy112358',
      database: 'tourism_portal_api',
      entities: entities,
      synchronize: false,
      options: {
        encrypt: false,
      },
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
