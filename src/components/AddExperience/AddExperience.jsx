import React, {useState} from "react";
import styles from './styles.module.css';
import Experience from "../Experience/Experience";
    const AddExperience = () => {
        const [cancelButton, setCancelButton] = useState(true);
        const toggleComponents = () => {
            setCancelButton(!cancelButton);
        }
        return(
            <>
            {cancelButton ? (
            <div className={styles.addExperienceContainer}>
                <h1 className={styles.addExperienceTitle}>
                    Add Work Experience
                </h1>
                <div className={styles.addExperienceItemsContainer}>
                    <div className={styles.addExperienceItems}>
                        <div className={styles.addExperienceItemsTitleContainer}>
                            <p className={styles.addExperienceItemsTitle}>Title</p>
                            <input className={styles.addExperienceItemsTitleInput} type="text" placeholder="Ex: Graphic Designer" />
                        </div>
                        <div className={styles.addExperienceItemsCompanyContainer}>
                            <p className={styles.addExperienceItemsCompany}>Company</p>
                            <input className={styles.addExperienceItemsCompanyInput} type="text" placeholder="Ex: Picsart" />
                        </div>
                        <div className={styles.addExperienceItemsLocationContainer}>
                            <p className={styles.addExperienceItemsLocation}>Location</p>
                            <input className={styles.addExperienceItemsLocationInput} type="text" placeholder="Ex: Armenia" />
                        </div>
                        <div className={styles.addExperienceItemsDatesContainer}> 
                            <div className={styles.addExperienceItemsDatesContainerItems}>
                                <div className={styles.addExperienceItemsStartDateContainer}>
                                    <p className={styles.addExperienceItemsStartDateTitle}>Start Date</p>
                                    <input type = "date" className={styles.addExperienceItemsStartDateInput}/>
                                </div>
                                <div className={styles.addExperienceItemsEndDateContainer}>
                                    <p className={styles.addExperienceItemsEndDateTitle}>End Date</p>
                                    <input type = "date" className={styles.addExperienceItemsEndDateInput}/>
                                </div>
                             </div>
                             <div className={styles.addExperienceItemsCheckboxContainer}>
                                <input type="checkbox" id="date" name="date" value="date"/>
                                <label for="date" className={styles.addExperienceItemsCheckbox}>I am currently working in this role</label>
                             </div>
                        </div>
                        <div className={styles.addExperienceItemsDescriptionContainer}>
                            <p className={styles.addExperienceItemsDescriptionTitle}>Description</p>
                            <input className={styles.addExperienceDescriptionItemsInput} type="text"/>
                        </div>
                        <div className={styles.addExperienceItemsButtons}>
                            <button className={styles.addExperienceItemsButtonsCancel} onClick={toggleComponents}>Cancel</button>
                            <button className={styles.addExperienceItemsButtonsSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : <Experience/>}
        </>
    )
}
export default AddExperience;


