import React from 'react';
import { Map, MapCameraChangedEvent, Marker } from '@vis.gl/react-google-maps';
import Container from "../layout/Container";
import SearchBar from "../components/SearchBar";

const Buy = () => {
  const center = {
    lat: 32.060668,
    lng: -81.0639547
  };

  return (
    <Container>
      <main className='buy'>
        <SearchBar/>
        <Map
          style={{width: '100%', height: '100%'}}
          defaultZoom={12}
          defaultCenter={center}
          onCameraChanged={(ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }
        >
          <Marker position={center} />
        </Map>
      </main>
    </Container>
  );
};

export default Buy;