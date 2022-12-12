import React from 'react';
import { useState, useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import "../styles/GlobalFilter.scss";
import FilterCardsCpt from './FilterCardsCpt';
import NestedDropdown, { NestedDropdownLevelTwoListModel, NestedTreeDropdownListModel } from './NestedDropdownCpt';
import SHDatePicker from './SHDatePickerCpt';
import ToggleSwitch from './ToggleSwitchCpt';
import "../styles/FilterCard.scss";


// Region STATIC DATA and Types starts here......
const regionList: NestedTreeDropdownListModel[] = [
  {
    title: "South Asia",
    children: [
      {
        title: "South Asia All",
        children: []
      },
      {
        title: "Bhutan",
        children: [
          "Bhutan All",
          "Thimphu",
          "Paro"
        ]
      },
      {
        title: "India",
        children: [
          "India All",
          "New Delhi",
          "Mumbai",
          "Chennai",
          "Bangalore"
        ]
      }
    ]
  }
]

export interface RegionListModel {
  region: string;
  countries_of_opertation: CountriesOfOperationsModel[];
}

export interface CountriesOfOperationsModel {
  country: string;
  city: string[];
}

// Region STATIC DATA and Types ends here......

// Themes STATIC DATA and Types starts here......
const themeList = [
  {
    title: "Front Office",
    children: [
      "Call Centers"
    ]
  },
  {
    title: "Client Government",
    children: [
      "SLAs",
      "Audits"
    ]
  },
  {
    title: "Back Office",
    children: [
      "Applications",
      "Turnaround Time",
      "Incidents"
    ]
  },
  {
    title: "Customers",
    children: [
      "Surveys",
      "Complaints",
      "Appreciations",
      "Social Media"
    ]
  },
  {
    title: "Services",
    children: [
      "Service Catalog"
    ]
  }
];

export interface ThemeListModel {
  name: string;
  json_agg: string[];
}
// Themes STATIC DATA and Types ends here......

export interface GlobalFilterModel {
  onRegionChange: (loc: string) => void,
  onPopoverToggleChange: (status: boolean) => void
}

const GlobalFilter = (props: GlobalFilterModel) => {  
  let isFnCallEnded = false;
  const [cardVisible,setCardVisibility]=useState(false)
  const [filterData, setFilterData] = useState([])
  const [regionData, updateRegionData] = useState<NestedTreeDropdownListModel[]>([]);
  const [themeData, updateThemeData] = useState<NestedTreeDropdownListModel[]>([]);

  useEffect(() => {
    updateRegionData(parseRegionNestedData(regionList));
    updateThemeData(parseThemeNestedData(themeList));
  }, []);

  const parseRegionNestedData = (regionList: any[]): NestedTreeDropdownListModel[] => {
    const regionNestedData: NestedTreeDropdownListModel[] = [];

    for (let index = 0; index < regionList.length; index++) {

      const element = regionList[index];

      regionNestedData.push(
        {
          title: element.title,
          children: element.children
        }
      );
      if (Array.isArray(element.children) && element.children.every((item:any)=> typeof item == 'string')) {
        isFnCallEnded = true;
      } else {        
        isFnCallEnded = false;
      }
      if (!isFnCallEnded) {
        parseRegionNestedData(element.children)
      }
    }
    console.log('regionNestedData',regionNestedData)
    return regionNestedData;
  }

  const parseThemeNestedData = (themeList: any[]): NestedTreeDropdownListModel[] => {
    const themeNestedData: NestedTreeDropdownListModel[] = [];
    
    for (let index = 0; index < themeList.length; index++) {

      const element = themeList[index];

      themeNestedData.push(
        {
          title: element.title,
          children: element.children
        }
      );
      if (Array.isArray(element.children) && element.children.every((item:any)=> typeof item == 'string')) {        
        isFnCallEnded = false;
      } else {
        isFnCallEnded = true;
      }
      if (!isFnCallEnded) {
        parseThemeNestedData(element.children)
      }
    }
    return themeNestedData;
  }

  const onRegionChange = (loc: string) => {
    props.onRegionChange(loc);
  }

  const onPopoverToggleChange = (status: boolean) => {
    props.onPopoverToggleChange(status);
  }

  const isCardVisible = (value:boolean, data:any) => {
    setCardVisibility(value)
    setFilterData(data)
  }

  return (
    <>
    <aside className='global-filter-wrapper'>
      <section className='global-filter-callout-toggle'>
        <ToggleSwitch
          offStateString='Toggle Off'
          handleChange={onPopoverToggleChange}
        />
      </section>
      <section className='global-filter-content'>
        <ToggleSwitch
          customCSSClasses='opacity-50 pe-none'
          onStateString='Filters'
          offStateString='Compare'
          handleChange={(d) => { }}
        />
        <Container className='my-1'>
          <Row>
            <Col className='p-0'>
            {/* <Container fluid className="px-0"> */}
<div className="nested-dropdown-wrapper" onClick={() => isCardVisible(!cardVisible,regionData)}>Regions

</div>

{/* </Container> */}
           
              {/* <NestedDropdown
                title='Regions'
                regions={regionData}
                selectedItem={onRegionChange}
              />*/}
            </Col> 
            <Col>
            {/* <Container fluid className="px-0"> */}
<div className="nested-dropdown-wrapper" onClick={() => isCardVisible(!cardVisible,themeData)}>Data Theme

</div>
{/* <FilterCardsCpt cardVisible = {cardVisible} data = {regionData}/> */}
{/* </Container> */}
              {/* <NestedDropdown
                title='Data Theme'
                regions={themeData}
                selectedItem={onRegionChange}
              /> */}
            </Col>
            <Col>
              <SHDatePicker />
            </Col>
          </Row>
        </Container>
        <FilterCardsCpt cardVisible = {cardVisible} data = {filterData}/>
      </section>
    </aside>
    </>
  );
};

export default GlobalFilter;
