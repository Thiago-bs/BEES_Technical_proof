import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity('beers')
export default class Beer{

    @PrimaryGeneratedColumn('increment')
    id: number;
    
    @Column()
    name: string;
    
    @Column()
    detail: string;
    
    @Column()
    cost: number;
    
    @Column()
    promotion: string;
    
    @Column()
    image_url: string;

    @Column()
    amount: number;
 
}