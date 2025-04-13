import React, { useState, useCallback, useRef } from 'react';
import { GoogleMap } from '@react-google-maps/api';

const mapContainerStyle = {
  width: '100%',
  height: '400px',
};

const LocationPicker = () => {
  const [location, setLocation] = useState(null);
  const [address, setAddress] = useState('');
  const mapRef = useRef(null);
  const markerRef = useRef(null);

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const coords = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          setLocation(coords);
          getAddressFromCoordinates(coords.lat, coords.lng);
        },
        (error) => {
          console.error('Error getting location:', error);
          alert('Location access denied or unavailable.');
        }
      );
    } else {
      alert('Geolocation is not supported by this browser.');
    }
  };

  const getAddressFromCoordinates = useCallback((lat, lng) => {
    if (!window.google || !window.google.maps) {
      console.error('Google Maps JavaScript API is not loaded.');
      return;
    }

    const geocoder = new window.google.maps.Geocoder();
    const latlng = { lat, lng };

    geocoder.geocode({ location: latlng }, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          setAddress(results[0].formatted_address);
        } else {
          setAddress('No address found');
        }
      } else {
        console.error('Geocoder failed due to:', status);
        setAddress('Unable to fetch address');
      }
    });
  }, []);

  const onMapLoad = (map) => {
    mapRef.current = map;

    if (location && window.google?.maps?.marker?.AdvancedMarkerElement) {
      // Create or update AdvancedMarkerElement
      if (markerRef.current) {
        markerRef.current.position = location;
      } else {
        markerRef.current = new window.google.maps.marker.AdvancedMarkerElement({
          map,
          position: location,
        });
      }
    }
  };

  return (
    <div className="p-4 bg-white rounded-lg shadow-md">
      <button
        onClick={getLocation}
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 mb-4"
      >
        Share My Location
      </button>

      <div>
        {location ? (
          <>
            <GoogleMap
              mapContainerStyle={mapContainerStyle}
              center={location}
              zoom={15}
              onLoad={onMapLoad}
            />
            <p className="mt-2 text-gray-600">
              Latitude: {location.lat.toFixed(4)} | Longitude: {location.lng.toFixed(4)}
            </p>
            <p className="mt-2 text-green-600 font-semibold">
              📍 Address: {address}
            </p>
          </>
        ) : (
          <p className="text-gray-500">Click the button to share your location.</p>
        )}
      </div>
    </div>
  );
};

export default LocationPicker;
