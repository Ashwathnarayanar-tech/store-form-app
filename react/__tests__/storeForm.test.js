import React from "react";
import Adapter from "enzyme-adapter-react-16";
import moment from "moment";
import { shallow, configure, mount } from "enzyme";
import StoreForm from "../storeForm.js"

// Configuration
configure({ adapter: new Adapter() });

// Test Case for StoreForm - input-date
describe('StoreForm - input-date', () => {
    const defaultProps = {
        type: 'input-date'
    };

    const DateInput = (props) =>
        <StoreForm
            {...defaultProps}
            {...props}
        />;

    // Create snapshot first
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<DateInput debug />);
        expect(component).toMatchSnapshot();
    });

    // Testing props
    it('render date input correctly with null value', () => {
        const props = {
            value: null
        },
            DateInputComponent = mount(<DateInput {...props} />);
        expect((DateInputComponent).prop('value')).toEqual(null);
    });

    it('check the type of value', () => {
        const props = {
            value: '10.03.2018'
        },
            DateInputComponent = mount(<DateInput {...props} />);
        expect(DateInputComponent.prop('value')).toEqual('10.03.2018');
    });

    it('render date input correctly with null dateLabel', () => {
        const props = {
            datelabel: 'Echidna Cal'
        },
            DateInputComponent = mount(<DateInput {...props} />);
        expect((DateInputComponent).prop('datelabel')).toEqual('Echidna Cal');
    });

    // Testinf OnChange Event
    it('check the onChange callback', () => {
        const onChange = jest.fn(),
            props = {
                value: '20.01.2022',
                onChange
            },
            DateInputComponent = mount(<DateInput {...props} />).find('input');
        DateInputComponent.invoke('onChange')(props.value);
        expect(onChange).toHaveBeenCalledWith('20.01.2022');
    });

    it('check the onChange callback on prop change', () => {
        const onChange = jest.fn(),
            props = {
                value: '20.01.2018',
                onChange
            },
            DateInputComponent = mount(<DateInput {...props} />).find('input');
        DateInputComponent.invoke('onChange')(props.value = moment('2018-01-22'));
        expect(onChange).toHaveBeenCalledWith(moment('2018-01-22'));
    });
});


// Test Case for input-label
describe('StoreForm - input-label', () => {
    const defaultProps = {
        type: 'input-date'
    };

    const TextInput = (props) =>
        <StoreForm
            {...defaultProps}
            {...props}
        />;

    // Create snapshot first
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<TextInput debug />);
        expect(component).toMatchSnapshot();
    });

    // Testing props
    it('render text input correctly with null value', () => {
        const props = {
            label: null
        },
            TextInputComponent = mount(<TextInput {...props} />);
        expect((TextInputComponent).prop('label')).toEqual(null);
    });

    it('check the type of value', () => {
        const props = {
            label: 'echidna'
        },
            TextInputComponent = mount(<TextInput {...props} />);
        expect(TextInputComponent.prop('label')).toEqual('echidna');
    });
});

// Test Case for input-email
describe('StoreForm - input-email', () => {
    const defaultProps = {
        type: 'input-email'
    };

    const EmailInput = (props) =>
        <StoreForm
            {...defaultProps}
            {...props}
        />;

    // Create snapshot first
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<EmailInput debug />);
        expect(component).toMatchSnapshot();
    });

    // Testing props
    it('render email input correctly with null value', () => {
        const props = {
            value: null
        },
            EmailInputComponent = mount(<EmailInput {...props} />);
        expect((EmailInputComponent).prop('value')).toEqual(null);
    });

    it('check the type of value', () => {
        const props = {
            value: 'mansi.vd@echidnainc.com'
        },
            EmailInputComponent = mount(<EmailInput {...props} />);
        expect(EmailInputComponent.prop('value')).toEqual('mansi.vd@echidnainc.com');
    });

    it('render email input correctly with placeholder', () => {
        const props = {
            placeholder: 'example@echidnainc.com'
        },
            EmailInputComponent = mount(<EmailInput {...props} />);
        expect((EmailInputComponent).prop('placeholder')).toEqual('example@echidnainc.com');
    });

    it('check the onChange callback', () => {
        const onChange = jest.fn(),
            props = {
                value: 'mansi.vd@echidnainc.com',
                onChange
            },
            EmailInputComponent = mount(<EmailInput {...props} />).find('input');
        EmailInputComponent.invoke('onChange')('mansi.vd@echidnainc.com');
        expect(onChange).toHaveBeenCalledWith('mansi.vd@echidnainc.com');
    });
});

