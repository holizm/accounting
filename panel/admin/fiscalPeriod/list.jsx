import {
    DateTime,
    List,
    Title,
} from 'list'
import Form from './form'

const headers = <>
    <th start>accountingFiscalPeriod</th>
    <th>accountingStartDate</th>
    <th>accountingEndDate</th>
</>

const row = item => <>
    <td>{item.title}</td>
    <DateTime value={item.startDate} />
    <DateTime value={item.endDate} />
</>

export default <List
    create={Form}
    filters={<Title />}
    hasDelete
    hasEdit
    headers={headers}
    row={row}
/>
