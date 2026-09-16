import {
    DateTime,
    DialogForm,
    LongText,
    Select,
    Text,
} from 'form'

const inputs = <>
    <Text
        placeholder='accountingNumber'
        property='number'
        required
    />
    <DateTime
        placeholder='accountingDate'
        property='date'
        required
    />
    <Select
        options={[
            'draft',
            'posted',
            'reversed',
        ]}
        placeholder='stateMachinesState'
        property='journalEntryStatus'
        required
    />
    <LongText
        placeholder='accountingDescription'
        property='description'
    />
</>

export default <DialogForm inputs={inputs} />
