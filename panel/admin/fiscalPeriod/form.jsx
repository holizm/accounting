import {
    Boolean,
    DateTime,
    DialogForm,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <DateTime
        required
        startDate
    />
    <DateTime
        endDate
        required
    />
    <Boolean closed />
</>

export default <DialogForm inputs={inputs} />
