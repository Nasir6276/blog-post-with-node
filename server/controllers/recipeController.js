require('../models/database');
const Category = require('../models/Category');
const Recipe = require('../models/Recipe');


/**
 * GET
 * Homepage
 */
exports.homepage = async (req, res)=> {

    try {
        const limitNumber = 5;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('index', { title: 'Recipe Blog', categories } );
    } catch (error) {
        res.status(500).send({ message: error.message || "Error occured" });
    }
    
}


/**
 * GET /categories
 * Categories
 */
exports.exploreCategories = async (req, res)=> {
    try {
        const limitNumber = 20;
        const categories = await Category.find({}).limit(limitNumber);
        res.render('categories', { title: 'Recipe Blog - Categories', categories } );
    } catch (error) {
        res.status(500).send({ message: error.message || "Error occured" });
    }
}
  















// async function insertMycategoryData() {
//     try {
//         await Category.insertMany([
//             {
//                 "name": "Thai",
//                 "image": "thai-food.jpg"
//             },
//             {
//                 "name": "American",
//                 "image": "american-food.jpg"
//             },
//             {
//                 "name": "Chainese",
//                 "image": "chinese-food.jpg"
//             },
//             {
//                 "name": "Indian",
//                 "image": "indian-food.jpg"
//             },
//             {
//                 "name": "Mexican",
//                 "image": "mexican-food.jpg"
//             },
//         ]);
//     } catch (error) {
//         console.log('err', + error);
//     }
// }

// insertMycategoryData();

async function insertMyRecipeData() {
    try {
        await Recipe.insertMany();
    } catch (error) {
        console.log('err', + error);
    }
}

insertMyRecipeData();