import localforage from 'localforage'
import Connection from '../../models/connection'

let store = {
    connections: Array<Connection>()
}

class Storage {
    private static isInitialized = false;

    static async getConnections(): Promise<Array<Connection>> {
        await this.init();
        return store.connections;
    }

    static async addConnection(connection: Connection) {
        await this.init();
        if (this.shouldAddConnection(connection)) {
            store.connections.push(connection);
            console.info(`Element: ${connection} added to connections!`);
            this.storeAll();
        } else {
            console.info(`Element: ${connection} already saved!`);
        }
    }

    private static async storeAll() {
        return this.setConnections(store.connections);
    }

    private static shouldAddConnection(connection: Connection): boolean {
        if(store.connections !== null) {
            return store.connections.filter((conn) => {
                return conn.from === connection.from && conn.to === connection.to
            }).length === 0;
        }
        return true;
    }

    private static async setConnections(connections: Array<Connection>): Promise<boolean> {
        return localforage.setItem("connections", connections)
            .then(() => {
                return true;
            })
            .catch(() => {
                return false;
            })
    }

    private static async getConnectionsFromStorage(): Promise<any> {
        return localforage.getItem("connections")
            .then((value: any) => {
                store.connections = value;
                return value;
            })
            .catch(() => {
                return [];
            })
    }

    private static async init() {
        if (this.isInitialized) return;

        let connections = await this.getConnectionsFromStorage();
        if (!Array.isArray(connections) || connections.length < 1) {
            console.log("No Connections Saved!");
            store.connections = [];
        } else {
            console.log(`Loaded Connections. Count: ${connections.length}`);
            store.connections = connections;
        }

        this.isInitialized = true;
    }
}

export default Storage;
