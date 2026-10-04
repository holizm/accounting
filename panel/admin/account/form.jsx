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
        code
        required
    />
    <Select
        accountType
        options={[
            'asset',
            'liability',
            'equity',
            'revenue',
            'expense',
        ]}
        required
    />
    <Boolean active />
</>

export default <DialogForm inputs={inputs} />
