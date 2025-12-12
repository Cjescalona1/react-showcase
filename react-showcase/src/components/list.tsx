import { Suspense, lazy, } from "react";
const ListD = lazy(() => import('./listData.tsx'));

function List() {
    return (
        <>
            <h1>Random User List</h1>
            <Suspense fallback={<div className="flex justify-center items-center">Waiting for content</div>}>
                <ListD />
            </Suspense>

        </>
    )
}
export default List;