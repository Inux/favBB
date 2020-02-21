import m from 'mithril';


class TransportAPI {
    static async fetchLocations(query: string): Promise<any> {
        let result = await m.request({
            method: "GET",
            url: "http://transport.opendata.ch/v1/locations?query="+query
        })
        .then((result) => {
            return result;
        })
        .catch(() => {
            return {};
        });

        return result;
    };

    static async fetchConnections(from: string, to: string): Promise<any> {
        let result = await m.request({
            method: "GET",
            url: `http://transport.opendata.ch/v1/connections?from=${from}&to=${to}`
        })
        .then((result) => {
            return result;
        })
        .catch(() => {
            return {};
        })
        return result;
    }
}

export default TransportAPI