import Tools from '../utils/tools.js';

let tools = new Tools

export default class Entity {

    constructor(uuid) {
      this.uuid = tools.create_uuid();
    }
}
