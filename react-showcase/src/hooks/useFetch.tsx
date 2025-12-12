async function getData(setter: any, url: string) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }
        const result = await response.json();
        await setter(result);

    } catch (error: any) {
        console.error(error.message);
    }
}
export default getData;