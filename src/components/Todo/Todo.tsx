import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Todo.module.css';

interface todoProps {
  id: string | any;
  todoMessage: string;
  completed: true | false;
  onDeleteTodo: (id: string) => void;
  onCompleted: (id: string) => void;
}

export function Todo({
  id,
  todoMessage,
  completed,
  onDeleteTodo,
  onCompleted,
}: todoProps) {
  function handleDelete() {
    onDeleteTodo(id);
  }

  function isCompleted() {
    onCompleted(id);
  }

  return (
    <div className={styles.todo}>
      <button title='finalizado' onClick={isCompleted}>
        {completed ? <CheckCircle size={24} /> : <Circle size={24} />}
      </button>
      <span className={completed ? `${styles.completed}` : ''}>
        {todoMessage}
      </span>
      <button title='Deletar comentário' onClick={handleDelete}>
        <Trash size={24} />
      </button>
    </div>
  );
}
