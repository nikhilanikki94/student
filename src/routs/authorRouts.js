const express = require('express');
const authorsRouter = express.Router();
function router(nav) {
    var authors = [
        {
            bookName: "War and Peace",
            author: "Lev Nicolayavich",
            dob: 'DOB:22-05-1994',
            image: "tols.jfif"

        },
        {
            bookName: "Les Miserables",
            author: "victor Hugo",
            dob: 'DOB:11-07-1992',
            image: "hugo.jfif"
        },
        {
            bookName: "Broken Wings",
            author: "Sarojoni Naidu",
            dob: 'DOB:22-03-2018',
            image: "sarojini.jfif"
        }
    ];
    authorsRouter.route('/')
        .get((req, res) => {

            res.render(
                'authors',
                {
                    nav,
                    title: "AUTHORS",
                    authors
                }
            )
        })
    authorsRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render(
                'author',
                {
                    nav,
                    title: "AUTHOR",
                    author: authors[id]
                }
            )
        })
    return authorsRouter;
}
module.exports = router;