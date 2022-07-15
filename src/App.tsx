import { Header } from './components/Header/Header';
import { Todo } from './components/Todo/Todo';
import './global.css';
import styles from './App.module.css';
import { FormEvent, useState } from 'react';
import { PlusCircle } from 'phosphor-react';
import { v4 as uuidv4 } from 'uuid';

function App() {
  const [newTextTodo, setNewTextTodo] = useState('');

  const [tasks, setTasks] = useState([
    {
      id: uuidv4(),
      todo: 'Aprovado',
      completed: false,
    },
    {
      id: uuidv4(),
      todo: 'Começar',
      completed: true,
    },
  ]);

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault();
    const text = newTextTodo;
    setTasks([...tasks, { id: uuidv4(), todo: text, completed: false }]);
  }

  function deleteTodo(idDelete: string) {
    const DeleteAll = tasks.filter((task) => task.id != idDelete);
    setTasks(DeleteAll);
  }

  function isCompleted(idCompleted: string) {
    const newListTask = tasks.map((task) =>
      task.id == idCompleted
        ? {
            ...task,
            completed: !task.completed,
          }
        : task
    );

    setTasks(newListTask);
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
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

        <div className={styles.info}>
          <section>
            <p>Tarefas criadas</p> <span>{tasks.length}</span>
          </section>

          <section>
            <p>Concluídas</p>
            <span>
              {tasks.filter((task) => task.completed == true).length} de{' '}
              {tasks.length}
            </span>
          </section>
        </div>
        {tasks.map((task) => {
          return (
            <Todo
              key={task.id}
              id={task.id}
              todoMessage={task.todo}
              completed={task.completed}
              onDeleteTodo={deleteTodo}
              onCompleted={isCompleted}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
