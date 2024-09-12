import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TaskCreationAttrs {
  text: string;
  isComplete: boolean;
}

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreationAttrs> {
  @Column({
    type: DataType.STRING,
    allowNull: false,
    validate: { notNull: true, notEmpty: true },
  })
  text: string;

  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
    defaultValue: false,
  })
  isComplete: boolean;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  createdAt: Date;

  @Column({
    type: DataType.DATE,
    defaultValue: DataType.NOW,
    allowNull: false,
  })
  updatedAt: Date;
}
