import { DateTime } from 'list'

export default item => <>
    <td>{item.number}</td>
    <DateTime value={item.date} />
    <td>{item.journalEntryStatus}</td>
</>
