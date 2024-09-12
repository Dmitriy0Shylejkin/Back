import { Column, Model, Table } from 'sequelize-typescript';

interface TaskCreationAttrs {
  text: string;
  isComplete: boolean;
}

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreationAttrs> {
  @Column
  text: string;

  @Column
  isComplete: boolean;

  @Column
  createdAt: Date;

  @Column
  updatedAt: Date;
}
