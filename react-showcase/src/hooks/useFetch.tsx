async function getData(setter: any, url: string, signal?: AbortSignal) {
    try {
        const response = await fetch(url, { signal });
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        await setter(result);

    } catch (error: any) {
        if (error.name === 'AbortError') {
            console.log('Fetch aborted');
        } else {
            console.error(error.message);
        }
    }
}
export default getData;