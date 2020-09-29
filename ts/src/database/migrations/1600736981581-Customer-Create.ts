import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CustomerCreate1600736981581 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"customers",
                columns: [
                    {
                        name: "id",
                        type: "bigint",
                        isPrimary: true,
                        isNullable: false,
                        isUnique: true,
                        isGenerated: true,
                        generationStrategy: "increment"
                    },
                    {
                        name: "name",
                        type: "varchar(50)",
                        isNullable: false
                    },
                    {
                        name: "social_name",
                        type: "varchar(50)",
                        isNullable: true
                    },
                    {
                        name: "genre",
                        type: "varchar(2)",
                        isNullable: false
                    },
                    {
                        name: "email",
                        type: "varchar(30)",
                        isNullable: false
                    },
                    {
                        name: "phone",
                        type: "varchar(25)",
                        isNullable: false
                    },
                    {
                        name: "birthday",
                        type: "date",
                        isNullable: false
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("customers");
    }

}