// Test Case for StoreForm - input-text
describe('StoreForm - input-text', () => {
    const defaultProps = {
        type: 'input-text'
    };

    const TextInput = (props) =>
        <StoreForm
            {...defaultProps}
            {...props}
        />;

    // Create snapshot first
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<TextInput debug />);
        expect(component).toMatchSnapshot();
    });

    // Testing props
    it('render text input correctly with null value', () => {
        const props = {
            value: null
        },
            TextInputComponent = mount(<TextInput {...props} />);
        expect((TextInputComponent).prop('value')).toEqual(null);
    });

    it('check the type of value', () => {
        const props = {
            value: 'Echidna'
        },
            TextInputComponent = mount(<TextInput {...props} />);
        expect(TextInputComponent.prop('value')).toEqual('Echidna');
    });

    it('render text input correctly with Label', () => {
        const props = {
            label: 'Echidna Label'
        },
            TextInputComponent = mount(<TextInput {...props} />);
        expect((TextInputComponent).prop('label')).toEqual('Echidna Label');
    });

    it('check the onChange callback', () => {
        const onChange = jest.fn(),
            props = {
                value: 'Echidna',
                onChange
            },
            TextInputComponent = mount(<TextInput {...props} />).find('input');
        TextInputComponent.invoke('onChange')(props.value);
        expect(onChange).toHaveBeenCalledWith('Echidna');
    });

    it('check the onChange callback on prop change', () => {
        const onChange = jest.fn(),
            props = {
                value: 'Echidna',
                onChange
            },
            TextInputComponent = mount(<TextInput {...props} />).find('input');
        TextInputComponent.invoke('onChange')(props.value = 'Mansi');
        expect(onChange).toHaveBeenCalledWith('Mansi');
    });
});


// Test Case for StoreForm - input-password
describe('StoreForm - input-password', () => {
    const defaultProps = {
        type: 'input-password'
    };

    const PasswordInput = (props) =>
        <StoreForm
            {...defaultProps}
            {...props}
        />;

    // Create snapshot first
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<PasswordInput debug />);
        expect(component).toMatchSnapshot();
    });

    // Testing props
    it('render password input correctly with null value', () => {
        const props = {
            value: null
        },
            PasswordInputComponent = mount(<PasswordInput {...props} />);
        expect((PasswordInputComponent).prop('value')).toEqual(null);
    });

    it('check the type of value', () => {
        const props = {
            value: 'Echidna@123'
        },
            PasswordInputComponent = mount(<PasswordInput {...props} />);
        expect(PasswordInputComponent.prop('value')).toEqual('Echidna@123');
    });

    it('render password input correctly with Label', () => {
        const props = {
            passwordlabel: 'Enter Your Password'
        },
            PasswordInputComponent = mount(<PasswordInput {...props} />);
        expect((PasswordInputComponent).prop('passwordlabel')).toEqual('Enter Your Password');
    });

    it('check the onChange callback', () => {
        const onChange = jest.fn(),
            props = {
                value: 'Echidna@111',
                onChange
            },
            PasswordInputComponent = mount(<PasswordInput {...props} />).find('input');
        PasswordInputComponent.invoke('onChange')(props.value);
        expect(onChange).toHaveBeenCalledWith('Echidna@111');
    });

    it('check the onChange callback on prop change', () => {
        const onChange = jest.fn(),
            props = {
                value: 'Echidna@94',
                onChange
            },
            PasswordInputComponent = mount(<PasswordInput {...props} />).find('input');
        PasswordInputComponent.invoke('onChange')(props.value = 'Mansi@94');
        expect(onChange).toHaveBeenCalledWith('Mansi@94');
    });
});

