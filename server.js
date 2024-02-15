import express from 'express'
import articleRouter from "./routes/articles.js"
import Article from './models/article.js'
import mongoose from 'mongoose'
import methodOverride from 'method-override'
const app = express()



mongoose.connect('mongodb://127.0.0.1:27017/bharatInternDatabase');
app.set('view engine', 'ejs')

app.use(express.urlencoded({extended: false}))
app.use(methodOverride('_method'))
app.get('/', async(req, res) => {
    const articles =await Article.find().sort({ createdAt:'desc'})
    res.render('articles/index.ejs', { articles: articles })
})

app.use('/articles', articleRouter)

app.listen(3000)