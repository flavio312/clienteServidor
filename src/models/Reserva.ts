import { Model, DataTypes } from 'sequelize';
import sequelize from '../config/database';

class Reserva extends Model {
  public idReserva!: number;
  public idCliente!: number;
  public idHabitacion!: number;
  public fechaInicio!: Date;
  public fechaFin!: Date;
  public estado!: string;
}

Reserva.init({
  idReserva: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  idCliente: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  idHabitacion: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  fechaInicio: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  fechaFin: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  estado: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'Reserva',
});

export default Reserva;
