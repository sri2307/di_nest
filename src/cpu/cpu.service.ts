import { Injectable } from '@nestjs/common';
import { PowerService } from 'src/power/power.service';

@Injectable()
export class CpuService {
    constructor(private powerService:PowerService){}

    compute(multiple:number){
        const value= this.powerService.getSupply(10)
        return `${value} ${multiple}`
    }
}
