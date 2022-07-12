import styles from './CreateTodo.module.css';

export function CreateTodo() {
  return (
    <div className={styles.form}>
      <form action=''>
        <input placeholder='Adicione uma nova tarefa' type='text' />
        <button> Criar </button>
      </form>
    </div>
  );
}
