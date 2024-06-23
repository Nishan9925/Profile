import React, {useState} from "react";
import styles from './styles.module.css';
import Language from '../Language/Language';


const AddLanguage = () => {
    const [languageTypes, setLanguageTypes] = useState([
        "Please select", "Elementary proficiency", "Limited working proficiency",
        "Professional working proficiency", "Full Professional proficiency", "Native or bilingual proficiency"
    ]);
    const [addLanguageButton, setAddLanguageButton] = useState(true);
    const toggleComponents = () => {
        setAddLanguageButton(!addLanguageButton);
    }
    const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    if (selectedOption === option) {
      setSelectedOption(null); // Deselect the option if it's already selected
    } else {
      setSelectedOption(option); // Select the new option
    }
    setIsOpen(false); // Close the dropdown after selection
  };
  const options = ['Option 1', 'Option 2', 'Option 3'];
    return (
        <>
            {addLanguageButton ? (
                <div className={styles.AddLanguageContainer}>
                    <div className={styles.AddLanguageHeader}>
                        <p className={styles.AddLanguageTitle}>Language</p>
                    </div>
                    <div className={styles.AddLanguageItemsContainer}>
                        <div className={styles.AddLanguageItemsContainerLanguageInput}>
                            <h3 className={styles.AddLanguageItemsContainerTitle}>Language</h3>
                            {/* <input className={styles.AddLanguageInput} type="text"/> */}
                            <div className={styles.dropdown}>
      <div className={styles.dropdownToggle} onClick={toggleDropdown}>
        {selectedOption || 'Select an option'}
      </div>
      <ul className={`${styles.dropdownMenu} ${isOpen ? styles.open : ''}`}>
        {options.map((option, index) => (
          <li 
            key={index} 
            onClick={() => handleOptionClick(option)} 
            className={`${styles.dropdownItem} ${selectedOption === option ? styles.selected : ''}`}
          >
            {option}
          </li>
        ))}
      </ul>
    </div>
                        </div>
                        <div className={styles.AddLanguageItemsContainerTypes}>
                            <h3 className={styles.AddLanguageItemsContainerTypesTitle}>Proficiency</h3>
                            <div className={styles.AddLanguageItemsContainerTypesItems}>
                            {languageTypes.map((languageTypes, index) => (
                                <div className={styles.AddLanguageItemsContainerTypesContainer} key={index}>
                                    <input className={styles.AddLanguageItemsContainerTypesItemsInput} type="checkbox"/>
                                    <p className={styles.AddLanguageItemsContainerTypesItemsText}>{languageTypes}</p>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div className={styles.AddLanguageButtons}>
                            <button className={styles.AddLanguageButtonCancel} onClick={toggleComponents}>Cancel</button>
                            <button className={styles.AddLanguageButtonSave}>Save</button>
                        </div>
                    </div>
                </div>
            ) : <Language/> }

        
        </>
    )
}
export default AddLanguage;