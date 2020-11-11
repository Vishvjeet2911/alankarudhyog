import { Time } from '@angular/common';

export interface ChallanDataFields{
    challan_no:  string;
    challan_date:  string;
    challan_time:  Time;
    unit:  number;
    selectParty:  string;
    party_name:  string;
    party_address:  string;
    party_mobile:  string;
    party_name_hindi:  string;
    party_address_hindi:  string;
    vehicleInfo:  string;
    driver_name:  string;
    driver_mobile:  string;
    productInfo:  string;
    qty:  string;
    rate:  string;
    total_amount:  string;
    paymentMethod:  string;
    advance_amount:  string;
    balance_sheet:  string;
    remark:  string;
    ravana_number:  string;
    Weight:  string;
    Royalty_amount:  string;
    id: number;
}