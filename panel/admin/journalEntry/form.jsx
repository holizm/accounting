import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='number'
        property='number'
        required
    />
    <DateTime
        placeholder='date'
        property='date'
        required
    />
    <Select
        options={[
            'draft',
            'posted',
            'reversed',
        ]}
        placeholder='state'
        property='journalEntryStatus'
        required
    />
    <LongText
        placeholder='description'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
