import {
    DateTime,
    DialogForm,
    Title,
    YesNo,
} from 'form'

const inputs = <>
    <Title />
    <DateTime
        placeholder='accountingStartDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='accountingEndDate'
        property='endDate'
        required
    />
    <YesNo
        placeholder='accountingClosed'
        property='closed'
    />
</>

export default <DialogForm inputs={inputs} />
