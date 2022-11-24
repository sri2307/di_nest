import { Controller, Get } from '@nestjs/common';
import { CpuService } from 'src/cpu/cpu.service';
import { DiskService } from 'src/disk/disk.service';
import { PowerService } from 'src/power/power.service';

@Controller('computer')
export class ComputerController {
    constructor(private cpuService:CpuService,private diskService:DiskService){}
    @Get()
    run(){
        return [this.cpuService.compute(10),this.diskService.getDiskUsage()]
    }
}
