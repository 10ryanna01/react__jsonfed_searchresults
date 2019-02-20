import React, { Component } from "react";
import "./App.css";
import "./styles/index.scss";
import PageHeader from "./components/PageHeader/PageHeader"; 
import Search from "./components/Search/Search";
import Button from "./components/Button/Button"; 
import DropdownSelect from "./components/DropdownSelect/DropdownSelect";
import TextTitle from "./components/TextTitle/TextTitle"; 
import RangeSlideToSelect from "./components/RangeSlideToSelect/RangeSlideToSelect";

class App extends Component {
  render() {
    return (
      <div className="App">
      <div className="container">
              <header className="pageheader">
               {/* apply scafold structrue here for now */}
              
              <PageHeader />
          </header>

        <main className="mt-5 ">
          <div className="row pt-5 ">
            {/* apply scafold structrue here for now */}
            <aside className="search-facet">
              <TextTitle freeText="Monthly Budget" extraClassName="text text__title"/>
               <RangeSlideToSelect extraClassName="extra styling place holder  " freeText="&pound;" />              
              
              <TextTitle freeText="car make" extraClassName="text text__title"/>
              <DropdownSelect extraClassName="extra styling place holder" freeText="choose your car" />
              <TextTitle freeText="car model" extraClassName="text text__title"/>
              <DropdownSelect extraClassName="extra styling place holder" freeText="choose your model" />
              <TextTitle freeText="car gearbox" extraClassName="text text__title"/>
              <DropdownSelect extraClassName="extra styling place holder" freeText="choose your gearbox" />

              <TextTitle freeText="number of seats" extraClassName="text text__title"/>
               <RangeSlideToSelect extraClassName="extra styling place holder" freeTextAfter="seats" />

               <TextTitle freeText="fuel type" extraClassName="text text__title"/>
               <DropdownSelect extraClassName="extra styling place holder" freeText="choose your model" />  

               
              <Button freeText="see more filters" extraClassName="text text__link d-flex mt-5" /> 
              {/* //simplified for demo */}
            </aside>

            <section className="search search__contents  ">
              <Search extraClassName="extra styling place holder" />
              <Button freeText="refine your search" extraClassName="searchoptions searchoptions__open " />
             
            </section>
            </div>        
        </main>
        </div>
      </div>
    );
  }
}

export default App;