// Test Case for StoreForm - input-confirmpassword
describe('StoreForm - input-confirmpassword', () => {
    const defaultProps = {
        type: 'input-password'
    };

    const ConfirmPasswordInput = (props) =>
        <StoreForm
            {...defaultProps}
            {...props}
        />;

    // Create snapshot first
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<ConfirmPasswordInput debug />);
        expect(component).toMatchSnapshot();
    });

    // Testing props
    it('render confirmpassword input correctly with null value', () => {
        const props = {
            value: null
        },
            ConfirmPasswordInputComponent = mount(<ConfirmPasswordInput {...props} />);
        expect((ConfirmPasswordInputComponent).prop('value')).toEqual(null);
    });

    it('check the type of value', () => {
        const props = {
            value: 'Echidna@123'
        },
            ConfirmPasswordInputComponent = mount(<ConfirmPasswordInput {...props} />);
        expect(ConfirmPasswordInputComponent.prop('value')).toEqual('Echidna@123');
    });

    it('render confirmpassword input correctly with Label', () => {
        const props = {
            confirmPwdLabel: 'Confirm Your Password'
        },
            ConfirmPasswordInputComponent = mount(<ConfirmPasswordInput {...props} />);
        expect((ConfirmPasswordInputComponent).prop('confirmPwdLabel')).toEqual('Confirm Your Password');
    });

    it('check the onChange callback', () => {
        const onChange = jest.fn(),
            props = {
                value: 'Echidna@111',
                onChange
            },
            ConfirmPasswordInputComponent = mount(<ConfirmPasswordInput {...props} />).find('input');
        ConfirmPasswordInputComponent.invoke('onChange')(props.value);
        expect(onChange).toHaveBeenCalledWith('Echidna@111');
    });

    it('check the onChange callback on prop change', () => {
        const onChange = jest.fn(),
            props = {
                value: 'Mansi@94',
                onChange
            },
            ConfirmPasswordInputComponent = mount(<ConfirmPasswordInput {...props} />).find('input');
        ConfirmPasswordInputComponent.invoke('onChange')(props.value = 'Mansi@94');
        expect(onChange).toHaveBeenCalledWith('Mansi@94');
    });
});

// Test Case for StoreForm - input-username
describe('StoreForm - input-username', () => {
    const defaultProps = {
        type: 'input-username'
    };

    const UsernameInput = (props) =>
        <StoreForm
            {...defaultProps}
            {...props}
        />;

    // Create snapshot first
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<UsernameInput debug />);
        expect(component).toMatchSnapshot();
    });

    // Testing props
    it('render username input correctly with null value', () => {
        const props = {
            value: null
        },
            UsernameInputComponent = mount(<UsernameInput {...props} />);
        expect((UsernameInputComponent).prop('value')).toEqual(null);
    });

    it('check the type of value', () => {
        const props = {
            value: 'Echidna'
        },
            UsernameInputComponent = mount(<UsernameInput {...props} />);
        expect(UsernameInputComponent.prop('value')).toEqual('Echidna');
    });

    it('render text username correctly with Label', () => {
        const props = {
            usernamelabel: 'Enter Your Username'
        },
            UsernameInputComponent = mount(<UsernameInput {...props} />);
        expect((UsernameInputComponent).prop('usernamelabel')).toEqual('Enter Your Username');
    });

    it('check the onChange callback', () => {
        const onChange = jest.fn(),
            props = {
                value: 'Mansi',
                onChange
            },
            UsernameInputComponent = mount(<UsernameInput {...props} />).find('input');
        UsernameInputComponent.invoke('onChange')(props.value);
        expect(onChange).toHaveBeenCalledWith('Mansi');
    });

    it('check the onChange callback on prop change', () => {
        const onChange = jest.fn(),
            props = {
                value: 'Echidna',
                onChange
            },
            UsernameInputComponent = mount(<UsernameInput {...props} />).find('input');
        UsernameInputComponent.invoke('onChange')(props.value = 'Mansi');
        expect(onChange).toHaveBeenCalledWith('Mansi');
    });
});

