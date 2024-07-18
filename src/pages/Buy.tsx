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
          defaultZoom={13}
          defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
          onCameraChanged={ (ev: MapCameraChangedEvent) =>
            console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
          }>
        </Map>
      </main>
      {/*<SearchBar/>
      <Map
        style={{width: '100%', height: '100%'}}
        defaultZoom={13}
        defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
        onCameraChanged={ (ev: MapCameraChangedEvent) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
      </Map>*/}
    </Container>
  );
};

export default Buy;
