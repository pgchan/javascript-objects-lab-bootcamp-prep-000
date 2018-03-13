var recipes = {};

function updateObjectWithKeyAndValue(object, key, value){
  recipes[key] = value;
  return recipes;
}


 return Object.assign({}, object, { [key]:value })