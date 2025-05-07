import ContactForm from "@components/ContactForm"
import { useLayoutContext } from "@components/LayoutContext"
import Modal from "@components/Modal"
import useTranslation from "@hooks/client/useTranslation"

const LayoutForms = (): JSX.Element => {
  const { t } = useTranslation()
  const { forms } = useLayoutContext()

  return (
    <>
      {forms.contact.isVisible && (
        <Modal title={t(`forms.contact.modal_title`)} onClose={forms.contact.toggle}>
          <ContactForm />
        </Modal>
      )}
    </>
  )
}

export default LayoutForms
