import Api_repository from "./crud/api_repository.js";

const get_tasks = new Api_repository();

get_tasks.get_all_tasks();
