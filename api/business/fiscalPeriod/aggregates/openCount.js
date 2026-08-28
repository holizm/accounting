[
    { $match: { closed: { $ne: true } } },
    { $count: 'count' },
]
