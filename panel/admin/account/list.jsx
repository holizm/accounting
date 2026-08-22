import {
    List,
    Text,
    Title,
} from 'list'
import Form from './form'

const filters = <>
    <Title />
    <Text
        placeholder='accountingCode'
        property='code'
    />
</>

const headers = <>
    <th start>accountingAccount</th>
    <th>accountingCode</th>
    <th>accountingAccountType</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <td>{item.code}</td>
    <td>{item.accountType}</td>
</>

export default <List
    create={Form}
    filters={filters}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
