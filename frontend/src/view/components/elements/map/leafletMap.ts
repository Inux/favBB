import m from 'mithril';
import * as L from 'leaflet';


class LeafletMap implements m.ClassComponent {
    isInitialized = false;
    map: any = {};

    onMapClick(e: any) {
		L.popup()
			.setLatLng(e.latlng)
			.setContent("You clicked the map at " + e.latlng.toString())
			.openOn(this.map);
	}

    onupdate() {
        if(this.isInitialized === true) return;

        this.map = L.map('leafletMap').setView([46.6754, 8.1355], 8);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.map);

        this.map.setMaxBounds(this.map.getBounds());

        //L.marker([51.5, -0.09]).addTo(map)
        //    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
        //    .openPopup();

        this.map.on("click", this.onMapClick.bind(this));

        this.isInitialized = true;
    }

    oninit() {
        m.redraw();
    }

    onremove() {
        this.isInitialized = false;
    }

    view() {
        return m("div", { class: "box" },
            m("div", { class: "leaflet-map", id: "leafletMap" })
        )
    }
}

export default LeafletMap;