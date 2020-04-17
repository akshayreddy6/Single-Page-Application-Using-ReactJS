import React, {Component} from 'react';
import './App.css';
import Blog from './Blog';
import Post from './Post';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";




class App extends Component {

    constructor(props) {
       super(props);
       this.state = {
           news: null
       }
    }
    componentDidMount(){
        this.updateNews();
    }

    updateNews() {
        this.getNews();
        setTimeout(() => {
            this.updateNews();
        }, 5000);
    }

    getNews(){
        let url = 'http://newsapi.org/v2/everything?' +
            'q=Animals&' +
            'from=2020-04-14&' +
            'sortBy=popularity&' +
            'apiKey=229a360ea44c40819fecef95852842e9';

        let req = new Request(url);

        fetch(req)
            .then((response) => {
                return response.json();
            })
            .then((news) => {
                this.setState({news});
            })
    }

    render() {
        let news = this.state.news;
        return (
            <div className="App">
                <Router>
                    <header className="header">
                        Blog about animals
                    </header>
                    <div className="container main">
                        <div className="col-md-8">

                            <Switch>
                                <Route exact path="/">
                                    <Blog/>
                                </Route>
                                <Route path="/post/:topicId">
                                    <Post/>
                                </Route>
                            </Switch>

                        </div>
                        <div className="col-md-4 nav">
                            <h4 style={{marginTop: 25}}><Link to='/'>Home</Link></h4>
                            <div className="col-md-12"> <hr/></div>
                            <div>
                                {
                                    news &&
                                        news.articles.map((article, index) => {
                                            if(index < 3){
                                                return (
                                                    <div className="col-md-12" key={index}>
                                                        <h5><a href={article.url}>{article.title}</a></h5>
                                                        <img src={article.urlToImage} width="100%"/>
                                                        <div className="col-md-12 line"></div>
                                                    </div>
                                                )
                                            }
                                        })
                                }
                            </div>
                        </div>
                    </div>
                    <footer className="footer">
                        <div>Thank you for your visit!</div>
                    </footer>
                </Router>
            </div>
        );
    }
}

export default App;
