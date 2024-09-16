import styles from './Footer.module.css';

export const Footer = ({ completedTasks }) => {

    if (completedTasks) {
        return (
            <footer>
                <code className={styles.footer}>
                    Avec To-do it! tu as éliminé {completedTasks} tâche
                    {completedTasks > 1 ? "s" : ""} !
                </code>
            </footer>
        )    
    }

    return null;
    
}