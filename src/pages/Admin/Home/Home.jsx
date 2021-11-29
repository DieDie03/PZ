import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import './Home.scss';

const Home = () => {


    return (
        <div style={ {height: '1000px'} }>
        <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://tile.openstreetmap.be/osmbe-fr/{z}/{x}/{y}.png"
                
            />
            <Marker position={[50, 4]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
        </div> 
    );
};
export default Home;