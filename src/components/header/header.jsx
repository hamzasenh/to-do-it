import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div>
            <h1>To-do it!</h1>
            <div className='color-gray'>
                <code>Eliminez le chaos, suivez le flux.</code>
            </div>
        </div>
      </div>
      <code className='color-primary'>
        v.1.0
      </code>
    </div>
  )
}
