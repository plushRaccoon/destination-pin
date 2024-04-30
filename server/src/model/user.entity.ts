import { Entity, Column, OneToMany, PrimaryColumn, Unique } from 'typeorm';
import { Session } from './session.entity';
import { BaseEntity } from './base.entity';

@Entity()
@Unique(['email'])
export class User extends BaseEntity {
  @PrimaryColumn({ type: 'uuid', nullable: false })
  id: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @OneToMany(() => Session, (session) => session.user)
  sessions: Session[];
}
