import { Injectable } from '@angular/core';
import * as nonEconomicalDetails from '../../non-economical-trade.json';
import * as cashFlowDetails from '../../cash-flow-data.json';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    countries: any;

    constructor() {
    }

    getNonEconomicalDetails() {
        return nonEconomicalDetails.data;
    }

    getCashFlowDetails() {
        return cashFlowDetails.data;
    }
}
