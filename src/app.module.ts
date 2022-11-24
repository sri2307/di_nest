import { Module } from '@nestjs/common';
import { PowerModule } from './power/power.module';
import { CpuModule } from './cpu/cpu.module';
import { DiskModule } from './disk/disk.module';
import { ComputerModule } from './computer/computer.module';

@Module({
  imports: [ComputerModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
