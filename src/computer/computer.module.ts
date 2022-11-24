import { Module } from '@nestjs/common';
import { ComputerService } from './computer.service';
import { ComputerController } from './computer.controller';
import { PowerModule } from 'src/power/power.module';
import { DiskModule } from 'src/disk/disk.module';
import { CpuModule } from 'src/cpu/cpu.module';

@Module({
  providers: [ComputerService],
  controllers: [ComputerController],
  imports:[CpuModule,DiskModule]
})
export class ComputerModule {}
