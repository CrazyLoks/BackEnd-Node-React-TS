// los modelos son todo lo que interactua con la base de datos
import { Table, Column, Model, DataType, Default } from 'sequelize-typescript'

@Table({ // Definimos una nueva tabla
    tableName: 'products'
})

class Product extends Model { // model es una clase
    @Column({
        type: DataType.STRING(100) // string sustituye aqui al varchar, en sequelize
    })
    declare name: string // una columna con el nombre 'name' y tipo de dato string

    @Column({
        type: DataType.FLOAT
    })
    declare price: number

    @Default(true) // si no pasamos 'availability' se pondrá true
    @Column({
        type: DataType.BOOLEAN
    })
    declare availability: boolean
}
export default Product