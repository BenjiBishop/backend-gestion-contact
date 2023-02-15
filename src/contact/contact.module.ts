import { Module } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import { ContactController } from "./contact.controller";
import { ContactService } from "src/contact.service";

@Module({
    controllers : [ ContactController ],
    providers : [ ContactService,PrismaService ],
    exports : [ ContactService, PrismaService ]
}) 
export class ContactModule {}
