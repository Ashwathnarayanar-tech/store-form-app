import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
    'formLabel', 'formLabel_label',
    'formEmail', 'formEmail_label', 'formEmail_input',
    'formRadio', 'formRadio_label', 'formRadio_input',
    'formText', 'formText_label', 'formText_input',
    'formPassword', 'formPassword_label', 'formPassword_input',
    'formUsername', 'formUsername_label', 'formUsername_input',
    'formSubmit', 'formSubmit_input',
    'formReset', 'formReset_input',
    'formCancel', 'formCancel_input',
    'formConfirmpassword', 'formConfirmpasssword_label', 'formConfirmpassword_input',
    'formSearch', 'formSearch_label', 'formSearch_input',
    'formUrl', 'formUrl_label', 'formUrl_input',
    'formRange', 'formRange_label', 'formRange_input',
    'formTime', 'formTime_label', 'formTime_input',
    'formButton', 'formButton_input',
    'formCheckbox', 'formCheckbox_input', 'formCheckbox_label',
    'formFavcolor', 'formFavcolor_label', 'formFavcolor_input',
    'formFile', 'formFile_label', 'formFile_input',
    'formNumber', 'formNumber_label', 'formNumber_input',
    'formTelnumber', 'formTelnumber_label', 'formTelnumber_input', 'formTelnumber_small',
    'formDate', 'formDate_label', 'formDate_input',
    'formDropdown', 'formDropdown_label', 'formDropdown_option']

