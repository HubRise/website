"use client"

import { useEffect, useRef, useState } from "react"

import Accordion from "@components/Accordion"
import Card from "@components/Card"
import GetInTouch from "@components/GetInTouch"
import { GetInTouchYaml } from "@components/GetInTouch/types"
import Icon from "@components/Icon"
import PageHero from "@components/PageHero"
import ScreenContainer from "@components/ScreenContainer"
import Underline from "@components/Underline"
import { iconSizes } from "@utils/styles"

import { CardTitle, Content, ExpandIconWrapper, GetInTouchWrapper, Reply } from "./Styles"
import { FAQsYaml, TQuestion } from "./types"

interface FAQProps {
  yaml: FAQsYaml
  getInTouch: GetInTouchYaml
}

type TSectionExpanding = {
  isExpanded: boolean
}

const FAQs = ({ yaml, getInTouch }: FAQProps): JSX.Element => {
  const [sectionsExpanding, setSectionsExpanding] = useState<TSectionExpanding[]>([])
  const accordionRef = useRef<HTMLDivElement[]>([])
  const content = yaml.content
  const { title, description, button_label, button_link } = getInTouch.content

  useEffect(() => {
    setSectionsExpanding(
      content.faq_sections.map(() => {
        return {
          isExpanded: false,
        }
      }),
    )
  }, [content])

  const handleAddRefToArray = (el: HTMLDivElement | null) => {
    let nbElements = 0
    content.faq_sections.forEach((section) => {
      nbElements += section.questions.length
    })

    if (el !== null && accordionRef.current.length < nbElements) {
      accordionRef.current.push(el)
    }
  }

  const handleClickExpandIcon = (questions: TQuestion[], id: number) => {
    questions.forEach((question: TQuestion) => {
      if (
        accordionRef.current[question.id].getAttribute("data-is-expanded") === String(sectionsExpanding[id].isExpanded)
      ) {
        accordionRef.current[question.id].click()
      }
    })

    setSectionsExpanding(
      sectionsExpanding.map((section, sIdx) => (id === sIdx ? { isExpanded: !section.isExpanded } : section)),
    )
  }

  return (
    <>
      <PageHero
        title={
          <>
            <span>{content.hero.title.part_1}</span> {content.hero.title.part_2}
          </>
        }
      />
      <ScreenContainer>
        <Content>
          {content.faq_sections.map(({ title, questions }, sIdx) => {
            return (
              <Card key={sIdx} padding="big">
                <CardTitle
                  $isExpanded={sectionsExpanding[sIdx]?.isExpanded}
                  onClick={() => handleClickExpandIcon(questions, sIdx)}
                >
                  {title}
                  <ExpandIconWrapper>
                    <Icon code="expand_more" size={iconSizes._25} color="#263238" />
                  </ExpandIconWrapper>
                </CardTitle>

                <Underline />

                {questions.map((question, qIdx) => {
                  return (
                    <Accordion key={qIdx} title={question.question} ref={(el) => handleAddRefToArray(el)}>
                      <Reply dangerouslySetInnerHTML={{ __html: question.answer }} />
                    </Accordion>
                  )
                })}
              </Card>
            )
          })}
        </Content>
      </ScreenContainer>

      <GetInTouchWrapper>
        <GetInTouch title={title} description={description} button_label={button_label} button_link={button_link} />
      </GetInTouchWrapper>
    </>
  )
}

export default FAQs
