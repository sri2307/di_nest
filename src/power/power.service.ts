import { Injectable } from '@nestjs/common';

@Injectable()
export class PowerService {
    getSupply(supply:number){
        return `Supply ${supply}`
    }
}
