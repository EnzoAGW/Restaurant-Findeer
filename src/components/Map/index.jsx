import React, { useState } from 'react';
import { GoogleApiWrapper, Map } from 'google-maps-react';

export const MapContainer = (props) => {
  
  const [map , setMap] = useState('')
  const { google } = props;
  
  function searchByQuery() {
    
  }

  function nearbySearch(map,center){
    const service = new google.maps.places.PlacesService(map);
    
    const request = {
      location: center,
      radius:'20000',
      type:['restaurant'],
    };

    service.nearbySearch(request,(results, status) => {
      if(status === google.maps.places.PlacesServiceStatus.ok) {
        console.log('show',results)
      }  
    });
  }

  function onMapReady(_, map) {
    setMap(map);
    nearbySearch(map, map.center);
  }
  return <Map google={google} centerAroundCurrentLocation onReady={onMapReady} onRecenter={onMapReady} />
}

export default GoogleApiWrapper({
  apikey: process.env.REACT_APP_GOOGLE_API_KEY,
  lenguage: 'pt-BR',

})(MapContainer);