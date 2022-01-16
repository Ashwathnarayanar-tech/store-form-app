# Store Form App

<!-- ALL-CONTRIBUTORS-BADGE:START - Do not remove or modify this section -->
[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors-)
<!-- ALL-CONTRIBUTORS-BADGE:END -->

The Store Form App provides blocks responsible for displaying an user form.

![StoreForm](https://user-images.githubusercontent.com/89768852/149670804-04d9f0c8-75cb-49ee-901f-3bbb41d48310.PNG)


## Installation

Use the [vtex install](https://developers.vtex.com/vtex-developer-docs/docs/vtex-io-documentation-vtex-io-cli-install)  package manager to install store-form-app.

```bash
vtex install echidna.store-form-app@0.0.5
```


## Usage

Add store-form app to your theme's dependencies in the manifest.json, for example:

```json
"dependencies": {
  "echidna.store-form-app": "0.x"
}
```

Now, you are able to use all blocks exported by the store-form app. Check out the full list below:
| Block name      | Description                                |
| --------------- | ------------------------------------------ |
| input-label     | Renders a label field in the form.         |
| input-email     | Renders a email field in the form.         |
| input-radio     | Renders a radio button in the form.        |
| input-text      |Renders a text field in the form.           |
| input-password  | Renders a password field in the form.      |
| input-confirmpassword | Renders a confirmpassword field in the form.|
| input-username  | Renders a username field in the form.      |
| input-submit    | Renders a submit button in the form.       |
| input-reset     |Renders a reset button in the form.         |
| input-cancel    |Renders a cancel button in the form.        |
| input-search    |Renders a search field in the form.         |
| input-url       |Renders a url field in the form.            |
| input-range     |Renders a range field in the form.          |
| input-time      |Renders a time field in the form.           |
| input-button    |Renders a button field in the form.         |
| input-checkbox  |Renders a checkbox button in the form.      |
| input-favColor  |Renders a favColor field in the form.       |
| input-file      |Renders a input file field in the form.     |
| input-number    |Renders a number field in the form.         |
| input-telNumber |Renders a telNumber field in the form.      |
| input-date      |Renders a date field in the form.           |
| input-dropdown  |Renders a dropdown field in the form.       |

In any desired store template, such as the store.custom, add the form block. In the example below, the form block is contained in a Flex Layout row:

```json
{
    "store.custom#contact-us": {
        "blocks": [
            "flex-layout.row#form"
        ]
    },
    "flex-layout.row#form": {
        "children": [
            "flex-layout.col#form"
        ],
        "props": {
            "blockClass": "contact-us-form"
        }
    },
    "flex-layout.col#form": {
        "children": [
            "contactus-form"
        ],
        "props": {
            "blockClass": "contact-us-form"
        }
    },
    "contactus-form": {
        "props": {
            "Heading": "store-form#heading",
            "Name": "store-form#name",
            "Email": "store-form#email",
            "PhoneNumber": "store-form#phonnumber",
            "Question": "store-form#question",
            "Subject": "store-form#subject",
            "Checkbox": "store-form#checkbox",
            "RadioUs": "store-form#USradio",
            "Submit": "store-form#submit",
            "Dropdown": "store-form#dropdown"
        }
    },
    "form-success#contactUs": {
        "children": [
            "rich-text#successSubmit"
        ]
    },
    "rich-text#successSubmit": {
        "props": {
            "text": "Thank You, we will reach you shortly!",
            "textAlignment": "CENTER",
            "textPosition": "CENTER",
            "blockClass": "contact-us-submit"
        }
    },
    "store-form#heading": {
        "props": {
            "type": "input-label",
            "label": [
                "Contact Us"
            ],
            "pattern": "[A-Za-z]{10}",
            "blockClass": "heading"
        }
    },
    "store-form#name": {
        "props": {
            "type": "input-text",
            "label": [
                "Name :"
            ],
            "pattern": "[A-Za-z]{10}",
            "blockClass": "name"
        }
    },
    "store-form#email": {
        "props": {
            "type": "input-email",
            "label": "Email :",
            "href": "/account",
            "placeholder": "username@echidna.com",
            "pattern": "[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$",
            "blockClass": "email"
        }
    },
    "store-form#phonnumber": {
        "props": {
            "type": "input-telNumber",
            "telnumberLabel": "Phone Number :",
            "placeholder": "123-45-678",
            "pattern": "[0-9]{3}-[0-9]{2}-[0-9]{3}",
            "blockClass": "telNumber"
        }
    },
    "store-form#subject": {
        "props": {
            "type": "input-text",
            "label": [
                "Subject :"
            ],
            "pattern": "[A-Za-z]{10}",
            "blockClass": "subject"
        }
    },
    "store-form#question": {
        "props": {
            "type": "input-text",
            "label": [
                "Question :"
            ],
            "pattern": "[A-Za-z]{10}",
            "blockClass": "question"
        }
    },
    "store-form#checkbox": {
        "props": {
            "type": "input-checkbox",
            "label": [
                "Remember me"
            ],
            "blockClass": "checkbox"
        }
    },
    "store-form#USradio": {
        "props": {
            "type": "input-radio",
            "label": [
                "US citizen",
                "Non US citizen"
            ],
            "blockClass": "radio-us"
        }
    },
    "store-form#submit": {
        "props": {
            "type": "input-submit",
            "button_name": "Submit",
            "blockClass": "submit"
        }
    },
    "store-form#dropdown": {
        "props": {
            "type": "input-dropdown",
            "id": "car",
            "dropdownLabel": "Choose a car :",
            "options": [
                "Nissan",
                "GTR",
                "Volvo",
                "BMW",
                "Audi",
                "Merc"
            ],
            "blockClass": "dropdown"
        }
    }
}
```

These  props can be used in custom React block. For example:
```js
return (
        <div>
            <Heading />
            <Name onChange={handleNameChange} />
            <span style={{ color: "darkred" }}>{nameError}</span>
            <Email onChange={handleEmailChange} />
            <span style={{ color: "darkred" }}>{emailError}</span>
            <PhoneNumber onChange={handlePhoneNumberChange} />
            <span style={{ color: "darkred" }}>{phoneNumberError}</span>
            <Subject onChange={handleSubjectChange} />
            <span style={{ color: "darkred" }}>{subjectError}</span>
            <Question onChange={handlequestionChange} />
            <span style={{ color: "darkred" }}>{questionError}</span>
            <Dropdown onChange={handleDropdownChange} />
            <span style={{ color: "darkred" }}>{dropdownError}</span>
            <RadioUs onClick={handleRadioChange} />
            <span style={{ color: "darkred" }}>{radioError}</span>
            <Checkbox onClick={handleCheckboxChange} />
            <span style={{ color: "darkred" }}>{checkboxError}</span>
            <Submit onClick={handleLogin} />
            <span style={{ color: "darkred" }}>{applicationSubmission}</span>
        </div>
    )
```


## Props

Form block can receive the following props:

| Property        | Description                                | Type      | Default value |
| --------------- | ------------------------------------------ | --------- | ------------- |
| type            | The type for the desired store form block  | `String`  | ''            |
| lable           | The lable for the desired store form block | `String`  | ''            |
| pattern         | Pattern for input validation               | `String`  | ''            |
| placeholder     | Placeholder for the desired value          | `String`  | ''            |
| button_name     | Button name for button type forms only     | `String`  | ''            |
| blockClass      | The BlockClassName for css handle          | `String`  | 🚫            |



## Customization
In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on Using CSS Handles for store customization.
| CSS Handles     |
| --------------- |
|formLabel|
|formLabel_label|
|formEmail|
|formEmail_label|
|formEmail_input|
|formRadio|
|formRadio_label|
|formRadio_input|
|formText|
|formText_label|
|formText_input|
|formPassword|
|formPassword_label|
|formPassword_input|
|formUsername|
|formUsername_label|
|formUsername_input|
|formSubmit|
|formSubmit_input|
|formReset|
|formReset_input|
|formCancel|
|formCancel_input|
|formConfirmpassword|
|formConfirmpasssword_label|
|formConfirmpassword_input|
|formSearch|
|formSearch_label|
|formSearch_input|
|formUrl|
|formUrl_label|
|formUrl_input|
|formRange|
|formRange_label|
|formRange_input|
|formTime|
|formTime_label|
|formTime_input|
|formButton|
|formButton_input|
|formCheckbox|
|formCheckbox_input|
|formCheckbox_label|
|formFavcolor|
|formFavcolor_label|
|formFavcolor_input|
|formFile|
|formFile_label|
|formFile_input|
|formNumber|
|formNumber_label|
|formNumber_input|
|formTelnumber|
|formTelnumber_label|
|formTelnumber_input|
|formTelnumber_small|
|formDate|
|formDate_label|
|formDate_input|
|formDropdown|
|formDropdown_label|
|formDropdown_option|


## Contributors ✨

Thanks goes to these wonderful people:

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<!-- markdownlint-enable -->
<!-- prettier-ignore-end -->
<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [mansi-dhingani](https://github.com/mansi-dhingani) specification. Contributions of any kind are welcome!

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

<!-- DOCS-IGNORE:end -->
