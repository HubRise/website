import Image from "next/image"

import Button from "@components/Button"
import Card from "@components/Card"

import { Content, Description, Title, Wrapper } from "./Styles"

interface GetInTouchProps {
  title: string
  description: string
  button_label: string
  button_link: string
}

const GetInTouch = ({ title, description, button_label, button_link }: GetInTouchProps) => (
  <Card>
    <Wrapper>
      <Image src="/images/get-in-touch.png" width={185} height={162} alt={title} />
      <Content>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <Button label={button_label} link={button_link} />
      </Content>
    </Wrapper>
  </Card>
)

export default GetInTouch
