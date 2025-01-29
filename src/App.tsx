import { useState } from 'react'
import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query' 
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import {fetchData} from '../mock-fetch'

const queryClient = new QueryClient()


function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <PaymentTransactionsTable />
      <ReactQueryDevtools initialIsOpen />
    </QueryClientProvider>

  )
}

export default App


function PaymentTransactionsTable() {
  const [paginationOptions, setPaginationOptions] = useState({
    offset:1,
    count: 5
  })
  const dataQuery = useQuery({queryKey: ['data', paginationOptions], queryFn: () => fetchData(paginationOptions) })

  return (
    <div>
      <table>
        <tr>
          <th>Id</th>
          <th>Date</th>
          <th>Description</th>
          <th>Amount</th>
        </tr>
          {dataQuery.data?.map((i: any) =>
          <>
          <tr>
            <td key={i.id}>{i.id}</td>
            <td key={i.id}>{i.date.getUTCDate()}</td>
            <td key={i.id}>{i.description}</td>
            <td key={i.id}>{`$ ${i.amount}`}</td>
          </tr>
          </>
        )}
      </table>
      <div>
        <button onClick={() => setPaginationOptions({
          offset:1,
          count: 5
        })}>
          Previous
        </button>
        <button onClick={() => setPaginationOptions({
          offset:1,
          count: 5
        })}>
          Next
        </button>
      </div>
    </div>
  )
}
