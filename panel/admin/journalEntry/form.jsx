import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        number
        required
    />
    <DateTime
        date
        required
    />
    <Select
        journalEntryStatus
        options={[
            'draft',
            'posted',
            'reversed',
        ]}
        placeholder='state'
        required
    />
    <LongText description />
</>

export default <DialogForm inputs={inputs} />
