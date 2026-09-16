import {
    DateTime,
    List,
    Text,
} from 'list'
import Form from './form'

const filters = <Text
    placeholder='accountingNumber'
    property='number'
/>

const headers = <>
    <th start>accountingNumber</th>
    <th>accountingDate</th>
    <th>stateMachinesState</th>
</>

const row = item => <>
    <td>{item.number}</td>
    <DateTime value={item.date} />
    <td>{item.journalEntryStatus}</td>
</>

export default <List
    create={Form}
    filters={filters}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
