import { Model } from "sequelize-typescript";
interface DealsCreationAttrs {
    title: string;
    imageUrl: string;
    price: string;
    tiket: string;
    yieldPercent: string;
    daysLeft: string;
    sold: string;
}
export declare class Deal extends Model<Deal, DealsCreationAttrs> {
    id: number;
    title: string;
    imageUrl: string;
    price: string;
    tiket: string;
    yieldPercent: string;
    daysLeft: string;
    sold: string;
}
export {};
