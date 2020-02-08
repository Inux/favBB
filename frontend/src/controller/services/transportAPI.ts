import m from 'mithril';


class TransportAPI {
    static async fetchLocations(query: string) {
        await m.request({
            method: "GET",
            url: "http://transport.opendata.ch/v1/locations?query="+query
        })
        .then(function(result) {
            console.log(result);
            return result;
        });
    };
}

export default TransportAPI