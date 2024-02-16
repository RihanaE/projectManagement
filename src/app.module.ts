// import {Module} from '@nestjs/common';
// import {ProjectModule} from './project/project.module';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
// import {ConfigModule} from '@nestjs/config';
// import { MongooseModule } from '@nestjs/mongoose';

// @Module({
// imports : [
//     ConfigModule.forRoot({
//         envFilePath: '.env',
//         isGlobal: true,
//     }),
//     MongooseModule.forRoot(process.env.DB_URI),
//     ProjectModule,

// ],
//     controllers: [AppController],
//     providers: [AppService],
// })

// export class AppModule{}
// app.module.ts
// import { Module } from '@nestjs/common';
// import { MongooseModule } from '@nestjs/mongoose';
// import { AuthModule } from './auth/auth.module';
// import { DevelopersModule } from './developers/developers.module';
// import { ProjectsModule } from './projects/projects.module';
// import { AdminsModule } from './admins/admins.module';
// import { ClientsModule } from './clients/clients.module';

// @Module({
// imports: [
//   MongooseModule.forRoot('mongodb://localhost/project-management', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }),
//     AuthModule,
//     DevelopersModule,
//     ProjectsModule,
//     AdminsModule,
//     ClientsModule,
//   ],
// })
// export class AppModule {}

// app.module.ts
import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthModule } from "./auth/auth.module";
import { DevelopersModule } from "./developers/developers.module";
import { ProjectsModule } from "./projects/projects.module";
import { AdminsModule } from "./admins/admins.module";
import { ClientsModule } from "./clients/clients.module";
import { DeveloperSchema } from "./developers/developer.schema";
import { ProjectSchema } from "./projects/project.schema";
import { AdminSchema } from "./admins/admin.schema";
import { ClientSchema } from "./clients/client.schema";
import { ConfigModule } from "@nestjs/config";

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ".env",
      isGlobal: true,
    }),
    MongooseModule.forRoot(
      process.env.DB_URI,
    ),
    ProjectsModule,
    MongooseModule.forFeature([
      { name: "Developer", schema: DeveloperSchema },
      { name: "Project", schema: ProjectSchema },
      { name: "Admin", schema: AdminSchema },
      { name: "Client", schema: ClientSchema },
    ]),
    AuthModule,
    DevelopersModule,
    ProjectsModule,
    AdminsModule,
    ClientsModule,
  ],
})
export class AppModule {}
