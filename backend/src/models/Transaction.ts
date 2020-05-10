import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

import Category from './Category';
import NumberTransformer from './transformers/NumberTransformer';

@Entity('transactions')
class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column()
  type: 'income' | 'outcome';

  @Column('decimal', { transformer: new NumberTransformer() })
  value: number;

  @ManyToOne(() => Category, { eager: true })
  @JoinColumn({ name: 'category_id' })
  category: Category;

  @Column('timestamp')
  created_at: Date;

  @Column('timestamp')
  updated_at: Date;
}

export default Transaction;
