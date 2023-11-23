export interface MessageTemplate {
  id: string
  thumbnail: string
  name: string
  createdBy: string
  date: string
  sent: number
  opened: number
  viewed: number
  liked: number
  clicked: number
  replied: number
}

export type ModalTypes = "new" | "rename" | "delete" | ""

export interface MenuItemSpec {
  name: string
  icon: React.ComponentType
  color: string
  hoverColor: string
}
