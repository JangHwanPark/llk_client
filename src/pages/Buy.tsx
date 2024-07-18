import React from 'react';
import {Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import Container from "../layout/Container";
import SearchBar from "../components/SearchBar";

const Buy = () => {
  return (
    <Container>
      <main className='buy'>
        <SearchBar/>
        <Map
          style={{width: '100%', height: '100%'}}
          defaultZoom={12}
          defaultCenter={ {
            lat: 32.09773731821971,
            lng: -81.07777755982066
        } }
          onCameraChanged={ (ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }>
        </Map>
      </main>
    </Container>
  );
};

export default Buy;
