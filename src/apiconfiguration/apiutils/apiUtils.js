export const fetchData =async (url) =>{

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        throw new Error('Error fetching data:', error);
    }
}