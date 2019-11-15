import React, { useState } from 'react';
import { Platform } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default function Search({ onLocationSelected }) {
    const [searchFocused, setSearchFocused] = useState(false);

    return (
        <GooglePlacesAutocomplete
            placeholder="Para onde?"
            placeholderTextColor="#555"
            onPress={onLocationSelected}
            query={{
                // key: 'AIzaSyBX-bO-GN-mL7t6bbLG0zNKTsD6r2q9i7o',
                key: 'AIzaSyCrFjKi6by7gdmNtA3oX7MMCq1wQfYQfdw',
                language: 'pt',
            }}
            textInputProps={{
                onFocus: () => {
                    setSearchFocused(true);
                },
                onBlur: () => {
                    setSearchFocused(false);
                },
                autoCapitalize: 'none',
                autoCorrent: false,
            }}
            listViewDisplayed={searchFocused}
            fetchDetails
            enablePoweredByContainer={false}
            styles={{
                container: {
                    position: 'absolute',
                    top: Platform.select({ ios: 70, android: 60 }),
                    width: '100%',
                },
                textInputContainer: {
                    flex: 1,
                    backgroundColor: 'transparent',
                    height: 54,
                    marginHorizontal: 20,
                    borderTopWidth: 0,
                    borderBottomWidth: 0,
                },
                textInput: {
                    height: 54,
                    margin: 0,
                    borderRadius: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 0,
                    marginRight: 0,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    borderWidth: 1,
                    borderColor: '#DDD',
                    fontSize: 18,
                    color: '#333',
                },
                listView: {
                    borderWidth: 1,
                    borderColor: '#DDD',
                    backgroundColor: '#FFF',
                    marginHorizontal: 28,
                    elevation: 5,
                    shadowColor: '#000',
                    shadowOpacity: 0.1,
                    shadowOffset: { x: 0, y: 0 },
                    shadowRadius: 15,
                    marginTop: 10,
                },
                description: {
                    fontSize: 16,
                    color: '#333',
                },
                row: {
                    padding: 20,
                    height: 58,
                },
            }}
        />
    );
}
