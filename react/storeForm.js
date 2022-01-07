import React from 'react'
import { useCssHandles } from 'vtex.css-handles'

const CSS_HANDLES = [
    'formEmail', 'formEmail_label', 'formEmail_input', 'formEmail_submit', 'formEmail_reset',
    'formRadio', 'formRadio_label', 'formRadio_submit',
    'formText', 'formText_label', 'formText_input', 'formText_submit', 'formText_reset',
    'formPassword', 'formUsername_label', 'formUsername_input', 'formPassword_label', 'handles.formPassword_input', 'formPassword_submit', 'formPassword_reset',
    'formSearch', 'formSearch_label', 'formSearch_input', 'formSearch_submit',
    'formUrl', 'formUrl_label', 'formUrl_input', 'formUrl_submit',
    'formRange', 'formRange_label', 'formRange_input', 'formRange_submit',
    'formTime', 'formTime_label', 'formTime_input', 'formTime_submit',
    'formButton', 'formButton_input',
    'formCheckbox', 'formCheckbox_input', 'formCheckbox_label', 'formCheckbox_submit',
    'formFavcolor', 'formFavcolor_label', 'formFavcolor_input', 'formFavcolor_submit',
    'formFile', 'formFile_label', 'formFile_input', 'formFile_submit',
    'formNumber', 'formNumber_label', 'formNumber_input', 'formNumber_submit',
    'formTelnumber', 'formTelnumber_label', 'formTelnumber_input', 'formTelnumber_submit', 'formTelnumber_small', 'formTelnumber_reset',
    'formDate', 'formDate_label', 'formDate_input', 'formDate_submit',]

