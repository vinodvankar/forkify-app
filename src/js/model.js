export const state = {
  recipe: {},
};

export const loadRecipe = async id => {
  try {
    const res = await fetch(
      // 'https://forkify-api.herokuapp.com/api/get?rId=47746'
      `https://forkify-api.herokuapp.com/api/get?rId=${id}`
      // 'https://forkify-api.herokuapp.com/api/search?q=pizza'
    );
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`${data.messages}(${data.status})`);
    }
    let { recipe } = data;

    state.recipe = {
      id: recipe.recipe_id,
      title: recipe.title,
      publisher: recipe.publisher,
      ingredients: recipe.ingredients,
      sourceUrl: recipe.source_url,
      cookingTime: recipe.cookingTime,
      image: recipe.image_url,
    };
    console.log(state.recipe);
  } catch (err) {
    console.log(err);
  }
};
