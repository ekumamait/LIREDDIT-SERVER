import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./constants";
import { Author } from "./entities/Author";
import microConfig from "./mikro-orm.config";

const main = async () => {
    const orm = await MikroORM.init(microConfig);
    await orm.getMigrator().up();
    // const author = orm.em.create(Author, {name: "Jon Jones"});
    // orm.em.persistAndFlush(author);

    const author = await orm.em.find(Author, {})
    console.log(author);
    
}

main().catch((err) => {
    console.error(err, "XXXXXXXX");
})
