import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, DeleteDateColumn, BaseEntity } from "typeorm";

@Entity('cat')
export class Cat extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({name: 'nombre'})
    name: string;

    @Column({name: 'tamaño'})
    size: number;

    @Column({name: 'hogar'})
    house: string;

    @Column({name: 'dueño'})
    owner: string;

    @CreateDateColumn({name: 'creado en'})
    createdAt: Date;

    @UpdateDateColumn({name: 'actualizado en'})
    updatedAt: Date;

    @DeleteDateColumn({name: 'eliminado en'})
    deletedAt: Date;
}