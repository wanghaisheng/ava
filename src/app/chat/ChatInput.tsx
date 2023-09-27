import { css } from "@twind/core"
import { useCallback } from "preact/hooks"
import { Button, Form } from "../_components"
import { useLocalStorage } from "../_hooks"

export const ChatInput = ({ id, onSend }) => {
  const text = useLocalStorage(`chat.${id}.input`, "")

  const handleSubmit = useCallback(() => {
    onSend(text.value.trim())
    text.value = ""
  }, [onSend])

  const handleKeyDown = useCallback(
    e => {
      if (e.key === "Enter" && !e.shiftKey) {
        e.preventDefault()
        handleSubmit()
      }
    },
    [onSend]
  )

  return (
    <Form class={`vstack relative p-2 pr-16 ${autoGrow}`} onSubmit={handleSubmit} data-value={text}>
      <textarea
        class="absolute inset-0 py-2 pr-16 bg-transparent"
        rows={1}
        placeholder="Ask anything..."
        value={text}
        onInput={e => (text.value = e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button class="absolute bottom-1 right-1" style="height: 30px" submit>
        Send
      </Button>
    </Form>
  )
}

// this will render text value into an invisible pseudo element, which will
// then be used to calculate the height of the textarea
const autoGrow = css`
  &:after {
    visibility: hidden;
    content: attr(data-value) " ";
    white-space: pre-wrap;
    border: 1px solid transparent;
    max-height: 30vh;
    overflow-y: hidden;
  }
`
