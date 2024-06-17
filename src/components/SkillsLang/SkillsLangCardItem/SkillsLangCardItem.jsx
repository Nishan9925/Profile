import styles from "./styles.module.css";

const SkillsLangCardItem = () => {
    return (
        <div className={styles.cardItemContainer}>
            <div>
                <Link to={addSkill}/>
            </div>            
        </div>
    )
}

export default SkillsLangCardItem;