// Test Case for StoreForm - input-submit
describe('StoreForm - input-submit', () => {
    const defaultProps = {
        type: 'input-submit'
    };

    const SubmitInput = (props) =>
        <StoreForm
            {...defaultProps}
            {...props}
        />;

    // Create snapshot first
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<SubmitInput debug />);
        expect(component).toMatchSnapshot();
    });

    // Testing props
    it('render submit input correctly with null value', () => {
        const props = {
            value: null
        },
            SubmitInputComponent = mount(<SubmitInput {...props} />);
        expect((SubmitInputComponent).prop('value')).toEqual(null);
    });

    it('check the type of value', () => {
        const props = {
            value: 'Submit'
        },
            SubmitInputComponent = mount(<SubmitInput {...props} />);
        expect(SubmitInputComponent.prop('value')).toEqual('Submit');
    });

    it('check the onClick callback', () => {
        const onClick = jest.fn(),
            props = {
                value: 'Submit',
                onClick
            },
            SubmitInputComponent = mount(<SubmitInput {...props} />).find('input');
        SubmitInputComponent.invoke('onClick')(props.value);
        expect(onClick).toHaveBeenCalledWith('Submit');
    });
});

// Test Case for StoreForm - input-checkbox
describe('StoreForm - input-checkbox', () => {
    const defaultProps = {
        type: 'input-checkbox'
    };

    const CheckboxInput = (props) =>
        <StoreForm
            {...defaultProps}
            {...props}
        />;

    // Create snapshot first
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<CheckboxInput debug />);
        expect(component).toMatchSnapshot();
    });

    // Testing props
    it('render checkbox input correctly with null value', () => {
        const props = {
            value: null,
            label: ["Echidna"]
        },
            CheckboxInputComponent = mount(<CheckboxInput {...props} />);
        expect((CheckboxInputComponent).prop('value')).toEqual(null);
    });

    it('check the type of value', () => {
        const props = {
            value: 'Echidna',
            label: ["Echidna"]
        },
            CheckboxInputComponent = mount(<CheckboxInput {...props} />);
        expect(CheckboxInputComponent.prop('value')).toEqual('Echidna');
    });

    it('render text checkbox correctly with Label', () => {
        const props = {
            label: ["Echidna"]
        },
            CheckboxInputComponent = mount(<CheckboxInput {...props} />);
        expect((CheckboxInputComponent).prop('label')).toEqual(["Echidna"]);
    });

    it('check the onClick callback', () => {
        const onClick = jest.fn(),
            props = {
                value: 'Mansi',
                label: ["Echidna"],
                onClick
            },
            CheckboxInputComponent = mount(<CheckboxInput {...props} />).find('input');
        CheckboxInputComponent.invoke('onClick')(props.value);
        expect(onClick).toHaveBeenCalledWith('Mansi');
    });
});

// Test Case for StoreForm - input-radio
describe('StoreForm - input-radio', () => {
    const defaultProps = {
        type: 'input-radio'
    };

    const RadioInput = (props) =>
        <StoreForm
            {...defaultProps}
            {...props}
        />;

    // Create snapshot first
    it('should render correctly in "debug" mode', () => {
        const component = shallow(<RadioInput debug />);
        expect(component).toMatchSnapshot();
    });

    // Testing props
    it('render RadioInput correctly with null value', () => {
        const props = {
            value: null,
            label: ["Echidna"]
        },
            RadioInputComponent = mount(<RadioInput {...props} />);
        expect((RadioInputComponent).prop('value')).toEqual(null);
    });

    it('check the type of value', () => {
        const props = {
            value: 'Echidna',
            label: ["Echidna"]
        },
            RadioInputComponent = mount(<RadioInput {...props} />);
        expect(RadioInputComponent.prop('value')).toEqual('Echidna');
    });

    it('render text RadioInput correctly with Label', () => {
        const props = {
            label: ["Echidna"]
        },
            RadioInputComponent = mount(<RadioInput {...props} />);
        expect((RadioInputComponent).prop('label')).toEqual(["Echidna"]);
    });

    it('check the onClick callback', () => {
        const onClick = jest.fn(),
            props = {
                value: 'Mansi',
                label: ["Echidna"],
                onClick
            },
            RadioInputComponent = mount(<RadioInput {...props} />).find('input');
        RadioInputComponent.invoke('onClick')(props.value);
        expect(onClick).toHaveBeenCalledWith('Mansi');
    });
});