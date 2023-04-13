import React from "react";
import GoogleMapReact from 'google-map-react';
import PlaceIcon from '@mui/icons-material/Place';

type LocationType = {
    lat: number;
    lng: number;
    text: string;
}

const Location = ({lat, lng, text}:LocationType) => (
    <PlaceIcon htmlColor='#ff3333' sx={{fontSize:'50px',}}/>
    // <div style={{
    //   color: 'white', 
    //   background: 'grey',
    //   padding: '15px 10px',
    //   display: 'inline-flex',
    //   textAlign: 'center',
    //   alignItems: 'center',
    //   justifyContent: 'center',
    //   borderRadius: '100%',
    //   transform: 'translate(-50%, -50%)'
    // }}>
    //   {text}
    // </div>
  );

export default function SimpleMap() {

  const defaultProps = {
    // Centre of the Map
    center: {
      lat: 22.3322737,
      lng: 114.1612853,
    },
    zoom: 18
  };

  return (
    // Important! Always set the container height explicitly
    // <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{key: `${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`}}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        yesIWantToUseGoogleMapApiInternals
        options={{minZoom:16,}}
      >
        <Location
          // Location of the Destination
          lat={22.333139631160396}
          lng={114.1607688786462}
          text="CCMS"
        />
      </GoogleMapReact>
    // </div>
  );
}