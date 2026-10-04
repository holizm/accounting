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
        placeholder='code'
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
        placeholder='accountType'
        property='accountType'
        required
    />
    <Boolean
        placeholder='active'
        property='active'
    />
</>

export default <DialogForm inputs={inputs} />
