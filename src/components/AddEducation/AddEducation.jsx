import React, {useState} from 'react';
import styles from './styles.module.css';
import Education from '../Education/Education';


const AddEducation = () => {
    const [cancelButton, setCancelButton] = useState(true);
    const toggleComponents = () => {
        setCancelButton(!cancelButton);
    }
    
    return (
        <>
            {cancelButton ? (
            <div className={styles.addEducationContainer}>
                <h1 className={styles.addEducationTitle}>
                    Add Your Education
                </h1>
                <div className={styles.addEducationItemsContainer}>
                    <div className={styles.addEducationItems}>
                        <div className={styles.addEducationItemsTitleContainer}>
                            <p className={styles.addEducationItemsTitle}>Title</p>
                            <input className={styles.addEducationItemsTitleInput} type="text" placeholder="Ex: Graphic Designer" />
                        </div>
                        <div className={styles.addEducationItemsCompanyContainer}>
                            <p className={styles.addEducationItemsCompany}>Company</p>
                            <input className={styles.addEducationItemsCompanyInput} type="text" placeholder="Ex: Picsart" />
                        </div>
                        <div className={styles.addEducationItemsLocationContainer}>
                            <p className={styles.addEducationItemsLocation}>Location</p>
                            <input className={styles.addEducationItemsLocationInput} type="text" placeholder="Ex: Armenia" />
                        </div>
                        <div className={styles.addEducationItemsDatesContainer}> 
                            <div className={styles.addEducationItemsDatesContainerItems}>
                                <div className={styles.addEducationItemsStartDateContainer}>
                                    <p className={styles.addEducationItemsStartDateTitle}>Start Date</p>
                                    <input type = "date" className={styles.addEducationItemsStartDateInput}/>
                                </div>
                                <div className={styles.addEducationItemsEndDateContainer}>
                                    <p className={styles.addEducationItemsEndDateTitle}>End Date</p>
                                    <input type = "date" className={styles.addEducationItemsEndDateInput}/>
                                </div>
                             </div>
                             <div className={styles.addEducationItemsCheckboxContainer}>
                                <input type="checkbox" id="date" name="date" value="date"/>
                                <label for="date" className={styles.addEducationItemsCheckbox}>I am currently working in this role</label>
                             </div>
                        </div>
                        <div className={styles.addEducationItemsDescriptionContainer}>
                            <p className={styles.addEducationItemsDescriptionTitle}>Description</p>
                            <input className={styles.addEducationDescriptionItemsInput} type="text"/>
                        </div>
                        <div className={styles.addEducationItemsButtons}>
                            <button className={styles.addEducationItemsButtonsCancel} onClick={toggleComponents}>Cancel</button>
                            <button className={styles.addEducationItemsButtonsSave}>Save</button>
                        </div>
                    </div>
                </div>
            </div>
        ) : <Education/>}
        </>
    )
};

export default AddEducation;