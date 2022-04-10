import { Snowyflake, Epoch } from 'snowyflake';

export default class Snowflake {
    snowyflake = new Snowyflake({
        workerId: BigInt(1000),
        epoch: Epoch.Twitter
    });
    
    generateId() {
        return this.snowyflake.nextId();
    }
}