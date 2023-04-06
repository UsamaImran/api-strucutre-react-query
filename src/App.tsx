import { usePosts } from './api/usePostsApi'

function App() {
    const { data } = usePosts()

    return (
        <div className="App">
            <h1>API Structure Testing</h1>
            {JSON.stringify(data?.length)}
            <hr />
            {JSON.stringify(data?.map((item: any) => item.title))}
        </div>
    )
}

export default App
