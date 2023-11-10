import { List } from "../_components"
import { useApi } from "../_hooks"

export const ChatList = ({ value, onSelect, ...props }) => {
  const { data } = useApi("chat")

  return (
    <List {...props}>
      <List.Item selected={!value} onFocus={() => onSelect("")}>
        <List.Item.Title>New chat</List.Item.Title>
        <List.Item.Subtitle>Start a new chat with a model.</List.Item.Subtitle>
      </List.Item>

      {data?.map(({ id, name, last_message }) => (
        <List.Item key={id} selected={value === "" + id} onFocus={() => onSelect(id)}>
          <List.Item.Title>{name}</List.Item.Title>
          <List.Item.Subtitle>{last_message || "\xa0"}</List.Item.Subtitle>
        </List.Item>
      ))}
    </List>
  )
}
