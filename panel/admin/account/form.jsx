import {
    Boolean,
    DialogForm,
    Select,
    Text,
    Title,
} from 'form'

const inputs = <>
    <Title />
    <Text
        placeholder='accountingCode'
        property='code'
        required
    />
    <Select
        options={[
            'asset',
            'liability',
            'equity',
            'revenue',
            'expense',
        ]}
        placeholder='accountingAccountType'
        property='accountType'
        required
    />
    <Boolean
        placeholder='accountingActive'
        property='active'
    />
</>

export default <DialogForm inputs={inputs} />
