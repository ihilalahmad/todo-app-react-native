export interface ITodoItemProps {
  id: string;
  title: string;
  isCompleted: boolean;
}

export interface IAddTodoDialogProps {
  visible: boolean;
  hideDialog: () => void;
}

export interface ITodoType {
  id: string;
  title: string;
  isCompleted: boolean;
}
