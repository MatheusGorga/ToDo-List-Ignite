import { Header } from './components/Header/Header';
import { Todo } from './components/Todo/Todo';
import './global.css';
import styles from './App.module.css';
import { CreateTodo } from './components/CreateTodo/CreateTodo';

function App() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <CreateTodo />

        <div className={styles.info}>
          <section>
            <p>Tarefas criadas</p> <span>0</span>
          </section>

          <section>
            <p>Concluídas</p>
            <span>0 de 0</span>
          </section>
        </div>
        <Todo />
      </div>
    </>
  );
}

export default App;
