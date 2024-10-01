const mongoose = require("mongoose");
const { Schema } = mongoose;

const BookSchema = new Schema(
    {
        title: { type: String},
        author: { type: String},
        genre: { type: String},
        rating: { type: Number},
        review:[
            {
                type: String,
            }
        ],
        ISBN: { type: String },
        totalpages: {type: Number},
        buylink: {type: String,},
        bookimage:{data: Buffer, contentType: String,}

    }
)

const Book = mongoose.model("Book", BookSchema);

module.exports = Book;