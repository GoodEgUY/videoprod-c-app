import React from "react"
import "./casespage.css"
import { Tabs, TabContent, TabLink } from "react-tabs-redux";
import fashion from "../../assests/casesBase/fashion.json";
import reels from "../../assests/casesBase/reels.json";
import content from "../../assests/casesBase/content.json";
import other from "../../assests/casesBase/other.json";

import CaseCard from "./CaseCard/CaseCard";

const CasesPage = () => {


    
    return (

<div className="cases">
          <Tabs>
            <div className="aboutDashboard">
              <div className="aboutDashboardNav">
                <TabLink to="fashion">
                  <p>Іміджеві</p>
                </TabLink>
                <TabLink to="reels">
                  <p>Reels</p>
                </TabLink>
                <TabLink to="content">
                  <p>Контент</p>
                </TabLink>

                <TabLink to="other">
                  <p>Щось інше</p>
                </TabLink>
              </div>
              <div className="aboutDashboardScreen">
                {/* fashion Cases */}
                <TabContent for="fashion">
                  <div className="caseCategoryPage">
                    <div className="casePage">
                    {
                        fashion.map((obj) => (
                           <CaseCard key={obj.id} name={obj.name} title={obj.title} image={obj.image}/> 
                        ))
                      }
                    </div>
                  </div>
                </TabContent>
                {/* fashion Cases */}

                {/* reels Cases */}
                <TabContent for="reels">
                  <div className="caseCategoryPage">
                    <div className="casePage">
                       
                      {
                        reels.map((obj) => (
                           <CaseCard key={obj.id} name={obj.name} title={obj.title} image={obj.image}/> 
                        ))
                      }
                    </div>
                  </div>
                </TabContent>
                {/* reels Cases */}

                {/* content Cases */}
                <TabContent for="content">
                  <div className="caseCategoryPage">
                    <div className="casePage">
                    {
                        content.map((obj) => (
                           <CaseCard key={obj.id} name={obj.name} title={obj.title} image={obj.image}/> 
                        ))
                      }
                    </div>
                  </div>
                </TabContent>
                {/* content Cases */}

                {/* Other Cases */}
                <TabContent for="other">
                  <div className="caseCategoryPage">
                    <div className="casePage">
                    {
                        other.map((obj) => (
                           <CaseCard key={obj.id} name={obj.name} title={obj.title} image={obj.image}/> 
                        ))
                      }
                    </div>
                  </div>
                </TabContent>
                {/* Other Cases */}

              </div>
            </div>
          </Tabs>
        </div>
        )
    };
    export default CasesPage;