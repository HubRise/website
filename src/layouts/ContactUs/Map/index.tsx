import Image from "next/image"
import { useLayoutEffect } from "react"

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

  useLayoutEffect(() => {
    let map
    const google = (window as any)?.google

    const initMap = async () => {
      const position = { lat: 43.6214593381594, lng: 7.0392507747754625 }
      const { Map } = await google.maps.importLibrary("maps")
      const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

      map = new Map(document.getElementById("map") as HTMLElement, {
        zoom: 17,
        center: position,
        mapId: "contact-us-map",
        disableDefaultUI: true,
      })

      new AdvancedMarkerElement({
        map: map,
        position: position,
      })

      const styledMapType = new google.maps.StyledMapType(mapStyles)
      map.mapTypes.set("styled_map", styledMapType)
      map.setMapTypeId("styled_map")
    }

    initMap()
  }, [])

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
        <div id="map" style={{ height: "100%" }} />
      </MapWrapper>
    </MapContainer>
  )
}

export default Map
