const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a";

const fetchDrinks = async () => {
  await new Response((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(url);
  //throw error
  if (!response.ok) {
    throw new Error("Failed to fetch drinks");
  }
  const data = await response.json();
  return data;
};

const DrinksPage = async () => {
  const data = await fetchDrinks();
  return (
    <div>
      <h1 className="text-7xl">DrinksPage</h1>
    </div>
  );
};
export default DrinksPage;
