import React from 'react';
import { useQuery } from '@apollo/client'
import { getUserList } from './graphql/apis/user'

function App() {
  const { loading, error, data } = useQuery(getUserList)
  if (loading) {
    return <>loading</>
  }
  if (error) {
    return <>error</>
  }
  return (
    <pre>
      {JSON.stringify(data, null, 2)}
    </pre>
  );
}

export default App;
