import { MapContainer, Marker, Popup } from 'react-leaflet';
import './Home.scss';
import { latLngGeom } from '../../../assets/border-belgium';
import * as lbc from 'leaflet-boundary-canvas/src/BoundaryCanvas.js';
import * as L from 'leaflet';

const Home = () => {
    const northEast = L.latLng([51.50, 6.42]);
    const southWest = L.latLng([49.5, 2.55]);
    const bounds = L.latLngBounds(southWest, northEast);
    const osmUrl = 'http://a.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png';


    const initLayer = map => {
        L.TileLayer.boundaryCanvas(osmUrl, {
            boundary: latLngGeom,
        }).addTo(map);
    };

    return (
        <div style={ {height: '1000px'} }>
        <MapContainer center={[50.5, 4.48]} scrollWheelZoom={false} bounds={bounds} whenCreated={initLayer}>
            <Marker position={[50.5, 4.48]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div> 
    );
};
export default Home;