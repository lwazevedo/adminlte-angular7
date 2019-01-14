import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataBase implements InMemoryDbService {
    createDb() {
        const addres = [];
        const contact = [];
        const clients = [{
            id: 1,
            name: 'teste',
            addres: addres[0],
            contact: contact[0]
        }];
        return { clients };
    }
}
