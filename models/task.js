export default (sequelize, DataTypes) => {
  const Task = sequelize.define('Task', {
    text: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notNull: true, notEmpty: true },
    },
    isComplete: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });

  return Task;
};
