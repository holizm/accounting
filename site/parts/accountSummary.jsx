export default ({ account }) => <dl class='accountSummary'>
    <dt class='title'>{account?.title}</dt>
    <dd class='code'>{account?.code}</dd>
    <dd class='type'>{account?.accountType}</dd>
</dl>
