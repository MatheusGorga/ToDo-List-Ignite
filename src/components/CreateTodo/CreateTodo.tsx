import { PlusCircle } from 'phosphor-react';
import { ChangeEvent, FormEvent, useState } from 'react';
import styles from './CreateTodo.module.css';

export function CreateTodo() {
  const [createTodo, setCreateTodo] = useState('');
  const [newTextTodo, setNewTextTodo] = useState('');

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault();
    setCreateTodo(newTextTodo);
    console.log(createTodo);
  }

  return (
    <div className={styles.form}>
      <form onSubmit={handleCreateTodo}>
        <input
          onChange={(e) => setNewTextTodo(e.target.value)}
          placeholder='Adicione uma nova tarefa'
          type='text'
        />
        <button type='submit'>
          Criar <PlusCircle size={24} />
        </button>
      </form>
    </div>
  );
}
