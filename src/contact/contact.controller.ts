import { Controller, Get, Body , Post, ParseIntPipe, Param, Delete, Put } from '@nestjs/common';
import { contact } from '@prisma/client';
import { ContactService } from 'src/contact.service';
import { Contact } from 'src/interface/contact.interface';
import { createContactDto } from './dto/create-contact.tdo';

@Controller('contact')
export class ContactController {
    
    constructor( private contactService : ContactService ){}

    @Post()
    async create( @Body() createContactDto : createContactDto ) {
       return await this.contactService.create(createContactDto)

    }

    @Get()
    async  findAll() {
        return this.contactService.findAll()
    } 

    @Get(':id') 
    async findOne( @Param('id',ParseIntPipe ) id : number ) {
        return this.contactService.findOne(id)
    }

    @Delete(':id')
    async delete( @Param('id', ParseIntPipe ) id : number ) {
     await this.contactService.delete(id)
    }

    @Put(':id') 
    async update( @Param('id', ParseIntPipe ) id : number, @Body() data : contact ) {
        await this.contactService.update(id, data)
    }
}
