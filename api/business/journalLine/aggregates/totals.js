[
    {
        $group: {
            _id: null,
            credit: { $sum: '$credit' },
            debit: { $sum: '$debit' },
        },
    },
]
