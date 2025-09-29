import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { NoteService } from './note.service';
import { Note } from './note.entity';

@Controller('notes')
export class NoteController {
  constructor(private readonly noteService: NoteService) {}

  @Get()
  findAll(): Promise<Note[]> {
    return this.noteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Note> {
    return this.noteService.findOne(+id);
  }

  @Post()
  create(@Body() noteData: Partial<Note>): Promise<Note> {
    return this.noteService.create(noteData);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() noteData: Partial<Note>): Promise<Note> {
    return this.noteService.update(+id, noteData);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<void> {
    return this.noteService.remove(+id);
  }
}
