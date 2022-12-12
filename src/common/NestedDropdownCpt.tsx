import "../styles/NestedDropdown.scss";
import { useState, useRef, Fragment } from 'react';
import { Dropdown, NavDropdown } from 'react-bootstrap';
import { DropdownSubmenu, NavDropdownMenu } from "react-bootstrap-submenu";
import { CountriesOfOperationsModel, RegionListModel } from './GlobalFilterCpt';
import React from "react";

export interface NestedDropdownModel {
    title: string;
    regions: NestedDropdownListModel[];
    selectedItem: (key: string) => any
}

export interface NestedDropdownListModel {
    levelOneTitle: string;
    levelTwo: NestedDropdownLevelTwoListModel[];
}

export interface NestedDropdownLevelTwoListModel {
    levelTwoTitle: string;
    levelThree: string[];
}

export interface NestedTreeDropdownListModel {
    title: string;
    children: (NestedTreeDropdownListModel|string)[];
  }

const NestedDropdown = (props: NestedDropdownModel) => {

    const dropdownRef = useRef<any>();
    const [currentTitle, updateCurrentTitle] = useState<string>(props.title);
    // const [regionList, updateRegionList] = useState<RegionListModel[]>();

    // useEffect(() => {
    //     updateRegionList(props.regions)
    // }, [props.regions])

    const handleOnItemSelect = (loc: string) => {
        updateCurrentTitle(loc);
        props.selectedItem(loc);
        dropdownRef.current.firstElementChild.querySelector('.dropdown-menu').classList.remove('show')
    }


    return (
        <>
            <Dropdown ref={dropdownRef} className='nested-dropdown-wrapper'>
                <NavDropdownMenu
                    title={currentTitle}
                    id="collasible-nav-dropdown">
                    {props.regions && props.regions.map((eachLevelOne: NestedTreeDropdownListModel, levelOneIndex: number) => {
                        return (
                            <DropdownSubmenu
                                title={eachLevelOne.title}
                                key={levelOneIndex}>
                                {eachLevelOne.children ?
                                    eachLevelOne.children.map(
                                        (eachLevelTwo: any, levelTwoIndex: number) => (
                                            <Fragment key={levelTwoIndex}>
                                                {
                                                    eachLevelTwo.children?.length > 0 ? (
                                                        <DropdownSubmenu
                                                            title={eachLevelTwo.title}>
                                                            {
                                                                eachLevelTwo.children.map((eachLevelThree: string, levelThreeIndex: number) => (
                                                                    <NavDropdown.Item
                                                                        key={levelThreeIndex}
                                                                        onClick={() => handleOnItemSelect(eachLevelThree)}
                                                                    >
                                                                        {eachLevelThree}
                                                                    </NavDropdown.Item>
                                                                ))
                                                            }
                                                        </DropdownSubmenu>
                                                    ) : (
                                                        <NavDropdown.Item
                                                            key={levelTwoIndex}
                                                            onClick={() => handleOnItemSelect(eachLevelTwo.title)}
                                                        >
                                                            {eachLevelTwo}
                                                        </NavDropdown.Item>
                                                    )
                                                }
                                            </Fragment>
                                        ))
                                    : ""
                                }
                            </DropdownSubmenu>
                        );
                    })}
                </NavDropdownMenu>
            </Dropdown>
        </>
    );
};

export default NestedDropdown;
