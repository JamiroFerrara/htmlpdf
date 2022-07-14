export interface Client {
    name: string;
    address: string;
}

export interface Cession {
    id: number;
    description: string;
    value: number;
}

export interface Anchor {
    id: number;
    name: string;
    longDescription: string;
}

export interface Payment {
    id: number;
    longDescription: string;
}

export interface PaymentList {
    payment: Payment;
    value: number;
}

export interface MaterialList {
    code: string;
    description: string;
    qty: number;
    year: number;
    loadedQty: number;
    unloadedQty: number;
    um: string;
    category: string;
    extendedDescription: string;
    capacity: number;
    categoryEnum: number;
    technicalInfoFilePath: string;
}

export interface Responsable {
    id: number;
    name: string;
    offerCode: string;
    signFilePath: string;
    cell: string;
    mail: string;
}

export interface Offer {
    id: number;
    client: Client;
    plantAddress: string;
    cession: Cession;
    status: number;
    version: number;
    description: string;
    storePresent: boolean;
    storeQty: number;
    plantPower: number;
    date: Date;
    offerCode: string;
    priceNoTax: number;
    taxValue: number;
    anchor: Anchor;
    paymentList: PaymentList[];
    materialList: MaterialList[];
    responsable: Responsable;
    offerFilesPath: string;
    administrativeCosts: number;
}
