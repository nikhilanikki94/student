const express = require('express');

const booksRouter = express.Router()


var { addModel } = require('../models/addModel');
var test;

function router(nav) {


    var books = [
        {
            title: "War and Peace",
            genre: "Historical Fiction",
            author: "Lev Nicolayavich",
            image: "download.jfif"
        },
        {
            title: "Les Miserables",
            genre: "Historical Fiction",
            author: "victor Hugo",
            image: "imagee.jpg"
        },
        {
            title: "Broken Wings",
            genre: "Historical Fiction",
            author: "Sarojoni Naidu",
            image: "book3.jpg"
        }
    ];

    booksRouter.route('/')
        .get((req, res) => {
            addModel.find((error,data)=>{
                if(error){
                    throw error;
                }
                else{
                    test=data;          
                  res.render(
                'books',
                {
                    nav,
                    title: "BOOKS",
                    books:data
                }
            );
        }
        });
    })
    booksRouter.route('/addbooks')
        .get((req, res) => {
            res.render(


                'addBook.ejs',
                {
                    nav,
                    title: "AddBooks",
                    books
                }
            )
        })
    booksRouter.route('/save')
        .post((req, res) => {
            var book = new addModel(req.body);
            book.save((error, data) => {
                if (error) {

                    res.json({ "status": "error" });
                    throw error;

                }
                else {
                    res.json({ "status": "success" })

                }
            });

        })
    booksRouter.get('/viewAllapi', (req, res) => {
        addModel.find((error, data) => {
            if (error) {

                throw error;
            }
            else {
                res.send(data);

            }
        })
    })
    booksRouter.route('/:id')
        .get((req, res) => {
            const id = req.params.id;
            res.render(
                'book',
                {
                    nav,
                    title: "BOOK",
                    book: test[id]
                }
            )
        })
    return booksRouter;
}
module.exports = router;