import React from 'react';
import {Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';
import Container from "../layout/Container";

const Buy = () => {
  return (
    <Container>
      <Map
        style={{width: '600px', height: '600px'}}
        defaultZoom={13}
        defaultCenter={ { lat: -33.860664, lng: 151.208138 } }
        onCameraChanged={ (ev: MapCameraChangedEvent) =>
          console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
        }>
      </Map>
    </Container>
  );
};

export default Buy;
