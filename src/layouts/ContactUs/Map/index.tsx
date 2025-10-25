import { Marker, Map as GoogleMap } from "@vis.gl/react-google-maps"
import Image from "next/image"

import Card from "@components/Card"

import { CardText, CardTitle } from "../shared/Styles"
import { TMap } from "../types"

import { MapContainer, MapWrapper, AddressImage, AddressWrapper, AddressText } from "./Styles"
import { mapStyles } from "./mapStyles"

interface MapProps {
  map: TMap
}

const Map = ({ map }: MapProps): JSX.Element => {
  const { title, description, image, address } = map

  return (
    <MapContainer>
      <Card>
        <CardTitle>{title}</CardTitle>
        <CardText>{description}</CardText>
        <AddressImage src={`/images/contact/${image}`} alt={title} width={440} height={390} />
        <AddressWrapper>
          <Image src="/images/contact/marker.svg" alt={address} width={38} height={46} />
          <AddressText>{map.address}</AddressText>
        </AddressWrapper>
      </Card>
      <MapWrapper>
        <GoogleMap
          style={{ width: "100%", height: "100%" }}
          styles={mapStyles}
          defaultCenter={{ lat: 43.6214593381594, lng: 7.0392507747754625 }}
          defaultZoom={6}
          disableDefaultUI={true}
        >
          <Marker position={{ lat: 43.6214593381594, lng: 7.0392507747754625 }} />
        </GoogleMap>
      </MapWrapper>
    </MapContainer>
  )
}

export default Map
