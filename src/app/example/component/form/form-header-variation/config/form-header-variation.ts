import { Form, FormDiaplyMode, FormTitleIconPosition, } from 'ngx-material-widget/lib/form/model';
import { FieldType, FieldDiaplyType, RadioDisplayType } from 'ngx-material-widget/lib/field/model';
import { ButtonType, ButtonColor, ButtonSize } from 'ngx-material-widget/lib/button/model';

export const formHeaderVariation: Form = {
    identifier: "formHeaderVariation",
    header: {
        title: "Form Header Variation",
        icon: {
            font: "view_agenda",
            position: FormTitleIconPosition.BEFORE_TITLE
        },
        actions: [
            {
                key: "blockFormToggle",
                label: "Block Form",
                type: FieldType.TOGGLE_OPTION,
                
            },
            {
                identifier: "goToGithub",
                type: ButtonType.STROKED,
                label: "Code in Github",
                icon: "call_made",
                onlyIcon: false,
                color: ButtonColor.DEFAULT,
                size: ButtonSize.DEFAULT,
                displayInFormModes: [
                    FormDiaplyMode.EDIT,
                    FormDiaplyMode.ADD,
                    FormDiaplyMode.VIEW
                ],
            }
        ]
    },
    description: {
        text: "This example has the form header with icon before the title 'Form Header Variation', a toggle field on right, a button (more fields or buttons can be configured as required).",
        bgColor: "#f2eff7"
    },
    displayInColumns: 2,
    formFields: [
        {
            field: {
                key: "firstName",
                label: "First Name",
                type: FieldType.TEXT,
            },
        },
        {
            field: {
                key: "middleName",
                label: "Middle Name",
                type: FieldType.TEXT,
            },
        },
        {
            field: {
                key: "lastName",
                label: "Last Name",
                type: FieldType.TEXT,
            },
        },
        {
            field: {
                key: "email",
                label: "Email",
                type: FieldType.EMAIL,
            },
        },
        {
            field: {
                key: "dob",
                label: "Date of Birth",
                type: FieldType.CALENDAR,
            },
        },
        {
            field: {
                key: "gender",
                label: "Gender",
                type: FieldType.RADIO,
                displayType: RadioDisplayType.INLINE,
                options: [
                    {
                        key: "m",
                        value: "Male"
                    },
                    {
                        key: "f",
                        value: "Female"
                    },
                ]
            },
        }
    ],
    action: {
        align: "right",
        buttons: [
            {
                identifier: "reset",
                type: ButtonType.RAISED,
                label: "Reset",
                color: ButtonColor.DEFAULT,
                size: ButtonSize.SMALL,
                icon: "clear_all",
                onlyIcon: false,
                displayInFormModes: [
                    FormDiaplyMode.ADD
                ]
            },
            {
                identifier: "cancel",
                type: ButtonType.RAISED,
                label: "Cancel",
                color: ButtonColor.DEFAULT,
                size: ButtonSize.SMALL,
                icon: "keyboard_backspace",
                onlyIcon: false,
                displayInFormModes: [
                    FormDiaplyMode.EDIT
                ]
            },
            {
                identifier: "save",
                type: ButtonType.RAISED,
                label: "Save",
                color: ButtonColor.PRIMARY,
                size: ButtonSize.SMALL,
                icon: "save",
                onlyIcon: false,
                displayInFormModes: [
                    FormDiaplyMode.ADD
                ]
            },
            {
                identifier: "update",
                type: ButtonType.RAISED,
                label: "Update",
                color: ButtonColor.PRIMARY,
                size: ButtonSize.SMALL,
                icon: "mode_edit",
                onlyIcon: false,
                displayInFormModes: [
                    FormDiaplyMode.EDIT
                ]
            },
            {
                identifier: "delete",
                type: ButtonType.RAISED,
                label: "Delete",
                color: ButtonColor.WARN,
                size: ButtonSize.SMALL,
                icon: "clear",
                onlyIcon: false,
                displayInFormModes: [
                    FormDiaplyMode.EDIT
                ]
            }
        ]
    },
    displayType: FieldDiaplyType.INLINE,
    displayMode: FormDiaplyMode.ADD,
}