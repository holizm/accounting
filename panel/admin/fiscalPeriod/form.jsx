import {
    Boolean,
    DateTime,
    DialogForm,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <DateTime
        placeholder='startDate'
        property='startDate'
        required
    />
    <DateTime
        placeholder='endDate'
        property='endDate'
        required
    />
    <Boolean
        placeholder='closed'
        property='closed'
    />
</>

export default <DialogForm inputs={inputs} />
