import { DataSource } from "typeorm"
import { Cat } from "./entity/cat"

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "locopera123",
    database: "postgres",
    entities: [Cat],
    synchronize: true
});
