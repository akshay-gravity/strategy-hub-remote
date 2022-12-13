import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import "../styles/FilterCard.scss";

const FilterCardsCpt = (props: any) => {
    let isElementFound = false;
    const [clickedItem, setClickedItem] = useState<string[]>([]);
    const [filterData, setFilterData] = useState<any[]>([]);
    const [dataHistory, setDataHistory] = useState<any[]>([]);
    let stack: any[] = [];
    useEffect(() => {
        setFilterData(props.data)
        setDataHistory(props.data)
    }, [props.data])

    const handleFilterData = (filter: any) => {
        let title = filter.title ?? filter;
        if (title) {
            let getFilteredData = filterData.find((item: any) => item.title == title);
            if (!getFilteredData || getFilteredData.children.length == 0) {
                props.handleFilter(title);
            } else {
                setClickedItem((oldArray: any) => [...oldArray, title]);
                setFilterData(getFilteredData.children);
            }
        }
    }

    const previousData = (data: any[]=[]) => {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let title = element.title ?? element;
            if (!isElementFound && clickedItem[clickedItem.length - 1] == title) {
                isElementFound = true;
                setFilterData(data);
                clickedItem.pop();
            } else {
                previousData(element.children)
            }
        }
    }

    return (
        <Container fluid className="px-0">
            <h2 hidden={!props.cardVisible} style={{ cursor: 'pointer' }} onClick={() => { previousData(dataHistory) }}>&#8592;</h2>
            <div hidden={!props.cardVisible} className="card-wrapper">
                {filterData.length > 0 && filterData.map((item: any, index: number) => {
                    return (
                        <div key={index} className="filter-card" onClick={() => { handleFilterData(item) }}>
                            {item.hasOwnProperty('title') ? item.title : item}
                        </div>
                    )
                })}
            </div>
        </Container>

    )
}

export default FilterCardsCpt