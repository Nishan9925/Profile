import { Link } from "react-router-dom";
import styles from "./styles.module.css";
// import { SkillsLangCardItem} from '../SkillsLangCardItem'

const SkillsLangCard = () => {
    return (
        <div className={styles.cardContainer}>
            <div className={styles.cardHeader}>
                <p className={styles.header}>{heading}</p>
                <div className={styles.headerLinks}>
                    <p>+</p>
                    <p>edit</p> {/* stex petqa linen Linkery import arac*/}
                </div>
            </div>
            {items.map((item, index) =>(
                <SkillsLangCardItem
                key={index}
                title={item.title}
                text={item.text}
                />
            ))}
            <Link to={addSkill} className={styles.addSkill}> + Add Skill </Link>
            <Link to={seeMoreHref} className={styles.seeMore}>See More</Link>
        </div>
    )
}

export default SkillsLangCard;