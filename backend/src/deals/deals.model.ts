import { Column, DataType, Model, Table } from "sequelize-typescript"

interface DealsCreationAttrs {
    title: string;
    imageUrl: string;
    price: string;
    tiket: string;
    yieldPercent: string;
    daysLeft: string;
    sold: string;
}

@Table({tableName: 'deals'})
export class Deal extends Model<Deal, DealsCreationAttrs>{
    @Column({type: DataType.INTEGER, unique: true, autoIncrement: true, primaryKey: true})
    id: number;

    @Column({type: DataType.STRING, allowNull: false})
    title: string;

    @Column({type: DataType.STRING, allowNull: false})
    imageUrl: string;

    @Column({type: DataType.STRING, allowNull: false})
    price: string;

    @Column({type: DataType.STRING, allowNull: false})
    tiket: string;

    @Column({type: DataType.STRING, allowNull: false})
    yieldPercent: string; 

    @Column({type: DataType.STRING, allowNull: false})
    daysLeft: string;
    
    @Column({type: DataType.STRING, allowNull: false})
    sold: string;
}
