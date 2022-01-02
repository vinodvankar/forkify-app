import 'core-js/stable';
import 'regenerator-runtime';
import * as model from './model';
import recipeView from './views/recipeView';

const recipeContainer = document.querySelector('.recipe');

const timeout = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${s} second`));
    }, s * 1000);
  });
};

// https://forkify-api.herokuapp.com/v2

//fetching data from api
const controlRecipe = async () => {
  try {
    const id = window.location.hash.slice(1);
    if (!id) return;

    // render spinner
    recipeView.renderSpinner();

    // loading recipe
    await model.loadRecipe(id);

    // redering recipe
    recipeView.render(model.state.recipe);
  } catch (err) {
    console.log(err);
  }
};
// controlRecipe();

// window.addEventListener('hashchange', controlRecipe);
['hashchange', 'load'].forEach(e => {
  window.addEventListener(e, controlRecipe);
});
