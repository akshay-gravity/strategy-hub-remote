import { useEffect, useState } from "react";
import { Container } from "react-bootstrap"
import "../styles/FilterCard.scss";

const FilterCardsCpt = (props: any) => {

    const [filterData, setFilterData] = useState([]);

    useEffect(() => {
        setFilterData(props.data)
        console.log(props.data)
    },[props.data])

    const handleFilterData = (title:string) => {
        if(title) {
        let getFilteredData = filterData.find((item:any) => item.title == title);
        
            setFilterData(getFilteredData.children)
        } else {
            setFilterData([])
        }
    }

    return (
        <Container fluid className="px-0">

            <div hidden={!props.cardVisible} className="card-wrapper">
                {filterData.length > 0 && filterData.map((item: any,index:number) => {
                    return (
                        <div key={index} className="filter-card" onClick={() => {handleFilterData(item.title)}}>
                            {item.hasOwnProperty('title') ? item.title : item}
                            </div>                        
    )})}
            </div>
        </Container>

    )
}

export default FilterCardsCpt