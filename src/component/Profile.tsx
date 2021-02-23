import styles from '../styles/components/Profile.module.css'

export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img 
            src="https://avatars.githubusercontent.com/u/65416000?s=460&u=6be05508f64036856c8a210517e479aac32858b6&v=4" 
            alt="DevZeth"/>
            <div>
                <strong> 
                    José Lucas
                </strong>
                
                <p>
                <img src="icons/level.svg" alt=""/>
                    Level 1
                </p>
            </div>
        </div>
    )
}