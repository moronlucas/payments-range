const fakeData = [
    {
        id: 1,
        date: new Date(),
        description: 'Description 1',
        amount: 300
    },
    {
        id: 2,
        date: new Date(),
        description: 'Description 2',
        amount: 400
    },
    {
        id: 3,
        date: new Date(),
        description: 'Description 3',
        amount: 500
    },
    {
        id: 4,
        date: new Date(),
        description: 'Description 4',
        amount: 600
    },
    {
        id: 5,
        date: new Date(),
        description: 'Description 5',
        amount: 700
    },
]

export function fetchData(paginationOptions: any) {
    // const { currentPage, page } = paginationOptions
    // const total = fakeData.length
    // const paginatedData = fakeData.slice(offset, count)

    return Promise.resolve(fakeData)

}