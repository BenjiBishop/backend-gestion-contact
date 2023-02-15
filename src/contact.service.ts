import { Injectable } from "@nestjs/common";
import { Contact } from "./interface/contact.interface";
import { contact, Prisma } from "@prisma/client";
import { PrismaService } from "./prisma.service";

@Injectable()
export class ContactService{
    constructor( private readonly prisma : PrismaService ) {}

    async create( contact : Contact ) : Promise<Contact>  {
      return  await this.prisma.contact.create({ data : contact})
      

    }

    async findAll() : Promise<Contact[]> {
        return await this.prisma.contact.findMany()
    } 

    async findOne( id : number ) : Promise<Contact> {
        return await this.prisma.contact.findUnique( {where : {id} } )
    }

    async delete( id : number ) : Promise <void> {
      await this.prisma.contact.delete( {where  : {id} } )
      console.log('contact supprimer ')
    }

    async update ( id : number, contact : contact ): Promise <void> {
      await this.prisma.contact.update( { where : {id}, data : contact } )
      console.log('contact mis a jour')
    } 


}