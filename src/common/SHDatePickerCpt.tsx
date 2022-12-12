import { forwardRef } from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const SHDatePicker = () => {

    const CustomDatePickerInput = forwardRef(({ value, onClick, onChange, placeholder }: any, ref: any) => (
        <div className='nested-dropdown-wrapper' onClick={onClick} onChange={onChange} ref={ref}>
            {value ? value: placeholder}
        </div>
    ))


    return (
        <DatePicker 
            placeholderText="Time Range" 
            wrapperClassName='test' 
            customInput={<CustomDatePickerInput />}
            onChange={() => {}}
            showMonthYearPicker
        />
    )
};

export default SHDatePicker;