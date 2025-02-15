"use client"

import Accordion from "@components/Accordion"
import Card from "@components/Card"
import GetInTouch from "@components/GetInTouch"
import { GetInTouchYaml } from "@components/GetInTouch/types"
import PageHero from "@components/PageHero"
import ScreenContainer from "@components/ScreenContainer"
import Underline from "@components/Underline"

import { CardTitle, Content, HighlightTitle, Title } from "./Styles"
import { FAQsYaml } from "./types"

interface FAQProps {
  yaml: FAQsYaml
  getInTouch: GetInTouchYaml
}

const FAQs = ({ yaml, getInTouch }: FAQProps): JSX.Element => {
  const content = yaml.content
  const { title, description, button_label, button_link } = getInTouch.content

  return (
    <>
      <PageHero>
        <Title>
          <HighlightTitle>{content.title_part_1} </HighlightTitle>
          {content.title_part_2}
        </Title>
      </PageHero>
      <ScreenContainer bgColor="backgroundLight" verticalPadding="big">
        <Content>
          {content.faq_sections.map(({ title, questions }, index) => {
            return (
              <Card key={index} padding="big">
                <CardTitle>{title}</CardTitle>
                <Underline />
                {questions.map((question, index) => {
                  return (
                    <Accordion key={index} title={question.question} isOpenedByDefault={question.isOpenedByDefault}>
                      <div dangerouslySetInnerHTML={{ __html: question.answer }} />
                    </Accordion>
                  )
                })}
              </Card>
            )
          })}
          <GetInTouch title={title} description={description} button_label={button_label} button_link={button_link} />
        </Content>
      </ScreenContainer>
    </>
  )
}

export default FAQs
