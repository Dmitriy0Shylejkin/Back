import { Column, DataType, Model, Table } from 'sequelize-typescript';

interface TaskCreationAttrs {
  text: string;
  isComplete: boolean;
}

@Table({ tableName: 'tasks' })
export class Task extends Model<Task, TaskCreationAttrs> {
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

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
}
