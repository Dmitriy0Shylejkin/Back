import { Sequelize, DataTypes } from 'sequelize';
import config from '../config/config';
import Task from './task';

const sequelize = new Sequelize(config.development);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Task = Task(sequelize, DataTypes);

export default db;
