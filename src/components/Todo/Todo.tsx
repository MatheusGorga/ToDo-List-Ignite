import { CheckCircle, Circle, Trash } from 'phosphor-react';
import { useState } from 'react';
import styles from './Todo.module.css';

export function Todo() {
  const [finish, setFinish] = useState(false);

  function handleFinish() {
    setFinish(!finish);
  }

  return (
    <div className={styles.todo}>
      <button title='finalizado' onClick={handleFinish}>
        {finish ? <CheckCircle size={24} /> : <Circle size={24} />}
      </button>
      <span>
        {' '}
        sakdjalkjsdklajsdlkajsdlkjalsdkjalskdjlaksjsakdjalkjsdklajsdlkajsdlkjalsdkjalskdjlaksj{' '}
        sakdjalkjsdklajsdlkajsdlkjalsdkjalskdjlaksj{' '}
      </span>
      <button title='Deletar comentário'>
        <Trash size={24} />
      </button>
    </div>
  );
}
