import React from 'react'
export const DateFilter = (props) => {
    const {date, icon, onDateChange, name} = props
    let  month = '' + (date.getMonth() + 1),
        day = '' + date.getDate(),
        year = date.getFullYear()
    if (month.length < 2) month = '0' + month
    if (day.length < 2) day = '0' + day

    let finalDate = [year, month, day].join('-')
    return (
        <div className="field">
            <div className="control has-icons-left">
                <input className="input" type="date" value={finalDate} onChange={onDateChange} name={name} />
                <span className="icon is-small is-left">
                    <i className={`fas fa-${icon}`} ></i>
                </span>
            </div>
        </div>
    )   
}