const storeForm = (props) => {
    const handles = useCssHandles(CSS_HANDLES);

    if (props.type == "input-label") {
        return (
            <div className={handles.formLabel}>
                <label for={props.name} className={handles.formLabel_label}>{props.label}</label>
            </div>
        )
    }
    else if (props.type == "input-email") {
        return (
            <div className={handles.formEmail}>
                <label for="email" className={handles.formEmail_label}>{props.label}</label>
                <input type="email" id={props.id} name="email" value={props.value} className={handles.formEmail_input}
                    placeholder={props.placeholder} pattern={props.pattern} onChange={props.onChange} required />
            </div>
        );
    }
    else if (props.type == "input-radio") {
        return (
            <div className={handles.formRadio}>
                {props.label.map((labels) =>
                    <div>
                        <input type="radio" className={handles.formRadio_input}
                            id={props.id} name="radio" value={labels} onClick={props.onClick} />
                        <label for={labels} className={handles.formRadio_label}>{labels}</label>
                    </div>
                )}
            </div>
        )
    }
    else if (props.type == "input-text") {
        return (
            <div className={handles.formText}>
                <label for={props.name} className={handles.formText_label}>{props.label}</label><br />
                <input type="text" className={handles.formText_input} id={props.id} name={props.name}
                    value={props.value} pattern={props.pattern} onChange={props.onChange} required /><br />
            </div>
        )
    }
    else if (props.type == "input-password") {
        return (
            <div className={handles.formPassword}>
                <label for="pwd" className={handles.formPassword_label}>{props.passwordLabel}</label><br />
                <input type="password" className={handles.formPassword_input} id={props.id} name="pwd"
                    required pattern={props.passwordPattern} value={props.value}
                    title={props.passwordHoverLabel} onChange={props.onChange} /><br /><br />
            </div>
        )
    }
    else if (props.type == "input-confirmpassword") {
        return (
            <div className={handles.formConfirmpassword}>
                <label for="confirm-pwd" className={handles.formConfirmpasssword_label}>{props.confirmPwdLabel}</label><br />
                <input type="password" className={handles.formConfirmpassword_input} id={props.id} name="confirm-pwd"
                    required pattern={props.ConfirmpasswordPattern} value={props.value}
                    title={props.ConfirmpasswordHoverLabel} onChange={props.onChange} />
            </div>
        )
    }
    else if (props.type == "input-username") {
        return (
            <div className={handles.formUsername}>
                <label for="username" className={handles.formUsername_label}>{props.usernameLabel}</label><br />
                <input type="text" className={handles.formUsername_input} id={props.id} name={props.name}
                    required pattern={props.usernamePattern} value={props.value}
                    title={props.usernameHoverLabel} onChange={props.onChange} />
            </div>
        )
    }
    else if (props.type == "input-submit") {
        return (
            <div className={handles.formSubmit}>
                <input type="button" className={handles.formSubmit_input} id={props.id}
                    value={props.button_name} onClick={props.onClick} />
            </div>
        )
    }
    else if (props.type == "input-reset") {
        return (
            <div className={handles.formReset}>
                <input type="button" className={handles.formReset_input} id={props.id}
                    value={props.button_name} onClick={props.onClick} />
            </div>
        )
    }
    else if (props.type == "input-cancel") {
        return (
            <div className={handles.formCancel}>
                <input type="button" className={handles.formCancel_input} id={props.id}
                    value={props.button_name} onClick={props.onClick} />
            </div>
        )
    }
    else if (props.type == "input-search") {
        return (
            <div className={handles.formSearch}>
                <label for="gsearch" className={handles.formSearch_label}>{props.searchLabel}</label>
                <input type="search" className={handles.formSearch_input} id={props.id}
                    name={props.name} value={props.value} pattern={props.pattern}
                    title={props.searchdHoverLabel} required onChange={props.onChange} />
            </div>
        )
    }
    else if (props.type == "input-url") {
        return (
            <div className={handles.formUrl}>
                <label for="homepage" className={handles.formUrl_label}>{props.urlLabel}</label>
                <input type="url" className={handles.formUrl_input} id={props.id}
                    value={props.value} name={props.name} pattern={props.pattern}
                    title={props.urlHoverLabel} onChange={props.onChange} required />
            </div>
        )
    }
    else if (props.type == "input-range") {
        return (
            <div className={handles.formRange}>
                <label for="vol" className={handles.formRange_label}>{props.rangeLabel}</label>
                <input type="range" className={handles.formRange_input} value={props.value} id={props.id}
                    name={props.name} min={props.minValue} max={props.maxValue} onChange={props.onChange} required />
            </div>
        )
    }
    else if (props.type == "input-time") {
        return (
            <div className={handles.formTime}>
                <label for="appt" className={handles.formTime_label}>{props.timeLabel}</label>
                <input type="time" className={handles.formTime_input} value={props.value} id={props.id}
                    name={props.name} onChange={props.onChange} required />
            </div>
        )
    }
    else if (props.type == "input-button") {
        return (
            <div className={handles.formButton}>
                <input type="button" className={handles.formButton_input} id={props.id}
                    value={props.button_name} onClick={props.onClick}></input>
            </div>
        )
    }
    else if (props.type == "input-checkbox") {
        return (
            <div className={handles.formCheckbox}>
                {props.label.map((labels) =>
                    <div>
                        <input type="checkbox" className={handles.formCheckbox_input}
                            id={props.id} name="checkbox" value={labels} onClick={props.onClick} />
                        <label for="html" className={handles.formCheckbox_label}>{labels}</label>
                    </div>)}
            </div>
        )
    }
    else if (props.type == "input-favColor") {
        return (
            <div className={handles.formFavcolor}>
                <label for="favcolor" className={handles.formFavcolor_label}>{props.favcolorLabel}</label>
                <input type="color" className={handles.formFavcolor_input} id={props.id} name={props.name}
                    value={props.value} onChange={props.onChange} required />
            </div>
        )
    }
    else if (props.type == "input-file") {
        return (
            <div className={handles.formFile}>
                <label for="myfile" className={handles.formFile_label}>{props.fileLabel}</label>
                <input type="file" className={handles.formFile_input} value={props.value} id={props.id}
                    name={props.name} onChange={props.onChange} required /><br /><br />
            </div>
        )
    }
    else if (props.type == "input-number") {
        return (
            <div className={handles.formNumber}>
                <label for="quantity" className={handles.formNumber_label}>{props.numberLabel}</label>
                <input type="number" className={handles.formNumber_input} value={props.value} id={props.id}
                    name={props.name} min={props.minValue} max={props.maxValue} onChange={props.onChange} required />
            </div >
        )
    }
    else if (props.type == "input-telNumber") {
        return (
            <div className={handles.formTelnumber}>
                <label for="phone" className={handles.formTelnumber_label}>{props.telnumberLabel}</label><br /><br />
                <input type="tel" className={handles.formTelnumber_input} value={props.value} id={props.id}
                    name={props.name} placeholder={props.placeholder} pattern={props.pattern} onChange={props.onChange} required /><br /><br />
                <small className={handles.formTelnumber_small}>Format: {props.placeholder}</small><br /><br />
            </div >
        )
    }
    else if (props.type == "input-date") {
        return (
            <div className={handles.formDate}>
                <label for="birthday" className={handles.formDate_label}>{props.dateLabel}</label>
                <input type={props.selector} className={handles.formDate_input} value={props.value}
                    id={props.id} name={props.name} onChange={props.onChange} required />
            </div >
        )
    }
    else if (props.type == "input-dropdown") {
        return (
            <div className={handles.formDropdown}>
                <label for={props.id} className={handles.formDropdown_label}>{props.dropdownLabel}</label>
                <select id={props.id} name={props.id} onChange={props.onChange}>
                    {props.options.map((option) => <option value={option}
                        className={handles.formDropdown_option}>{option}</option>)}
                </select>
            </div >
        )
    }
    else {
        // Do Nothing
    }
}

export default storeForm