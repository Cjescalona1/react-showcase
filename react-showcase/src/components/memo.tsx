import { useCallback, useState, useEffect } from "react";
import { dataSet } from "../assets/data.tsx"
import type { user } from "../assets/data.tsx"

function Memo() {
    const localData: user[] = dataSet;
    const [filteredData, setFilteredData] = useState<user[]>([]);
    const [gender, setGender] = useState("");

    // Memoized filter function - only recreated when gender changes
    const memoizedFilter = useCallback(() => {
        console.log('🔄 memoizedFilter function is being CALLED (executing the filter logic)');
        return localData.filter((item) => item.gender === gender);
    }, [gender]);

    // This effect runs when the component mounts and whenever memoizedFilter changes
    useEffect(() => {
        console.log('✨ memoizedFilter function was RECREATED (new function instance created)');
    }, [memoizedFilter]);

    // Call the memoized filter function when gender changes
    useEffect(() => {
        if (gender) {
            console.log(`🎯 Filtering for gender: "${gender}"`);
            const result = memoizedFilter();
            setFilteredData(result);
            console.log(`✅ Found ${result.length} users`);
        } else {
            setFilteredData([]);
        }
    }, [gender, memoizedFilter]);

    return (
        <>
            <h1>Memo</h1>
            <p>useMemo and useCallback are hooks that are used to optimize performance by memoizing values and functions.</p>
            <p>useMemo is used to memoize values, it is used to memoize the result of a function.</p>
            <p>useCallback is used to memoize functions, it is used to memoize the function itself.</p>
            <br />
            <div className="twoSections">
                <section>
                    <h1>full set </h1>
                    <ol>
                        {localData.map((item, index) => (
                            <li key={index}>
                                <b>
                                    {item.name}
                                </b>
                                <br />
                                <i>
                                    {item.gender}
                                </i>
                            </li>
                        ))}
                    </ol>
                </section>
                <section>
                    <h1>Filtered set</h1>
                    <div className="twoSection">
                        <button onClick={() => { setGender("male") }}>Male</button>

                        <button onClick={() => { setGender("female") }}>Female</button>
                    </div>
                    <ol>
                        {filteredData.map((item, index) => (
                            <li key={index}>
                                <b>
                                    {item.name}
                                </b>
                                <br />
                                <i>
                                    {item.gender}
                                </i>
                            </li>
                        ))}
                    </ol>
                </section>

            </div>

        </>
    )
}
export default Memo