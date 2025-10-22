import React from 'react'
import './workexp.css'
import Gotrade from '../../assets/gotrade.png'
import Jago from '../../assets/Jago.png'
import OCBC from '../../assets/ocbc.png'
import resumePDF from '../../assets/resume.pdf';

const workexp = () => {
  return (
    <section id='workexp'>
        <div className='linksBar' id='contact'>
            <a href='https://www.linkedin.com/in/seankdias/' target='_blank' rel='noreferrer' className='linkItem'>LinkedIn</a>
            <a id='phoneLink' href='tel:+6593851480' className='linkItem'>Phone: +65 93851480</a>
            <a id='emailLink' href='mailto:seankdias@gmail.com' className='linkItem'>Email: seankdias@gmail.com</a>
            <a href='https://github.com/seandias' target='_blank' rel='noreferrer' className='linkItem'>GitHub</a>
        </div>
        <div className='resumeRow'>
            <a href={resumePDF} target='_blank' rel='noreferrer' className='resumeLink'>View Resume (PDF)</a>
        </div>
        <span className='workexpTitle'>Internships</span>

        <div className='workexpContainer'>

            {/* OCBC Experience */}
            <div className='workexpItem'>
                <img src={OCBC} alt='OCBC' className='workexpImg'/>
                <div className='workexpText'>
                    <h2>Digital Solutions Intern</h2>
                    <h3>OCBC Bank — Global Transaction Banking | May 2025 – Aug 2025</h3>
                    <ul>
                        <li>Supported end-to-end rollout of a tokenised-deposits product: assisted UAT planning and execution (designed and ran 163 test cases), maintained GTM docs, coordinated defect triage, and aligned product, engineering, risk, and operations to hit launch readiness.</li>
                        <li>Built executive-level market landscaping and pitch decks targeting major government agencies and strategic enterprise accounts; insights shaped product positioning and were used in high-stakes outreach and RFPs.</li>
                        <li>Optimised internal intranet experience by mapping end-to-end journeys and service blueprints; identified 10+ system inefficiencies and proposed future-state flows adopted into solution design.</li>
                        <li>Researched the digital-money space (CBDC, tokenised deposits) and delivered leadership/client briefings with actionable recommendations.</li>
                    </ul>
                </div>
            </div>
            
            {/* Gotrade Experience */}
            <div className='workexpItem'>
                <img src={Gotrade} alt='Gotrade' className='workexpImg'/>
                <div className='workexpText'>
                    <h2>ML/AI Engineer</h2>
                    <h3>Gotrade Indonesia | May 2024 – Aug 2024</h3>
                    <ul>
                        <li>Developed a financial summary model using Python, OpenAI API, Neo4j, and tokenization; combined graph analytics with LLM text processing to generate comparative metrics and achieve over 60% LTST accuracy.</li>
                        <li>Cleaned and preprocessed large-scale financial datasets (pandas, NumPy), improving data quality by 30% and reducing model error by 20%.</li>
                        <li>Researched and prototyped on Azure ML and Devin to assess feasibility, selecting the most effective AI solution for deployment.</li>
                    </ul>
                </div>
            </div>

            {/* Bank Jago Experience */}
            <div className='workexpItem'>
                <img src={Jago} alt='Jago' className='workexpImg'/>
                <div className='workexpText'>
                    <h2>Data Science Intern</h2>
                    <h3>Dkatalis / PT Bank Jago tbk, Singapore | Jan 2023 – Jun 2023</h3>
                    <ul>
                        <li>Executed advanced data extraction to enhance KYC identification efforts using SQL and Python.</li>
                        <li>Co-developed machine learning models (Logistic Regression, Random Forest, XGBoost) to predict customer engagement propensity.</li>
                        <li>Integrated containerization and deployment via Docker and Kubernetes, enabling scalable testing of ML models and rapid iteration during development.</li>
                        <li>Utilized Postman to validate API endpoints and verify data integrity, ensuring robust end-to-end model performance.</li>
                    </ul>
                </div>
            </div>


        </div>
    </section>
  )
}

export default workexp