const storeForm = (props) => {
    const handles = useCssHandles(CSS_HANDLES);

    if (props.type == "input-email") {
        return (
            <div className={handles.formEmail}>
                <form name="EmailForm" action={props.href} required>
                    <label for="email" className={handles.formEmail_label}>{props.label}</label>
                    <input type="email" id="email" name="email" className={handles.formEmail_input}
                        placeholder={props.placeholder} pattern={props.pattern} required />
                    <input type="submit" value={props.button_name} className={handles.formEmail_submit} />
                    <input type="reset" className={handles.formEmail_reset}></input>
                </form>
            </div>
        );
    }
    else if (props.type == "input-radio") {
        return (
            <div className={handles.formRadio}>
                <form action={props.href}>
                    {props.label.map((labels) =>
                        <div>
                            <input type="radio" id="html" name={labels} value="HTML" required />
                            <label for="html" className={handles.formRadio_label}>{labels}</label>
                        </div>)}
                    <input type="submit" value={props.button_name} className={handles.formRadio_submit} />
                </form>
            </div>
        )
    }
    else if (props.type == "input-text") {
        return (
            <div className={handles.formText}>
                <form action={props.href}>
                    {props.label.map((labels) =>
                        <div>
                            <label for={labels} className={handles.formText_label}>{labels}</label><br />
                            <input type="text" className={handles.formText_input} id={labels} name={labels}
                                pattern={props.pattern} required /><br />
                        </div>)}
                    <input type="submit" value={props.button_name} className={handles.formText_submit} />
                    <input type="reset" className={handles.formText_reset}></input>
                </form>
            </div>
        )

    }
    else if (props.type == "input-password") {
        return (
            <div className={handles.formPassword}>
                <form action={props.href}>
                    <label for="username" className={handles.formUsername_label}>{props.usernameLabel}</label><br />
                    <input type="text" className={handles.formUsername_input} id="username" name="username"
                        required pattern={props.usernamePattern} title={props.usernameHoverLabel} /><br />
                    <label for="pwd" className={handles.formPassword_label}>{props.passwordLabel}</label><br />
                    <input type="password" className={handles.formPassword_input} id="pwd" name="pwd"
                        required pattern={props.passwordPattern} title={props.passwordHoverLabel} /><br /><br />
                    <input type="submit" value={props.button_name} className={handles.formPassword_submit} />
                    <input type="reset" className={handles.formPassword_reset}></input>
                </form>
            </div>
        )
    }
    else if (props.type == "input-search") {
        return (
            <div className={handles.formSearch}>
                <form action={props.href}>
                    <label for="gsearch" className={handles.formSearch_label}>{props.searchLabel}</label>
                    <input type="search" className={handles.formSearch_input} id="gsearch" name="gsearch" pattern={props.pattern} title={props.searchdHoverLabel} required />
                    <input type="submit" value={props.button_name} className={handles.formSearch_submit} />
                </form>
            </div>
        )
    }
    else if (props.type == "input-url") {
        return (
            <div className={handles.formUrl}>
                <form action={props.href}>
                    <label for="homepage" className={handles.formUrl_label}>{props.urlLabel}</label>
                    <input type="url" className={handles.formUrl_input} id="homepage" name="homepage" pattern={props.pattern} title={props.urlHoverLabel} required />
                    <input type="submit" value={props.button_name} className={handles.formUrl_submit} />
                </form>
            </div>
        )
    }
    else if (props.type == "input-range") {
        return (
            <div className={handles.formRange}>
                <form action={props.href} method="get">
                    <label for="vol" className={handles.formRange_label}>{props.rangeLabel}</label>
                    <input type="range" className={handles.formRange_input} id="vol" name="vol" min={props.minValue} max={props.maxValue} required />
                    <input type="submit" value={props.button_name} className={handles.formRange_submit} />
                </form>
            </div>
        )
    }
    else if (props.type == "input-time") {
        return (
            <div className={handles.formTime}>
                <form action={props.href}>
                    <label for="appt" className={handles.formTime_label}>{props.timeLabel}</label>
                    <input type="time" className={handles.formTime_input} id="appt" name="appt" required />
                    <input type="submit" value={props.button_name} className={handles.formTime_submit} />
                </form>
            </div>
        )
    }
    else if (props.type == "input-button") {
        return (
            <div className={handles.formButton}>
                <form action={props.href}>
                    <a href={props.href}><input className={handles.formButton_input} type="button" value={props.button_name} /></a>
                </form>
            </div>
        )
    }
    else if (props.type == "input-checkbox") {
        return (
            <div className={handles.formCheckbox}>
                <form action={props.href}>
                    {props.label.map((labels) =>
                        <div>
                            <input type="checkbox" className={handles.formCheckbox_input} id="html" name="fav_language" value="HTML" required />
                            <label for="html" className={handles.formCheckbox_label}>{labels}</label>
                        </div>)}
                    <input type="submit" value={props.button_name} className={handles.formCheckbox_submit} />
                </form>
            </div>
        )
    }
    else if (props.type == "input-favColor") {
        return (
            <div className={handles.formFavcolor}>
                <form action={props.href}>
                    <label for="favcolor" className={handles.formFavcolor_label}>{props.favcolorLabel}</label>
                    <input type="color" className={handles.formFavcolor_input} id="favcolor" name="favcolor" value="#ff0000" required />
                    <input type="submit" value={props.button_name} className={handles.formFavcolor_submit} />
                </form>
            </div>
        )
    }
    else if (props.type == "input-file") {
        return (
            <div className={handles.formFile}>
                <form action={props.href}>
                    <label for="myfile" className={handles.formFile_label}>{props.fileLabel}</label>
                    <input type="file" className={handles.formFile_input} id="myfile" name="myfile" required /><br /><br />
                    <input type="submit" value={props.button_name} className={handles.formFile_submit} />
                </form>
            </div>
        )
    }
    else if (props.type == "input-number") {
        return (
            <div className={handles.formNumber}>
                <form action={props.href}>
                    <label for="quantity" className={handles.formNumber_label}>{props.numberLabel}</label>
                    <input type="number" className={handles.formNumber_input} id="quantity" name="quantity" min={props.minValue} max={props.maxValue} required />
                    <input type="submit" value={props.button_name} className={handles.formNumber_submit} />
                </form>
            </div >
        )
    }
    else if (props.type == "input-telNumber") {
        return (
            <div className={handles.formTelnumber}>
                <form action={props.href}>
                    <label for="phone" className={handles.formTelnumber_label}>{props.telnumberLabel}</label><br /><br />
                    <input type="tel" className={handles.formTelnumber_input} id="phone" name="phone" placeholder={props.placeholder} pattern={props.pattern} required /><br /><br />
                    <small className={handles.formTelnumber_small}>Format: {props.placeholder}</small><br /><br />
                    <input type="submit" value={props.button_name} className={handles.formTelnumber_submit} />
                    <input type="reset" className={handles.formTelnumber_reset}></input>
                </form>
            </div >
        )
    }
    else if (props.type == "input-date") {
        return (
            <div className={handles.formDate}>
                <form action={props.href}>
                    <label for="birthday" className={handles.formDate_label}>{props.dateLabel}</label>
                    <input type={props.selector} className={handles.formDate_input} id="birthday" name="birthday" required />
                    <input type="submit" value={props.button_name} className={handles.formDate_submit} />
                </form>
            </div >
        )
    }
}

export default storeForm