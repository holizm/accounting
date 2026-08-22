import {
    Boolean,
    DateTime,
    DialogForm,
    Title,
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
    <Boolean
        placeholder='accountingClosed'
        property='closed'
    />
</>

export default <DialogForm inputs={inputs} />
