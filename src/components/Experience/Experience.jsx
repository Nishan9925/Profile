import React, { useState } from 'react';
import styles from './styles.module.css';
import AddExperience from '../AddExperience/AddExperience';
const Experience = () => {
    const [experience, setExperience] = useState([
        {
            title: 'USER EXPERIANCE DESIGNER',
            type: 'Full time ',
            companyName: 'Company name',
            location: 'Yerevan',
            period: 'Feb 2021 - Dec 2023 2 yrs 11 mos',
        },
        {
            title: 'USER EXPERIENCE DESIGNER',
            type: 'Full time',
            companyName: 'Company name',
            location: 'Yerevan',
            period: 'Feb 2021 - Dec 2023 2 yrs 11 mos',
          },
    ]);
    const[AddExperienceButton, setAddExperienceButton] = useState(true);
    const toggleComponents = () => {
        setAddExperienceButton(!AddExperienceButton);
    }
    return (
    <>
        {AddExperienceButton ? (        
            <div className={styles.experienceContainer}>
                <div className={styles.experienceHeader}>
                    <h3 className={styles.experienceHeaderTitle}>Experience</h3>
                    <div className={styles.experienceButtons}>
                        <button className={styles.addButton} onClick={toggleComponents}> +
                            {/* {AddExperienceButton? "":<AddExperience/>} */}
                        </button>
                        <p className={styles.editButton}>+</p>
                    </div>
                </div> 
                {experience.map((exp, index) => (
                    <div className={styles.experienceItem} key={index}>
                        <div className={styles.experienceInfo}>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="66" height="55" viewBox="0 0 66 55" fill="none">
                            <rect width="66" height="55" rx="6.36585" fill="url(#pattern0_4_180)"/>
                            <defs>
                            <pattern id="pattern0_4_180" patternContentUnits="objectBoundingBox" width="1" height="1">
                            <use xlink:href="#image0_4_180" transform="matrix(0.00454545 0 0 0.00545455 0 0.0798686)"/>
                            </pattern>
                            <image id="image0_4_180" width="220" height="220" xlink:href="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD/2wBDAAoHBwkHBgoJCAkLCwoMDxkQDw4ODx4WFxIZJCAmJSMgIyIoLTkwKCo2KyIjMkQyNjs9QEBAJjBGS0U+Sjk/QD3/2wBDAQsLCw8NDx0QEB09KSMpPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT3/wAARCADcANwDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD2SiiigAooooAKKKKACiiigAooqre30VlHukOWP3UHU1FSpGnFym7JDjFydkWGYKCWICjkknpWVd69DFlbdfNb+8eFH+NZF7qE9837w4QdEHQf41m3d0IBtT/WH/x2vm8VnU5vkw6t5npUcCvtl2+1645DzHJ/5Zx/KPxrElvZpM7n2r3A4pLe3mvblYYEMkznpn8yT6V2WmeGbTT0Et0FnnHJZ/ur9Af5nmuehhK2LlzSd/NnXOpRwqtbXschapebhJZx3O7+/ErfzFbFv4h1bT8C9gkkiHXzYyp/76x/OupfUbOLhriPjspz/KozrNj08/P/AAA/4V6UMPTw/wAOIs/Vflc5J4l1fipXX9dbCaZrVpqijyHxJjJjbhh/iPpWhXO3dvot44ljl+zXAOVliUqQfpjBq7peoSPIbW7eKSRVyk8Z+WQe47N7flXfQxab5JyT80/6sclSirc0E15P+tTVoooruOcKKKKACiiigAooooAKKKKACiiigAooooAKKKDQA2R1jRncgKoyT6CqWnai1+0xEWyNCArZ6/8A1/8AGqGv33P2VDgD5pMevYVetgml6SrS9VXc3ux7f0rzPrbqYlwi7Qgve9e3yOj2XLTTa1ew/UdQSxhyQGkb7ievufauXmmkuJWklYszdSadc3Ml1O0sh+Zu3YD0qKvnMxzCWKnZaRWy/U9HD0FSWu5HPMIIi569APU1mpDLcuWx1PLHpWg8All3y8qv3V7fU1LXDGfKtNzrUuVaD9PlfTYGS32rI/35cfMfQD0FLJNJM2ZXZz6sc1HRTnXqTXLKWnYz5VfmtqLSUUViMWkoooAsQX1zbY8qZgPQnI/KtS28Q9Fuox/vp/hWKgUsA5IX1Az+laMOji6Tda3kUmOoKkEfWvTwVfGJ/uHfyuvyf6HNWhR+2rHQwXEVxHvhdXX27VLXLNZ3+nOJUVhj+KP5h+Namnayl0RFPhJex7N/hX0OGzJTkqVePJLz2ZwVMPZc0HdGrRQKK9U5gooooAKKKKACiiigAooooAKiuZlt7eSVuiAn61LmsbxBcgW6QqwJZ8tg9Mdv1Fc2Mr+woSqdl+PQ0pQ55qJkW4N3qEQc5MkgLfnk1b1y98+68lD+7iOPq3f/AAqlaTfZrhZgMlAdv1wQKhJz3r4tYhxw8qa3k9fRf8E9h071FLoloFFJS1xmolFSwW8t1KI4ULN+g+prdtPD8UYDXLGVv7o4Uf4124XAVsU/cWnfoY1a8KfxHPAbjhcsfQDJqYWVywyLaYj/AHDXXxwxwrtiRUHooxTq9mHD8be/P7kcjx76ROMe1njGXhlUepQ1HXb4qvcWFvc/62JSf72MH86mrw+7fu5/ev6/Iccf/Mjj6K2L3QZIgXtSZF/un7w+nrWQQQcHII7V4eIwtXDy5aisdtOrGorxYU6OR4nDxuVYdCDzTaSsE2ndFtXOh0/W1mIiusK/Z+gP19KuT6Za3EiyPENwOcrxn6461yVbOk6sYytvctlOiuT932PtX0OBzONW1HFK/Zv9f8zz6+GcPfpaHQCigGivpzzgooooAKKKKACiiigAozRTJ5UggeWQ4RFLMfYUm7ahuZ2s6lJbeVZ2eDe3J2x55CDux+lYuowJZzLbRksIkG5mOS7Hksfc5qbw2X1PVrzVJxyMRoP7ue34DA/E1Dqjb9TuD6Pj8uK+bzSq6mG9p/M7L0X+bPUoQ9nU9n2Wvr/wCrSUUV82doVYs7SS9nEcfHdm7KPWoPTAJJ6Ad66zTbEWVqqnHmNy59T/APWr0stwP1uraXwrf/I58RW9lHTdktpaRWcIjhXA7k9WPqanopCcZJ6V9rCEYRUYqyR47bbuxaM1k3evwxEpbr5rD+LOF/8Ar1nPr14x+Uxr7BP8a86tm+FpPlvd+R0QwtSSvax0+aK5yHxBcKR5qRuPYYNbFlqUF6MIdrjqjdf/AK9a4bMsPiHywlr2ehFTD1KerRbrM1TSlulMsIAnH/j/ANfetOiuivQp14OFRaEQnKD5onDkEEgggjsaStrXrII4uoxgMcP9fWsavhcXhpYaq6cuh7VKoqkVJCUtJURuAk3ly8Z5VuxrnSb2NUrnS6HqJlAtpj86j5Ce49K2a4lHaKRXQkMpyD7111ldLeWqSrwSPmHoe9fWZNjnWh7Gb1X4r/gHk4ujyPmWzLFFFFe4cYUUUUAFFFFABWF4uujDpAiU4M7hT9Byf5Ct2uW8aglbP0Bf+lceYTcMNNr+r6HThIqVaKZZ8Ggf2RIe5nbP5Cs/UR/xMbj/AK6GpPBl4Fa5tGPLYlT37H+lGrrs1Sf0JB/MCvBxzU8BSa6O35nbFOOKmn1KVFLRXgHWX9Ft/P1FCwysY3n69v8APtXU1h+HE+S4k7lgv6Z/rW4K+zyakoYVS/mu/wBDyMXLmq27CZrA1vUS8jWsTfIvEhHc+n0rbnk8mCSX+4pb8q4xmLEljknkmsM7xUqVNUo/a39C8FSUpOT6BSUUtfJnqCU5HaNwyMVZTkEdRSUlNNp3QM6zS777dbBmwJE4cD19au1zGhTmPUVTPyyKVI9+orpxX3GWYp4jDqUt1ozxcTTVOo0tiG6gFzbSQt0dSPx7VxpBBIPUda7g1yGop5eo3Cj++T+fNebn9JcsKnyOnAy1cSrVe+i8y3LD7yc/h3qxQRkEetfNRdnc9JOzM61vDEQkhynY+ldLoV35N15RPyTdPr2rA1LSnsUinjy1tMMo390/3TSaddMjBM8qdyH3Hau+PPha0ai3X4r/AIYVWEa9N8vU9FFFNjcSRI69GUEU6vt001dHzwUUUUwCiiigArB8U23n2kR9CRn36j+Vb1VNStvtNhIgHzAbl+orkx1J1cPOK3t+WprQnyVFI87triWyukmiO2WJsjP8jXQ395DqPlXcHG9NrqeqsOx/Osq8tfN/eRj5+49arWMmy4wej8V8h7dyoyp9Hr8z3pQU2p9UadFFFcBJ0Hhw/wCizj/ppn9BWzXP+HZds80RP3lDD8Ov866Cvt8pmpYSFul1+J42KVqrK2oKX0+4A6+Wa4+u4YbgQeQeorjry2a0unib+E8H1HY15mf0neFVbbHTgZrWJBRRRXzZ6AUUUUAXNJUtqtvjsSf0NdYKwvD1qTI90w4A2J/U/wBK3q+xySi6eG5n1dzycZJSqWXQQ1ymrnOqT/7w/kK6sn16VxlzL59zLL/fYmsM/mlShDu/yX/BLwK99siooor5U9M3tOgj1HQpLWYZXcy59O4P4ZripI5LS6aN+JInKn6g123hs/ubhf8AbB/T/wCtXNeKEEeu3O3+IK2PcqK+hrQVTA0qvVafn/kc+Gk4150+j1O10xt+l2resSn9KtVBYwm2sLeE9Y41U/gKnr6SlFxpxi+iR5E2nJtBRRRWhIUUUUAFIaWigDlNWtPsl6wUYR/mX+orJuLMSnfH8sg59jXaanZfbbUqv+sX5kPv6fjXKEFSQQQRwQa+LzPCvC13KPwy1X+R7OErc8PNDI2LICww3ce9OpaSvLZ0k9ncG1u45h0U8j1HeuxVg6hlOVIyCO9cRW3oeo4AtZTj/nmT/KvdyTGKlN0Z7Pb1/wCCcOMo8y510N2qWo6cl/H/AHZV+639DV0UV9PVpQqwcJq6Z5sZOLujjLi1ltX2TIVPYnofoahrtpI1kUq6hlPUEZFVH0axc5+zgfQkf1r5ytkE7/upK3mehDHK3vI5Q8deK0LDSZbxgzgxw92PVvp/jW9FptpAwaO3Td6kZI/Orda4bIlGXNXlfyRFTHXVoIZFEkMaxxgKijAAp9FMlkSKJpJGCooySa+g0iuyRw6tlPWLoW1iwB+eT5V/qa5arWoXrX1yZDkIOEX0FVK+JzPGfWq14/CtF/mexhqXs4a7sKKKK846Dd8OD93cH/aUfoayfI/tjxnJgZhhcM57YTAA/Fh/Ortpe/2Zoc84BaaSTZCgGSz4AGB/npWhoGlHS7H9781zMd8re/p+H+NfWYOl7WhRpdF7z/Gy+Z585+zlOp1ei/U1aKKK9084KKKKACiiigAooooAD0rE1rTCxN1CvP8Ay0Ud/etukNc2Kw0MTTdOf/DGlKo6cuZHEUVt6po2S01oPdox/Mf4ViYr4nFYSphZ8k18+57NKrGorxEpc4PvSUVzGhvabrYIEV4cHoJOx+v+NbQYEAggg9CDXEVYtb+4tD+6kIX+6eR+Ve9gs7lTShXV136/8E4a2DUtYaHYUVhw+Iu08H4of6GrA1+zP/PUf8Br24ZnhZq6mvnocbw1VfZNSisl/ENqB8qSsfoBVO48QTuCIUWMep+Y/wCFTVzbC018V/TUccLVl0Ny5uobSPfM4Udh3P0Fc1qGpyXzAY2RKflTP6mqksskzl5XZ2PcmmV89js2qYlckdI/n6nfQwsaer1YtJS0leQdQqqWOFGTRmtHT7bFnd3bD5VjZE+pHJ/pVS0t/tV3FCOjNz9O9dLw0kod5bffZGaqK8vI29M0pV+z3MzM7pH+6Qj5YyeSR7n1rXFIowAB0pa+7o0Y0YKEeh4s5ubuwooorUgKKKKACiiigAooooAKr3yzvbMLVwsvY1YoNTOPPFxvuNOzuYdvrjxOYr6Jgy8FlHP4ipbiDT9Uy8U6JMe4OCfqDV280+G9TEi4YdHXgisC80e4tSSq+bGP4lHI+orwcUsTRg41YqrD8V/Xc7aXs5u8Xyv8CG6064tCS6ZT++vI/wDrVWNGfQ0V81UcHK8FZet/8j0Y3S95iUUUVmUFFFFABRS0jEKu5iFX1JpgLSf0qnLfFmEdsMseNx/pVqKPy4wucnuT3NU4tLUpq24+pLe3e6nSGP7zHr6DuaYqlmCqCzE4AHUmun0rThYwkvgzP94+nsK7cvwMsVUt9lbs5sRWVKPmV9X2Wekpax8BiFHuByT/AJ9aZ4ftCEa6Yct8qfTuf8+lQ3QbWNX8mMnyovlZvQZ5P1J4rfjRY41RAAqjAA7Cvfw9FYjFuvb3IaR+X+Rw1JezpKHV6scKKKK9o4wooooAKKKKACiiigAooooAKKKKACiiigCpc6Za3WTJEA395eDWZceHtoZoZ8gDOGXn9K3qCK4q+X4evrOOvfb8jaFepDZnIQ6fPdQiW2CTIeMq3IPoQcEH2pTpd6P+XWT9P8a2NQ0iQzNeaZMbe7P3h/BL/vD196oJ4pks5fI1WyeKUd4+/uAf6GvGqZVhqbtUbj59Py0+Z3Qr1Jq9Oz8upXGk3rdLZvxIH9anj0C7f75jjHu2f5VcHivSyM+ZKD6GM1Tu/GUKqRZ27u3ZpeFH4Dk/pT+oZdTXNKpf5/5IFPFSdlG39eZNPpllplsZ7+dmUdFX5dx9B3Jrkry6N3cNJsWNeiovRR6f/Xpb2+uNQn825kLv0Udh7AVPaWWwiSbgjop7fWuDE1qK92jHlj+LO2jTdNc1R3Y6ytvLXzHHznoPQVdjjeWRY41LO3RRVuy0m4vMNjy4j/Gw6/Qd66KzsILFMRL8x+855JqsJldbFPnn7sf62Oevi4w21ZW0zSVsx5kmGnI69l9h/jWlijFFfWUKEKEFTpqyR5E5ym+aQxIkQsURVLHLEDGT70+iitUktESFFFFMAooooAKKKKACiiigAooooAKKKKACiiigAooooAKhubSC8iMdxEkqejDNTUUmk1ZjTad0c5deDbWQk208sP8Ast84/wAf1qkPBdxu5u4iPZCK7CiuKeW4abvy29Dpjja8VbmOctfCawkFpxnuVTJ/M1q22j2lsQwj8xx/E/P6dKvYop0suw1J80Ya+ev5kTxNWfxMMUUUV2mAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH/2Q=="/>
                            </defs>
                        </svg>
                            {/* <div className={styles.experienceTitle}> */}
                                {/* <img src="" alt="Company Logo" className={styles.companyLogo} /> */}
                            {/* </div> */}
                            <div className={styles.experienceDetails}>
                                <div className={styles.experienceDetailsTitle}>
                                    <h4>{exp.title}</h4>
                                    <p>{exp.type}</p>
                                </div>
                                <p>{exp.companyName}</p>
                                <p style={{color: "#868686"}}>Location {exp.location} </p>
                                <p style={{color: "#868686"}}>{exp.period}</p>
                                <p style={{color: "#868686"}}>{exp.duration}</p>
                            </div>
                        </div>
                    </div>
            ))}
                    <div className={styles.seeMore}>
                        See More
                    </div>
            </div>
      ):<AddExperience/>}
      </>
    )
};

export default Experience;
