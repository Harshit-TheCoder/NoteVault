import React from "react";
// import Modals from "./modal.jsx";
import LangButton from "./langbutton.jsx";
import "../css/links.css";
    
    const Links = () => {
        const files = [
          { name: 'C', file: 'https://drive.google.com/file/d/1EAnr61tatHVoO1zDeTrQSVWWJar2eWnM/preview', lang: "C" },
          { name: 'C++', file: 'https://drive.google.com/file/d/1UvHqsjoxUkWMeCLJgF2ilLZdYdgEertb/preview', lang: "C++" },
          { name: 'JAVA', file: 'https://drive.google.com/file/d/1dKsZ1ajhh5q6OOxEtworvdaeXab5rFRW/preview', lang: "JAVA" },
          { name: 'React', file: 'https://drive.google.com/file/d/1jk0LoEZDVJuAnpF0M4OQPBse-jpk5pu6/preview', lang: "WEB" },
          { name: 'SQL', file: 'https://drive.google.com/file/d/1jy3qK9qpljtPrAx5TrOuC5IBwtjYdMM-/preview', lang: "WEB" },
          { name: 'NODEJS', file: 'https://drive.google.com/file/d/1k1NOgDNGJ2zSIR_SFfY-TCenRFJDnKvy/preview', lang: "WEB" },
          { name: 'C SHORT NOTES', file: 'https://drive.google.com/file/d/1k2QkRSw-qpw272OC_1egLT4JNzuIeTBI/preview', lang: "C" },
          { name: 'HTML CSS JS', file: 'https://drive.google.com/file/d/1k2HHdinQxCvrf5542CwiaQXLvDvdg2sl/preview', lang: "WEB" },
          { name: 'JAVA GUI', file: 'https://drive.google.com/file/d/1jqq1QtSfwTNs4ANPovJDbJurHkPxL5Nv/preview', lang: "JAVA" },
          { name: 'PYTHON SHORT NOTES', file: 'https://drive.google.com/file/d/1jnyRargd0JRbun0Bk_nO2tOsam5_klaO/preview', lang: "PYTHON" },
          { name: 'JAVA SHORT NOTES', file: 'https://drive.google.com/file/d/1jqBbCM7riltg4cC2hA9sV-Nqj8vre6u-/preview', lang: "JAVA" },
          { name: 'C++ TEMPLATES', file: 'https://drive.google.com/file/d/1pm-hiqaPFTfoRia7sxINNNnkPEHZe-Hn/preview', lang: "C++" },
          { name: 'C++ NOTES 2', file: 'https://drive.google.com/file/d/1OORBaHcMMYqeRMXEhcndXeLLwjTWoZtI/preview', lang: "C++" },
          { name: 'C++ INHERITANCE', file: 'https://drive.google.com/file/d/1lkytpzBtxCWhG90w7aFEWbs0mtL5kyGO/preview', lang: "C++" },
          { name: 'C++ NOTES 3', file: 'https://drive.google.com/file/d/1tVjknpuHbamRqcZr8T1z_KRU_Dnk9NRB/preview', lang: "C++" },
          { name: 'ML PART 1', file: 'https://drive.google.com/file/d/1NmQwBlGYZ0wfHLXZ6Sou3hM2U-tmePwQ/preview', lang: "ML" }
        ];
      
        const groupedFiles = files.reduce((acc, file) => {
          acc[file.lang] = acc[file.lang] || [];
          acc[file.lang].push(file);
          return acc;
        }, {});
      
        return (
            <div className="grid-container">
            {Object.keys(groupedFiles).map((lang) => (
              <LangButton key={lang} lang={lang} files={groupedFiles[lang]} />
            ))}
          </div>
        );
};
export default Links;