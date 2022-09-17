import { Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryGeneratedColumn, DeleteDateColumn, BaseEntity } from "typeorm";

@Entity('cat')
export class Cat extends BaseEntity {
    @PrimaryGeneratedColumn({ type: 'bigint' })
    id: number;

    @Column({
        name: 'nombre',
        type: 'varchar',
        unique: true
    })
    name: string;

    @Column({
        name: 'tamaño',
        type: 'numeric'
    })
    size: number;

    @Column({
        name: 'hogar',
        type: 'varchar'
    })
    house: string;

    @Column({
        name: 'dueño',
        type: 'varchar'
    })
    owner: string;

    @CreateDateColumn({
        name: 'creado en',
        type: 'date'
    })
    createdAt: Date;

    @UpdateDateColumn({
        name: 'actualizado en',
        type: 'date'
    })
    updatedAt: Date;

    @DeleteDateColumn({
        name: 'eliminado en',
        type: 'date'
    })
    deletedAt: Date;
}
