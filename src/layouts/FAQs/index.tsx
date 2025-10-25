"use client"

import { useState } from "react"

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
import { FAQsYaml } from "./types"

interface FAQProps {
  yaml: FAQsYaml
  getInTouch: GetInTouchYaml
}

type TExpandedState = {
  expanded: boolean
  questionsExpanded: boolean[]
}

const FAQs = ({ yaml, getInTouch }: FAQProps): JSX.Element => {
  const content = yaml.content
  const { title, description, button_label, button_link } = getInTouch.content

  const [sectionExpansions, setSectionExpansions] = useState<TExpandedState[]>(() =>
    content.faq_sections.map((section) => ({
      expanded: false,
      questionsExpanded: section.questions.map(() => false),
    })),
  )

  const handleSectionClick = (sectionIdx: number) => {
    setSectionExpansions((prevState) => {
      const newState = [...prevState]
      const currentSection = newState[sectionIdx]
      const newSectionExpanded = !currentSection.expanded

      newState[sectionIdx] = {
        expanded: newSectionExpanded,
        questionsExpanded: currentSection.questionsExpanded.map(() => newSectionExpanded),
      }

      return newState
    })
  }

  const handleQuestionToggle = (sectionIdx: number, questionIdx: number) => {
    setSectionExpansions((prevState) => {
      const newState = [...prevState]
      const currentSection = newState[sectionIdx]

      const newQuestionsExpanded = [...currentSection.questionsExpanded]
      newQuestionsExpanded[questionIdx] = !newQuestionsExpanded[questionIdx]

      const allExpanded = newQuestionsExpanded.every((expanded) => expanded)

      newState[sectionIdx] = {
        expanded: allExpanded,
        questionsExpanded: newQuestionsExpanded,
      }

      return newState
    })
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
          {content.faq_sections.map(({ title, questions }, sectionIdx) => (
            <Card key={sectionIdx} padding="big">
              <CardTitle
                $isExpanded={sectionExpansions[sectionIdx]?.expanded}
                onClick={() => handleSectionClick(sectionIdx)}
              >
                {title}
                <ExpandIconWrapper>
                  <Icon code="expand_more" size={iconSizes._25} color="#263238" />
                </ExpandIconWrapper>
              </CardTitle>

              <Underline />

              {questions.map((question, qIdx) => (
                <Accordion
                  key={qIdx}
                  title={question.question}
                  expanded={sectionExpansions[sectionIdx]?.questionsExpanded[qIdx]}
                  onExpandedChange={() => handleQuestionToggle(sectionIdx, qIdx)}
                >
                  <Reply dangerouslySetInnerHTML={{ __html: question.answer }} />
                </Accordion>
              ))}
            </Card>
          ))}
        </Content>
      </ScreenContainer>

      <GetInTouchWrapper>
        <GetInTouch title={title} description={description} button_label={button_label} button_link={button_link} />
      </GetInTouchWrapper>
    </>
  )
}

export default FAQs
